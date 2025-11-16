import React from "react";
import { FaClock, FaEye, FaStar } from "react-icons/fa";

const SortDropdown = () => {
  return (
    <div className="absolute left-0 z-50 mt-2 w-48 rounded-lg bg-white shadow-lg dark:bg-gray-800">
      <div className="py-1">
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaClock className="mr-2 text-gray-500 dark:text-gray-400" /> Latest
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaEye className="mr-2 text-gray-500 dark:text-gray-400" /> Most
          Viewed
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaStar className="mr-2 text-gray-500 dark:text-gray-400" /> Most
          Popular
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default SortDropdown;
