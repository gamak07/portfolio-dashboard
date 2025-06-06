import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "./schema";
import { useEffect, useRef, useState } from "react";

export const useFormValidation = () => {
  const [tags, setTags] = useState([]);
  const tagInputRef = useRef(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      is_published: false,
      tags: [],
    },
  });

  const isPublished = watch("is_published");
  const title = watch("title");
  const slug = watch("slug");

  // Auto-generate slug from title if empty
  useEffect(() => {
    if (!slug && title) {
      const generatedSlug = title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      setValue("slug", generatedSlug);
    }
  }, [title, slug, setValue]);

  const handleAddTag = () => {
    const val = tagInputRef.current.value.trim();
    if (val && !tags.includes(val)) {
      const newTags = [...tags, val];
      setTags(newTags);
      setValue("tags", newTags);
      tagInputRef.current.value = "";
    }
  };

  const handleRemoveTag = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
    setValue("tags", newTags);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return {
    register,
    handleSubmit,
    errors,
    isPublished,
    handleAddTag,
    handleRemoveTag,
    onSubmit,
    tags,
    tagInputRef,
  };
};
