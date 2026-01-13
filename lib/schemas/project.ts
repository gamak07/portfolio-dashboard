import { z } from "zod";

// 1MB Limit
const MAX_FILE_SIZE = 1024 * 1024;

export const projectSchema = z.object({
  // --- Basic Info ---
  title: z.string().min(2, "Title is required"),
  slug: z.string().min(2, "Slug is required"),
  description: z.string().min(10, "Description is required"),
  featured: z.boolean().default(false),
  type: z.enum(["Web", "Mobile"]),
  status: z.enum(["In Progress", "Completed", "Paused", "In Review"]),
  category: z.enum(["Personal", "Freelance", "Hackathon"]),

  // --- Media ---
  // Validation: Allow any file type, but enforce 1MB Max Size
  thumbnail: z
    .any()
    .refine((file) => !!file, "Thumbnail is required") // 1. Check existence first
    .refine((file) => {
      if (typeof file === "string") return true; // URL is fine
      if (file instanceof FileList)
        return file.length > 0 && file[0].size <= MAX_FILE_SIZE;
      if (file instanceof File) return file.size <= MAX_FILE_SIZE;
      return false;
    }, "File size must be less than 1MB"),

  gallery: z.any().refine((files) => {
    if (!files) return true;

    const fileArray =
      files instanceof FileList
        ? Array.from(files)
        : Array.isArray(files)
        ? files
        : [files];

    return fileArray.every((file: any) => {
      if (typeof file === "string") return true;
      if (file instanceof File) return file.size <= MAX_FILE_SIZE;
      return true;
    });
  }, "Each file must be less than 1MB"),

  demo_url: z.string().optional().or(z.literal("")),
  source_code_url: z.string().optional().or(z.literal("")),

  // --- Tech Details ---
  tech_stack: z.array(z.string()).default([]),
  frontend: z.string().optional(),
  backend: z.string().optional(),
  database: z.string().optional(),

  // --- Timeline ---
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  duration: z.string().optional(),

  // --- Deep Dive ---
  features: z.array(z.string()).default([]),
  challenges: z.string().optional(),
  learnings: z.string().optional(),
  tags: z.array(z.string()).default([]),

  // --- Team ---
  team_members: z
    .array(
      z.object({
        name: z.string().min(1, "Name required"),
        role: z.string().min(1, "Role required"),
      })
    )
    .default([]),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
