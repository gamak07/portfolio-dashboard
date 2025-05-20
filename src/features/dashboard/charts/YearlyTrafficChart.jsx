import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';

const dataYearly = [
  { year: '2019', visits: 7200 },
  { year: '2020', visits: 8300 },
  { year: '2021', visits: 9100 },
  { year: '2022', visits: 10500 },
  { year: '2023', visits: 12000 },
  { year: '2024', visits: 13500 }
];

const YearlyTrafficChart = () => (
  <div className="w-full h-80">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={dataYearly} margin={{ top: 40, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="gradientYearly" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="year" tick={{ fill: '#6B7280' }} />
        <YAxis tick={{ fill: '#6B7280' }} />
        <Tooltip contentStyle={{ borderRadius: '0.5rem' }} />
        <Area
          type="monotone"
          dataKey="visits"
          stroke="#8B5CF6"
          fill="url(#gradientYearly)"
          dot={false}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default YearlyTrafficChart
