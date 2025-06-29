import React from "react";
import { FaEllipsisH, FaEye, FaStar } from "react-icons/fa";
import ProjectMenuDropdown from "./ProjectMenuDropdown";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useProjects } from "./useProjects";
import Spinner from "../../components/Spinner";
import { getImageUrl } from "../../helpers/getImageUrl";
import { formatDate } from "../../helpers/formateDate";

const ProjectsGrid = () => {
  const {
    toggleDropdown,
    isOpen,
    dropdownRef,
    registerIgnoreRef,
    clearIgnoreRefs,
  } = useOutsideClick();
  const { data, isLoading } = useProjects();
  if (isLoading) return <Spinner />;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((project) => {
        const isOpenDropdown = isOpen === project.id;
        return (
          <div
            ref={isOpenDropdown ? dropdownRef : null}
            key={project.id}
            className="overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800"
          >
            <div className="relative w-full">
              <img
                src={getImageUrl(project.thumbnail_url)}
                alt={project.title}
                className="h-48 w-full object-cover object-top"
              />
              <div
                className="absolute top-3 right-3"
                onClick={() => toggleDropdown(project.id)}
              >
                <div className="cursor-pointer rounded-full bg-white p-2 opacity-90 shadow-sm dark:bg-gray-800">
                  <FaEllipsisH className="text-gray-600 dark:text-gray-400" />
                </div>
                {isOpen === project.id && (
                  <ProjectMenuDropdown
                    project={project}
                    clearIgnoreRefs={clearIgnoreRefs}
                    registerIgnoreRef={registerIgnoreRef}
                  />
                )}
              </div>
            </div>
            <div className="-z-70 p-4">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="cursor-pointer text-lg font-semibold text-gray-800 hover:text-indigo-600 dark:text-white">
                  {project.title}
                </h3>
                <div
                  className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${project.status === "In Progress" ? "bg-blue-100 text-blue-800" : project.status === "In Review" ? "bg-yellow-100 text-yellow-800" : project.status === "completed" ? "bg-green-100 text-green-800" : project.status === "paused" ? "bg-gray-100 text-gray-800" : ""}`}
                >
                  {project.status}
                </div>
              </div>
              <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-1">
                {project?.tech_stack?.map((tech, i) => (
                  <span
                    className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-800 dark:bg-gray-600 dark:text-white"
                    key={i}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <FaEye className="mr-1" />
                  <span>{project.visits}</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="mr-1" /> <span>{project.stars}</span>
                </div>
                <div>
                  <span>{formatDate(project.updated_at)}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsGrid;
