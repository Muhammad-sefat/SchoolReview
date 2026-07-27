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
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* 3 Tabs Header: Parents | Teachers | Students */}
      <div className="border-b border-gray-100 flex items-center gap-6 mb-4">
        <button
          type="button"
          onClick={() => setActiveTab("parents")}
          className={`pb-2.5 text-xs sm:text-sm font-medium transition-all cursor-pointer relative ${
            activeTab === "parents"
              ? "text-[#038AF9] font-semibold"
              : "text-[#5A5A5A] hover:text-[#1F1F21]"
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
          className={`pb-2.5 text-xs sm:text-sm font-medium transition-all cursor-pointer relative ${
            activeTab === "teachers"
              ? "text-[#038AF9] font-semibold"
              : "text-[#5A5A5A] hover:text-[#1F1F21]"
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
          className={`pb-2.5 text-xs sm:text-sm font-medium transition-all cursor-pointer relative ${
            activeTab === "students"
              ? "text-[#038AF9] font-semibold"
              : "text-[#5A5A5A] hover:text-[#1F1F21]"
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
          <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#1F1F21] leading-relaxed">
            {/* Gray Bullet Dot */}
            <span className="w-2.5 h-2.5 rounded-full bg-gray-200 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default KeyImprovementAreas
