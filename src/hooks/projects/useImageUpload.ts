import { useFormContext } from "react-hook-form";
import { useState, useEffect } from "react";
import { getImageUrl } from "../../helpers/getImageUrl";
import { ProjectFormData } from "../../utils/types/projectData";


export const useImageUpload = () => {
  // Provide the form data type to useFormContext
  const { watch, setValue } = useFormContext<ProjectFormData>();

  // Type the useState hooks
  const [coverPreview, setCoverPreview] = useState<string>("");
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

  // watch the raw File objects/strings in form
  const imageFile = watch("image"); // Type: File | string | undefined
  const galleryFiles = watch("gallery"); // Type: (File | string)[] | undefined

  // whenever a new cover‐File is set, create a dataURL for preview
  useEffect(() => {
    if (imageFile instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Check if the result is a string before setting
        if (typeof reader.result === "string") {
          setCoverPreview(reader.result);
        }
      };
      reader.readAsDataURL(imageFile);
    } else if (typeof imageFile === "string") {
      setCoverPreview(getImageUrl(imageFile)); // in case it's a URL string
    } else {
      setCoverPreview("");
    }
  }, [imageFile]);

  // whenever galleryFiles changes, generate array of dataURLs
  useEffect(() => {
    if (Array.isArray(galleryFiles) && galleryFiles.length > 0) {
      const previews = galleryFiles.map((file) => {
        if (file instanceof File) {
          // Return a promise that resolves with the data URL (string)
          return new Promise<string | null>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              resolve(
                typeof reader.result === "string" ? reader.result : null,
              );
            };
            reader.readAsDataURL(file);
          });
        } else if (typeof file === "string") {
          return Promise.resolve(getImageUrl(file)); // convert to full URL
        }
        return Promise.resolve(null); // Handle potential invalid items
      });

      Promise.all(previews).then((urls) =>
        // Use a type predicate to filter out nulls and satisfy TypeScript
        setGalleryPreviews(urls.filter((url): url is string => Boolean(url))),
      );
    } else {
      setGalleryPreviews([]);
    }
  }, [galleryFiles]);

  // Handler: on file select, store raw File in form
  const handleCoverSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setValue("image", file, { shouldValidate: true });
  };

  // Handler: on multiple select, store File[] in form
  const handleGallerySelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length === 0) return;

    const existingFiles = watch("gallery") || [];

    // This creates the correct (File | string)[]
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