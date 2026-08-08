import React, { useState } from "react"
import TeacherInsightHeader from "@/components/internalTeacher/teacherInsight/TeacherInsightHeader"
import StrengthsDevAreas from "@/components/internalTeacher/teacherInsight/overview/StrengthsDevAreas"
import TeacherMetricsRow from "@/components/internalTeacher/teacherInsight/overview/TeacherMetricsRow"
import TeacherPerformanceScatter from "@/components/internalTeacher/teacherInsight/overview/TeacherPerformanceScatter"

import ClassroomInsightsTab from "@/components/internalTeacher/teacherInsight/classroomInsight/ClassroomInsightsTab"
import ReviewInsightsTab from "@/components/internalTeacher/teacherInsight/ReviewInsight/ReviewInsightsTab"
import ReportsTab from "@/components/internalTeacher/teacherInsight/report/ReportsTab"

const ExternalTeachingInsight = ({ data }) => {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedYear, setSelectedYear] = useState("current")

  return (
    <div className="w-full space-y-6 font-urbanist pb-8">
      {/* Top Tabs & Year Filter Header */}
      <TeacherInsightHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
      />

      {/* Tab Content Display */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* First Row: 50/50 Grid (Strengths vs Development Areas) */}
          <StrengthsDevAreas data={data?.strengthsDev} />

          {/* Second Row: 3 Side-by-Side Cards (Key Metrics, Learning Impact, Teaching Quality) */}
          <TeacherMetricsRow data={data?.metrics} />

          {/* Third Row: Scatter Plot & Priority Areas */}
          <TeacherPerformanceScatter data={data?.scatter} />
        </div>
      )}

      {activeTab === "classroom-insights" && <ClassroomInsightsTab data={data?.classroom} />}

      {activeTab === "review-insights" && <ReviewInsightsTab data={data?.review} />}

      {activeTab === "reports" && <ReportsTab data={data?.reports} />}
    </div>
  )
}

export default ExternalTeachingInsight
