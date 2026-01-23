"use client";

import { useDeleteBlog } from "@/hooks/useBlogs";
import { Blog } from "@/lib/types/blog";
import React from "react";
import { RiAlertLine, RiInformationLine, RiDeleteBinLine } from "react-icons/ri";
import { toast } from "sonner";

interface BlogDeleteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blog: Blog; 
}

export function BlogDeleteModal({ open, onOpenChange, blog }: BlogDeleteModalProps) {
  if (!open) return null;

  const { mutateAsync: deleteProject, isPending } = useDeleteBlog()
  
    if (!open || !blog) return null
  
    // 2. Handle Deletion Logic
    const handleDelete = async () => {
      try {
        // Execute the mutation (API Call)
        await toast.promise(deleteProject(blog.id), {
          loading: 'Deleting blog post and cleaning up files...',
          success: 'Blog post deleted successfully',
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
              <RiAlertLine className="text-red-400 text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Delete Blog Post</h2>
              <p className="text-slate-400 text-sm mt-1">This action cannot be undone</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-slate-300 leading-relaxed">
            Are you sure you want to delete <span className="font-semibold text-white">"{blog?.title || 'this post'}"</span>? 
            This will permanently remove the blog post and all associated data.
          </p>
          
          <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <RiInformationLine className="text-red-400 text-lg mt-0.5 shrink-0" />
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
            <RiDeleteBinLine className="mr-2 w-4 h-4" />
            Delete Post
          </button>
        </div>
      </div>
    </div>
  );
}