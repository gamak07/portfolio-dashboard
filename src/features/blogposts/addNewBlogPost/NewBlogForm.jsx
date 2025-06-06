import React, { useEffect, useRef, useState } from "react";
import Button from "../../../components/Button";
import {
  FaBold,
  FaImage,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaPlus,
  FaTimes,
  FaUnderline,
} from "react-icons/fa";
import ActionButtons from "./ActionButtons";
import { useFormValidation } from "./useFormValidation";

const NewBlogForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isPublished,
    handleAddTag,
    handleRemoveTag,
    onSubmit,
    tags,
    tagInputRef,
  } = useFormValidation();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
      {/* Title */}
      <div>
        <label className="text-base font-medium text-gray-700">Title</label>
        <input
          type="text"
          {...register("title")}
          className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
          placeholder="Enter post title"
        />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      {/* Slug */}
      <div>
        <label className="text-base font-medium text-gray-700">Slug</label>
        <input
          type="text"
          {...register("slug")}
          className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
        />
        {errors.slug && (
          <p className="text-sm text-red-500">{errors.slug.message}</p>
        )}
      </div>

      {/* Excerpt */}
      <div>
        <label className="text-base font-medium text-gray-700">Excerpt</label>
        <textarea
          rows="3"
          {...register("excerpt")}
          className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      {/* Content */}
      <div>
        <label className="text-base font-medium text-gray-700">Content</label>
        <div className="mt-1 rounded-md border border-gray-200">
          <div className="space-x-2 border-b bg-gray-50 p-1">
            <Button className="p-1 hover:bg-gray-300">
              <FaBold size={15} className="text-gray-600" />
            </Button>
            <Button className="p-1 hover:bg-gray-300">
              <FaItalic size={15} className="text-gray-600" />
            </Button>
            <Button className="p-1 hover:bg-gray-300">
              <FaUnderline size={15} className="text-gray-600" />
            </Button>
            <Button className="p-1 hover:bg-gray-300">
              <FaListUl size={15} className="text-gray-600" />
            </Button>
            <Button className="p-1 hover:bg-gray-300">
              <FaListOl size={15} className="text-gray-600" />
            </Button>
            <Button className="p-1 hover:bg-gray-300">
              <FaLink size={15} className="text-gray-600" />
            </Button>
          </div>
          <textarea
            rows="6"
            {...register("content")}
            className="w-full px-3 py-2 outline-0"
            placeholder="Write your content here..."
          ></textarea>
        </div>
        {errors.content && (
          <p className="text-sm text-red-500">{errors.content.message}</p>
        )}
      </div>

      {/* Image Upload */}
      <div>
        <label className="text-base font-medium text-gray-700">
          Featured Image
        </label>
        <label className="mt-1 flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-200 hover:border-gray-600">
          <FaImage size={24} className="mb-2 text-gray-600" />
          <p className="text-xl font-medium text-gray-500">
            Click to upload your image
          </p>
          <input
            type="file"
            {...register("featured_image_url")}
            accept="image/*"
            className="hidden"
          />
        </label>
      </div>

      {/* Meta Description */}
      <div>
        <label className="text-base font-medium text-gray-700">
          Meta Description
        </label>
        <input
          type="text"
          {...register("meta_description")}
          className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
          placeholder="SEO description (max 160 characters)"
        />
        {errors.meta_description && (
          <p className="text-sm text-red-500">
            {errors.meta_description.message}
          </p>
        )}
      </div>

      {/* Tags */}
      <div>
        <label className="text-base font-medium text-gray-700">Tags</label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            ref={tagInputRef}
            className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
            placeholder="Enter a tag"
            onKeyDown={(e) =>
              e.key === "Enter" && (e.preventDefault(), handleAddTag())
            }
          />
          <Button
            type="button"
            onClick={handleAddTag}
            className="rounded-md bg-indigo-600 p-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <FaPlus />
          </Button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 rounded bg-gray-200 px-2 py-1"
            >
              {tag}
              <button type="button" onClick={() => handleRemoveTag(tag)}>
                <FaTimes className="text-red-500" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Publish */}
      <div className="flex items-center gap-2">
        <input type="checkbox" id="published" {...register("is_published")} />
        <label
          htmlFor="published"
          className="text-sm font-medium text-gray-600"
        >
          Publish immediately
        </label>
      </div>

      {/* Publication Date */}
      {isPublished && (
        <div>
          <label className="text-base font-medium text-gray-700">
            Publication Date
          </label>
          <input
            type="date"
            {...register("published_at")}
            className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
          />
          {errors.published_at && (
            <p className="text-sm text-red-500">
              {errors.published_at.message}
            </p>
          )}
        </div>
      )}

      {/* Submit Buttons */}
      <ActionButtons />
    </form>
  );
};

export default NewBlogForm;
