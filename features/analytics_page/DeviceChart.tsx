'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { RiDeviceLine } from 'react-icons/ri'

const data = [
  { name: 'Desktop', value: 62341, color: '#06b6d4' }, // Cyan
  { name: 'Mobile', value: 38142, color: '#a855f7' },  // Purple
  { name: 'Tablet', value: 6417, color: '#10b981' },   // Emerald
]

export function DeviceChart() {
  const total = data.reduce((acc, item) => acc + item.value, 0)

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex flex-col h-full">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <RiDeviceLine className="text-cyan-400 w-6 h-6" />
        Device Breakdown
      </h2>

      {/* Chart Section */}
      <div className="flex-1 min-h-[250px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
              itemStyle={{ color: '#e2e8f0' }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-3xl font-bold text-white font-mono">{(total / 1000).toFixed(1)}K</p>
            <p className="text-slate-400 text-sm">Total Visits</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-slate-300 font-medium">{item.name}</span>
            </div>
            <div className="text-right">
              <p className="text-white font-mono font-semibold">
                {((item.value / total) * 100).toFixed(1)}%
              </p>
              <p className="text-slate-400 text-xs font-mono">{item.value.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}