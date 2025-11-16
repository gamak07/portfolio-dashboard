import React from "react";
import { useProjectDetails } from "../../hooks/projects/useProjectDetails";
import Spinner from "../../components/Spinner";

const TeamMembers = () => {
  const { project, isLoading } = useProjectDetails();
  if (isLoading) return <Spinner />;
  if (!project) {
    return <div>Project not found.</div>; // Or return null
  }
  const { team_members } = project;
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Team Members</h1>
      <div className="space-y-3">
        {team_members?.map((team, i) => (
          <div key={i}>
            <p className="text-sm font-medium text-gray-900">{team.name}</p>
            <p className="text-xs font-medium text-gray-500">{team.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
