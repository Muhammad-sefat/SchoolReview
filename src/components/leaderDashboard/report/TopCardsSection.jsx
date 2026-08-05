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

const TopCardsSection = ({ onOpenModal }) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-center font-urbanist">
      {/* Card 1 (3.8 Cols) */}
      <div className="lg:col-span-4 bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xs h-full relative">
        <div className="space-y-3 text-center">
          <h3 className="text-[24px] font-semibold text-[#080808] leading-snug">
            Complete Your School Input
          </h3>
          <p className="text-[16px] font-normal text-secondary leading-relaxed max-w-sm mx-auto">
            To generate this year's 360° Insight Report, please provide your school leadership perspective.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenModal}
          className="w-full py-3.5 px-5 rounded-2xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[18px] font-medium transition-colors shadow-xs cursor-pointer text-center"
        >
          Complete School Self-Review
        </button>

        {/* Floating Right Arrow for Large Screens */}
        <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#038AF9] text-white items-center justify-center shadow-md">
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </div>
      </div>

      {/* Card 2 (3.8 Cols) */}
      <div className="lg:col-span-4 bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xs h-full relative">
        <div className="space-y-3 text-center">
          <h3 className="text-[24px] font-semibold text-[#080808] leading-snug">
            360° Insight Report
          </h3>
          <p className="text-[16px] font-normal text-secondary leading-relaxed max-w-xs mx-auto">
            Combine all inputs into one clear report.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenModal}
          className="w-full py-3.5 px-5 rounded-2xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[18px] font-medium transition-colors shadow-xs cursor-pointer text-center"
        >
          Create 360° Report
        </button>

        {/* Floating Right Arrow for Large Screens */}
        <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#038AF9] text-white items-center justify-center shadow-md">
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </div>
      </div>

      {/* Card 3: School performance over time (4.4 Cols) */}
      <div className="lg:col-span-4 bg-white border border-gray-200/80 rounded-3xl p-6 space-y-3 flex flex-col justify-between shadow-2xs h-full">
        <h3 className="text-[24px] font-semibold text-[#080808]">
          School performance over time
        </h3>

        <div className="w-full h-44 pt-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={PERFORMANCE_DATA}
              margin={{ top: 10, right: 10, left: -5, bottom: 15 }}
            >
              <defs>
                <linearGradient
                  id="schoolPerfGrad"
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
                fill="url(#schoolPerfGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default TopCardsSection
