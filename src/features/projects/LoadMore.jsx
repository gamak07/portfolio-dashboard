import React from "react";
import Button from "../../components/Button";

const LoadMore = () => {
  return (
    <div className="mt-8 flex justify-center">
      <Button className="flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">
        Load More
      </Button>
    </div>
  );
};

export default LoadMore;
