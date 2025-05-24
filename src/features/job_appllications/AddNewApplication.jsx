import React from "react";
import Button from "../../components/Button";

const AddNewApplication = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg bg-white shadow-xl dark:bg-gray-800">
        <form action="">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-800">
            <div className="mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Add New Application
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Company*
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-600 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Job Title*
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-600 dark:border-gray-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Application Date*
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-600 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Status*
                  </label>
                  <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-600 dark:border-gray-600">
                    <option value="">Saved</option>
                    <option value="">Applied</option>
                    <option value="">Interviewing</option>
                    <option value="">Offer</option>
                    <option value="">Rejected</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Job URL
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-600 dark:border-gray-600"
                  placeholder="https://example.com/job-listing"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Contact Person
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-600 dark:border-gray-600 dark:text-gray-400"
                  placeholder="Recruiter or hiring manager name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Notes
                </label>
                <textarea
                  rows="3"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-600 dark:border-gray-600"
                  placeholder="Add any notes about the application or interviews"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-4 bg-gray-50 px-6 py-3 dark:bg-gray-900">
            <Button
              className="inline-flex w-full cursor-pointer justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
            <Button className="inline-flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow hover:bg-indigo-700">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewApplication;
