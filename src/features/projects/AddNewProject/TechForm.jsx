import React from "react";
import Button from "../../../components/Button";

const TechForm = () => {
  return (
    <form className="space-y-4 overflow-auto">
      <div>
        <label
          htmlFor="techStack"
          className='text-gray-800" mb-1 text-sm font-medium'
        >
          Tech Stack
        </label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            name="techStack"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Add technology..."
          />
          <Button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Add
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div>
          <label
            htmlFor="techStack"
            className='text-gray-800" mb-1 text-sm font-medium'
          >
            Frontend
          </label>
          <input
            type="text"
            name="techStack"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="React, NextJs, etc."
          />
        </div>
        <div>
          <label
            htmlFor="techStack"
            className='text-gray-800" mb-1 text-sm font-medium'
          >
            Backend
          </label>
          <input
            type="text"
            name="techStack"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Node, Express, etc."
          />
        </div>
        <div>
          <label
            htmlFor="techStack"
            className='text-gray-800" mb-1 text-sm font-medium'
          >
            Database
          </label>
          <input
            type="text"
            name="techStack"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="PostgreSQL, MongoDB"
          />
        </div>
      </div>
    </form>
  );
};

export default TechForm;
