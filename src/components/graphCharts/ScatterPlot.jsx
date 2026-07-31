import React, { useState } from "react"
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Cell,
  ReferenceLine,
} from "recharts"
import { ArrowUpRight } from "lucide-react"
import ScatterPlotModal from "@/components/leaderDashboard/modal/ScatterPlotModal"

const DEFAULT_COLOR_MAP = {
  low: "#E53935",
  medium: "#FB8C00",
  neutral: "#90A4AE",
  good: "#66BB6A",
  best: "#2E7D32",
}

const CURVE_POINTS = Array.from({ length: 30 }, (_, i) => {
  const x = (i / 29) * 5
  const y = 0.184 * x * x + 0.08 * x
  return { x, y }
})

const SquareShape = (props) => {
  const { cx, cy, fill, payload, onDotHover, onMetricClick } = props
  if (!cx || !cy) return null

  return (
    <rect
      x={cx - 6}
      y={cy - 6}
      width={12}
      height={12}
      rx={3.5}
      fill={fill}
      onMouseEnter={() => onDotHover && onDotHover({ ...payload, cx, cy })}
      onClick={(e) => {
        e.stopPropagation()
        onMetricClick && onMetricClick(payload)
      }}
      className="cursor-pointer hover:opacity-80 transition-opacity"
    />
  )
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
  hideTabs = false,
  data = [],
  colorMap = DEFAULT_COLOR_MAP,
  onExpand,
  onMetricClick,
}) => {
  const [selectedMetric, setSelectedMetric] = useState(null)
  const [activeHoverMetric, setActiveHoverMetric] = useState(null)
  const [isHoveringBox, setIsHoveringBox] = useState(false)

  const getColor = (category) => {
    return colorMap[category] || "#038AF9"
  }

  const handlePointClick = (pointData) => {
    if (pointData && pointData.name) {
      if (onMetricClick) {
        onMetricClick(pointData)
      } else {
        setSelectedMetric(pointData)
      }
      setActiveHoverMetric(null)
    }
  }

  const handleContainerMouseLeave = () => {
    if (!isHoveringBox) {
      setActiveHoverMetric(null)
    }
  }

  return (
    <>
      <div className="w-full bg-white rounded-2xl border border-gray-100 md:p-5 p-4 shadow-xs flex flex-col justify-between font-urbanist h-full">
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

          {onExpand && (
            <button
              type="button"
              onClick={onExpand}
              className="w-8 h-8 rounded-full bg-[#F7F7F7] hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              title="Expand chart"
            >
              <ArrowUpRight className="w-4 h-4 text-[#080808] stroke-[2.5]" />
            </button>
          )}
        </div>

        {/* Dynamic Tabs (Hidden if hideTabs is true) */}
        {!hideTabs && tabs && tabs.length > 0 && (
          <div className="flex items-center gap-2 mb-4 bg-gray-100/70 p-1 rounded-2xl w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange && onTabChange(tab.id)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-base font-medium transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-white text-textPrimary shadow-2xs font-semibold"
                    : "text-[#5A5A5A] hover:text-textPrimary bg-[#F7F7F7]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Recharts Scatter Plot Area */}
        <div
          className="w-full flex-1 min-h-[340px] relative mt-2"
          onMouseLeave={handleContainerMouseLeave}
        >
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 15, right: 20, bottom: 15, left: 15 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />

              <XAxis
                type="number"
                dataKey="x"
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
                stroke="#94A3B8"
                fontSize={11}
                fontWeight={500}
                tickLine={false}
                height={30}
                tick={{ fontSize: 16 }}
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
                tick={{ fontSize: 16 }}
                width={45}
                label={{
                  value: "Overall Satisfaction",
                  angle: -90,
                  position: "insideLeft",
                  offset: 0,
                  style: { textAnchor: "middle", fontSize: 16, fontWeight: 400, fill: "#1F1F21" },
                }}
              />

              <ZAxis type="number" range={[100, 100]} />

              {/* Blue Dashed Curve Line */}
              <Scatter
                data={CURVE_POINTS}
                line={{ stroke: "#038AF9", strokeDasharray: "3 3", strokeWidth: 1.5 }}
                lineType="joint"
                shape={() => null}
                isAnimationActive={false}
              />

              {/* Dotted Vertical Reference Line at 2.5 */}
              <ReferenceLine x={2.5} stroke="#038AF9" strokeDasharray="3 3" strokeWidth={1.5} />

              <Scatter
                data={data}
                shape={
                  <SquareShape
                    onDotHover={(item) => setActiveHoverMetric(item)}
                    onMetricClick={handlePointClick}
                  />
                }
                onClick={(entry) => handlePointClick(entry?.payload || entry)}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getColor(entry.category)} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>

          {/* Floating Hover Box */}
          {activeHoverMetric && activeHoverMetric.cx !== undefined && (
            <div
              onMouseEnter={() => setIsHoveringBox(true)}
              onMouseLeave={() => {
                setIsHoveringBox(false)
                setActiveHoverMetric(null)
              }}
              onClick={() => handlePointClick(activeHoverMetric)}
              className="absolute z-30 cursor-pointer bg-white border border-gray-200/90 rounded-2xl p-4 shadow-2xl space-y-2.5 min-w-[210px] font-urbanist select-none hover:border-[#038AF9] transition-all transform -translate-x-1/2"
              style={{
                left: `${activeHoverMetric.cx}px`,
                top:
                  activeHoverMetric.cy < 170
                    ? `${activeHoverMetric.cy + 16}px`
                    : `${activeHoverMetric.cy - 165}px`,
              }}
            >
              <p className="text-[16px] font-medium text-textPrimary leading-[24px] font-urbanist">
                {activeHoverMetric.name}
              </p>

              <div className="border-b border-dashed border-gray-200" />

              <div className="space-y-1.5 text-[14px] font-normal text-textPrimary leading-[20px] font-urbanist">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-textPrimary font-normal">Overall Score</span>
                  <span className="font-normal text-textPrimary">
                    : {activeHoverMetric.overall !== undefined ? (activeHoverMetric.overall % 1 === 0 ? activeHoverMetric.overall.toFixed(0) : activeHoverMetric.overall.toFixed(1)) : "1"}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <span className="text-textPrimary font-normal">Students Rating</span>
                  <span className="font-normal text-textPrimary">
                    {activeHoverMetric.student !== undefined ? activeHoverMetric.student.toFixed(1) : "0.5"}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <span className="text-textPrimary font-normal">Parents Rating</span>
                  <span className="font-normal text-textPrimary">
                    {activeHoverMetric.parent !== undefined ? activeHoverMetric.parent.toFixed(1) : "1.5"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Explanatory Caption matching Image 2 reference */}
        <div className="text-center space-y-1 mt-4 pt-1">
          <p className="text-[16px] font-normal text-textPrimary">Opportunity for Improvement</p>
          <p className="text-[14px] font-normal text-[#5A5A5A]">
            Lower satisfaction (left) highlights greater opportunity for improvement; higher satisfaction (right) reflects stronger performance.
          </p>
        </div>
      </div>

      {/* ScatterPlotModal component */}
      <ScatterPlotModal
        isOpen={!!selectedMetric}
        onClose={() => setSelectedMetric(null)}
        metric={selectedMetric}
      />
    </>
  )
}

export default ScatterPlot