import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "./schema";
import { useEffect, useRef, useState } from "react";
import { useAddBlogPost } from "../useAddBlogPost";

export const useFormValidation = () => {
  const { addBlog, isCreating } = useAddBlogPost();
  const [tags, setTags] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const tagInputRef = useRef(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
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
      published_at: "",
    },
  });

  const imageFile = watch("featured_image_url");
  const isPublished = watch("is_published");

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
  // const title = watch("title");
  // const slug = watch("slug");

  // Auto-generate slug from title if empty
  // useEffect(() => {
  //   if (!slug && title) {
  //     const generatedSlug = title
  //       .toLowerCase()
  //       .trim()
  //       .replace(/[^\w\s-]/g, "")
  //       .replace(/\s+/g, "-");
  //     setValue("slug", generatedSlug);
  //   }
  // }, [title, slug, setValue]);

  // handle adding tags to blog posts
  const handleAddTag = () => {
    const val = tagInputRef.current.value.trim();
    if (val && !tags.includes(val)) {
      const newTags = [...tags, val];
      setTags(newTags);
      setValue("tags", newTags);
      tagInputRef.current.value = "";
    }
  };


  // remove tag 
  const handleRemoveTag = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
    setValue("tags", newTags);
  };

  // catching validation errors
  const onError = (formErrors) => {
    console.log("Validation Errors:", formErrors);
  };

  // submitting the data
  const onSubmit = async (data) => {
    if (!data) {
      console.error("No form data submitted");
      return;
    }
    try {
      console.log("Form Data:", data);
      const { featured_image_url, ...rest } = data;

      if (!rest.slug) {
        rest.slug = rest.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      }
      const payload = {
        title: rest.title,
        slug: rest.slug,
        excerpt: rest.excerpt,
        content: rest.content,
        meta_description: rest.meta_description,
        tags: rest.tags,
        is_published: rest.is_published,
      };

      await addBlog({
        blogData: payload,
        blogImage: featured_image_url || null,
      });
    } catch (err) {
      console.log("submission error", err);
    } finally {
      reset();
      setTags([]);
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
    isCreating
  };
};
