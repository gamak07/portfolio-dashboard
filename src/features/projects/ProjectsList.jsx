import React, { useState } from "react";
import { useProjects } from "./useProjects";
import ProjectsListItems from "./ProjectsListItems";
import Spinner from "../../components/Spinner";

const ProjectsList = () => {
  const [showMenuDropdown, setShowMenuDropdown] = useState(null);
  const handleMenuDropdown = (index) => {
    setShowMenuDropdown((prev) => (prev === index ? null : index));
  };

  const { data, isLoading, error } = useProjects();
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col gap-6">
      {data?.map((project) => (
        <ProjectsListItems
          project={project}
          isLoading={isLoading}
          error={error}
          key={project.id}
          showMenuDropdown={showMenuDropdown}
          handleMenuDropdown={handleMenuDropdown}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
