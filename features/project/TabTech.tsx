'use client'

import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { RiAddLine, RiCloseLine } from "react-icons/ri"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const inputClass = "w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
const labelClass = "block text-slate-300 font-medium mb-2 text-sm"

export function TabTech() {
  const { register, setValue, watch } = useFormContext()
  const techStack = watch("tech_stack") || []
  const [tagInput, setTagInput] = useState("")

  const addTag = () => {
    if (tagInput.trim() && !techStack.includes(tagInput.trim())) {
      setValue("tech_stack", [...techStack, tagInput.trim()])
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setValue("tech_stack", techStack.filter((t: string) => t !== tagToRemove))
  }

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      
      {/* Tech Stack (Tags) */}
      <div>
        <label className="block text-slate-300 font-medium mb-2 text-sm">Tech Stack (Tags)</label>
        <div className="flex gap-2 mb-3">
          <input 
            placeholder="Add technology..." 
            className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" 
            type="text" 
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
          />
          <button 
            type="button" 
            onClick={addTag}
            className="px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors whitespace-nowrap"
          >
            <RiAddLine className="w-5 h-5 flex items-center justify-center" />
          </button>
        </div>
        
        {/* Render Tags */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tag: string) => (
            <span key={tag} className="bg-slate-600 text-white px-3 py-1 rounded-md text-sm flex items-center gap-2">
              {tag}
              <button type="button" onClick={() => removeTag(tag)} className="text-slate-400 hover:text-white">
                <RiCloseLine />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Standard Inputs */}
      <div>
        <label className={labelClass}>Frontend Technologies</label>
        <input {...register("frontend")} placeholder="e.g., React, Vue, Angular" className={inputClass} type="text" />
      </div>

      <div>
        <label className={labelClass}>Backend Technologies</label>
        <input {...register("backend")} placeholder="e.g., Node.js, Python, Java" className={inputClass} type="text" />
      </div>

      <div>
        <label className={labelClass}>Database</label>
        <input {...register("database")} placeholder="e.g., PostgreSQL, MongoDB, MySQL" className={inputClass} type="text" />
      </div>
    </div>
  )
}