import React from "react"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

const SVG_PATH =
  "M1.51313 9.04575C1.20931 9.04575 0.968786 8.9584 0.791558 8.7837C0.61433 8.60901 0.525716 8.37228 0.525716 8.07353V5.33915C0.525716 5.0404 0.61433 4.80367 0.791558 4.62897C0.968786 4.45428 1.20931 4.36693 1.51313 4.36693H4.22092C4.52474 4.36693 4.764 4.45428 4.93869 4.62897C5.11592 4.80367 5.20454 5.0404 5.20454 5.33915V8.07353C5.20454 8.37228 5.11592 8.60901 4.93869 8.7837C4.764 8.9584 4.52474 9.04575 4.22092 9.04575H1.51313ZM1.61567 8.25202H4.11458C4.20826 8.25202 4.28042 8.22544 4.33105 8.17227C4.38422 8.11657 4.41081 8.04314 4.41081 7.952V5.46448C4.41081 5.3708 4.38422 5.29738 4.33105 5.24421C4.28042 5.18851 4.20826 5.16066 4.11458 5.16066H1.61567C1.52452 5.16066 1.45237 5.18851 1.3992 5.24421C1.34856 5.29738 1.32324 5.3708 1.32324 5.46448V7.952C1.32324 8.04314 1.34856 8.11657 1.3992 8.17227C1.45237 8.22544 1.52452 8.25202 1.61567 8.25202ZM6.66667 10.8003C6.55527 10.8003 6.46159 10.7636 6.38563 10.6902C6.31221 10.6167 6.2755 10.5256 6.2755 10.4167V2.99594C6.2755 2.88708 6.31221 2.7972 6.38563 2.7263C6.46159 2.65288 6.55527 2.61617 6.66667 2.61617C6.7806 2.61617 6.87428 2.65288 6.9477 2.7263C7.02365 2.7972 7.06163 2.88708 7.06163 2.99594V10.4167C7.06163 10.5256 7.02365 10.6167 6.9477 10.6902C6.87428 10.8003 6.7806 10.8003 6.66667 10.8003ZM9.11621 9.04575C8.81239 9.04575 8.57187 8.9584 8.39464 8.7837C8.21741 8.60901 8.1288 8.37228 8.1288 8.07353V5.33915C8.1288 5.0404 8.21741 4.80367 8.39464 4.62897C8.57187 4.45428 8.81239 4.36693 9.11621 4.36693H11.8202C12.124 4.36693 12.3645 4.45428 12.5418 4.62897C12.719 4.80367 12.8076 5.0404 12.8076 5.33915V8.07353C12.8076 8.37228 12.719 8.60901 12.5418 8.7837C12.3645 8.9584 12.124 9.04575 11.8202 9.04575H9.11621ZM9.21875 8.25202H11.7177C11.8088 8.25202 11.881 8.22544 11.9341 8.17227C11.9873 8.11657 12.0139 8.04314 12.0139 7.952V5.46448C12.0139 5.3708 11.9873 5.29738 11.9341 5.24421C11.881 5.18851 11.8088 5.16066 11.7177 5.16066H9.21875C9.1276 5.16066 9.05545 5.18851 9.00228 5.24421C8.94911 5.29738 8.92253 5.3708 8.92253 5.46448V7.952C8.92253 8.04314 8.94911 8.11657 9.00228 8.17227C9.05545 8.22544 9.1276 8.25202 9.21875 8.25202Z"

const DEFAULT_RADAR_DATA = [
  { subject: "Clarity", student: 4.5, teacher: 4.0, observer: 3.2, iconColor: "#FB8C00" },
  { subject: "Purpose", student: 4.8, teacher: 3.8, observer: 3.5, iconColor: "#E53935" },
  { subject: "Progression", student: 4.2, teacher: 4.5, observer: 3.8, iconColor: "#66BB6A" },
  { subject: "Challenge", student: 4.9, teacher: 4.8, observer: 3.9, iconColor: "#66BB6A" },
  { subject: "Engagement", student: 4.3, teacher: 4.1, observer: 3.7, iconColor: "#E53935" },
  { subject: "Feedback", student: 4.6, teacher: 4.2, observer: 3.8, iconColor: "#66BB6A" },
]

