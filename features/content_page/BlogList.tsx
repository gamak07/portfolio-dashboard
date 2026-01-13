'use client'

import { RiEditLine, RiEyeLine, RiDeleteBinLine } from 'react-icons/ri'

// Mock Data for Blogs
const blogs = [
  {
    id: "1",
    title: "CSS Grid vs Flexbox: When to Use Which",
    author: "Ganiyu Mubarak",
    status: "Published",
    views: "12,402",
    date: "2024-01-15",
    tag: "CSS"
  },
  {
    id: "2",
    title: "TypeScript Best Practices for 2024",
    author: "Ganiyu Mubarak",
    status: "Published",
    views: "9,821",
    date: "2024-01-10",
    tag: "TypeScript"
  },
  {
    id: "3",
    title: "Understanding Next.js Server Actions",
    author: "Ganiyu Mubarak",
    status: "Draft",
    views: "-",
    date: "2024-01-05",
    tag: "Next.js"
  }
]

export function BlogList() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-900">
            <tr>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">Post Title</th>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">Author</th>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">Status</th>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">Tag</th>
              <th className="text-right py-4 px-6 text-slate-400 text-sm font-semibold">Views</th>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">Published</th>
              <th className="text-right py-4 px-6 text-slate-400 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-slate-700/50 transition-colors">
                
                <td className="py-4 px-6">
                  <span className="text-white font-medium">{blog.title}</span>
                </td>

                <td className="py-4 px-6">
                  <span className="text-slate-300 text-sm">{blog.author}</span>
                </td>

                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                    blog.status === 'Published' 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {blog.status}
                  </span>
                </td>

                <td className="py-4 px-6">
                   <span className="text-xs font-mono bg-slate-700 text-slate-300 px-2 py-1 rounded">
                     {blog.tag}
                   </span>
                </td>

                <td className="py-4 px-6 text-right text-white font-mono">{blog.views}</td>
                <td className="py-4 px-6 text-slate-300 text-sm">{blog.date}</td>

                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button className="w-8 h-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors">
                      <RiEditLine className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors">
                      <RiEyeLine className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded transition-colors">
                      <RiDeleteBinLine className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}