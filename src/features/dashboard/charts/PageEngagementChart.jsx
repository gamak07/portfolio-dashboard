import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const dataPageViews = [
  { page: "Home", views: 340 },
  { page: "Contact", views: 300 },
  { page: "Projects", views: 305 },
  { page: "Blog Posts", views: 330 },
];

const PageEngagementChart = () => (
  <div className="h-80 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={dataPageViews}
        margin={{ top: 40, right: 10, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis type="number" tick={{ fill: "#6B7280" }} />
        <YAxis
          dataKey="page"
          type="category"
          tick={{ fill: "#6B7280" }}
          width={80}
        />
        <Tooltip />
        <Bar
          dataKey="views"
          fill="#10B981"
          barSize={50}
          radius={[0, 10, 10, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default PageEngagementChart;
