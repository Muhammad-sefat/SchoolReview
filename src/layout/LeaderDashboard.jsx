import React, { useState, useEffect } from "react"
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import LeaderSidebar from "../components/leaderDashboard/common/LeaderSidebar"
import LeaderNavbar from "../components/leaderDashboard/common/LeaderNavbar"

const LeaderDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname])

  return (
    <>
      <ScrollRestoration />
      <div className="flex h-screen w-screen overflow-hidden bg-[#F8FAFC] text-foreground font-urbanist">
        {/* Leader Sidebar */}
        <LeaderSidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />

        {/* Content Shell */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top Leader Navbar */}
          <LeaderNavbar open={sidebarOpen} setOpen={setSidebarOpen} />

          {/* Core Scrollable Viewport */}
          <main className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8 py-6 bg-[#F8FAFC]">
            <div className="w-full space-y-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default LeaderDashboard