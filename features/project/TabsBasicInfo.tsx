'use client'

import { useEffect } from "react"
import { useFormContext } from "react-hook-form"
import { RiStarLine, RiLinkM } from "react-icons/ri" // Added link icon


const inputClass = "w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
const labelClass = "block text-slate-300 font-medium mb-2 text-sm"

// Utility to convert string to slug
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '')          // Trim - from end of text
}

export function TabBasicInfo() {
  const { register, formState: { errors }, watch, setValue } = useFormContext()
  
  const featured = watch('featured')
  const title = watch('title')

  // Auto-generate slug when Title changes
  useEffect(() => {
    if (title) {
      const generatedSlug = slugify(title)
      setValue('slug', generatedSlug, { shouldValidate: true })
    }
  }, [title, setValue])

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      
      {/* Title & Slug */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Title <span className="text-red-400">*</span></label>
          <input 
            {...register("title")}
            placeholder="Enter project title" 
            className={inputClass} 
            type="text" 
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message as string}</p>}
        </div>

        <div>
          <label className={labelClass}>Slug <span className="text-red-400">*</span></label>
          <div className="relative">
            <input 
              {...register("slug")}
              placeholder="project-url-slug" 
              className={`${inputClass} pl-10`} // Added padding for icon
              type="text" 
            />
            <RiLinkM className="absolute left-3 top-3 text-slate-500 w-4 h-4" />
          </div>
          <p className="text-slate-500 text-xs mt-1">Auto-generated from title</p>
          {errors.slug && <p className="text-red-500 text-xs mt-1">{errors.slug.message as string}</p>}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className={labelClass}>Description <span className="text-red-400">*</span></label>
        <textarea 
          {...register("description")}
          rows={4} 
          placeholder="Describe your project..." 
          className={`${inputClass} resize-none`}
        ></textarea>
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message as string}</p>}
      </div>

      {/* Featured Toggle */}
      <div className="flex items-center gap-3 bg-slate-700 border border-slate-600 rounded-lg p-4">
        <input 
          id="featured" 
          type="checkbox"
          className="w-5 h-5 bg-slate-600 border-slate-500 rounded cursor-pointer accent-cyan-500"
          checked={featured}
          onChange={(e) => setValue('featured', e.target.checked)}
        />
        <label htmlFor="featured" className="text-slate-300 font-medium cursor-pointer flex items-center select-none">
          <RiStarLine className="mr-2 text-yellow-400 w-4 h-4" />
          Mark as Featured Project
        </label>
      </div>

      {/* Dropdowns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Type */}
        <div>
          <label className={labelClass}>Type <span className="text-red-400">*</span></label>
          <select {...register("type")} className={`${inputClass} cursor-pointer`}>
            <option value="Web">Web</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className={labelClass}>Status <span className="text-red-400">*</span></label>
          <select {...register("status")} className={`${inputClass} cursor-pointer`}>
            <option value="Published">Published</option>
            <option value="Completed">Completed</option>
            <option value="In Review">In Review</option>
            <option value="In Progress">In Progress</option>
            <option value="Paused">Paused</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className={labelClass}>Category <span className="text-red-400">*</span></label>
          <select {...register("category")} className={`${inputClass} cursor-pointer`}>
            <option value="Personal">Personal</option>
            <option value="Freelance">Freelance</option>
            <option value="Hackathon">Hackathon</option>
          </select>
        </div>
      </div>
    </div>
  )
}