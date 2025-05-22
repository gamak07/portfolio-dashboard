import React, { useState } from "react";
import { FaList, FaSearch, FaThLarge } from "react-icons/fa";
import Button from "../../components/Button";
import TestimonialsGrid from "./TestimonialsGrid";
import Pagination from "../../components/Pagination";
import TestimonialsList from "./TestimonialsList";

const Header = () => {
  const [listStyle, setListStyle] = useState("grid");
  const handleListStyle = (list) => {
    setListStyle(list);
  };
  return (
    <>
      <div className="mb-6 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="relative max-w-md flex-grow">
            <input
              type="text"
              placeholder="Search Testimonials..."
              className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 text-sm outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-600 dark:text-gray-400"
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-sm text-gray-400" />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div>
              <select className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-sm outline-0 focus:ring-2 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                <option value="">All Ratings</option>
                <option value="">5 Stars</option>
                <option value="">4 Stars</option>
                <option value="">3 Stars</option>
                <option value="">2 Stars</option>
                <option value="">1 Star</option>
              </select>
            </div>
            <div>
              <select className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-sm outline-0 focus:ring-2 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                <option value="">All Status</option>
                <option value="">Published</option>
                <option value="">Pending</option>
              </select>
            </div>
            <div>
              <select className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-sm outline-0 focus:ring-2 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                <option value="">Latest First</option>
                <option value="">Oldest First</option>
                <option value="">Highest Rated</option>
              </select>
            </div>
            <div className="flex rounded-lg border bg-gray-100 p-1 dark:border-gray-600 dark:bg-gray-800">
              <Button
                className={`cursor-pointer rounded-md px-3 py-1 shadow-sm ${listStyle === "grid" ? "bg-white" : "text-gray-600 dark:text-gray-400"}`}
                onClick={() => handleListStyle("grid")}
              >
                <FaThLarge />
              </Button>
              <Button
                className={`cursor-pointer rounded-md px-3 py-1 shadow-sm ${listStyle === "list" ? "bg-white" : "text-gray-600 dark:text-gray-400"}`}
                onClick={() => handleListStyle("list")}
              >
                <FaList />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {listStyle === "grid" && <TestimonialsGrid />}
      {listStyle === "list" && <TestimonialsList />}
      <Pagination />
    </>
  );
};

export default Header;
