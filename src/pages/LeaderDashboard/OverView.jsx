import React, { useState } from "react"
import OverviewHeader from "../../components/leaderDashboard/overview/OverviewHeader"
import SchoolPerformPriorityPerform from "../../components/leaderDashboard/overview/SchoolPerformPriorityPerform"
import KeyArea from "../../components/leaderDashboard/overview/KeyArea"
import TeacherOverview from "../../components/leaderDashboard/overview/teacherOverview/TeacherOverview"
import SafetyOverview from "../../components/leaderDashboard/overview/safety/SafetyOverview"

const OverView = () => {
  const [activeCategory, setActiveCategory] = useState("school")

  return (
    <div className="w-full space-y-6 pb-8">
      {/* Top Filter Bar & Summary Scores */}
      <OverviewHeader
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Dynamic View switching based on active tab */}
      {activeCategory === "teacher" ? (
        <TeacherOverview />
      ) : activeCategory === "safety" ? (
        <SafetyOverview />
      ) : (
        <>
          {/* Middle Grid: School Performance Metrics Scatter Plot + Priority Areas */}
          <SchoolPerformPriorityPerform />

          {/* Bottom Grid: Key Improvement Areas + Key Metrics */}
          <KeyArea />
        </>
      )}
    </div>
  )
}

export default OverView