import React, { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const IMPROVEMENT_DATA = {
  parents: [
    "Improve communication with parents about student progress and wellbeing",
    "Provide clearer updates on school policies and behaviour expectations",
    "Increase opportunities for parents to provide feedback on school climate",
  ],
  teachers: [
    "Enhance professional development workshops for differentiated instruction",
    "Streamline administrative reporting tools for weekly lessons",
    "Establish regular feedback channels for department heads",
  ],
  students: [
    "Expand extra-curricular learning activities and sports clubs",
    "Improve student council involvement in school decision making",
    "Provide additional guidance for college and career readiness",
  ],
}

const KeyImprovementAreas = () => {
  const [activeTab, setActiveTab] = useState("parents")

  const currentList = IMPROVEMENT_DATA[activeTab] || IMPROVEMENT_DATA.parents

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808] leading-snug">
          Key Improvement Areas
        </h3>

        {/* Expand Action Button */}
        <button
          type="button"
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer shrink-0"
          title="Expand key areas"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15.1075 12.5444C15.1075 12.9179 14.8101 13.2015 14.478 13.2015C14.1391 13.2015 13.8555 12.8971 13.8555 12.572V10.0126L13.98 6.78223L12.8386 8.07577L5.96973 14.9377C5.84521 15.0692 5.69303 15.1245 5.53394 15.1245C5.18807 15.1245 4.89062 14.8132 4.89062 14.4812C4.89062 14.329 4.9598 14.1699 5.08431 14.0454L11.9394 7.17651L13.226 6.04899L9.85034 6.15967H7.44312C7.118 6.15967 6.82056 5.87606 6.82056 5.54403C6.82056 5.212 7.08341 4.91455 7.47078 4.91455H14.4296C14.8446 4.91455 15.1006 5.19124 15.1006 5.58553L15.1075 12.5444Z" fill="#080808" />
          </svg>
        </button>
      </div>

      {/* 3 Tabs Header: Parents | Teachers | Students */}
      <div className="border-b border-gray-100 flex items-center gap-6 mb-4">
        <button
          type="button"
          onClick={() => setActiveTab("parents")}
          className={`pb-2.5 text-sm sm:text-lg font-medium transition-all cursor-pointer relative ${activeTab === "parents"
            ? "text-[#038AF9] font-semibold"
            : "text-textPrimary hover:text-[#1F1F21]"
            }`}
        >
          Parents
          {activeTab === "parents" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#038AF9] rounded-full" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("teachers")}
          className={`pb-2.5 text-sm sm:text-lg font-medium transition-all cursor-pointer relative ${activeTab === "teachers"
            ? "text-[#038AF9] font-semibold"
            : "text-textPrimary hover:text-[#1F1F21]"
            }`}
        >
          Teachers
          {activeTab === "teachers" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#038AF9] rounded-full" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("students")}
          className={`pb-2.5 text-sm sm:text-lg font-medium transition-all cursor-pointer relative ${activeTab === "students"
            ? "text-[#038AF9] font-semibold"
            : "text-textPrimary hover:text-[#1F1F21]"
            }`}
        >
          Students
          {activeTab === "students" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#038AF9] rounded-full" />
          )}
        </button>
      </div>

      {/* Bullet List Content */}
      <ul className="space-y-3 flex-1 flex flex-col justify-around py-1">
        {currentList.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm sm:text-lg text-textPrimary leading-relaxed">
            {/* Gray Bullet Dot */}
            <span className="w-3 h-3 rounded-lg bg-[#EAEAEA]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default KeyImprovementAreas
