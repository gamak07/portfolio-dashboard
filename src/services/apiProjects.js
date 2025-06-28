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

  return { path: pathInBucket, publicUrl: urlData.publicUrl };
};

export const addNewProjects = async (
  projectData,
  thumbnailFile,
  galleryFiles = [],
) => {
  try {
    // upload thumbnail
    const thumbnailUpload = thumbnailFile
      ? await uploadImages(thumbnailFile, "projects/thumbnails")
      : null;

    const galleryUploads = galleryFiles.length
      ? await Promise.all(
          galleryFiles
            .filter((f) => f instanceof File)
            .map((file) => uploadImages(file, "projects/gallery")),
        )
      : [];

    const fullProjectData = {
      ...projectData,
      thumbnail_url: thumbnailUpload?.path ?? null,
      gallery: galleryUploads?.map((img) => img.path), // text[] in Supabase
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

export const projectDetails = async (id) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("details error:", error.message);
    throw error;
  }

  return data;
};

export const updateProject = async (
  id,
  projectData,
  thumbnailFile,
  galleryFiles = [],
) => {
  try {
    const { data: existingProject, error: fetchError } = await supabase
      .from("projects")
      .select("thumbnail_url, gallery")
      .eq("id", id)
      .single();

    if (fetchError) {
      console.error("Fetch error:", fetchError.message);
      throw fetchError;
    }

    // Upload new thumbnail if provided
    let thumbnailPath = existingProject.thumbnail_url;
    if (thumbnailFile) {
      const uploaded = await uploadImages(thumbnailFile, "projects/thumbnails");
      thumbnailPath = uploaded.path;

      // Delete old thumbnail
      if (existingProject.thumbnail_url) {
        await supabase.storage
          .from("project-images")
          .remove([existingProject.thumbnail_url]);
      }
    }

    // Upload new gallery files
    const filesOnly = galleryFiles.filter((f) => f instanceof File);
    const newGalleryUploads = await Promise.all(
      filesOnly.map((file) => uploadImages(file, "projects/gallery"))
    );
    const newGalleryPaths = newGalleryUploads.map((img) => img.path);

    // Determine which existing gallery images to remove
    const oldGallery = Array.isArray(existingProject.gallery)
      ? existingProject.gallery
      : [];

    const removedGalleryImages = oldGallery.filter(
      (oldPath) => !(projectData.gallery || []).includes(oldPath)
    );

    if (removedGalleryImages.length > 0) {
      const { error: deleteError } = await supabase.storage
        .from("project-images")
        .remove(removedGalleryImages);

      if (deleteError) {
        console.error("Error deleting old gallery images:", deleteError.message);
        throw deleteError;
      }
    }

    const finalGallery = [
      ...(projectData.gallery?.filter((g) => typeof g === "string") || []),
      ...newGalleryPaths,
    ];

    const fullProjectData = {
      ...projectData,
      thumbnail_url: thumbnailPath,
      gallery: finalGallery,
    };

    const { data, error } = await supabase
      .from("projects")
      .update(fullProjectData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Update error:", error.message);
      throw error;
    }

    return data;
  } catch (err) {
    console.error("Failed to update project:", err.message);
    throw err;
  }
};


export const deleteProject = async (id) => {
  const { data: record, error: fetchError } = await supabase
    .from("projects")
    .select("thumbnail_url, gallery")
    .eq("id", id)
    .single();

  if (fetchError) {
    console.error("error fetching image urls", fetchError);
  }
  const pathsToDelete = [];
  if (record.thumbnail_url) pathsToDelete.push(record.thumbnail_url);
  if (Array.isArray(record.gallery)) pathsToDelete.push(...record.gallery);

  if (pathsToDelete.length > 0) {
    const { error: storageError } = await supabase.storage
      .from("project-images")
      .remove(pathsToDelete);
    if (storageError) {
      console.error("error deleting image from bucket", storageError);
      return;
    }
  }
  const { error: deleteError } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);
  if (deleteError) {
    console.error("error deleting row", deleteError);
  }
};
