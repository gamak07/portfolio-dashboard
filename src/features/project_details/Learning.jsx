import React from "react";
import { useProjectDetails } from "./useProjectDetails";
import Spinner from "../../components/Spinner";

const Learning = () => {
  const { project, isLoading } = useProjectDetails();
  if (isLoading) return <Spinner />;
  const { learnings } = project;
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-green-600">Learnings</h1>
      <div className="text-sm font-medium text-gray-500">{learnings}</div>
    </div>
  );
};

export default Learning;
