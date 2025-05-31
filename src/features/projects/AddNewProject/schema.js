// schemas/projectInfoSchema.ts
import { z } from "zod";
const MAX_FILE_SIZE = 1500 * 1024; // 1500kb

export const infoSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  slug: z.string().optional(), // Will be auto-generated if empty
  description: z.string().min(1, { message: "Description is required" }),
  type: z.enum(["web", "mobile"], {
    message: "Type is required",
  }),
  status: z.enum(["in progress", "completed", "paused", "in review"], {
    message: "Status is required",
  }),
});

export const mediaSchema = z.object({
  // Thumbnail (single-file) field
  image: z
    .any()
    .optional()
    .refine(
      (val) => {
        // If nothing is provided (undefined or empty FileList), it's valid:
        if (!val) return true;
        if (val instanceof FileList && val.length === 0) return true;

        // Otherwise, grab the first File from the FileList (or val itself)
        const file = val instanceof FileList ? val.item(0) : val;

        // Now ensure it’s a File and under size limit
        return file instanceof File && file.size <= MAX_FILE_SIZE;
      },
      {
        message: "Thumbnail must be ≤ 1500kb",
      },
    ),

  // Gallery (multiple-file) field
  gallery: z
    .any()
    .optional()
    .refine(
      (val) => {
        // If nothing is provided (undefined or empty FileList), it's valid:
        if (!val) return true;
        if (val instanceof FileList && val.length === 0) return true;

        // Otherwise, convert FileList to array of File objects
        const filesArray = Array.from(val instanceof FileList ? val : []);

        // Ensure every file is under the size limit
        return filesArray.every(
          (file) => file instanceof File && file.size <= MAX_FILE_SIZE,
        );
      },
      {
        message: "Each gallery image must be ≤ 1500kb",
      },
    ),

  // Optional URLs (allow empty string or valid URL)
  demoUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  codeUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export const techSchema = z.object({
  techStack: z.array(z.string().min(1, "Tech cannot be empty")).optional(),
  frontend: z.string().optional().or(z.literal("")),
  backend: z.string().optional().or(z.literal("")),
  database: z.string().optional().or(z.literal("")),
});

const timelineBase = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  duration: z.string().optional(),
});

export const featuresSchema = z.object({
  features: z.string().optional(), // This field is optional

  challenges: z.string().optional(),

  learnings: z.string().optional(),
});

// schemas/teamSchema.js
export const teamSchema = z.object({
  // tags: optional array of non-empty strings
  tags: z.array(z.string().min(1, "Tag cannot be empty")).optional(),

  // category: optional enum
  category: z
    .enum(["Personal", "Freelance", "Hackhaton"], {
      errorMap: () => ({ message: "Invalid category" }),
    })
    .optional(),

  // teamMembers: optional array of member objects
  teamMembers: z
    .array(
      z.object({
        name: z.string().min(1, "Name is required"),
        role: z.string().min(1, "Role is required"),
      }),
    )
    .optional(),
});

export const rootSchema = infoSchema
  .merge(mediaSchema)
  .merge(techSchema)
  .merge(featuresSchema)
  .merge(teamSchema)
  .merge(timelineBase)
  .refine(
    (data) =>
      !data.startDate ||
      !data.endDate ||
      new Date(data.startDate) <= new Date(data.endDate),
    {
      message: "End date must be after or equal to start date",
      path: ["endDate"],
    },
  );
