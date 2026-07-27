import React from "react"

const DEFAULT_RINGS_DATA = [
  { label: "Bullying & Harassment", count: 20, percent: 75, color: "#038AF9" },
  { label: "Mental health & wellbeing", count: 50, percent: 85, color: "#1E88E5" },
  { label: "Safety & Environment", count: 12, percent: 60, color: "#42A5F5" },
  { label: "teaching & Fairness", count: 48, percent: 90, color: "#64B5F6" },
  { label: "Others", count: 32, percent: 70, color: "#90CAF9" },
]

const RadialProgressChart = ({
  title = "Annual Safety Reports Overview",
  data = DEFAULT_RINGS_DATA,
  centerNumber = 48,
  avgResolutionTime = "4.5 Day",
  resolvedReportsCount = 12,
}) => {
  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between h-full">
      {/* Title with Dotted Separator */}
      <div className="border-b border-dashed border-gray-200/80 pb-3 mb-3">
        <h3 className="font-urbanist text-lg sm:text-xl font-semibold text-[#080808]">
          {title}
        </h3>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col xl:flex-row items-center justify-between gap-4 py-1">
        {/* Left Side: Concentric Rings & Labels */}
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          {/* Legend Labels Column */}
          <div className="space-y-2 text-[11px] sm:text-xs font-medium text-[#5A5A5A] text-right shrink-0">
            {data.map((ring, idx) => (
              <div key={idx} className="flex items-center justify-end gap-2">
                <span>{ring.label}</span>
                <span className="font-semibold text-[#1F1F21] w-5">{ring.count}</span>
              </div>
            ))}
          </div>

          {/* SVG Concentric Rings Container */}
          <div className="w-[150px] h-[150px] relative shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
              {data.map((ring, idx) => {
                // Outer to inner radius calculation
                const radius = 90 - idx * 12
                const strokeWidth = 8
                const circumference = 2 * Math.PI * radius
                // Sweep angle ~ 270 degrees arc
                const maxArcLength = circumference * 0.75
                const strokeDashoffset = maxArcLength * (1 - ring.percent / 100)

                return (
                  <g key={idx}>
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
                      opacity="0.5"
                    />
                    {/* Active Progress Ring */}
                    <circle
                      cx="100"
                      cy="100"
                      r={radius}
                      fill="none"
                      stroke={ring.color}
                      strokeWidth={strokeWidth}
                      strokeDasharray={`${maxArcLength} ${circumference}`}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </g>
                )
              })}
            </svg>

            {/* Center Display Number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-urbanist text-2xl sm:text-3xl font-bold text-[#1F1F21]">
                {centerNumber}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Stats Column */}
        <div className="space-y-4 text-left border-l border-gray-100 pl-4 shrink-0 min-w-[120px]">
          <div>
            <p className="text-xs font-medium text-[#5A5A5A]">
              Average Resolution Time
            </p>
            <p className="font-urbanist text-lg sm:text-xl font-bold text-[#1F1F21] mt-0.5">
              {avgResolutionTime}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#5A5A5A]">
              Resolve Reports
            </p>
            <p className="font-urbanist text-lg sm:text-xl font-bold text-[#1F1F21] mt-0.5">
              {resolvedReportsCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RadialProgressChart
