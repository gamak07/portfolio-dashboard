import { data } from "react-router-dom";
import { supabase } from "./supabase";

export const getProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) throw new Error("Error fetching data");

  return data;
};

const uploadImages = async (file, folder = "") => {
  if (!file) return;

  const fileExt = file.name.split(".").pop();
  const uniqueName = `${Date.now()}-${Math.random().toString(36).substr(2)}.${fileExt}`;
  const pathInBucket = folder ? `${folder}/${uniqueName}` : uniqueName;

  const { error: uploadError } = await supabase.storage
    .from("project-images")
    .upload(pathInBucket, file);

  if (uploadError) {
    console.error("Supabase upload error:", uploadError.message);
    throw uploadError;
  }

  const { data: urlData } = supabase.storage
    .from("project-images")
    .getPublicUrl(pathInBucket);

  return urlData.publicUrl;
};

export const addNewProjects = async (
  projectData,
  thumbnailFile,
  galleryFiles = [],
) => {
  try {
    // upload thumbnail
    let thumbnailUrl = null;
    if (thumbnailFile) {
      thumbnailUrl = await uploadImages(thumbnailFile, "projects/thumbnails");
    }

    // 2️⃣ Only upload gallery if array has File objects
    let galleryUrls = [];
    if (Array.isArray(galleryFiles) && galleryFiles.length > 0) {
      // Filter out any non-File (just in case)
      const filesOnly = galleryFiles.filter((f) => f instanceof File);
      galleryUrls = await Promise.all(
        filesOnly.map((file) => uploadImages(file, "projects/gallery"))
      );
    }

    const fullProjectData = {
      ...projectData,
      thumbnail_url: thumbnailUrl,
      gallery: galleryUrls, // text[] in Supabase
    };

    const { data, error } = await supabase
      .from("projects")
      .insert([fullProjectData])
      .select()
      .single();

    if (error) {
      console.error("Insert error:", error.message);
      throw error;
    }

    return data;
  } catch (err) {
    console.error("Failed to add project:", err.message);
    throw err;
  }
};
