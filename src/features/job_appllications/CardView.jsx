import React from "react";
import Button from "../../components/Button";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const jobs = [
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Interviewing",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
    notes: "Completed first round. Second interview scheduled for May 25.",
  },
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Interviewing",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
    notes: "Completed first round. Second interview scheduled for May 25.",
  },
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Interviewing",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
    notes: "Completed first round. Second interview scheduled for May 25.",
  },
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Offer",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
    notes: "Completed first round. Second interview scheduled for May 25.",
  },
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Applied",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
    notes: "Completed first round. Second interview scheduled for May 25.",
  },
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Applied",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
    notes: "Completed first round. Second interview scheduled for May 25.",
  },
];

const CardView = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job, i) => (
        <div
          className="rounded-lg bg-white shadow transition-shadow hover:shadow-md"
          key={i}
        >
          <div className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                  N
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    {job.company}
                  </h3>
                  <p className="text-sm text-gray-600">{job.jobTitle}</p>
                </div>
              </div>
              <span
                className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${job.status === "Interviewing" ? "bg-blue-100 text-blue-800" : job.status === "Applied" ? "bg-yellow-100 text-yellow-800" : job.status === "Offer" ? "bg-green-100 text-green-800" : ""}`}
              >
                {job.status}
              </span>
            </div>
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Applied On</p>
                  <p className="text-sm font-medium">{job.dateApplied}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Contact</p>
                  <p className="text-sm font-medium">{job.contact}</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="mb-1 text-xs text-gray-500">Contact</p>
              <p className="line-clamp-2 text-sm text-gray-700">{job.notes}</p>
            </div>
            <div className="flex items-center justify-between border-t border-gray-100 pt-2">
              <a
                href=""
                className="cursor-pointer text-xs text-indigo-600 hover:text-indigo-900"
              >
                View Job Listing
              </a>
              <div className="flex space-x-2">
                <Button className="cursor-pointer text-indigo-600 hover:text-indigo-900">
                  <FaEdit />
                </Button>
                <Button className="cursor-pointer text-red-600 hover:text-red-900">
                  <FaTrashAlt />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;
