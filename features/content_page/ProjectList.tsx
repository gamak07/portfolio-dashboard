"use client";

import { useDeleteProject, useProjects } from "@/hooks/useProject";
import { useModal } from "@/lib/modalContext";
import { Project } from "@/lib/types/project";
import { useSearchParams } from "next/navigation";
import {
  RiStarFill,
  RiEditLine,
  RiEyeLine,
  RiDeleteBinLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiLoader4Line,
  RiErrorWarningLine,
  RiInboxLine,
} from "react-icons/ri";


export default function ProjectList() {
  const { openModal } = useModal();
  const searchParams = useSearchParams();
  const { data: projects, isLoading, isError } = useProjects();

  const searchQuery = searchParams.get("q")?.toLowerCase() || "";
  const statusFilter = searchParams.get("status") || "all";

  const filteredProjects = projects?.filter((project) => {
    // 1. Search Filter
    const matchesSearch = project.title?.toLowerCase().includes(searchQuery);

    // 2. Status Filter (Direct String Match)
    const matchesStatus = statusFilter === "all" 
      ? true 
      : project.status === statusFilter; // e.g. "Published" === "Published"

    return matchesSearch && matchesStatus;
  });

  const handleEdit = (project: Project) => {
    openModal("project", project);
  };

  const renderTableState = (icon: React.ReactNode, message: string, colorClass: string) => (
    <tr>
      <td colSpan={7} className="py-20 text-center">
        <div className={`flex flex-col items-center justify-center ${colorClass}`}>
          {icon}
          <p className="mt-2 font-medium">{message}</p>
        </div>
      </td>
    </tr>
  );


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
            {/* 1. Loading State */}
            {isLoading && renderTableState(
              <RiLoader4Line className="w-8 h-8 animate-spin mb-2" />, 
              "Loading projects...", 
              "text-cyan-500"
            )}

            {/* 2. Error State */}
            {!isLoading && isError && renderTableState(
              <RiErrorWarningLine className="w-8 h-8 mb-2" />, 
              "Failed to load projects.", 
              "text-red-400"
            )}

            {/* 3. Empty State */}
            {!isLoading && !isError && filteredProjects?.length === 0 && renderTableState(
              <RiInboxLine className="w-8 h-8 mb-2" />, 
              "No projects found.", 
              "text-slate-500"
            )}

            {/* 4. Data Listing */}
            {!isLoading && !isError && filteredProjects?.map((project: any) => (
              <tr
                key={project.id}
                className="hover:bg-slate-700/50 transition-colors group"
              >
                {/* Project Name */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    {project.featured ? (
                      <RiStarFill className="text-yellow-400 w-4 h-4 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 flex-shrink-0" />
                    )}
                    
                    {/* Thumbnail */}
                    {project.thumbnail && (
                      <img 
                        src={project.thumbnail} 
                        alt="" 
                        className="w-8 h-8 rounded object-cover bg-slate-900 border border-slate-600" 
                      />
                    )}
                    
                    <span className="text-white font-medium truncate max-w-[200px]">
                      {project.title}
                    </span>
                  </div>
                </td>

                {/* Category */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    {project.type === "Mobile" ? (
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
                      project.status === "Published" || project.status === "Completed"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>

                {/* Metrics */}
                <td className="py-4 px-6 text-right text-white font-mono text-sm">
                  {project.views?.toLocaleString() || 0}
                </td>
                <td className="py-4 px-6 text-right text-white font-mono text-sm">
                  {project.clicks?.toLocaleString() || 0}
                </td>
                
                {/* Date */}
                <td className="py-4 px-6 text-slate-300 text-sm whitespace-nowrap">
                  {project.updated_at 
                    ? new Date(project.updated_at).toLocaleDateString() 
                    : '-'}
                </td>

                {/* Actions */}
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      className="w-8 h-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors"
                      onClick={() => handleEdit(project)}
                      title="Edit"
                    >
                      <RiEditLine className="w-4 h-4" />
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors"
                      onClick={() => openModal("project-view", project)}
                      title="Preview"
                    >
                      <RiEyeLine className="w-4 h-4" />
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded transition-colors"
                      // Just open the modal. The modal handles the API call.
                      onClick={() => openModal("project-delete", project)}
                      title="Delete"
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
