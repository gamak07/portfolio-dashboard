import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import {
  FaBlog,
  FaBriefcase,
  FaChartLine,
  FaChevronLeft,
  FaCodeBranch,
  FaCog,
  FaCommentAlt,
  FaEnvelope,
  FaSignOutAlt,
  FaStar,
  FaTachometerAlt,
} from "react-icons/fa";

const navs = [
  { name: "Dashboard", icon: <FaTachometerAlt />, link: "/" },
  { name: "Projects", icon: <FaCodeBranch />, link: "/projects" },
  { name: "Blog Posts", icon: <FaBlog />, link: "/blog_posts" },
  { name: "Messages", icon: <FaCommentAlt />, link: "/messages" },
  { name: "Testimonials", icon: <FaStar />, link: "/testimonials" },
  {
    name: "Job Applications",
    icon: <FaBriefcase />,
    link: "/job_applications",
  },
  { name: "Newsletter", icon: <FaEnvelope />, link: "/newsletter" },
  { name: "Analytics", icon: <FaChartLine />, link: "/analytics" },
  { name: "Settings", icon: <FaCog />, link: "/settings" },
];

const Sidebar = () => {
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  const handleSidebarCollapse = () => {
    setCollapseSidebar((prev) => !prev);
  };
  return (
    <aside
      className={`h-full ${collapseSidebar ? "w-16" : "w-64"} border-r border-gray-200 bg-white transition-all duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800`}
    >
      {/* logo */}
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700">
          {!collapseSidebar && (
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Gamak-07
            </div>
          )}
          <Button
            className="cursor-pointer rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            onClick={handleSidebarCollapse}
          >
            <FaChevronLeft />
          </Button>
        </div>
        {/* nav */}
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="space-y-2">
            {navs.map((nav, i) => (
              <li key={i}>
                <NavLink to={nav.link}>
                  {({ isActive }) => (
                    <div
                      className={`flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 ${
                        isActive
                          ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                          : ""
                      }`}
                    >
                      <span
                        className={`mr-2 ${isActive ? "text-blue-600 dark:text-blue-400" : ""}`}
                      >
                        {nav.icon}
                      </span>
                      {!collapseSidebar && (
                        <span className="ml-3">{nav.name}</span>
                      )}
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <div className="flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <FaSignOutAlt />
            {!collapseSidebar && <span className="ml-3">Logout</span>}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
