import React from "react"

const ActiveTaskHeader = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "reports", label: "Manage Reports", count: 20 },
    { id: "peer", label: "Peer Observations", count: 20 },
    { id: "self", label: "Self Review" },
    { id: "school", label: "School Review" },
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
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-lg font-normal flex items-center gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              isActive
                ? "bg-[#038AF9] text-white shadow-xs"
                : "bg-white border border-gray-200 text-textPrimary hover:bg-gray-50"
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`p-1.5 aspect-square text-xs font-semibold flex justify-center items-center rounded-full ${
                  isActive
                    ? "bg-white text-primary"
                    : "bg-[rgba(3,138,249,0.10)] text-primary"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

export default ActiveTaskHeader
