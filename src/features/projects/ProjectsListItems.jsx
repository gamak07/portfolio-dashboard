import React from "react";
import { formatDate } from "../../helpers/formateDate";
import { FaEllipsisH, FaEye, FaStar } from "react-icons/fa";
import ProjectMenuDropdown from "./ProjectMenuDropdown";
import { getImageUrl } from "../../helpers/getImageUrl";

const ProjectsListItems = ({
  project,
  error,
  showMenuDropdown,
  handleMenuDropdown,
}) => {
  if (error) console.log("Error fetching data");

  const {
    id,
    title,
    description,
    status,
    thumbnail_url,
    visits,
    stars,
    tech_stack,
    updated_at,
    progress,
  } = project;
  return (
    <div
      key={id}
      className="flex rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800"
    >
      <div className="relative w-1/3">
        <img
          src={getImageUrl(thumbnail_url)}
          alt={title}
          className="h-48 w-full object-cover object-top"
        />
        <div
          className="absolute top-3 right-3"
          onClick={() => handleMenuDropdown(id)}
        >
          <div className="cursor-pointer rounded-full bg-white p-2 opacity-90 shadow-sm dark:bg-gray-800">
            <FaEllipsisH className="text-gray-600 dark:text-gray-400" />
          </div>
          {showMenuDropdown === id && <ProjectMenuDropdown project={project} />}
        </div>
      </div>
      <div className="w-2/3 p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="cursor-pointer text-lg font-semibold text-gray-800 hover:text-indigo-600 dark:text-white">
            {title}
          </h3>
          <div
            className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${status === "In Progress" ? "bg-blue-100 text-blue-800" : status === "In Review" ? "bg-yellow-100 text-yellow-800" : status === "completed" ? "bg-green-100 text-green-800" : ""}`}
          >
            {status}
          </div>
        </div>
        <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="mb-3 flex flex-wrap gap-1">
          {tech_stack?.map((tech, i) => (
            <span
              className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-800 dark:bg-gray-600 dark:text-white"
              key={i}
            >
              {tech}
            </span>
          ))}
        </div>
        {status === "In Progress" && (
          <div className="mb-3">
            <div className="mb-1 flex justify-between text-xs">
              <span className="text-gray-600 dark:text-gray-400">Progress</span>
              <span className="font-medium dark:text-gray-400">
                {progress}%
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-white">
              <div
                className="h-full rounded-full bg-indigo-600 dark:bg-indigo-700"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
        <div className="mt-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <FaEye className="mr-1" />
            <span>{visits}</span>
          </div>
          <div className="flex items-center">
            <FaStar className="mr-1" /> <span>{stars}</span>
          </div>
          <div>
            <span>{formatDate(updated_at)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsListItems;
