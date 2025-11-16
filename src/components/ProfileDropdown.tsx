import React from "react";
import { FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";

const ProfileDropdown = () => {
  return (
    <div className="absolute right-0 z-10 mt-2 w-fit rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="border-b border-gray-200 p-4 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          Ganiyu Mubarak
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ganiyumubarak09@gmail.com
        </p>
      </div>
      <div className="py-1">
        <p className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
          <FaUser className="mr-2" /> Profile
        </p>
        <p className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
          <FaCog className="mr-2" /> Settings
        </p>
        <p className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
          <FaSignOutAlt className="mr-2" />
          Logout
        </p>
      </div>
    </div>
  );
};

export default ProfileDropdown;
