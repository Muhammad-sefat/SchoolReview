import React, { useState } from "react"

const DEFAULT_RINGS_DATA = [
  { label: "Bullying & Harassment", count: 20, percent: 75, color: "#038AF9" },
  { label: "Mental health & wellbeing", count: 50, percent: 85, color: "#038AF9" },
  { label: "Safety & Environment", count: 12, percent: 60, color: "#038AF9" },
  { label: "teaching & Fairness", count: 48, percent: 90, color: "#038AF9" },
  { label: "Others", count: 32, percent: 70, color: "#038AF9" },
]

const RadialProgressChart = ({
  title = "Annual Safety Reports Overview",
  data = DEFAULT_RINGS_DATA,
  centerNumber = 48,
  avgResolutionTime = "4.5 Day",
  resolvedReportsCount = 12,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between h-full min-w-0 overflow-hidden">
      {/* Title Header with Dotted Separator */}
      <div className="border-b border-dashed border-gray-200/80 pb-3 mb-2 shrink-0">
        <h3 className="font-urbanist text-lg sm:text-xl font-semibold text-[#080808]">
          {title}
        </h3>
      </div>

      {/* Main Rings & Labels Section */}
      <div className="flex-1 flex items-center justify-between gap-2 py-2 min-w-0">
        {/* Left Side: Legend Labels Column */}
        <div className="flex flex-col justify-start h-[145px] pt-1 text-[11px] sm:text-xs font-medium text-[#5A5A5A] text-right shrink-0 min-w-0">
          {data.map((ring, idx) => {
            const isHovered = hoveredIdx === idx

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex items-center justify-end gap-1.5 cursor-pointer transition-all duration-200 h-[18px] ${
                  isHovered
                    ? "text-[#038AF9] font-bold translate-x-0.5"
                    : hoveredIdx !== null
                    ? "opacity-40"
                    : ""
                }`}
                title={`${ring.label}: ${ring.count} reports (${ring.percent}%)`}
              >
                <span className="truncate max-w-[110px] sm:max-w-[140px]">
                  {ring.label}
                </span>
                <span
                  className={`w-5 text-right font-semibold ${
                    isHovered ? "text-[#038AF9]" : "text-[#1F1F21]"
                  }`}
                >
                  {ring.count}
                </span>
              </div>
            )
          })}
        </div>

        {/* Right Side: Concentric Rings SVG */}
        <div className="w-[145px] h-[145px] relative shrink-0 flex items-center justify-center min-w-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            {data.map((ring, idx) => {
              const radius = 90 - idx * 12
              const strokeWidth = hoveredIdx === idx ? 10 : 7.5
              const circumference = 2 * Math.PI * radius
              const maxArcLength = circumference * 0.75
              const strokeDashoffset = maxArcLength * (1 - ring.percent / 100)
              const isHovered = hoveredIdx === idx
              const isOtherHovered = hoveredIdx !== null && !isHovered

              return (
                <g
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="cursor-pointer transition-all duration-200"
                >
                  {/* Background Track Ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke="#E3F2FD"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${maxArcLength} ${circumference}`}
                    strokeLinecap="round"
                    opacity={isOtherHovered ? 0.2 : 0.6}
                  />

                  {/* Active Progress Ring Arc */}
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke={ring.color || "#038AF9"}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${maxArcLength} ${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    opacity={isOtherHovered ? 0.35 : 1}
                    className="transition-all duration-300"
                  />
                </g>
              )
            })}
          </svg>

          {/* Dynamic Center Display Number */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none text-center">
            {hoveredIdx !== null ? (
              <>
                <span className="font-urbanist text-2xl font-bold text-[#038AF9] transition-all">
                  {data[hoveredIdx].count}
                </span>
                <span className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider">
                  Reports
                </span>
              </>
            ) : (
              <span className="font-urbanist text-2xl sm:text-3xl font-bold text-[#1F1F21] transition-all">
                {centerNumber}
              </span>
            )}
          </div>

          {/* Dynamic Hover Tooltip */}
          {hoveredIdx !== null && (
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#1F1F21] text-white text-[10px] font-medium px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap z-20 pointer-events-none transition-all">
              {data[hoveredIdx].label}:{" "}
              <span className="font-bold text-[#038AF9]">
                {data[hoveredIdx].count}
              </span>{" "}
              ({data[hoveredIdx].percent}%)
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section: 2-Column Resolution Stats Bar */}
      <div className="border-t border-dashed border-gray-200/80 pt-3 mt-2 shrink-0 grid grid-cols-2 gap-3 min-w-0">
        <div>
          <p className="text-[11px] sm:text-xs font-medium text-[#5A5A5A] truncate">
            Average Resolution Time
          </p>
          <p className="font-urbanist text-base sm:text-lg font-bold text-[#1F1F21] mt-0.5">
            {avgResolutionTime}
          </p>
        </div>

        <div className="border-l border-gray-100 pl-3">
          <p className="text-[11px] sm:text-xs font-medium text-[#5A5A5A] truncate">
            Resolve Reports
          </p>
          <p className="font-urbanist text-base sm:text-lg font-bold text-[#1F1F21] mt-0.5">
            {resolvedReportsCount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RadialProgressChart
