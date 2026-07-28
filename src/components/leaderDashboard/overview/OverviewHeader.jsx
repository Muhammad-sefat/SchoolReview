import React, { useState } from "react"
import { Star, ArrowUpRight } from "lucide-react"

const OverviewHeader = ({ activeCategory, setActiveCategory }) => {
  const [currentTab, setCurrentTab] = useState(activeCategory || "school")

  const handleTabChange = (tabId) => {
    setCurrentTab(tabId)
    if (setActiveCategory) {
      setActiveCategory(tabId)
    }
  }

  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-1">
      {/* Left Filter Navigation Pills */}
      <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar scrollbar-none flex-nowrap pb-1 max-w-full">
        {/* School Performance Tab */}
        <button
          type="button"
          onClick={() => handleTabChange("school")}
          className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-lg font-normal transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${currentTab === "school"
            ? "bg-[#038AF9] text-white shadow-xs"
            : "bg-white border border-gray-200 text- hover:bg-gray-50"
            }`}
        >
          School Performance
        </button>

        {/* Teacher Performance Tab */}
        <button
          type="button"
          onClick={() => handleTabChange("teacher")}
          className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-lg font-normal transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${currentTab === "teacher"
            ? "bg-[#038AF9] text-white shadow-xs"
            : "bg-white border border-gray-200 text-textPrimary hover:bg-gray-50"
            }`}
        >
          Teacher Performance
        </button>

        {/* Safety Tab with Badge */}
        <button
          type="button"
          onClick={() => handleTabChange("safety")}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-lg font-normal flex items-center gap-1.5 sm:gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${currentTab === "safety"
            ? "bg-[#038AF9] text-white shadow-xs"
            : "bg-white border border-gray-200 text-textPrimary hover:bg-gray-50"
            }`}
        >
          <span>Safety</span>
          <span
            className={`px-2 py-0.5 text-xs font-bold rounded-full ${currentTab === "safety"
              ? "bg-white/20 text-white"
              : "bg-[#FFEBEE] text-[#E53935]"
              }`}
          >
            20
          </span>
        </button>

        {/* Community Tab with Badge */}
        <button
          type="button"
          onClick={() => handleTabChange("community")}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-lg font-normal flex items-center gap-1.5 sm:gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${currentTab === "community"
            ? "bg-[#038AF9] text-white shadow-xs"
            : "bg-white border border-gray-200 text-textPrimary hover:bg-gray-50"
            }`}
        >
          <span>Community</span>
          <span
            className={`px-2 py-0.5 text-xs font-bold rounded-full ${currentTab === "community"
              ? "bg-white/20 text-white"
              : "bg-[#E3F2FD] text-[#038AF9]"
              }`}
          >
            20
          </span>
        </button>
      </div>

      {/* Right Score Badges (Shown ONLY on School Overview) */}
      {currentTab === "school" && (
        <div className="flex flex-wrap items-center gap-3">
          {/* Overall School Score Badge */}
          <div className="bg-white border border-gray-200/80 px-4 py-2 rounded-full sm:text-lg text-sm font-medium text-textPrimary flex items-center gap-2 shadow-2xs">
            <span>Overall School Score</span>
            <span className="font-medium text-primary">3.5</span>
            <Star className="w-4 h-4 fill-primary text-primary" />
          </div>

          {/* Would Recommend Badge */}
          <div className="bg-white border border-gray-200/80 px-4 py-2 rounded-full sm:text-lg text-sm font-medium text-textPrimary flex items-center gap-2 shadow-2xs">
            <span>Would Recommend</span>
            <ArrowUpRight className="w-4 h-4 text-[#038AF9] stroke-[2.5]" />
            <span className="font-medium text-primary">80%</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default OverviewHeader