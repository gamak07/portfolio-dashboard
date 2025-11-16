import React from "react";
import { FiMail, FiEdit2, FiX, FiLink, FiUserCheck } from "react-icons/fi";
import { MdSource } from "react-icons/md";

interface Props{
  isOpen: boolean
  onClose: ()=>void
  subscriber: any
}

const SubscriberDetails = ({ isOpen, onClose, subscriber }:Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl mx-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 dark:text-gray-300"
        >
          <FiX size={20} />
        </button>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Subscriber Details
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Info */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src={subscriber.avatar}
              alt="Avatar"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {subscriber.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
              {subscriber.email}
            </p>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              subscriber.status === "subscribed"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}>
              {subscriber.status}
            </span>

            <div className="mt-4 space-y-1 text-left w-full">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Phone:</strong> {subscriber.phone}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Address:</strong> {subscriber.address}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Joined:</strong> {subscriber.joinedDate}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                <MdSource /> <strong>Source:</strong> {subscriber.source}
              </p>
            </div>

            <div className="mt-4 flex gap-3">
              <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm flex items-center gap-1">
                <FiMail /> Email
              </button>
              <button className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm flex items-center gap-1">
                <FiEdit2 /> Edit
              </button>
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Engagement Metrics
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Open Rate:</span>
                <span className="font-bold text-gray-900 dark:text-white">
                  {subscriber.openRate}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Click Rate:</span>
                <span className="font-bold text-gray-900 dark:text-white">
                  {subscriber.clickRate}%
                </span>
              </div>
            </div>
          </div>

          {/* Activity History */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Activity History
            </h4>
            <ul className="space-y-2 max-h-64 overflow-y-auto pr-2">
              {subscriber.activities.map((activity:any, index:any) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600 pb-1"
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded">
            Unsubscribe
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriberDetails;
