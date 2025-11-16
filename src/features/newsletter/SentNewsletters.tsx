import React from "react";
import {
  FaCalendarAlt,
  FaEnvelopeOpen,
  FaMousePointer,
  FaUsers,
} from "react-icons/fa";
import Button from "../../components/Button";

// Sample data
const sentNewsletters = [
  {
    id: 1,
    title: "Product Launch Update",
    date: "2025-05-22",
    recipients: 1200,
    clickRate: 45,
    openRate: 72,
  },
  {
    id: 2,
    title: "Weekly Digest - May Week 3",
    date: "2025-05-18",
    recipients: 800,
    clickRate: 38,
    openRate: 65,
  },
  {
    id: 3,
    title: "Survey: Help Us Improve",
    date: "2025-05-14",
    recipients: 950,
    clickRate: 25,
    openRate: 60,
  },
  {
    id: 4,
    title: "Special Offer: 30% Discount",
    date: "2025-05-10",
    recipients: 1500,
    clickRate: 58,
    openRate: 80,
  },
];

const SentNewsLetter = () => {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {sentNewsletters.map((newsletter) => (
        <div
          key={newsletter.id}
          className="flex flex-col justify-between rounded-md border border-gray-300 bg-white shadow-sm hover:shadow-md dark:border-gray-600 dark:bg-gray-800"
        >
          <div className="p-4">
            <h3 className="truncate text-lg leading-6 font-medium text-gray-900 dark:text-white">
              {newsletter.title}
            </h3>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <FaCalendarAlt /> {newsletter.date}
            </div>
            <div className="mt-1 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <FaUsers /> {newsletter.recipients}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-md bg-green-50 p-3">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <FaEnvelopeOpen className="text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      {newsletter.clickRate}% Open Rate
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-blue-50 p-3">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <FaMousePointer className="text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-800">
                      {newsletter.openRate}% Click Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between bg-gray-50 p-4">
            <Button className="cursor-pointer text-indigo-600 px-3 py-2 text-sm font-medium hover:text-indigo-900">
              View Details
            </Button>
            <Button className="cursor-pointer text-indigo-600 px-3 py-2 text-sm font-medium hover:text-indigo-900">
              Duplicate
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SentNewsLetter;
