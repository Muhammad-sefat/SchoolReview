import React from "react"

const ExternalMyActivityHeader = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "self", label: "Self Review" },
    { id: "school", label: "School Review" },
  ]

  return (
    <div className="w-full flex items-center gap-2.5 overflow-x-auto no-scrollbar scrollbar-none flex-nowrap pb-1 max-w-full font-urbanist">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange && onTabChange(tab.id)}
            className={`px-5 py-2.5 rounded-full text-base font-normal flex items-center gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
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

export default ExternalMyActivityHeader
