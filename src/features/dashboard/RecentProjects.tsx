import React from "react";
import { FaExternalLinkAlt, FaEye, FaStar } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Dashboard",
    image: "/one.jpg",
    technologies: ["React", "Tailwind", "Chart.js"],
    description:
      "A comprehensive dashboard for e-commerce analytics and order management.",
    views: "1.2k",
    ratings: 48,
  },
  {
    title: "Fitness Tracker App",
    image: "/two.jpg",
    technologies: ["React Native", "Firebase", "Redux"],
    description:
      "A mobile app for tracking workouts, nutrition, and fitness progress.",
    views: "998",
    ratings: 42,
  },
  {
    title: "Portfolio Website",
    image: "/three.jpg",
    technologies: ["NextJS", "Tailwind", "Framer Motion"],
    description:
      "A personal portfolio website with project showcase and contact form.",
    views: "189",
    ratings: 16,
  },
];

const RecentProjects = () => {
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Recent Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
            key={i}
          >
            <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img src={project.image} alt="" />
            </div>
            <div className="p-4">
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <div className="mb-3 flex flex-wrap gap-2">
                {project.technologies.map((stack, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                  >
                    {stack}
                  </span>
                ))}
              </div>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-3 flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <FaEye className="mr-1" />
                    {project.views}
                  </span>
                  <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <FaStar className="mr-1" />
                    {project.views}
                  </span>
                </div>

                <span className="cursor-pointer text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  <FaExternalLinkAlt />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
