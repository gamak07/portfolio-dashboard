'use client'

import { RiSearchLine } from 'react-icons/ri'

export function ContentToolbar() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-center gap-4">
      <div className="flex-1 w-full">
        <div className="relative">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search content..." 
            className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" 
          />
        </div>
      </div>
      <select className="w-full sm:w-auto bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors cursor-pointer">
        <option value="all">All Status</option>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
        <option value="archived">Archived</option>
      </select>
    </div>
  )
}