import React from "react";
import Button from "../../components/Button";
import { useProjects } from "../../hooks/projects/useProjects";

const LoadMore = () => {
  const { data } = useProjects();

  if (!data || data.length <= 3) return null;
  return (
    <div className="mt-8 flex justify-center">
      <Button className="flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        Load More
      </Button>
    </div>
  );
};

export default LoadMore;
