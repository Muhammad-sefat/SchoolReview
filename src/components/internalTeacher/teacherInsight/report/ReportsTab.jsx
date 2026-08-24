import React, { useState } from "react"
import TeacherTopCardsSection from "./TeacherTopCardsSection"
import TeacherPreviousReportsTable from "./TeacherPreviousReportsTable"
import ExecutiveSummaryModal from "@/components/leaderDashboard/report/ExecutiveSummaryModal"

const ReportsTab = ({ reports, onDownloadReport }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Top 3 Cards & Page Header Section */}
      <TeacherTopCardsSection onOpenModal={() => setIsModalOpen(true)} />

      {/* Previous Reports Table Section with ALL download icons */}
      <TeacherPreviousReportsTable
        reports={reports}
        onDownload={onDownloadReport}
      />

      {/* Executive Summary Modal */}
      <ExecutiveSummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default ReportsTab
