import React from "react"
import { ArrowUpRight, ArrowDownRight, LayoutGrid } from "lucide-react"
import { KeyMetrix } from "../../icons/CustomIcons"

const METRICS_DATA = [
  {
    id: "wellbeing",
    label: "Student Wellbeing",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "quality",
    label: "Teaching Quality",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "leadership",
    label: "Leadership & Culture",
    percentage: 80,
    trend: "9%",
    isUp: true,
    barColor: "bg-[#038AF9]",
  },
  {
    id: "safety",
    label: "Safety & Safeguarding",
    percentage: 40,
    trend: "9%",
    isUp: false,
    barColor: "bg-[#E53935]",
  },
]

const KeyMetricsCard = ({
  metrics = METRICS_DATA,
  title = "Key Metrics",
}) => {
  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-4 md:p-5 shadow-xs flex flex-col justify-between h-full min-w-0 overflow-hidden">
      {/* Header with Icon Badge */}
      <div className="flex items-center gap-2.5 mb-4 shrink-0">
        <div className="w-8 h-8 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center shrink-0">
          <KeyMetrix />
        </div>
        <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808]">
          {title}
        </h3>
      </div>

      {/* Metrics Progress Rows */}
      <div className="space-y-3 w-full flex-1 flex flex-col justify-around py-1 ">
        {metrics.map((metric) => (
          <div key={metric.id} className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm min-w-0">
              {/* Metric Label */}
              <span
                className="font-normal text-textPrimary text-sm sm:text-base truncate shrink-0 w-36 sm:w-48 md:w-52 pr-1"
                title={metric.label}
              >
                {metric.label}
              </span>

              {/* Metric Value & Trend */}
              <div className="flex items-center gap-2 sm:gap-2.5 flex-1 min-w-0 justify-end">
                <span className="font-normal text-textPrimary text-sm sm:text-base w-7 sm:w-9 text-right shrink-0">
                  {metric.percentage}%
                </span>

                {/* Progress Bar Container */}
                <div className="w-full flex-1 h-3 bg-gray-100 rounded-full overflow-hidden min-w-[100px]">
                  <div
                    className={`h-full rounded-full transition-all text-sm font-normal duration-500 ${metric.barColor}`}
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>

                {/* Trend Indicator */}
                <div
                  className={`flex items-center gap-0.5 text-xs font-semibold shrink-0 min-w-[36px] justify-end ${metric.isUp ? "text-[#2E7D32]" : "text-[#E53935]"
                    }`}
                >
                  {metric.isUp ? (
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  )}
                  <span>{metric.trend}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KeyMetricsCard
