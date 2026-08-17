import React from "react"
import { ArrowRight } from "lucide-react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from "recharts"

const PERFORMANCE_DATA = [
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

const TeacherTopCardsSection = ({ onOpenModal }) => {
  return (
    <div className="w-full space-y-5 font-urbanist">
      {/* Title & Description Header */}
      <div className="space-y-1">
        <h2 className="text-[28px] sm:text-[32px] font-bold text-[#080808] leading-tight">
          360° Teaching Report
        </h2>
        <p className="text-[16px] font-normal text-textBlack">
          Generate and download your annual 360° teaching reports by combining student, observer and self-reflection insights.
        </p>
      </div>

      {/* Top 3 Cards Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Card 1: Self Reflection (4 Cols) */}
        <div className="lg:col-span-4 bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xs h-full relative">
          <div className="space-y-3 text-center">
            <h3 className="text-[24px] font-semibold text-[#080808] leading-snug">
              Self Reflection
            </h3>
            <p className="text-[16px] font-normal text-[#5A5A5A] leading-relaxed max-w-xs mx-auto">
              Complete your teaching reflection to include your perspective.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="w-full py-3.5 px-5 rounded-2xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[18px] font-medium transition-colors shadow-xs cursor-pointer text-center"
          >
            Complete Reflection
          </button>

          {/* Floating Right Arrow for Large Screens */}
          <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#038AF9] text-white items-center justify-center shadow-md">
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Card 2: 360° Insight Report (4 Cols) */}
        <div className="lg:col-span-4 bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xs h-full relative">
          <div className="space-y-3 text-center">
            <h3 className="text-[24px] font-semibold text-[#080808] leading-snug">
              360° Insight Report
            </h3>
            <p className="text-[16px] font-normal text-[#5A5A5A] leading-relaxed max-w-xs mx-auto">
              Combine all inputs into one clear report.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="w-full py-3.5 px-5 rounded-2xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[18px] font-medium transition-colors shadow-xs cursor-pointer text-center"
          >
            Generate Report
          </button>

          {/* Floating Right Arrow for Large Screens */}
          <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#038AF9] text-white items-center justify-center shadow-md">
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Card 3: Overall Teaching Score (4 Cols) */}
        <div className="lg:col-span-4 bg-white border border-gray-200/80 rounded-3xl p-6 space-y-3 flex flex-col justify-between shadow-2xs h-full">
          <h3 className="text-[24px] font-semibold text-[#080808]">
            Overall Teaching Score
          </h3>

          <div className="w-full h-44 pt-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={PERFORMANCE_DATA}
                margin={{ top: 10, right: 10, left: -5, bottom: 15 }}
              >
                <defs>
                  <linearGradient
                    id="teacherPerfGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#038AF9"
                      stopOpacity={0.35}
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
                  dy={14}
                />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#038AF9"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#teacherPerfGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherTopCardsSection
