import React from "react"

const ExternalActiveTaskHeader = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "students", label: "Define Students" },
    { id: "observers", label: "Invite Observer" },
    { id: "teaching-areas", label: "Additional Review Areas" },
    { id: "share", label: "Share & Collect Feedback" },
    { id: "self-review", label: "Start Teaching Observation" },
    { id: "school-review", label: "School Review" },
  ]

  return (
    <div className="w-full flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar scrollbar-none flex-nowrap pb-1 max-w-full font-urbanist">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange && onTabChange(tab.id)}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-normal flex items-center gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              isActive
                ? "bg-[#038AF9] text-white shadow-xs"
                : "bg-white border border-gray-200 text-[#080808] hover:bg-gray-50"
            }`}
          >
            <span>{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default ExternalActiveTaskHeader
