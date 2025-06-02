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
import { useAddNewProjects } from "../useAddNewProjects";

const Navs = () => {
  const { isCreating, addProject } = useAddNewProjects();
  const [activeNav, setActiveNav] = useState("info");

  const methods = useForm({
    resolver: zodResolver(rootSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      type: "",
      status: "",
      image: undefined,
      gallery: [],
      demo_url: "",
      source_code_url: "",
      tech_stack: [],
      frontend: "",
      backend: "",
      database: "",
      start_date: "",
      end_date: "",
      duration: "",
      features: "",
      challenges: "",
      learnings: "",
      tags: [],
      category: "",
      team_members: [],
    },
  });

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  const onSubmit = async (data) => {
    try {
      const { image, gallery, ...rest } = data;
      // 1️⃣ Build features array (same as before)
      const featuresArray = rest.features
        ? rest.features
            .split("\n")
            .map((f) => f.trim())
            .filter(Boolean)
        : [];

      // 2️⃣ Auto‐generate slug if missing
      if (!rest.slug) {
        rest.slug = rest.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      }

      // 5️⃣ Now build the final payload, merging URLs where needed
      const payload = {
        title: rest.title,
        slug: rest.slug,
        description: rest.description,
        type: rest.type,
        status: rest.status,

        // ...(rest.thumbnail_url ? { thumbnail_url: rest.thumbnail_url } : {}),
        // ...(rest.gallery?.length ? { gallery: rest.gallery } : {}),
        ...(rest.demo_url !== "" ? { demo_url: rest.demo_url } : {}),
        ...(rest.source_code_url !== ""
          ? { source_code_url: rest.source_code_url }
          : {}),

        ...(rest.tech_stack?.length ? { tech_stack: rest.tech_stack } : {}),
        ...(rest.frontend ? { frontend: rest.frontend } : {}),
        ...(rest.backend ? { backend: rest.backend } : {}),
        ...(rest.database ? { database: rest.database } : {}),

        ...(rest.start_date ? { start_date: rest.start_date } : {}),
        ...(rest.end_date ? { end_date: rest.end_date } : {}),
        ...(rest.duration ? { duration: rest.duration } : {}),

        ...(featuresArray.length ? { features: featuresArray } : {}),
        ...(rest.challenges ? { challenges: rest.challenges } : {}),
        ...(rest.learnings ? { learnings: rest.learnings } : {}),

        ...(rest.tags?.length ? { tags: rest.tags } : {}),
        ...(rest.category ? { category: rest.category } : {}),
        ...(rest.team_members?.length
          ? { team_members: rest.team_members }
          : {}),
      };

      // 6️⃣ Finally, insert the project row
      await addProject({
        projectData: payload,
        thumbnailFile: image || null,
        galleryFiles: Array.isArray(gallery) ? gallery : [],
      });
    } catch (err) {
      console.error("Submission/upload error:", err);
    } finally {
      methods.reset();
    }
  };

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

        <ActionButtons isCreating={isCreating} />
      </form>
    </FormProvider>
  );
};

export default Navs;
