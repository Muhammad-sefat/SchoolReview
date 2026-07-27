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
          className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${currentTab === "school"
            ? "bg-[#038AF9] text-white shadow-xs"
            : "bg-white border border-gray-200 text-[#1F1F21] hover:bg-gray-50"
            }`}
        >
          School Performance
        </button>

        {/* Teacher Performance Tab */}
        <button
          type="button"
          onClick={() => handleTabChange("teacher")}
          className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${currentTab === "teacher"
            ? "bg-[#038AF9] text-white shadow-xs"
            : "bg-white border border-gray-200 text-[#1F1F21] hover:bg-gray-50"
            }`}
        >
          Teacher Performance
        </button>

        {/* Safety Tab with Badge */}
        <button
          type="button"
          onClick={() => handleTabChange("safety")}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${currentTab === "safety"
            ? "bg-[#038AF9] text-white shadow-xs"
            : "bg-white border border-gray-200 text-[#1F1F21] hover:bg-gray-50"
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
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${currentTab === "community"
            ? "bg-[#038AF9] text-white shadow-xs"
            : "bg-white border border-gray-200 text-[#1F1F21] hover:bg-gray-50"
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

      {/* Right Score Badges (Hidden on Teacher Overview) */}
      {currentTab !== "teacher" && (
        <div className="flex flex-wrap items-center gap-3">
          {/* Overall School Score Badge */}
          <div className="bg-white border border-gray-200/80 px-4 py-2 rounded-full text-sm font-medium text-[#1F1F21] flex items-center gap-2 shadow-2xs">
            <span>Overall School Score</span>
            <span className="font-bold text-[#038AF9]">3.5</span>
            <Star className="w-4 h-4 fill-[#038AF9] text-[#038AF9]" />
          </div>

          {/* Would Recommend Badge */}
          <div className="bg-white border border-gray-200/80 px-4 py-2 rounded-full text-sm font-medium text-[#1F1F21] flex items-center gap-2 shadow-2xs">
            <span>Would Recommend</span>
            <ArrowUpRight className="w-4 h-4 text-[#038AF9] stroke-[2.5]" />
            <span className="font-bold text-[#038AF9]">80%</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default OverviewHeader