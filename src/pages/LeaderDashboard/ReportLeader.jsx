import React, { useState } from "react"
import TopCardsSection from "@/components/leaderDashboard/report/TopCardsSection"
import PreviousSchoolReportsTable from "@/components/leaderDashboard/report/PreviousSchoolReportsTable"
import ExecutiveSummaryModal from "@/components/leaderDashboard/report/ExecutiveSummaryModal"
import { Title32 } from "../../components/typho/Title"

const ReportLeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="w-full space-y-6 font-urbanist  bg-gray-50/20 min-h-screen">
            {/* Page Main Title (32px font-semibold) */}
            <Title32 className=" text-[#080808] leading-tight">
                360 School Insight Report
            </Title32>

            {/* Top 3 Cards Section */}
            <TopCardsSection onOpenModal={() => setIsModalOpen(true)} />

            {/* Previous School Reports Table Section */}
            <PreviousSchoolReportsTable onOpenModal={() => setIsModalOpen(true)} />

            {/* Executive Summary Modal */}
            <ExecutiveSummaryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default ReportLeader