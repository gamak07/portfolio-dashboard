import { z } from "zod";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const formSchema = z
  .object({
    title: z.string().nonempty("Title is required"),
    slug: z
      .string()
      .optional()
      .refine((val) => !val || slugRegex.test(val), {
        message: "Slug must be URL-friendly",
      }),
    excerpt: z.string().optional(),
    content: z.string().nonempty("Content is required"),
    featured_image_url: z.any().optional(),
    meta_description: z.string().max(160, "Maximum 160 characters").optional(),
    tags: z.array(z.string().nonempty()).optional(),
    is_published: z.boolean().default(false),
    published_at: z.string().optional(),
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
