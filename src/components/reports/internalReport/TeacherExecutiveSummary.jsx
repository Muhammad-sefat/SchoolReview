import React from "react"

const TeacherExecutiveSummary = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#038AF9]">
        Executive Summary
      </h2>
      <div className="text-[16px] sm:text-[18px] font-normal text-textPrimary leading-relaxed space-y-4 max-w-full">
        <p>
          Teaching is well-structured, and lessons typically follow a clear sequence. Students are generally engaged and able to participate meaningfully in activities. At times, however, there is some variation in how clearly learning objectives and expectations are communicated, which can affect consistency in student understanding.
        </p>
        <p>
          Assessment practices are appropriate and aligned with lesson content, though there is an opportunity to further strengthen clarity around feedback and how students can improve their work.
        </p>
        <p>
          Overall, teaching is effective, with clear strengths in relationships and classroom climate. Continued focus on instructional clarity and consistency will further enhance student learning outcomes.
        </p>
      </div>
    </div>
  )
}

export default TeacherExecutiveSummary