const DEFAULT_LEGENDS = [
  { name: "Student", color: "#723CEB", key: "student" },
  { name: "Teacher", color: "#C7B0F7", key: "teacher" },
  { name: "Observer", color: "#8DC613", key: "observer" },
]

const createRenderCustomTick = (radarData) => ({ payload, x, y, cx, cy }) => {
  const item = radarData.find((d) => d.subject === payload.value)
  const iconColor = item?.iconColor || "#FB8C00"

  const dx = x - cx
  const dy = y - cy

  const width = 160
  const height = 30

  let left = x - width / 2
  let top = y - height / 2

  if (dx > 20) {
    left = x + 8
  } else if (dx < -20) {
    left = x - width - 8
  } else if (dy < 0) {
    top = y - 32
  } else {
    top = y + 8
  }

  return (
    <foreignObject
      x={left}
      y={top}
      width={width}
      height={height}
      className="overflow-visible"
    >
      <div
        className={`flex items-center gap-1.5 whitespace-nowrap text-[15px] font-normal text-textPrimary font-urbanist ${dx < -20 ? "justify-end" : dx > 20 ? "justify-start" : "justify-center"
          }`}
      >
        <span>{payload.value}</span>
        <span
          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 shadow-2xs"
          style={{ backgroundColor: iconColor }}
        >
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
            <path d={SVG_PATH} fill="white" />
          </svg>
        </span>
      </div>
    </foreignObject>
  )
}

const renderRadiusTick = ({ payload, x, y }) => {
  if (!payload || payload.value === undefined) return null

  return (
    <g transform={`translate(${x},${y})`}>
      <circle
        cx="0"
        cy="0"
        r="10"
        fill="#FAFAFA"
        stroke="#E0E0E0"
        strokeWidth="0.8"
      />
      <text
        x="0"
        y="3.5"
        textAnchor="middle"
        fill="#1F1F21"
        fontSize={11}
        fontWeight={600}
        className="font-urbanist"
      >
        {payload.value}
      </text>
    </g>
  )
}

const TeachingQualityRadarChart = ({
  title = "Teaching Quality",
  data = DEFAULT_RADAR_DATA,
  legends = DEFAULT_LEGENDS,
}) => {
  return (
    <div className="w-full space-y-4 font-urbanist">
      {/* Category Header */}
      <h3 className="text-[24px] font-semibold text-[#080808]">
        {title}
      </h3>

      {/* Single Main Outer Box Container */}
      <div className="w-full bg-white rounded-3xl border border-gray-200/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-2xs">
        {/* Left Radar Chart Box */}
        <div className="w-full md:w-[58%] h-[340px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid stroke="#EAEAEA" strokeWidth={1} />
              <PolarAngleAxis
                dataKey="subject"
                tick={createRenderCustomTick(data)}
              />

              <PolarRadiusAxis
                angle={90}
                domain={[0, 5]}
                ticks={[1, 2, 3, 4, 5]}
                stroke="none"
                tick={renderRadiusTick}
              />

              {legends.map((leg) => (
                <Radar
                  key={leg.key}
                  name={leg.name}
                  dataKey={leg.key}
                  stroke={leg.color}
                  fill="none"
                  fillOpacity={0}
                  strokeWidth={2}
                />
              ))}
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Right Legends Row (Rounded Square Legend Color Boxes) */}
        <div className="w-full md:w-[38%] flex items-center justify-center md:justify-start gap-6 text-[16px] font-normal text-textPrimary pl-2 md:pl-8">
          {legends.map((leg) => (
            <div key={leg.key} className="flex items-center gap-2.5 shrink-0">
              {/* Rounded Square Box matching user image */}
              <span
                className="w-3.5 h-3.5 rounded-xs shrink-0"
                style={{ backgroundColor: leg.color }}
              />
              <span>{leg.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeachingQualityRadarChart
