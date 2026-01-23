"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiCloseLine, RiSaveLine } from "react-icons/ri";

import { Blog } from "@/lib/types/blog";
import { blogFormSchema, BlogFormValues } from "@/lib/schemas/blog";
import { useCreateBlog, useUpdateBlog, useUploadImage } from "@/hooks/useBlogs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "./RichTextEditor";
import ThumbnailUploader from "./ThumbnaulUploader";
import TagManager from "./TagManager";

// Import Refactored Components

interface BlogCreateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: Blog | null;
}

export function BlogCreateModal({ open, onOpenChange, initialData }: BlogCreateModalProps) {
  // Hooks
  const { mutateAsync: createBlog, isPending: isCreating } = useCreateBlog();
  const { mutateAsync: updateBlog, isPending: isUpdating } = useUpdateBlog();
  const { mutateAsync: uploadImage, isPending: isUploading } = useUploadImage();
  
  const isSaving = isCreating || isUpdating || isUploading;
  const isEditing = !!initialData;
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const form = useForm({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      author: "",
      category: "",
      status: "Draft",
      publishDate: new Date().toISOString().split("T")[0],
      excerpt: "",
      content: "",
      tags: [],
      cover_image: null,
    },
  });

  // Populate Form
  useEffect(() => {
    if (open && initialData) {
      form.reset({
        title: initialData.title,
        author: initialData.author || "",
        category: initialData.category || "",
        status: (initialData.is_published ? "Published" : "Draft") as any,
        publishDate: initialData.created_at ? new Date(initialData.created_at).toISOString().split("T")[0] : "",
        excerpt: initialData.excerpt || "",
        content: initialData.content || "",
        tags: initialData.tags || [],
        cover_image: initialData.cover_image,
      });
      setThumbnail(null);
    } else if (open) {
      form.reset(); // Reset to defaults
      setThumbnail(null);
    }
  }, [open, initialData, form]);

  const onSubmit = async (values: BlogFormValues) => {
    try {
      let coverImagePath = values.cover_image;

      if (thumbnail) {
        coverImagePath = await uploadImage({ file: thumbnail, folder: "cover_image" });
      }

      const payload = { ...values, cover_image: coverImagePath ?? null };

      if (initialData?.id) {
        await updateBlog({ id: initialData.id, payload });
      } else {
        await createBlog(payload);
      }
      onOpenChange(false);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-slate-800">
          <h2 className="text-2xl font-bold text-white">
            {isEditing ? "Edit Blog Post" : "Add New Blog Post"}
          </h2>
          <button onClick={() => onOpenChange(false)} className="w-10 h-10 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-colors">
            <RiCloseLine className="text-xl w-6 h-6" />
          </button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
              <div className="space-y-5">
                
                {/* Row 1: Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField control={form.control} name="title" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Title *</FormLabel>
                      <FormControl><Input {...field} placeholder="Enter title" className="bg-slate-700 border-slate-600 text-white" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="author" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Author *</FormLabel>
                      <FormControl><Input {...field} placeholder="Author name" className="bg-slate-700 border-slate-600 text-white" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                {/* Row 2: Metadata */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <FormField control={form.control} name="category" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Category *</FormLabel>
                      <FormControl><Input {...field} placeholder="Category" className="bg-slate-700 border-slate-600 text-white" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="status" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Status *</FormLabel>
                      <FormControl>
                        <select {...field} className="w-full h-10 px-3 py-2 rounded-md bg-slate-700 border border-slate-600 text-white">
                          <option value="Draft">Draft</option>
                          <option value="Published">Published</option>
                          <option value="Archived">Archived</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="publishDate" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Date *</FormLabel>
                      <FormControl><Input type="date" {...field} className="bg-slate-700 border-slate-600 text-white dark-calendar-icon" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                {/* Row 3: Excerpt */}
                <FormField control={form.control} name="excerpt" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-300">Excerpt *</FormLabel>
                    <FormControl><Textarea {...field} rows={3} placeholder="Brief summary..." className="bg-slate-700 border-slate-600 text-white resize-none" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                {/* Row 4: Rich Text */}
                <FormField control={form.control} name="content" render={({ field }) => (
                  <FormItem>
                    <RichTextEditor value={field.value} onChange={field.onChange} />
                  </FormItem>
                )} />

                {/* Row 5: Thumbnail */}
                <ThumbnailUploader 
                  initialImage={initialData?.cover_image}
                  onFileSelect={setThumbnail}
                />

                {/* Row 6: Tags */}
                <FormField control={form.control} name="tags" render={({ field }) => (
                  <FormItem>
                    <TagManager tags={field.value || []} onChange={field.onChange} />
                  </FormItem>
                )} />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-700 bg-slate-800">
              <button type="button" onClick={() => onOpenChange(false)} disabled={isSaving} className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium">
                Cancel
              </button>
              <button type="submit" disabled={isSaving} className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg font-medium flex items-center disabled:opacity-50">
                {isSaving ? (
                  <>
                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"/> Saving...
                  </>
                ) : (
                  <>
                    <RiSaveLine className="mr-2 w-4 h-4" /> {isEditing ? "Update Post" : "Publish Post"}
                  </>
                )}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}