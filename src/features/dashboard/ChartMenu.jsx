import React from "react";

const ChartMenu = ({ children }) => {
  return (
    <div className="absolute right-0 z-50 mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
      {children}
    </div>
  );
};

export default ChartMenu;
