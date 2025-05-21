import React from "react";
import { FaCheckCircle, FaClock, FaEye, FaList } from "react-icons/fa";

const StatusDropdown = () => {
  return (
    <div className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg z-50 dark:bg-gray-800 dark:text-white">
      <div className="py-1">
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaList className="mr-2 text-gray-500 dark:text-gray-400" /> All
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaClock className="mr-2 text-gray-500 dark:text-gray-400" /> In Progress
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaCheckCircle className="mr-2 text-gray-500 dark:text-gray-400" /> Completed
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaEye className="mr-2 text-gray-500 dark:text-gray-400" /> In Review
        </div>
      </div>
    </div>
  );
};

export default StatusDropdown;
