import React from "react"
import { Title32 } from "@/components/typho/Title"
import WhatStudentsAppreciate from "@/components/internalTeacher/studentFeedback/WhatStudentsAppreciate"
import StudentRecognitionSlider from "@/components/internalTeacher/studentFeedback/StudentRecognitionSlider"
import FeedbackSuggestionsSlider from "@/components/internalTeacher/studentFeedback/FeedbackSuggestionsSlider"

const ExternalStudentFeedback = ({ data }) => {
  return (
    <div className="w-full space-y-6 font-urbanist pb-10">
      {/* Top Header */}
      <div className="space-y-1">
        <Title32 className="text-[#080808] leading-tight">
          Student Feedback
        </Title32>
        <p className="text-[18px] font-normal text-textPrimary">
          Student feedback with AI-supported suggestions to help improve teaching.
        </p>
      </div>


      {/* Row 2: Student Recognition Carousel */}
      <StudentRecognitionSlider data={data?.recognition} />

      {/* Row 3: Feedback Suggestions Carousel */}
      <FeedbackSuggestionsSlider data={data?.suggestions} />


      {/* Row 1: What Students Appreciate About You */}
      <WhatStudentsAppreciate data={data?.appreciate} />
    </div>
  )
}

export default ExternalStudentFeedback
