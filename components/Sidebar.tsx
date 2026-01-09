'use client'

import { useState } from 'react' // Import useState
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  RiDashboardLine, 
  RiLineChartLine, 
  RiFileList3Line, 
  RiMailSendLine, 
  RiMessage3Line, 
  RiUserSettingsLine, 
  RiSettings3Line,
  RiArrowLeftSLine,
  RiArrowRightSLine // Import Right Arrow for collapsed state
} from 'react-icons/ri'

const navItems = [
  { label: 'Overview', href: '/dashboard', icon: RiDashboardLine },
  { label: 'Analytics', href: '/dashboard/analytics', icon: RiLineChartLine },
  { label: 'Content', href: '/dashboard/content', icon: RiFileList3Line },
  { label: 'Newsletter', href: '/dashboard/newsletter', icon: RiMailSendLine },
  { label: 'Messages', href: '/dashboard/messages', icon: RiMessage3Line },
  { label: 'Profile Manager', href: '/dashboard/profile', icon: RiUserSettingsLine },
  { label: 'Settings', href: '/dashboard/settings', icon: RiSettings3Line },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false) // State for collapse

  return (
    <aside 
      className={cn(
        "bg-slate-900 border-r border-slate-800 h-screen fixed left-0 top-0 transition-all duration-300 flex flex-col z-50",
        isCollapsed ? "w-20" : "w-64" // Dynamic Width
      )}
    >
      
      {/* Header / Logo */}
      <div className={cn(
        "h-16 flex items-center border-b border-slate-800 transition-all duration-300",
        isCollapsed ? "justify-center px-0" : "justify-between px-5"
      )}>
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image 
              alt="Logo" 
              src="/logo.png"
              fill
              className="object-contain"
            />
          </div>
          {/* Hide Text when collapsed */}
          {!isCollapsed && (
            <span className="text-white font-semibold text-lg whitespace-nowrap overflow-hidden transition-all duration-300">
              Mission Control
            </span>
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-6 px-3 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg mb-1 transition-all whitespace-nowrap",
                isActive 
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white border border-transparent",
                isCollapsed && "justify-center px-0" // Center icons when collapsed
              )}
              title={isCollapsed ? item.label : undefined} // Tooltip for collapsed state
            >
              <item.icon className="text-xl w-6 h-6 flex-shrink-0" />
              
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Footer / Collapse Button */}
      <div className="p-3 border-t border-slate-800">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} // Toggle State
          className={cn(
            "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap",
            isCollapsed && "justify-center"
          )}
        >
          {/* Rotate Icon based on state */}
          {isCollapsed ? (
             <RiArrowRightSLine className="text-xl w-6 h-6" />
          ) : (
             <RiArrowLeftSLine className="text-xl w-6 h-6" />
          )}
          
          {!isCollapsed && <span className="text-sm">Collapse</span>}
        </button>
      </div>
      
    </aside>
  )
}