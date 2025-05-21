import React from "react";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-700 dark:text-gray-400">Show</p>
        <select className="cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-0">
          <option value="">10</option>
          <option value="">25</option>
          <option value="">50</option>
          <option value="">100</option>
        </select>
        <p className="text-sm text-gray-700 dark:text-gray-400">Entries</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-700 dark:text-gray-400">
          Showing 11 to 12 of 12 entries
        </p>
        <div className="flex items-center">
          <Button className="rounded-l-md border border-gray-300 bg-white px-2 py-2 text-gray-500 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-600">
            <FaChevronLeft />
          </Button>
          <p className="border-y border-gray-300 bg-white px-4 py-1 text-gray-500 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-600">
            1
          </p>
          <Button className="rounded-r-md border border-gray-300 bg-white px-2 py-2 text-gray-500 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-600">
            <FaChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
