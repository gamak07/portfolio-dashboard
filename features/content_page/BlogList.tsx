"use client";

import { useModal } from "@/lib/modalContext";
import { RiEditLine, RiEyeLine, RiDeleteBinLine } from "react-icons/ri";
import { useBlogs } from "@/hooks/useBlogs";
import { useSearchParams } from "next/navigation";
import { Blog } from "@/lib/types/blog";

export default function BlogList() {
  const { openModal } = useModal();
  const searchParams = useSearchParams();
  
  const { data: blogs = [], isLoading, isError } = useBlogs();
  const searchQuery = searchParams.get("q")?.toLowerCase() || "";
  const statusFilter = searchParams.get("status") || "all";

  const getBlogStatus = (blog: Blog): "Published" | "Draft" | "Archived" => {
    const pubDate = new Date(blog.created_at);
    const now = new Date();
    
   
    if (pubDate.getTime() > now.getTime()) {
      return "Draft"; 
    }

    if (!blog.is_published) {
      return "Draft";
    }

    const diffTime = Math.abs(now.getTime() - pubDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if (diffDays > 30) {
      return "Archived";
    }

    return "Published";
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title?.toLowerCase().includes(searchQuery);

    // 2. Status Filter (Using the helper!)
    const currentStatus = getBlogStatus(blog);
    const matchesStatus = statusFilter === "all" ? true : currentStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleEdit = (blog: any) => {
    openModal("blog", blog);
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Header is now always rendered */}
          <thead className="bg-slate-900">
            <tr>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">Post Title</th>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">Author</th>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">Status</th>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">Category</th>
              <th className="text-right py-4 px-6 text-slate-400 text-sm font-semibold">Views</th>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">Created</th>
              <th className="text-right py-4 px-6 text-slate-400 text-sm font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            {isLoading ? (
              /* Loading State inside table */
              <tr>
                <td colSpan={7} className="py-12 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="animate-spin w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full mb-4"></div>
                    <p className="text-slate-400">Loading blog posts...</p>
                  </div>
                </td>
              </tr>
            ) : isError ? (
              /* Error State inside table */
              <tr>
                <td colSpan={7} className="py-12 text-center">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 inline-block">
                    <p className="text-red-400">Failed to load blogs. Please refresh the page.</p>
                  </div>
                </td>
              </tr>
            ) : filteredBlogs.length === 0 ? (
              /* Empty State inside table */
              <tr>
                <td colSpan={7} className="py-12 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-slate-400 text-lg mb-2">No blog posts yet.</p>
                    <p className="text-slate-500 text-sm">Create your first post to get started.</p>
                  </div>
                </td>
              </tr>
            ) : (
              /* Data Rows */
              filteredBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-slate-700/50 transition-colors">
                  
                  {/* Title */}
                  <td className="py-4 px-6">
                    <span className="text-white font-medium line-clamp-1 max-w-[250px]">{blog.title}</span>
                  </td>

                  {/* Author */}
                  <td className="py-4 px-6">
                    <span className="text-slate-300 text-sm">{blog.author || "Unknown"}</span>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                        blog.is_published
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {blog.is_published ? "Published" : "Draft"}
                    </span>
                  </td>

                  {/* Category */}
                  <td className="py-4 px-6">
                    <span className="text-xs font-mono bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {blog.category || "Uncategorized"}
                    </span>
                  </td>

                  {/* Views */}
                  <td className="py-4 px-6 text-right text-white font-mono">
                    {blog.views || 0}
                  </td>

                  {/* Date */}
                  <td className="py-4 px-6 text-slate-300 text-sm whitespace-nowrap">
                    {blog.created_at 
                      ? new Date(blog.created_at).toLocaleDateString() 
                      : "N/A"}
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors"
                        onClick={() => handleEdit(blog)}
                        title="Edit"
                      >
                        <RiEditLine className="w-4 h-4" />
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors"
                        onClick={() => openModal("blog-view", blog)}
                        title="Preview"
                      >
                        <RiEyeLine className="w-4 h-4" />
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded transition-colors"
                        onClick={() => openModal("blog-delete", blog)}
                        title="Delete"
                      >
                        <RiDeleteBinLine className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}