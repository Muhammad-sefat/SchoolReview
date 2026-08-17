import React, { useState } from "react"
import ScatterPlot from "@/components/graphCharts/ScatterPlot"
import PrioprityArea from "@/components/leaderDashboard/overview/PrioprityArea"
import ScatterPlotModal from "@/components/leaderDashboard/modal/ScatterPlotModal"

const TEACHER_PERFORMANCE_DATA = [
  { id: 1, name: "Classroom Safety", x: 0.6, y: 0.5, category: "low", overall: 1.5, reviews: 30 },
  { id: 2, name: "Clarity", x: 0.9, y: 0.7, category: "low", overall: 2.8, reviews: 25 },
  { id: 3, name: "Inclusion", x: 1.3, y: 0.9, category: "low", overall: 2.0, reviews: 20 },
  { id: 4, name: "Fairness", x: 1.7, y: 1.3, category: "medium", overall: 1.8, reviews: 35 },
  { id: 5, name: "Adaptive Teaching", x: 2.1, y: 1.7, category: "medium", overall: 1.8, reviews: 18 },
  { id: 6, name: "Pace", x: 2.7, y: 2.3, category: "neutral", overall: 3.0, reviews: 40 },
  { id: 7, name: "Purpose", x: 3.1, y: 2.8, category: "neutral", overall: 3.8, reviews: 28 },
  { id: 8, name: "Support", x: 3.6, y: 3.6, category: "good", overall: 3.5, reviews: 32 },
  { id: 9, name: "Behaviour", x: 3.9, y: 3.8, category: "good", overall: 3.5, reviews: 45 },
  { id: 10, name: "Lesson Coherence", x: 4.4, y: 4.3, category: "best", overall: 3.5, reviews: 22 },
  { id: 11, name: "Engagement", x: 4.7, y: 4.7, category: "best", overall: 4.5, reviews: 50 },
  { id: 12, name: "Feedback", x: 4.9, y: 4.6, category: "best", overall: 4.2, reviews: 38 },
]

const TEACHER_PRIORITY_GROUPS = [
  {
    id: "needs-support",
    title: "Needs Support",
    borderColor: "border-[#E53935]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA]",
    items: [
      { label: "Classroom Safety", score: "2.5" },
      { label: "Clarity", score: "2.8" },
      { label: "Inclusion", score: "2.0" },
      { label: "Fairness", score: "1.8" },
      { label: "Adaptive Teaching", score: "1.8" },
      { label: "Ongoing Improvement", score: "1.8" },
    ],
  },
  {
    id: "developing",
    title: "Developing",
    borderColor: "border-[#FB8C00]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA]",
    items: [
      { label: "Pace", score: "3.0" },
      { label: "Purpose", score: "3.8" },
      { label: "Support", score: "3.5" },
      { label: "Behaviour", score: "3.5" },
      { label: "Lesson Coherence", score: "3.5" },
      { label: "Meaningful Assessment", score: "3.5" },
    ],
  },
  {
    id: "effective",
    title: "Effective",
    borderColor: "border-[#66BB6A]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA]",
    items: [
      { label: "Engagement", score: "4.5" },
      { label: "Feedback", score: "4.2" },
      { label: "Challenge", score: "4.5" },
      { label: "Dialogue", score: "5.0" },
    ],
  },
]

const TeacherPerformanceScatter = () => {
  const [selectedMetric, setSelectedMetric] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePointClick = (metric) => {
    setSelectedMetric(metric)
    setIsModalOpen(true)
  }

  return (
    <div className="w-full grid grid-cols-1 xlg:grid-cols-12 gap-4 items-stretch font-urbanist">
      {/* Left Scatter Plot (No tabs for Teacher Performance) */}
      <div className="xlg:col-span-8 flex">
        <ScatterPlot
          title="Teacher Performance"
          subtitle="Select a metric to view details."
          hideTabs={true}
          data={TEACHER_PERFORMANCE_DATA}
          onPointClick={handlePointClick}
          hideBottomBars={true}
        />
      </div>

      {/* Right Priority Areas by Performance (Reusing PrioprityArea component) */}
      <div className="xlg:col-span-4 flex">
        <PrioprityArea
          title="Priority Areas by Performance"
          groups={TEACHER_PRIORITY_GROUPS}
          type="teacher"
        />
      </div>

      {/* Dot Click Detail Modal */}
      {selectedMetric && (
        <ScatterPlotModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedMetric(null)
          }}
          metric={selectedMetric}


        />
      )}
    </div>
  )
}

export default TeacherPerformanceScatter
