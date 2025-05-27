import React from "react";
import Button from "../../../components/Button";
import { FaCirclePlus } from "react-icons/fa6";

const TeamForm = () => {
  return (
    <form className="space-y-4 overflow-x-auto">
      <div>
        <label
          htmlFor="tags"
          className='text-gray-800" mb-1 text-sm font-medium'
        >
          Tag
        </label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            name="tags"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Add tag..."
          />
          <Button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Add
          </Button>
        </div>
      </div>

      <div>
        <label
          htmlFor="category"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Category
        </label>
        <select
          name="category"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Personal</option>
          <option value="">Freelance</option>
          <option value="">Hackhaton</option>
        </select>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="Team" className="text-sm font-medium text-gray-800">
            Team Members
          </label>
          <Button className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-200">
            <FaCirclePlus size={15} /> Add Member
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <input
            type="text"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Name"
          />
          <input
            type="text"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Role"
          />
        </div>
      </div>
    </form>
  );
};

export default TeamForm;
