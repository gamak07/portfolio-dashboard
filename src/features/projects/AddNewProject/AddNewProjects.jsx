import React from "react";
import Button from "../../../components/Button";
import { FaTimes } from "react-icons/fa";
import Navs from "./Navs";
import ActionButtons from "./ActionButtons";

const AddNewProjects = ({ setAddNewProjectModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/10 backdrop-blur"></div>
      <div className="relative mx-4 max-h-[90vh] w-full max-w-3/4 overflow-y-auto rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="p-4">
          <div className="mb-6 flex justify-between">
            <div className="leading-7">
              <h2 className="text-xl font-bold text-gray-900">
                Create New Project
              </h2>
              <p className="text-sm font-medium text-gray-500">
                Add a new project to your portfolio
              </p>
            </div>
            <Button onClick={() => setAddNewProjectModal(false)}>
              <FaTimes
                className="cursor-pointer text-gray-500 hover:text-gray-700"
                size={15}
              />
            </Button>
          </div>
          <Navs />
        </div>
        <ActionButtons />
      </div>
    </div>
  );
};

export default AddNewProjects;
