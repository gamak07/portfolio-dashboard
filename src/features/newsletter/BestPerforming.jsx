import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

const bestNewsletters = [
  {
    title: "Welcome Series - Intro Email",
    date: "May 20, 2025",
    openRate: 74,
  },
  {
    title: "Product Update April 2025",
    date: "May 5, 2025",
    openRate: 69,
  },
  {
    title: "Tips to Boost Engagement",
    date: "April 28, 2025",
    openRate: 65,
  },
  {
    title: "Monthly Roundup - March",
    date: "April 2, 2025",
    openRate: 61,
  },
];

const BestPerforming = () => {
  return (
    <div className="w-full rounded-lg bg-white shadow">
      <div className="border-b border-gray-200 px-4 py-5">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          Best Performing
        </h2>
      </div>

      <ul className="space-y-3 p-4">
        {bestNewsletters.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="truncate text-sm font-medium text-gray-900">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
            <div className="ml-2 flex flex-shrink-0">
              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs leading-5 font-semibold text-green-800">
                {item.openRate}% Open
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestPerforming;
