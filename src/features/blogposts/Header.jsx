import React, { useState } from "react";
import {
  FaChevronDown,
  FaList,
  FaPlus,
  FaSearch,
  FaTable,
  FaThLarge,
} from "react-icons/fa";
import Button from "../../components/Button";
import StatusDropdown from "./StatusDropdown";
import BlogTable from "./BlogTable";
import BlogGrid from "./BlogGrid";
import NewBlogPostModal from "./addNewBlogPost/NewBlogPostModal";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeView, setActiveView] = useState("list");
  const [showNewBlogModal, setShowNewBlogModal] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleViewType = (view) => {
    setActiveView(view);
  };

  const handleNewBlogModal = () => {
    setShowNewBlogModal((prev) => !prev);
  };
  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
        <div className="mb-4 flex items-center space-x-4 sm:mb-0">
          <div
            className="flex cursor-pointer items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={handleNewBlogModal}
          >
            <FaPlus className="mr-2" /> New Post
          </div>
          <div className="relative" onClick={handleShowDropdown}>
            <Button className="flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
              <span>Status: All</span>
              <FaChevronDown className="ml-2" />
            </Button>
            {showDropdown && <StatusDropdown />}
          </div>
        </div>
        <div className="flex w-full items-center space-x-4 sm:w-auto">
          <div className="relative flex-grow sm:w-64 sm:flex-grow-0">
            <input
              type="text"
              placeholder="Search texts..."
              className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-500 dark:text-gray-400" />
          </div>
          <div className="flex items-center rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700">
            <Button
              className={`cursor-pointer rounded-l-lg px-3 py-2 ${activeView === "list" ? "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-white" : ""}`}
              onClick={() => handleViewType("list")}
            >
              <FaList />
            </Button>
            <Button
              className={`cursor-pointer rounded-r-lg px-3 py-2 ${activeView === "grid" ? "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-white" : ""}`}
              onClick={() => handleViewType("grid")}
            >
              <FaTable />
            </Button>
          </div>
        </div>
      </div>
      {activeView === "list" && <BlogTable />}
      {activeView === "grid" && <BlogGrid />}
      {showNewBlogModal && (
        <NewBlogPostModal onClose={() => setShowNewBlogModal(false)} />
      )}
    </>
  );
};

export default Header;
