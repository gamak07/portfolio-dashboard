import { z } from 'zod';
import { rootSchema } from '../../schemas/addNewProjectSchema';

export type ProjectFormData = z.infer<typeof rootSchema>;


export type Project = {
  id: string; // Or number
  created_at: string;
  updated_at:string
  title: string;
  slug: string;
  description: string;
  type: "web" | "mobile";
  status: "in progress" | "completed" | "paused" | "in review";
  thumbnail_url: string | null;
  gallery: string[] | null;
  demo_url: string | null;
  source_code_url: string | null;
  tech_stack: string[] | null;
  frontend: string | null;
  backend: string | null;
  database: string | null;
  start_date: string | null;
  end_date: string | null;
  duration: string | number | null;
  features: string[] | null; // Note: This is string[] (not a single string)
  challenges: string | null;
  learnings: string | null;
  tags: string[] | null;
  category: "Personal" | "Freelance" | "Hackhaton" | null;
  team_members: Array<{ name: string; role: string }> | null;

  visits?: number | null;
  stars?: number | null;
  comments?: string | null;
  featured:boolean
};


 
export type ProjectInsert = {
  title: string;
  slug: string;
  description: string;
  type: "web" | "mobile";
  status: "in progress" | "completed" | "paused" | "in review";
  demo_url?: string;
  source_code_url?: string;
  tech_stack?: string[];
  frontend?: string;
  backend?: string;
  database?: string;
  start_date?: string;
  end_date?: string;
  duration?: string | number;
  features?: string[];
  challenges?: string;
  learnings?: string;
  tags?: string[];
  featured?:boolean
  category?: "Personal" | "Freelance" | "Hackhaton";
  team_members?: Array<{ name: string; role: string }>;


  // This field is added in useEditProjectForm
  gallery?: string[];
};


export type ProjectUpdate = Partial<ProjectInsert>;