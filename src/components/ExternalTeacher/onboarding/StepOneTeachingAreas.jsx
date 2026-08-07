import React, { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

const InfoIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9.9974 18.3307C14.5998 18.3307 18.3307 14.5998 18.3307 9.9974C18.3307 5.39502 14.5998 1.66406 9.9974 1.66406C5.39502 1.66406 1.66406 5.39502 1.66406 9.9974C1.66406 14.5998 5.39502 18.3307 9.9974 18.3307Z" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 13.3359V9.58594" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 6.6724V6.66406" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const DotSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
    <circle cx="4" cy="4" r="4" fill="#EAEAEA" />
  </svg>
)

const AlwaysIncludedSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M12.4725 2.32892C11.211 1.70124 9.66727 1.33203 8 1.33203C6.33273 1.33203 4.789 1.70124 3.52744 2.32892C2.90879 2.63674 2.59946 2.79064 2.29973 3.27455C2 3.75846 2 4.22702 2 5.16412V7.4901C2 11.279 5.02824 13.3856 6.782 14.2879C7.27113 14.5396 7.51567 14.6654 8 14.6654C8.48433 14.6654 8.72887 14.5396 9.21793 14.2879C10.9717 13.3856 14 11.279 14 7.4901V5.16412C14 4.22702 14 3.75847 13.7003 3.27455C13.4005 2.79064 13.0912 2.63674 12.4725 2.32892Z" stroke="#080808" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 7.66536C6 7.66536 6.9386 7.8333 7.33333 8.9987C7.33333 8.9987 8.33333 6.9987 10 6.33203" stroke="#080808" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const StepOneTeachingAreas = ({ showTitle = true }) => {
  const [selectedAreas, setSelectedAreas] = useState({
    classroomClimate: false,
    learningImpact: false,
    professionalPractice: false,
  })

  const toggleArea = (key) => {
    setSelectedAreas((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-4 sm:space-y-6 font-urbanist">
      {/* Title */}
      {showTitle && (
        <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold text-[#080808] leading-tight">
          Choose Teaching Areas
        </h1>
      )}

      {/* Info Pill Box */}
      <div
        style={{
          borderRadius: "10px",
          border: "1px solid #B1DBFD",
          background: "rgba(3, 138, 249, 0.04)",
        }}
        className="px-3.5 py-2.5 flex items-center gap-2.5 w-fit max-w-full"
      >
        <InfoIconSVG />
        <span
          style={{
            color: "#080808",
            fontWeight: 400,
          }}
          className="font-urbanist text-sm sm:text-base lg:text-[18px] leading-snug sm:leading-[28px]"
        >
          If multiple areas are selected, questions are rotated to reduce student workload.
        </span>
      </div>

      {/* Main Content Area Box */}
      <div
        style={{ borderRadius: "20px" }}
        className="bg-white border border-[#EAEAEA] p-2 sm:p-4 lg:p-6 space-y-1 sm:space-y-2 shadow-xs"
      >
        {/* Row 1: Classroom Climate */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center p-4 sm:p-6 rounded-2xl bg-white hover:bg-gray-50/60 transition-colors">
          <div className="md:col-span-5 flex items-center gap-3">
            <Checkbox
              id="classroomClimate"
              checked={selectedAreas.classroomClimate}
              onCheckedChange={() => toggleArea("classroomClimate")}
              className="w-5 h-5 rounded-md border-gray-300 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9]"
            />
            <label
              htmlFor="classroomClimate"
              className="text-base sm:text-[18px] font-medium text-[#080808] cursor-pointer flex items-center gap-2"
            >
              Classroom Climate
              <span className="w-4 h-4 rounded-full border border-gray-400 text-gray-500 text-xs flex items-center justify-center">
                i
              </span>
            </label>
          </div>
          <div className="md:col-span-7 text-base sm:text-[18px] font-normal text-[#080808] flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <span>Classroom Safety</span>
            <DotSVG />
            <span>Student Wellbeing</span>
          </div>
        </div>

        {/* Row 2: Learning Impact with border-top & border-bottom #E6F3FE */}
        <div
          style={{ borderTop: "1px solid #E6F3FE", borderBottom: "1px solid #E6F3FE" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center p-4 sm:p-6 rounded-2xl transition-colors"
        >
          <div className="md:col-span-5 flex items-center gap-3">
            <Checkbox
              id="learningImpact"
              checked={selectedAreas.learningImpact}
              onCheckedChange={() => toggleArea("learningImpact")}
              className="w-5 h-5 rounded-md border-gray-300 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9]"
            />
            <label
              htmlFor="learningImpact"
              className="text-base sm:text-[18px] font-medium text-[#080808] cursor-pointer"
            >
              Learning Impact
            </label>
          </div>
          <div className="md:col-span-7 text-base sm:text-[18px] font-normal text-[#080808] flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <span>Understanding</span>
            <DotSVG />
            <span>Progress</span>
            <DotSVG />
            <span>Confidence</span>
          </div>
        </div>

        {/* Row 3: Professional Practice */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center p-4 sm:p-6 rounded-2xl bg-white hover:bg-gray-50/60 transition-colors">
          <div className="md:col-span-5 flex items-center gap-3">
            <Checkbox
              id="professionalPractice"
              checked={selectedAreas.professionalPractice}
              onCheckedChange={() => toggleArea("professionalPractice")}
              className="w-5 h-5 rounded-md border-gray-300 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9]"
            />
            <label
              htmlFor="professionalPractice"
              className="text-base sm:text-[18px] font-medium text-[#080808] cursor-pointer"
            >
              Professional Practice
            </label>
          </div>
          <div className="md:col-span-7 text-base sm:text-[18px] font-normal text-[#080808] flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <span>Lesson Coherence</span>
            <DotSVG />
            <span>Meaningful Assessment</span>
            <DotSVG />
            <span>Adaptive Teaching</span>
            <DotSVG />
            <span>Ongoing Improvement</span>
          </div>
        </div>

        {/* Row 4: Teaching Quality (Always Included) with border-top & border-bottom #E6F3FE */}
        <div
          style={{ borderTop: "1px solid #E6F3FE", borderBottom: "1px solid #E6F3FE" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center p-4 sm:p-6 rounded-2xl transition-colors"
        >
          <div className="md:col-span-5 flex items-center gap-3">
            <span className="text-base sm:text-[18px] font-medium text-[#080808]">
              Teaching Quality
            </span>
            <div
              style={{ borderRadius: "104px", background: "#F7F7F7" }}
              className="px-3 py-1 inline-flex items-center gap-1.5 shrink-0"
            >
              <AlwaysIncludedSVG />
              <span className="text-xs sm:text-[14px] font-normal text-[#080808]">
                Always Included
              </span>
            </div>
          </div>
          <div className="md:col-span-7 text-base sm:text-[18px] font-normal text-[#080808] flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <span>Clarity</span>
            <DotSVG />
            <span>Purpose</span>
            <DotSVG />
            <span>Progression</span>
            <DotSVG />
            <span>Challenge</span>
            <DotSVG />
            <span>Engagement</span>
            <DotSVG />
            <span>Feedback</span>
          </div>
        </div>

        {/* Row 5: Learning Environment (Always Included) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center p-4 sm:p-6 rounded-2xl bg-white hover:bg-gray-50/60 transition-colors">
          <div className="md:col-span-5 flex items-center gap-3">
            <span className="text-base sm:text-[18px] font-medium text-[#080808]">
              Learning Environment
            </span>
            <div
              style={{ borderRadius: "104px", background: "#F7F7F7" }}
              className="px-3 py-1 inline-flex items-center gap-1.5 shrink-0"
            >
              <AlwaysIncludedSVG />
              <span className="text-xs sm:text-[14px] font-normal text-[#080808]">
                Always Included
              </span>
            </div>
          </div>
          <div className="md:col-span-7 text-base sm:text-[18px] font-normal text-[#080808] flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <span>Pace</span>
            <DotSVG />
            <span>Support</span>
            <DotSVG />
            <span>Dialogue</span>
            <DotSVG />
            <span>Fairness</span>
            <DotSVG />
            <span>Inclusion</span>
            <DotSVG />
            <span>Behaviour</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StepOneTeachingAreas
