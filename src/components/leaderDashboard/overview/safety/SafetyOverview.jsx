import React, { useState } from "react"
import BubbleTimelineChart from "../../../graphCharts/BubbleTimelineChart"
import RadialProgressChart from "../../../graphCharts/RadialProgressChart"
import SafeguardingCategoryInsights from "./SafeguardingCategoryInsights"
import StudentSafetySignals from "../teacherOverview/StudentSafetySignals"
import KeyMetricsCard from "../KeyMetricsCard"

const SAFETY_KEY_METRICS = [
  {
    id: "student-safety",
    label: "Student Safety",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "bullying-fairness",
    label: "Bullying & Fairness",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "belonging",
    label: "Sense of Belonging",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "respect",
    label: "Student Respect",
    percentage: 40,
    trend: "9%",
    isUp: false,
    barColor: "bg-[#E53935]",
  },
]

const SafetyOverview = () => {
  const [selectedCategory, setSelectedCategory] = useState("bullying")

  return (
    <div className="w-full space-y-6">
      {/* Top Section: Safeguarding Reports Bubble Chart + Category Insights */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Safeguarding Reports Timeline Bubble Chart (7 Cols) */}
        <div className="lg:col-span-7 flex">
          <BubbleTimelineChart
            title="Safeguarding Reports"
            subtitle="Select a category to view details."
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onExpand={() => console.log("Expand safeguarding reports clicked")}
          />
        </div>

        {/* Right Selected Category Insights Panel (5 Cols) */}
        <div className="lg:col-span-5 flex">
          <SafeguardingCategoryInsights
            selectedCategoryId={selectedCategory}
          />
        </div>
      </div>

      {/* Bottom 3-Card Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch min-w-0">
        {/* Card 1: Annual Safety Reports Overview Multi-Ring Radial Chart */}
        <div className="flex flex-col min-w-0">
          <RadialProgressChart
            title="Annual Safety Reports Overview"
            centerNumber={48}
            avgResolutionTime="4.5 Day"
            resolvedReportsCount={12}
          />
        </div>

        {/* Card 2: Student Safety Signals (Enabled) */}
        <div className="flex flex-col min-w-0">
          <StudentSafetySignals enabled={true} />
        </div>

        {/* Card 3: Safety Key Metrics */}
        <div className="flex flex-col min-w-0">
          <KeyMetricsCard
            title="Key Metrics"
            metrics={SAFETY_KEY_METRICS}
          />
        </div>
      </div>
    </div>
  )
}

export default SafetyOverview
