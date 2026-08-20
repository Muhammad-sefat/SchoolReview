import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import ReviewSidebar from "@/components/reviewDashboard/ReviewSidebar"
import ReviewNavbar from "@/components/reviewDashboard/ReviewNavbar"

const ReviewDashboardLayout = () => {
  const [open, setOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#FAFAFA] font-urbanist">
      {/* Sidebar Navigation */}
      <ReviewSidebar
        open={open}
        setOpen={setOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        <ReviewNavbar open={open} setOpen={setOpen} />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default ReviewDashboardLayout
