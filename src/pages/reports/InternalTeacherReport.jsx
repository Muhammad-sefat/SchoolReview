import React, { useRef, useState } from "react"
import ReportBanner from "@/components/reports/common/ReportBanner"
import ReportFooter from "@/components/reports/common/ReportFooter"
import TeacherExecutiveSummary from "@/components/reports/internalReport/TeacherExecutiveSummary"
import TeacherStrengthsDevAreas from "@/components/reports/internalReport/TeacherStrengthsDevAreas"
import TeacherEffectivenessSection from "@/components/reports/internalReport/TeacherEffectivenessSection"
import ClassroomInsightsReportSection from "@/components/reports/internalReport/ClassroomInsightsReportSection"
import StudentImpactSection from "@/components/reports/internalReport/StudentImpactSection"
import { generatePdfFromReport } from "@/utils/exportPdf"

const InternalTeacherReport = () => {
  const reportRef = useRef(null)
  const [isExporting, setIsExporting] = useState(false)

  const handleDownloadPdf = () => {
    generatePdfFromReport(reportRef, setIsExporting)
  }

  return (
    <div ref={reportRef} className="w-full min-h-screen font-urbanist pb-0 bg-white">
      {/* Top Common Reusable Report Banner */}
      <div data-report-page className="w-full">
        <ReportBanner
          title="Teaching Report (2026)"
          name="Ms. Anna Keller"
          designation="Lindenhof Kantonsschule"
          basedOnText="Based on 210 responses"
          breakdownText="Students: 210 • Observer: <Observer name>"
          onDownloadPdf={handleDownloadPdf}
          isExporting={isExporting}
        />
      </div>

      {/* Main Content Body with section-padding-x and 64px section gap */}
      <div className="section-padding-x py-12 space-y-[64px]">
        {/* Section 1: Executive Summary */}
        <div data-report-page className="w-full">
          <TeacherExecutiveSummary />
        </div>

        {/* Section 2: Key Strengths & Development Areas */}
        <div data-report-page className="w-full">
          <TeacherStrengthsDevAreas />
        </div>

        {/* Section 3: Teaching Effectiveness */}
        <div data-report-page className="w-full">
          <TeacherEffectivenessSection />
        </div>

        {/* Section 5: Student Impact */}
        <div data-report-page className="w-full">
          <StudentImpactSection />
        </div>

        {/* Section 4: Your Classroom Insights (All 5 Categories sequentially with outer containers) */}
        <div data-report-page className="w-full">
          <ClassroomInsightsReportSection />
        </div>


      </div>

      {/* Footer Component */}
      <div data-report-page className="w-full">
        <ReportFooter />
      </div>
    </div>
  )
}

export default InternalTeacherReport