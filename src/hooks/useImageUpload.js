// hooks/useImageUpload.js
import { useFormContext } from "react-hook-form";
import { useState, useEffect } from "react";

export const useImageUpload = () => {
  const { watch, setValue } = useFormContext();

  // preview states (data URLs) for immediate previews
  const [coverPreview, setCoverPreview] = useState("");
  const [galleryPreviews, setGalleryPreviews] = useState([]);

  // watch the raw File objects in form
  const imageFile = watch("image");       // either File or undefined
  const galleryFiles = watch("gallery");  // either File[] or []

  // whenever a new cover‐File is set, create a dataURL for preview
  useEffect(() => {
    if (imageFile instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => setCoverPreview(reader.result);
      reader.readAsDataURL(imageFile);
    } else {
      setCoverPreview("");
    }
  }, [imageFile]);

  // whenever galleryFiles (array of Files) changes, generate array of dataURLs
  useEffect(() => {
    if (Array.isArray(galleryFiles) && galleryFiles.length > 0) {
      Promise.all(
        galleryFiles.map(
          (file) =>
            new Promise((resolve) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.readAsDataURL(file);
            })
        )
      ).then((urls) => setGalleryPreviews(urls));
    } else {
      setGalleryPreviews([]);
    }
  }, [galleryFiles]);

  // Handler: on file select, store raw File in form instead of uploading
  const handleCoverSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setValue("image", file, { shouldValidate: true });
  };

  // Handler: on multiple select, store File[] in form
  const handleGallerySelect = (e) => {
    const filesArr = Array.from(e.target.files || []);
    if (filesArr.length === 0) return;
    setValue("gallery", filesArr, { shouldValidate: true });
  };

  return {
    coverPreview,
    galleryPreviews,
    handleCoverSelect,
    handleGallerySelect,
  };
};
