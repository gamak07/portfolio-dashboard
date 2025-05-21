import React, { useState } from "react";
import { FaEllipsisH, FaEye, FaStar } from "react-icons/fa";
import ProjectMenuDropdown from "./ProjectMenuDropdown";

const projects = [
  {
    image: "/1.jpg",
    title: "Fitness Tracking App",
    status: "In Progress",
    description:
      "Mobile application for tracking workouts, nutrition and health metrics with personalized recommendations.",
    technologies: ["Flutter", "Firebase"],
    progress: 60,
    view: 945,
    rating: 41,
    update: "Updated 1 day ago",
  },
  {
    image: "/2.jpg",
    title: "Project Management Tool",
    status: "In Review",
    description:
      "Collaborative project management application with task tracking, team communication and resource allocation.",
    technologies: ["React", "Redux", "MongoDB"],
    progress: 100,
    view: 905,
    rating: 72,
    update: "Updated 5 days ago",
  },
  {
    image: "/1.jpg",
    title: "Social Media Analytics",
    status: "Completed",
    description:
      "Comprehensive analytics platform for tracking social media performance across multiple platforms.",
    technologies: ["Vue", "D3.js"],
    progress: 100,
    view: 593,
    rating: 65,
    update: "Updated 1 week ago",
  },
  {
    image: "/1.jpg",
    title: "Healthcare Portal",
    status: "In Progress",
    description:
      "Patient management system for healthcare providers with appointment scheduling and medical records.",
    technologies: ["Angular", "Node.js"],
    progress: 45,
    view: 431,
    rating: 36,
    update: "Updated 3 day ago",
  },
  {
    image: "/1.jpg",
    title: "Mobile Banking App",
    status: "Completed",
    description:
      "Secure and intuitive mobile banking application with transaction history, payments and account management.",
    technologies: ["React", "Firebase"],
    progress: 100,
    view: 415,
    rating: 41,
    update: "Updated 2 weeks ago",
  },
  {
    image: "/1.jpg",
    title: "E-commerce Dashboard",
    status: "In Progress",
    description:
      "A comprehensive dashboard for managing online store operations with analytics and inventory tracking.",
    technologies: ["React", "TypeScript", "Tailwind"],
    progress: 75,
    view: 450,
    rating: 31,
    update: "Updated 3 days ago",
  },
];

const ProjectsGrid = () => {
  const [showMenuDropdown, setShowMenuDropdown] = useState(null);
  const handleMenuDropdown = (index) => {
    setShowMenuDropdown((prev) => (prev === index ? null : index));
  };
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800"
        >
          <div className="relative w-full">
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover object-top"
            />
            <div
              className="absolute top-3 right-3"
              onClick={() => handleMenuDropdown(i)}
            >
              <div className="cursor-pointer rounded-full bg-white p-2 opacity-90 shadow-sm dark:bg-gray-800">
                <FaEllipsisH className="text-gray-600 dark:text-gray-400" />
              </div>
              {showMenuDropdown === i && <ProjectMenuDropdown />}
            </div>
          </div>
          <div className="-z-70 p-4">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="cursor-pointer text-lg font-semibold text-gray-800 hover:text-indigo-600 dark:text-white">
                {project.title}
              </h3>
              <div
                className={`rounded px-2 py-1 text-xs font-medium ${project.status === "In Progress" ? "bg-blue-100 text-blue-800" : project.status === "In Review" ? "bg-yellow-100 text-yellow-800" : project.status === "Completed" ? "bg-green-100 text-green-800" : ""}`}
              >
                {project.status}
              </div>
            </div>
            <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <div className="mb-3 flex flex-wrap gap-1">
              {project.technologies.map((tech, i) => (
                <span
                  className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-800 dark:bg-gray-600 dark:text-white"
                  key={i}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.status === "In Progress" && (
              <div className="mb-3">
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="font-medium dark:text-gray-400">{project.progress}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-white">
                  <div
                    className="h-full rounded-full bg-indigo-600 dark:bg-indigo-700"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
            <div className="mt-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <FaEye className="mr-1" />
                <span>{project.view}</span>
              </div>
              <div className="flex items-center">
                <FaStar className="mr-1" /> <span>{project.rating}</span>
              </div>
              <div>
                <span>{project.update}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
