import React from "react";
import Button from "../../../components/Button";

const ActionButtons = () => {
  return (
    <div className="my-2 flex items-center justify-end gap-3 border-t border-gray-200 py-2">
      <Button className="px-3 py-2 cursor-pointer rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-600 hover:bg-gray-100">
        Cancel
      </Button>
      <Button className="px-3 py-2 cursor-pointer rounded-md border border-gray-200 bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700">
        Create Post
      </Button>
    </div>
  );
};

export default ActionButtons;
