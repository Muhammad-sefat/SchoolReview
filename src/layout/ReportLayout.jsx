import React from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"

const ReportLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <ScrollRestoration />
      <div className="w-full min-h-screen font-urbanist ">
        <Outlet />
      </div>
    </div>
  )
}

export default ReportLayout
