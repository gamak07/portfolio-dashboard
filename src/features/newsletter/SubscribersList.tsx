import React from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import Button from "../../components/Button";

interface Props{
  subscribers:any
  toggleSelectRow: any
  selectedRows: any
}

const SubscribersList = ({subscribers, toggleSelectRow, selectedRows}:Props) => {
  return (
    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-900">
      {subscribers.map((subscriber:any) => (
        <tr key={subscriber.id}>
          <td className="px-4 py-3">
            <input
              type="checkbox"
              checked={selectedRows.includes(subscriber.id)}
              onChange={() => toggleSelectRow(subscriber.id)}
            />
          </td>
          <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
            {subscriber.name}
          </td>
          <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
            {subscriber.email}
          </td>
          <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
            {subscriber.date}
          </td>
          <td className="px-4 py-3">
            <span
              className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                subscriber.status === "Subscribed"
                  ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-white"
                  : "bg-red-100 text-red-800 dark:bg-red-700 dark:text-white"
              }`}
            >
              {subscriber.status}
            </span>
          </td>
          <td className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300">
            <Button className="text-blue-600 cursor-pointer">
              <FaEye />
            </Button>
            <Button className="text-red-600 cursor-pointer">
              <FaTrashAlt />
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default SubscribersList;
