import React from "react"
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts"

const DEFAULT_PIE_DATA = [
  { name: "Effective", value: 44, color: "#B1DBFD" },
  { name: "Developing", value: 24, color: "#038AF9" },
  { name: "Needs support", value: 30, color: "#037CE0" },
]

// Custom label inside pie slices
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
}) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill={value === 44 ? "#333333" : "white"}
      textAnchor="middle"
      dominantBaseline="central"
      className="text-[10px] sm:text-[11px] font-semibold"
    >
      {`${value}%`}
    </text>
  )
}

const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0]
    return (
      <div className="pointer-events-none bg-white border border-gray-100 rounded-xl px-3 py-1.5 shadow-md text-xs font-medium text-[#1F1F21] select-none flex items-center gap-2">
        <span
          className="w-2.5 h-2.5 rounded-md"
          style={{ backgroundColor: data.payload.color }}
        />
        <span>
          {data.name}: <strong className="font-bold">{data.value}%</strong>
        </span>
      </div>
    )
  }
  return null
}

const PieChartComponent = ({
  title = "Teacher Effectiveness Distribution",
  data = DEFAULT_PIE_DATA,
}) => {
  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-4 md:p-5 shadow-xs flex flex-col justify-between h-full min-w-0 overflow-hidden">
      {/* Title with Dotted Separator */}
      <div className="border-b border-dashed border-gray-200/70 pb-3.5 mb-2 shrink-0">
        <h3 className="font-urbanist md:text-[24px] text-lg sm:text-xl font-semibold text-[#080808]">
          {title}
        </h3>
      </div>

      {/* Chart & Legend Grid */}
      <div className="flex-1 flex flex-col xl:flex-row items-center justify-between gap-4 py-1 min-w-0">
        {/* Left Legend */}
        <div className="space-y-2.5 shrink-0 min-w-0 w-full xl:w-auto">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5 text-xs sm:text-base font-medium text-[#5A5A5A]">
              <span
                className="w-3.5 h-3.5 rounded-md shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="truncate">
                {item.name} <span className="text-[#5A5A5A] font-normal">({item.value}%)</span>
              </span>
            </div>
          ))}
        </div>

        {/* Right Pie Chart Container */}
        <div className="w-full xl:w-[184px] h-[184px] relative shrink-0 min-w-0 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={15}
                outerRadius={72}
                paddingAngle={2}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="#ffffff" strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip content={<CustomPieTooltip />} />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default PieChartComponent
