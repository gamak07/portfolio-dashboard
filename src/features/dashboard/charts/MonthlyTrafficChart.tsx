import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

interface DataMonthlyProp {
  month: string;
  visits: number;
}

const dataMonthly: DataMonthlyProp[] = [
  { month: "Jan", visits: 800 },
  { month: "Feb", visits: 950 },
  { month: "Mar", visits: 1100 },
  { month: "Apr", visits: 1050 },
  { month: "May", visits: 1250 },
  { month: "Jun", visits: 1400 },
  { month: "Jul", visits: 1300 },
  { month: "Aug", visits: 1350 },
  { month: "Sep", visits: 1200 },
  { month: "Oct", visits: 1500 },
  { month: "Nov", visits: 1600 },
  { month: "Dec", visits: 1550 },
];

const MonthlyTrafficChart = () => (
  <div className="h-80 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={dataMonthly}
        margin={{ top: 40, right: 10, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="gradientMonthly" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#10B981" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="month" tick={{ fill: "#6B7280" }} />
        <YAxis tick={{ fill: "#6B7280" }} />
        <Tooltip contentStyle={{ borderRadius: "0.5rem" }} />
        <Area
          type="monotone"
          dataKey="visits"
          stroke="#10B981"
          fill="url(#gradientMonthly)"
          dot={false}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default MonthlyTrafficChart;
