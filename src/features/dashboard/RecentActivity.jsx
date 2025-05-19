import React from "react";
import Button from "../../components/Button";
import { FaBlog, FaCodeBranch, FaCommentAlt, FaStar } from "react-icons/fa";

const activities = [
  {
    id: 1,
    icon: <FaCodeBranch />,
    subject: "New project published",
    body: 'You published "E-commerce Dashboard" project',
    time: "Today at 10:30 AM",
  },
  {
    id: 2,
    icon: <FaBlog />,
    subject: "Blog post published",
    body: 'Your article "React Performance Tips" is now live',
    time: "Yesterday at 2:15 PM",
  },
  {
    id: 3,
    icon: <FaCommentAlt />,
    subject: "New contact message",
    body: "Sarah Johnson sent you a message about a potential project",
    time: "May 18, 2025",
  },
  {
    id: 4,
    icon: <FaStar />,
    subject: "New testimonial",
    body: "Michael Brown left a 5-star review on your portfolio",
    time: "May 16, 2025",
  },
];

const RecentActivity = () => {
  return (
    <div className="w-2/3 rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h2>
        <Button className="cursor-pointer text-sm text-blue-600 hover:underline dark:text-blue-400">
          View All
        </Button>
      </div>
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div key={i} className="flex">
            <div className="flex-shrink-0">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${activity.id === 1 ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400" : activity.id === 2 ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400" : activity.id === 3 ? "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400" : activity.id === 4 ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400" : ""}`}
              >
                {activity.icon}
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.subject}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.body}
              </p>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
