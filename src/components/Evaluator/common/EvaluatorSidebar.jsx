import React, { useState, useEffect } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { ChevronDown, Settings, HelpCircle, LogOut } from "lucide-react"
import { DashboardLogo } from "@/components/icons/Logo/AllLogo"
import { TbLayoutSidebarRightExpand, TbLayoutSidebarLeftExpand } from "react-icons/tb"
import GetHelpModal from "@/components/leaderDashboard/setting/GetHelpModal"
import LogoutModal from "@/components/leaderDashboard/setting/LogoutModal"

// Custom SVG Icons requested by user
const EvaluatorOverviewIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 6.75C21 4.67893 19.3211 3 17.25 3C15.1789 3 13.5 4.67893 13.5 6.75C13.5 8.82107 15.1789 10.5 17.25 10.5C19.3211 10.5 21 8.82107 21 6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10.5 6.75C10.5 4.67893 8.82107 3 6.75 3C4.67893 3 3 4.67893 3 6.75C3 8.82107 4.67893 10.5 10.5 6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M21 17.25C21 15.1789 19.3211 13.5 17.25 13.5C15.1789 13.5 13.5 15.1789 13.5 17.25C13.5 19.3211 15.1789 21 17.25 21C19.3211 21 21 19.3211 21 17.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10.5 17.25C10.5 15.1789 8.82107 13.5 6.75 13.5C4.67893 13.5 3 15.1789 3 17.25C3 19.3211 4.67893 21 6.75 21C8.82107 21 10.5 19.3211 10.5 17.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

