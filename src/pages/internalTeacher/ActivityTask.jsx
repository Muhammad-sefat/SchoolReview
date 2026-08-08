import React, { useState } from "react"
import ActiveTaskHeader from "@/components/internalTeacher/activeTask/ActiveTaskHeader"
import PeerObservationsTable from "@/components/internalTeacher/activeTask/PeerObservationsTable"
import SelfReviewCard from "@/components/internalTeacher/activeTask/SelfReviewCard"
import SchoolReviewCard from "@/components/internalTeacher/activeTask/SchoolReviewCard"
import SafeguardingReportsTable from "@/components/leaderDashboard/safeguarding/SafeguardingReportsTable"
import ReportDetailsModal from "@/components/leaderDashboard/safeguarding/ReportDetailsModal"

const ActivityTask = () => {
  const [activeTab, setActiveTab] = useState("reports")
  const [selectedReport, setSelectedReport] = useState(null)

  return (
    <div className="w-full space-y-6 font-urbanist pb-10">
      {/* Top Header Pill Tabs */}
      <ActiveTaskHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab 1: Manage Reports (Assigned Reports) */}
      {activeTab === "reports" && (
        <>
          <SafeguardingReportsTable
            title="Assigned Reports"
            subtitle="Review and manage safeguarding reports assigned to you."
            showStatusTabs={false}
            exportBtnColor="bg-[#70C1FF]"
            onSelectReport={(report) => setSelectedReport(report)}
          />

          {/* Report Details Modal reused from Safeguarding */}
          <ReportDetailsModal
            isOpen={!!selectedReport}
            onClose={() => setSelectedReport(null)}
            report={selectedReport}
            showAssignTo={false}
          />
        </>
      )}

      {/* Tab 2: Peer Observations */}
      {activeTab === "peer" && <PeerObservationsTable />}

      {/* Tab 3: Self Review */}
      {activeTab === "self" && <SelfReviewCard />}

      {/* Tab 4: School Review */}
      {activeTab === "school" && <SchoolReviewCard />}
    </div>
  )
}

export default ActivityTask