import React from "react"
import { Title24 } from "@/components/typho/Title"
import MySchoolReviewsTable from "@/components/internalTeacher/myActivity/MySchoolReviewsTable"

const MyFeedbackPage = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Page Title & Subtitle */}
      <div className="space-y-1">
        <Title24 className="text-[#080808] font-semibold">My Feedback</Title24>
        <p className="text-[16px] font-normal text-[#5A5A5A]">
          Track your contributions over time.
        </p>
      </div>

      <MySchoolReviewsTable />
    </div>
  )
}

export default MyFeedbackPage
