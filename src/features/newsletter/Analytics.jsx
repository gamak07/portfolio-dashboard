import React from "react";
import SubscribersGrowthChart from "./SubscribersGrowthChart";
import NewsEngagementChart from "./NewsEngagementChart";
import KeyMetrics from "./KeyMetrics";
import BestPerforming from "./BestPerforming";

const Analytics = () => {
  return (
    <div className="flex w-full flex-col md:flex-row gap-6">
      <div className="w-full md:w-2/3">
        <SubscribersGrowthChart />
        <NewsEngagementChart />
      </div>
      <div className="w-full md:w-1/3">
        <KeyMetrics />
        <BestPerforming />
      </div>
    </div>
  );
};

export default Analytics;
