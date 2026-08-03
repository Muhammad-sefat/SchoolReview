import React from "react"
import { Title48 } from "@/components/typho/Title"
import KeyMetricsCard from "@/components/leaderDashboard/overview/KeyMetricsCard"
import ScatterPlot from "@/components/graphCharts/ScatterPlot"
import PrioprityArea from "@/components/leaderDashboard/overview/PrioprityArea"

const UpTrendArrowSmall = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M17.5 15V7.5H10M17.07 7.93L6.5 18.5" stroke="#66BB6A" strokeWidth="2" strokeLinecap="square" />
  </svg>
)

const UpTrendArrowBig = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className="shrink-0">
    <path d="M21.875 18.75V8.125H11.25M21.3392 8.66075L8.125 21.875" stroke="#66BB6A" strokeWidth="1.875" strokeLinecap="square" />
  </svg>
)

const DownTrendArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path d="M7.4987 14.5846H14.582V7.5013M14.2249 14.2274L5.41536 5.41797" stroke="#E53935" strokeWidth="1.25" strokeLinecap="square" />
  </svg>
)

const PARENT_STUDENT_DATA = [
  { id: 1, name: "Facilities", x: 0.5, y: 0.3, category: "low", overall: 1.5, student: 1.2, parent: 1.8 },
  { id: 2, name: "Learning Support", x: 0.8, y: 0.6, category: "low", overall: 1.0, student: 0.5, parent: 1.5 },
  { id: 3, name: "Homework Load", x: 1.1, y: 0.4, category: "low", overall: 1.2, student: 0.8, parent: 1.6 },
  { id: 4, name: "Individual Support", x: 1.7, y: 1.7, category: "medium", overall: 2.2, student: 2.0, parent: 2.4 },
  { id: 5, name: "Value for Money", x: 2.4, y: 2.3, category: "neutral", overall: 2.7, student: 2.5, parent: 2.9 },
  { id: 6, name: "School Communication", x: 2.6, y: 2.6, category: "neutral", overall: 3.2, student: 3.0, parent: 3.4 },
  { id: 7, name: "Fairness", x: 3.5, y: 3.5, category: "good", overall: 3.6, student: 3.4, parent: 3.8 },
  { id: 8, name: "Activities", x: 3.6, y: 3.8, category: "good", overall: 3.8, student: 3.6, parent: 4.0 },
  { id: 9, name: "Leadership", x: 3.7, y: 3.4, category: "good", overall: 3.7, student: 3.5, parent: 3.9 },
  { id: 10, name: "Teaching Quality", x: 4.2, y: 3.7, category: "good", overall: 4.0, student: 3.8, parent: 4.2 },
  { id: 11, name: "Safety & Safeguarding", x: 4.5, y: 4.4, category: "best", overall: 4.5, student: 4.3, parent: 4.7 },
  { id: 12, name: "Inclusion", x: 4.8, y: 4.7, category: "best", overall: 4.8, student: 4.6, parent: 5.0 },
  { id: 13, name: "Voice & Agency", x: 4.9, y: 4.5, category: "best", overall: 4.6, student: 4.4, parent: 4.8 },
  { id: 14, name: "Classroom Climate", x: 5.0, y: 4.8, category: "best", overall: 4.9, student: 4.8, parent: 5.0 },
]

const PerformanceOverTimeCard = () => (
  <div className="w-full bg-white rounded-2xl border border-gray-100 p-5 shadow-xs flex flex-col justify-between h-full font-urbanist">
    {/* Card Header */}
    <div className="flex items-center justify-between gap-4 mb-2">
      <h3 className="text-xl font-semibold text-[#080808]">Performance Over Time</h3>
      <div className="flex items-center gap-1 text-[16px] font-medium text-[#E53935]">
        <DownTrendArrow />
        <span>10%</span>
      </div>
    </div>

    {/* Smooth Line Chart Graphic with Y-Axis Numbers (5, 4, 3, 2, 1) */}
    <div className="w-full flex-1 min-h-[170px] relative flex items-stretch pt-2">
      {/* Y-Axis Number Scale */}
      <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-400 pr-3 py-1">
        <span>5</span>
        <span>4</span>
        <span>3</span>
        <span>2</span>
        <span>1</span>
      </div>

      {/* SVG Chart Area */}
      <div className="flex-1 flex flex-col justify-end">
        <svg className="w-full h-32 overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#038AF9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#038AF9" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          <line x1="0" y1="10" x2="500" y2="10" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="0" y1="35" x2="500" y2="35" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="0" y1="60" x2="500" y2="60" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="0" y1="85" x2="500" y2="85" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="0" y1="110" x2="500" y2="110" stroke="#F1F5F9" strokeWidth="1" />

          <path
            d="M0,70 C50,20 80,60 120,45 C160,30 200,65 240,40 C280,15 320,50 360,30 C400,60 450,85 500,75 L500,120 L0,120 Z"
            fill="url(#blueGrad)"
          />

          <path
            d="M0,70 C50,20 80,60 120,45 C160,30 200,65 240,40 C280,15 320,50 360,30 C400,60 450,85 500,75"
            fill="none"
            stroke="#038AF9"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <div className="flex justify-between items-center text-xs font-normal text-gray-400 pt-3 border-t border-gray-100">
          <span>2022</span>
          <span>2023</span>
          <span>2024</span>
          <span>2025</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  </div>
)

