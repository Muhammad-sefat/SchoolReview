import React, { useState } from "react"
import { Search, Bell, ChevronDown, Menu } from "lucide-react"
import NotificationsPopover from "./NotificationsPopover"

const LeaderNavbar = ({ open, setOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [unreadCount, setUnreadCount] = useState(2)

  const handleMarkAllRead = () => {
    setUnreadCount(0)
  }

  return (
    <header className="w-full bg-white border-b border-gray-100 px-4 md:px-8 py-3.5 flex items-center justify-between gap-4 sticky top-0 z-30">
      {/* Mobile Drawer Hamburger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Search Bar Input */}
      <div className="flex-1 max-w-sm">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-[#5A5A5A] absolute left-3.5 pointer-events-none stroke-[1.75]" />
          <input
            type="text"
            placeholder="Search your school data"
            className="w-full h-10 pl-10 pr-4 bg-white border border-gray-200/90 rounded-[10px] text-xs sm:text-sm text-foreground placeholder:text-secondary focus:outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] transition-all"
          />
        </div>
      </div>

      {/* Right User Actions */}
      <div className="flex items-center gap-4 md:gap-6 relative">
        {/* User Profile Dropdown Button */}
        <div className="flex items-center gap-2.5 cursor-pointer p-1 rounded-xl hover:bg-gray-50 transition-colors">
          {/* User Avatar */}
          <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200 shrink-0 bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt="Alex Wilkerson"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none"
                e.currentTarget.parentElement.innerText = "AW"
                e.currentTarget.parentElement.className =
                  "w-9 h-9 rounded-full bg-[#038AF9] text-white flex items-center justify-center font-bold text-xs"
              }}
            />
          </div>

          {/* User Name */}
          <span className="text-base font-medium text-textPrimary hidden sm:inline-block">
            Alex Wilkerson
          </span>

          <ChevronDown className="w-4 h-4 text-secondary text-base stroke-[1.75]" />
        </div>

        {/* Notification Bell Button */}
        <button
          type="button"
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          title="Notifications"
        >
          <Bell className="w-7 h-7 text-[#038AF9] stroke-[1.75]" />
          {/* Badge Dot */}
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#038AF9] text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Standalone Notifications Popover Component */}
        {showNotifications && (
          <NotificationsPopover
            onClose={() => setShowNotifications(false)}
            unreadCount={unreadCount}
            onMarkAllRead={handleMarkAllRead}
          />
        )}
      </div>
    </header>
  )
}

export default LeaderNavbar