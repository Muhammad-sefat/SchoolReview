import React from "react"
import { ArrowUpRight, ArrowDownRight, LayoutGrid } from "lucide-react"

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
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between h-full min-w-0 overflow-hidden">
      {/* Header with Icon Badge */}
      <div className="flex items-center gap-2.5 mb-4 shrink-0">
        <div className="w-8 h-8 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center shrink-0">
          <LayoutGrid className="w-4.5 h-4.5 stroke-[1.75]" />
        </div>
        <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808]">
          {title}
        </h3>
      </div>

      {/* Metrics Progress Rows */}
      <div className="space-y-4 flex-1 flex flex-col justify-around py-1 min-w-0">
        {metrics.map((metric) => (
          <div key={metric.id} className="space-y-1.5 min-w-0">
            <div className="flex items-center justify-between gap-2 text-xs sm:text-sm min-w-0">
              {/* Metric Label */}
              <span
                className="font-semibold text-[#1F1F21] text-xs sm:text-sm truncate min-w-0 pr-1"
                title={metric.label}
              >
                {metric.label}
              </span>

              {/* Metric Value & Trend */}
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                <span className="font-medium text-gray-500 text-xs sm:text-sm w-7 text-right">
                  {metric.percentage}%
                </span>

                {/* Progress Bar Container */}
                <div className="w-16 sm:w-20 md:w-24 h-2.5 bg-gray-100 rounded-full overflow-hidden shrink-0">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${metric.barColor}`}
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>

                {/* Trend Indicator */}
                <div
                  className={`flex items-center gap-0.5 text-xs font-semibold shrink-0 min-w-[36px] justify-end ${
                    metric.isUp ? "text-[#2E7D32]" : "text-[#E53935]"
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
