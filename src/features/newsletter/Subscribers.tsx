import React, { useState } from "react";
import SubscribersList from "./SubscribersList";

// Dummy subscriber data
const subscribers = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    date: "2025-05-20",
    status: "Subscribed",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john.smith@example.com",
    date: "2025-05-18",
    status: "Unsubscribed",
  },
  {
    id: 3,
    name: "Mary Johnson",
    email: "mary.j@example.com",
    date: "2025-05-17",
    status: "Subscribed",
  },
  {
    id: 4,
    name: "Alex Brown",
    email: "alex.b@example.com",
    date: "2025-05-16",
    status: "Subscribed",
  },
  {
    id: 5,
    name: "Lisa Ray",
    email: "lisa.ray@example.com",
    date: "2025-05-15",
    status: "Unsubscribed",
  },
  {
    id: 6,
    name: "Chris Green",
    email: "chris.g@example.com",
    date: "2025-05-14",
    status: "Subscribed",
  },
];

const Subscribers = () => {
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const toggleSelectAll = () => {
    if (selectedRows.length === subscribers.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(subscribers.map((s) => s.id));
    }
  };

  const toggleSelectRow = (id:any) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              <input
                type="checkbox"
                checked={selectedRows.length === subscribers.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Email
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Date
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <SubscribersList
          subscribers={subscribers}
          toggleSelectRow={toggleSelectRow}
          selectedRows={selectedRows}
        />
      </table>
    </div>
  );
};

export default Subscribers;
