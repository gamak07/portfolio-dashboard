import React from "react";
import { useParams } from "react-router-dom";
import { useProjectDetails } from "../hooks/projects/useProjectDetails";
import Spinner from "../components/Spinner";
import Breadcrum from "../features/project_details/Breadcrum";
import Preview from "../features/project_details/Preview";
import ProjectOverview from "../features/project_details/ProjectOverview";
import Gallery from "../features/project_details/Gallery";
import KeyFeatures from "../features/project_details/KeyFeatures";
import Challenges from "../features/project_details/Challenges";
import Learning from "../features/project_details/Learning";
import TechStack from "../features/project_details/TechStack";
import Timeline from "../features/project_details/Timeline";
import TeamMembers from "../features/project_details/TeamMembers";
import MetricsAndFeedback from "../features/project_details/MetricsAndFeedback";
import Tags from "../features/project_details/Tags";

const ProjectDetails = () => {

  return (
    <div className="min-h-screen w-full bg-gray-50 sm:p-4 md:p-6 lg:p-8">
      <Breadcrum />
      <Preview />
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <ProjectOverview />
          <Gallery />
          <KeyFeatures />
          <div className="grid gap-4 lg:grid-cols-2">
            <Challenges />
            <Learning />
          </div>
        </div>
        <div className="space-y-6">
          <TechStack />
          <Timeline />
          <TeamMembers />
          <MetricsAndFeedback />
          <Tags />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
