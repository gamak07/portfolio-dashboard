import React from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaBlog,
  FaCodeBranch,
  FaEnvelope,
  FaEye,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaEye />,
    title: "Total Views",
    value: 24512,
    metric: "12.5%",
    period: "vs last month",
    isNegative: false,
  },
  {
    id: 2,
    icon: <FaCodeBranch />,
    title: "Projects",
    value: 5,
    metric: "3 new",
    period: "this month",
    isNegative: false,
  },
  {
    id: 3,
    icon: <FaBlog />,
    title: "Blog Posts",
    value: 13,
    metric: "2 new",
    period: "this week",
    isNegative: false,
  },
  {
    id: 4,
    icon: <FaEnvelope />,
    title: "Messages",
    value: 8,
    metric: "3 unread",
    period: "needs attention",
    isNegative: true,
  },
];

const Stats = () => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <div key={i} className="rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center">
            <div
              className={`mr-4 rounded-full ${stat.id === 1 ? "bg-blue-100 p-3 text-blue-600 dark:bg-blue-900 dark:text-blue-400" : stat.id === 2 ? "bg-green-100 p-3 text-green-600 dark:bg-green-900 dark:text-green-400" : stat.id === 3 ? "bg-purple-100 p-3 text-purple-600 dark:bg-purple-900 dark:text-purple-400" : stat.id === 4 ? "bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400" : ""}`}
            >
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.title}
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {stat.metric}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p
              className={`flex items-center text-sm ${stat.isNegative ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}
            >
              {stat.isNegative ? <FaArrowDown /> : <FaArrowUp />}
              {stat.metric}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {stat.period}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