const EvaluatorMySchoolsIcon = ({ className = "w-5 h-5" }) => (
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

const EvaluatorReportsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16 3.38462V2M19.6306 4.36369L20.6081 3.38462M20.6176 8H22" stroke="#1F1F21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2" stroke="#1F1F21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.8497 8.00781H15.0718C15.4507 8.00781 15.7578 8.32272 15.7578 8.71119V12.0364M2.75781 13.9593C5.03105 14.2251 10.7353 13.5147 14.8894 8.8906" stroke="#1F1F21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

const EvaluatorSidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const isSettingsActive = location.pathname.includes("/evaluator/setting")
  const [settingsOpen, setSettingsOpen] = useState(isSettingsActive)

  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)

  useEffect(() => {
    if (!location.pathname.includes("/evaluator/setting")) {
      setSettingsOpen(false)
    }
  }, [location.pathname])

  const isOverviewActive =
    location.pathname === "/evaluator" ||
    location.pathname === "/evaluator/" ||
    location.pathname === "/evaluator/overview"

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
        className={`fixed xl:static top-0 left-0 z-50 h-screen bg-white border-r border-gray-100 flex flex-col justify-between transition-all duration-300 ease-in-out shrink-0 ${collapsed ? "w-20" : "w-72"
          } ${open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}
      >
        {/* Top Header & Logo Area */}
        <div>
          <div
            className={`flex border-b border-gray-50 transition-all duration-300 ${collapsed
              ? "flex-col items-center justify-center gap-3 p-3.5"
              : "items-center justify-between px-6 py-4.5"
              }`}
          >
            <NavLink to="/evaluator/overview" className="flex items-center gap-3">
              <div className="rounded-xl bg-[#038AF9] p-3 flex items-center justify-center shadow-xs shrink-0">
                <DashboardLogo />
              </div>
            </NavLink>

            <button
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-200 bg-gray-100 transition-colors hidden lg:flex items-center justify-center cursor-pointer shrink-0"
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <TbLayoutSidebarLeftExpand className="w-5 h-5 text-gray-600" />
              ) : (
                <TbLayoutSidebarRightExpand className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 py-4 space-y-2 font-urbanist">
            {/* 1. Overview */}
            <NavLink
              to="/evaluator/overview"
              className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-[10px] text-base transition-all duration-200 group ${isOverviewActive
                ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                : "text-[#5A5A5A] font-medium hover:bg-gray-50"
                } ${collapsed ? "justify-center px-0" : ""}`}
              title={collapsed ? "Overview" : undefined}
            >
              <div className="shrink-0 flex items-center justify-center">
                <EvaluatorOverviewIcon
                  className={`w-5 h-5 transition-colors ${isOverviewActive ? "text-[#038AF9]" : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
                    }`}
                />
              </div>
              {!collapsed && <span className="flex-1 truncate">Overview</span>}
            </NavLink>

            {/* 2. My Schools */}
            <NavLink
              to="/evaluator/my-schools"
              className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-[10px] text-base transition-all duration-200 group ${location.pathname.includes("/evaluator/my-schools")
                ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                : "text-[#5A5A5A] font-medium hover:bg-gray-50"
                } ${collapsed ? "justify-center px-0" : ""}`}
              title={collapsed ? "My Schools" : undefined}
            >
              <div className="shrink-0 flex items-center justify-center">
                <EvaluatorMySchoolsIcon
                  className={`w-5 h-5 transition-colors ${location.pathname.includes("/evaluator/my-schools")
                    ? "text-[#080808]"
                    : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
                    }`}
                />
              </div>
              {!collapsed && <span className="flex-1 truncate">My Schools</span>}
            </NavLink>

            {/* 3. Reports */}
            <NavLink
              to="/evaluator/reports"
              className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-[10px] text-base transition-all duration-200 group ${location.pathname.includes("/evaluator/reports")
                ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                : "text-[#5A5A5A] font-medium hover:bg-gray-50"
                } ${collapsed ? "justify-center px-0" : ""}`}
              title={collapsed ? "Reports" : undefined}
            >
              <div className="shrink-0 flex items-center justify-center">
                <EvaluatorReportsIcon
                  className={`w-5 h-5 transition-colors ${location.pathname.includes("/evaluator/reports")
                    ? "text-[#080808]"
                    : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
                    }`}
                />
              </div>
              {!collapsed && <span className="flex-1 truncate">Reports</span>}
            </NavLink>
          </nav>
        </div>

        {/* Bottom Menu Items */}
        <div className="px-3 py-4 border-t border-gray-100 space-y-1 font-urbanist">
          {/* Settings Collapsible Dropdown */}
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setSettingsOpen(!settingsOpen)}
              className={`w-full flex items-center justify-between transition-all cursor-pointer ${settingsOpen && isSettingsActive
                ? "px-3.5 py-2.5 rounded-[10px] border border-[#EAEAEA] bg-[#FDFDFD] text-[#080808] font-semibold shadow-2xs"
                : "px-3.5 py-2.5 rounded-[10px] text-[#5A5A5A] font-medium hover:bg-gray-50"
                } ${collapsed ? "justify-center px-0" : ""}`}
              title={collapsed ? "Settings" : undefined}
            >
              <div className="flex items-center gap-3.5">
                <Settings
                  className={`w-5 h-5 shrink-0 ${settingsOpen && isSettingsActive ? "text-[#080808] stroke-[2]" : "text-[#5A5A5A] stroke-[1.75]"
                    }`}
                />
                {!collapsed && (
                  <span
                    className={`text-base font-medium ${settingsOpen && isSettingsActive ? "text-[#080808]" : "text-[#5A5A5A]"
                      }`}
                  >
                    Settings
                  </span>
                )}
              </div>
              {!collapsed && (
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${settingsOpen ? "rotate-180 text-[#080808]" : ""
                    }`}
                />
              )}
            </button>

            {/* Settings Sub-links */}
            {!collapsed && settingsOpen && (
              <div className="pl-9 pr-2 space-y-2 py-1.5 animate-fadeIn">
                <NavLink
                  to="/evaluator/setting/general"
                  className={({ isActive }) =>
                    `block text-[15px] transition-colors ${isActive
                      ? "text-[#080808] font-semibold"
                      : "text-[#5A5A5A] font-normal hover:text-[#080808]"
                    }`
                  }
                >
                  General
                </NavLink>
              </div>
            )}
          </div>

          {/* Get Help Button */}
          <button
            type="button"
            onClick={() => setIsHelpOpen(true)}
            className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-[10px] text-base font-medium text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808] transition-all cursor-pointer ${collapsed ? "justify-center px-0" : ""
              }`}
            title={collapsed ? "Get help" : undefined}
          >
            <HelpCircle className="w-5 h-5 shrink-0 stroke-[1.75]" />
            {!collapsed && <span>Get help</span>}
          </button>

          {/* Log Out Button */}
          <button
            type="button"
            onClick={() => setIsLogoutOpen(true)}
            className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-[10px] text-base font-medium text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808] transition-all cursor-pointer ${collapsed ? "justify-center px-0" : ""
              }`}
            title={collapsed ? "Log out" : undefined}
          >
            <LogOut className="w-5 h-5 shrink-0 stroke-[1.75]" />
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

export default EvaluatorSidebar
