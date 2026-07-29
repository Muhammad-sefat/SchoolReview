import React from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"

const ReviewLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <div className="h-screen w-full bg-muted/20 flex flex-col justify-center items-center p-4 lg:p-6 font-urbanist overflow-hidden selection:bg-primary/20">
        <Outlet />
      </div>
    </>
  )
}

export default ReviewLayout
