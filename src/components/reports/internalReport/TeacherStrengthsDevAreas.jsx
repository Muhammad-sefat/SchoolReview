import React from "react"

const KeyStrengthBulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_11017_170976_report)">
      <path d="M4.06479 9.99739C3.81252 9.43032 3.67188 8.79946 3.67188 8.13466C3.67188 5.66562 5.61198 3.66406 8.00521 3.66406C10.3985 3.66406 12.3385 5.66562 12.3385 8.13466C12.3385 8.79946 12.1979 9.43032 11.9456 9.99739" stroke="white" strokeLinecap="round" />
      <path d="M8 1.33203V1.9987" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6667 8H14" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.99479 8H1.32812" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.7136 3.28516L12.2422 3.75656" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.75266 3.75656L3.28125 3.28516" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.68224 12.8716C10.3558 12.6537 10.626 12.0372 10.702 11.4171C10.7246 11.2318 10.5722 11.0781 10.3856 11.0781L5.65547 11.0783C5.4624 11.0783 5.30735 11.2421 5.3304 11.4338C5.40484 12.0527 5.5927 12.5049 6.30654 12.8716M9.68224 12.8716C9.68224 12.8716 6.42404 12.8716 6.30654 12.8716M9.68224 12.8716C9.60124 14.1683 9.22677 14.6818 8.00877 14.6674C6.70597 14.6915 6.40626 14.0567 6.30654 12.8716" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_11017_170976_report">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const STRENGTHS_LIST = [
  "Students consistently describe lessons as clear and easy to follow, with explanations that help them understand complex topics more confidently.",
  "A strong sense of respect and trust is evident in the classroom, with students feeling comfortable asking questions and participating without hesitation.",
  "Positive teacher–student relationships contribute to high levels of engagement, with many students noting that they feel encouraged and supported in their learning.",
  "The classroom environment is perceived as inclusive and well-managed, enabling students to stay focused and make steady progress throughout lessons.",
]

const DEVELOPMENT_AREAS_LIST = [
  "Some students report that instructions are not always clear at the start of tasks, making it difficult to begin work independently.",
  "Opportunities to check for understanding during lessons could be more consistent to ensure all students are keeping up with the pace.",
  "A number of students would benefit from additional examples or guided practice before moving on to more complex tasks.",
  "Lesson pacing can vary, with some students indicating that more time is needed to fully consolidate learning before progressing.",
]

const TeacherStrengthsDevAreas = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Section Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#038AF9]">
        Key Strengths & Development Areas
      </h2>

      {/* Outer Container with requested class */}
      <div className="bg-[#F6F6F6] p-2 rounded-4xl border border-gray-200/60 font-urbanist w-full max-w-full">
        {/* Inner Content Box - Pure White */}
        <div className="bg-white rounded-3xl overflow-hidden w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">

          {/* Column 1: Key Strengths */}
          <div className="flex flex-col">
            {/* Header Bar with requested border-top, border-bottom, background & title CSS */}
            <div className="border-t border-b border-[#E6F3FE] bg-[#FAFAFA] px-6 py-3.5 flex justify-start items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#038AF9] flex items-center justify-center shrink-0">
                <KeyStrengthBulbIcon />
              </div>
              <h3 className="text-[20px] font-medium text-[#1F1F21] leading-[30px] text-center font-urbanist">
                Key Strengths
              </h3>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1">
              {STRENGTHS_LIST.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300 shrink-0 mt-2" />
                  <p className="text-[15px] sm:text-[16px] font-normal text-textBlack leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Development Areas */}
          <div className="flex flex-col">
            {/* Header Bar with requested border-top, border-bottom, background & title CSS */}
            <div className="border-t border-b border-[#E6F3FE] bg-[#FAFAFA] px-6 py-3.5 flex justify-start items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#FE9A00] flex items-center justify-center shrink-0">
                <CheckIcon />
              </div>
              <h3 className="text-[20px] font-medium text-[#1F1F21] leading-[30px] text-center font-urbanist">
                Development Areas
              </h3>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1">
              {DEVELOPMENT_AREAS_LIST.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300 shrink-0 mt-2" />
                  <p className="text-[15px] sm:text-[16px] font-normal text-textyBlack leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TeacherStrengthsDevAreas
