export type Blog = {
  id: string
  created_at: string
  updated_at: string
  
  // Core Content
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  cover_image: string | null
  
  // Metadata
  tags: string[] | null
  category: string | null
  author: string | null // Added to match your UI inputs
  reading_time_minutes: number
  is_published: boolean
  
  // Analytics
  views: number
}