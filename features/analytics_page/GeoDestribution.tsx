import { RiGlobalLine } from 'react-icons/ri'

const countries = [
  { name: 'United States', visits: '38,542', percent: 36.1 },
  { name: 'United Kingdom', visits: '18,234', percent: 17.1 },
  { name: 'Germany', visits: '12,876', percent: 12.1 },
  { name: 'Canada', visits: '10,543', percent: 9.9 },
  { name: 'India', visits: '9,234', percent: 8.6 },
  { name: 'Australia', visits: '7,654', percent: 7.2 },
  { name: 'France', visits: '5,432', percent: 5.1 },
  { name: 'Others', visits: '4,385', percent: 4.1 },
]

export function GeoDistribution() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <RiGlobalLine className="text-cyan-400 w-6 h-6" />
        Geographic Distribution
      </h2>
      <div className="space-y-3">
        {countries.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-300 font-medium">{item.name}</span>
              <span className="text-slate-400 font-mono">{item.visits} visits</span>
            </div>
            <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" 
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 font-mono">{item.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}