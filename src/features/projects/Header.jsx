import React, { useState } from "react";
import Button from "../../components/Button";
import {
  FaChevronDown,
  FaList,
  FaPlus,
  FaSearch,
  FaThLarge,
} from "react-icons/fa";
import CategoryDropdown from "./CategoryDropdown";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  
  const [activeList, setActiveList] = useState("grid");
  const handleList = (list) => {
    setActiveList(list);
  };
  return (
    <div className="gap-d mb-6 flex flex-col justify-between md:flex-row md:items-center">
      <Button className="flex cursor-pointer items-center rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-800 dark:text-gray-300 dark:hover:bg-indigo-900">
        <FaPlus className="mr-2" /> Add New Project
      </Button>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative" onClick={handleDropdown}>
          <Button className="flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200">
            <span>Category:</span>
            <FaChevronDown className="ml-2 text-xs" />
          </Button>
          {showDropdown && <CategoryDropdown />}
        </div>
        <div className="relative">
          <div className="flex items-center rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200">
            <input
              type="text"
              placeholder="Search..."
              className="w-48 border-none py-2 pr-5 pl-3 text-sm outline-0"
            />
            <FaSearch className="absolute right-3 text-gray-400 dark:text-gray-300" />
          </div>
        </div>
        <div className="flex items-center rounded-lg border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-700">
          <Button
            className={`cursor-pointer px-3 py-2 ${activeList === "grid" ? "bg-gray-100 text-indigo-600 dark:bg-gray-700 dark:text-indigo-400" : "text-gray-600"}`}
            onClick={() => handleList("grid")}
          >
            <FaThLarge className="" />
          </Button>
          <Button
            className={`cursor-pointer px-3 py-2 ${activeList === "list" ? "bg-gray-100 text-indigo-600 dark:bg-gray-700 dark:text-indigo-400" : "text-gray-600"}`}
            onClick={() => handleList("list")}
          >
            <FaList />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
