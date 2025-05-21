import React from "react";
import BlogTableList from "./BlogTableList";
import Pagination from "../../components/Pagination";

const blogs = [
  {
    title: "How to Improve Your SEO Strategy in 2025",
    category: "Marketing",
    status: "Published",
    date: "2025-05-15",
    views: 1243,
  },
  {
    title: "The Future of Remote Work: Trends to Watch",
    category: "Business",
    status: "Published",
    date: "2025-05-10",
    views: 123,
  },
  {
    title: "10 Essential Tools for Content Creators",
    category: "Tools",
    status: "Draft",
    date: "2025-05-11",
    views: 143,
  },
  {
    title: "Understanding Web 3.0 and Its Impact on Digital Marketin",
    category: "Technology",
    status: "Published",
    date: "2025-05-18",
    views: 413,
  },
  {
    title: "Building a Successful Email Marketing Campaign",
    category: "Marketing",
    status: "Draft",
    date: "2025-05-15",
    views: 0,
  },
  {
    title: "Sustainable Business Practices for 2025",
    category: "Business",
    status: "Archived",
    date: "2025-05-05",
    views: 715,
  },
  {
    title: "AI Tools That Will Transform Your Workflow",
    category: "Technology",
    status: "Published",
    date: "2025-05-20",
    views: 53,
  },
];

const BlogTable = () => {
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow dark:bg-gray-800">
      <table className="w-full">
        <thead className="bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
          <tr>
            <th className="w-12 px-4 py-3 text-left">
              <input type="checkbox" className="cursor-pointer rounded" />
            </th>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Views</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <BlogTableList blogs={blogs} />
      </table>
      <Pagination />
    </div>
  );
};

export default BlogTable;
