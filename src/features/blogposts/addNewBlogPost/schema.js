import { z } from "zod";

const MAX_FILE_SIZE = 1500 * 1024; // 1.5 MB

export const formSchema = z
  .object({
    title: z.string().nonempty("Title is required"),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    content: z.string().nonempty("Content is required"),
    featured_image_url: z
      .any()
      .optional()
      .transform((fileList) =>
        fileList instanceof FileList ? fileList[0] : fileList,
      )
      .refine((file) => !file || file instanceof File, {
        message: "Invalid file type",
      })
      .refine((file) => !file || file.size <= MAX_FILE_SIZE, {
        message: "File must be ≤ 1.5MB",
      }),
    meta_description: z.string().max(160, "Maximum 160 characters").optional(),
    tags: z.array(z.string().nonempty()).optional(),
    is_published: z.boolean().default(false),
    published_at: z.string().nullable().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.is_published && !data.published_at) {
      ctx.addIssue({
        path: ["published_at"],
        code: z.ZodIssueCode.custom,
        message: "Publication date is required when publishing",
      });
    } else if (data.is_published && data.published_at) {
      const pubDate = new Date(data.published_at);
      if (pubDate < new Date()) {
        ctx.addIssue({
          path: ["published_at"],
          code: z.ZodIssueCode.custom,
          message: "Publication date cannot be in the past",
        });
      }
    }
  });