const SchoolPerformanceSection = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Section Title */}
      <Title48 className="text-[#038AF9] font-bold">School Performance</Title48>

      {/* Top Rating Summary Badges */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-5">
        {/* School Rating Pill with 5-Segment Rating Distribution Bar */}
        <div className="bg-white border border-gray-200/80 px-4 sm:px-6 py-3 rounded-3xl sm:rounded-full flex flex-wrap items-center gap-3 sm:gap-4 shadow-2xs max-w-full">
          <span className="text-[20px] sm:text-[24px] font-medium text-[#080808]">School Rating</span>
          <span className="bg-[#038AF9] text-white text-[18px] sm:text-[21px] font-medium px-3.5 py-1 rounded-full flex items-center gap-1.5 shrink-0">
            <span>4.5</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.34255 2.5851C9.91559 1.47163 11.5219 1.47163 12.0949 2.5851L14.0256 6.33704C14.0577 6.39929 14.1179 6.44262 14.1875 6.45361L18.3843 7.11554C19.629 7.31187 20.1251 8.82245 19.2349 9.70637L16.2305 12.6897C16.1808 12.7391 16.1578 12.809 16.1689 12.878L16.8311 17.0417C17.0273 18.2757 15.728 19.2097 14.6042 18.6427L10.8189 16.733C10.756 16.7012 10.6815 16.7012 10.6186 16.733L6.83334 18.6427C5.70942 19.2097 4.41021 18.2757 4.60646 17.0417L5.26867 12.878C5.27964 12.809 5.2567 12.7391 5.20694 12.6897L2.20253 9.70637C1.31244 8.82245 1.80846 7.31187 3.05323 7.11554L7.24996 6.45361C7.31964 6.44262 7.37981 6.39929 7.41185 6.33704L9.34255 2.5851Z" fill="white" />
            </svg>
          </span>

          <div className="w-48 sm:w-60 md:w-64 flex items-center gap-0.5 h-7 rounded-full overflow-hidden p-0.5 bg-gray-50 border border-gray-100 shrink-0">
            <div style={{ width: "60%" }} className="h-full bg-[#E53935] text-white text-[11px] font-bold flex items-center justify-center rounded-l-full">
              8%
            </div>
            <div style={{ width: "60%" }} className="h-full bg-[#FB8C00] text-white text-[11px] font-bold flex items-center justify-center">
              10%
            </div>
            <div style={{ width: "60%" }} className="h-full bg-[#90A4AE] text-white text-[11px] font-bold flex items-center justify-center">
              20%
            </div>
            <div style={{ width: "60%" }} className="h-full bg-[#66BB6A] text-white text-[11px] font-bold flex items-center justify-center">
              25%
            </div>
            <div style={{ width: "60%" }} className="h-full bg-[#2E7D32] text-white text-[11px] font-bold flex items-center justify-center rounded-r-full">
              37%
            </div>
          </div>

          <div className="flex items-center gap-1 text-[18px] sm:text-[21px] font-medium text-[#66BB6A] shrink-0">
            <UpTrendArrowSmall />
            <span>9%</span>
          </div>
        </div>

        {/* Recommendation Pill */}
        <div className="bg-white border border-gray-200/80 px-5 sm:px-7 py-3 rounded-full flex items-center gap-3 sm:gap-4 shadow-2xs shrink-0">
          <span className="text-[20px] sm:text-[24px] font-medium text-[#080808]">Recommendation</span>
          <div className="flex items-center gap-1 text-[20px] sm:text-[24px] font-medium text-[#66BB6A]">
            <UpTrendArrowBig />
            <span>80%</span>
          </div>
        </div>
      </div>

      {/* Row 1: Outer Container for Key Metrics & Performance Over Time */}
      <div className="bg-[#F6F6F6] p-2 sm:p-3 rounded-3xl sm:rounded-4xl border border-gray-200/60">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          <div className="md:col-span-5 flex">
            <KeyMetricsCard />
          </div>
          <div className="md:col-span-7 flex">
            <PerformanceOverTimeCard />
          </div>
        </div>
      </div>

      {/* Row 2: Separate Outer Container for Scatter Plot & Priority Areas */}
      <div className="bg-[#F6F6F6] p-2 sm:p-3 rounded-3xl sm:rounded-4xl border border-gray-200/60">
        <div className="grid grid-cols-12 gap-4 items-stretch">
          <div className="col-span-12 lg:col-span-8 flex flex-col">
            <ScatterPlot
              title="Student & Parent Experience"
              subtitle=""
              hideTabs={true}
              xAxisLabel="Opportunity for Improvement"
              showReferenceLine={false}
              showBottomCaption={true}
              data={PARENT_STUDENT_DATA}
              className="h-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col">
            <PrioprityArea />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolPerformanceSection
