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

// Generate smooth curve line points from (0,0) -> (2.5, 1.35) -> (5,5)
const CURVE_POINTS = Array.from({ length: 30 }, (_, i) => {
  const x = (i / 29) * 5
  const y = 0.184 * x * x + 0.08 * x
  return { x, y }
})

// Custom Square Dot Shape for Recharts
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
  className,
  hideTabs = false,
  data = [],
  colorMap = DEFAULT_COLOR_MAP,
  onExpand,
  onMetricClick,
  xAxisLabel = "Improvement Since Last Year",
  yAxisLabel = "Overall Satisfaction",
  showReferenceLine = true,
  showBottomCaption = false,
  bottomCaptionTitle = null,
  bottomCaptionDesc = "Lower satisfaction (left) highlights greater opportunity for improvement; higher satisfaction (right) reflects stronger performance.",
  overallRatingLabel = "Overall Rating",
  hideBottomBars = false,
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
      <div className={`${className} w-full bg-white rounded-2xl border border-gray-100 md:p-5 p-4 shadow-xs flex flex-col justify-between font-urbanist h-[670px]`}>
        {/* Header Area */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-textBlack leading-snug">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15.1075 12.5439C15.1075 12.9174 14.8101 13.201 14.478 13.201C14.1391 13.201 13.8555 12.8966 13.8555 12.5715V10.0121L13.98 6.78174L12.8386 8.07528L5.96973 14.9373C5.84521 15.0687 5.69303 15.124 5.53394 15.124C5.18807 15.124 4.89062 14.8127 4.89062 14.4807C4.89062 14.3285 4.9598 14.1694 5.08431 14.0449L11.9394 7.17603L13.226 6.0485L9.85034 6.15918H7.44312C7.118 6.15918 6.82056 5.87557 6.82056 5.54354C6.82056 5.21151 7.08341 4.91406 7.47078 4.91406H14.4296C14.8446 4.91406 15.1006 5.19076 15.1006 5.58504L15.1075 12.5439Z" fill="#080808" />
              </svg>
            </button>
          )}
        </div>

        {/* Dynamic Tabs */}
        {!hideTabs && tabs && tabs.length > 0 && (
          <div className="flex items-center gap-2 mb-4 bg-gray-100/70 p-1.5 rounded-full w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange && onTabChange(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-base font-medium transition-all cursor-pointer ${activeTab === tab.id
                  ? "bg-white text-gray-900 shadow-xs"
                  : "text-gray-500 hover:text-gray-900"
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
            <ScatterChart margin={{ top: 15, right: 20, bottom: 25, left: 15 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />

              <XAxis
                type="number"
                dataKey="x"
                name={xAxisLabel}
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
                tickFormatter={(val) => val}
                stroke="#94A3B8"
                fontSize={11}
                fontWeight={500}
                tickLine={false}
                height={40}
                tick={{ fontSize: 16 }}
                label={{
                  value: xAxisLabel,
                  position: "insideBottom",
                  offset: -5,
                  style: { textAnchor: "middle", fontSize: 16, fontWeight: 400, fill: "#1F1F21" },
                }}
              />

              <YAxis
                type="number"
                dataKey="y"
                name={yAxisLabel}
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
                  value: yAxisLabel,
                  angle: -90,
                  position: "insideLeft",
                  offset: 0,
                  style: { textAnchor: "middle", fontSize: 16, fontWeight: 400, fill: "#1F1F21" },
                }}
              />

              <ZAxis type="number" range={[100, 100]} />

              {/* Blue Dashed Curve Line */}
              {/* <Scatter
                data={CURVE_POINTS}
                line={{ stroke: "#038AF9", strokeDasharray: "3 3", strokeWidth: 1.5 }}
                lineType="joint"
                shape={() => null}
                isAnimationActive={false}
              /> */}

              {/* Dotted Vertical Reference Line at 2.5 (Rendered ONLY when showReferenceLine is true) */}
              {showReferenceLine && (
                <ReferenceLine x={2.5} stroke="#038AF9" strokeDasharray="3 3" strokeWidth={1.5} />
              )}

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
              className="absolute z-30 cursor-pointer bg-white border border-gray-200/90 rounded-2xl p-4 shadow-2xl space-y-2.5 min-w-[220px] font-urbanist select-none hover:border-[#038AF9] transition-all transform -translate-x-1/2"
              style={{
                left: `${activeHoverMetric.cx}px`,
                top:
                  activeHoverMetric.cy < 200
                    ? `${activeHoverMetric.cy + 16}px`
                    : `${activeHoverMetric.cy - 195}px`,
              }}
            >
              <p className="text-[16px] font-medium text-textPrimary leading-[24px] font-urbanist">
                {activeHoverMetric.name}
              </p>

              <div className="border-b border-dashed border-gray-200" />

              <div className="space-y-1.5 text-[14px] font-normal text-textPrimary leading-[20px] font-urbanist">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-textPrimary font-normal">{overallRatingLabel}</span>
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

              {/* Professional View Details Button at bottom of hover box */}
              <div className="border-t border-dashed border-gray-200 pt-2 text-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePointClick(activeHoverMetric)
                  }}
                  className="w-full py-1.5 px-3 rounded-lg bg-[#038AF9] hover:bg-[#0270ce] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Explanatory Caption (Rendered ONLY when showBottomCaption is true) */}
        {showBottomCaption && (
          <div className="text-center mt-2">
            {bottomCaptionTitle && bottomCaptionTitle !== xAxisLabel && (
              <p className="text-[16px] font-normal text-[#080808] mb-1">{bottomCaptionTitle}</p>
            )}
            {bottomCaptionDesc && (
              <p className="text-[14px] font-normal text-[#080808]">
                {bottomCaptionDesc}
              </p>
            )}
          </div>
        )}
      </div>

      {/* ScatterPlotModal component */}
      <ScatterPlotModal
        isOpen={!!selectedMetric}
        onClose={() => setSelectedMetric(null)}
        metric={selectedMetric}
        hideBottomBars={hideBottomBars}
      />
    </>
  )
}

export default ScatterPlot