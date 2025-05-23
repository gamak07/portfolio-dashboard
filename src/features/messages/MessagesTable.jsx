import React, { useState } from "react";
import MessagesList from "./MessagesList";
import { FaRegStar, FaStar } from "react-icons/fa";
import Pagination from "../../components/Pagination";

const messages = [
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    topic: "Collaboration opportunity on React project",
    subject:
      "Hi there,I came across your portfolio and was really impressed with your React work. I have a project that might be a good fit for your skills. We're building a dashboard application for a healthcare client and need someone with strong React and data visualization experience.Would you be interested in discussing this further? I can share more details if you're available for a quick call next week.Best regards,Sarah JohnsonProject Manager",
    date: "yesterday",
    read: true,
    archive: false,
    starred: false,
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    topic: "Collaboration opportunity on React project",
    subject:
      "Hi there,I came across your portfolio and was really impressed with your React work. I have a project that might be a good fit for your skills. We're building a dashboard application for a healthcare client and need someone with strong React and data visualization experience.Would you be interested in discussing this further? I can share more details if you're available for a quick call next week.Best regards,Sarah JohnsonProject Manager",
    date: "yesterday",
    read: false,
    archive: false,
    starred: true,
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    topic: "Collaboration opportunity on React project",
    subject:
      "Hi there,I came across your portfolio and was really impressed with your React work. I have a project that might be a good fit for your skills. We're building a dashboard application for a healthcare client and need someone with strong React and data visualization experience.Would you be interested in discussing this further? I can share more details if you're available for a quick call next week.Best regards,Sarah JohnsonProject Manager",
    date: "yesterday",
    read: true,
    archive: false,
    starred: false,
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    topic: "Collaboration opportunity on React project",
    subject:
      "Hi there,I came across your portfolio and was really impressed with your React work. I have a project that might be a good fit for your skills. We're building a dashboard application for a healthcare client and need someone with strong React and data visualization experience.Would you be interested in discussing this further? I can share more details if you're available for a quick call next week.Best regards,Sarah JohnsonProject Manager",
    date: "yesterday",
    read: true,
    archive: false,
    starred: true,
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    topic: "Collaboration opportunity on React project",
    subject:
      "Hi there,I came across your portfolio and was really impressed with your React work. I have a project that might be a good fit for your skills. We're building a dashboard application for a healthcare client and need someone with strong React and data visualization experience.Would you be interested in discussing this further? I can share more details if you're available for a quick call next week.Best regards,Sarah JohnsonProject Manager",
    date: "yesterday",
    read: false,
    archive: false,
    starred: true,
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    topic: "Collaboration opportunity on React project",
    subject:
      "Hi there,I came across your portfolio and was really impressed with your React work. I have a project that might be a good fit for your skills. We're building a dashboard application for a healthcare client and need someone with strong React and data visualization experience.Would you be interested in discussing this further? I can share more details if you're available for a quick call next week.Best regards,Sarah JohnsonProject Manager",
    date: "yesterday",
    read: false,
    archive: false,
    starred: false,
  },
];

const MessagesTable = () => {
  const [messagesList, setMessagesList] = useState(messages);
  const [starMsg, setStarMsg] = useState(false);
  const handleStarredMsg = () => {
    setStarMsg((prev) => !prev);
  };
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow dark:bg-gray-800">
      <table className="w-full">
        <thead className="bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
          <tr>
            <th className="w-10 px-6 py-3 text-left uppercase">
              <input type="checkbox" className="cursor-pointer rounded" />
            </th>
            <th
              className="w-10 px-6 py-3 text-left uppercase"
              onClick={handleStarredMsg}
            >
              <span>
                {starMsg ? (
                  <FaStar className="text-yellow-500" />
                ) : (
                  <FaRegStar className="text-gray-500 hover:text-yellow-500" />
                )}
              </span>
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">
              sender
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">
              Message
            </th>
            <th className="w-32 px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">
              Date
            </th>
            <th className="w-32 px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <MessagesList messages={messagesList} setMessages={setMessagesList} />
      </table>
      <Pagination />
    </div>
  );
};

export default MessagesTable;
