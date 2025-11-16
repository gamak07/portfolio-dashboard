import React from "react";
import Button from "../../components/Button";
import { FaCodeBranch } from "react-icons/fa";

const activities = [
  {
    icon: <FaCodeBranch />,
    title: "portfolio-dashboard",
    history: "3 commits today",
    time: "2h ago",
  },
  {
    icon: <FaCodeBranch />,
    title: "react-components",
    history: "5 commits this week",
    time: "1d ago",
  },
  {
    icon: <FaCodeBranch />,
    title: "school-dashboard",
    history: "3 commits this week",
    time: "3d ago",
  },
];

const GithubActivity = () => {
  return (
    <div className="w-1/3 rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Github Activity
        </h2>
        <Button className="cursor-pointer text-sm text-blue-600 hover:underline dark:text-blue-400">
          View Profile
        </Button>
      </div>
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div className="flex items-center justify-between" key={i}>
            <div className="flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-700 dark:bg-gray-200 dark:text-gray-300">
                {activity.icon}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.title}
                </p>
                <p className="dark:text-xs-400 text-xs text-gray-500">
                  {activity.history}
                </p>
              </div>
            </div>

            <span className="text-xs text-gray-500 dark:text-gray-400">
              {activity.time}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Contribution Activity
        </p>
        <div>
          <img src="/git.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GithubActivity;
