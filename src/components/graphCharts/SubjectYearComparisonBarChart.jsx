import React from "react"

const DEFAULT_SUBJECT_DATA = [
  { subject: "Mathematics", year2025: 4.1, year2026: 2.6 },
  { subject: "German", year2025: 4.3, year2026: 3.0 },
  { subject: "French", year2025: 3.0, year2026: 2.6 },
  { subject: "English", year2025: 4.1, year2026: 2.6 },
  { subject: "Natural Sciences", year2025: 3.0, year2026: 4.0 },
  { subject: "Social Sciences", year2025: 3.0, year2026: 4.5 },
  { subject: "Arts", year2025: 4.0, year2026: 3.0 },
  { subject: "Music", year2025: 3.0, year2026: 4.0 },
  { subject: "Physical Education", year2025: 3.0, year2026: 4.9 },
  { subject: "Social", year2025: 3.0, year2026: 4.0 },
]

const SubjectYearComparisonBarChart = ({
  title = "Teaching Quality by Subject (Year Comparison)",
  subtitle = "Each subject score reflects aggregated data across observations and feedback, providing a reliable view of overall teaching performance.",
  data = DEFAULT_SUBJECT_DATA,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-xs font-urbanist space-y-4">
      {/* Header Area */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#080808]">
            {title}
          </h3>

          {/* Legend */}
          <div className="flex items-center gap-4 text-xs sm:text-sm font-normal text-secondary">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-[#E2E8F0] inline-block" />
              <span>2025</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-[#038AF9] inline-block" />
              <span>2026</span>
            </div>
          </div>
        </div>

        {subtitle && (
          <p className="text-xs sm:text-sm font-normal text-secondary leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Chart Container */}
      <div className="w-full pt-4 overflow-x-auto no-scrollbar ">
        <div className="w-full min-w-[650px] sm:min-w-0 h-64 relative flex flex-col justify-between">
          {/* Y-Axis Labels & Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
            {[5, 4, 3, 2, 1].map((val) => (
              <div key={val} className="w-full flex items-center gap-3">
                <span className="w-4 text-xs font-normal text-gray-400 text-right">
                  {val}
                </span>
                <div className="flex-1 h-[1px] bg-gray-100" />
              </div>
            ))}
          </div>

          {/* Bars Graphic Area */}
          <div className="flex-1 w-full pl-8 pr-2 flex items-end justify-between relative z-10 pb-8">
            {data.map((item) => {
              const h2025 = (item.year2025 / 5) * 100
              const h2026 = (item.year2026 / 5) * 100

              return (
                <div
                  key={item.subject}
                  className="flex flex-col items-center gap-2 h-full justify-end group cursor-pointer relative"
                  title={`${item.subject} — 2025: ${item.year2025}, 2026: ${item.year2026}`}
                >
                  {/* Pair of Bars */}
                  <div className="flex items-end gap-1.5 h-full">
                    {/* 2025 Bar */}
                    <div
                      style={{ height: `${h2025}%` }}
                      className="w-2 sm:w-2.5 bg-[#E2E8F0] rounded-full transition-all duration-300 group-hover:bg-gray-300"
                    />

                    {/* 2026 Bar */}
                    <div
                      style={{ height: `${h2026}%` }}
                      className="w-2 sm:w-2.5 bg-[#038AF9] rounded-full transition-all duration-300 group-hover:bg-[#0270CD]"
                    />
                  </div>

                  {/* X-Axis Subject Label */}
                  <span className="text-[12px] font-normal text-[#1F1F21] text-center truncate max-w-[85px] absolute -bottom-6">
                    {item.subject}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectYearComparisonBarChart
