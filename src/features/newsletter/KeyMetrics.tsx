import React from "react";
import {
  FaUsers,
  FaUserPlus,
  FaMousePointer,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const metrics = [
  {
    label: "Total Subscribers",
    value: "4,280",
    icon: FaUsers,
    bg: "bg-indigo-500",
    bgLight: "bg-indigo-50",
  },
  {
    label: "New Subscribers (This Month)",
    value: "320",
    icon: FaUserPlus,
    bg: "bg-green-500",
    bgLight: "bg-green-50",
  },
  {
    label: "Average Open Rate",
    value: "68%",
    icon: FaEnvelopeOpenText,
    bg: "bg-blue-500",
    bgLight: "bg-blue-50",
  },
  {
    label: "Average Click Rate",
    value: "42%",
    icon: FaMousePointer,
    bg: "bg-purple-500",
    bgLight: "bg-purple-50",
  },
];

const KeyMetrics = () => {
  return (
    <div className="w-full rounded-lg bg-white shadow mb-8">
      <div className="border-b border-gray-200 px-4 py-5">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          Key Metrics
        </h2>
      </div>

      <div className="space-y-4 p-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-4 rounded-md p-4 ${metric.bgLight}`}
            >
              <div className={`h-10 w-10 flex items-center justify-center rounded-full ${metric.bg}`}>
                <Icon className="text-white text-lg" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {metric.value}
                </h4>
                <p className="text-sm text-gray-500">{metric.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyMetrics;
