'use client'

import { ProjectCreateModal } from "@/features/project/ProjectCreateModal"
import { ProjectDeleteModal } from "@/features/project/ProjectDeleteModal"
import { ProjectPreviewModal } from "@/features/project/ProjectPreviewModal"
import { useModal } from "@/lib/modalContext"

// import { BlogCreateModal } from "@/components/admin/content/blog/blog-create-modal" // Coming soon

export function GlobalModalWrapper() {
  const { activeModal, closeModal, data } = useModal()

  const handleDelete = () => {
    console.log("Deleting project:", data.id)
    // Here you would call your API to delete the project
    closeModal()
  }

  return (
    <>
      {/* Project Modal */}
      <ProjectCreateModal 
        open={activeModal === 'project'} 
        onOpenChange={(isOpen) => !isOpen && closeModal()} 
        initialData={data}
      />

      <ProjectPreviewModal
        open={activeModal === 'project-view'} 
        onOpenChange={(isOpen) => !isOpen && closeModal()} 
        project={data} 
      />

      <ProjectDeleteModal
        open={activeModal === 'project-delete'} 
        onOpenChange={(isOpen) => !isOpen && closeModal()} 
        project={data}
        onConfirm={handleDelete}
      />

      {/* Blog Modal (Placeholder for now) */}
      {/* <BlogCreateModal 
        open={activeModal === 'blog'} 
        onOpenChange={(isOpen) => !isOpen && closeModal()} 
      /> 
      */}
    </>
  )
}