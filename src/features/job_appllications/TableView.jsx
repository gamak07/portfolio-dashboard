import React from "react";
import TableViewList from "./TableViewList";

const jobs = [
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Interviewing",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
  },
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Interviewing",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
  },
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Interviewing",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
  },
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Offer",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
  },
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Applied",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
  },
  {
    company: "Netflix",
    jobTitle: "UI Engineer",
    status: "Applied",
    dateApplied: "May 8, 2025",
    contact: "David Park",
    url: "job.com",
  },
];

const TableView = () => {
  return (
    <div className="rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
              >
                company
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Job title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                date applied
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                contact
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                actions
              </th>
            </tr>
          </thead>
          <TableViewList jobs={jobs} />
        </table>
      </div>
    </div>
  );
};

export default TableView;
