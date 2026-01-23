"use client";

import React from "react";
import { 
  RiArticleLine, RiCloseLine, RiCalendarLine, RiTimeLine, 
  RiEditLine, RiExternalLinkLine 
} from "react-icons/ri";
import { cn } from "@/lib/utils";
import { Blog } from "@/lib/types/blog";

interface BlogPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blog: Blog | null;
  onEdit: () => void;
}

export function BlogPreviewModal({ open, onOpenChange, blog, onEdit }: BlogPreviewModalProps) {
  if (!open || !blog) return null;

  // Helper for Status Color
  const getStatusColor = (status: string) => {
    switch(status?.toLowerCase()) {
      case 'published': return "bg-emerald-500/20 text-emerald-400";
      case 'archived': return "bg-orange-500/20 text-orange-400";
      default: return "bg-slate-700 text-slate-300";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center shrink-0">
              <RiArticleLine className="text-cyan-400 text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white line-clamp-1">{blog.title}</h2>
              <p className="text-slate-400 text-sm">Blog Post Preview</p>
            </div>
          </div>
          <button 
            onClick={() => onOpenChange(false)}
            className="w-10 h-10 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-colors"
          >
            <RiCloseLine className="text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
          <div className="space-y-6">
            
            {/* Meta Row */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className={cn("px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap", getStatusColor(blog.is_published ? 'Published' : 'Draft'))}>
                {blog.is_published ? 'Published' : 'Draft'}
              </span>
              <span className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded-full text-sm font-medium">
                {blog.category || 'Uncategorized'}
              </span>
              <span className="text-slate-400 text-sm flex items-center">
                <RiCalendarLine className="mr-1 w-4 h-4" />
                {blog.created_at ? new Date(blog.created_at).toLocaleDateString() : 'N/A'}
              </span>
              <span className="text-slate-400 text-sm flex items-center">
                <RiTimeLine className="mr-1 w-4 h-4" />
                {blog.reading_time_minutes} min read
              </span>
            </div>

            {/* Excerpt */}
            <div>
              <h3 className="text-slate-400 text-sm font-semibold mb-2">Excerpt</h3>
              <p className="text-white leading-relaxed">
                {blog.excerpt || "No excerpt provided."}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                <div className="text-slate-400 text-xs font-medium mb-1">Views</div>
                <div className="text-white text-2xl font-bold">{blog.views?.toLocaleString() || 0}</div>
              </div>
              {/* These are placeholders until you implement Comments/Shares in DB */}
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                <div className="text-slate-400 text-xs font-medium mb-1">Comments</div>
                <div className="text-white text-2xl font-bold">-</div>
              </div>
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                <div className="text-slate-400 text-xs font-medium mb-1">Shares</div>
                <div className="text-white text-2xl font-bold">-</div>
              </div>
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div>
                <h3 className="text-slate-400 text-sm font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Content Preview */}
            <div>
              <h3 className="text-slate-400 text-sm font-semibold mb-3">Content Preview</h3>
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 space-y-4">
                {/* Note: In a real app, you might use a Markdown renderer here */}
                <p className="text-white leading-relaxed line-clamp-6 whitespace-pre-line">
                  {blog.content || "No content available."}
                </p>
                <div className="pt-4 border-t border-slate-600">
                  <p className="text-slate-400 text-sm italic">
                    Continue reading to explore detailed examples and implementation strategies...
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-slate-700 bg-slate-800">
          <button 
            onClick={() => onOpenChange(false)}
            className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap"
          >
            Close
          </button>
          <div className="flex items-center gap-3">
            <button 
              onClick={onEdit}
              className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap flex items-center"
            >
              <RiEditLine className="mr-2 w-4 h-4" />
              Edit
            </button>
            <button className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg font-medium transition-colors whitespace-nowrap flex items-center">
              <RiExternalLinkLine className="mr-2 w-4 h-4" />
              View Live
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}