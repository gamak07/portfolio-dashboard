import React, { useState } from "react";
import {
  FaColumns,
  FaPlus,
  FaSearch,
  FaTable,
  FaThLarge,
} from "react-icons/fa";
import Button from "../../components/Button";
import TableView from "./TableView";
import CardView from "./CardView";
import AddNewApplication from "./AddNewApplication";

const Header = () => {
  const [activeView, setActiveView] = useState<string>("table");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleViewType = (view:string) => {
    setActiveView(view);
  };
  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
        <div className="mb-4 flex items-center space-x-4 sm:mb-0">
          <div
            className="flex cursor-pointer items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={handleModal}
          >
            <FaPlus className="mr-2" /> Add New Application
          </div>
          <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-indigo-600 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
            <option value="">All</option>
            <option value="">Applied</option>
            <option value="">Interviewing</option>
            <option value="">Offer</option>
            <option value="">Rejected</option>
            <option value="">Saved</option>
          </select>
          <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-indigo-600 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
            <option value="">Company Name</option>
            <option value="">Job Title</option>
            <option value="">Date Applied</option>
          </select>
        </div>
        <div className="flex w-full items-center space-x-4 sm:w-auto">
          <div className="relative grow sm:w-64 sm:grow-0">
            <input
              type="text"
              placeholder="Search texts..."
              className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-500 dark:text-gray-400" />
          </div>
          <div className="flex items-center rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700">
            <Button
              className={`cursor-pointer rounded-l-lg px-3 py-2 ${activeView === "table" ? "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-white" : ""}`}
              onClick={() => handleViewType("table")}
            >
              <FaTable />
            </Button>
            <Button
              className={`cursor-pointer rounded-r-lg px-3 py-2 ${activeView === "card" ? "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-white" : ""}`}
              onClick={() => handleViewType("card")}
            >
              <FaThLarge />
            </Button>
          </div>
        </div>
      </div>
      {activeView === "table" && <TableView />}
      {activeView === "card" && <CardView />}
      {showModal && <AddNewApplication setShowModal={()=>setShowModal(false)} />}
    </>
  );
};

export default Header;
