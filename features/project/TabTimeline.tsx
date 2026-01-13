'use client'

import { useEffect } from "react"
import { useFormContext } from "react-hook-form"

const inputClass = "w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
const labelClass = "block text-slate-300 font-medium mb-2 text-sm"

// --- Helper: Calculate Readable Duration ---
function calculateDuration(start: string, end: string): string {
  if (!start || !end) return ""

  const startDate = new Date(start)
  const endDate = new Date(end)

  if (startDate > endDate) return "Invalid Range"

  // Calculate difference in total months
  let months = (endDate.getFullYear() - startDate.getFullYear()) * 12
  months -= startDate.getMonth()
  months += endDate.getMonth()

  // Handle years
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  const parts = []
  
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`)
  }
  
  if (remainingMonths > 0) {
    parts.push(`${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`)
  }

  // If less than a month, calculate days/weeks roughly
  if (years === 0 && remainingMonths === 0) {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) 
    
    if (diffDays === 0) return "1 day" // Same day
    if (diffDays < 7) return `${diffDays} ${diffDays === 1 ? 'day' : 'days'}`
    
    const weeks = Math.floor(diffDays / 7)
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'}`
  }

  return parts.join(", ")
}

export function TabTimeline() {
  const { register, watch, setValue } = useFormContext()

  // 1. Watch the date fields
  const startDate = watch("start_date")
  const endDate = watch("end_date")

  // 2. Automatically update duration when dates change
  useEffect(() => {
    if (startDate && endDate) {
      const durationString = calculateDuration(startDate, endDate)
      if (durationString !== "Invalid Range") {
        setValue("duration", durationString, { shouldValidate: true })
      }
    }
  }, [startDate, endDate, setValue])

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
        <label className={labelClass}>Duration (Auto-calculated)</label>
        <input 
          {...register("duration")}
          placeholder="e.g., 3 months, 6 weeks" 
          className={inputClass} 
          type="text" 
          readOnly
        />
        <p className="text-slate-500 text-xs mt-1">
           Automatically calculated based on start and end dates.
        </p>
      </div>
    </div>
  )
}