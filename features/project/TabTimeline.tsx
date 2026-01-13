'use client'

import { useFormContext } from "react-hook-form"

const inputClass = "w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
const labelClass = "block text-slate-300 font-medium mb-2 text-sm"

export function TabTimeline() {
  const { register } = useFormContext()

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Start Date</label>
          <input 
            {...register("start_date")}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors scheme-dark" 
            type="date" 
          />
        </div>
        <div>
          <label className={labelClass}>End Date</label>
          <input 
            {...register("end_date")}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors scheme-dark" 
            type="date" 
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>Duration</label>
        <input 
          {...register("duration")}
          placeholder="e.g., 3 months, 6 weeks" 
          className={inputClass} 
          type="text" 
        />
      </div>
    </div>
  )
}