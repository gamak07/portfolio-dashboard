'use client'

import { 
  RiSearchLine, 
  RiMoonLine, 
  RiNotification3Line, 
  RiArrowDownSLine 
} from 'react-icons/ri'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// --- Data: Dummy Notifications ---
const notifications = [
  {
    id: 1,
    message: "New subscriber joined",
    time: "2 minutes ago",
    unread: true
  },
  {
    id: 2,
    message: "Project \"Portfolio V1\" updated",
    time: "1 hour ago",
    unread: false
  },
  {
    id: 3,
    message: "New contact message",
    time: "5 hours ago",
    unread: false
  },
  {
    id: 4,
    message: "System backup completed",
    time: "1 day ago",
    unread: false
  }
]

// Sub-component: Search Bar
function SearchBar() {
  return (
    <div className="flex-1 max-w-xl">
      <div className="relative">
        <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg w-5 h-5" />
        <input 
          type="text"
          placeholder="Search projects, posts, subscribers..." 
          className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-12 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" 
        />
        <kbd className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded border border-slate-600 font-sans">
          ⌘K
        </kbd>
      </div>
    </div>
  )
}

// Sub-component: Notifications
function NotificationsNav() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors relative outline-none focus:ring-2 focus:ring-cyan-500">
          <RiNotification3Line className="text-xl w-6 h-6" />
          {/* Only show red dot if there are unread notifications */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-slate-800"></span>
        </button>
      </PopoverTrigger>
      
      <PopoverContent className="w-80 p-0 bg-slate-800 border-slate-700 shadow-xl" align="end">
        <div className="p-4 border-b border-slate-700">
          <h3 className="text-white font-semibold">Notifications</h3>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {notifications.map((item) => (
            <div 
              key={item.id} 
              className="p-4 border-b border-slate-700 last:border-0 hover:bg-slate-700/50 cursor-pointer transition-colors group"
            >
              <div className="flex justify-between items-start mb-1">
                <p className={`text-sm ${item.unread ? 'text-white font-medium' : 'text-slate-300'}`}>
                  {item.message}
                </p>
                {item.unread && (
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5"></span>
                )}
              </div>
              <p className="text-slate-400 text-xs group-hover:text-slate-300">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

// Sub-component: User Profile Dropdown
function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-3 pl-3 pr-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500">
          <Avatar className="w-8 h-8 h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xs">JD</AvatarFallback>
          </Avatar>
          <div className="text-left hidden md:block">
            <span className="text-white text-sm font-medium whitespace-nowrap block">John Doe</span>
          </div>
          <RiArrowDownSLine className="text-slate-400 w-5 h-5" />
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-56 bg-slate-900 border-slate-800 text-slate-200" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-white">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-800" />
        <DropdownMenuItem className="focus:bg-slate-800 focus:text-white cursor-pointer">
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="focus:bg-slate-800 focus:text-white cursor-pointer">
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-slate-800" />
        <DropdownMenuItem className="text-red-400 focus:text-red-400 focus:bg-slate-800 cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-slate-900 border-b border-slate-700 z-40 flex items-center px-6 transition-all duration-300">
      <SearchBar />

      <div className="flex items-center gap-3 ml-6">

        {/* Notifications Popover */}
        <NotificationsNav />

        {/* User Dropdown */}
        <UserNav />
      </div>
    </header>
  )
}