import React from "react"

const STRENGTHS = [
  "Students consistently highlight clear explanations",
  "High engagement reported across lessons",
  "Positive and supportive classroom environment noted",
]

const DEVELOPMENT_AREAS = [
  "Students would like more individual feedback",
  "Some feedback mentions pacing could be improved",
  "Increase opportunities for student participation",
]

const StrengthsDevAreas = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 font-urbanist">
      {/* Left Box: Strengths */}
      <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between space-y-4">
        <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808]">
          Strengths
        </h3>

        <div className="space-y-3.5 flex-1">
          {STRENGTHS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-xs bg-gray-200 shrink-0 mt-2" />
              <p className="text-base text-textPrimary leading-normal">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Box: Development Areas */}
      <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between space-y-4">
        <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808]">
          Development Areas
        </h3>

        <div className="space-y-3.5 flex-1">
          {DEVELOPMENT_AREAS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-xs bg-gray-200 shrink-0 mt-2" />
              <p className="text-base text-textPrimary leading-normal">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StrengthsDevAreas
