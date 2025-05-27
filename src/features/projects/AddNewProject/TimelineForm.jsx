import React from "react";

const TimelineForm = () => {
  return (
    <form className="space-y-4 overflow-y-auto">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label
            htmlFor="startDate"
            className='text-gray-800" mb-1 text-sm font-medium'
          >
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="startDate"
            className='text-gray-800" mb-1 text-sm font-medium'
          >
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="duration"
          className='text-gray-800" mb-1 text-sm font-medium'
        >
          Duration
        </label>
        <input
          type="text"
          name="duration"
          disabled
          className="w-full rounded-md border border-gray-200 bg-gray-300 px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="calculated Automatically"
        />
        <span className="mt text-xs font-medium text-gray-500">
          Automatically calculated from start to end dates
        </span>
      </div>
    </form>
  );
};

export default TimelineForm;
