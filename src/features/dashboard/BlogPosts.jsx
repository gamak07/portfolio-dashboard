import React from "react";
import Button from "../../components/Button";
import BlogPostsTable from "./BlogPostsTable";

const BlogPosts = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Blog Posts
        </h2>
        <Button className="cursor-pointer text-sm text-blue-600 hover:underline dark:text-blue-400">
          View All Posts
        </Button>
      </div>
      <BlogPostsTable />
    </div>
  );
};

export default BlogPosts;
