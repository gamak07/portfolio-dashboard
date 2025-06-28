import { useForm } from "react-hook-form";
import { useUpdateBlogPost } from "../useUpdateBlogPost";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./schema";
import { useEffect, useRef, useState } from "react";
import { generateSlug } from "../../../helpers/generateSlug";
import { useTextEditor } from "../../../hooks/useTextEditor";

export const useEditBlog = (blog) => {
  const { editBlog, isEditing } = useUpdateBlogPost();
  const [tags, setTags] = useState([]);
  const tagInputRef = useRef(null);
  //   const isEdit = Boolean(blog && blog.id);
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
      published_at: null,
    },
  });

  // Preview URL state
  const [previewImage, setPreviewImage] = useState(null);
  const isPublished = watch("is_published");

  const { editor } = useTextEditor(blog?.content || "", (html) => {
    setValue("content", html);
  });

  // 1) If initialData arrives, reset form fields and set preview
  useEffect(() => {
    if (blog) {
      reset({
        ...blog,
        featured_image_url: undefined, // file input can't be set programmatically
        tags: blog.tags || [],
      });
      setTags(blog.tags || []);
      if (blog.featured_image_url) {
        setPreviewImage(blog.featured_image_url);
      }
    }
  }, [blog]);

  // 2) Watch file input for new selection and generate preview
  const imageFileList = watch("featured_image_url");
  useEffect(() => {
    if (imageFileList && imageFileList.length > 0) {
      const file = imageFileList[0];
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageFileList]);

  // 3) Remove preview and clear the file input in RHF
  const handleRemovePreview = () => {
    setPreviewImage(null);
    setValue("featured_image_url", undefined);
  };

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

  // 4) Submit handler delegates to onSave callback
  const submitHandler = handleSubmit(async (data) => {
    // data.featured_image_url is either undefined or a single File (thanks to your Zod transform)
    const file = data.featured_image_url || null;

    const initialSlug = data?.slug || "";
    const incomingSlug = data.slug.trim();

    const hasUserSetSlug = incomingSlug !== initialSlug;

    const finalSlug = hasUserSetSlug
      ? generateSlug(incomingSlug)
      : generateSlug(data.title);

    // build payload object
    const payload = {
      title: data.title,
      slug: finalSlug,
      excerpt: data.excerpt,
      content: data.content,
      meta_description: data.meta_description,
      tags: data.tags,
      is_published: data.is_published,
      published_at: data.published_at,
    };

    await editBlog({ id: blog.id, blogData: payload, blogImage: file });
  });

  return {
    register,
    handleSubmit,
    errors,
    isPublished,
    handleAddTag,
    handleRemoveTag,
    onSubmit: submitHandler,
    onError,
    tags,
    tagInputRef,
    previewImage,
    handleRemovePreview,
    isEditing,
    editor,
    // you can also return watch("is_published"), tags logic, etc.
  };
};
