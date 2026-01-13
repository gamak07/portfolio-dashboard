"use client";

import { useState } from "react";
import { RiFolderLine, RiArticleLine, RiAddLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { ContentToolbar } from "./ContentToolbar";
import { ProjectList } from "./ProjectList";
import { BlogList } from "./BlogList";
import { ProjectCreateModal } from "../project/ProjectCreateModal";
import { useModal } from "@/lib/modalContext";

export default function ContentManager() {
  const [activeTab, setActiveTab] = useState<"projects" | "blogs">("projects");

  // State to control the modal
  const { openModal } = useModal()

  const handleCreate = () => {
    if (activeTab === "projects") {
      openModal('project');
    } else {
      console.log("Open Blog Modal");
    }
  };

  return (
      <div className="p-8 max-w-[1600px] mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Content Management
          </h1>
          <p className="text-slate-400">Manage your projects and blog posts</p>
        </div>

        {/* Control Bar (Tabs + Create Button) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          {/* Custom Tab Switcher */}
          <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("projects")}
              className={cn(
                "px-6 py-2.5 rounded-md font-medium transition-all whitespace-nowrap flex items-center",
                activeTab === "projects"
                  ? "bg-cyan-500 text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              )}
            >
              <RiFolderLine className="mr-2 w-4 h-4" />
              Projects
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={cn(
                "px-6 py-2.5 rounded-md font-medium transition-all whitespace-nowrap flex items-center",
                activeTab === "blogs"
                  ? "bg-cyan-500 text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              )}
            >
              <RiArticleLine className="mr-2 w-4 h-4" />
              Blog Posts
            </button>
          </div>

          {/* Create Button */}
          <button
            className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg font-medium transition-colors whitespace-nowrap flex items-center"
            onClick={handleCreate}
          >
            <RiAddLine className="mr-2 w-5 h-5" />
            Create New
          </button>
        </div>

        {/* Shared Toolbar (Search/Filter) */}
        <ContentToolbar />

        {/* Conditional List Rendering */}
        {activeTab === "projects" ? <ProjectList /> : <BlogList />}
      </div>
  );
}
