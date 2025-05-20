import React, { useState } from "react";
import Button from "../../components/Button";
import WeeklyTrafficChart from "./charts/WeeklyTrafficChart";
import MonthlyTrafficChart from "./charts/MonthlyTrafficChart";
import YearlyTrafficChart from "./charts/YearlyTrafficChart";

const WebsiteTraffic = () => {
  const [activeTab, setActiveTab] = useState("Weekly");
  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Website Traffic
        </h2>
        <div className="flex space-x-2">
          <Button
            className={`cursor-pointer rounded-full px-3 py-1 text-xs ${activeTab === "Weekly" ? "bg-blue-100 text-blue-400 dark:bg-blue-900 dark:text-blue-400" : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"}`}
            onClick={() => handleActiveTab("Weekly")}
          >
            Weekly
          </Button>
          <Button
            className={`cursor-pointer rounded-full px-3 py-1 text-xs ${activeTab === "Monthly" ? "bg-blue-100 text-blue-400 dark:bg-blue-900 dark:text-blue-400" : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"}`}
            onClick={() => handleActiveTab("Monthly")}
          >
            Monthly
          </Button>
          <Button
            className={`cursor-pointer rounded-full px-3 py-1 text-xs ${activeTab === "Yearly" ? "bg-blue-100 text-blue-400 dark:bg-blue-900 dark:text-blue-400" : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"}`}
            onClick={() => handleActiveTab("Yearly")}
          >
            Yearly
          </Button>
        </div>
      </div>
      {activeTab === "Weekly" && <WeeklyTrafficChart />}
      {activeTab === "Monthly" && <MonthlyTrafficChart />}
      {activeTab === "Yearly" && <YearlyTrafficChart />}
    </div>
  );
};

export default WebsiteTraffic;
