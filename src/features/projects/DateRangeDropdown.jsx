import React from "react";
import Button from "../../components/Button";

const DateRangeDropdown = () => {
  return (
    <div className="absolute left-0 z-50 mt-2 w-80 rounded-lg bg-white shadow-lg dark:bg-gray-800">
      <div className="p-4">
        <div className="space-y-2">
          <Button className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            Last 7 days
          </Button>
          <Button className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            Last 30 days
          </Button>
          <Button className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            This month
          </Button>
        </div>

        <div className="border-t border-gray-200 pt-4 dark:border-gray-600">
          <div className="mb-2 text-sm text-gray-600 dark:text-white">Custom range</div>
          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-xs text-gray-500 dark:text-gray-300">
                Start date
              </label>
              <input
                type="date"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-500 dark:text-gray-300">
                End date
              </label>
              <input
                type="date"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600"
              />
            </div>
            <Button className="w-full rounded bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">
              Apply Custom Range
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRangeDropdown;
