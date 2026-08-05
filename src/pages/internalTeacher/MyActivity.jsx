import React, { useState } from "react"
import MyActivityHeader from "@/components/internalTeacher/myActivity/MyActivityHeader"
import MyPeerObservationsTable from "@/components/internalTeacher/myActivity/MyPeerObservationsTable"
import MySelfReviewsTable from "@/components/internalTeacher/myActivity/MySelfReviewsTable"
import MySchoolReviewsTable from "@/components/internalTeacher/myActivity/MySchoolReviewsTable"
import SafeguardingReportsTable from "@/components/leaderDashboard/safeguarding/SafeguardingReportsTable"
import ReportDetailsModal from "@/components/leaderDashboard/safeguarding/ReportDetailsModal"

const MyActivity = () => {
  const [activeTab, setActiveTab] = useState("reports")
  const [selectedReport, setSelectedReport] = useState(null)

  return (
    <div className="w-full space-y-6 font-urbanist pb-10">
      {/* Top Navigation Pill Tabs */}
      <MyActivityHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab 1: Manage Reports (Reports Assigned to You) */}
      {activeTab === "reports" && (
        <>
          <SafeguardingReportsTable
            title="Reports Assigned to You"
            showStatusTabs={false}
            exportBtnColor="bg-[#70C1FF]"
            onSelectReport={(report) => setSelectedReport(report)}
          />

          {/* Report Details Modal */}
          <ReportDetailsModal
            isOpen={!!selectedReport}
            onClose={() => setSelectedReport(null)}
            report={selectedReport}
            showAssignTo={false}
          />
        </>
      )}

      {/* Tab 2: Peer Observations */}
      {activeTab === "peer" && <MyPeerObservationsTable />}

      {/* Tab 3: Self Reviews */}
      {activeTab === "self" && <MySelfReviewsTable />}

      {/* Tab 4: School Reviews */}
      {activeTab === "school" && <MySchoolReviewsTable />}
    </div>
  )
}

export default MyActivity