import React, { useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import {
  ChevronLeft,
  ChevronRight,
  Settings,
  HelpCircle,
  LogOut,
  User,
} from "lucide-react"
import { DashboardLogo } from "@/components/icons/Logo/AllLogo"
import GetHelpModal from "@/components/leaderDashboard/setting/GetHelpModal"
import LogoutModal from "@/components/leaderDashboard/setting/LogoutModal"

// User Provided My Feedback SVG Icon
const MyFeedbackIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 6.75C21 4.67893 19.3211 3 17.25 3C15.1789 3 13.5 4.67893 13.5 6.75C13.5 8.82107 15.1789 10.5 17.25 10.5C19.3211 10.5 21 8.82107 21 6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10.5 6.75C10.5 4.67893 8.82107 3 6.75 3C4.67893 3 3 4.67893 3 6.75C3 8.82107 4.67893 10.5 6.75 10.5C8.82107 10.5 10.5 8.82107 10.5 6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M21 17.25C21 15.1789 19.3211 13.5 17.25 13.5C15.1789 13.5 13.5 15.1789 13.5 17.25C13.5 19.3211 15.1789 21 17.25 21C19.3211 21 21 19.3211 21 17.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10.5 17.25C10.5 15.1789 8.82107 13.5 6.75 13.5C4.67893 13.5 3 15.1789 3 17.25C3 19.3211 4.67893 21 6.75 21C8.82107 21 10.5 19.3211 10.5 17.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

// User Provided Followed Schools SVG Icon
const FollowedSchoolsIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 20.5C12 20.5 2 14.5 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 14.5 12 20.5 12 20.5Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const ReviewSidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isHelpOpen, setIsHelpOpen] = useState(false)
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
          className="fixed inset-0 z-40 bg-black/40 xl:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Container - w-[106px] when collapsed matching LeaderSidebar */}
      <aside
        className={`fixed xl:static inset-y-0 left-0 z-50 bg-white border-r border-gray-100 flex flex-col justify-between transition-all duration-300 ease-in-out shrink-0 ${
          collapsed ? "w-[106px]" : "w-72"
        } ${open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}
      >
        {/* Top Header Logo & Collapse Toggle */}
        <div>
          <div
            className={`flex flex-row items-center border-b border-gray-50 transition-all duration-300 ${
              collapsed ? "justify-center px-3.5 py-4" : "justify-between px-5 py-5"
            }`}
          >
            {/* Logo Badge Container */}
            {collapsed ? (
              <div
                onClick={() => setCollapsed(false)}
                className="relative group cursor-pointer"
                title="Expand sidebar"
              >
                <div className="w-11 h-11 rounded-xl bg-[#038AF9] flex items-center justify-center shadow-xs shrink-0 transition-all duration-300 group-hover:bg-[#0270ce] group-hover:scale-105 active:scale-95 relative overflow-hidden">
                  {/* Brand Logo - Smoothly fades out and scales down on hover */}
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
                    <DashboardLogo />
                  </div>
                  {/* Expand ChevronRight Icon - Smoothly fades in and scales up on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <ChevronRight className="w-5 h-5 stroke-[2.5] text-white" />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#038AF9] p-3 flex items-center justify-center shadow-xs shrink-0">
                    <DashboardLogo />
                  </div>
                </div>

                {/* Sidebar Collapse Button when Expanded */}
                <button
                  type="button"
                  onClick={() => setCollapsed(true)}
                  className="w-8 h-8 rounded-full border mx-3 border-gray-200/80 bg-white hover:bg-gray-50 text-[#038AF9] hover:text-[#0270ce] shadow-2xs hover:shadow-xs transition-all hidden lg:flex items-center justify-center cursor-pointer shrink-0 active:scale-95"
                  title="Collapse sidebar"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.25] text-[#038AF9]" />
                </button>
              </>
            )}
          </div>

          {/* Navigation Items - px-3.5 py-4 space-y-3 font-urbanist */}
          <nav className={`px-3.5 py-4 space-y-3 font-urbanist ${collapsed ? "mt-3" : "mt-0"}`}>
            {/* 1. My Feedback */}
            {(() => {
              const isActive =
                location.pathname === "/review-dashboard" ||
                location.pathname === "/review-dashboard/" ||
                location.pathname === "/review-dashboard/my-feedback"
              return (
                <NavLink
                  to="/review-dashboard/my-feedback"
                  className={`flex items-center gap-4 px-3.5 py-3 rounded-xl text-base transition-all duration-200 group ${
                    isActive
                      ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                      : "text-[#5A5A5A] font-medium hover:bg-gray-50"
                  } ${collapsed ? "justify-center px-0" : ""}`}
                  title={collapsed ? "My Feedback" : undefined}
                >
                  <div className="relative shrink-0 flex items-center justify-center">
                    <MyFeedbackIcon
                      className={`w-[22px] h-[22px] transition-colors ${
                        isActive ? "text-[#080808]" : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
                      }`}
                    />
                    {collapsed && (
                      <span className="absolute -top-1.5 -right-2 px-1 min-w-[16px] h-4 text-[10px] font-bold rounded-full bg-[#038AF9] text-white flex items-center justify-center ring-2 ring-white shadow-2xs">
                        1
                      </span>
                    )}
                  </div>
                  {!collapsed && (
                    <div className="flex items-center gap-2.5 min-w-0 flex-1 justify-between">
                      <span className="truncate">My Feedback</span>
                      <span className="w-5 h-5 rounded-full bg-[#038AF9] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
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
                  className={`flex items-center gap-4 px-3.5 py-3 rounded-xl text-base transition-all duration-200 group ${
                    isActive
                      ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                      : "text-[#5A5A5A] font-medium hover:bg-gray-50"
                  } ${collapsed ? "justify-center px-0" : ""}`}
                  title={collapsed ? "My Profile" : undefined}
                >
                  <User
                    className={`w-[22px] h-[22px] shrink-0 transition-colors ${
                      isActive ? "text-[#080808]" : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
                    }`}
                  />
                  {!collapsed && <span className="flex-1 truncate">My Profile</span>}
                </NavLink>
              )
            })()}

            {/* 3. Followed Schools */}
            {(() => {
              const isActive = location.pathname === "/review-dashboard/followed-schools"
              return (
                <NavLink
                  to="/review-dashboard/followed-schools"
                  className={`flex items-center gap-4 px-3.5 py-3 rounded-xl text-base transition-all duration-200 group ${
                    isActive
                      ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                      : "text-[#5A5A5A] font-medium hover:bg-gray-50"
                  } ${collapsed ? "justify-center px-0" : ""}`}
                  title={collapsed ? "Followed Schools" : undefined}
                >
                  <FollowedSchoolsIcon
                    className={`w-[22px] h-[22px] shrink-0 transition-colors ${
                      isActive ? "text-[#080808]" : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
                    }`}
                  />
                  {!collapsed && <span className="flex-1 truncate">Followed Schools</span>}
                </NavLink>
              )
            })()}
          </nav>
        </div>

        {/* Bottom Navigation Menu */}
        <div className="px-3.5 py-4 border-t border-gray-100 space-y-1 font-urbanist">
          {/* Settings Direct NavLink */}
          {(() => {
            const isActive = location.pathname.includes("/review-dashboard/setting")
            return (
              <NavLink
                to="/review-dashboard/setting"
                className={`flex items-center gap-4 px-3.5 py-3 rounded-xl text-base transition-all duration-200 group ${
                  isActive
                    ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                    : "text-[#5A5A5A] font-medium hover:bg-gray-50"
                } ${collapsed ? "justify-center px-0" : ""}`}
                title={collapsed ? "Settings" : undefined}
              >
                <Settings
                  className={`w-[22px] h-[22px] shrink-0 transition-colors ${
                    isActive ? "text-[#080808] stroke-[2]" : "text-[#5A5A5A] stroke-[1.75] group-hover:text-[#1F1F21]"
                  }`}
                />
                {!collapsed && <span>Settings</span>}
              </NavLink>
            )
          })()}

          {/* Get Help Button matching LeaderSidebar */}
          <button
            type="button"
            onClick={() => setIsHelpOpen(true)}
            className={`w-full flex items-center gap-4 px-3.5 py-3 rounded-xl text-base font-medium text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808] transition-all duration-200 group cursor-pointer ${
              collapsed ? "justify-center px-0" : ""
            }`}
            title={collapsed ? "Get help" : undefined}
          >
            <HelpCircle className="w-[22px] h-[22px] text-[#5A5A5A] group-hover:text-[#1F1F21] shrink-0 stroke-[1.75] transition-colors" />
            {!collapsed && <span>Get help</span>}
          </button>

          {/* Log Out Button */}
          <button
            type="button"
            onClick={() => setIsLogoutOpen(true)}
            className={`w-full flex items-center gap-4 px-3.5 py-3 rounded-xl text-base font-medium text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808] transition-all duration-200 group cursor-pointer ${
              collapsed ? "justify-center px-0" : ""
            }`}
            title={collapsed ? "Log out" : undefined}
          >
            <LogOut className="w-[22px] h-[22px] text-[#5A5A5A] group-hover:text-[#1F1F21] shrink-0 stroke-[1.75] transition-colors" />
            {!collapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>

      {/* Get Help Modal */}
      {isHelpOpen && (
        <GetHelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
      )}

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
