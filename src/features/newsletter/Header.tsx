import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "../../components/Button";
import { FaSearch } from "react-icons/fa";
import ComposeNewsletter from "./ComposeNewsletter";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<string>("all");
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleModal = () => {
    setShowModal((prev) => !prev);
    console.log("working");
  };

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 rounded-md bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        {/* Create Button */}
        <Button
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 sm:w-auto"
          onClick={handleModal}
        >
          <FiPlus className="text-lg" />
          <span>Create New Newsletter</span>
        </Button>

        {/* Actions */}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          {/* Search Input */}
          <div className="relative">
            <span className="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-500">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search newsletters..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 pl-10 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-64 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Status Select */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            <option value="all">All</option>
            <option value="subscribed">Subscribed</option>
            <option value="unsubscribed">Unsubscribed</option>
          </select>
        </div>
      </div>
      {showModal && (
        <ComposeNewsletter
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Header;
