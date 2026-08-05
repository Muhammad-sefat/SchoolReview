import React from "react"
import TeacherMetricsRow from "@/components/internalTeacher/teacherInsight/overview/TeacherMetricsRow"
import TeacherPerformanceScatter from "@/components/internalTeacher/teacherInsight/overview/TeacherPerformanceScatter"

const SmallStarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.12074 1.97025C7.55734 1.1219 8.7812 1.1219 9.2178 1.97025L10.6888 4.82887C10.7132 4.8763 10.7591 4.90932 10.8121 4.91769L14.0097 5.42202C14.9581 5.5716 15.336 6.72252 14.6578 7.39598L12.3687 9.66898C12.3308 9.70665 12.3133 9.75992 12.3217 9.81245L12.8263 12.9848C12.9758 13.925 11.9859 14.6366 11.1296 14.2046L8.2456 12.7496C8.19767 12.7254 8.14087 12.7254 8.09294 12.7496L5.20896 14.2046C4.35264 14.6366 3.36276 13.925 3.51229 12.9848L4.01683 9.81245C4.02518 9.75992 4.00771 9.70665 3.9698 9.66898L1.68072 7.39598C1.00256 6.72252 1.38048 5.5716 2.32888 5.42202L5.52638 4.91769C5.57947 4.90932 5.62532 4.8763 5.64973 4.82887L7.12074 1.97025Z"
      fill="white"
    />
  </svg>
)

const TeacherEffectivenessSection = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#038AF9]">
          Teaching Effectiveness
        </h2>
        <p className=" sm:text-[20px] text-base font-normal text-textBlack">
          A clear overview of teaching effectiveness, highlighting strengths, development areas, and where targeted support can improve student experience.
        </p>
      </div>

      {/* Teaching Rating Badge Pill */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="bg-white border border-gray-200/90 rounded-full px-5 py-2 flex items-center gap-2.5 shadow-2xs">
          <span className="text-[16px] font-normal text-[#080808]">Teaching Rating</span>
          <span className="bg-[#038AF9] text-white text-[14px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
            4.5 <SmallStarIcon />
          </span>
        </div>

        <div className="bg-[#E8F8EE] border border-[#66BB6A]/30 text-[#66BB6A] text-[16px] font-semibold px-5 py-2 rounded-full">
          Highly Effective
        </div>
      </div>

      {/* Section Box 1: Key Metrics, Learning Impact & Teaching Quality Graph */}
      <div className="bg-[#F6F6F6] p-2 rounded-4xl border border-gray-200/60 font-urbanist w-full max-w-full">
        <TeacherMetricsRow />
      </div>

      {/* Section Box 2: Teaching Metrics Scatter Plot & Priority Areas */}
      <div className="bg-[#F6F6F6] p-2 rounded-4xl border border-gray-200/60 font-urbanist w-full max-w-full">
        <TeacherPerformanceScatter />
      </div>
    </div>
  )
}

export default TeacherEffectivenessSection
