import React, { useState } from "react"
import ScatterPlot from "../../graphCharts/ScatterPlot"
import PrioprityArea from "./PrioprityArea"

const PARENT_STUDENT_DATA = [
  { id: 1, name: "Facilities", x: 0.5, y: 0.3, category: "low", overall: 1.5, student: 1.2, parent: 1.8 },
  { id: 2, name: "Learning Support", x: 0.8, y: 0.6, category: "low", overall: 1.0, student: 0.5, parent: 1.5 },
  { id: 3, name: "Homework Load", x: 1.1, y: 0.4, category: "low", overall: 1.2, student: 0.8, parent: 1.6 },
  { id: 4, name: "Individual Support", x: 1.7, y: 1.7, category: "medium", overall: 2.2, student: 2.0, parent: 2.4 },
  { id: 5, name: "Value for Money", x: 2.4, y: 2.3, category: "neutral", overall: 2.7, student: 2.5, parent: 2.9 },
  { id: 6, name: "School Communication", x: 2.6, y: 2.6, category: "neutral", overall: 3.2, student: 3.0, parent: 3.4 },
  { id: 7, name: "Fairness", x: 3.5, y: 3.5, category: "good", overall: 3.6, student: 3.4, parent: 3.8 },
  { id: 8, name: "Activities", x: 3.6, y: 3.8, category: "good", overall: 3.8, student: 3.6, parent: 4.0 },
  { id: 9, name: "Leadership", x: 3.7, y: 3.4, category: "good", overall: 3.7, student: 3.5, parent: 3.9 },
  { id: 10, name: "Teaching Quality", x: 4.2, y: 3.7, category: "good", overall: 4.0, student: 3.8, parent: 4.2 },
  { id: 11, name: "Safety & Safeguarding", x: 4.5, y: 4.4, category: "best", overall: 4.5, student: 4.3, parent: 4.7 },
  { id: 12, name: "Inclusion", x: 4.8, y: 4.7, category: "best", overall: 4.8, student: 4.6, parent: 5.0 },
  { id: 13, name: "Voice & Agency", x: 4.9, y: 4.5, category: "best", overall: 4.6, student: 4.4, parent: 4.8 },
  { id: 14, name: "Classroom Climate", x: 5.0, y: 4.8, category: "best", overall: 4.9, student: 4.8, parent: 5.0 },
]

const TEACHER_DATA = [
  { id: 1, name: "Workload Balance", x: 0.6, y: 0.5, category: "low", overall: 1.4, student: 1.0, parent: 1.8 },
  { id: 2, name: "Resource Availability", x: 1.2, y: 0.8, category: "low", overall: 1.6, student: 1.2, parent: 2.0 },
  { id: 3, name: "Admin Burden", x: 1.8, y: 1.6, category: "medium", overall: 2.1, student: 1.9, parent: 2.3 },
  { id: 4, name: "Peer Collaboration", x: 2.5, y: 2.7, category: "neutral", overall: 3.0, student: 2.8, parent: 3.2 },
  { id: 5, name: "Professional Dev", x: 3.4, y: 3.6, category: "good", overall: 3.7, student: 3.5, parent: 3.9 },
  { id: 6, name: "Curriculum Freedom", x: 4.1, y: 4.0, category: "best", overall: 4.2, student: 4.0, parent: 4.4 },
  { id: 7, name: "School Support", x: 4.7, y: 4.6, category: "best", overall: 4.7, student: 4.5, parent: 4.9 },
]

const GRAPH_TABS = [
  { id: "parents", label: "Parents & student" },
  { id: "teacher", label: "Teacher" },
]

const SchoolPerformPriorityPerform = () => {
  const [activeTab, setActiveTab] = useState("parents")

  const currentChartData = activeTab === "parents" ? PARENT_STUDENT_DATA : TEACHER_DATA

  return (
    <div className="w-full grid grid-cols-1 xlg:grid-cols-12 gap-6 items-stretch">
      {/* Left Reusable Scatter Plot Chart Area */}
      <div className="xlg:col-span-8 flex">
        <ScatterPlot
          title="School Performance Metrics"
          subtitle="Select a metric to view details"
          tabs={GRAPH_TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          data={currentChartData}
          onExpand={() => console.log("Expand chart clicked")}
        />
      </div>

      {/* Right Priority Areas - Pass dynamic type prop based on active tab */}
      <div className="xlg:col-span-4 flex">
        <PrioprityArea type={activeTab === "teacher" ? "teacher" : "school"} />
      </div>
    </div>
  )
}

export default SchoolPerformPriorityPerform