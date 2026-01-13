import { RiBarChartBoxLine } from 'react-icons/ri'

const projects = [
  { name: 'AI-Powered Dashboard', views: '68,871', clicks: '8,542', ctr: '12.4%', percent: 100 },
  { name: 'E-commerce Platform', views: '66,954', clicks: '7,231', ctr: '10.8%', percent: 84.6 },
  { name: 'Mobile Banking App', views: '71,052', clicks: '6,892', ctr: '9.7%', percent: 80.6 },
  { name: 'Social Media Analytics', views: '63,404', clicks: '5,643', ctr: '8.9%', percent: 66.0 },
  { name: 'Healthcare Portal', views: '62,792', clicks: '4,521', ctr: '7.2%', percent: 52.9 },
]

export function TopProjects() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <RiBarChartBoxLine className="text-cyan-400 w-6 h-6" />
        Top Performing Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.name} className="space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-slate-300 font-medium">{project.name}</span>
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-slate-400 text-sm font-mono hidden sm:inline">{project.views} views</span>
                <span className="text-slate-400 text-sm font-mono">{project.clicks} clicks</span>
                <span className="text-emerald-400 text-sm font-mono font-semibold">{project.ctr} CTR</span>
              </div>
            </div>
            <div className="relative h-8 bg-slate-700 rounded-lg overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-600 to-cyan-400 flex items-center justify-end pr-3 transition-all duration-500" 
                style={{ width: `${project.percent}%` }}
              >
                <span className="text-white text-xs font-semibold">{project.clicks}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}