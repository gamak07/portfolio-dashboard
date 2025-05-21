import React from "react";
import { FaClock, FaEye, FaStar } from "react-icons/fa";

const SortDropdown = () => {
  return (
    <div className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg">
      <div className="py-1">
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
          <FaClock className="mr-2 text-gray-500" /> Latest
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
          <FaEye className="mr-2 text-gray-500" /> Most Viewed
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
          <FaStar className="mr-2 text-gray-500" /> Most Popular
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;
