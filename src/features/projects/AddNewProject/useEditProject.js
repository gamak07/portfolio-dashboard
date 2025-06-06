// hooks/useEditProjectForm.js
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateProject } from "../useUpdateProject";
import { rootSchema } from "./schema";

export const useEditProject = (project) => {
  const { isPending: isEditing, editProject } = useUpdateProject();

  const methods = useForm({
    resolver: zodResolver(rootSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      type: "",
      status: "",
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
      category: "",
      team_members: [],
    },
  });

  const { reset, handleSubmit } = methods;
  const isEdit = Boolean(project && project.id);

  // Prefill form once on mount
  useEffect(() => {
    if (!isEdit) return;
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

    reset({
      title,
      slug,
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
      category: category || "",
      team_members: Array.isArray(team_members) ? team_members : [],
    });
  }, [isEdit, project, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { image, gallery, ...rest } = data;
      const featuresArray =
        typeof rest.features === "string" && rest.features.length > 0
          ? rest.features
              .split("\n")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];

      if (!rest.slug) {
        rest.slug = rest.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      }

      const payload = {
        title: rest.title,
        slug: rest.slug,
        description: rest.description,
        type: rest.type,
        status: rest.status,
        ...(rest.demo_url !== "" ? { demo_url: rest.demo_url } : {}),
        ...(rest.source_code_url !== ""
          ? { source_code_url: rest.source_code_url }
          : {}),
        ...(rest.tech_stack?.length ? { tech_stack: rest.tech_stack } : {}),
        ...(rest.frontend ? { frontend: rest.frontend } : {}),
        ...(rest.backend ? { backend: rest.backend } : {}),
        ...(rest.database ? { database: rest.database } : {}),
        ...(rest.start_date ? { start_date: rest.start_date } : {}),
        ...(rest.end_date ? { end_date: rest.end_date } : {}),
        ...(rest.duration ? { duration: rest.duration } : {}),
        ...(featuresArray.length ? { features: featuresArray } : {}),
        ...(rest.challenges ? { challenges: rest.challenges } : {}),
        ...(rest.learnings ? { learnings: rest.learnings } : {}),
        ...(rest.tags?.length ? { tags: rest.tags } : {}),
        ...(rest.category ? { category: rest.category } : {}),
        ...(rest.team_members?.length
          ? { team_members: rest.team_members }
          : {}),
      };

      await editProject({
        id: project.id,
        projectData: payload,
        thumbnailFile: image || null,
        galleryFiles: Array.isArray(gallery) ? gallery : [],
      });
      reset(); // clear or leave as-is if you want to keep values
    } catch (err) {
      console.error("Update error:", err);
    }
  });

  return { methods, onSubmit, isEditing };
};
