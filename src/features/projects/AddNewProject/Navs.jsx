// components/Navs.js
import React, { useState } from "react";
import InfoForm from "./InfoForm";
import MediaForm from "./MediaForm";
import TechForm from "./TechForm";
import TimelineForm from "./TimelineForm";
import FeaturesForm from "./FeaturesForm";
import TeamForm from "./TeamForm";
import ActionButtons from "./ActionButtons";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rootSchema } from "./schema";

const Navs = () => {
  const [activeNav, setIsActiveNav] = useState("info");

  const methods = useForm({
    resolver: zodResolver(rootSchema),
  });

  const onSubmit = (data) => {
    const featuresArray = data.features
      ? data.features
          .split("\n")
          .map((f) => f.trim())
          .filter(Boolean)
      : [];

    const payload = {
      ...data,
      features: featuresArray.length ? featuresArray : undefined,
    };

    if (!data.slug) {
      data.slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }
    console.log("Submitted data:", payload);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                  onClick={() => setIsActiveNav(tab)}
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

        <ActionButtons />
      </form>
    </FormProvider>
  );
};

export default Navs;
