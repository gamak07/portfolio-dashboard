'use client'

import { useFormContext } from "react-hook-form"
import { RiStarLine } from "react-icons/ri"
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

// Define the custom styles you provided
const inputClass = "w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
const labelClass = "block text-slate-300 font-medium mb-2 text-sm"

export function TabBasicInfo() {
  const { register, formState: { errors }, watch, setValue } = useFormContext()
  const featured = watch('featured')

  return (
    <div className="space-y-5">
      
      {/* Title & Slug */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Title *</label>
          <input 
            {...register("title")}
            placeholder="Enter project title" 
            className={inputClass} 
            type="text" 
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message as string}</p>}
        </div>
        <div>
          <label className={labelClass}>Slug *</label>
          <input 
            {...register("slug")}
            placeholder="project-url-slug" 
            className={inputClass} 
            type="text" 
          />
          {errors.slug && <p className="text-red-500 text-xs mt-1">{errors.slug.message as string}</p>}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className={labelClass}>Description *</label>
        <textarea 
          {...register("description")}
          rows={4} 
          placeholder="Describe your project..." 
          className={`${inputClass} resize-none`}
        ></textarea>
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message as string}</p>}
      </div>

      {/* Featured Toggle - Custom Implementation to match your HTML */}
      <div className="flex items-center gap-3 bg-slate-700 border border-slate-600 rounded-lg p-4">
        <input 
          id="featured" 
          type="checkbox"
          className="w-5 h-5 bg-slate-600 border-slate-500 rounded cursor-pointer accent-cyan-500"
          checked={featured}
          onChange={(e) => setValue('featured', e.target.checked)}
        />
        <label htmlFor="featured" className="text-slate-300 font-medium cursor-pointer flex items-center">
          <RiStarLine className="mr-2 text-yellow-400 w-4 h-4" />
          Mark as Featured Project
        </label>
      </div>

      {/* Dropdowns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Type */}
        <div>
          <label className={labelClass}>Type *</label>
          <select {...register("type")} className={`${inputClass} cursor-pointer`}>
            <option value="Web">Web</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className={labelClass}>Status *</label>
          <select {...register("status")} className={`${inputClass} cursor-pointer`}>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Paused">Paused</option>
            <option value="In Review">In Review</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className={labelClass}>Category *</label>
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