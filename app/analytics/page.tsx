import { DeviceChart } from "@/features/analytics_page/DeviceChart";
import { GeoDistribution } from "@/features/analytics_page/GeoDestribution";
import { BlogPostsTable, ReferrersTable } from "@/features/analytics_page/ReferrersTable";
import { TopProjects } from "@/features/analytics_page/TopProjects";

export default function AnalyticsPage() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
        <p className="text-slate-400">Deep dive into your platform performance metrics</p>
      </div>

      {/* Row 1: Geo & Devices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <GeoDistribution />
        <DeviceChart />
      </div>

      {/* Row 2: Top Projects */}
      <TopProjects />

      {/* Row 3: Data Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReferrersTable />
        <BlogPostsTable />
      </div>
    </div>
  )
}