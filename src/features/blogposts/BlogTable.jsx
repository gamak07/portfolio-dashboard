import React from "react";
import BlogTableList from "./BlogTableList";
import Pagination from "../../components/Pagination";
import { useBlogPosts } from "./useBlogPosts";

const BlogTable = () => {
  const {getBlog, isFetching} = useBlogPosts()
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow dark:bg-gray-800">
      <table className="w-full">
        <thead className="bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
          <tr>
            <th className="w-12 px-4 py-3 text-left">
              <input type="checkbox" className="cursor-pointer rounded" />
            </th>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Views</th>
            <th className="px-4 py-3 text-left">Estimated Read Time</th>
            <th className="px-4 py-3 text-left">Created</th>
            <th className="px-4 py-3 text-left">Published</th>
            <th className="px-4 py-3 text-left">Updated</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <BlogTableList blogs={getBlog} isFetching={isFetching} />
      </table>
      <Pagination />
    </div>
  );
};

export default BlogTable;
