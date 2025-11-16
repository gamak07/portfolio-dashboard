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

interface Props {
  messages: any;
  setMessages: any;
}

const MessagesList = ({ messages, setMessages }: Props) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const toggleStarred = (index: any) => {
    const updated = [...messages];
    updated[index].starred = !updated[index].starred;
    setMessages(updated);
  };
  const toggleRead = (index: any) => {
    const updated = [...messages];
    updated[index].read = !updated[index].read;
    setMessages(updated);
  };
  const toggleArchive = (index: any) => {
    const updated = [...messages];
    updated[index].archive = !updated[index].archive;
    setMessages(updated);
  };

  return (
    <>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
        {messages.map((message: any, i: any) => (
          <tr
            className={`cursor-pointer ${message.read ? "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700" : "bg-indigo-50 dark:bg-indigo-800/30"}`}
            key={i}
            onClick={handleDetails}
          >
            <td className="px-6 py-4">
              <input type="checkbox" className="cursor-pointer rounded" />
            </td>
            <td className="px-6 py-4 text-left">
              <span onClick={() => toggleStarred(i)}>
                {message.starred ? (
                  <FaStar className="text-yellow-500" />
                ) : (
                  <FaRegStar className="text-gray-500 hover:text-yellow-500" />
                )}
              </span>
            </td>
            <td className="px-6 py-4 text-sm">
              <div className="flex items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-sm font-medium text-indigo-700">
                    SJ
                  </span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {message.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {message.email}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 text-sm">
              <div
                className={`text-sm ${message.read ? "text-gray-700 dark:text-white/80" : "font-semibold text-gray-900 dark:text-white"}`}
              >
                {message.topic}
              </div>
              <div className="max-w-md truncate text-sm text-gray-500 dark:text-gray-400">
                {message.subject}
              </div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
              {message.date}
            </td>
            <td className="px-6 py-4 text-right text-sm font-medium">
              <div className="flex justify-end space-x-2">
                <Button
                  className="cursor-pointer text-gray-400 hover:text-indigo-600"
                  title="Mark as unread"
                  onClick={() => toggleRead(i)}
                >
                  {message.read ? <FaEnvelopeOpen /> : <FaEnvelope />}
                </Button>
                <Button
                  className="cursor-pointer text-gray-400 hover:text-indigo-600"
                  onClick={() => toggleArchive(i)}
                >
                  {message.archive ? <FaArchive /> : <MdUnarchive />}
                </Button>
                <Button className="cursor-pointer text-gray-400 hover:text-indigo-600">
                  <FaTrashAlt />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      {showDetails && (
        <MessageDetails setShowDetails={() => setShowDetails(false)} />
      )}
    </>
  );
};

export default MessagesList;
