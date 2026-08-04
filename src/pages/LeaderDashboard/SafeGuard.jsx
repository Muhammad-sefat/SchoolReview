import React, { useState } from "react"
import BubbleTimelineChart from "../../components/graphCharts/BubbleTimelineChart"
import SafeguardingCategoryInsights from "../../components/leaderDashboard/overview/safety/SafeguardingCategoryInsights"
import SafeguardingReportsTable from "../../components/leaderDashboard/safeguarding/SafeguardingReportsTable"
import ReportDetailsModal from "../../components/leaderDashboard/safeguarding/ReportDetailsModal"

// Key Metrics View Components
import KeyMetricsCard from "../../components/leaderDashboard/overview/KeyMetricsCard"
import RadialProgressChart from "../../components/graphCharts/RadialProgressChart"
import StudentSafetySignals from "../../components/leaderDashboard/overview/teacherOverview/StudentSafetySignals"

const SAFETY_KEY_METRICS = [
  {
    id: "student-safety",
    label: "Student Safety",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "bullying-fairness",
    label: "Bullying & Fairness",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "belonging",
    label: "Sense of Belonging",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "respect",
    label: "Student Respect",
    percentage: 40,
    trend: "9%",
    isUp: false,
    barColor: "bg-[#E53935]",
  },
]

const SafeGuard = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedCategory, setSelectedCategory] = useState("bullying")
  const [activeReportDetail, setActiveReportDetail] = useState(null)

  return (
    <div className="w-full space-y-6 pb-8">
      {/* Top Header Filter Pill Bar */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className={`px-5 py-2.5 rounded-full text-sm sm:text-lg font-normal  transition-all cursor-pointer ${activeTab === "overview"
            ? "bg-[#038AF9] text-white shadow-xs font-semibold"
            : "bg-white border border-gray-200 text-textPrimary hover:border-gray-300"
            }`}
        >
          Overview
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("metrics")}
          className={`px-5 py-2.5 rounded-full text-sm sm:text-lg font-normal  transition-all cursor-pointer ${activeTab === "metrics"
            ? "bg-[#038AF9] text-white shadow-xs font-semibold"
            : "bg-white border border-gray-200 text-textPrimary hover:border-gray-300"
            }`}
        >
          Key Metrics
        </button>
      </div>

      {/* Conditional Content by Active Tab */}
      {activeTab === "overview" ? (
        <div className="space-y-6">
          {/* Top Row: Bubble Timeline Chart + Category Insights */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch min-w-0">
            <div className="lg:col-span-7 flex flex-col min-w-0">
              <BubbleTimelineChart
                title="Safeguarding Reports"
                subtitle="Select a category to view details."
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                showRightBadge={false}
              />
            </div>

            <div className="lg:col-span-5 flex flex-col min-w-0">
              <SafeguardingCategoryInsights
                selectedCategoryId={selectedCategory}
              />
            </div>
          </div>

          {/* Second Row: Reports Table (Image 1) */}
          <SafeguardingReportsTable
            onSelectReport={(report) => setActiveReportDetail(report)}
          />
        </div>
      ) : (
        /* Key Metrics Tab View (Image 4) */
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch min-w-0">
          <div className="flex flex-col min-w-0">
            <KeyMetricsCard
              title="Key Metrics"
              metrics={SAFETY_KEY_METRICS}
            />
          </div>

          <div className="flex flex-col min-w-0">
            <RadialProgressChart
              title="Annual Safety Reports Overview"
              centerNumber={48}
              avgResolutionTime="4.5 Day"
              resolvedReportsCount={12}
            />
          </div>

          <div className="flex flex-col min-w-0">
            <StudentSafetySignals enabled={true} />
          </div>
        </div>
      )}

      {/* Report Details Modal */}
      {activeReportDetail && (
        <ReportDetailsModal
          report={activeReportDetail}
          onClose={() => setActiveReportDetail(null)}
        />
      )}
    </div>
  )
}

export default SafeGuard