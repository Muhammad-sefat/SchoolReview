import React, { useState, useEffect } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  LogOut,
  Settings,
  HelpCircle,
} from "lucide-react"

import { DashboardLogo } from "@/components/icons/Logo/AllLogo"
import GetHelpModal from "@/components/leaderDashboard/setting/GetHelpModal"
import LogoutModal from "@/components/leaderDashboard/setting/LogoutModal"

// Custom SVG Icons provided by user
const SchoolAccessIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M7 22.0026V12.4007C7 11.3325 7 10.7984 7.24458 10.3504C7.48915 9.90243 7.93842 9.61361 8.83697 9.03598L10.9185 7.69786C11.4437 7.36023 11.7063 7.19141 12 7.19141C12.2937 7.19141 12.5563 7.36023 13.0815 7.69786L15.163 9.03598C16.0616 9.61361 16.5108 9.90243 16.7554 10.3504C17 10.7984 17 11.3325 17 12.4007V22.0026" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 13H12.009" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 22V16.1623C21 13.8707 19.7408 13.6852 17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 22V16.1623C3 13.8707 4.25916 13.6852 7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 7V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MyWorkIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14.5 2H9.5C8.67158 2 8 2.67157 8 3.5C8 4.32842 8.67158 5 9.5 5H14.5C15.3284 5 16 4.32842 16 3.5C16 2.67157 15.3284 2 14.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 3.5C17.5535 3.54681 18.48 3.72007 19.1213 4.36136C20 5.24004 20 6.65423 20 9.48263V15.9994C20 18.8279 20 20.2421 19.1213 21.1208C18.2426 21.9994 16.8284 21.9994 14 21.9994H10C7.17158 21.9994 5.75737 21.9994 4.87869 21.1208C4.00001 20.2421 4.00001 18.8279 4 15.9995L4.00002 9.48268C4.00001 6.65425 4.00001 5.24003 4.87869 4.36135C5.51997 3.72006 6.44652 3.54681 7.9999 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 11L8.5 12L10.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 17H16.5M13.5 11H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ExternalObserverSidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const isMyWorkActive =
    location.pathname.includes("/external-observer/my-work") ||
    location.pathname === "/external-observer" ||
    location.pathname === "/external-observer/"
  const [myWorkOpen, setMyWorkOpen] = useState(isMyWorkActive)

  const isSettingsActive = location.pathname.includes("/external-observer/setting")
  const [settingsOpen, setSettingsOpen] = useState(isSettingsActive)

  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)

  useEffect(() => {
    if (
      !location.pathname.includes("/external-observer/my-work") &&
      location.pathname !== "/external-observer" &&
      location.pathname !== "/external-observer/"
    ) {
      setMyWorkOpen(false)
    }
    if (!location.pathname.includes("/external-observer/setting")) {
      setSettingsOpen(false)
    }
  }, [location.pathname])

  const handleLogoutConfirm = () => {
    navigate("/auth/login")
  }

  return (
    <>
      {/* Mobile / Tablet Backdrop Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 xl:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Container - w-[106px] when collapsed matching LeaderSidebar */}
      <aside
        className={`fixed xl:static top-0 left-0 z-50 h-screen bg-white border-r border-gray-100 flex flex-col justify-between transition-all duration-300 ease-in-out shrink-0 ${
          collapsed ? "w-[106px]" : "w-72"
        } ${open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}
      >
        {/* Top Header & Logo Area */}
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

          {/* Navigation Links - px-3.5 py-4 space-y-3 font-urbanist */}
          <nav className={`px-3.5 py-4 space-y-3 font-urbanist ${collapsed ? "mt-3" : "mt-0"}`}>
            {/* 1. My Work Collapsible Dropdown */}
            <div className="space-y-1 relative group">
              <button
                type="button"
                onClick={() => setMyWorkOpen(!myWorkOpen)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl transition-all duration-200 group cursor-pointer ${
                  isMyWorkActive
                    ? "border border-[#EAEAEA] bg-[#FDFDFD] text-[#080808] font-semibold shadow-2xs"
                    : "text-[#5A5A5A] font-medium hover:bg-gray-50"
                } ${collapsed ? "justify-center px-0" : ""}`}
                title={collapsed ? "My Work" : undefined}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="relative shrink-0 flex items-center justify-center">
                    <MyWorkIcon
                      className={`w-[22px] h-[22px] transition-colors ${
                        isMyWorkActive ? "text-[#080808]" : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
                      }`}
                    />
                    {collapsed && (
                      <span className="absolute -top-1.5 -right-2 px-1 min-w-[16px] h-4 text-[10px] font-bold rounded-full bg-[#038AF9] text-white flex items-center justify-center ring-2 ring-white shadow-2xs">
                        1
                      </span>
                    )}
                  </div>
                  {!collapsed && (
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-base font-medium truncate">My Work</span>
                      <span className="w-5 h-5 rounded-full bg-[#038AF9] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                        1
                      </span>
                    </div>
                  )}
                </div>
                {!collapsed && (
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      myWorkOpen ? "rotate-180 text-[#080808]" : ""
                    }`}
                  />
                )}
              </button>

              {/* Uncollapsed Sub-links - space-y-6, text-[15px] matching LeaderSidebar */}
              {!collapsed && myWorkOpen && (
                <div className="pl-9 pr-2 space-y-6 py-1.5 animate-fadeIn">
                  <NavLink
                    to="/external-observer/my-work/active-task"
                    className={({ isActive }) =>
                      `flex items-center justify-between text-[15px] transition-colors ${
                        isActive || location.pathname === "/external-observer" || location.pathname === "/external-observer/"
                          ? "text-[#080808]"
                          : "text-[#5A5A5A] font-normal hover:text-[#080808]"
                      }`
                    }
                  >
                    <span>Active Tasks</span>
                    <span className="w-5 h-5 rounded-full bg-[#038AF9] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                  </NavLink>

                  <NavLink
                    to="/external-observer/my-work/my-activity"
                    className={({ isActive }) =>
                      `block text-[15px] transition-colors ${
                        isActive
                          ? "text-[#080808]"
                          : "text-[#5A5A5A] font-normal hover:text-[#080808]"
                      }`
                    }
                  >
                    My Activity
                  </NavLink>
                </div>
              )}

              {/* Collapsed Flyout Popover Menu */}
              {collapsed && (
                <div className="absolute left-full top-0 pl-2 hidden group-hover:flex flex-col z-50 animate-fadeIn">
                  <div className="bg-white border border-gray-200/90 rounded-2xl shadow-xl p-3 min-w-[200px] space-y-2 font-urbanist">
                    <div className="text-xs font-bold text-gray-400 px-2 pb-1 border-b border-gray-100 uppercase tracking-wider">
                      My Work
                    </div>
                    <NavLink
                      to="/external-observer/my-work/active-task"
                      className={({ isActive }) =>
                        `flex items-center justify-between px-2.5 py-1.5 rounded-lg text-sm transition-colors ${
                          isActive || location.pathname === "/external-observer" || location.pathname === "/external-observer/"
                            ? "bg-blue-50 text-[#038AF9]"
                            : "text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808]"
                        }`
                      }
                    >
                      <span>Active Tasks</span>
                      <span className="w-5 h-5 rounded-full bg-[#038AF9] text-white text-xs font-semibold flex items-center justify-center shrink-0">
                        1
                      </span>
                    </NavLink>
                    <NavLink
                      to="/external-observer/my-work/my-activity"
                      className={({ isActive }) =>
                        `block px-2.5 py-1.5 rounded-lg text-sm transition-colors ${
                          isActive
                            ? "bg-blue-50 text-[#038AF9]"
                            : "text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808]"
                        }`
                      }
                    >
                      My Activity
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            {/* 2. School Access */}
            <NavLink
              to="/external-observer/school-access"
              className={({ isActive }) =>
                `flex items-center gap-4 px-3.5 py-3 rounded-xl text-base transition-all duration-200 group ${
                  isActive
                    ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                    : "text-[#5A5A5A] font-medium hover:bg-gray-50"
                } ${collapsed ? "justify-center px-0" : ""}`
              }
              title={collapsed ? "School Access" : undefined}
            >
              <div className="shrink-0 flex items-center justify-center">
                <SchoolAccessIcon className="w-[22px] h-[22px] text-[#5A5A5A] group-hover:text-[#1F1F21] transition-colors" />
              </div>
              {!collapsed && <span className="flex-1 truncate">School Access</span>}
            </NavLink>
          </nav>
        </div>

        {/* Bottom Menu Items */}
        <div className="px-3.5 py-4 border-t border-gray-100 space-y-1 font-urbanist">
          {/* Settings Collapsible Dropdown matching LeaderSidebar 100% */}
          <div className="space-y-1 relative group">
            <button
              type="button"
              onClick={() => setSettingsOpen(!settingsOpen)}
              className={`w-full flex items-center justify-between transition-all duration-200 group cursor-pointer ${
                settingsOpen && isSettingsActive
                  ? "px-3.5 py-3 rounded-xl border border-[#EAEAEA] bg-[#FDFDFD] text-[#080808] font-semibold shadow-2xs"
                  : "px-3.5 py-3 rounded-xl text-[#5A5A5A] font-medium hover:bg-gray-50"
              } ${collapsed ? "justify-center px-0" : ""}`}
              title={collapsed ? "Settings" : undefined}
            >
              <div className="flex items-center gap-4">
                <Settings
                  className={`w-[22px] h-[22px] shrink-0 transition-colors ${
                    settingsOpen && isSettingsActive
                      ? "text-[#080808] stroke-[2]"
                      : "text-[#5A5A5A] stroke-[1.75] group-hover:text-[#1F1F21]"
                  }`}
                />
                {!collapsed && (
                  <span
                    className={`text-base transition-colors ${
                      settingsOpen && isSettingsActive
                        ? "text-[#080808] font-semibold"
                        : "text-[#5A5A5A] font-medium group-hover:text-[#080808]"
                    }`}
                  >
                    Settings
                  </span>
                )}
              </div>
              {!collapsed && (
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    settingsOpen ? "rotate-180 text-[#080808]" : ""
                  }`}
                />
              )}
            </button>

            {/* Settings Sub-links: space-y-6, text-[15px] matching LeaderSidebar 100% */}
            {!collapsed && settingsOpen && (
              <div className="pl-9 pr-2 space-y-6 py-1.5 animate-fadeIn">
                <NavLink
                  to="/external-observer/setting/general"
                  className={({ isActive }) =>
                    `block text-[15px] transition-colors ${
                      isActive
                        ? "text-[#080808]"
                        : "text-[#5A5A5A] font-normal hover:text-[#080808]"
                    }`
                  }
                >
                  General
                </NavLink>

                <NavLink
                  to="/external-observer/setting/followed-schools"
                  className={({ isActive }) =>
                    `block text-[15px] transition-colors ${
                      isActive
                        ? "text-[#080808]"
                        : "text-[#5A5A5A] font-normal hover:text-[#080808]"
                    }`
                  }
                >
                  Followed school
                </NavLink>
              </div>
            )}

            {/* Collapsed Settings Flyout Popover */}
            {collapsed && (
              <div className="absolute left-full bottom-0 pl-2 hidden group-hover:flex flex-col z-50 animate-fadeIn">
                <div className="bg-white border border-gray-200/90 rounded-2xl shadow-xl p-3 min-w-[180px] space-y-2 font-urbanist">
                  <div className="text-xs font-bold text-gray-400 px-2 pb-1 border-b border-gray-100 uppercase tracking-wider">
                    Settings
                  </div>
                  <NavLink
                    to="/external-observer/setting/general"
                    className={({ isActive }) =>
                      `block px-2.5 py-1.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-blue-50 text-[#038AF9]"
                          : "text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808]"
                      }`
                    }
                  >
                    General
                  </NavLink>
                  <NavLink
                    to="/external-observer/setting/followed-schools"
                    className={({ isActive }) =>
                      `block px-2.5 py-1.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-blue-50 text-[#038AF9]"
                          : "text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808]"
                      }`
                    }
                  >
                    Followed school
                  </NavLink>
                </div>
              </div>
            )}
          </div>

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

          {/* Log Out Button matching LeaderSidebar */}
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

export default ExternalObserverSidebar
