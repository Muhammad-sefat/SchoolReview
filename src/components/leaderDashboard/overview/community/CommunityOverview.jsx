import React, { useState } from "react"
import CommunityReviewsList from "./CommunityReviewsList"
import CommunityReviewDetail from "./CommunityReviewDetail"
import DiscoveryCallRequests from "./DiscoveryCallRequests"
import KeyMetricsCard from "../KeyMetricsCard"

const COMMUNITY_KEY_METRICS = [
  {
    id: "communication",
    label: "School Communication",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "engagement",
    label: "Parent Engagement",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "student-voice",
    label: "Student Voice",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "feedback-quality",
    label: "Feedback Quality",
    percentage: 40,
    trend: "9%",
    isUp: false,
    barColor: "bg-[#E53935]",
  },
]

const CommunityOverview = () => {
  const [selectedReview, setSelectedReview] = useState({
    id: 1,
    title: "Great teachers, but workload can be challenging",
    rating: 4.5,
    role: "Parent",
    date: "Sept 2026",
    isRecommended: true,
    fullReview:
      "The academic standards and teaching quality at this school are exceptional. Teachers are genuinely dedicated to student growth and offer excellent support. However, homework load and project deadlines can occasionally cause unnecessary stress for students.",
  })

  return (
    <div className="w-full space-y-6">
      {/* Top Section: Community Reviews List (5 Cols) + Review Detail & AI Response (7 Cols) */}
      <div className="w-full grid grid-cols-1 xlg:grid-cols-12 gap-6 items-stretch">
        {/* Left Reviews List */}
        <div className="xlg:col-span-4 flex flex-col min-w-0">
          <CommunityReviewsList
            selectedReviewId={selectedReview ? selectedReview.id : 1}
            onSelectReview={setSelectedReview}
          />
        </div>

        {/* Right Review Detail & School Response */}
        <div className="xlg:col-span-8 flex flex-col min-w-0">
          <CommunityReviewDetail selectedReview={selectedReview} />
        </div>
      </div>

      {/* Bottom Section: Discovery Call Requests (8 Cols) + Key Metrics (4 Cols) */}
      <div className="w-full grid grid-cols-1 xlg:grid-cols-12 gap-6 items-stretch min-w-0">
        {/* Left Discovery Call Requests Swiper */}
        <div className="xlg:col-span-8 flex flex-col min-w-0">
          <DiscoveryCallRequests />
        </div>

        {/* Right Community Key Metrics */}
        <div className="xlg:col-span-4 flex flex-col min-w-0">
          <KeyMetricsCard title="Key Metrics" metrics={COMMUNITY_KEY_METRICS} />
        </div>
      </div>
    </div>
  )
}

export default CommunityOverview
