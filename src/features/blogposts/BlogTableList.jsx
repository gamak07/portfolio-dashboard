import React from "react";
import Button from "../../components/Button";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const BlogTableList = ({ blogs }) => {
  return (
    <tbody className="divide-y divide-gray-200">
      {blogs.map((blog, i) => (
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700" key={i}>
          <td className="px-4 py-4">
            <input type="checkbox" className="cursor-pointer rounded" />
          </td>
          <td className="px-4 py-4">
            <span className="font-medium">{blog.title}</span>
          </td>
          <td className="px-4 py-4">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs leading-5 font-semibold ${blog.category === "Marketing" ? "bg-purple-100 text-purple-800" : blog.category === "Business" ? "bg-blue-100 text-blue-800" : blog.category === "Tools" ? "bg-green-100 text-green-800" : blog.category === "Technology" ? "bg-indigo-100 text-indigo-800" : ""}`}
            >
              {blog.category}
            </span>
          </td>
          <td className="px-4 py-4">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs leading-5 font-semibold ${blog.status === "Published" ? "bg-green-100 text-green-800" : blog.status === "Draft" ? "bg-yellow-100 text-yellow-800" : blog.status === "Archived" ? "bg-gray-100 text-gray-800" : ""}`}
            >
              {blog.status}
            </span>
          </td>
          <td className="px-4 py-4 text-sm">{blog.date}</td>
          <td className="px-4 py-4">{blog.views}</td>
          <td className="px-4 py-4">
            <div className="flex space-x-2">
              <Button className="cursor-pointer rounded-full p-1 hover:bg-gray-100">
                <FaEdit className="text-blue-500" />
              </Button>
              <Button className="cursor-pointer rounded-full p-1 hover:bg-gray-100">
                <FaEye className="text-green-500" />
              </Button>
              <Button className="cursor-pointer rounded-full p-1 hover:bg-gray-100">
                <FaTrashAlt className="text-red-500" />
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BlogTableList;
