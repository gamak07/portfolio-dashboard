import React from "react";
import Button from "../../components/Button";
import { FaArchive, FaReply, FaStar, FaTimes } from "react-icons/fa";

const MessageDetails = ({ setShowDetails }) => {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="absolute top-0 right-0 h-full w-full max-w-2xl overflow-y-auto bg-white shadow-xl dark:bg-gray-800">
        <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-6 sm:px-6 dark:border-gray-600 dark:bg-gray-800">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-sm font-medium text-indigo-700">
                    SJ
                  </span>
                </div>
                <div className="ml-3">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                    Sarah Johnson
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    sarah.johnson@example.com
                  </p>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                May 22, 2025 at 02:30 PM
              </p>
            </div>
            <div className="flex-shrink-o ml-4 flex">
              <Button
                className="cursor-pointer rounded-md bg-white text-gray-400 hover:text-gray-600 dark:bg-inherit"
                onClick={() => setShowDetails(false)}
              >
                <FaTimes className="text-lg" />
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Collaboration opportunity on React project
            </h3>
          </div>
        </div>
        <div className="flex-1 p-6">
          <div className="prose max-w-none dark:text-gray-400">
            <p className="mb-4">Hi there,</p>
            <p className="mb-4">
              I came across your portfolio and was really impressed with your
              React work. I have a project that might be a good fit for your
              skills. We're building a dashboard application for a healthcare
              client and need someone with strong React and data visualization
              experience.
            </p>
            <p className="mb-4">
              Would you be interested in discussing this further? I can share
              more details if you're available for a quick call next week.
            </p>
            <p className="mb-4">
              Best regards,
              <br />
              Sarah Johnson <br />
              Project Manager
            </p>
          </div>
        </div>
        <div className="flex flex-shrink-0 justify-between border-t border-gray-200 px-4 py-4 dark:border-gray-600">
          <div className="flex">
            <Button className="inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
              <FaStar className="mr-2 text-yellow-500" /> Unstar
            </Button>
            <Button className="ml-3 inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
              <FaArchive className="mr-2" /> Archive
            </Button>
          </div>
          <div>
            <Button className="ml-3 inline-flex cursor-pointer items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600">
              <FaReply className="mr-2" /> Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetails;
