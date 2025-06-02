import React from "react";
import { useProjectDetails } from "./useProjectDetails";
import Spinner from "../../components/Spinner";

const ProjectOverview = () => {
  const { project, isLoading } = useProjectDetails();
  if (isLoading) return <Spinner />;
  const { description } = project;
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Project Overview</h1>
      <p className="text-sm font-medium text-gray-500">{description}</p>
    </div>
  );
};

export default ProjectOverview;
