import React from "react"
import { Star, ArrowUpRight, ArrowDownRight } from "lucide-react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from "recharts"

const TEACHING_QUALITY_TREND = [
  { year: "2022", score: 2.8 },
  { year: "", score: 4.2 },
  { year: "", score: 3.5 },
  { year: "", score: 3.9 },
  { year: "2023", score: 3.0 },
  { year: "", score: 3.7 },
  { year: "", score: 3.3 },
  { year: "2024", score: 4.0 },
  { year: "", score: 3.8 },
  { year: "", score: 4.8 },
  { year: "2025", score: 3.2 },
  { year: "", score: 4.1 },
  { year: "2026", score: 3.0 },
]

const SemiCircleGauge = ({ value = 72, label = "Good" }) => {
  const polarToCartesian = (cx, cy, r, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180
    return {
      x: cx + r * Math.cos(angleInRadians),
      y: cy + r * Math.sin(angleInRadians),
    }
  }

  const describeArc = (cx, cy, r, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, r, endAngle)
    const end = polarToCartesian(cx, cy, r, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
    return ["M", start.x, start.y, "A", r, r, 0, largeArcFlag, 0, end.x, end.y].join(" ")
  }

  const segments = [
    { start: 2, end: 43.5, color: "#D8EDFF" },
    { start: 46, end: 88.5, color: "#46A9FF" },
    { start: 91, end: 133.5, color: "#038AF9" },
    { start: 136, end: 178, color: "#0062C4" },
  ]

  const clampedValue = Math.min(Math.max(value, 0), 100)
  const capStart = polarToCartesian(70, 68, 50, 2)
  const capEnd = polarToCartesian(70, 68, 50, 178)

  return (
    <div className="relative flex flex-col items-center justify-center py-2 font-urbanist">
      <svg className="w-44 h-24 overflow-visible" viewBox="0 0 140 75">
        <circle cx={capStart.x} cy={capStart.y} r="6" fill="#D8EDFF" />
        <circle cx={capEnd.x} cy={capEnd.y} r="6" fill="#0062C4" />

        {segments.map((seg, idx) => (
          <path
            key={idx}
            d={describeArc(70, 68, 50, seg.start, seg.end)}
            fill="none"
            stroke={seg.color}
            strokeWidth="12"
            strokeLinecap="butt"
          />
        ))}
      </svg>

      <div className="absolute bottom-2 flex flex-col items-center justify-center text-center pointer-events-none">
        <span className="text-2xl font-bold text-[#080808] leading-none">
          {clampedValue}
        </span>
        <span className="text-xs font-medium text-gray-500 mt-1">
          {label}
        </span>
      </div>
    </div>
  )
}

const OverviewTab = ({ strengths, developmentAreas, keyMetrics, learningImpactMetrics }) => {
  return (
    <div className="space-y-6 font-urbanist pb-6">
      {/* Top Grid: Strengths & Development Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1: Strengths */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-3.5 shadow-2xs">
          <h4 className="text-[18px] md:text-[24px] font-semibold text-[#080808] font-urbanist">
            Strengths
          </h4>
          <ul className="space-y-3">
            {strengths.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[14px] md:text-lg text-textPrimary leading-relaxed"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200 mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Development Areas */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-3.5 shadow-2xs">
          <h4 className="text-[18px] md:text-[24px] font-semibold text-[#080808] font-urbanist">
            Development Areas
          </h4>
          <ul className="space-y-3">
            {developmentAreas.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[14px] md:text-lg text-textPrimary leading-relaxed"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200 mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Grid: 3 Side-by-Side Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch pt-1">
        {/* Card 1: Key Metrics */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-3.5 flex flex-col justify-between shadow-2xs">
          <h4 className="text-[18px] md:text-[24px] font-semibold text-[#080808] font-urbanist">
            Key Metrics
          </h4>

          <div className="space-y-3 flex-1 flex flex-col justify-around">
            {keyMetrics.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs sm:text-base gap-2"
              >
                <span className="text-textPrimary font-medium">
                  {item.label}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-gray-500 font-medium text-sm">
                    {item.percentage}%
                  </span>
                  <div className="w-14 sm:w-16 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span
                    className={`text-sm font-semibold flex items-center gap-0.5 min-w-[32px] justify-end ${
                      item.isUp ? "text-[#66BB6A]" : "text-[#E53935]"
                    }`}
                  >
                    {item.isUp ? (
                      <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 stroke-[2.5]" />
                    )}
                    {item.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Learning Impact */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-3 flex flex-col justify-between shadow-2xs">
          <h4 className="text-[18px] md:text-[24px] font-semibold text-[#080808] font-urbanist">
            Learning Impact
          </h4>

          <SemiCircleGauge value={72} label="Good" />

          <div className="space-y-2.5 pt-1">
            {learningImpactMetrics.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs sm:text-base gap-2"
              >
                <span className="text-textPrimary font-medium">
                  {item.label}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-gray-500 font-normal text-sm">
                    {item.percentage}%
                  </span>
                  <div className="w-14 sm:w-16 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#038AF9]"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-[#66BB6A] text-sm font-semibold flex items-center gap-0.5 min-w-[32px] justify-end">
                    <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                    {item.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Teaching Quality Trend Chart */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-2 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between">
            <h4 className="text-[18px] md:text-[24px] font-semibold text-[#080808] font-urbanist">
              Teaching Quality
            </h4>
            <span className="text-[#66BB6A] text-xs font-semibold flex items-center gap-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              9%
            </span>
          </div>

          <div className="w-full h-48 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={TEACHING_QUALITY_TREND}
                margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
              >
                <defs>
                  <linearGradient
                    id="teacherQualityGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#038AF9"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="#038AF9"
                      stopOpacity={0.0}
                    />
                  </linearGradient>
                </defs>
                <YAxis
                  domain={[1, 5]}
                  ticks={[1, 2, 3, 4, 5]}
                  stroke="#5A5A5A"
                  tick={{ fill: "#5A5A5A", fontSize: 14 }}
                  tickLine={false}
                  axisLine={false}
                  width={30}
                />
                <XAxis
                  dataKey="year"
                  stroke="#5A5A5A"
                  tick={{ fill: "#5A5A5A", fontSize: 14 }}
                  tickLine={false}
                  axisLine={false}
                  dy={4}
                />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#038AF9"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#teacherQualityGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewTab
