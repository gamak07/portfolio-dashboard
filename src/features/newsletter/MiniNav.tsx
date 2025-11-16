import React, { useState } from "react";
import Button from "../../components/Button";
import { FaChartLine, FaPaperPlane, FaUsers } from "react-icons/fa";
import Subscribers from "./Subscribers";
import SentNewsletters from "./SentNewsletters";
import Analytics from "./Analytics";

const MiniNav = () => {
  const [activeTab, setActiveTab] = useState<string>("subscribers");
  const handleActiveTab = (tab:string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="mx-auto my-6 w-full">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <Button
              className={`flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium ${
                activeTab === "subscribers"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => handleActiveTab("subscribers")}
            >
              <FaUsers /> Subscribers
            </Button>
            <Button
              className={`flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium ${
                activeTab === "sent"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => handleActiveTab("sent")}
            >
              <FaPaperPlane /> Sent NewsLetters
            </Button>
            <Button
              className={`flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium ${
                activeTab === "analytics"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => handleActiveTab("analytics")}
            >
              <FaChartLine /> Analytics
            </Button>
          </nav>
        </div>
      </div>

      {activeTab === "subscribers" && <Subscribers />}
      {activeTab === "sent" && <SentNewsletters />}
      {activeTab === "analytics" && <Analytics />}
    </>
  );
};

export default MiniNav;
