import { useEffect } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useUpdateProject } from "./useUpdateProject";
import { Project, ProjectFormData, ProjectUpdate } from "../../utils/types/projectData";
import { rootSchema } from "../../schemas/addNewProjectSchema";

export const useEditProject = (project: Project|null|undefined) => {
  const { isPending: isEditing, editProject } = useUpdateProject();

  const methods = useForm<ProjectFormData>({
    resolver: zodResolver(rootSchema),
    // Set valid defaults for required enum fields
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      type: "web", // Default to 'web'
      status: "in progress", // Default to 'in progress'
      image: undefined,
      gallery: [],
      demo_url: "",
      source_code_url: "",
      tech_stack: [],
      frontend: "",
      backend: "",
      database: "",
      start_date: "",
      end_date: "",
      duration: "",
      features: "",
      challenges: "",
      learnings: "",
      tags: [],
      category: "Personal", // Default to 'Personal'
      team_members: [],
    },
  });

  const { reset, handleSubmit } = methods;
  const isEdit = Boolean(project && project.id);

  // Prefill form once on mount
  useEffect(() => {
    if (!isEdit) return;
    if (!project) return;
    const {
      title,
      slug,
      description,
      type,
      status,
      thumbnail_url,
      gallery,
      demo_url,
      source_code_url,
      tech_stack,
      frontend,
      backend,
      database,
      start_date,
      end_date,
      duration,
      features,
      challenges,
      learnings,
      tags,
      category,
      team_members,
    } = project;

    // Reset fills the form with existing data
    reset({
      title,
      slug: slug || "",
      description,
      type,
      status,
      image: thumbnail_url || undefined,
      gallery: Array.isArray(gallery) ? gallery : [],
      demo_url: demo_url || "",
      source_code_url: source_code_url || "",
      tech_stack: Array.isArray(tech_stack) ? tech_stack : [],
      frontend: frontend || "",
      backend: backend || "",
      database: database || "",
      start_date: start_date ? start_date.slice(0, 10) : "",
      end_date: end_date ? end_date.slice(0, 10) : "",
      duration: duration || "",
      features: Array.isArray(features) ? features.join("\n") : "",
      challenges: challenges || "",
      learnings: learnings || "",
      tags: Array.isArray(tags) ? tags : [],
      category: category || "Personal",
      team_members: Array.isArray(team_members) ? team_members : [],
    });
  }, [isEdit, project, reset]);

  // Type the data parameter
  const onSubmit = async (data: ProjectFormData) => {
    if (!project?.id) {
      console.error("No project ID found, cannot update.");
      return;
    }
    try {
      const { image, gallery, ...rest } = data;
      const featuresArray =
        typeof rest.features === "string" && rest.features.length > 0
          ? rest.features
              .split("\n")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];

      // Auto-generate slug if missing
      if (!rest.slug) {
        rest.slug = (rest.title || "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      }

      // Build a strongly-typed payload
      const payload: ProjectUpdate = {
        title: rest.title,
        slug: rest.slug,
        description: rest.description,
        type: rest.type,
        status: rest.status,
        ...(rest.demo_url && { demo_url: rest.demo_url }),
        ...(rest.source_code_url && { source_code_url: rest.source_code_url }),
        ...(rest.tech_stack?.length && { tech_stack: rest.tech_stack }),
        ...(rest.frontend && { frontend: rest.frontend }),
        ...(rest.backend && { backend: rest.backend }),
        ...(rest.database && { database: rest.database }),
        ...(rest.start_date && { start_date: rest.start_date }),
        ...(rest.end_date && { end_date: rest.end_date }),
        ...(rest.duration && { duration: rest.duration }),
        ...(featuresArray.length && { features: featuresArray }),
        ...(rest.challenges && { challenges: rest.challenges }),
        ...(rest.learnings && { learnings: rest.learnings }),
        ...(rest.tags?.length && { tags: rest.tags }),
        ...(rest.category && { category: rest.category }),
        ...(rest.team_members?.length && { team_members: rest.team_members }),
      };

      // Type-safe filtering for gallery items
      const existingGalleryPaths = (gallery || []).filter(
        (item): item is string => typeof item === "string",
      );
      const newGalleryFiles = (gallery || []).filter(
        (item): item is File => item instanceof File,
      );

      await editProject({
        id: project.id,
        projectData: {
          ...payload,
          gallery: existingGalleryPaths, // Send only old URLs in the payload
        },
        thumbnailFile: image instanceof File ? image : null,
        galleryFiles: newGalleryFiles, // Send new files separately
      });

      // reset(); // Optional: reset after edit
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  // Type the errors parameter
  const onError = (errors: FieldErrors<ProjectFormData>) => {
    console.error("Edit form errors:", errors);
  };

  return { methods, onSubmit: handleSubmit(onSubmit, onError), isEditing };
};