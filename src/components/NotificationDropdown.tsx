import React from "react";
import { FaEnvelope } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    title: "New contact message",
    body: "You received a new message from John Doe",
    time: "5 minutes ago",
    icon: <FaEnvelope />,
  },
  {
    id: 2,
    title: "New contact message",
    body: "You received a new message from John Doe",
    time: "5 minutes ago",
    icon: <FaEnvelope />,
  },
  {
    id: 3,
    title: "New contact message",
    body: "You received a new message from John Doe",
    time: "5 minutes ago",
    icon: <FaEnvelope />,
  },
];

const NotificationDropdown = () => {
  return (
    <div className="absolute right-0 z-10 mt-2 w-80 rounded-lg border border-gray-200 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="border-b border-gray-200 p-4 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Notifications
          </h3>
          <span className="cursor-pointer text-sm text-blue-600 dark:text-blue-400">
            Mark all as read
          </span>
        </div>
      </div>
      <div className="max-h-72 overflow-y-auto">
        {notifications.map((notification, i) => (
          <div className="border-b border-gray-200 p-4 dark:border-gray-700">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800">
                  {" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {notification.icon}
                  </span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {notification.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {notification.body}
                </p>
                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                  {notification.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-4 dark:border-gray-700">
        <span className="block cursor-pointer text-center text-sm text-blue-600 dark:text-blue-400">
          View all notifications
        </span>
      </div>
    </div>
  );
};

export default NotificationDropdown;
