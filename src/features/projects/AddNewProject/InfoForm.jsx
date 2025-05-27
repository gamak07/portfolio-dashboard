import React from "react";

const InfoForm = () => {
  return (
    <form className="space-y-4 overflow-x-auto">
      <div>
        <label
          htmlFor="title"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Title <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="title"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="My Awesome Project"
        />
      </div>

      <div>
        <label
          htmlFor="sluf"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Slug (auto-generated if left blank)
        </label>
        <input
          type="text"
          name="slug"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="my-awesome-project"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Description <span className="text-red-600">*</span>
        </label>
        <textarea
          rows={5}
          type="text"
          name="description"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Describe your project..."
        />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label
            htmlFor="type"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Description <span className="text-red-600">*</span>
          </label>
          <select
            name="type"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Web App</option>
            <option value="">Mobile App</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="status"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Status <span className="text-red-600">*</span>
          </label>
          <select
            name="status"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">In Progress</option>
            <option value="">Completed</option>
            <option value="">Paused</option>
            <option value="">In Review</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default InfoForm;
