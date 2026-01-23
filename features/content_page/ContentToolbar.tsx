

'use client'

import { RiSearchLine } from 'react-icons/ri'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react' 

export function ContentToolbar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const activeTab = searchParams.get('tab') || 'projects'
  const searchQuery = searchParams.get('q') || ''
  const filterValue = searchParams.get('status') || 'all'

  const updateParams = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (value && value !== 'all') {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [searchParams, pathname, router])

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-center gap-4">
      
      <div className="flex-1 w-full">
        <div className="relative">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder={activeTab === 'projects' ? "Search projects..." : "Search blog posts..."}
            defaultValue={searchQuery}
            onChange={(e) => updateParams('q', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" 
          />
        </div>
      </div>

      <select 
        value={filterValue}
        onChange={(e) => updateParams('status', e.target.value)}
        className="w-full sm:w-auto bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors cursor-pointer"
      >
        {activeTab === 'blogs' ? (
          <>
            <option value="all">All Status</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Archived">Archived</option>
          </>
        ) : (
          <>
            <option value="all">All Projects</option>
            <option value="Published">Published</option>
            <option value="Completed">Completed</option>
            <option value="In Review">In Review</option>
            <option value="In Progress">In Progress</option>
            <option value="Paused">Paused</option>
          </>
        )}
      </select>
    </div>
  )
}