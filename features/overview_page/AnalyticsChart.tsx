'use client'

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'

const data = [
  { name: 'Day 1', visitors: 4000, views: 2400, engagement: 2400 },
  { name: 'Day 2', visitors: 3000, views: 1398, engagement: 2210 },
  { name: 'Day 3', visitors: 2000, views: 9800, engagement: 2290 },
  { name: 'Day 4', visitors: 2780, views: 3908, engagement: 2000 },
  { name: 'Day 5', visitors: 1890, views: 4800, engagement: 2181 },
  { name: 'Day 6', visitors: 2390, views: 3800, engagement: 2500 },
  { name: 'Day 7', visitors: 3490, views: 4300, engagement: 2100 },
  { name: 'Day 8', visitors: 4000, views: 2400, engagement: 2400 },
  { name: 'Day 9', visitors: 3000, views: 1398, engagement: 2210 },
  { name: 'Day 10', visitors: 2000, views: 9800, engagement: 2290 },
  { name: 'Day 11', visitors: 2780, views: 3908, engagement: 2000 },
  { name: 'Day 12', visitors: 1890, views: 4800, engagement: 2181 },
]

export function AnalyticsChart() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Traffic & Engagement</h2>
          <p className="text-slate-400 text-sm">Last 30 days performance overview</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
            <span className="text-slate-300 text-sm">Visitors</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-slate-300 text-sm">Page Views</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <span className="text-slate-300 text-sm">Engagement</span>
          </div>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
              itemStyle={{ color: '#e2e8f0' }}
            />
            <Area type="monotone" dataKey="visitors" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorVisitors)" />
            <Area type="monotone" dataKey="views" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" />
            <Area type="monotone" dataKey="engagement" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorEngagement)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}