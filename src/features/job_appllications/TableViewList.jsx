import React, { useState } from "react";
import Button from "../../components/Button";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditApplication from "./EditApplication";

const TableViewList = ({ jobs }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <tbody className="divide-y divide-gray-200 bg-white dark:bg-gray-800">
      {jobs.map((job, i) => (
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700" key={i}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                N
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-400">
                  {job.company}
                </div>
                <a
                  href=""
                  className="cursor-pointer text-xs text-indigo-600 hover:text-indigo-900"
                >
                  View Job Listing
                </a>
              </div>
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="text-sm text-gray-900 dark:text-gray-400">
              {job.jobTitle}
            </div>
          </td>
          <td className="px-6 py-4">
            <span
              className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${job.status === "Interviewing" ? "bg-blue-100 text-blue-800" : job.status === "Applied" ? "bg-yellow-100 text-yellow-800" : job.status === "Offer" ? "bg-green-100 text-green-800" : ""}`}
            >
              {job.status}
            </span>
          </td>
          <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
            {job.dateApplied}
          </td>
          <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
            {job.contact}
          </td>
          <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
            <div className="flex justify-end space-x-2">
              <Button className="cursor-pointer text-indigo-600 hover:text-indigo-900" onClick={handleModal}>
                <FaEdit />
              </Button>
              <Button className="cursor-pointer text-red-600 hover:text-red-900">
                <FaTrashAlt />
              </Button>
            </div>
          </td>
        </tr>
      ))}
      {showModal && <EditApplication setShowModal={setShowModal} />}
    </tbody>
  );
};

export default TableViewList;
