import React, { useState, useEffect } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { ChevronDown, Settings, HelpCircle, LogOut, ChevronLeft, ChevronRight } from "lucide-react"
import { OverviewIcon, SafeGuard, CommunityFeedback, TeachingInsight, Reports } from "./LeaderIcons"
import { DashboardLogo } from "../../icons/Logo/AllLogo"
import GetHelpModal from "@/components/leaderDashboard/setting/GetHelpModal"
import LogoutModal from "@/components/leaderDashboard/setting/LogoutModal"
const LeaderSidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const isSettingsActive = location.pathname.includes("/leader-dashboard/setting")
  const [settingsOpen, setSettingsOpen] = useState(isSettingsActive)

  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)

  // Automatically close settings dropdown & reset active state when navigating away to other routes
  useEffect(() => {
    if (!location.pathname.includes("/leader-dashboard/setting")) {
      setSettingsOpen(false)
    }
  }, [location.pathname])

  const navItems = [
    {
      id: "overview",
      label: "Overview",
      path: "/leader-dashboard",
      icon: OverviewIcon,
      badge: null,
    },
    {
      id: "safeguarding",
      label: "Safeguarding",
      path: "/leader-dashboard/safeguarding",
      icon: SafeGuard,
      badge: { text: "1", color: "bg-[#E53935] text-white" },
    },
    {
      id: "community",
      label: "Community Feedback",
      path: "/leader-dashboard/community",
      icon: CommunityFeedback,
      badge: null,
    },
    {
      id: "insights",
      label: "Teaching Insights",
      path: "/leader-dashboard/teaching-insights",
      icon: TeachingInsight,
      badge: null,
    },
    {
      id: "reports",
      label: "Reports",
      path: "/leader-dashboard/reports",
      icon: Reports,
      badge: null,
    },
  ]

  const isPathActive = (itemPath) => {
    if (itemPath === "/leader-dashboard") {
      return (
        location.pathname === "/leader-dashboard" ||
        location.pathname === "/leader-dashboard/" ||
        location.pathname === "/dashboard/leader"
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
        className={`fixed xl:static top-0 left-0 z-50 h-screen bg-white border-r border-gray-100 flex flex-col justify-between transition-all duration-300 ease-in-out shrink-0 ${collapsed ? "w-[106px]" : "w-72"
          } ${open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}
      >
        {/* Top Header & Logo Area */}
        <div>
          <div
            className={`flex flex-row items-center justify-between border-b border-gray-50 transition-all duration-300 ${collapsed ? "px-3.5 py-4" : "px-5 py-5"
              }`}
          >
            {/* Logo Badge */}
            <div className="flex items-center gap-3">
              <div
                className={`rounded-xl bg-[#038AF9] flex items-center justify-center shadow-xs shrink-0 transition-all ${collapsed ? "p-2.5" : "p-3"
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
          <nav className="px-3.5 py-4 space-y-3 font-urbanist">
            {navItems.map((item) => {
              const active = isPathActive(item.path)
              const IconComp = item.icon

              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={`flex items-center ${collapsed ? "mt-3" : "mt-0"}  gap-4 px-3.5 py-3 rounded-xl text-base transition-all duration-200 group ${active
                    ? "bg-[#FDFDFD] text-[#080808] border border-[#EAEAEA] shadow-2xs font-semibold"
                    : "text-[#5A5A5A] font-medium hover:bg-gray-50"
                    } ${collapsed ? "justify-center px-0" : ""}`}
                  title={collapsed ? item.label : undefined}
                >
                  {/* Icon with Top Notification Indicator when collapsed */}
                  <div className="shrink-0 flex items-center justify-center relative">
                    <IconComp
                      className={`w-[22px] h-[22px] transition-colors ${active ? "text-[#080808]" : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
                        }`}
                    />
                    {collapsed && item.badge && (
                      <span className="absolute -top-1.5 -right-2.5 px-1 min-w-[16px] h-4 text-[10px] font-bold rounded-full bg-[#E53935] text-white flex items-center justify-center ring-2 ring-white shadow-2xs">
                        {item.badge.text}
                      </span>
                    )}
                  </div>

                  {!collapsed && <span className="flex-1 truncate">{item.label}</span>}

                  {!collapsed && item.badge && (
                    <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${item.badge.color}`}>
                      {item.badge.text}
                    </span>
                  )}
                </NavLink>
              )
            })}
          </nav>
        </div>

        {/* Bottom Menu Items - Matching Top Default Text & Colors */}
        <div className="px-3.5 py-4 border-t border-gray-100 space-y-3 font-urbanist">
          {/* Settings Collapsible Dropdown */}
          <div className="space-y-1 relative group">
            <button
              type="button"
              onClick={() => setSettingsOpen(!settingsOpen)}
              className={`w-full flex items-center justify-between transition-all duration-200 group cursor-pointer ${settingsOpen && isSettingsActive
                ? "px-3.5 py-3 rounded-xl border border-[#EAEAEA] bg-[#FDFDFD] text-[#080808] font-semibold shadow-2xs"
                : "px-3.5 py-3 rounded-xl text-[#5A5A5A] font-medium hover:bg-gray-50"
                } ${collapsed ? "justify-center px-0" : ""}`}
              title={collapsed ? "Settings" : undefined}
            >
              <div className="flex items-center gap-4">
                <Settings
                  className={`w-[22px] h-[22px] shrink-0 transition-colors ${settingsOpen && isSettingsActive
                    ? "text-[#080808] stroke-[2]"
                    : "text-[#5A5A5A] stroke-[1.75] group-hover:text-[#1F1F21]"
                    }`}
                />
                {!collapsed && (
                  <span
                    className={`text-base transition-colors ${settingsOpen && isSettingsActive
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
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${settingsOpen ? "rotate-180 text-[#080808]" : ""
                    }`}
                />
              )}
            </button>

            {/* Uncollapsed Settings Sub-links */}
            {!collapsed && settingsOpen && (
              <div className="pl-9 pr-2 space-y-6 py-1.5 animate-fadeIn">
                <NavLink
                  to="/leader-dashboard/setting/branding-profile"
                  className={({ isActive }) =>
                    `block text-[15px] transition-colors ${isActive || location.pathname === "/leader-dashboard/setting"
                      ? "text-[#080808] font-semibold"
                      : "text-[#5A5A5A] font-normal hover:text-[#080808]"
                    }`
                  }
                >
                  School Branding Profile
                </NavLink>
                <NavLink
                  to="/leader-dashboard/setting/user-admin"
                  className={({ isActive }) =>
                    `block text-[15px] transition-colors ${isActive ? "text-[#080808] font-semibold" : "text-[#5A5A5A] font-normal hover:text-[#080808]"
                    }`
                  }
                >
                  User Administration
                </NavLink>
                <NavLink
                  to="/leader-dashboard/setting/general"
                  className={({ isActive }) =>
                    `block text-[15px] transition-colors ${isActive ? "text-[#080808] font-semibold" : "text-[#5A5A5A] font-normal hover:text-[#080808]"
                    }`
                  }
                >
                  General
                </NavLink>
                <NavLink
                  to="/leader-dashboard/setting/followed-schools"
                  className={({ isActive }) =>
                    `block text-[15px] transition-colors ${isActive ? "text-[#080808] font-semibold" : "text-[#5A5A5A] font-normal hover:text-[#080808]"
                    }`
                  }
                >
                  Followed Schools
                </NavLink>
              </div>
            )}

            {/* Collapsed Settings Flyout Popover */}
            {collapsed && (
              <div className="absolute left-full bottom-0 pl-2 hidden group-hover:flex flex-col z-50 animate-fadeIn">
                <div className="bg-white border border-gray-200/90 rounded-2xl p-3 shadow-xl space-y-2 min-w-[200px]">
                  <div className="text-xs font-semibold text-gray-400 px-2.5 pb-1 border-b border-gray-100">
                    Settings
                  </div>

                  <NavLink
                    to="/leader-dashboard/setting/branding-profile"
                    className={({ isActive }) =>
                      `block px-2.5 py-1.5 rounded-lg text-sm transition-colors ${isActive || location.pathname === "/leader-dashboard/setting"
                        ? "bg-blue-50 text-[#038AF9] font-semibold"
                        : "text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808]"
                      }`
                    }
                  >
                    School Branding Profile
                  </NavLink>
                  <NavLink
                    to="/leader-dashboard/setting/user-admin"
                    className={({ isActive }) =>
                      `block px-2.5 py-1.5 rounded-lg text-sm transition-colors ${isActive ? "bg-blue-50 text-[#038AF9] font-semibold" : "text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808]"
                      }`
                    }
                  >
                    User Administration
                  </NavLink>
                  <NavLink
                    to="/leader-dashboard/setting/general"
                    className={({ isActive }) =>
                      `block px-2.5 py-1.5 rounded-lg text-sm transition-colors ${isActive ? "bg-blue-50 text-[#038AF9] font-semibold" : "text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808]"
                      }`
                    }
                  >
                    General
                  </NavLink>
                  <NavLink
                    to="/leader-dashboard/setting/followed-schools"
                    className={({ isActive }) =>
                      `block px-2.5 py-1.5 rounded-lg text-sm transition-colors ${isActive ? "bg-blue-50 text-[#038AF9] font-semibold" : "text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808]"
                      }`
                    }
                  >
                    Followed Schools
                  </NavLink>


                </div>
              </div>
            )}
          </div>

          {/* Get Help Button */}
          <button
            type="button"
            onClick={() => setIsHelpOpen(true)}
            className={`w-full flex items-center gap-4 px-3.5 py-3 rounded-xl text-base font-medium text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808] transition-all duration-200 group cursor-pointer ${collapsed ? "justify-center px-0" : ""
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
            className={`w-full flex items-center gap-4 px-3.5 py-3 rounded-xl text-base font-medium text-[#5A5A5A] hover:bg-gray-50 hover:text-[#080808] transition-all duration-200 group cursor-pointer ${collapsed ? "justify-center px-0" : ""
              }`}
            title={collapsed ? "Log out" : undefined}
          >
            <LogOut className="w-[22px] h-[22px] text-[#5A5A5A] group-hover:text-[#1F1F21] shrink-0 stroke-[1.75] transition-colors" />
            {!collapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>

      {/* Modals */}
      <GetHelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
      <LogoutModal isOpen={isLogoutOpen} onClose={() => setIsLogoutOpen(false)} onLogoutConfirm={handleLogoutConfirm} />
    </>
  )
}

export default LeaderSidebar