import React from "react";
import Button from "../../components/Button";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const BlogPostsLists = ({ posts }: { posts: any }) => {
  return (
    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
      {posts.map((post:any, i:any) => (
        <tr key={i}>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {post.title}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`rounded-full px-2 py-1 text-xs ${post.category === "React" ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400" : post.category === "CSS" ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400" : post.category === "JavaScript" ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400" : ""}`}
            >
              {post.category}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`rounded-full px-2 py-1 text-xs ${post.status === "Published" ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400" : post.status === "Draft" ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400" : ""}`}
            >
              {post.status}
            </span>
          </td>
          <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
            {post.published}
          </td>
          <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
            {post.views}
          </td>
          <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
            <Button className="mr-3 cursor-pointer text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              <FaEdit />
            </Button>
            <Button className="dark:hover:text-red-300cursor-pointer text-red-600 hover:text-red-700 dark:text-red-400">
              <FaTrashAlt />
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BlogPostsLists;
