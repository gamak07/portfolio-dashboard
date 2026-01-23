import { uploadImage } from "@/lib/upload"; // The helper we created earlier
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBlog, deleteBlog, getBlogs, updateBlog } from "@/lib/actions/blogs";
import { toast } from "sonner";

type BlogPayload = {
  title: string;
  author: string;
  category: string;
  status: string;
  excerpt: string;
  content: string;
  tags: string[];
  cover_image: string | null;
};

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const data = await getBlogs();
      return data;
    },
  });
}

export function useUploadImage() {
  return useMutation({
    mutationFn: async ({
      file,
      folder,
    }: {
      file: File;
      folder: "cover_image" | "blog_image";
    }) => {
      const path = await uploadImage(file, folder);
      return path;
    },
    onError: (error) => {
      console.error("Upload failed:", error);
      toast.error("Failed to upload image");
    },
  });
}

// --- CREATE HOOK ---
export function useCreateBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: BlogPayload) => {
      const result = await createBlog(payload);
      if (!result.success) throw new Error(result.error);
      return result;
    },
    onSuccess: () => {
      toast.success("Blog post created successfully!");
      // Refetch the blog list immediately
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
    onError: (error) => {
      toast.error(`Failed to create blog: ${error.message}`);
    },
  });
}

// --- UPDATE HOOK ---
export function useUpdateBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string;
      payload: BlogPayload;
    }) => {
      const result = await updateBlog(id, payload);
      if (!result.success) throw new Error(result.error);
      return result;
    },
    onSuccess: () => {
      toast.success("Blog post updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
    onError: (error) => {
      toast.error(`Failed to update blog: ${error.message}`);
    },
  });
}

export function useDeleteBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const result = await deleteBlog(id);
      if (!result.success) throw new Error(result.error);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    }
  });
}