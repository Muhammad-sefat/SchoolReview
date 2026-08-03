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
    <div className="w-full flex flex-col xl:flex-row xl:items-center justify-between gap-4 py-1">
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
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-lg font-normal flex items-center gap-2 sm:gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${currentTab === "safety"
            ? "bg-[#038AF9] text-white shadow-xs"
            : "bg-white border border-gray-200 text-textPrimary hover:bg-gray-50"
            }`}
        >
          <span>Safety</span>
          <span
            className={`p-1.5 text-xs font-semibold flex justify-center items-center rounded-full aspect-square ${currentTab === "safety"
              ? "bg-white text-[#E53935]"
              : "bg-[rgba(229,57,53,0.10)] text-[#E53935]"
              }`}
          >
            20
          </span>
        </button>

        {/* Community Tab with Badge */}
        <button
          type="button"
          onClick={() => handleTabChange("community")}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-lg font-normal flex items-center gap-2 sm:gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${currentTab === "community"
            ? "bg-[#038AF9] text-white shadow-xs"
            : "bg-white border border-gray-200 text-textPrimary hover:bg-gray-50"
            }`}
        >
          <span>Community</span>
          <span
            className={`p-1.5 aspect-square text-xs font-semibold flex justify-center items-center rounded-full ${currentTab === "community"
              ? "bg-white text-primary"
              : "bg-[rgba(3,138,249,0.10)] text-primary"
              }`}
          >
            20
          </span>
        </button>
      </div>

      {/* Right Score Badges (Shown ONLY on School Overview) */}
      {currentTab === "school" && (
        <div className="bg-white border border-[#E0E0E0] px-3 sm:px-4 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium text-textPrimary flex items-center gap-3 sm:gap-4 shadow-2xs whitespace-nowrap shrink-0">
          {/* Overall School Score Badge */}
          <div className="flex items-center gap-3 ">
            <span>Overall School Score</span>
            <div className=" flex items-center gap-1.5">
              <span className="font-semibold text-lg text-[#038AF9]">3.5</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89506 2.46196C9.44081 1.40152 10.9706 1.40152 11.5164 2.46196L13.3551 6.03523C13.3856 6.09452 13.443 6.13579 13.5093 6.14626L17.5062 6.77667C18.6917 6.96365 19.1641 8.40229 18.3164 9.24412L15.4551 12.0854C15.4076 12.1325 15.3858 12.199 15.3963 12.2647L16.027 16.2301C16.2139 17.4054 14.9765 18.2949 13.9061 17.7549L10.3011 15.9361C10.2412 15.9059 10.1702 15.9059 10.1103 15.9361L6.50534 17.7549C5.43494 18.2949 4.19759 17.4054 4.3845 16.2301L5.01518 12.2647C5.02562 12.199 5.00378 12.1325 4.95639 12.0854L2.09504 9.24412C1.24734 8.40229 1.71974 6.96365 2.90524 6.77667L6.90212 6.14626C6.96848 6.13579 7.02579 6.09452 7.0563 6.03523L8.89506 2.46196Z" fill="#038AF9" />
              </svg>
            </div>
          </div>

          {/* Dotted Divider */}
          <div className="h-4 sm:h-5 border-r border-dotted border-[#038AF9]" />

          {/* Would Recommend Badge */}
          <div className="flex items-center gap-3">
            <span>Would Recommend</span>
            <div className=" flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.5807 12.5003V5.41699H7.4974M14.2235 5.77416L5.41406 14.5837" stroke="#038AF9" stroke-width="1.25" stroke-linecap="square" />
              </svg>
              <span className="font-semibold text-lg text-[#038AF9]">80%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OverviewHeader