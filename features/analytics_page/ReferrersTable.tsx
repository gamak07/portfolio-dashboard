import { RiLinksLine, RiArticleLine } from 'react-icons/ri'

export function ReferrersTable() {
  const referrers = [
    { source: 'Google Search', visits: '45,231', share: '42.3%' },
    { source: 'LinkedIn', visits: '28,542', share: '26.7%' },
    { source: 'Twitter', visits: '15,643', share: '14.6%' },
    { source: 'GitHub', visits: '9,821', share: '9.2%' },
    { source: 'Direct', visits: '7,654', share: '7.2%' },
  ]

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <RiLinksLine className="text-cyan-400 w-6 h-6" />
        Top Referrers
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-2 text-slate-400 text-sm font-medium">Source</th>
              <th className="text-right py-3 px-2 text-slate-400 text-sm font-medium">Visits</th>
              <th className="text-right py-3 px-2 text-slate-400 text-sm font-medium">Share</th>
            </tr>
          </thead>
          <tbody>
            {referrers.map((item) => (
              <tr key={item.source} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                <td className="py-3 px-2 text-slate-300">{item.source}</td>
                <td className="py-3 px-2 text-right text-white font-mono">{item.visits}</td>
                <td className="py-3 px-2 text-right text-cyan-400 font-mono font-semibold">{item.share}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function BlogPostsTable() {
  const posts = [
    { title: 'Advanced React Patterns in 2024', views: '12,543', time: '8:42' },
    { title: 'Building Scalable Microservices', views: '10,234', time: '7:15' },
    { title: 'TypeScript Best Practices', views: '9,876', time: '6:30' },
    { title: 'Modern CSS Techniques', views: '8,765', time: '5:45' },
    { title: 'API Design Principles', views: '7,654', time: '6:12' },
  ]

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <RiArticleLine className="text-cyan-400 w-6 h-6" />
        Most Viewed Blog Posts
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-2 text-slate-400 text-sm font-medium">Title</th>
              <th className="text-right py-3 px-2 text-slate-400 text-sm font-medium">Views</th>
              <th className="text-right py-3 px-2 text-slate-400 text-sm font-medium">Avg Time</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.title} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                <td className="py-3 px-2 text-slate-300">{post.title}</td>
                <td className="py-3 px-2 text-right text-white font-mono">{post.views}</td>
                <td className="py-3 px-2 text-right text-purple-400 font-mono">{post.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}