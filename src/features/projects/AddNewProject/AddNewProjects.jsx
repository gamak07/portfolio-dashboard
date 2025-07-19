import React, { useEffect, useRef } from "react";
import Button from "../../../components/Button";
import { FaTimes } from "react-icons/fa";
import Navs from "./Navs";

const AddNewProjects = ({
  setAddNewProjectModal,
  initialData,
  registerIgnoreRef,
}) => {
  const modalRef = useRef();

  useEffect(() => {
    if (modalRef.current && typeof registerIgnoreRef === "function") {
      registerIgnoreRef(modalRef.current);
    }
  }, []);
  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/10 backdrop-blur"></div>
      <div
        className="relative mx-4 max-h-[90vh] w-full max-w-3/4 overflow-y-auto rounded-lg bg-white shadow-lg dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="mb-6 flex justify-between p-4">
            <div className="leading-7">
              <h2 className="text-xl font-bold text-gray-900">
                {initialData ? "Edit Project" : "Create New Project"}
              </h2>
              <p className="text-sm font-medium text-gray-500">
                {initialData
                  ? "Update project in your portfolio"
                  : "Add a new project to your portfolio"}
              </p>
            </div>
            <Button onClick={() => setAddNewProjectModal(false)}>
              <FaTimes
                className="cursor-pointer text-gray-500 hover:text-gray-700"
                size={15}
              />
            </Button>
          </div>
          <Navs
            initialData={initialData}
            onClose={() => setAddNewProjectModal(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewProjects;
