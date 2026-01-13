'use client'

import { useEffect, useState, useRef } from "react"
import { useFormContext } from "react-hook-form"
import { RiImageAddLine, RiGalleryLine, RiCloseLine, RiErrorWarningLine, RiDeleteBinLine } from "react-icons/ri"
import {
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"

const inputClass = "w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
const labelClass = "block text-slate-300 font-medium mb-2 text-sm"

export function TabMedia() {
  const { register, formState: { errors }, watch, setValue, getValues, trigger } = useFormContext()
  const galleryInputRef = useRef<HTMLInputElement>(null)

  // Watch values
  const thumbnailValue = watch("thumbnail")
  const galleryValue = watch("gallery")

  // Previews State
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null)
  const [galleryPreviews, setGalleryPreviews] = useState<{ url: string, isFile: boolean, original: File | string }[]>([])

  // --- 1. Sync Thumbnail Preview ---
  useEffect(() => {
    if (!thumbnailValue) {
      setThumbnailPreview(null)
      return
    }
    if (typeof thumbnailValue === 'string') {
      setThumbnailPreview(thumbnailValue)
    } else if (thumbnailValue instanceof FileList && thumbnailValue.length > 0) {
      const url = URL.createObjectURL(thumbnailValue[0])
      setThumbnailPreview(url)
      return () => URL.revokeObjectURL(url)
    } else if (thumbnailValue instanceof File) {
      const url = URL.createObjectURL(thumbnailValue)
      setThumbnailPreview(url)
      return () => URL.revokeObjectURL(url)
    }
  }, [thumbnailValue])

  // --- 2. Sync Gallery Preview ---
  useEffect(() => {
    if (!galleryValue) {
      setGalleryPreviews([])
      return
    }

    // Convert whatever is in 'galleryValue' (FileList or Array) to a standard Array
    const items = galleryValue instanceof FileList 
      ? Array.from(galleryValue) 
      : Array.isArray(galleryValue) ? galleryValue : [galleryValue];

    const newPreviews = items.map((item: File | string) => {
      if (typeof item === 'string') {
        return { url: item, isFile: false, original: item }
      } else {
        return { url: URL.createObjectURL(item), isFile: true, original: item }
      }
    })

    setGalleryPreviews(newPreviews)

    // Cleanup object URLs when component unmounts or gallery changes
    return () => {
      newPreviews.forEach(p => {
        if (p.isFile) URL.revokeObjectURL(p.url)
      })
    }
  }, [galleryValue])


  // --- Handlers ---

  const handleThumbnailRemove = () => {
    setValue('thumbnail', null)
    trigger('thumbnail') // Trigger validation immediately
  }

  const handleGalleryFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    // Get current gallery items (ensure it's an array)
    const currentItems = getValues('gallery')
    const currentArray = currentItems instanceof FileList 
      ? Array.from(currentItems) 
      : Array.isArray(currentItems) ? currentItems : (currentItems ? [currentItems] : [])

    // Combine current items with new files
    const newItems = [...currentArray, ...Array.from(files)]
    
    // Update form value
    setValue('gallery', newItems, { shouldValidate: true })
    
    // Reset input so same files can be selected again if needed
    if (galleryInputRef.current) galleryInputRef.current.value = ''
  }

  const handleGalleryRemove = (indexToRemove: number) => {
    const currentItems = getValues('gallery')
    const currentArray = currentItems instanceof FileList 
      ? Array.from(currentItems) 
      : Array.isArray(currentItems) ? currentItems : [currentItems]

    // Create new array without the item at indexToRemove
    const newItems = currentArray.filter((_, index) => index !== indexToRemove)
    
    setValue('gallery', newItems, { shouldValidate: true })
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* --- Thumbnail --- */}
      <FormField
        name="thumbnail"
        render={() => (
          <FormItem>
            <FormLabel className={labelClass}>Thumbnail Image <span className="text-red-400">*</span></FormLabel>
            
            <div className={cn(
              "relative border-2 border-dashed rounded-lg transition-all overflow-hidden group",
              errors.thumbnail ? "border-red-500 bg-red-500/5" : "border-slate-600 hover:border-cyan-500 bg-slate-800/50"
            )}>
              {/* Input is only clickable if no preview exists */}
              <input 
                type="file" 
                accept="image/*"
                className={cn(
                  "absolute inset-0 w-full h-full opacity-0 z-10",
                  thumbnailPreview ? "pointer-events-none" : "cursor-pointer"
                )}
                {...register("thumbnail")}
              />

              {thumbnailPreview ? (
                <div className="relative w-full h-64">
                   <img src={thumbnailPreview} alt="Thumbnail preview" className="w-full h-full object-cover" />
                   
                   {/* Remove Button */}
                   <button 
                     type="button"
                     onClick={handleThumbnailRemove}
                     className="absolute top-3 right-3 z-20 bg-red-600 hover:bg-red-500 text-white p-2 rounded-lg shadow-lg transition-colors flex items-center gap-2"
                   >
                     <RiDeleteBinLine className="w-4 h-4" />
                     <span className="text-xs font-bold">Remove</span>
                   </button>
                </div>
              ) : (
                <div className="p-8 text-center cursor-pointer pointer-events-none">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-slate-700 text-slate-400">
                    <RiImageAddLine className="text-3xl" />
                  </div>
                  <p className="text-white font-medium mb-2">Drop thumbnail here or click to browse</p>
                  <p className="text-slate-400 text-sm">Max 1MB</p>
                </div>
              )}
            </div>
            {errors.thumbnail && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <RiErrorWarningLine className="mr-1.5 w-4 h-4" /> {errors.thumbnail.message as string}
              </p>
            )}
          </FormItem>
        )}
      />

      {/* --- Gallery --- */}
      <FormField
        name="gallery"
        render={() => (
          <FormItem>
            <FormLabel className={labelClass}>Gallery Images</FormLabel>
            
            {/* 1. The Dropzone (Always visible to add MORE files) */}
            <div className={cn(
               "relative border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer group hover:border-cyan-500 bg-slate-800/50",
               errors.gallery ? "border-red-500" : "border-slate-600"
            )}>
              {/* Manually handled input */}
              <input 
                ref={galleryInputRef}
                type="file" 
                multiple
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                onChange={handleGalleryFilesSelected}
              />
              
              <div className="flex flex-col items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-3 group-hover:bg-slate-600">
                   <RiGalleryLine className="text-2xl text-slate-400" />
                </div>
                <p className="text-white font-medium text-sm">Click or Drop to Add Images</p>
                <p className="text-slate-500 text-xs mt-1">Files are appended to list</p>
              </div>
            </div>

            {/* 2. The Previews Grid (With Remove Buttons) */}
            {galleryPreviews.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {galleryPreviews.map((item, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-slate-700 group">
                    <img src={item.url} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                    
                    {/* Remove Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        type="button"
                        onClick={() => handleGalleryRemove(index)}
                        className="bg-red-600 hover:bg-red-500 text-white p-2 rounded-full transition-transform hover:scale-110"
                      >
                        <RiDeleteBinLine className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {errors.gallery && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <RiErrorWarningLine className="mr-1.5 w-4 h-4" /> {errors.gallery.message as string}
              </p>
            )}
          </FormItem>
        )}
      />

      {/* --- URLs Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Demo URL</label>
          <input {...register("demo_url")} placeholder="https://..." className={inputClass} type="url" />
        </div>
        <div>
          <label className={labelClass}>Source Code URL</label>
          <input {...register("source_code_url")} placeholder="https://..." className={inputClass} type="url" />
        </div>
      </div>

    </div>
  )
}