import React, { useState, useEffect } from "react"
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import ExternalObserverSidebar from "../components/externalObserver/common/ExternalObserverSidebar"
import ExternalObserverNavbar from "../components/externalObserver/common/ExternalObserverNavbar"

const ExternalObserverLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const location = useLocation()

  // Lock outer viewport scrolling when dashboard layout is active, restore on unmount
  useEffect(() => {
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
    const preventWindowScroll = () => {
      window.scrollTo(0, 0)
    }
    window.addEventListener("scroll", preventWindowScroll)
    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
      window.removeEventListener("scroll", preventWindowScroll)
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname])

  return (
    <div className="max-w-[1920px] mx-auto">
      <ScrollRestoration />
      <div className="flex h-screen w-full max-w-full overflow-hidden bg-[#F8FAFC] text-foreground font-urbanist">
        {/* External Observer Sidebar */}
        <ExternalObserverSidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />

        {/* Content Shell */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* External Observer Navbar */}
          <ExternalObserverNavbar open={sidebarOpen} setOpen={setSidebarOpen} />

          {/* Core Scrollable Viewport */}
          <main className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8 py-3 bg-[#FAFAFA]">
            <div className="w-full space-y-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default ExternalObserverLayout
