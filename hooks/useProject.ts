'use client'

import { createProject, deleteProject, getProjects, updateProject } from '@/lib/actions/projects'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export function useCreateProject() {
  const queryClient = useQueryClient()

  return useMutation({
    // mutationFn receives the FormData from your form
    mutationFn: async (formData: FormData) => {
      const result = await createProject(formData)
    
      if (!result.success) {
        throw new Error(result.error || 'Failed to create project')
      }
      
      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    }
  })
}

export function useUpdateProject() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, formData }: { id: string; formData: FormData }) => {
      const result = await updateProject(id, formData)
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to update project')
      }
      
      return result
    },
    onSuccess: () => {
      // Refresh the list AND the specific project details (if you have a detail view)
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    }
  })
}

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const data = await getProjects()
      return data || []
    },
  })
}

// --- NEW: Delete Project Hook ---
export function useDeleteProject() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (projectId: string) => {
      const result = await deleteProject(projectId)
      if (!result.success) throw new Error(result.error)
      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    }
  })
}