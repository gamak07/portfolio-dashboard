'use client'

import { BlogCreateModal } from "@/features/blog/BlogCreateModal"
import { BlogDeleteModal } from "@/features/blog/BlogDeleteModal"
import { BlogPreviewModal } from "@/features/blog/BlogPreviewModal"
import { ProjectCreateModal } from "@/features/project/ProjectCreateModal"
import { ProjectDeleteModal } from "@/features/project/ProjectDeleteModal"
import { ProjectPreviewModal } from "@/features/project/ProjectPreviewModal"
import { useModal } from "@/lib/modalContext"


export function GlobalModalWrapper() {
  const { activeModal, openModal, closeModal, data } = useModal()

  

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
      />

      <BlogCreateModal
        open={activeModal === 'blog'} 
        onOpenChange={(isOpen) => !isOpen && closeModal()} 
        initialData={data}
      />

      <BlogPreviewModal
        open={activeModal === 'blog-view'} 
        onOpenChange={(isOpen) => !isOpen && closeModal()} 
        blog={data}
        onEdit={() => {
           // Switch from View -> Edit mode
           openModal('blog', data)
        }}
      />

      <BlogDeleteModal
        open={activeModal === 'blog-delete'} 
        onOpenChange={(isOpen) => !isOpen && closeModal()} 
        blog={data}
      />
    </>
  )
}