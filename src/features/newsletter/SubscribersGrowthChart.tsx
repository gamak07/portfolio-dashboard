import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Dot,
  TooltipProps,
} from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

const data = [
  { month: "Jan", subscribers: 45 },
  { month: "Feb", subscribers: 58 },
  { month: "Mar", subscribers: 78 },
  { month: "Apr", subscribers: 92 },
  { month: "May", subscribers: 105 },
  { month: "June", subscribers: 112 },
];

const CustomTooltip = ({ active, payload, label }:TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded border border-gray-200 bg-white px-3 py-2 text-sm shadow-md">
        <p className="font-medium">{label}</p>
        <p className="text-blue-600">● {payload[0].value}</p>
      </div>
    );
  }

  return null;
};

const SubscribersGrowthChart = () => {
  const generateTicks = (start:number, end:number, step:number) =>
    Array.from(
      { length: (end - start) / step + 1 },
      (_, i) => start + i * step,
    );

  return (
    <div className="rounded-lg bg-white shadow mb-8">
      <div className="border-b border-gray-200 px-4 py-5">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Subscriber Growth
        </h3>
      </div>
      <div className="h-75 w-full pr-6 py-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid vertical={false} strokeDasharray="" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 140]} ticks={generateTicks(0, 130, 20)} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="subscribers"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ stroke: "#3B82F6", strokeWidth: 1, r: 4, fill: "white" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SubscribersGrowthChart;
