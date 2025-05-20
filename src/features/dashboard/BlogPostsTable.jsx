import React from "react";
import BlogPostsLists from "./BlogPostsLists";

const posts = [
  {
    title: "React Performance Tips",
    category: "React",
    status: "Published",
    published: "May 18, 2025",
    views: "1,245",
  },
  {
    title: "Getting Started with Tailwind CSS",
    category: "CSS",
    status: "Published",
    published: "May 15, 2025",
    views: "1,245",
  },
  {
    title: "Building a Dashboard with React",
    category: "React",
    status: "Draft",
    published: '-',
    views: "-"
  },
  {
    title: "Modern JavaScript Features",
    category: "JavaScript",
    status: "Published",
    published: "May 10, 2025",
    views: "1,245",
  },
];

const BlogPostsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
            >
              title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
            >
              category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
            >
              status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
            >
              published
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
            >
              views
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
            >
              actions
            </th>
          </tr>
        </thead>
        <BlogPostsLists posts={posts} />
      </table>
    </div>
  );
};

export default BlogPostsTable;
