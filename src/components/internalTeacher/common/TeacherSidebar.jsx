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

import { DashboardLogo } from "../../../components/icons/Logo/AllLogo"
import GetHelpModal from "@/components/leaderDashboard/setting/GetHelpModal"
import LogoutModal from "@/components/leaderDashboard/setting/LogoutModal"

// Custom SVG Icons provided by user
const TeachingInsightsIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 15C10.7083 21 4.29167 15 2 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5039 15H17.0052C19.3622 15 20.5407 15 21.273 14.2678C22.0052 13.5355 22.0052 12.357 22.0052 10V8C22.0052 5.64298 22.0052 4.46447 21.273 3.73223C20.5407 3 19.3622 3 17.0052 3H13.0052C10.6482 3 9.46966 3 8.73743 3.73223C8.11702 4.35264 8.02228 5.29344 8.00781 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 15C8.88071 15 10 13.8807 10 12.5C10 11.1193 8.88071 10 7.5 10C6.11929 10 5 11.1193 5 12.5C5 13.8807 6.11929 15 7.5 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7H18M18 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const StudentFeedbackIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <g clipPath="url(#clip0_13198_72478_sidebar)">
      <mask id="mask0_13198_72478_sidebar" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" fill="white" stroke="white" />
      </mask>
      <g mask="url(#mask0_13198_72478_sidebar)">
        <path d="M6.91895 5.90527H13.1611C14.844 5.90528 16.0523 6.35111 16.8418 7.14062C17.6313 7.93014 18.0771 9.13843 18.0771 10.8213V14.7227C18.0771 14.9964 18.0671 15.2422 18.0332 15.4707L18.0312 15.4854L18.0293 15.501C17.9464 16.482 17.6554 17.5081 16.9512 18.2852C16.2597 19.048 15.1085 19.6387 13.1611 19.6387H12.5303L12.3838 19.8291L11.1738 21.4092L11.1689 21.417C10.8719 21.8207 10.4562 22.0283 10.04 22.0283C9.62387 22.0283 9.20822 21.8207 8.91113 21.417L8.9082 21.4131L7.73828 19.8525L7.21094 19.1504H7.30957C7.56056 19.1506 7.86407 19.2833 8.05762 19.4727L8.13379 19.5576L9.29785 21.1191C9.45746 21.3356 9.70751 21.5352 10.04 21.5352C10.3718 21.5352 10.6206 21.336 10.7803 21.1201L10.7812 21.1211L11.9521 19.5605L11.9531 19.5586C12.143 19.3034 12.4455 19.1505 12.7705 19.1504H13.1611C14.459 19.1504 15.5193 18.8785 16.2842 18.2373C17.0577 17.5886 17.4493 16.6303 17.5488 15.4365L17.5469 15.4355C17.5772 15.1849 17.5889 14.9559 17.5889 14.7227V10.8213C17.5889 9.399 17.2712 8.26143 16.4961 7.48633C15.721 6.71123 14.5834 6.39356 13.1611 6.39355H6.91895C6.79966 6.39356 6.68247 6.39613 6.56738 6.40137L6.22949 6.4248C5.02021 6.52971 4.0563 6.9221 3.40527 7.69629C2.76057 8.46302 2.49121 9.52411 2.49121 10.8213V14.7227C2.49121 16.4067 2.74152 17.5884 3.53027 18.3076C4.29617 19.0059 5.44565 19.1457 6.86035 19.1494V19.6367C5.24117 19.6313 4.06458 19.3997 3.28125 18.7383C2.50771 18.0849 2.00293 16.9103 2.00293 14.7227V10.8213C2.00293 8.87403 2.59323 7.72295 3.35938 7.03027C4.1401 6.32451 5.17436 6.03013 6.17188 5.94238H6.18066L6.18945 5.94043C6.39428 5.91483 6.64434 5.90527 6.91895 5.90527Z" fill="currentColor" stroke="currentColor" strokeWidth="0.975332" />
        <path d="M10.0378 14.1362C9.49165 14.1362 9.0625 13.6973 9.0625 13.1609C9.0625 12.6244 9.5014 12.1855 10.0378 12.1855C10.5742 12.1855 11.0131 12.6244 11.0131 13.1609C11.0131 13.6973 10.584 14.1362 10.0378 14.1362Z" fill="currentColor" />
        <path d="M13.1628 14.1362C12.6166 14.1362 12.1875 13.6973 12.1875 13.1609C12.1875 12.6244 12.6264 12.1855 13.1628 12.1855C13.6993 12.1855 14.1382 12.6244 14.1382 13.1609C14.1382 13.6973 13.6993 14.1362 13.1628 14.1362Z" fill="currentColor" />
        <path d="M6.92846 14.1362C6.38227 14.1362 5.95312 13.6973 5.95312 13.1609C5.95312 12.6244 6.39202 12.1855 6.92846 12.1855C7.46489 12.1855 7.90379 12.6244 7.90379 13.1609C7.90379 13.6973 7.46489 14.1362 6.92846 14.1362Z" fill="currentColor" />
        <path d="M17.7918 16.1846C17.5967 16.1846 17.4017 16.1066 17.2651 15.9603C17.1091 15.8042 17.0408 15.5799 17.0701 15.3653C17.0993 15.1605 17.1091 14.9459 17.1091 14.7216V10.8203C17.1091 8.09912 15.8899 6.87995 13.1687 6.87995H6.92663C6.7023 6.87995 6.48776 6.8897 6.28294 6.90921C6.06836 6.93847 5.84402 6.86043 5.68796 6.71413C5.53191 6.55808 5.44412 6.34353 5.46363 6.12895C5.63919 4.02224 6.72181 1.51562 10.8279 1.51562H17.0701C20.6008 1.51562 22.4734 3.38827 22.4734 6.91897V10.8203C22.4734 14.9264 19.9668 15.9993 17.8601 16.1846C17.8308 16.1846 17.8113 16.1846 17.7918 16.1846ZM7.04369 5.41695H13.159C16.6897 5.41695 18.5623 7.2896 18.5623 10.8203V14.5948C20.2204 14.1852 21.0006 12.966 21.0006 10.8203V6.91897C21.0006 4.1978 19.7815 2.97862 17.0603 2.97862H10.8182C8.67249 2.97862 7.46309 3.75889 7.04369 5.41695Z" fill="currentColor" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_13198_72478_sidebar">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const MyWorkIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14.5 2H9.5C8.67158 2 8 2.67157 8 3.5C8 4.32842 8.67158 5 9.5 5H14.5C15.3284 5 16 4.32842 16 3.5C16 2.67157 15.3284 2 14.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 3.5C17.5535 3.54681 18.48 3.72007 19.1213 4.36136C20 5.24004 20 6.65423 20 9.48263V15.9994C20 18.8279 20 20.2421 19.1213 21.1208C18.2426 21.9994 16.8284 21.9994 14 21.9994H10C7.17158 21.9994 5.75737 21.9994 4.87869 21.1208C4.00001 20.2421 4.00001 18.8279 4 15.9995L4.00002 9.48268C4.00001 6.65425 4.00001 5.24003 4.87869 4.36135C5.51997 3.72006 6.44652 3.54681 7.9999 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 11L8.5 12L10.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5 17H16.5M13.5 11H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.625 17H8.5M8.75 17C8.75 17.138 8.63807 17.25 8.5 17.25C8.36193 17.25 8.25 17.138 8.25 17C8.25 16.8619 8.36193 16.75 8.5 16.75C8.63807 16.75 8.75 16.8619 8.75 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const TeacherSidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const isMyWorkActive = location.pathname.includes("/internal-teacher/my-work")
  const [myWorkOpen, setMyWorkOpen] = useState(isMyWorkActive)

  const isSettingsActive = location.pathname.includes("/internal-teacher/setting")
  const [settingsOpen, setSettingsOpen] = useState(isSettingsActive)

  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)

  useEffect(() => {
    if (!location.pathname.includes("/internal-teacher/my-work")) {
      setMyWorkOpen(false)
    }
    if (!location.pathname.includes("/internal-teacher/setting")) {
      setSettingsOpen(false)
    }
  }, [location.pathname])

  const isPathActive = (itemPath) => {
    if (itemPath === "/internal-teacher") {
      return (
        location.pathname === "/internal-teacher" ||
        location.pathname === "/internal-teacher/" ||
        location.pathname === "/internal-teacher/teaching-insights"
      )
    }
    return location.pathname.startsWith(itemPath)
  }

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

      {/* Sidebar Container */}
      <aside
        className={`fixed xl:static top-0 left-0 z-50 h-screen bg-white border-r border-gray-100 flex flex-col justify-between transition-all duration-300 ease-in-out shrink-0 ${
          collapsed ? "w-[106px]" : "w-72"
        } ${open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}
      >
        {/* Top Header & Logo Area */}
        <div>
          <div
            className={`flex flex-row items-center justify-between border-b border-gray-50 transition-all duration-300 ${
              collapsed ? "px-3.5 py-4" : "px-5 py-5"
            }`}
          >
            {/* Logo Badge */}
            <div className="flex items-center gap-3">
              <div
                className={`rounded-xl bg-[#038AF9] flex items-center justify-center shadow-xs shrink-0 transition-all ${
                  collapsed ? "p-2.5" : "p-3"
                }`}
              >
                <DashboardLogo />
              </div>
            </div>

            {/* Sidebar Toggle Expand/Collapse Button */}
            <button
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="w-8 h-8 rounded-full border mx-3 border-gray-200/80 bg-white hover:bg-gray-50 text-[#038AF9] hover:text-[#0270ce] shadow-2xs hover:shadow-xs transition-all hidden lg:flex items-center justify-center cursor-pointer shrink-0 active:scale-95"
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <ChevronRight className="w-5 h-5 stroke-[2.25] text-[#038AF9]" />
              ) : (
                <ChevronLeft className="w-5 h-5 stroke-[2.25] text-[#038AF9]" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={`px-3.5 py-4 space-y-3 font-urbanist ${collapsed ? "mt-3" : "mt-0"}`}>
            {/* 1. Teaching Insights */}
            <NavLink
              to="/internal-teacher/teaching-insights"
              className={`flex items-center gap-4 px-3.5 py-3 rounded-xl text-base transition-all duration-200 group ${
                isPathActive("/internal-teacher/teaching-insights")
                  ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                  : "text-[#5A5A5A] font-medium hover:bg-gray-50"
              } ${collapsed ? "justify-center px-0" : ""}`}
              title={collapsed ? "Teaching Insights" : undefined}
            >
              <div className="shrink-0 flex items-center justify-center">
                <TeachingInsightsIcon
                  className={`w-[22px] h-[22px] transition-colors ${
                    isPathActive("/internal-teacher/teaching-insights")
                      ? "text-[#080808]"
                      : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
                  }`}
                />
              </div>
              {!collapsed && <span className="flex-1 truncate">Teaching Insights</span>}
            </NavLink>

            {/* 2. Student Feedback */}
            <NavLink
              to="/internal-teacher/student-feedback"
              className={`flex items-center gap-4 px-3.5 py-3 rounded-xl text-base transition-all duration-200 group ${
                location.pathname.includes("/internal-teacher/student-feedback")
                  ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                  : "text-[#5A5A5A] font-medium hover:bg-gray-50"
              } ${collapsed ? "justify-center px-0" : ""}`}
              title={collapsed ? "Student Feedback" : undefined}
            >
              <div className="shrink-0 flex items-center justify-center relative">
                <StudentFeedbackIcon
                  className={`w-[22px] h-[22px] transition-colors ${
                    location.pathname.includes("/internal-teacher/student-feedback")
                      ? "text-[#080808]"
                      : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
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
                  <span className="truncate">Student Feedback</span>
                  <span className="w-5 h-5 rounded-full bg-[#038AF9] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                </div>
              )}
            </NavLink>

            {/* 3. My Work Collapsible Dropdown */}
            <div className="space-y-1 relative group">
              <button
                type="button"
                onClick={() => setMyWorkOpen(!myWorkOpen)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl transition-all duration-200 group cursor-pointer ${
                  myWorkOpen && isMyWorkActive
                    ? "border border-[#EAEAEA] bg-[#FDFDFD] text-[#080808] font-semibold shadow-2xs"
                    : "text-[#5A5A5A] font-medium hover:bg-gray-50"
                } ${collapsed ? "justify-center px-0" : ""}`}
                title={collapsed ? "My Work" : undefined}
              >
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0 flex items-center justify-center">
                    <MyWorkIcon
                      className={`w-[22px] h-[22px] transition-colors ${
                        myWorkOpen && isMyWorkActive
                          ? "text-[#080808]"
                          : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
                      }`}
                    />
                    {collapsed && (
                      <span className="absolute -top-1.5 -right-2 px-1 min-w-[16px] h-4 text-[10px] font-bold rounded-full bg-[#038AF9] text-white flex items-center justify-center ring-2 ring-white shadow-2xs">
                        1
                      </span>
                    )}
                  </div>
                  {!collapsed && (
                    <div className="flex items-center gap-2.5">
                      <span className="text-base font-medium">My Work</span>
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

              {/* Uncollapsed My Work Sub-links */}
              {!collapsed && myWorkOpen && (
                <div className="pl-9 pr-2 space-y-6 py-1.5 animate-fadeIn">
                  <NavLink
                    to="/internal-teacher/my-work/activity-task"
                    className={({ isActive }) =>
                      `block text-[15px] transition-colors ${
                        isActive
                          ? "text-[#080808]"
                          : "text-[#5A5A5A] font-normal hover:text-[#080808]"
                      }`
                    }
                  >
                    Activity task
                  </NavLink>

                  <NavLink
                    to="/internal-teacher/my-work/my-activity"
                    className={({ isActive }) =>
                      `block text-[15px] transition-colors ${
                        isActive
                          ? "text-[#080808]"
                          : "text-[#5A5A5A] font-normal hover:text-[#080808]"
                      }`
                    }
                  >
                    My activity
                  </NavLink>
                </div>
              )}

              {/* Collapsed My Work Flyout Popover Menu */}
              {collapsed && (
                <div className="absolute left-full top-0 pl-2 hidden group-hover:flex flex-col z-50 animate-fadeIn">
                  <div className="bg-white border border-gray-200/90 rounded-2xl shadow-xl p-3 min-w-[200px] space-y-2 font-urbanist">
                    <div className="text-xs font-bold text-gray-400 px-2 pb-1 border-b border-gray-100 uppercase tracking-wider">
                      My Work
                    </div>
                    <NavLink
                      to="/internal-teacher/my-work/activity-task"
                      className={({ isActive }) =>
                        `flex items-center justify-between px-2.5 py-1.5 rounded-lg text-sm transition-colors ${
                          isActive
                            ? "bg-blue-50 text-[#038AF9]"
                            : "text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808]"
                        }`
                      }
                    >
                      <span>Activity task</span>
                      <span className="w-5 h-5 rounded-full bg-[#038AF9] text-white text-xs font-semibold flex items-center justify-center shrink-0">
                        1
                      </span>
                    </NavLink>
                    <NavLink
                      to="/internal-teacher/my-work/my-activity"
                      className={({ isActive }) =>
                        `block px-2.5 py-1.5 rounded-lg text-sm transition-colors ${
                          isActive
                            ? "bg-blue-50 text-[#038AF9]"
                            : "text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808]"
                        }`
                      }
                    >
                      My activity
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Bottom Menu Items */}
        <div className="px-3.5 py-4 border-t border-gray-100 space-y-1 font-urbanist">
          {/* Settings Collapsible Dropdown matching LeaderSidebar */}
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
                  to="/internal-teacher/setting/general"
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
                  to="/internal-teacher/setting/followed-schools"
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
                    to="/internal-teacher/setting/general"
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
                    to="/internal-teacher/setting/followed-schools"
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

export default TeacherSidebar
