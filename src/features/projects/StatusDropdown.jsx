import React from "react";
import { FaCheckCircle, FaClock, FaEye, FaList } from "react-icons/fa";

const StatusDropdown = () => {
  return (
    <div className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg">
      <div className="py-1">
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
          <FaList className="mr-2 text-gray-500" /> All
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
          <FaClock className="mr-2 text-gray-500" /> In Progress
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
          <FaCheckCircle className="mr-2 text-gray-500" /> Completed
        </div>
        <div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
          <FaEye className="mr-2 text-gray-500" /> In Review
        </div>
      </div>
    </div>
  );
};

export default StatusDropdown;
