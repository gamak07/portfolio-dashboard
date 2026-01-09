import { AnalyticsChart } from '@/features/overview_page/AnalyticsChart'
import { NewsletterSnapshot, QuickActions } from '@/features/overview_page/QuickActions'
import { RecentActivity } from '@/features/overview_page/RecentActivity'
import { StatCard } from '@/features/overview_page/StatCard'
import { RiUserLine, RiEyeLine, RiMessage3Line, RiShieldCheckLine } from 'react-icons/ri'

export default function DashboardOverview() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Mission Control Overview</h1>
        <p className="text-slate-400">Real-time insights and system performance metrics</p>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Real-time Visitors" 
          value="247" 
          icon={RiUserLine} 
          trend="+12.5%" 
        />
        <StatCard 
          title="Total Page Views" 
          value="124.5K" 
          icon={RiEyeLine} 
          trend="+8.3%" 
        />
        <StatCard 
          title="Conversion Rate" 
          value="3.42%" 
          icon={RiShieldCheckLine} 
          trend="+0.8%" 
        />
        <StatCard 
          title="Unread Messages" 
          value="18" 
          icon={RiMessage3Line} 
          trend="+6" 
        />
      </div>

      {/* Main Chart Section */}
      <AnalyticsChart />

      {/* Bottom Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentActivity />
        <QuickActions />
        <NewsletterSnapshot />
      </div>
    </div>
  )
}