import React from "react"
import { Title24 } from "@/components/typho/Title"

// Segment color definitions matching user spec:
// 1st (top): #E53935, 2nd: #FB8C00, 3rd: #90A4AE, 4th: #66BB6A, 5th (bottom): #2E7D32
const SEGMENT_COLORS = ["#E53935", "#FB8C00", "#90A4AE", "#66BB6A", "#2E7D32"]

const CategoryStackedBarChart = ({
  title,
  bars = [],
}) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-xs font-urbanist space-y-4 flex flex-col justify-between h-full">
      {/* Title */}
      <Title24 className="text-[#080808] font-semibold">{title}</Title24>

      {/* Chart Graphic Area */}
      <div className="w-full overflow-x-auto no-scrollbar pt-2">
        <div className="min-w-[400px] h-64 relative flex flex-col justify-between">
          {/* Y-Axis Labels (80, 60, 40, 20, 0) & Horizontal Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
            {[80, 60, 40, 20, 0].map((val) => (
              <div key={val} className="w-full flex items-center gap-3">
                <span className="w-5 text-xs font-normal text-gray-400 text-right">
                  {val}
                </span>
                <div className="flex-1 h-[1px] bg-gray-100" />
              </div>
            ))}
          </div>

          {/* Columns Container */}
          <div className="flex-1 w-full pl-10 pr-4 flex items-end justify-around relative z-10 pb-8">
            {bars.map((bar, barIdx) => {
              // bar.values is an array of up to 5 numbers corresponding to [red, orange, gray, lightGreen, darkGreen]
              const values = bar.values || []
              const total = values.reduce((sum, v) => sum + v, 0)

              return (
                <div
                  key={bar.label || barIdx}
                  className="flex flex-col items-center gap-2 h-full justify-end relative"
                >
                  {/* Stacked Box Container with width 55px */}
                  <div className="w-[55px] flex flex-col items-center justify-end h-full gap-1">
                    {values.map((val, valIdx) => {
                      if (!val) return null
                      const heightPercent = total > 0 ? (val / 80) * 100 : 0

                      return (
                        <div
                          key={valIdx}
                          style={{
                            height: `${heightPercent}%`,
                            backgroundColor: SEGMENT_COLORS[valIdx % SEGMENT_COLORS.length],
                          }}
                          className="w-full flex items-center justify-center text-white text-[11px] font-bold shadow-2xs transition-all hover:brightness-105 rounded-md"
                        >
                          {val}
                        </div>
                      )
                    })}
                  </div>

                  {/* Under Column Category Label */}
                  <span className="text-[12px] font-normal text-secondary text-center truncate max-w-[95px] absolute -bottom-6">
                    {bar.label}
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

export default CategoryStackedBarChart
