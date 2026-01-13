'use client'

import { RiCloseLine, RiFolderLine, RiStarFill, RiExternalLinkLine, RiGithubFill, RiEditLine } from "react-icons/ri"
import { useModal } from "@/lib/modalContext"

interface ProjectPreviewModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  project: any // In a real app, use the Project type
}

export function ProjectPreviewModal({ open, onOpenChange, project }: ProjectPreviewModalProps) {
  const { openModal } = useModal()

  if (!open || !project) return null

  // Helper to safely calculate CTR
  const calculateCTR = () => {
    // Remove commas if they exist in the mock data strings (e.g. "1,000" -> 1000)
    const views = Number(String(project.views).replace(/,/g, '')) || 0
    const clicks = Number(String(project.clicks).replace(/,/g, '')) || 0
    
    if (views === 0) return "0%"
    return ((clicks / views) * 100).toFixed(1) + "%"
  }

  const handleEditClick = () => {
    // Switch directly from Preview to Edit Modal
    openModal('project', project)
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <RiFolderLine className="text-cyan-400 text-xl w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <p className="text-slate-400 text-sm">Project Preview</p>
            </div>
          </div>
          <button 
            onClick={() => onOpenChange(false)}
            className="w-10 h-10 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-colors"
          >
            <RiCloseLine className="text-xl w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            
            {/* Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${
                 project.status === 'Published' || project.status === 'Completed'
                 ? 'bg-emerald-500/20 text-emerald-400' 
                 : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {project.status}
              </span>
              <span className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded-full text-sm font-medium">
                {project.category || project.type}
              </span>
              {project.isFeatured && (
                <span className="px-3 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium flex items-center gap-1">
                  <RiStarFill className="w-4 h-4" />
                  Featured
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-slate-400 text-sm font-semibold mb-2">Description</h3>
              <p className="text-white leading-relaxed">
                {project.description || "No description provided for this project."}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                <div className="text-slate-400 text-xs font-medium mb-1">Views</div>
                <div className="text-white text-2xl font-bold">{project.views || 0}</div>
              </div>
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                <div className="text-slate-400 text-xs font-medium mb-1">Clicks</div>
                <div className="text-white text-2xl font-bold">{project.clicks || 0}</div>
              </div>
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                <div className="text-slate-400 text-xs font-medium mb-1">CTR</div>
                <div className="text-white text-2xl font-bold">{calculateCTR()}</div>
              </div>
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                <div className="text-slate-400 text-xs font-medium mb-1">Last Updated</div>
                <div className="text-white text-sm font-medium">{project.updated || "N/A"}</div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-slate-400 text-sm font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {/* Fallback if tech_stack array doesn't exist in mock data */}
                {(project.tech_stack || ["React", "TypeScript", "Tailwind CSS"]).map((tech: string) => (
                  <span key={tech} className="px-3 py-1.5 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href={project.demo_url || "#"} target="_blank" className="flex items-center gap-3 bg-slate-700 border border-slate-600 rounded-lg p-4 hover:border-cyan-500 transition-colors">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <RiExternalLinkLine className="text-cyan-400 w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Live Demo</div>
                  <div className="text-slate-400 text-xs">View project</div>
                </div>
              </a>
              <a href={project.repo_url || "#"} target="_blank" className="flex items-center gap-3 bg-slate-700 border border-slate-600 rounded-lg p-4 hover:border-cyan-500 transition-colors">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <RiGithubFill className="text-cyan-400 w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Source Code</div>
                  <div className="text-slate-400 text-xs">View on GitHub</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-slate-700 bg-slate-800">
          <button 
            onClick={() => onOpenChange(false)}
            className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap"
          >
            Close
          </button>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleEditClick}
              className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap flex items-center"
            >
              <RiEditLine className="mr-2 w-4 h-4" />
              Edit
            </button>
            <a 
               href={project.demo_url || "#"}
               target="_blank"
               className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg font-medium transition-colors whitespace-nowrap flex items-center"
            >
              <RiExternalLinkLine className="mr-2 w-4 h-4" />
              View Live
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}