import React from "react"

const MyActivity = () => {
  return (
    <div className="w-full space-y-6 font-urbanist bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-xs">
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#080808]">
          My Activity
        </h2>
        <p className="text-base text-secondary font-normal">
          Track your recent submissions, teaching reflections, and log metrics.
        </p>
      </div>

      <div className="border-t border-dashed border-gray-200/80 pt-4">
        <div className="p-8 text-center text-secondary border border-dashed border-gray-200 rounded-2xl">
          <p className="text-lg font-medium text-[#080808]">Activity log active</p>
          <p className="text-sm mt-1">Your recent teaching reflections will appear here.</p>
        </div>
      </div>
    </div>
  )
}

export default MyActivity
