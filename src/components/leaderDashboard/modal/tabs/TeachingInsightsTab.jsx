import React from "react"
import CategoryInsightsTable from "../scatterPlotModalTeacher/CategoryInsightsTable"
import TeachingQualityRadarChart from "../scatterPlotModalTeacher/TeachingQualityRadarChart"

const SUB_TABS = [
  "Classroom Climate",
  "Teaching Quality",
  "Learning Environment",
  "Professional Practice",
  "Learning Impact",
]

const TeachingInsightsTab = ({
  activeSubTab,
  setActiveSubTab,
  currentRadarData,
  currentLegends,
  currentRows,
}) => {
  return (
    <div className="space-y-6 font-urbanist pb-6">
      {/* 5 Category Sub-Tabs with Clean Horizontal Scroll */}
      <div className="w-full overflow-x-auto no-scrollbar py-1">
        <div className="flex items-center gap-3 shrink-0">
          {SUB_TABS.map((subTab) => {
            const isActive = activeSubTab === subTab
            return (
              <button
                key={subTab}
                type="button"
                onClick={() => setActiveSubTab(subTab)}
                className={`px-5 py-2 rounded-full text-[18px] transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                  isActive
                    ? "border-2 border-[#038AF9] text-[#1F1F21] font-medium bg-white shadow-2xs"
                    : "border border-gray-200/90 text-[#5A5A5A] font-normal bg-white hover:text-[#080808]"
                }`}
              >
                {subTab}
              </button>
            )
          })}
        </div>
      </div>

      {/* Render Category Radar Chart ONLY for tabs with graphs */}
      {currentRadarData && (
        <TeachingQualityRadarChart
          title={activeSubTab}
          data={currentRadarData}
          legends={currentLegends}
        />
      )}

      {/* Render Category Insights Table */}
      <div className="space-y-4">
        {!currentRadarData && (
          <h3 className="text-[24px] font-semibold text-[#080808]">
            {activeSubTab}
          </h3>
        )}
        <CategoryInsightsTable rows={currentRows} />
      </div>
    </div>
  )
}

export default TeachingInsightsTab
