'use server'

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { Blog } from "@/lib/types/blog";


// generate a url-friendly slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // remove non-word chars
    .replace(/[\s_-]+/g, '-') // swap spaces for hyphens
    .replace(/^-+|-+$/g, ''); // remove leading/trailing hyphens
}

// calculate reading time (approx 200 words per minute)
function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}


/**
 * 1. READ: Fetch all blogs (for the dashboard list)
 */
export async function getBlogs() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }

  return data as Blog[];
}

/**
 * 2. READ: Fetch single blog by ID (for editing)
 */
export async function getBlogById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data as Blog;
}

/**
 * 3. CREATE: Add a new blog post
 */
export async function createBlog(formData: any) {
  const supabase = await createClient();

  // Auto-generate derived fields
  const slug = generateSlug(formData.title);
  const readingTime = calculateReadingTime(formData.content || "");

  const payload = {
    title: formData.title,
    slug: slug,
    author: formData.author,
    category: formData.category,
    excerpt: formData.excerpt,
    content: formData.content,
    cover_image: formData.cover_image,
    tags: formData.tags,
    is_published: formData.status === "Published",
    
    // Update Date (Crucial for changing status logic)
    created_at: formData.publishDate 
      ? new Date(formData.publishDate).toISOString() 
      : undefined,
      
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase.from('blogs').insert([payload]);

  if (error) {
    console.error("Create Blog Error:", error);
    return { success: false, error: error.message };
  }

  // Clear cache so the new post appears immediately
  revalidatePath('/'); 
  revalidatePath('/content'); 
  return { success: true };
}

/**
 * 4. UPDATE: Modify an existing blog post
 */
export async function updateBlog(id: string, formData: any) {
  const supabase = await createClient();

  const payload = {
    title: formData.title,
    author: formData.author,
    category: formData.category,
    excerpt: formData.excerpt,
    content: formData.content,
    cover_image: formData.cover_image, // This might be null if not changed
    tags: formData.tags,
    is_published: formData.status === "Published",
    
    created_at: formData.publishDate 
      ? new Date(formData.publishDate).toISOString() 
      : undefined,
    updated_at: new Date().toISOString(),
  };

  const { data: currentBlog } = await supabase.from('blogs').select('cover_image').eq('id', id).single();

  const { error } = await supabase
    .from('blogs')
    .update(payload)
    .eq('id', id);

  if (error) {
    console.error("Update Blog Error:", error);
    return { success: false, error: error.message };
  }

  if (!error) {
    // 3. Cleanup: If image CHANGED and OLD image existed, delete the OLD one
    if (currentBlog?.cover_image && payload.cover_image !== currentBlog.cover_image) {
      await supabase.storage.from('portfolio').remove([currentBlog.cover_image]);
    }
  }

  revalidatePath('/');
  revalidatePath('/content');
  return { success: true };
}

/**
 * 5. DELETE: Remove blog post AND clean up ALL associated images (Cover + Content)
 */
export async function deleteBlog(id: string) {
  const supabase = await createClient();

  // STEP 1: Fetch content and cover_image
  const { data: blog, error: fetchError } = await supabase
    .from('blogs')
    .select('cover_image, content')
    .eq('id', id)
    .single();

  if (fetchError) {
    return { success: false, error: fetchError.message };
  }

  // List of files to delete from the 'portfolio' bucket
  const filesToDelete: string[] = [];

  // A. Add Cover Image
  if (blog.cover_image) {
    filesToDelete.push(blog.cover_image);
  }

  // B. Extract 'blog_image' paths from the rich text Content
  if (blog.content) {
    // Regex to find strings like "blog_image/1735467-random.png"
    // It looks for "blog_image/" followed by valid filename characters
    const contentImages = blog.content.match(/blog_image\/[\w\-.]+/g);
    
    if (contentImages) {
      filesToDelete.push(...contentImages);
    }
  }

  // STEP 2: Delete ALL files from Storage at once
  if (filesToDelete.length > 0) {
    const { error: storageError } = await supabase
      .storage
      .from('portfolio')
      .remove(filesToDelete);

    if (storageError) {
      console.warn("⚠️ Storage cleanup failed (orphaned files may exist):", storageError.message);
    } else {
      console.log(`✅ Deleted ${filesToDelete.length} images (Cover + Content)`);
    }
  }

  // STEP 3: Delete the Record from DB
  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/');
  revalidatePath('/content');
  return { success: true };
}