import React from "react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from "recharts"

const KEY_METRICS = [
  { label: "Classroom Climate", percentage: 80, trend: "9%", isUp: true, color: "bg-[#038AF9]" },
  { label: "Teaching Quality", percentage: 80, trend: "9%", isUp: true, color: "bg-[#038AF9]" },
  { label: "Learning Environment", percentage: 80, trend: "9%", isUp: true, color: "bg-[#038AF9]" },
  { label: "Professional Practice", percentage: 40, trend: "9%", isUp: false, color: "bg-[#E53935]" },
  { label: "Learning Impact", percentage: 40, trend: "9%", isUp: false, color: "bg-[#E53935]" },
]

const LEARNING_IMPACT_METRICS = [
  { label: "Understanding", percentage: 80, trend: "9%", isUp: true, color: "bg-[#038AF9]" },
  { label: "Progress", percentage: 80, trend: "9%", isUp: true, color: "bg-[#038AF9]" },
  { label: "Confidence", percentage: 40, trend: "9%", isUp: false, color: "bg-[#E53935]" },
]

const TEACHING_QUALITY_TREND = [
  { year: "2022", score: 2.8 },
  { year: "", score: 4.2 },
  { year: "", score: 3.5 },
  { year: "2023", score: 3.0 },
  { year: "", score: 3.7 },
  { year: "", score: 3.3 },
  { year: "2024", score: 4.0 },
  { year: "", score: 3.8 },
  { year: "", score: 4.8 },
  { year: "2025", score: 3.2 },
  { year: "", score: 4.1 },
  { year: "", score: 3.6 },
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
      <svg className="w-48 h-26 overflow-visible" viewBox="0 0 140 75">
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

const TeacherMetricsRow = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch font-urbanist">
      {/* Card 1: Key Metrics (Expanding progress bar dynamically across full remaining width like Image 1) */}
      <div className="bg-white border border-gray-100 rounded-3xl p-5 md:p-6 space-y-4 flex flex-col justify-between shadow-xs">
        <h4 className="text-xl sm:text-2xl font-semibold text-[#080808]">
          Key Metrics
        </h4>

        <div className="space-y-3.5 flex-1 flex flex-col justify-around py-1">
          {KEY_METRICS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-xs sm:text-base gap-3"
            >
              <span className="text-[#080808] font-normal text-sm sm:text-base min-w-[130px] sm:min-w-[150px] shrink-0 truncate">
                {item.label}
              </span>

              <span className="text-gray-500 font-normal text-sm w-10 shrink-0 text-right">
                {item.percentage}%
              </span>

              {/* Dynamic Expanding Progress Bar matching Image 1 */}
              <div className="flex-1 h-3 bg-gray-100/90 rounded-full overflow-hidden min-w-[60px]">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <span
                className={`text-sm font-semibold flex items-center gap-0.5 min-w-[36px] justify-end shrink-0 ${item.isUp ? "text-[#66BB6A]" : "text-[#E53935]"
                  }`}
              >
                {item.isUp ? (
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                ) : (
                  <ArrowDownRight className="w-3.5 h-3.5 stroke-[2.5]" />
                )}
                {item.trend}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 2: Learning Impact */}
      <div className="bg-white border border-gray-100 rounded-3xl p-5 md:p-6 space-y-3 flex flex-col justify-between shadow-xs">
        <h4 className="text-xl sm:text-2xl font-semibold text-[#080808]">
          Learning Impact
        </h4>

        <SemiCircleGauge value={72} label="Good" />

        <div className="space-y-3.5 pt-1">
          {LEARNING_IMPACT_METRICS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-xs sm:text-base gap-3"
            >
              <span className="text-textPrimary font-medium min-w-[110px] truncate">
                {item.label}
              </span>

              <span className="text-gray-500 font-normal text-sm w-10 text-right">
                {item.percentage}%
              </span>

              <div className="flex-1 h-3 bg-gray-100/90 rounded-full overflow-hidden min-w-[80px]">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <span
                className={`text-sm font-semibold flex items-center gap-0.5 min-w-[42px] justify-end ${item.isUp ? "text-[#66BB6A]" : "text-[#E53935]"
                  }`}
              >
                {item.isUp ? (
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                ) : (
                  <ArrowDownRight className="w-3.5 h-3.5 stroke-[2.5]" />
                )}
                {item.trend}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 3: Teaching Quality Trend Chart */}
      <div className="bg-white border border-gray-100 rounded-3xl p-5 md:p-6 space-y-2 flex flex-col justify-between shadow-xs">
        <div className="flex items-center justify-between">
          <h4 className="text-xl sm:text-2xl font-semibold text-[#080808]">
            Teaching Quality
          </h4>
          <span className="text-[#66BB6A] text-sm font-semibold flex items-center gap-0.5">
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            9%
          </span>
        </div>

        <div className="w-full h-48 pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={TEACHING_QUALITY_TREND} margin={{ top: 10, right: 10, left: -5, bottom: 15 }}>
              <defs>
                <linearGradient id="teachingQualityGradTeacher" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#038AF9" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#038AF9" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: "#8E8E93", dy: 20 }} />
              <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: "#8E8E93" }} width={30} />
              <Area type="monotone" dataKey="score" stroke="#038AF9" strokeWidth={2.5} fill="url(#teachingQualityGradTeacher)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default TeacherMetricsRow
