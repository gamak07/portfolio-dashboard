// lib/types.ts

export type Project = {
  id: string
  created_at: string
  updated_at: string
  
  // Basic Info
  title: string
  slug: string
  description: string
  featured: boolean
  type: 'Web' | 'Mobile'
  status: 'Published' | 'In Progress' | 'Completed' | 'Paused' | 'In Review'
  category: 'Personal' | 'Freelance' | 'Hackathon'
  
  // Media
  thumbnail: string | null
  gallery: string[]
  demo_url: string | null
  source_code_url: string | null
  
  // Tech Details
  tech_stack: string[]
  frontend: string | null
  backend: string | null
  database: string | null
  
  // Timeline
  start_date: string | null
  end_date: string | null
  duration: string | null
  
  // Deep Dive
  features: string[]
  challenges: string | null
  learnings: string | null
  tags: string[]
  
  // Team
  team_members: { name: string; role: string }[]
  
  // Analytics
  views: number
  clicks: number
}