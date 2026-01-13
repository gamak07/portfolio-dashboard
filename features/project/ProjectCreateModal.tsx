'use client'

import { RiCloseLine } from "react-icons/ri"
import { ProjectFormWrapper } from "./ProjectFormWrapper"
import { Project } from "@/lib/types/project"

interface ProjectCreateModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialData?: Project 
}

export function ProjectCreateModal({ open, onOpenChange, initialData }: ProjectCreateModalProps) {
  if (!open) return null

  const isEditing = !!initialData

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between p-6 border-b border-slate-700 shrink-0">
          <h2 className="text-2xl font-bold text-white">
            {isEditing ? "Edit Project" : "Add New Project"}
          </h2>
          <button 
            onClick={() => onOpenChange(false)}
            className="w-10 h-10 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-colors"
          >
            <RiCloseLine className="text-xl w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col">
          <ProjectFormWrapper
            onSuccess={() => onOpenChange(false)} 
            initialData={initialData} 
          />
        </div>

      </div>
    </div>
  )
}