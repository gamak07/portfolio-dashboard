'use client'

import { useDeleteProject } from "@/hooks/useProject"
import { Project } from "@/lib/types/project"
import { RiAlertLine, RiInformationLine, RiDeleteBinLine, RiLoader4Line } from "react-icons/ri"
import { toast } from "sonner"

interface ProjectDeleteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  project: Project
  onConfirm: () => void
}

export function ProjectDeleteModal({ open, onOpenChange, project, onConfirm }: ProjectDeleteModalProps) {
  const { mutateAsync: deleteProject, isPending } = useDeleteProject()

  if (!open || !project) return null

  // 2. Handle Deletion Logic
  const handleDelete = async () => {
    try {
      // Execute the mutation (API Call)
      await toast.promise(deleteProject(project.id), {
        loading: 'Deleting project and cleaning up files...',
        success: 'Project deleted successfully',
        error: (err) => `Failed to delete: ${err.message}`
      })
      
      // Close modal on success
      onOpenChange(false)
    } catch (error) {
      // Error is handled by toast, we just catch to prevent crash
      console.error(error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
              <RiAlertLine className="text-red-400 text-2xl w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Delete Project</h2>
              <p className="text-slate-400 text-sm mt-1">This action cannot be undone</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-slate-300 leading-relaxed">
            Are you sure you want to delete <span className="font-semibold text-white">"{project.title}"</span>? This will permanently remove the project and all associated data.
          </p>
          
          <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <RiInformationLine className="text-red-400 text-lg w-5 h-5 mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-red-400 text-sm font-medium">Warning</p>
                <p className="text-red-300 text-sm mt-1">
                  All analytics data, views, and engagement metrics will be lost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-700 bg-slate-800">
          <button 
            onClick={() => onOpenChange(false)}
            className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap"
          >
            Cancel
          </button>
          <button 
            onClick={handleDelete}
            className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition-colors whitespace-nowrap flex items-center"
          >
            {isPending ? (
               <RiLoader4Line className="mr-2 w-4 h-4 animate-spin" />
            ) : (
               <RiDeleteBinLine className="mr-2 w-4 h-4" />
            )}
            {isPending ? "Deleting..." : "Delete Project"}
          </button>
        </div>

      </div>
    </div>
  )
}