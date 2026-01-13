"use client";

import { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiSaveLine } from "react-icons/ri";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Schemas & Types
import { ProjectFormValues, projectSchema } from "@/lib/schemas/project";
import { TabBasicInfo } from "./TabsBasicInfo";
import { Project } from "@/lib/types/project";
import { useCreateProject, useUpdateProject } from "@/hooks/useProject";
import { TabMedia } from "./TabMedia";
import { TabTech } from "./TabTech";
import { TabTimeline } from "./TabTimeline";
import { TabDeepDive } from "./TabDeepDive";
import { TabTeam } from "./TabTeam";

const tabs = [
  "Basic Info",
  "Media",
  "Tech Details",
  "Timeline",
  "Deep Dive",
  "Team",
];

// FIX 1: Complete Default Values matches schema exactly
const defaultValues: ProjectFormValues = {
  title: "",
  slug: "",
  description: "",
  featured: false,
  type: "Web",
  status: "In Progress",
  category: "Personal",
  
  // Media defaults
  thumbnail: undefined, // undefined is better for file inputs initially
  gallery: [],
  demo_url: "",
  source_code_url: "",
  
  // Tech defaults
  tech_stack: [],
  frontend: "",
  backend: "",
  database: "",
  
  // Timeline defaults
  start_date: "",
  end_date: "",
  duration: "",
  
  // Deep dive defaults
  features: [],
  challenges: "",
  learnings: "",
  tags: [],
  
  // Team defaults
  team_members: []
};

export function ProjectFormWrapper({
  onSuccess,
  initialData,
}: {
  onSuccess: () => void;
  // FIX 2: Strict typing instead of 'any'
  initialData: Project | null;
}) {
  const [activeTab, setActiveTab] = useState("Basic Info");
  const isEditing = !!initialData;

  const { mutateAsync: createProject, isPending: isCreating } = useCreateProject();
  const { mutateAsync: updateProject, isPending: isUpdating } = useUpdateProject();
  
  const isLoading = isCreating || isUpdating;

  // FIX 3: Memoize values to prevent re-renders and ensure strict merging
  const formValues = useMemo(() => {
    if (!initialData) return defaultValues;

    // We map DB fields to Form fields explicitly to avoid 'null' issues in inputs
    // (React inputs hate 'null', they prefer empty string '')
    return {
        title: initialData.title,
        slug: initialData.slug,
        description: initialData.description,
        featured: initialData.featured,
        type: initialData.type,
        status: initialData.status,
        category: initialData.category,
        
        thumbnail: initialData.thumbnail || undefined, // Keep URL string
        gallery: initialData.gallery || [],
        demo_url: initialData.demo_url || "",
        source_code_url: initialData.source_code_url || "",
        
        tech_stack: initialData.tech_stack || [],
        frontend: initialData.frontend || "",
        backend: initialData.backend || "",
        database: initialData.database || "",
        
        start_date: initialData.start_date || "",
        end_date: initialData.end_date || "",
        duration: initialData.duration || "",
        
        features: initialData.features || [],
        challenges: initialData.challenges || "",
        learnings: initialData.learnings || "",
        tags: initialData.tags || [],
        
        team_members: initialData.team_members || []
    } as ProjectFormValues;
  }, [initialData]);

  const form = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: formValues,
    mode: "onChange" // Validate on change for better UX
  });

  // FIX 4: Reset when data changes (crucial for modals)
  useEffect(() => {
    form.reset(formValues);
  }, [formValues, form]);

  async function onSubmit(data: ProjectFormValues) {
    const formData = new FormData();

    // 1. Standard Fields (Strings/Booleans)
    Object.entries(data).forEach(([key, value]) => {
      // Filter out arrays and files first
      if (
        key !== 'thumbnail' && 
        key !== 'gallery' && 
        key !== 'tech_stack' &&
        key !== 'features' &&
        key !== 'tags' &&
        key !== 'team_members' &&
        value !== null && 
        value !== undefined
      ) {
        formData.append(key, String(value));
      }
    });

    // 2. Arrays (JSON Stringify)
    // We strictly default to [] to prevent sending "undefined"
    formData.append('tech_stack', JSON.stringify(data.tech_stack || []));
    formData.append('features', JSON.stringify(data.features || []));
    formData.append('tags', JSON.stringify(data.tags || []));
    formData.append('team_members', JSON.stringify(data.team_members || []));

    // 3. Media Logic
    
    // Thumbnail
    if (data.thumbnail instanceof FileList && data.thumbnail.length > 0) {
      formData.append('thumbnail', data.thumbnail[0]);
    } else if (data.thumbnail instanceof File) {
      formData.append('thumbnail', data.thumbnail);
    } else if (typeof data.thumbnail === 'string') {
      formData.append('thumbnail_url', data.thumbnail);
    }

    // Gallery
    if (data.gallery) {
      // Normalize to array
      const galleryItems = data.gallery instanceof FileList 
        ? Array.from(data.gallery) 
        : Array.isArray(data.gallery) ? data.gallery : [data.gallery];

      const existingUrls: string[] = [];

      galleryItems.forEach((item: any) => {
        if (item instanceof File) {
          formData.append('gallery', item); // New file
        } else if (typeof item === 'string') {
          existingUrls.push(item); // Keep existing URL
        }
      });
      
      if (existingUrls.length > 0) {
        formData.append('existing_gallery', JSON.stringify(existingUrls));
      }
    }

    // 4. Execution
    try {
      if (isEditing && initialData) {
        await toast.promise(updateProject({ id: initialData.id, formData }), {
          loading: 'Updating project...',
          success: 'Project updated successfully',
          error: (err) => `Update failed: ${err.message}`
        });
      } else {
        await toast.promise(createProject(formData), {
          loading: 'Creating project...',
          success: 'Project created successfully',
          error: (err) => `Creation failed: ${err.message}`
        });
      }
      onSuccess();
    } catch (error) {
      // Error handled by toast above, but we catch here to prevent crash
      console.error(error);
    }
  }

  // ... Render logic (Tabs, etc) remains the same ...
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 hide-scrollbar">
          {/* Tabs Nav */}
          <div className="flex items-center gap-2 mb-6 bg-slate-900 border border-slate-700 rounded-lg p-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap text-sm",
                  activeTab === tab
                    ? "bg-cyan-500 text-white"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-5">
            {activeTab === "Basic Info" && <TabBasicInfo />}
            {activeTab === "Media" && <TabMedia />}
            {activeTab === "Tech Details" && <TabTech />}
            {activeTab === "Timeline" && <TabTimeline />}
            {activeTab === "Deep Dive" && <TabDeepDive />}
            {activeTab === "Team" && <TabTeam />}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-700 bg-slate-800">
          <button
            type="button"
            onClick={onSuccess}
            className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
          >
            Cancel
          </button>
          
          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg font-medium transition-colors flex items-center",
              isLoading && "opacity-50 cursor-not-allowed"
            )}
          >
            {isLoading ? (
               <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
            ) : (
               <RiSaveLine className="mr-2 w-4 h-4" />
            )}
            {isEditing ? "Save Changes" : "Create Project"}
          </button>
        </div>
      </form>
    </Form>
  );
}