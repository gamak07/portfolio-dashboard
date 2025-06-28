// schemas/projectSchemas.js
import { z } from "zod";

const MAX_FILE_SIZE = 1500 * 1024; // 1.5 MB

// File refinement
const fileRefinement = z
  .instanceof(File)
  .refine((file) => file.size <= MAX_FILE_SIZE, {
    message: "Each file must be ≤ 1.5 MB",
  });

// 1) Info section
export const infoSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  slug: z.string().optional(),
  description: z.string().min(1, { message: "Description is required" }),
  type: z.enum(["web", "mobile"], { message: "Type is required" }),
  status: z.enum(
    ["in progress", "completed", "paused", "in review"],
    { message: "Status is required" }
  ),
});

// 2) Media section: accept Files or any non-empty string (URL or relative path)
export const mediaSchema = z.object({
  image: z
    .union([
      fileRefinement,
      z.string().min(1, { message: "Invalid image path or URL" })
    ])
    .optional(),

  gallery: z
    .array(
      z.union([
        fileRefinement,
        z.string().min(1, { message: "Invalid gallery path or URL" })
      ])
    )
    .optional(),

  demo_url: z.string().url("Invalid URL").optional().or(z.literal("")),
  source_code_url: z.string().url("Invalid URL").optional().or(z.literal("")),
});

// 3) Tech section
export const techSchema = z.object({
  tech_stack: z
    .array(z.string().min(1, "Tech cannot be empty"))
    .optional(),
  frontend: z.string().optional().or(z.literal("")),
  backend: z.string().optional().or(z.literal("")),
  database: z.string().optional().or(z.literal("")),
});

// 4) Timeline section
export const timelineBase = z.object({
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  duration: z.string().optional(),
});

// 5) Features section
export const featuresSchema = z.object({
  features: z.string().optional(),
  challenges: z.string().optional(),
  learnings: z.string().optional(),
});

// 6) Team section
export const teamSchema = z.object({
  tags: z.array(z.string().min(1, "Tag cannot be empty")).optional(),
  category: z
    .enum(["Personal", "Freelance", "Hackhaton"], {
      errorMap: () => ({ message: "Invalid category" }),
    })
    .optional(),
  team_members: z
    .array(
      z.object({
        name: z.string().min(1, "Name is required"),
        role: z.string().min(1, "Role is required"),
      })
    )
    .optional(),
});

// 7) Combine into rootSchema and enforce date order
export const rootSchema = infoSchema
  .merge(mediaSchema)
  .merge(techSchema)
  .merge(featuresSchema)
  .merge(teamSchema)
  .merge(timelineBase)
  .refine(
    (data) => {
      if (!data.start_date || !data.end_date) return true;
      return new Date(data.start_date) <= new Date(data.end_date);
    },
    {
      message: "End date must be after or equal to start date",
      path: ["end_date"],
    }
  );
