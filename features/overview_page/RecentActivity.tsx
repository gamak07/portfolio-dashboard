import { RiEditLine, RiUserAddLine, RiArticleLine, RiMailLine, RiEyeLine, RiFileTextLine, RiDatabase2Line, RiTimeLine } from 'react-icons/ri'

export function RecentActivity() {
  const activities = [
    { icon: RiEditLine, color: 'text-blue-400', title: 'Updated Project', desc: 'E-commerce Platform Redesign', time: '2 minutes ago' },
    { icon: RiUserAddLine, color: 'text-emerald-400', title: 'New Subscriber', desc: 'sarah.johnson@example.com', time: '5 minutes ago' },
    { icon: RiArticleLine, color: 'text-purple-400', title: 'Published Blog Post', desc: 'Advanced React Patterns in 2024', time: '1 hour ago' },
    { icon: RiMailLine, color: 'text-cyan-400', title: 'Message Received', desc: 'Partnership inquiry from TechCorp', time: '2 hours ago' },
    { icon: RiEyeLine, color: 'text-yellow-400', title: 'Project View Milestone', desc: 'AI Dashboard reached 10K views', time: '3 hours ago' },
    { icon: RiFileTextLine, color: 'text-orange-400', title: 'Updated Resume', desc: 'Added new certification', time: '5 hours ago' },
    { icon: RiDatabase2Line, color: 'text-slate-400', title: 'System Backup', desc: 'Database backup completed', time: '6 hours ago' },
  ]

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <RiTimeLine className="text-cyan-400 w-5 h-5" />
        Recent Activity
      </h3>
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
        {activities.map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer group">
            <div className={`w-8 h-8 flex items-center justify-center rounded-lg bg-slate-700 ${item.color}`}>
              <item.icon className="text-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium mb-0.5 group-hover:text-cyan-400 transition-colors">{item.title}</p>
              <p className="text-slate-400 text-xs truncate">{item.desc}</p>
              <p className="text-slate-500 text-xs mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}