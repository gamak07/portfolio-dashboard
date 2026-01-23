import { createClient } from "@/lib/supabase/client";

export async function uploadImage(file: File, folder: 'cover_image' | 'blog_image') {
  const supabase = createClient();
  
  // 1. Sanitize file name to avoid issues with special characters or duplicates
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `${folder}/${fileName}`; // e.g. cover_image/17354-random.jpg

  // 2. Upload to the 'portfolio' bucket
  const { data, error } = await supabase
    .storage
    .from('portfolio') // Make sure your Supabase bucket is named 'portfolio'
    .upload(filePath, file);

  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }

  // 3. Return the storage path (not the full URL yet, that gets generated on view)
  return filePath;
}