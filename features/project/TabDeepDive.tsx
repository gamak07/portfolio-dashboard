'use client'

import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { RiAddLine, RiCloseLine } from "react-icons/ri"

const inputClass = "w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
const labelClass = "block text-slate-300 font-medium mb-2 text-sm"

export function TabDeepDive() {
  const { register, watch, setValue } = useFormContext()
  
  // Logic for Features List
  const features = watch("features") || []
  const [featureInput, setFeatureInput] = useState("")

  const addFeature = () => {
    if (featureInput.trim()) {
      setValue("features", [...features, featureInput.trim()])
      setFeatureInput("")
    }
  }
  const removeFeature = (idx: number) => {
    setValue("features", features.filter((_: any, i: number) => i !== idx))
  }

  // Logic for General Tags
  const tags = watch("tags") || []
  const [tagInput, setTagInput] = useState("")

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setValue("tags", [...tags, tagInput.trim()])
      setTagInput("")
    }
  }
  const removeTag = (tagToRemove: string) => {
    setValue("tags", tags.filter((t: string) => t !== tagToRemove))
  }

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      
      {/* Features List */}
      <div>
        <label className={labelClass}>Features</label>
        <div className="flex gap-2 mb-3">
          <input 
            placeholder="Add a feature..." 
            className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" 
            type="text" 
            value={featureInput}
            onChange={(e) => setFeatureInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
          />
          <button 
            type="button" 
            onClick={addFeature}
            className="px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors whitespace-nowrap"
          >
            <RiAddLine className="w-5 h-5 flex items-center justify-center" />
          </button>
        </div>
        <div className="space-y-2">
          {features.map((feature: string, idx: number) => (
             <div key={idx} className="flex items-center justify-between bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2">
                <span className="text-slate-300 text-sm">{feature}</span>
                <button type="button" onClick={() => removeFeature(idx)} className="text-slate-500 hover:text-red-400">
                  <RiCloseLine />
                </button>
             </div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div>
        <label className={labelClass}>Challenges</label>
        <textarea 
          {...register("challenges")}
          rows={5} 
          placeholder="Describe the challenges you faced..." 
          className={`${inputClass} resize-none`}
        ></textarea>
      </div>

      {/* Learnings */}
      <div>
        <label className={labelClass}>Learnings</label>
        <textarea 
          {...register("learnings")}
          rows={5} 
          placeholder="What did you learn from this project..." 
          className={`${inputClass} resize-none`}
        ></textarea>
      </div>

      {/* General Tags */}
      <div>
        <label className={labelClass}>Tags</label>
        <div className="flex gap-2 mb-3">
          <input 
            placeholder="Add a tag..." 
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
        <div className="flex flex-wrap gap-2">
           {tags.map((tag: string) => (
            <span key={tag} className="bg-slate-600 text-white px-3 py-1 rounded-md text-sm flex items-center gap-2">
              {tag}
              <button type="button" onClick={() => removeTag(tag)} className="text-slate-400 hover:text-white">
                <RiCloseLine />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}