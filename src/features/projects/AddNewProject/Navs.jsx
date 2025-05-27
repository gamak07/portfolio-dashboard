import React, { useState } from "react";
import InfoForm from "./InfoForm";
import MediaForm from "./MediaForm";
import TechForm from "./TechForm";
import TimelineForm from "./TimelineForm";
import FeaturesForm from "./FeaturesForm";
import TeamForm from "./TeamForm";

const Navs = () => {
  const [activeNav, setIsActiveNav] = useState("info");
  const handleActiveNav = (nav) => {
    setIsActiveNav(nav);
  };
  return (
    <>
      <nav className="mb-6 w-full rounded-md bg-gray-100 p-1">
        <ul className="flex items-center justify-between">
          <li
            className={`flex flex-1 cursor-pointer justify-center rounded-md py-1.5 text-sm font-medium ${activeNav === "info" ? "bg-white text-gray-800" : "bg-transparent text-gray-400"}`}
            onClick={() => handleActiveNav("info")}
          >
            Info
          </li>
          <li
            className={`flex flex-1 cursor-pointer justify-center rounded-md py-1.5 text-sm font-medium ${activeNav === "media" ? "bg-white text-gray-800" : "bg-transparent text-gray-400"}`}
            onClick={() => handleActiveNav("media")}
          >
            Media
          </li>
          <li
            className={`flex flex-1 cursor-pointer justify-center rounded-md py-1.5 text-sm font-medium ${activeNav === "tech" ? "bg-white text-gray-800" : "bg-transparent text-gray-400"}`}
            onClick={() => handleActiveNav("tech")}
          >
            Tech
          </li>
          <li
            className={`flex flex-1 cursor-pointer justify-center rounded-md py-1.5 text-sm font-medium ${activeNav === "timeline" ? "bg-white text-gray-800" : "bg-transparent text-gray-400"}`}
            onClick={() => handleActiveNav("timeline")}
          >
            Timeline
          </li>
          <li
            className={`flex flex-1 cursor-pointer justify-center rounded-md py-1.5 text-sm font-medium ${activeNav === "features" ? "bg-white text-gray-800" : "bg-transparent text-gray-400"}`}
            onClick={() => handleActiveNav("features")}
          >
            Features
          </li>
          <li
            className={`flex flex-1 cursor-pointer justify-center rounded-md py-1.5 text-sm font-medium ${activeNav === "team" ? "bg-white text-gray-800" : "bg-transparent text-gray-400"}`}
            onClick={() => handleActiveNav("team")}
          >
            Team & Tags
          </li>
        </ul>
      </nav>
      {activeNav === 'info' && <InfoForm />}
      {activeNav === 'media' && <MediaForm />}
      {activeNav === 'tech' && <TechForm />}
      {activeNav === 'timeline' && <TimelineForm />}
      {activeNav === 'features' && <FeaturesForm />}
      {activeNav === 'team' && <TeamForm />}
    </>
  );
};

export default Navs;
