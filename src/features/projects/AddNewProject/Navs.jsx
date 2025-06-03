// components/Navs.js
import React, { useState } from "react";
import InfoForm from "./InfoForm";
import MediaForm from "./MediaForm";
import TechForm from "./TechForm";
import TimelineForm from "./TimelineForm";
import FeaturesForm from "./FeaturesForm";
import TeamForm from "./TeamForm";
import ActionButtons from "./ActionButtons";

import { FormProvider } from "react-hook-form";
import { useProjectForm } from "../../../hooks/useProjectForm";
import { useEditProject } from "../../../hooks/useEditProject";


const Navs = ({ initialData = {}, onClose = () => {} }) => {
  const [activeNav, setActiveNav] = useState("info");

  const isEdit = Boolean(initialData && initialData.id);

  const {
    isCreating,
    methods: createMethods,
    onSubmit: createSubmit,
    onError,
  } = useProjectForm();

  const {
    isEditing,
    methods: editMethods,
    onSubmit: editSubmit,
  } = useEditProject(initialData);

  const methods = isEdit ? editMethods : createMethods;
  const onSubmit = isEdit ? editSubmit : createSubmit;
  const isLoading = isEdit ? isEditing : isCreating;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        {/* Navigation Tabs */}
        <nav className="mb-6 w-full rounded-md bg-gray-100 p-1">
          <ul className="flex items-center justify-between">
            {["info", "media", "tech", "timeline", "features", "team"].map(
              (tab) => (
                <li
                  key={tab}
                  className={`flex flex-1 cursor-pointer justify-center rounded-md py-1.5 text-sm font-medium ${
                    activeNav === tab
                      ? "bg-white text-gray-800"
                      : "bg-transparent text-gray-400"
                  }`}
                  onClick={() => setActiveNav(tab)}
                >
                  {tab === "team"
                    ? "Team & Tags"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Dynamic Form Sections */}
        <div className={`${activeNav === "info" ? "" : "hidden"}`}>
          <InfoForm />
        </div>
        <div className={`${activeNav === "media" ? "" : "hidden"}`}>
          <MediaForm />
        </div>
        <div className={`${activeNav === "tech" ? "" : "hidden"}`}>
          <TechForm />
        </div>
        <div className={`${activeNav === "timeline" ? "" : "hidden"}`}>
          <TimelineForm />
        </div>
        <div className={`${activeNav === "features" ? "" : "hidden"}`}>
          <FeaturesForm />
        </div>
        <div className={`${activeNav === "team" ? "" : "hidden"}`}>
          <TeamForm />
        </div>

        <ActionButtons isLoading={isLoading} initialData={initialData} onClose={onClose} />
      </form>
    </FormProvider>
  );
};

export default Navs;
