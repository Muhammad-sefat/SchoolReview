import React, { useRef, useState } from "react"
import ReportBanner from "@/components/reports/common/ReportBanner"
import ReportFooter from "@/components/reports/common/ReportFooter"
import ExecutiveSummarySection from "@/components/reports/schoolReports/ExecutiveSummarySection"
import SchoolPerformanceSection from "@/components/reports/schoolReports/SchoolPerformanceSection"
import StudentParentExperienceSummaryTable from "@/components/reports/schoolReports/StudentParentExperienceSummaryTable"
import TeacherExperience from "@/components/reports/schoolReports/TeacherExperience"
import TeacherExpSummary from "@/components/reports/schoolReports/TeacherExpSummary"
import PerceptionAlignment from "@/components/reports/schoolReports/PerceptionAlignment"
import SafeGuarding from "@/components/reports/schoolReports/SafeGuarding"
import TeacherEffectiveness from "@/components/reports/schoolReports/TeacherEffectiveness"
import PriorityImprovement from "@/components/reports/schoolReports/PriorityImprovement"
import CategoryOverview from "@/components/reports/schoolReports/CategoryOverview"
import CategoryOverviewTeacher from "@/components/reports/schoolReports/CategoryOverviewTeacher"
import { generatePdfFromReport } from "@/utils/exportPdf"

const SchoolReport = () => {
  const reportRef = useRef(null)
  const [isExporting, setIsExporting] = useState(false)

  const handleDownloadPdf = () => {
    generatePdfFromReport(reportRef, setIsExporting)
  }

  return (
    <div ref={reportRef} className="w-full min-h-screen font-urbanist pb-0 bg-white">
      {/* Top Common Reusable Report Banner with Download PDF Button */}
      <div data-report-page className="w-full">
        <ReportBanner
          title="School Report (2026)"
          name="Dr. Anna Keller"
          designation="Lindenhof Kantonsschule"
          basedOnText="Based on 342 responses"
          breakdownText="Students: 210 • Parents: 92 • Teachers: 40"
          onDownloadPdf={handleDownloadPdf}
          isExporting={isExporting}
        />
      </div>

      {/* Main Content Body with section-padding-x and 64px section gap */}
      <div className="section-padding-x py-12 space-y-[64px]">
        {/* Section 1: Executive Summary */}
        <div data-report-page className="w-full">
          <ExecutiveSummarySection />
        </div>

        {/* Section 2: School Performance */}
        <div data-report-page className="w-full">
          <SchoolPerformanceSection />
        </div>

        {/* Section 3: Student & Parent Experience Summary Table */}
        <div data-report-page className="w-full">
          <StudentParentExperienceSummaryTable />
        </div>

        {/* Section 4: Teacher Experience */}
        <div data-report-page className="w-full">
          <TeacherExperience />
        </div>

        {/* Section 5: Teacher Experience Summary Table */}
        <div data-report-page className="w-full">
          <TeacherExpSummary />
        </div>

        {/* Section 6: Perception Alignment Across Stakeholders */}
        <div data-report-page className="w-full">
          <PerceptionAlignment />
        </div>

        {/* Section 7: Safeguarding */}
        <div data-report-page className="w-full">
          <SafeGuarding />
        </div>

        {/* Section 8: Teaching Effectiveness */}
        <div data-report-page className="w-full">
          <TeacherEffectiveness />
        </div>

        {/* Section 9: Priority Improvement Areas */}
        <div data-report-page className="w-full">
          <PriorityImprovement />
        </div>

        {/* Section 10: Category Overview (Student & Teacher) */}
        <div data-report-page className="w-full">
          <CategoryOverview />
        </div>

        {/* Section 11: Category Overview (Teacher) */}
        <div data-report-page className="w-full">
          <CategoryOverviewTeacher />
        </div>
      </div>

      {/* Reusable Report Footer */}
      <div data-report-page className="w-full">
        <ReportFooter />
      </div>
    </div>
  )
}

export default SchoolReport