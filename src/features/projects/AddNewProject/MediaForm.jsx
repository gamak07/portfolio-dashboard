import React from "react";
import { FaImage } from "react-icons/fa";

const MediaForm = () => {
  return (
    <form className="space-y-4 overflow-x-auto">
      <div>
        <label
          htmlFor="image"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Thumbnail Image
        </label>
        <div className="flex items-center gap-4">
          <div className="flex h-30 w-40 items-center justify-center rounded-md border-2 border-dashed border-gray-200">
            <FaImage size={30} />
            <span className="text-xs text-gray-400">No Image</span>
          </div>
          <div>
            <input
              type="file"
              name="image"
              className="rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-500"
            />
            <p className="mt-2 text-xs font-medium text-gray-500">
              Max: 1500kb
            </p>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="gallery"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Gallery Images
        </label>
        <input
          type="file"
          name="image"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-500"
        />
        <p className="mt-2 text-xs font-medium text-gray-500">
          You can select multiple images
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label
            htmlFor="demoUrl"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Source Code URL
          </label>
          <input
            type="url"
            name="DemoUrl"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://myproject.com"
          />
        </div>
        <div>
          <label
            htmlFor="demoUrl"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Source Code URL
          </label>
          <input
            type="url"
            name="DemoUrl"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://github.com/username/repo"
          />
        </div>
      </div>
    </form>
  );
};

export default MediaForm;
