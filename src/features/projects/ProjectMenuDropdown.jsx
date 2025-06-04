import React, { useState } from "react";
import { FaArchive, FaEdit, FaEye, FaShare, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AddNewProjects from "./AddNewProject/AddNewProjects";
import { createPortal } from "react-dom";
import { useDeleteProject } from "./useDeleteProject";

const ProjectMenuDropdown = ({ project }) => {
  const navigate = useNavigate();
  const { delProject } = useDeleteProject();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditModal = (e) => {
    e.stopPropagation();
    setIsEditModalOpen(true);
  };

  const handleDeleteProject = (e, id) => {
    e.stopPropagation();
    const confirm = window.confirm(
      "Are you sure you want to delete this project",
    );
    if (!confirm) return;
    delProject({ id });
  };

  return (
    <>
      <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg bg-white py-1 shadow-lg dark:bg-gray-800">
        <div
          className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          onClick={() => navigate(`/project/${project.id}`)}
        >
          <FaEye className="mr-2" /> View Details
        </div>
        <div
          className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          onClick={handleEditModal}
        >
          <FaEdit className="mr-2" /> Edit Project
        </div>
        <div className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
          <FaShare className="mr-2" /> Share Project
        </div>
        <div className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
          <FaArchive className="mr-2" /> Archive
        </div>
        <div
          className="flex w-full items-center px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-800"
          onClick={(e) => handleDeleteProject(e, project.id)}
        >
          <FaTrashAlt className="mr-2" /> Delete
        </div>
      </div>

      {isEditModalOpen &&
        createPortal(
          <AddNewProjects
            initialData={project}
            setAddNewProjectModal={setIsEditModalOpen}
          />,
          document.body,
        )}
    </>
  );
};

export default ProjectMenuDropdown;
