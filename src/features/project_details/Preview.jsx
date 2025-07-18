import React from "react";
import { useProjectDetails } from "./useProjectDetails";
import Spinner from "../../components/Spinner";
import {
  FaCalendar,
  FaClock,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { formatDate } from "../../helpers/formateDate";
import Button from "../../components/Button";
import { getImageUrl } from "../../helpers/getImageUrl";
import ToggleSwitch from "./ToggleSwitch";

const Preview = () => {
  // Fetch project details using custom hook
  // This hook should return the project data and a loading state
  const { project, isLoading } = useProjectDetails();
  if (isLoading) return <Spinner />;
  const {
    id,
    status,
    type,
    category,
    title,
    created_at,
    duration,
    thumbnail_url,
    demo_url,
    source_code_url,
    featured
  } = project;

  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`inline-flex rounded-full px-2 py-1 text-xs capitalize ${status === "completed" ? "bg-green-100 text-green-800" : ""}`}
            >
              {status}
            </span>
            <span
              className={`inline-flex rounded-full px-2 py-1 text-xs capitalize ${type === "web" ? "bg-gray-100 text-gray-800" : ""}`}
            >
              {type}
            </span>
            <span
              className={`inline-flex rounded-full px-2 py-1 text-xs capitalize ${category === "Personal" ? "bg-purple-100 text-purple-800" : ""}`}
            >
              {category}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-800 capitalize">
            {title}
          </h1>
          <div className="mb-4 flex items-center gap-4">
            <p className="flex items-center gap-1 text-base font-medium text-gray-500">
              <FaCalendar /> Created at {formatDate(created_at)}
            </p>
            <p className="flex items-center gap-1 text-base font-medium text-gray-500">
              <FaClock /> {duration}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button>
              <a
                className="flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                href={demo_url}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt /> View Demo
              </a>
            </Button>
            <Button>
              <a
                className="flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                href={source_code_url}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Source Code
              </a>
            </Button>
          </div>
          <ToggleSwitch label='Featured' featured={featured} id={id} />
        </div>
        <div className="">
          <img
            src={getImageUrl(thumbnail_url)}
            alt={title}
            className="h-80 w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;
