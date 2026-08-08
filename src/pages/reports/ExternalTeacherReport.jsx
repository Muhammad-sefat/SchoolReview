import React, { useRef, useState } from "react"
import ReportBanner from "@/components/reports/common/ReportBanner"
import ReportFooter from "@/components/reports/common/ReportFooter"
import TeacherExecutiveSummary from "@/components/reports/internalReport/TeacherExecutiveSummary"
import TeacherStrengthsDevAreas from "@/components/reports/internalReport/TeacherStrengthsDevAreas"
import TeacherEffectivenessSection from "@/components/reports/internalReport/TeacherEffectivenessSection"
import ClassroomInsightsReportSection from "@/components/reports/internalReport/ClassroomInsightsReportSection"
import StudentImpactSection from "@/components/reports/internalReport/StudentImpactSection"
import { generatePdfFromReport } from "@/utils/exportPdf"

const ExternalTeacherReport = ({ data }) => {
  const reportRef = useRef(null)
  const [isExporting, setIsExporting] = useState(false)

  const handleDownloadPdf = () => {
    generatePdfFromReport(reportRef, setIsExporting)
  }

  const title = data?.title || "Teaching Report (2026)"
  const name = data?.name || "Ms. Anna Keller"
  const designation = data?.designation || "Lindenhof Kantonsschule"
  const basedOnText = data?.basedOnText || "Based on 210 responses"
  const breakdownText = data?.breakdownText || "Students: 210 • Observer: <Observer name>"

  return (
    <div ref={reportRef} className="w-full min-h-screen font-urbanist pb-0 bg-white">
      {/* Top Common Reusable Report Banner */}
      <div data-report-page className="w-full">
        <ReportBanner
          title={title}
          name={name}
          designation={designation}
          basedOnText={basedOnText}
          breakdownText={breakdownText}
          onDownloadPdf={handleDownloadPdf}
          isExporting={isExporting}
        />
      </div>

      {/* Main Content Body with section-padding-x and 64px section gap */}
      <div className="section-padding-x py-12 space-y-[64px]">
        {/* Section 1: Executive Summary */}
        <div data-report-page className="w-full">
          <TeacherExecutiveSummary data={data?.executiveSummary} />
        </div>

        {/* Section 2: Key Strengths & Development Areas */}
        <div data-report-page className="w-full">
          <TeacherStrengthsDevAreas data={data?.strengthsDev} />
        </div>

        {/* Section 3: Teaching Effectiveness */}
        <div data-report-page className="w-full">
          <TeacherEffectivenessSection data={data?.effectiveness} />
        </div>

        {/* Section 4: Student Impact */}
        <div data-report-page className="w-full">
          <StudentImpactSection data={data?.studentImpact} />
        </div>

        {/* Section 5: Your Classroom Insights */}
        <div data-report-page className="w-full">
          <ClassroomInsightsReportSection data={data?.classroomInsights} />
        </div>
      </div>

      {/* Footer Component */}
      <div data-report-page className="w-full">
        <ReportFooter />
      </div>
    </div>
  )
}

export default ExternalTeacherReport