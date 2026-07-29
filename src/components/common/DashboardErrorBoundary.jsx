import React from "react"
import { useRouteError, useNavigate } from "react-router-dom"
import { AlertTriangle, RotateCcw, Home } from "lucide-react"

const DashboardErrorBoundary = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  console.error("Dashboard Route Error:", error)

  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center p-6 text-center font-urbanist">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-100 p-8 shadow-sm space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#E53935] flex items-center justify-center mx-auto">
          <AlertTriangle className="w-7 h-7 stroke-[2]" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[#080808]">
            Something went wrong
          </h2>
          <p className="text-sm text-[#5A5A5A]">
            {error?.message || error?.statusText || "An unexpected error occurred while loading this view."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#038AF9] text-white font-semibold text-sm hover:bg-[#038AF9]/90 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Reload Page
          </button>

          <button
            type="button"
            onClick={() => navigate("/leader-dashboard")}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gray-100 text-[#1F1F21] font-medium text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardErrorBoundary
