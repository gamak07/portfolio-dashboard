import React from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import Button from "../../components/Button";

const blogs = [
  {
    image: "/grid.jpg",
    title: "How to Improve Your SEO Strategy in 2025",
    category: "Marketing",
    status: "Published",
    date: "2025-05-15",
    views: 1243,
  },
  {
    image: "/grid.jpg",
    title: "The Future of Remote Work: Trends to Watch",
    category: "Business",
    status: "Published",
    date: "2025-05-10",
    views: 123,
  },
  {
    image: "/grid.jpg",
    title: "10 Essential Tools for Content Creators",
    category: "Tools",
    status: "Draft",
    date: "2025-05-11",
    views: 143,
  },
  {
    image: "/grid.jpg",
    title: "Understanding Web 3.0 and Its Impact on Digital Marketin",
    category: "Technology",
    status: "Published",
    date: "2025-05-18",
    views: 413,
  },
  {
    image: "/grid.jpg",
    title: "Building a Successful Email Marketing Campaign",
    category: "Marketing",
    status: "Draft",
    date: "2025-05-15",
    views: 0,
  },
  {
    image: "/grid.jpg",
    title: "Sustainable Business Practices for 2025",
    category: "Business",
    status: "Archived",
    date: "2025-05-05",
    views: 715,
  },
  {
    image: "/grid.jpg",
    title: "AI Tools That Will Transform Your Workflow",
    category: "Technology",
    status: "Published",
    date: "2025-05-20",
    views: 53,
  },
];

const BlogGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog, i) => (
        <div
          className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800"
          key={i}
        >
          <div className="h-48 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-5">
            <div className="mb-3 flex items-start justify-between">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs leading-5 font-semibold ${blog.category === "Marketing" ? "bg-purple-100 text-purple-800" : blog.category === "Business" ? "bg-blue-100 text-blue-800" : blog.category === "Tools" ? "bg-green-100 text-green-800" : blog.category === "Technology" ? "bg-indigo-100 text-indigo-800" : ""}`}
              >
                {blog.category}
              </span>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs leading-5 font-semibold ${blog.status === "Published" ? "bg-green-100 text-green-800" : blog.status === "Draft" ? "bg-yellow-100 text-yellow-800" : blog.status === "Archived" ? "bg-gray-100 text-gray-800" : ""}`}
              >
                {blog.status}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold dark:text-white">
              {blog.title}
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{blog.date}</span>
              <span className="flex items-center">
                <FaEye className="mr-1" />
                {blog.views}
              </span>
            </div>
            <div className="mt-4 flex justify-between">
              <Button className="flex cursor-pointer items-center rounded bg-gray-100 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                <FaEdit className="mr-1" /> Edit
              </Button>
              <Button className="flex cursor-pointer items-center rounded bg-blue-50 px-3 py-1.5 text-sm text-blue-700 hover:bg-blue-100 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-600">
                <FaEye className="mr-1" /> Preview
              </Button>
              <Button className="flex cursor-pointer items-center rounded bg-red-50 px-3 py-1.5 text-sm text-red-700 hover:bg-red-100 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800">
                <FaTrashAlt className="mr-1" /> Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
