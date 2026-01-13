'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '../supabase/server'

// --- HELPER: Upload File ---
async function uploadFile(file: File, folder: 'thumbnail' | 'gallery') {
  const supabase = await createClient()
  
  // Clean filename to avoid special characters issues
  const cleanName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_')
  const fileName = `${Date.now()}-${cleanName}`
  const filePath = `project_images/${folder}/${fileName}`

  const { error } = await supabase.storage
    .from('portfolio')
    .upload(filePath, file)

  if (error) {
    console.error(`Error uploading ${folder}:`, error)
    throw new Error(`Failed to upload ${folder}`)
  }

  // Get the Public URL
  const { data } = supabase.storage
    .from('portfolio')
    .getPublicUrl(filePath)

  return data.publicUrl
}

function getStoragePath(fullUrl: string): string | null {
  if (!fullUrl) return null
  try {
    const url = new URL(fullUrl)
    // The path after '/storage/v1/object/public/portfolio/' is what we need
    const pathParts = url.pathname.split('/portfolio/')
    return pathParts.length > 1 ? decodeURIComponent(pathParts[1]) : null
  } catch (error) {
    console.error("Error parsing URL:", fullUrl)
    return null
  }
}

// --- CREATE PROJECT ---
export async function createProject(formData: FormData) {
  const supabase = await createClient()

  // 1. Extract Files
  const thumbnailFile = formData.get('thumbnail') as File | null
  const galleryFiles = formData.getAll('gallery') as File[]

  // 2. Upload Thumbnail
  let thumbnailUrl = ''
  if (thumbnailFile && thumbnailFile.size > 0) {
    try {
      thumbnailUrl = await uploadFile(thumbnailFile, 'thumbnail')
    } catch (e) {
      return { success: false, error: 'Failed to upload thumbnail' }
    }
  }

  // 3. Upload Gallery Images
  const galleryUrls: string[] = []
  if (galleryFiles.length > 0 && galleryFiles[0].size > 0) {
    try {
      for (const file of galleryFiles) {
        const url = await uploadFile(file, 'gallery')
        galleryUrls.push(url)
      }
    } catch (e) {
      return { success: false, error: 'Failed to upload gallery images' }
    }
  }

  // 4. Prepare Payload
  const rawPayload = {
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    description: formData.get('description') as string,
    featured: formData.get('featured') === 'true',
    type: formData.get('type') as string,
    status: formData.get('status') as string,
    category: formData.get('category') as string,
    thumbnail: thumbnailUrl,
    gallery: galleryUrls, 
    demo_url: formData.get('demo_url') as string,
    source_code_url: formData.get('source_code_url') as string,
    tech_stack: JSON.parse(formData.get('tech_stack') as string || '[]'),
    features: JSON.parse(formData.get('features') as string || '[]'),
    tags: JSON.parse(formData.get('tags') as string || '[]'),
    team_members: JSON.parse(formData.get('team_members') as string || '[]'),
    frontend: formData.get('frontend') as string,
    backend: formData.get('backend') as string,
    database: formData.get('database') as string,
    start_date: formData.get('start_date') || null,
    end_date: formData.get('end_date') || null,
    duration: formData.get('duration') as string,
    challenges: formData.get('challenges') as string,
    learnings: formData.get('learnings') as string,
  }

  // 5. Insert DB Record
  const { error } = await supabase.from('projects').insert(rawPayload)

  if (error) {
    console.error('DB Insert Error:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/content')
  return { success: true }
}


export async function updateProject(projectId: string, formData: FormData) {
  const supabase = await createClient()

  // 1. Fetch current project data to compare images
  const { data: currentProject, error: fetchError } = await supabase
    .from('projects')
    .select('*')
    .eq('id', projectId)
    .single()

  if (fetchError || !currentProject) {
    return { success: false, error: 'Project not found' }
  }

  const oldThumbnail = currentProject.thumbnail
  const oldGallery = currentProject.gallery || []

  // 2. Handle Thumbnail
  // If a new file is uploaded, use it. Otherwise, look for the 'thumbnail_url' string from the form.
  // If the user removed the image, this might be empty.
  const thumbnailFile = formData.get('thumbnail') as File | null
  let finalThumbnailUrl = formData.get('thumbnail_url') as string || null

  if (thumbnailFile && thumbnailFile.size > 0) {
    // A. Upload new file
    try {
      finalThumbnailUrl = await uploadFile(thumbnailFile, 'thumbnail')
      
      // B. Delete old file if it exists and is different
      if (oldThumbnail) {
        const path = getStoragePath(oldThumbnail)
        if (path) await supabase.storage.from('portfolio').remove([path])
      }
    } catch (e) {
      return { success: false, error: 'Failed to upload new thumbnail' }
    }
  }

  // 3. Handle Gallery
  // The form should send 'existing_gallery' (array of strings) and 'gallery' (new files)
  const existingGalleryUrls = JSON.parse(formData.get('existing_gallery') as string || '[]')
  const newGalleryFiles = formData.getAll('gallery') as File[]
  
  const finalGalleryUrls: string[] = [...existingGalleryUrls]

  // A. Upload new gallery files
  if (newGalleryFiles.length > 0 && newGalleryFiles[0].size > 0) {
    try {
      for (const file of newGalleryFiles) {
        const url = await uploadFile(file, 'gallery')
        finalGalleryUrls.push(url)
      }
    } catch (e) {
      return { success: false, error: 'Failed to upload new gallery images' }
    }
  }

  // B. Clean up deleted gallery images
  // Identify URLs that were in DB but are NOT in the final list
  const imagesToDelete = oldGallery.filter((url: string) => !finalGalleryUrls.includes(url))
  
  if (imagesToDelete.length > 0) {
    const pathsToDelete = imagesToDelete
      .map((url: string) => getStoragePath(url))
      .filter((path: string | null): path is string => path !== null)
    
    if (pathsToDelete.length > 0) {
      await supabase.storage.from('portfolio').remove(pathsToDelete)
    }
  }

  // 4. Prepare Update Payload
  const updatePayload = {
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    description: formData.get('description') as string,
    featured: formData.get('featured') === 'true',
    type: formData.get('type') as string,
    status: formData.get('status') as string,
    category: formData.get('category') as string,
    
    // Updated Media
    thumbnail: finalThumbnailUrl,
    gallery: finalGalleryUrls,
    
    demo_url: formData.get('demo_url') as string,
    source_code_url: formData.get('source_code_url') as string,
    tech_stack: JSON.parse(formData.get('tech_stack') as string || '[]'),
    features: JSON.parse(formData.get('features') as string || '[]'),
    tags: JSON.parse(formData.get('tags') as string || '[]'),
    team_members: JSON.parse(formData.get('team_members') as string || '[]'),
    frontend: formData.get('frontend') as string,
    backend: formData.get('backend') as string,
    database: formData.get('database') as string,
    start_date: formData.get('start_date') || null,
    end_date: formData.get('end_date') || null,
    duration: formData.get('duration') as string,
    challenges: formData.get('challenges') as string,
    learnings: formData.get('learnings') as string,
    updated_at: new Date().toISOString(), // Update timestamp
  }

  // 5. Update Database
  const { error } = await supabase
    .from('projects')
    .update(updatePayload)
    .eq('id', projectId)

  if (error) {
    console.error('Update Error:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/content')
  return { success: true }
}

// --- DELETE PROJECT ---
export async function deleteProject(projectId: string) {
  const supabase = await createClient()

  // 1. Fetch project first to get image URLs
  const { data: project, error: fetchError } = await supabase
    .from('projects')
    .select('thumbnail, gallery')
    .eq('id', projectId)
    .single()

  if (fetchError || !project) {
    return { success: false, error: 'Project not found' }
  }

  // 2. Collect all file paths to delete
  const pathsToDelete: string[] = []

  // Handle Thumbnail
  if (project.thumbnail) {
    const path = getStoragePath(project.thumbnail)
    if (path) pathsToDelete.push(path)
  }

  // Handle Gallery
  if (project.gallery && Array.isArray(project.gallery)) {
    project.gallery.forEach((url: string) => {
      const path = getStoragePath(url)
      if (path) pathsToDelete.push(path)
    })
  }

  // 3. Delete files from Storage (if any exist)
  if (pathsToDelete.length > 0) {
    const { error: storageError } = await supabase.storage
      .from('portfolio')
      .remove(pathsToDelete)
    
    if (storageError) {
      console.error('Storage Delete Error:', storageError)
    }
  }

  // 4. Delete the Database Record
  const { error: dbError } = await supabase
    .from('projects')
    .delete()
    .eq('id', projectId)

  if (dbError) {
    return { success: false, error: dbError.message }
  }

  revalidatePath('/content')
  return { success: true }
}

// --- READ PROJECTS (For Client Components if needed) ---
export async function getProjects() {
    const supabase = await createClient()
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
    return data || []
}