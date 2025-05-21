import React from "react";
import { FaArchive, FaEdit, FaEye, FaShare, FaTrashAlt } from "react-icons/fa";

const ProjectMenuDropdown = () => {
  return (
    <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg bg-white py-1 shadow-lg">
      <div className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
        <FaEye className="mr-2" /> View Details
      </div>
      <div className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
        <FaEdit className="mr-2" /> Edit Project
      </div>
      <div className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
        <FaShare className="mr-2" /> Share Project
      </div>
      <div className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
        <FaArchive className="mr-2" /> Archive
      </div>
      <div className="flex w-full items-center px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50">
        <FaTrashAlt className="mr-2" /> Delete
      </div>
    </div>
  );
};

export default ProjectMenuDropdown;
