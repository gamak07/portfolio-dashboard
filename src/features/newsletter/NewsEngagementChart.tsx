import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const data = [
  { name: "Newsletter 1", openRate: 68, clickRate: 42 },
  { name: "Newsletter 2", openRate: 72, clickRate: 50 },
  { name: "Newsletter 3", openRate: 66, clickRate: 38 },
  { name: "Newsletter 4", openRate: 70, clickRate: 44 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded border border-gray-200 bg-white px-3 py-2 text-sm shadow-md">
        <p className="mb-1 font-semibold">{label}</p>
        <p className="text-indigo-600">Open Rate: {payload[0].value}%</p>
        <p className="text-teal-600">Click Rate: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

const NewsEngagementChart = () => {
  return (
    <div className="rounded-lg bg-white shadow">
      <div className="border-b border-gray-200 px-4 py-5">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Subscriber Growth
        </h3>
      </div>
      <div className="h-85 p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barCategoryGap={20}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              domain={[0, 80]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80]}
              tickFormatter={(tick) => `${tick}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              iconType="square"
              formatter={(value) => <span className="text-sm">{value}</span>}
            />
            <Bar dataKey="openRate" fill="#4F46E5" name="Open Rate" />
            <Bar dataKey="clickRate" fill="#14B8A6" name="Click Rate" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NewsEngagementChart;
