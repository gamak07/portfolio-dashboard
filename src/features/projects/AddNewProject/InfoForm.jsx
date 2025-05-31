// components/InfoForm.tsx
import React from "react";
import { useFormContext } from "react-hook-form";

const InfoForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4 overflow-x-auto p-4">
      <div>
        <label
          htmlFor="title"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Title <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          {...register("title")}
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="My Awesome Project"
        />
        {errors.title && (
          <p className="text-sm text-red-500 italic">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="slug"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Slug (auto-generated if left blank)
        </label>
        <input
          type="text"
          {...register("slug")}
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="my-awesome-project"
        />
        {errors.slug && (
          <p className="text-sm text-red-500 italic">{errors.slug.message}</p>
        )}
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
          {...register("description")}
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Describe your project..."
        />
        {errors.description && (
          <p className="text-sm text-red-500 italic">{errors.description.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label
            htmlFor="type"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Type <span className="text-red-600">*</span>
          </label>
          <select
            {...register("type")}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Type</option>
            <option value="web">Web App</option>
            <option value="mobile">Mobile App</option>
          </select>
          {errors.type && (
            <p className="text-sm text-red-500 italic">{errors.type.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="status"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Status <span className="text-red-600">*</span>
          </label>
          <select
            {...register("status")}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Status</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="paused">Paused</option>
            <option value="in review">In Review</option>
          </select>
          {errors.status && (
            <p className="text-sm text-red-500 italic">{errors.status.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
