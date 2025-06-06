import React, { useState } from "react";
import Button from "../../../components/Button";
import {
  FaBold,
  FaImage,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaUnderline,
} from "react-icons/fa";
import ActionButtons from "./ActionButtons";

const NewBlogForm = () => {
  const [published, setPublished] = useState(false);
  return (
    <form className="space-y-4 py-4">
      <div>
        <label htmlFor="title" className="text-base font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
          placeholder="Enter post title"
        />
      </div>
      <div>
        <label htmlFor="slug" className="text-base font-medium text-gray-700">
          Slug (optional - auto-generated from title)
        </label>
        <input
          type="text"
          className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
          placeholder="URL-friendly-slug"
        />
      </div>
      <div>
        <label htmlFor="slug" className="text-base font-medium text-gray-700">
          Excerpt
        </label>
        <textarea
          rows="3"
          className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
          placeholder="Brief summary of the post (optional)"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="excerpt"
          className="text-base font-medium text-gray-700"
        >
          content
        </label>
        <div className="mt-1 w-full rounded-md border border-gray-200">
          <div className="space-x-2 border-b border-gray-200 bg-gray-50 p-1">
            <Button className="p-1 hover:bg-gray-300">
              <FaBold size={15} className="font-medium text-gray-600" />
            </Button>
            <Button className="p-1 hover:bg-gray-300">
              <FaItalic size={15} className="font-medium text-gray-600" />
            </Button>
            <Button className="p-1 hover:bg-gray-300">
              <FaUnderline size={15} className="font-medium text-gray-600" />
            </Button>
            <Button className="p-1 hover:bg-gray-300">
              <FaListUl size={15} className="font-medium text-gray-600" />
            </Button>
            <Button className="p-1 hover:bg-gray-300">
              <FaListOl size={15} className="font-medium text-gray-600" />
            </Button>
            <Button className="p-1 hover:bg-gray-300">
              <FaLink size={15} className="font-medium text-gray-600" />
            </Button>
          </div>
          <textarea
            rows="6"
            className="w-full px-3 py-2 outline-0"
            placeholder="Brief summary of the post (optional)"
          ></textarea>
        </div>
      </div>

      <div>
        <label htmlFor="slug" className="text-base font-medium text-gray-700">
          Featured Image
        </label>
        <label className="mt-1 flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-200 hover:border-gray-600">
          <FaImage size={24} className="mb-2 text-gray-600" />
          <p className="text-xl font-medium text-gray-500">
            Click to upload your image
          </p>
          <input type="file" className="hidden" accept="image/*" />
        </label>
      </div>

      <div>
        <label htmlFor="meta" className="text-base font-medium text-gray-700">
          Meta Description
        </label>
        <input
          type="text"
          className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
          placeholder="SEO description (max 160 characters)"
        />
      </div>
      <div>
        <label htmlFor="meta" className="text-base font-medium text-gray-700">
          Tags
        </label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
            placeholder="SEO description (max 160 characters)"
          />
          <Button className="cursor-pointer rounded-md bg-indigo-600 p-2 text-sm font-medium text-white hover:bg-indigo-600">
            Add
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="published"
          id="published"
          value={published}
          onChange={(e) => setPublished(e.target.checked)}
        />
        <label
          htmlFor="published"
          className="text-sm font-medium text-gray-600"
        >
          Publish immediately
        </label>
      </div>
      {published && (
        <div>
          <label htmlFor="date" className="text-base font-medium text-gray-700">
            Publication Date
          </label>
          <input
            type="date"
            className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-0 focus:ring-2 focus:ring-indigo-600"
          />
        </div>
      )}
      <ActionButtons />
    </form>
  );
};

export default NewBlogForm;
