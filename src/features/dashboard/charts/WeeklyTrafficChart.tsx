import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Dot,
} from "recharts";

interface Prop {
  day: string;
  visits: number;
}

const dataWeekly: Prop[] = [
  { day: "Mon", visits: 850 },
  { day: "Tue", visits: 920 },
  { day: "Wed", visits: 900 },
  { day: "Thu", visits: 950 },
  { day: "Fri", visits: 1250 },
  { day: "Sat", visits: 1300 },
  { day: "Sun", visits: 1280 },
];

const WeeklyTrafficChart = () => (
  <div className="h-80 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={dataWeekly}
        margin={{ top: 40, right: 10, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="gradientWeekly" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="day" tick={{ fill: "#6B7280" }} />
        <YAxis tick={{ fill: "#6B7280" }} />
        <Tooltip contentStyle={{ borderRadius: "0.5rem" }} />
        <Area
          type="monotone"
          dataKey="visits"
          stroke="#3B82F6"
          fill="url(#gradientWeekly)"
          dot={{ fill: "#3B82F6" }}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default WeeklyTrafficChart;
