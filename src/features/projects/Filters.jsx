import React from 'react';
import { useState } from "react";
import Button from "../../components/Button";
import { FaCalendar, FaChevronDown } from "react-icons/fa";
import StatusDropdown from "./StatusDropdown";
import SortDropdown from "./SortDropdown";
import DateRangeDropdown from "./DateRangeDropdown";

const technologies = [
  "React",
  "Vue",
  "Angular",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Firebase",
  "React Native",
  "Flutter",
  "D3.js",
];
const Filters = () => {
  const [showStatus, setShowStatus] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showDateRange, setShowDateRange] = useState(false);
  const handleStatus = () => {
    setShowStatus((prev) => !prev);
  };
  const handleSort = () => {
    setShowSort((prev) => !prev);
  };
  const handleDateRange = () => {
    setShowDateRange((prev) => !prev);
  };
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex items-center overflow-x-auto pb-2">
          {technologies.map((tech, i) => (
            <Button
              className="mr-2 cursor-pointer rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              key={i}
            >
              {tech}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="relative" onClick={handleStatus}>
          <Button className="flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            <span>Status: All</span>
            <FaChevronDown className="ml-2 text-xs" />
          </Button>
          {showStatus && <StatusDropdown />}
        </div>

        <div className="relative" onClick={handleDateRange}>
          <Button className="flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            <span>Date Range</span>
            <FaCalendar className="ml-2" />
          </Button>
          {showDateRange && <DateRangeDropdown />}
        </div>

        <div className="relative" onClick={handleSort}>
          <Button className="flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            <span>Sort: Latest</span>
            <FaChevronDown className="ml-2 text-xs" />
          </Button>
          {showSort && <SortDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Filters;
