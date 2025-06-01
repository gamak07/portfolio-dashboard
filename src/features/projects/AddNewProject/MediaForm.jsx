// components/MediaForm.js
import React from "react";
import { useFormContext } from "react-hook-form";
import { FaImage } from "react-icons/fa";
import {useImageUpload} from '../../../hooks/useImageUpload'

const MediaForm = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  // Now destructure from our “deferred upload” hook:
  const {
    coverPreview,
    galleryPreviews,
    handleCoverSelect,
    handleGallerySelect,
  } = useImageUpload()

  return (
    <div className="space-y-4 overflow-x-auto p-4">
      {/* ===== Cover Image ===== */}
      <div>
        <label
          htmlFor="image"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Cover Image
        </label>
        <div className="flex items-center gap-4">
          <div className="flex h-30 w-40 flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-200 text-gray-400">
            {coverPreview ? (
              <img
                src={coverPreview}
                alt="Cover preview"
                className="h-full w-full object-cover rounded"
              />
            ) : (
              <>
                <FaImage size={30} />
                <span className="text-xs">No Cover</span>
              </>
            )}
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverSelect}
              className="rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-500"
            />
            {errors.image && (
              <p className="mt-1 text-sm text-red-500">
                {errors.image.message}
              </p>
            )}
            <p className="mt-2 text-xs font-medium text-gray-500">
              Max: 1.5 MB
            </p>
          </div>
        </div>
      </div>

      {/* ===== Gallery Images ===== */}
      <div>
        <label
          htmlFor="gallery"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Gallery Images
        </label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleGallerySelect}
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-500"
        />
        {errors.gallery && (
          <p className="mt-1 text-sm text-red-500">{errors.gallery.message}</p>
        )}

        {galleryPreviews.length > 0 && (
          <div className="mt-2 grid grid-cols-3 gap-2">
            {galleryPreviews.map((url, idx) => (
              <div key={idx} className="relative">
                <img
                  src={url}
                  alt={`Gallery ${idx + 1}`}
                  className="h-24 w-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => {
                    // Remove that File from the form value:
                    const currentFiles = watch("gallery") || [];
                    const newFiles = currentFiles.filter((_, i) => i !== idx);
                    setValue("gallery", newFiles, { shouldValidate: true });
                  }}
                  className="absolute top-0 right-0 rounded-full bg-white p-1 text-red-600 shadow-md hover:text-red-800"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        <p className="mt-2 text-xs font-medium text-gray-500">
          You can select multiple images
        </p>
      </div>

      {/* ===== Other URL fields (optional) ===== */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label
            htmlFor="demo_url"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Demo URL
          </label>
          <input
            type="url"
            {...register("demo_url")}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://myproject.com"
          />
          {errors.demo_url && (
            <p className="text-sm text-red-500">{errors.demo_url.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="source_code_url"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Source Code URL
          </label>
          <input
            type="url"
            {...register("source_code_url")}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://github.com/username/repo"
          />
          {errors.source_code_url && (
            <p className="text-sm text-red-500">
              {errors.source_code_url.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaForm;
