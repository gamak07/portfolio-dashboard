import React from "react";
import Button from "../../../components/Button";

interface ActionButtonsProps {
  isLoading: boolean;
  initialData: any;
}

const ActionButtons = ({ isLoading, initialData }: ActionButtonsProps) => {
  return (
    <div className="my-2 flex items-center justify-end gap-3 border-t border-gray-200 py-2">
      <Button className="cursor-pointer rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
        Cancel
      </Button>
      <Button
        className="cursor-pointer rounded-md border border-gray-200 bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        disabled={isLoading}
      >
        {initialData ? "Edit Post" : "Create Post"}
      </Button>
    </div>
  );
};

export default ActionButtons;
