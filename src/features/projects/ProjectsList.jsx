import React from "react";
import { useProjects } from "./useProjects";
import ProjectsListItems from "./ProjectsListItems";
import Spinner from "../../components/Spinner";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const ProjectsList = () => {
  const {
    toggleDropdown,
    isOpen,
    dropdownRef,
    registerIgnoreRef,
    clearIgnoreRefs,
  } = useOutsideClick();

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
          showMenuDropdown={isOpen}
          handleMenuDropdown={toggleDropdown}
          dropdownRef={dropdownRef}
          registerIgnoreRef={registerIgnoreRef}
          clearIgnoreRefs={clearIgnoreRefs}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
