import React from "react"

const MyActivityHeader = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "reports", label: "Manage Reports" },
    { id: "peer", label: "Peer Observations" },
    { id: "self", label: "Self Reviews" },
    { id: "school", label: "School Reviews" },
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
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-lg font-normal transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              isActive
                ? "bg-[#038AF9] text-white shadow-xs"
                : "bg-white border border-gray-200 text-textPrimary hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default MyActivityHeader
