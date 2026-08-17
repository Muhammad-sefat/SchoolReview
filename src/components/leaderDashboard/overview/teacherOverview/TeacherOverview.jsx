import React, { useState } from "react"
import ScatterPlot from "../../../graphCharts/ScatterPlot"
import PieChartComponent from "../../../graphCharts/PieChart"
import PrioprityArea from "../PrioprityArea"
import KeyMetricsCard from "../KeyMetricsCard"
import StudentSafetySignals from "./StudentSafetySignals"
import ScatterPlotModalTeacher from "../../modal/ScatterPlotModalTeacher"

const TEACHER_SCATTER_DATA = [
  { id: 1, name: "Kathryn Murphy", x: 0.5, y: 0.3, category: "low", overallScore: "2.5", lowestMetric: "Pace (1.8)", highestMetric: "Clarity (3.0)", overall: 2.5 },
  { id: 2, name: "Robert Fox", x: 0.8, y: 0.7, category: "low", overallScore: "2.8", lowestMetric: "Feedback (2.0)", highestMetric: "Pace (3.2)", overall: 2.8 },
  { id: 3, name: "Floyd Miles", x: 1.1, y: 0.4, category: "low", overallScore: "2.0", lowestMetric: "Homework (1.5)", highestMetric: "Clarity (2.5)", overall: 2.0 },
  { id: 4, name: "Savannah Nguyen", x: 1.7, y: 1.7, category: "medium", overallScore: "1.8", lowestMetric: "Structure (1.2)", highestMetric: "Support (2.4)", overall: 1.8 },
  { id: 5, name: "Ronald Richards", x: 2.4, y: 2.3, category: "neutral", overallScore: "3.0", lowestMetric: "Pace (2.5)", highestMetric: "Clarity (3.5)", overall: 3.0 },
  { id: 6, name: "Esther Howard", x: 2.6, y: 2.7, category: "neutral", overallScore: "3.8", lowestMetric: "Support (3.2)", highestMetric: "Feedback (4.2)", overall: 3.8 },
  { id: 7, name: "Wade Warren", x: 3.5, y: 3.5, category: "good", overallScore: "3.5", lowestMetric: "Pace (3.0)", highestMetric: "Clarity (4.0)", overall: 3.5 },
  { id: 8, name: "Mr. Lukas Meier", x: 3.6, y: 3.8, category: "good", overallScore: "3.7", lowestMetric: "Pace (3.0)", highestMetric: "Clarity (5.0)", overall: 3.7 },
  { id: 9, name: "Annette Black", x: 3.7, y: 3.4, category: "good", overallScore: "4.2", lowestMetric: "Feedback (3.8)", highestMetric: "Clarity (4.6)", overall: 4.2 },
  { id: 10, name: "Bessie Cooper", x: 4.2, y: 3.7, category: "good", overallScore: "4.5", lowestMetric: "Support (4.0)", highestMetric: "Clarity (5.0)", overall: 4.5 },
  { id: 11, name: "Jacob Jones", x: 4.5, y: 4.4, category: "best", overallScore: "4.5", lowestMetric: "Pace (4.2)", highestMetric: "Clarity (4.9)", overall: 4.5 },
  { id: 12, name: "Albert Flores", x: 4.8, y: 4.5, category: "best", overallScore: "5.0", lowestMetric: "Support (4.8)", highestMetric: "Clarity (5.0)", overall: 1.5 },
]

const TEACHER_PRIORITY_GROUPS = [
  {
    id: "needs-support",
    title: "Needs Support",
    borderColor: "border-[#E53935]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA]",
    items: [
      { label: "Kathryn Murphy", score: "2.5" },
      { label: "Robert Fox", score: "2.8" },
      { label: "Floyd Miles", score: "2.0" },
      { label: "Savannah Nguyen", score: "1.8" },
    ],
  },
  {
    id: "developing",
    title: "Developing",
    borderColor: "border-[#FB8C00]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA]",
    items: [
      { label: "Ronald Richards", score: "3.0" },
      { label: "Esther Howard", score: "3.8" },
      { label: "Wade Warren", score: "3.5" },
    ],
  },
  {
    id: "effective",
    title: "Effective",
    borderColor: "border-[#66BB6A]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA]",
    items: [
      { label: "Bessie Cooper", score: "4.5" },
      { label: "Annette Black", score: "4.2" },
      { label: "Jacob Jones", score: "4.5" },
      { label: "Albert Flores", score: "5.0" },
    ],
  },
]

const TEACHER_DISTRIBUTION_DATA = [
  { name: "Effective", value: 44, color: "#B1DBFD" },
  { name: "Developing", value: 24, color: "#038AF9" },
  { name: "Needs support", value: 30, color: "#037CE0" },
]

const TEACHER_KEY_METRICS = [
  {
    id: "clarity",
    label: "Teaching Clarity",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "support-1",
    label: "Learning Support",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "support-2",
    label: "Learning Support",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "fairness",
    label: "Respect & Fairness",
    percentage: 40,
    trend: "9%",
    isUp: false,
    barColor: "bg-[#E53935]",
  },
]

const TeacherOverview = () => {
  const [selectedTeacherMetric, setSelectedTeacherMetric] = useState(null)

  return (
    <div className="w-full space-y-6">
      {/* Top Section: Teacher Performance Scatter Plot + Priority Areas */}
      <div className="w-full grid grid-cols-1 xlg:grid-cols-12 gap-6 items-stretch">
        {/* Left Scatter Plot Chart (No tabs for Teacher Performance) */}
        <div className="xlg:col-span-8 flex">
          <ScatterPlot
            title="Teacher Performance"
            subtitle="Select a metric to view details."
            tabs={null}
            data={TEACHER_SCATTER_DATA}
            onExpand={() => console.log("Expand chart clicked")}
            onMetricClick={(metric) => setSelectedTeacherMetric(metric)}
          />
        </div>

        {/* Right Priority Areas */}
        <div className="xlg:col-span-4 flex">
          <PrioprityArea
            title="Priority Areas by Performance"
            groups={TEACHER_PRIORITY_GROUPS}
            type="teacher"
          />
        </div>
      </div>

      {/* Bottom 3-Card Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch min-w-0">
        {/* Card 1: Teacher Effectiveness Distribution Pie Chart */}
        <div className="flex flex-col min-w-0">
          <PieChartComponent
            title="Teacher Effectiveness Distribution"
            data={TEACHER_DISTRIBUTION_DATA}
          />
        </div>

        {/* Card 2: Student Safety Signals */}
        <div className="flex flex-col min-w-0">
          <StudentSafetySignals />
        </div>

        {/* Card 3: Key Metrics */}
        <div className="flex flex-col min-w-0">
          <KeyMetricsCard
            title="Key Metrics"
            metrics={TEACHER_KEY_METRICS}
          />
        </div>
      </div>

      {/* Teacher ScatterPlot Modal Component */}
      <ScatterPlotModalTeacher
        isOpen={!!selectedTeacherMetric}
        onClose={() => setSelectedTeacherMetric(null)}
        metric={selectedTeacherMetric}
      />
    </div>
  )
}

export default TeacherOverview
