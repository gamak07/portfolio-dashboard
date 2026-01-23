import * as z from "zod";

export const blogFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  author: z.string().min(2, {
    message: "Author name is required.",
  }),
  category: z.string().min(1, {
    message: "Please select or type a category.",
  }),
  status: z.enum(["Draft", "Published", "Archived"], {
    error: "Please select a status.",
  }),
  publishDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Please select a valid date.",
  }),
  excerpt: z.string().min(10, {
    message: "Excerpt must be at least 10 characters.",
  }).max(300, {
    message: "Excerpt must be less than 300 characters."
  }),
  content: z.string().min(50, {
    message: "Blog content is too short (min 50 chars).",
  }),
  tags: z.array(z.string()).default([]),
  
  // Note: This stores the PATH string (e.g., "cover_image/xyz.png")
  // We handle the actual File object separately in the component
  cover_image: z.string().nullable().optional(), 
});

export type BlogFormValues = z.infer<typeof blogFormSchema>;