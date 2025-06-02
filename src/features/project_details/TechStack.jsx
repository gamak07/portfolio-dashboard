import React from "react";
import { useProjectDetails } from "./useProjectDetails";
import Spinner from "../../components/Spinner";

const TechStack = () => {
  const { project, isLoading } = useProjectDetails();
  if (isLoading) return <Spinner />;
  const { frontend, backend, database, tech_stack } = project;
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Tech Stack</h1>
      <div className="mb-4">
        <div className="border-b border-gray-200 py-2">
          <h3 className="mb-3 text-base font-bold text-gray-800">Frontend</h3>
          <p className="mb-3 text-sm font-medium text-gray-500">{frontend}</p>
        </div>
        <div className="border-b border-gray-200 py-2">
          <h3 className="mb-3 text-base font-bold text-gray-800">Backend</h3>
          <p className="mb-3 text-sm font-medium text-gray-500">{backend}</p>
        </div>
        <div className="border-b border-gray-200 py-2">
          <h3 className="mb-3 text-base font-bold text-gray-800">Database</h3>
          <p className="mb-3 text-sm font-medium text-gray-500">{database}</p>
        </div>
        <div className="py-2">
          <h3 className="text-base font-bold text-gray-800">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {tech_stack?.map((stack, i) => (
              <span
                key={i}
                className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-gray-800"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
