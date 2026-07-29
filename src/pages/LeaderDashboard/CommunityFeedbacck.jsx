import React, { useState } from "react"
import ExploreFeedbackCard from "@/components/leaderDashboard/communityFeedback/ExploreFeedbackCard"
import CommunityReviewsList from "@/components/leaderDashboard/overview/community/CommunityReviewsList"
import CommunityReviewDetail from "@/components/leaderDashboard/overview/community/CommunityReviewDetail"

const CommunityFeedbacck = () => {
    const [selectedReview, setSelectedReview] = useState(null)

    return (
        <div className="w-full space-y-6 font-urbanist  bg-gray-50/20 min-h-screen">
            {/* Page Title (32px font-semibold) */}
            <h1 className="text-[32px] font-semibold text-[#080808] leading-tight">
                Community Feedback
            </h1>

            {/* Top Card: Explore Feedback by Category */}
            <ExploreFeedbackCard />

            {/* Bottom Section: Community Reviews List (5 Cols) + Review Detail (7 Cols) */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left Reviews List */}
                <div className="lg:col-span-4 flex flex-col min-w-0">
                    <CommunityReviewsList
                        selectedReview={selectedReview}
                        onSelectReview={setSelectedReview}
                    />
                </div>

                {/* Right Review Detail & Response */}
                <div className="lg:col-span-8 flex flex-col min-w-0">
                    <CommunityReviewDetail selectedReview={selectedReview} />
                </div>
            </div>
        </div>
    )
}

export default CommunityFeedbacck