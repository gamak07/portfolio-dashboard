import { RiQuillPenLine, RiFolderAddLine, RiFileTextLine, RiMailSendLine, RiSettings3Line, RiMailLine, RiEditLine, RiFlashlightLine } from 'react-icons/ri'

export function QuickActions() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <RiFlashlightLine className="text-cyan-400 w-5 h-5" />
        Quick Actions
      </h3>
      <div className="space-y-3">
        <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 rounded-lg text-white font-medium transition-all">
          <RiQuillPenLine className="text-xl" />
          <span>Write New Blog Post</span>
        </button>
        <button className="w-full flex items-center gap-3 p-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition-all">
          <RiFolderAddLine className="text-xl" />
          <span>Add New Project</span>
        </button>
        <button className="w-full flex items-center gap-3 p-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition-all">
          <RiFileTextLine className="text-xl" />
          <span>Update Resume</span>
        </button>
        <button className="w-full flex items-center gap-3 p-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition-all">
          <RiMailSendLine className="text-xl" />
          <span>Draft Newsletter</span>
        </button>
        <button className="w-full flex items-center gap-3 p-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition-all">
          <RiSettings3Line className="text-xl" />
          <span>System Settings</span>
        </button>
      </div>
    </div>
  )
}

export function NewsletterSnapshot() {
  const subs = [
    { initials: 'EW', name: 'Emma Wilson', email: 'emma.wilson@example.com', source: 'via Blog Post' },
    { initials: 'DM', name: 'David Martinez', email: 'david.martinez@example.com', source: 'via Homepage' },
    { initials: 'SA', name: 'Sophia Anderson', email: 'sophia.anderson@example.com', source: 'via Project Page' },
  ]

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <RiMailLine className="text-cyan-400 w-5 h-5" />
        Newsletter Snapshot
      </h3>
      <div className="space-y-3 mb-4">
        {subs.map((sub, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/50">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {sub.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{sub.name}</p>
              <p className="text-slate-400 text-xs truncate">{sub.email}</p>
              <p className="text-slate-500 text-xs mt-0.5">{sub.source}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full flex items-center justify-center gap-2 p-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-medium transition-all">
        <RiEditLine className="w-5 h-5" />
        <span>Draft Campaign</span>
      </button>
    </div>
  )
}