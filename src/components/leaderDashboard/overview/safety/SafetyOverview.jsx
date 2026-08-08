import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import BubbleTimelineChart from "../../../graphCharts/BubbleTimelineChart"
import SafeguardingCategoryInsights from "./SafeguardingCategoryInsights"
import KeyMetricsCard from "../KeyMetricsCard"
import RadialProgressChart from "../../../graphCharts/RadialProgressChart"
import StudentSafetySignals from "../teacherOverview/StudentSafetySignals"

const SAFETY_KEY_METRICS = [
  {
    id: "wellbeing",
    label: "Student Wellbeing",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "quality",
    label: "Teaching Quality",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "leadership",
    label: "Leadership & Culture",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "safety",
    label: "Safety & Safeguarding",
    percentage: 40,
    trend: "9%",
    isUp: false,
    barColor: "bg-[#E53935]",
  },
]

const SafetyOverview = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("bullying")

  return (
    <div className="w-full space-y-6">
      {/* Top Section: Safeguarding Reports Bubble Chart + Category Insights */}
      <div className="w-full grid grid-cols-1 xlg:grid-cols-12 gap-6 items-stretch">
        {/* Left Safeguarding Reports Timeline Bubble Chart (8 Cols) */}
        <div className="xlg:col-span-8 flex">
          <BubbleTimelineChart
            title="Safeguarding Reports"
            subtitle="Select a category to view details."
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            showRightBadge={true}
            onExpand={() => navigate("/leader-dashboard/safeguarding")}
          />
        </div>

        {/* Right Category Insights (4 Cols) */}
        <div className="xlg:col-span-4 flex">
          <SafeguardingCategoryInsights
            selectedCategoryId={selectedCategory}
          />
        </div>
      </div>

      {/* Bottom Section: 3-Column Metrics Overview (KeyMetricsCard, RadialProgressChart, StudentSafetySignals) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch min-w-0">
        <div className="flex flex-col min-w-0">
          <KeyMetricsCard
            title="Key Metrics"
            metrics={SAFETY_KEY_METRICS}
          />
        </div>

        <div className="flex flex-col min-w-0">
          <RadialProgressChart
            title="Annual Safety Reports Overview"
            centerNumber={48}
            avgResolutionTime="4.5 Day"
            resolvedReportsCount={12}
          />
        </div>

        <div className="flex flex-col min-w-0">
          <StudentSafetySignals enabled={true} />
        </div>
      </div>
    </div>
  )
}

export default SafetyOverview
