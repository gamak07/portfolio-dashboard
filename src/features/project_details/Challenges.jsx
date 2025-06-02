import React from "react";
import { useProjectDetails } from "./useProjectDetails";
import Spinner from "../../components/Spinner";

const Challenges = () => {
  const { project, isLoading } = useProjectDetails();
  if (isLoading) return <Spinner />;
  const { challenges } = project;
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-red-600">Challenges</h1>
      <div className="text-sm font-medium text-gray-500">{challenges}</div>
    </div>
  );
};

export default Challenges;
