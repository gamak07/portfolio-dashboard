import React from "react";
import { useProjectDetails } from "../../hooks/projects/useProjectDetails";
import Spinner from "../../components/Spinner";

const Tags = () => {
  const { project, isLoading } = useProjectDetails();
  if (isLoading) return <Spinner />;
  if (!project) {
    return <div>Project not found.</div>; // Or return null
  }
  const { tags } = project;
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Tags</h1>
      <div className="flex flex-wrap gap-3">
        {tags?.map((tag, i) => (
          <span
            key={i}
            className="inline-flex gap-3 rounded-full border border-gray-200 px-2 py-1 text-sm font-medium text-gray-800"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tags;
