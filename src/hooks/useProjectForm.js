import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { rootSchema } from "../features/projects/AddNewProject/schema";
import { useAddNewProjects } from "../features/projects/useAddNewProjects";

export const useProjectForm = () => {
  const { isCreating, addProject } = useAddNewProjects();

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

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  const onSubmit = async (data) => {
    try {
      const { image, gallery, ...rest } = data;
      // 1️⃣ Build features array (same as before)
      const featuresArray = rest.features
        ? rest.features
            .split("\n")
            .map((f) => f.trim())
            .filter(Boolean)
        : [];

      // 2️⃣ Auto‐generate slug if missing
      if (!rest.slug) {
        rest.slug = rest.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      }

      // 5️⃣ Now build the final payload, merging URLs where needed
      const payload = {
        title: rest.title,
        slug: rest.slug,
        description: rest.description,
        type: rest.type,
        status: rest.status,

        // ...(rest.thumbnail_url ? { thumbnail_url: rest.thumbnail_url } : {}),
        // ...(rest.gallery?.length ? { gallery: rest.gallery } : {}),
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

      // 6️⃣ Finally, insert the project row
      await addProject({
        projectData: payload,
        thumbnailFile: image || null,
        galleryFiles: Array.isArray(gallery) ? gallery : [],
      });
    } catch (err) {
      console.error("Submission/upload error:", err);
    } finally {
      methods.reset();
    }
  };

  return {isCreating, onSubmit, onError, methods, }
};
