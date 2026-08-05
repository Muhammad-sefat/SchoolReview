import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const TEACHING_INSIGHT_TABS = [
  { id: "overview", label: "Overview" },
  { id: "classroom-insights", label: "Classroom Insights" },
  { id: "review-insights", label: "Review Insights" },
  { id: "reports", label: "Reports" },
]

const TeacherInsightHeader = ({ activeTab, onTabChange, selectedYear, onYearChange }) => {
  return (
    <div className="w-full border-b border-dashed border-[#BFBFBF] pb-4 font-urbanist">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 py-1">
        {/* Left Navigation Tabs (Overview, Classroom Insights, Review Insights, Reports) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {TEACHING_INSIGHT_TABS.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#038AF9] text-white shadow-xs"
                    : "bg-white border border-gray-200 text-[#5A5A5A] hover:border-gray-300 hover:text-[#080808]"
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Right Actions: Teaching Score Badge & Shadcn Year Select (ONLY shown when activeTab === "overview") */}
        {activeTab === "overview" && (
          <div className="flex items-center gap-3 shrink-0">
            {/* Teaching Score Pill Badge */}
            <div className="bg-white border border-gray-200/80 px-5 py-2.5 rounded-full text-sm sm:text-base font-medium flex items-center gap-3 shadow-2xs">
              <span className="text-textPrimary text-base sm:text-lg font-medium">Teaching Score</span>
              <span className="text-base sm:text-lg font-medium text-primary flex items-center gap-1">
                3.5{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.89506 2.46135C9.44081 1.40091 10.9706 1.40091 11.5164 2.46135L13.3551 6.03462C13.3856 6.09391 13.443 6.13518 13.5093 6.14565L17.5062 6.77605C18.6917 6.96304 19.1641 8.40168 18.3164 9.24351L15.4551 12.0848C15.4076 12.1318 15.3858 12.1984 15.3963 12.2641L16.027 16.2295C16.2139 17.4048 14.9765 18.2943 13.9061 17.7543L10.3011 15.9355C10.2412 15.9053 10.1702 15.9053 10.1103 15.9355L6.50534 17.7543C5.43494 18.2943 4.19759 17.4048 4.3845 16.2295L5.01518 12.2641C5.02562 12.1984 5.00378 12.1318 4.95639 12.0848L2.09504 9.24351C1.24734 8.40168 1.71974 6.96304 2.90524 6.77605L6.90212 6.14565C6.96848 6.13518 7.02579 6.09391 7.0563 6.03462L8.89506 2.46135Z" fill="#038AF9" />
                </svg>
              </span>
              <span className="rounded-full text-base sm:text-lg font-bold text-[#66BB6A]">
                Effective
              </span>
            </div>

            {/* Shadcn Select for Current Year */}
            <Select value={selectedYear || "current"} onValueChange={onYearChange}>
              <SelectTrigger className="w-[140px] sm:w-[155px] h-12 rounded-full bg-white border border-gray-200 text-sm sm:text-base text-[#080808] font-medium shadow-2xs focus:ring-[#038AF9]/20 focus:border-[#038AF9]">
                <SelectValue placeholder="Current year" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border border-gray-100 bg-white shadow-lg font-urbanist">
                <SelectItem value="current" className="rounded-xl cursor-pointer">Current year</SelectItem>
                <SelectItem value="2025" className="rounded-xl cursor-pointer">2025</SelectItem>
                <SelectItem value="2024" className="rounded-xl cursor-pointer">2024</SelectItem>
                <SelectItem value="2023" className="rounded-xl cursor-pointer">2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeacherInsightHeader
