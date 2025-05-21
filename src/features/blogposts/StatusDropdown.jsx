import React from "react";
import Button from "../../components/Button";

const StatusDropdown = () => {
  return (
    <div className="absolute top-full left-0 z-50 mt-1 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
      <Button className="w-full bg-gray-100 px-4 py-2 text-left text-sm text-gray-700 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-50">
        All
      </Button>
      <Button className="w-full px-4 py-2 text-left text-sm text-gray-700 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-50">
        Published
      </Button>
      <Button className="w-full px-4 py-2 text-left text-sm text-gray-700 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-50">Drafts</Button>
      <Button className="w-full px-4 py-2 text-left text-sm text-gray-700 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-50">Archived</Button>
    </div>
  );
};

export default StatusDropdown;
