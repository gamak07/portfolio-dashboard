import React from "react";
import { useProjectDetails } from "./useProjectDetails";
import Spinner from "../../components/Spinner";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const MetricsAndFeedback = () => {
  const { project, isLoading } = useProjectDetails();
  if (isLoading) return <Spinner />;
  const { visits, stars, comments } = project;
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">
        Metrics & Feedbacks
      </h1>
      <div className="space-y-3 border-b pb-4 border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <FaEye /> Visits
          </div>
          <p>{visits}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <FaStar /> Stars
          </div>
          <p>{stars}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            Ratings
          </div>
          <p>{stars / 5}</p>
        </div>
      </div>
      <div className="text-base italic text-gray-500">{comments}</div>
    </div>
  );
};

export default MetricsAndFeedback;
