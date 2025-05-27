import React from "react";

const FeaturesForm = () => {
  return (
    <form className="space-y-4 overflow-x-auto">
      <div>
        <label
          htmlFor="features"
          className='text-gray-800 mb-1 text-sm font-medium'
        >
          Features
        </label>
        <textarea
          name="features"
          rows="5"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="List the main features of your project..."
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="challenges"
          className='text-gray-800 mb-1 text-sm font-medium'
        >
          Challenges
        </label>
        <textarea
          name="challenges"
          rows="5"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="List the main features of your project..."
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="learnings"
          className='text-gray-800 mb-1 text-sm font-medium'
        >
          Learnings
        </label>
        <textarea
          name="learnings"
          rows="5"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="List the main features of your project..."
        ></textarea>
      </div>
    </form>
  );
};

export default FeaturesForm;
