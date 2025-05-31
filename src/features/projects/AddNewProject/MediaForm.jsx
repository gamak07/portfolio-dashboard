import React from "react";
import { useFormContext } from "react-hook-form";
import { FaImage } from "react-icons/fa";

const MediaForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4 overflow-x-auto p-4">
      {/* Thumbnail Image */}
      <div>
        <label htmlFor="image" className="mb-1 text-sm font-medium text-gray-800">
          Thumbnail Image
        </label>
        <div className="flex items-center gap-4">
          <div className="flex h-30 w-40 flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-200 text-gray-400">
            <FaImage size={30} />
            <span className="text-xs">No Image</span>
          </div>
          <div>
            <input
              type="file"
              {...register("image")}
              accept="image/*"
              className="rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-500"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
            <p className="mt-2 text-xs font-medium text-gray-500">Max: 1500kb</p>
          </div>
        </div>
      </div>

      {/* Gallery Images */}
      <div>
        <label htmlFor="gallery" className="mb-1 text-sm font-medium text-gray-800">
          Gallery Images
        </label>
        <input
          type="file"
          multiple
          accept="image/*"
          {...register("gallery")}
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-500"
        />
        {errors.gallery && <p className="text-red-500 text-sm">{errors.gallery.message}</p>}
        <p className="mt-2 text-xs font-medium text-gray-500">You can select multiple images</p>
      </div>

      {/* URLs */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label htmlFor="demoUrl" className="mb-1 text-sm font-medium text-gray-800">
            Demo URL
          </label>
          <input
            type="url"
            {...register("demoUrl")}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://myproject.com"
          />
          {errors.demoUrl && <p className="text-red-500 text-sm">{errors.demoUrl.message}</p>}
        </div>
        <div>
          <label htmlFor="codeUrl" className="mb-1 text-sm font-medium text-gray-800">
            Source Code URL
          </label>
          <input
            type="url"
            {...register("codeUrl")}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://github.com/username/repo"
          />
          {errors.codeUrl && <p className="text-red-500 text-sm">{errors.codeUrl.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default MediaForm;
