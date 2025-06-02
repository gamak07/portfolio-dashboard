import React from "react";
import { useProjectDetails } from "./useProjectDetails";
import Spinner from "../../components/Spinner";
import { FaRegCheckCircle } from "react-icons/fa";

const KeyFeatures = () => {
  const { project, isLoading } = useProjectDetails();
  if (isLoading) return <Spinner />;

  const { features } = project;
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Key Features</h1>
      <ul className="space-y-2">
        {features?.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <FaRegCheckCircle className="text-green-600" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyFeatures;
