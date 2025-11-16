import React from "react";
import { useProjectDetails } from "../../hooks/projects/useProjectDetails";
import Spinner from "../../components/Spinner";

const Timeline = () => {
  const { project, isLoading } = useProjectDetails();
  if (isLoading) return <Spinner />;
  if (!project) {
    return <div>Project not found.</div>; // Or return null
  }
  const { start_date, end_date, duration } = project;

  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Timeline</h1>
      <div className="mb-4 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal text-gray-500">Start Date</p>
          <p className="text-sm font-medium text-gray-900">{start_date}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal text-gray-500">End Date</p>
          <p className="text-sm font-medium text-gray-900">{end_date}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal text-gray-500">Duration</p>
          <p className="text-sm font-medium text-gray-900">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
