import React from "react";
import Breadcrum from "../features/dashboard/Breadcrum";
import Stats from "../features/dashboard/Stats";
import Charts from "../features/dashboard/Charts";
import RecentActivity from "../features/dashboard/RecentActivity";
import GithubActivity from "../features/dashboard/GithubActivity";
import RecentProjects from "../features/dashboard/RecentProjects";
import BlogPosts from "../features/dashboard/BlogPosts";

const Dashboard = () => {
  return (
    <>
      <Breadcrum />
      <Stats />
      <Charts />
      <div className="md:flex gap-6 mb-6">
        <RecentActivity />
        <GithubActivity />
      </div>
      <RecentProjects />
      <BlogPosts />
    </>
  );
};

export default Dashboard;
