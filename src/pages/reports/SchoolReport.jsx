import React from "react"
import ReportBanner from "@/components/reports/common/ReportBanner"
import ExecutiveSummarySection from "@/components/reports/schoolReports/ExecutiveSummarySection"
import SchoolPerformanceSection from "@/components/reports/schoolReports/SchoolPerformanceSection"
import StudentParentExperienceSummaryTable from "@/components/reports/schoolReports/StudentParentExperienceSummaryTable"
import TeacherExperience from "@/components/reports/schoolReports/TeacherExperience"
import TeacherExpSummary from "@/components/reports/schoolReports/TeacherExpSummary"
import PerceptionAlignment from "@/components/reports/schoolReports/PerceptionAlignment"
import SafeGuarding from "@/components/reports/schoolReports/SafeGuarding"
import TeacherEffectiveness from "@/components/reports/schoolReports/TeacherEffectiveness"

const SchoolReport = () => {
  return (
    <div className="w-full min-h-screen font-urbanist pb-16">
      {/* Top Common Reusable Report Banner */}
      <ReportBanner
        title="School Report (2026)"
        name="Dr. Anna Keller"
        designation="Lindenhof Kantonsschule"
        basedOnText="Based on 342 responses"
        breakdownText="Students: 210 • Parents: 92 • Teachers: 40"
      />

      {/* Main Content Body with section-padding-x and 40px section gap */}
      <div className="section-padding-x py-10 space-y-[40px]">
        {/* Section 1: Executive Summary */}
        <ExecutiveSummarySection />

        {/* Section 2: School Performance */}
        <SchoolPerformanceSection />

        {/* Section 3: Student & Parent Experience Summary Table */}
        <StudentParentExperienceSummaryTable />

        {/* Section 4: Teacher Experience */}
        <TeacherExperience />

        {/* Section 5: Teacher Experience Summary Table */}
        <TeacherExpSummary />

        {/* Section 6: Perception Alignment Across Stakeholders */}
        <PerceptionAlignment />

        {/* Section 7: Safeguarding */}
        <SafeGuarding />

        {/* Section 8: Teaching Effectiveness */}
        <TeacherEffectiveness />
      </div>
    </div>
  )
}

export default SchoolReport