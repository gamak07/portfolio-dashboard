// hooks/useImageUpload.js
import { useFormContext } from "react-hook-form";
import { useState, useEffect } from "react";
import { getImageUrl } from "../../../helpers/getImageUrl";

export const useImageUpload = () => {
  const { watch, setValue } = useFormContext();

  // preview states (data URLs) for immediate previews
  const [coverPreview, setCoverPreview] = useState("");
  const [galleryPreviews, setGalleryPreviews] = useState([]);

  // watch the raw File objects in form
  const imageFile = watch("image"); // either File or undefined
  const galleryFiles = watch("gallery"); // either File[] or []

  // whenever a new cover‐File is set, create a dataURL for preview
  useEffect(() => {
    if (imageFile instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => setCoverPreview(reader.result);
      reader.readAsDataURL(imageFile);
    } else if (typeof imageFile === "string") {
      setCoverPreview(getImageUrl(imageFile)); // in case it's a URL string
    } else {
      setCoverPreview("");
    }
  }, [imageFile]);

  // whenever galleryFiles (array of Files) changes, generate array of dataURLs
  useEffect(() => {
    if (Array.isArray(galleryFiles) && galleryFiles.length > 0) {
      const previews = galleryFiles.map((file) => {
        if (file instanceof File) {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(file);
          });
        } else if (typeof file === "string") {
          return Promise.resolve(getImageUrl(file)); // ✅ convert to full URL
        }
        return null;
      });

      Promise.all(previews).then((urls) =>
        setGalleryPreviews(urls.filter(Boolean)),
      );
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
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length === 0) return;

    const existingFiles = watch("gallery") || [];

    const mergedFiles = [...existingFiles, ...newFiles];

    setValue("gallery", mergedFiles, { shouldValidate: true });
  };

  return {
    coverPreview,
    galleryPreviews,
    handleCoverSelect,
    handleGallerySelect,
  };
};
