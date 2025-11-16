import React from "react";

const CategoryDropdown = () => {
  return (
    <div className="absolute z-10 mt-2 w-48 rounded-lg bg-white shadow-lg dark:bg-gray-800 dark:text-white">
      <div className="py-1">
        <div className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          All
        </div>
        <div className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          Web
        </div>
        <div className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          Mobile
        </div>
        <div className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          AI/ML
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
