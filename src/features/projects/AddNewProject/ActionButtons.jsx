import React from "react";
import Button from "../../../components/Button";

const ActionButtons = ({ isCreating }) => {
  
  return (
    <div className="sticky bottom-0 flex items-center justify-between bg-gray-50 p-4">
      <div>
        <Button className="cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
          Cancel
        </Button>
      </div>
      <div className="space-x-3">
        <Button className="cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
          Save as Draft
        </Button>
        <Button
          className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          disabled={isCreating}
        >
          Create Project
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
