import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import { formSchema } from "../../schemas/addNewBlogSchema";
import { useEffect, useRef, useState } from "react";
import { useAddBlogPost } from "./useAddBlogPost";
import { generateSlug } from "../../helpers/generateSlug";
import { useTextEditor } from "../useTextEditor";
import { z } from "zod";
import { BlogDataPayload } from "../../utils/types/blogData";

type BlogFormData = z.infer<typeof formSchema>;

export const useFormValidation = () => {
  const { addBlog, isCreating } = useAddBlogPost();
  const [tags, setTags] = useState<string[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const tagInputRef = useRef<HTMLInputElement | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      featured_image_url: undefined,
      tags: [],
      meta_description: "",
      is_published: false,
      published_at: null,
    },
  });

  const imageFile = watch("featured_image_url");
  const isPublished = watch("is_published");
  const { editor } = useTextEditor("", (html: string) => {
    setValue("content", html);
  });

  // display previewed image

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      const url = URL.createObjectURL(file);
      setPreviewImage(url);

      return () => URL.revokeObjectURL(file);
    } else {
      setPreviewImage(null);
    }
  }, [imageFile]);

  // remove previewed image
  const handleRemovePreview = () => {
    setPreviewImage(null);
    setValue("featured_image_url", undefined);
  };

  // handle adding tags to blog posts
  const handleAddTag = () => {
    if (!tagInputRef.current) return;
    const val = tagInputRef.current.value.trim();
    if (val && !tags.includes(val)) {
      const newTags = [...tags, val];
      setTags(newTags);
      setValue("tags", newTags);
      tagInputRef.current.value = "";
    }
  };

  // remove tag
  const handleRemoveTag = (tag: string) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
    setValue("tags", newTags);
  };

  // catching validation errors
  const onError = (formErrors: FieldErrors<BlogFormData>) => {
    console.log("Validation Errors:", formErrors);
  };

  // submitting the data
  const onSubmit = async (data: BlogFormData) => {
    if (!data) {
      console.error("No form data submitted");
      return;
    }
    try {
      console.log("Form Data:", data);
      const { featured_image_url, ...rest } = data;
      const incoming = rest.slug ? rest.slug.trim() : "";
      const finalSlug = incoming.length
        ? generateSlug(incoming)
        : generateSlug(rest.title);

      let pubDate = rest.published_at;
      if (!pubDate || String(pubDate).trim() === "") {
        pubDate = null;
      }
      const payload:BlogDataPayload = {
        title: rest.title.trim(),
        slug: finalSlug,
        excerpt: (rest.excerpt ?? '').trim(),
        content: rest.content.trim(),
        meta_description: (rest.meta_description ?? '').trim(),
        tags: rest.tags ?? [],
        is_published: rest.is_published,
        published_at: pubDate,
      };

      await addBlog({
        blogData: payload,
        blogImage: featured_image_url || null,
      });
    } catch (err) {
      console.log("submission error", err);
    } finally {
      reset(); // clear all fields
      setTags([]); // clear tags
      setValue("content", ""); // clear react hook form content
      if (editor) {
        editor.commands.setContent(""); // clear tip tap content
      }
    }
  };
  return {
    register,
    handleSubmit,
    errors,
    isPublished,
    handleAddTag,
    handleRemoveTag,
    onSubmit,
    onError,
    tags,
    tagInputRef,
    previewImage,
    handleRemovePreview,
    isCreating,
    editor,
    setValue
  };
};
