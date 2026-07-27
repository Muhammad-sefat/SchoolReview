import React from "react"
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ReferenceLine,
} from "recharts"
import { ArrowUpRight } from "lucide-react"

// Default Color Mapping if not passed as prop:
const DEFAULT_COLOR_MAP = {
  low: "#E53935",
  medium: "#FB8C00",
  neutral: "#90A4AE",
  good: "#66BB6A",
  best: "#2E7D32",
}

// Generate smooth curve line points from (0,0) -> (2.5, 1.35) -> (5,5)
const CURVE_POINTS = Array.from({ length: 30 }, (_, i) => {
  const x = (i / 29) * 5
  // Quadratic curve: y = 0.184*x^2 + 0.08*x
  const y = 0.184 * x * x + 0.08 * x
  return { x, y }
})

// Custom Square Dot Shape for Recharts
const SquareShape = (props) => {
  const { cx, cy, fill } = props
  if (!cx || !cy) return null

  return (
    <rect
      x={cx - 6}
      y={cy - 6}
      width={12}
      height={12}
      rx={3.5}
      fill={fill}
      className="cursor-pointer hover:opacity-80 transition-opacity"
    />
  )
}

// Custom Recharts Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    // Only display tooltip for data items with a name
    if (!data || !data.name) return null

    return (
      <div className="pointer-events-none bg-white border border-gray-100 rounded-2xl p-3.5 shadow-lg space-y-2 min-w-[180px] select-none">
        <p className="text-xs font-bold text-[#1F1F21] leading-tight">
          {data.name}
        </p>
        <div className="border-b border-dashed border-gray-200" />
        <div className="space-y-1.5 text-[11px] text-[#5A5A5A]">
          {(data.overallScore !== undefined || data.overall !== undefined) && (
            <div className="flex justify-between items-center gap-3">
              <span>Overall Score</span>
              <span className="font-semibold text-[#1F1F21]">
                : {data.overallScore !== undefined ? data.overallScore : data.overall}
              </span>
            </div>
          )}
          {data.lowestMetric && (
            <div className="flex justify-between items-center gap-3">
              <span>Lowest Metric</span>
              <span className="font-semibold text-[#1F1F21]">
                : {data.lowestMetric}
              </span>
            </div>
          )}
          {data.highestMetric && (
            <div className="flex justify-between items-center gap-3">
              <span>Highest Metric</span>
              <span className="font-semibold text-[#1F1F21]">
                : {data.highestMetric}
              </span>
            </div>
          )}
          {data.student !== undefined && !data.lowestMetric && (
            <div className="flex justify-between items-center gap-3">
              <span>Students Rating</span>
              <span className="font-semibold text-[#1F1F21]">
                {data.student.toFixed(1)}
              </span>
            </div>
          )}
          {data.parent !== undefined && !data.highestMetric && (
            <div className="flex justify-between items-center gap-3">
              <span>Parents Rating</span>
              <span className="font-semibold text-[#1F1F21]">
                {data.parent.toFixed(1)}
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
  return null
}

const ScatterPlot = ({
  title = "School Performance Metrics",
  subtitle = "Select a metric to view details",
  tabs = [
    { id: "parents", label: "Parents & student" },
    { id: "teacher", label: "Teacher" },
  ],
  activeTab = "parents",
  onTabChange,
  data = [],
  colorMap = DEFAULT_COLOR_MAP,
  onExpand,
}) => {
  const getColor = (category) => {
    return colorMap[category] || "#038AF9"
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between">
      {/* Header Area */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808] leading-snug">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm font-normal text-[#5A5A5A] mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Expand Action Button */}
        <button
          type="button"
          onClick={onExpand}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer shrink-0"
          title="Expand chart"
        >
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Dynamic Tabs (Hidden if tabs is empty/null) */}
      {tabs && tabs.length > 0 && (
        <div className="flex items-center gap-2 mb-4 bg-gray-100/70 p-1 rounded-2xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange && onTabChange(tab.id)}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white text-[#1F1F21] shadow-2xs font-semibold"
                  : "text-[#5A5A5A] hover:text-[#1F1F21]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Recharts Scatter Plot Area */}
      <div className="w-full h-[320px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 15, right: 20, bottom: 25, left: 15 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />

            <XAxis
              type="number"
              dataKey="x"
              name="Improvement Since Last Year"
              domain={[0, 5]}
              ticks={[0, 1, 2, 3, 4, 5]}
              stroke="#94A3B8"
              fontSize={11}
              fontWeight={500}
              tickLine={false}
              height={40}
              label={{
                value: "Improvement Since Last Year",
                position: "insideBottom",
                offset: -5,
                style: { textAnchor: "middle", fontSize: 13, fontWeight: 500, fill: "#1F1F21" },
              }}
            />

            <YAxis
              type="number"
              dataKey="y"
              name="Overall Satisfaction"
              domain={[0, 5]}
              ticks={[0, 1, 2, 3, 4, 5]}
              tickFormatter={(val) => (val === 0 ? "" : val)}
              stroke="#94A3B8"
              fontSize={11}
              fontWeight={500}
              tickLine={false}
              width={45}
              label={{
                value: "Overall Satisfaction",
                angle: -90,
                position: "insideLeft",
                offset: 0,
                style: { textAnchor: "middle", fontSize: 13, fontWeight: 500, fill: "#1F1F21" },
              }}
            />

            <ZAxis type="number" range={[100, 100]} />

            {/* Native Recharts Blue Dashed Curved Line */}
            <Scatter
              data={CURVE_POINTS}
              line={{ stroke: "#038AF9", strokeDasharray: "3 3", strokeWidth: 1.5 }}
              lineType="joint"
              shape={() => null}
              isAnimationActive={false}
            />

            {/* Dotted Vertical Reference Line at Middle Perfect Point (2.5) */}
            <ReferenceLine x={2.5} stroke="#038AF9" strokeDasharray="3 3" strokeWidth={1.5} />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ strokeDasharray: "3 3" }}
              wrapperStyle={{ pointerEvents: "none" }}
              isAnimationActive={false}
            />

            <Scatter data={data} shape={<SquareShape />}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.category)} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ScatterPlot