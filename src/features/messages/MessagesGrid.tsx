import React, { useState } from "react";
import Button from "../../components/Button";
import {
  FaArchive,
  FaEnvelope,
  FaEnvelopeOpen,
  FaRegStar,
  FaStar,
  FaTrashAlt,
} from "react-icons/fa";
import { MdUnarchive } from "react-icons/md";
import MessageDetails from "./MessageDetails";

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

const MessagesGrid = () => {
  const [messagesList, setMessagesList] = useState<any>(messages);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const handleDetails = () => {
    setShowDetails((prev) => !prev);
  };
  const toggleStarred = (index:any) => {
    const updated = [...messagesList];
    updated[index].starred = !updated[index].starred;
    setMessagesList(updated);
  };
  const toggleRead = (index:any) => {
    const updated = [...messagesList];
    updated[index].read = !updated[index].read;
    setMessagesList(updated);
  };
  const toggleArchive = (index:any) => {
    const updated = [...messagesList];
    updated[index].archive = !updated[index].archive;
    setMessagesList(updated);
  };

  return (
    <>
      <div className="rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {messagesList.map((message:any, i:any) => (
            <div
              className={`cursor-pointer rounded-lg border shadow-sm transition-shadow duration-200 hover:shadow-md ${message.read ? "border-indigo-200 bg-indigo-50 dark:border-indigo-900 dark:bg-indigo-800/30" : "border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"}`}
              key={i}
              onClick={handleDetails}
            >
              <div className="p-4">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                      <span className="text-sm font-medium text-indigo-700">
                        SJ
                      </span>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {message.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {message.email}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {message.date}
                  </div>
                </div>
                <div
                  className={`mb-2 text-sm ${message.read ? "font-semibold text-gray-900 dark:text-white" : "text-gray-700 dark:text-white/80"}`}
                >
                  {message.topic}
                </div>
                <div className="line-clamp-2 h-10 text-sm text-gray-500 dark:text-gray-400">
                  {message.subject}
                </div>
              </div>
              <div className="flex items-center justify-between rounded-b-lg border-t border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-600 dark:bg-gray-700">
                <div className="flex space-x-2">
                  <input type="checkbox" />
                  <Button onClick={() => toggleStarred(i)}>
                    {message.starred ? (
                      <FaStar className="text-yellow-500" />
                    ) : (
                      <FaRegStar className="text-gray-500 hover:text-yellow-500" />
                    )}
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Button
                    className="cursor-pointer text-gray-400 hover:text-indigo-600"
                    title={`${message.read ? "Mark as read" : "Mark as unread"}`}
                    onClick={() => toggleRead(i)}
                  >
                    {message.read ? <FaEnvelope /> : <FaEnvelopeOpen />}
                  </Button>
                  <Button
                    className="cursor-pointer text-gray-400 hover:text-indigo-600"
                    title={`${message.archive ? "Unarchive" : "Archive"}`}
                    onClick={() => toggleArchive(i)}
                  >
                    {message.archive ? <FaArchive /> : <MdUnarchive />}
                  </Button>
                  <Button
                    className="cursor-pointer text-gray-400 hover:text-indigo-600"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showDetails && <MessageDetails setShowDetails={()=>setShowDetails(false)} />}
    </>
  );
};

export default MessagesGrid;
