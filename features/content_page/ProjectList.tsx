"use client";

import { useModal } from "@/lib/modalContext";
import {
  RiStarFill,
  RiEditLine,
  RiEyeLine,
  RiDeleteBinLine,
  RiGlobalLine,
  RiSmartphoneLine,
} from "react-icons/ri";

// Mock Data matching your Project Type + UI Metrics
const projects = [
  {
    id: "1",
    title: "AI-Powered Dashboard",
    category: "Web App",
    status: "Published",
    views: "68,871",
    clicks: "8,542",
    updated: "2024-01-15",
    isFeatured: true,
    type: "web",
  },
  {
    id: "2",
    title: "E-commerce Platform",
    category: "Web App",
    status: "Published",
    views: "66,954",
    clicks: "7,231",
    updated: "2024-01-14",
    isFeatured: true,
    type: "web",
  },
  {
    id: "3",
    title: "Mobile Banking App",
    category: "Mobile",
    status: "Published",
    views: "71,052",
    clicks: "6,892",
    updated: "2024-01-13",
    isFeatured: false,
    type: "mobile",
  },
  {
    id: "4",
    title: "Social Media Analytics",
    category: "Web App",
    status: "Draft",
    views: "63,404",
    clicks: "5,643",
    updated: "2024-01-12",
    isFeatured: false,
    type: "web",
  },
];

export function ProjectList() {
  const { openModal } = useModal();

  const handleEdit = (project: any) => {
    // In a real app, you might need to fetch the full project details first
    // if the table data is incomplete. For now, we pass the row data.
    openModal("project", project);
  };
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-900">
            <tr>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">
                Project
              </th>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">
                Category
              </th>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">
                Status
              </th>
              <th className="text-right py-4 px-6 text-slate-400 text-sm font-semibold">
                Views
              </th>
              <th className="text-right py-4 px-6 text-slate-400 text-sm font-semibold">
                Clicks
              </th>
              <th className="py-4 px-6 text-slate-400 text-sm font-semibold">
                Last Updated
              </th>
              <th className="text-right py-4 px-6 text-slate-400 text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {projects.map((project) => (
              <tr
                key={project.id}
                className="hover:bg-slate-700/50 transition-colors"
              >
                {/* Project Name */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    {project.isFeatured ? (
                      <RiStarFill className="text-yellow-400 w-4 h-4" />
                    ) : (
                      // Placeholder to keep alignment
                      <div className="w-4 h-4" />
                    )}
                    <span className="text-white font-medium">
                      {project.title}
                    </span>
                  </div>
                </td>

                {/* Category */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    {project.type === "mobile" ? (
                      <RiSmartphoneLine className="text-slate-500" />
                    ) : (
                      <RiGlobalLine className="text-slate-500" />
                    )}
                    <span className="text-slate-300 text-sm">
                      {project.category}
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      project.status === "Published"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>

                {/* Metrics */}
                <td className="py-4 px-6 text-right text-white font-mono">
                  {project.views}
                </td>
                <td className="py-4 px-6 text-right text-white font-mono">
                  {project.clicks}
                </td>
                <td className="py-4 px-6 text-slate-300 text-sm">
                  {project.updated}
                </td>

                {/* Actions */}
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      className="w-8 h-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors"
                      onClick={() => handleEdit(project)}
                    >
                      <RiEditLine className="w-4 h-4" />
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors"
                      onClick={() => openModal("project-view", project)}
                    >
                      <RiEyeLine className="w-4 h-4" />
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded transition-colors"
                      onClick={() => openModal("project-delete", project)}
                    >
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
  );
}
