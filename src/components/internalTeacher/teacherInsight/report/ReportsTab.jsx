import React from "react"
import { ArrowRight, Download } from "lucide-react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from "recharts"

const SCORE_TREND_DATA = [
  { year: "2022", score: 3.0 },
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

const PREVIOUS_REPORTS = [
  { year: "2026" },
  { year: "2024" },
  { year: "2023" },
  { year: "2024" },
  { year: "2023" },
]

const ReportsTab = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Title Header */}
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#080808]">
          360° Teaching Report
        </h2>
        <p className="text-base text-secondary font-normal">
          Generate and download your annual 360° teaching reports by combining student, observer and self-reflection insights.
        </p>
      </div>

      {/* Top 3 Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Card 1: Self Reflection (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-gray-100 p-6 shadow-xs flex flex-col justify-between space-y-6 relative">
          <div className="space-y-3 text-center pt-4">
            <h3 className="text-xl font-bold text-[#080808]">
              Self Reflection
            </h3>
            <p className="text-sm sm:text-base text-secondary max-w-xs mx-auto">
              Complete your teaching reflection to include your perspective.
            </p>
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-xl bg-[#038AF9] hover:bg-[#037CE0] text-white text-base font-semibold transition-all shadow-2xs cursor-pointer"
          >
            Complete Reflection
          </button>

          {/* Connected Step Circle Arrow right */}
          <div className="hidden lg:flex absolute right-[-14px] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#038AF9] text-white items-center justify-center shadow-md z-10">
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Card 2: 360° Insight Report (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-gray-100 p-6 shadow-xs flex flex-col justify-between space-y-6 relative">
          <div className="space-y-3 text-center pt-4">
            <h3 className="text-xl font-bold text-[#080808]">
              360° Insight Report
            </h3>
            <p className="text-sm sm:text-base text-secondary max-w-xs mx-auto">
              Combine all inputs into one clear report.
            </p>
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-xl bg-[#038AF9] hover:bg-[#037CE0] text-white text-base font-semibold transition-all shadow-2xs cursor-pointer"
          >
            Generate Report
          </button>

          {/* Connected Step Circle Arrow right */}
          <div className="hidden lg:flex absolute right-[-14px] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#038AF9] text-white items-center justify-center shadow-md z-10">
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Card 3: Overall Teaching Score Graph (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-gray-100 p-5 shadow-xs flex flex-col justify-between space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-[#080808]">
            Overall Teaching Score
          </h3>

          <div className="w-full h-36">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={SCORE_TREND_DATA} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="scoreTrendReportGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#038AF9" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#038AF9" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#8E8E93" }} />
                <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#8E8E93" }} />
                <Area type="monotone" dataKey="score" stroke="#038AF9" strokeWidth={2.5} fill="url(#scoreTrendReportGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Table: Previous Reports */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-xs space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[#080808]">
          Previous Reports
        </h3>

        {/* Dotted Separator */}
        <div className="border-b border-dashed border-gray-200/80" />

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/60 text-[#5A5A5A] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 rounded-l-xl">Report of Year</th>
                <th className="py-3 px-4 text-right rounded-r-xl">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
              {PREVIOUS_REPORTS.map((rep, idx) => (
                <tr key={idx} className="hover:bg-gray-50/40 transition-colors">
                  <td className="py-4 px-4 font-semibold text-[#080808]">
                    {rep.year}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button
                      type="button"
                      className="p-2 rounded-lg text-gray-500 hover:text-[#038AF9] hover:bg-blue-50 transition-colors cursor-pointer inline-flex items-center justify-center"
                      title="Download Report"
                    >
                      <Download className="w-4 h-4 stroke-[2]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ReportsTab
