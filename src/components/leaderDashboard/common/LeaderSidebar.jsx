import React, { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ChevronDown, PanelLeftClose, PanelLeft, Settings, HelpCircle, LogOut } from "lucide-react"
import { OverviewIcon, SafeGuard, CommunityFeedback, TeachingInsight, Reports } from "./LeaderIcons"
import { DashboardLogo, LogoOne } from "../../icons/Logo/AllLogo"
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
const LeaderSidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
  const location = useLocation()
  const [settingsOpen, setSettingsOpen] = useState(false)

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

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-screen bg-white border-r border-gray-100 flex flex-col justify-between transition-all duration-300 ease-in-out shrink-0 ${collapsed ? "w-20" : "w-64"
          } ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        {/* Top Header & Logo Area */}
        <div>
          <div
            className={`flex border-b border-gray-50 transition-all duration-300 ${collapsed
                ? "flex-col items-center justify-center gap-3 py-4 px-3"
                : "flex-row items-center justify-between px-5 py-5"
              }`}
          >
            {/* Logo Badge */}
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#038AF9] p-3 flex items-center justify-center shadow-xs shrink-0">
                <DashboardLogo />
              </div>
              {!collapsed && (
                <span className="font-urbanist text-lg font-bold text-[#1F1F21] tracking-tight">
                  Graham
                </span>
              )}
            </div>

            {/* Sidebar Toggle Expand/Collapse Button */}
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
          <nav className="px-3 py-4 space-y-1.5">
            {navItems.map((item) => {
              const active = isPathActive(item.path)
              const IconComp = item.icon

              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all duration-200 group ${active
                    ? "bg-[#F0F8FF] text-[#038AF9] border border-[#BEE0FF]/60 font-semibold shadow-2xs"
                    : "text-[#5A5A5A] hover:bg-gray-50 hover:text-[#1F1F21]"
                    } ${collapsed ? "justify-center px-0" : ""}`}
                  title={collapsed ? item.label : undefined}
                >
                  <div className="shrink-0 flex items-center justify-center">
                    <IconComp
                      className={`w-5 h-5 transition-colors ${active ? "text-[#038AF9]" : "text-[#5A5A5A] group-hover:text-[#1F1F21]"
                        }`}
                    />
                  </div>

                  {!collapsed && (
                    <span className="flex-1 truncate">{item.label}</span>
                  )}

                  {!collapsed && item.badge && (
                    <span
                      className={`px-2 py-0.5 text-xs font-bold rounded-full ${item.badge.color}`}
                    >
                      {item.badge.text}
                    </span>
                  )}
                </NavLink>
              )
            })}
          </nav>
        </div>

        {/* Bottom Menu Items */}
        <div className="px-3 py-4 border-t border-gray-100 space-y-1">
          {/* Settings Collapsible Dropdown */}
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setSettingsOpen(!settingsOpen)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#5A5A5A] hover:bg-gray-50 hover:text-[#1F1F21] transition-colors cursor-pointer ${collapsed ? "justify-center px-0" : ""
                }`}
              title={collapsed ? "Settings" : undefined}
            >
              <div className="flex items-center gap-3.5">
                <Settings className="w-5 h-5 text-[#5A5A5A] shrink-0 stroke-[1.75]" />
                {!collapsed && <span>Settings</span>}
              </div>
              {!collapsed && (
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${settingsOpen ? "rotate-180" : ""
                    }`}
                />
              )}
            </button>

            {/* Settings Sub-links */}
            {!collapsed && settingsOpen && (
              <div className="pl-9 pr-2 space-y-1 py-1">
                <NavLink
                  to="/leader-dashboard/settings/profile"
                  className="block text-xs font-medium text-[#5A5A5A] hover:text-[#038AF9] py-1.5 transition-colors"
                >
                  Profile Settings
                </NavLink>
                <NavLink
                  to="/leader-dashboard/settings/security"
                  className="block text-xs font-medium text-[#5A5A5A] hover:text-[#038AF9] py-1.5 transition-colors"
                >
                  Security Credentials
                </NavLink>
              </div>
            )}
          </div>

          {/* Get Help */}
          <button
            type="button"
            className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#5A5A5A] hover:bg-gray-50 hover:text-[#1F1F21] transition-colors cursor-pointer ${collapsed ? "justify-center px-0" : ""
              }`}
            title={collapsed ? "Get help" : undefined}
          >
            <HelpCircle className="w-5 h-5 text-[#5A5A5A] shrink-0 stroke-[1.75]" />
            {!collapsed && <span>Get help</span>}
          </button>

          {/* Log Out */}
          <button
            type="button"
            className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#5A5A5A] hover:bg-gray-50 hover:text-red-600 transition-colors cursor-pointer ${collapsed ? "justify-center px-0" : ""
              }`}
            title={collapsed ? "Log out" : undefined}
          >
            <LogOut className="w-5 h-5 text-[#5A5A5A] shrink-0 stroke-[1.75]" />
            {!collapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>
    </>
  )
}

export default LeaderSidebar