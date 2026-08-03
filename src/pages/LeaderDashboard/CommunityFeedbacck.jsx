import React, { useState } from "react"
import ExploreFeedbackCard from "@/components/leaderDashboard/communityFeedback/ExploreFeedbackCard"
import CommunityReviewsList from "@/components/leaderDashboard/overview/community/CommunityReviewsList"
import CommunityReviewDetail from "@/components/leaderDashboard/overview/community/CommunityReviewDetail"
import { Title32 } from "../../components/typho/Title"

const CommunityFeedbacck = () => {
    const [selectedReview, setSelectedReview] = useState(null)

    return (
        <div className="w-full space-y-6 font-urbanist  bg-gray-50/20 min-h-screen">
            {/* Page Title (32px font-semibold) */}
            <Title32 className=" text-[#080808] leading-tight">
                Community Feedback
            </Title32>

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