import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

// Data for each metric across Student, Teacher, and Observer views
const data = [
  { metric: 'Clarity', student: 5.0, teacher: 4.0, observer: 4.0, statusColor: '#F59E0B' },
  { metric: 'Purpose', student: 4.8, teacher: 3.5, observer: 3.2, statusColor: '#EF4444' },
  { metric: 'Progression', student: 3.2, teacher: 4.8, observer: 3.5, statusColor: '#10B981' },
  { metric: 'Challenge', student: 4.9, teacher: 4.2, observer: 2.8, statusColor: '#10B981' },
  { metric: 'Engagement', student: 3.2, teacher: 3.6, observer: 4.4, statusColor: '#EF4444' },
  { metric: 'Feedback', student: 4.5, teacher: 3.8, observer: 3.9, statusColor: '#10B981' },
];

// Custom Angle Tick Component to render the label text + colored status badge
const CustomPolarAngleTick = ({ payload, x, y, cx, cy, ...rest }) => {
  const item = data.find((d) => d.metric === payload.value);

  // Calculate text placement offset away from center
  const radius = Math.hypot(x - cx, y - cy);
  const factor = (radius + 24) / radius;
  const labelX = cx + (x - cx) * factor;
  const labelY = cy + (y - cy) * factor;

  // Text alignment dynamic based on position relative to center
  let textAnchor = 'middle';
  if (labelX > cx + 10) textAnchor = 'start';
  if (labelX < cx - 10) textAnchor = 'end';

  return (
    <g transform={`translate(${labelX},${labelY})`}>
      <text
        x={0}
        y={0}
        textAnchor={textAnchor}
        dominantBaseline="central"
        className="fill-gray-600 text-sm font-medium font-sans"
      >
        {payload.value}
      </text>

      {/* Colored Status Badge Icon next to text */}
      {item && (
        <g transform={`translate(${textAnchor === 'start' ? payload.value.length * 8 + 8 : textAnchor === 'end' ? 12 : payload.value.length * 4 + 8}, -8)`}>
          <circle cx="0" cy="8" r="8" fill={item.statusColor} />
          {/* Glasses / Scales icon placeholder mark inside badge */}
          <path
            d="M -3 8 Q 0 5 3 8 Q 0 11 -3 8"
            stroke="white"
            strokeWidth="1.2"
            fill="none"
          />
        </g>
      )}
    </g>
  );
};

export default function RadarChartComponent() {
  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl p-8 border border-gray-100 shadow-sm font-sans flex flex-col md:flex-row items-center justify-between">
      {/* Radar Chart Section */}
      <div className="w-full md:w-3/4 h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            {/* Hexagonal grid background */}
            <PolarGrid gridType="polygon" stroke="#E2E8F0" strokeWidth={1} />

            <PolarAngleAxis
              dataKey="metric"
              tick={(props) => <CustomPolarAngleTick {...props} />}
            />

            {/* Scale numbers 1-5 down the top center axis */}
            <PolarRadiusAxis
              angle={90}
              domain={[0, 5]}
              ticks={[1, 2, 3, 4, 5]}
              axisLine={false}
              tick={{ fill: '#64748B', fontSize: 11, fontWeight: 500 }}
            />

            {/* Datasets */}
            {/* 1. Student (Deep Purple) */}
            <Radar
              name="Student"
              dataKey="student"
              stroke="#7C3AED"
              strokeWidth={2}
              fill="transparent"
              isAnimationActive={true}
            />

            {/* 2. Teacher (Light Lavender) */}
            <Radar
              name="Teacher"
              dataKey="teacher"
              stroke="#C4B5FD"
              strokeWidth={2}
              fill="transparent"
              isAnimationActive={true}
            />

            {/* 3. Observer (Greenish-Yellow) */}
            <Radar
              name="Observer"
              dataKey="observer"
              stroke="#84CC16"
              strokeWidth={2}
              fill="transparent"
              isAnimationActive={true}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Right Legend */}
      <div className="w-full md:w-1/4 flex md:flex-col flex-row gap-6 items-start justify-center pl-4 mt-6 md:mt-0">
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded-md bg-[#7C3AED]" />
          <span className="text-gray-700 font-medium text-sm">Student</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded-md bg-[#C4B5FD]" />
          <span className="text-gray-700 font-medium text-sm">Teacher</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded-md bg-[#84CC16]" />
          <span className="text-gray-700 font-medium text-sm">Observer</span>
        </div>
      </div>
    </div>
  );
}