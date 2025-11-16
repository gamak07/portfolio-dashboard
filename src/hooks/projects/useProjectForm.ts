import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldErrors } from "react-hook-form";
// Import the schema and our new types
// import { rootSchema } from "../../schemas/projectSchemas";
// import { ProjectFormData, ProjectInsert } from "../../types/projectTypes";
import { useAddNewProjects } from "./useAddNewProjects";
import { ProjectFormData, ProjectInsert } from "../../utils/types/projectData";
import { rootSchema } from "../../schemas/addNewProjectSchema";

export const useProjectForm = () => {
  const { isCreating, addProject } = useAddNewProjects();

  // Provide the generic type to useForm
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

  // Type the errors parameter
  const onError = (errors: FieldErrors<ProjectFormData>) => {
    console.log("Validation errors:", errors);
  };

  // Type the data parameter
  const onSubmit = async (data: ProjectFormData) => {
    try {
      const { image, gallery, ...rest } = data;
      // 1️⃣ Build features array
      const featuresArray =
        rest.features && typeof rest.features === "string"
          ? rest.features
              .split("\n")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];

      // 2️⃣ Auto‐generate slug if missing
      if (!rest.slug) {
        rest.slug = (rest.title || "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      }

      // 5️⃣ Build the final, strongly-typed payload
      const payload: ProjectInsert = {
        title: rest.title,
        slug: rest.slug,
        description: rest.description,
        type: rest.type,
        status: rest.status,
        // Use spread syntax for optional fields
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

      // 6️⃣ Finally, insert the project row with type-safe files
      await addProject({
        projectData: payload,
        thumbnailFile: image instanceof File ? image : null,
        galleryFiles: (gallery || []).filter(
          (item): item is File => item instanceof File,
        ),
      });
    } catch (err) {
      console.error("Submission/upload error:", err);
    } finally {
      methods.reset();
    }
  };

  return {
    isCreating,
    // Return the handleSubmit-wrapped function for the component
    onSubmit: methods.handleSubmit(onSubmit, onError),
    methods,
  };
};