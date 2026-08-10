import React, { useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight, Settings, LogOut, User } from "lucide-react"
import { DashboardLogo } from "@/components/icons/Logo/AllLogo"
import LogoutModal from "@/components/leaderDashboard/setting/LogoutModal"

// User Provided My Feedback SVG Icon
const MyFeedbackIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 6.75C21 4.67893 19.3211 3 17.25 3C15.1789 3 13.5 4.67893 13.5 6.75C13.5 8.82107 15.1789 10.5 17.25 10.5C19.3211 10.5 21 8.82107 21 6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M10.5 6.75C10.5 4.67893 8.82107 3 6.75 3C4.67893 3 3 4.67893 3 6.75C3 8.82107 4.67893 10.5 6.75 10.5C8.82107 10.5 10.5 8.82107 10.5 6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M21 17.25C21 15.1789 19.3211 13.5 17.25 13.5C15.1789 13.5 13.5 15.1789 13.5 17.25C13.5 19.3211 15.1789 21 17.25 21C19.3211 21 21 19.3211 21 17.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M10.5 17.25C10.5 15.1789 8.82107 13.5 6.75 13.5C4.67893 13.5 3 15.1789 3 17.25C3 19.3211 4.67893 21 6.75 21C8.82107 21 10.5 19.3211 10.5 17.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

// User Provided Followed Schools SVG Icon
const FollowedSchoolsIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 20.5C12 20.5 2 14.5 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 14.5 12 20.5 12 20.5Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const ReviewSidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)

  const handleLogoutConfirm = () => {
    setIsLogoutOpen(false)
    navigate("/auth/login")
  }

  return (
    <>
      {/* Mobile Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 xl:hidden transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed xl:static inset-y-0 left-0 z-50 bg-white border-r border-gray-100 flex flex-col justify-between transition-all duration-300 ${
          collapsed ? "w-[84px]" : "w-72"
        } ${open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}
      >
        {/* Top Header Logo & Collapse Toggle */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
          {!collapsed && <DashboardLogo />}
          
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="w-9 h-9 rounded-xl border border-gray-200/80 bg-white hover:bg-gray-50 text-[#038AF9] shadow-2xs flex items-center justify-center transition-all cursor-pointer mx-auto xl:mx-0"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2 font-urbanist">
          {/* 1. My Feedback */}
          {(() => {
            const isActive = location.pathname === "/review-dashboard" || location.pathname === "/review-dashboard/" || location.pathname === "/review-dashboard/my-feedback"
            return (
              <NavLink
                to="/review-dashboard/my-feedback"
                className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-[10px] text-base transition-all group ${
                  isActive
                    ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                    : "text-[#5A5A5A] font-medium hover:bg-gray-50 hover:text-[#080808]"
                } ${collapsed ? "justify-center px-0" : ""}`}
                title={collapsed ? "My Feedback" : undefined}
              >
                <div className="relative shrink-0 flex items-center justify-center">
                  <MyFeedbackIcon className={`w-5 h-5 transition-colors ${isActive ? "text-[#038AF9]" : "text-[#5A5A5A] group-hover:text-[#1F1F21]"}`} />
                  {collapsed && (
                    <span className="absolute -top-1.5 -right-2 px-1 min-w-[16px] h-4 text-[10px] font-bold rounded-full bg-[#038AF9] text-white flex items-center justify-center ring-2 ring-white shadow-2xs">
                      1
                    </span>
                  )}
                </div>
                {!collapsed && (
                  <div className="flex items-center justify-between flex-1 truncate">
                    <span className="truncate">My Feedback</span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#038AF9] text-white shrink-0">
                      1
                    </span>
                  </div>
                )}
              </NavLink>
            )
          })()}

          {/* 2. My Profile */}
          {(() => {
            const isActive = location.pathname === "/review-dashboard/my-profile"
            return (
              <NavLink
                to="/review-dashboard/my-profile"
                className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-[10px] text-base transition-all group ${
                  isActive
                    ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                    : "text-[#5A5A5A] font-medium hover:bg-gray-50 hover:text-[#080808]"
                } ${collapsed ? "justify-center px-0" : ""}`}
                title={collapsed ? "My Profile" : undefined}
              >
                <User className={`w-5 h-5 shrink-0 transition-colors ${isActive ? "text-[#038AF9]" : "text-[#5A5A5A] group-hover:text-[#1F1F21]"}`} />
                {!collapsed && <span>My Profile</span>}
              </NavLink>
            )
          })()}

          {/* 3. Followed Schools */}
          {(() => {
            const isActive = location.pathname === "/review-dashboard/followed-schools"
            return (
              <NavLink
                to="/review-dashboard/followed-schools"
                className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-[10px] text-base transition-all group ${
                  isActive
                    ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                    : "text-[#5A5A5A] font-medium hover:bg-gray-50 hover:text-[#080808]"
                } ${collapsed ? "justify-center px-0" : ""}`}
                title={collapsed ? "Followed Schools" : undefined}
              >
                <FollowedSchoolsIcon className={`w-5 h-5 shrink-0 transition-colors ${isActive ? "text-[#038AF9]" : "text-[#5A5A5A] group-hover:text-[#1F1F21]"}`} />
                {!collapsed && <span>Followed Schools</span>}
              </NavLink>
            )
          })()}
        </div>

        {/* Bottom Navigation Menu */}
        <div className="px-3 py-4 border-t border-gray-100 space-y-1 font-urbanist">
          {/* Settings Direct NavLink */}
          {(() => {
            const isActive = location.pathname.includes("/review-dashboard/setting")
            return (
              <NavLink
                to="/review-dashboard/setting"
                className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-[10px] text-base transition-all group ${
                  isActive
                    ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                    : "text-[#5A5A5A] font-medium hover:bg-gray-50 hover:text-[#080808]"
                } ${collapsed ? "justify-center px-0" : ""}`}
                title={collapsed ? "Settings" : undefined}
              >
                <Settings className={`w-5 h-5 shrink-0 transition-colors ${isActive ? "text-[#038AF9]" : "text-[#5A5A5A] group-hover:text-[#1F1F21]"}`} />
                {!collapsed && <span>Settings</span>}
              </NavLink>
            )
          })()}

          {/* Log Out Button */}
          <button
            type="button"
            onClick={() => setIsLogoutOpen(true)}
            className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-[10px] text-base font-medium text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808] transition-all cursor-pointer group ${
              collapsed ? "justify-center px-0" : ""
            }`}
            title={collapsed ? "Log out" : undefined}
          >
            <LogOut className="w-5 h-5 shrink-0 text-[#5A5A5A] group-hover:text-[#1F1F21] stroke-[1.75]" />
            {!collapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>

      {/* Logout Confirmation Modal */}
      {isLogoutOpen && (
        <LogoutModal
          isOpen={isLogoutOpen}
          onClose={() => setIsLogoutOpen(false)}
          onConfirm={handleLogoutConfirm}
        />
      )}
    </>
  )
}

export default ReviewSidebar
