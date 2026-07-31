import React from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"

const ReportLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <div className="w-full min-h-screen font-urbanist ">
        <Outlet />
      </div>
    </>
  )
}

export default ReportLayout
