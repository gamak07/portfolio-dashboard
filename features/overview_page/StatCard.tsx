import { IconType } from 'react-icons'

interface StatCardProps {
  title: string
  value: string
  icon: IconType
  trend: string
  trendUp?: boolean
  trendLabel?: string
}

export function StatCard({ title, value, icon: Icon, trend, trendUp = true }: StatCardProps) {
  // Generate random heights for the "sparkline" bars to mimic the design
  const bars = Array.from({ length: 20 }, () => Math.floor(Math.random() * 60) + 40)

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 hover:border-slate-600 transition-colors cursor-pointer group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-mono font-bold text-white">{value}</p>
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-slate-700/50 rounded-lg text-slate-300 group-hover:text-white transition-colors">
          <Icon className="text-xl" />
        </div>
      </div>
      
      {/* The Visual Bar Chart Effect */}
      <div className="h-12 flex items-end gap-0.5 mt-3">
        {bars.map((height, i) => (
          <div 
            key={i} 
            className="flex-1 bg-gradient-to-t from-cyan-500/80 to-cyan-400/60 rounded-sm hover:from-cyan-400 hover:to-cyan-300 transition-all"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span className={`text-sm font-medium ${trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
          {trend}
        </span>
        <span className="text-slate-500 text-xs">vs last period</span>
      </div>
    </div>
  )
}