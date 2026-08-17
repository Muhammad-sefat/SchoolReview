import React from "react"
import { Title48 } from "@/components/typho/Title"
import ScatterPlot from "@/components/graphCharts/ScatterPlot"
import PrioprityArea from "@/components/leaderDashboard/overview/PrioprityArea"

const TEACHER_EXPERIENCE_DATA = [
  { id: 1, name: "Fairness", x: 0.5, y: 0.3, category: "low", overall: 1.5, student: 1.2, parent: 1.8 },
  { id: 2, name: "Adaptive Teaching", x: 0.7, y: 0.5, category: "low", overall: 1.0, student: 0.5, parent: 1.5 },
  { id: 3, name: "Ongoing Improvement", x: 1.0, y: 0.7, category: "low", overall: 1.2, student: 0.8, parent: 1.6 },
  { id: 4, name: "Classroom Safety", x: 1.5, y: 1.3, category: "medium", overall: 2.2, student: 2.0, parent: 2.4 },
  { id: 5, name: "Clarity", x: 1.8, y: 1.6, category: "medium", overall: 2.5, student: 2.3, parent: 2.7 },
  { id: 6, name: "Inclusion", x: 2.0, y: 1.4, category: "medium", overall: 2.2, student: 2.0, parent: 2.4 },
  { id: 7, name: "Pace", x: 2.3, y: 2.3, category: "neutral", overall: 2.8, student: 2.6, parent: 3.0 },
  { id: 8, name: "Purpose", x: 2.6, y: 2.7, category: "neutral", overall: 3.2, student: 3.0, parent: 3.4 },
  { id: 9, name: "Support", x: 3.4, y: 3.5, category: "good", overall: 3.6, student: 3.4, parent: 3.8 },
  { id: 10, name: "Behaviour", x: 3.6, y: 3.8, category: "good", overall: 3.8, student: 3.6, parent: 4.0 },
  { id: 11, name: "Lesson Coherence", x: 3.7, y: 3.4, category: "good", overall: 3.7, student: 3.5, parent: 3.9 },
  { id: 12, name: "Meaningful Assessment", x: 4.1, y: 3.7, category: "good", overall: 4.0, student: 3.8, parent: 4.2 },
  { id: 13, name: "Engagement", x: 4.5, y: 4.4, category: "best", overall: 4.5, student: 4.3, parent: 4.7 },
  { id: 14, name: "Feedback", x: 4.8, y: 4.7, category: "best", overall: 4.8, student: 4.6, parent: 5.0 },
  { id: 15, name: "Challenge", x: 4.9, y: 4.5, category: "best", overall: 4.6, student: 4.4, parent: 4.8 },
  { id: 16, name: "Dialogue", x: 5.0, y: 4.8, category: "best", overall: 4.9, student: 4.8, parent: 5.0 },
]

const TEACHER_PRIORITY_GROUPS = [
  {
    id: "needs-support",
    title: "Needs Support",
    borderColor: "border-[#E53935]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA]",
    items: [
      { label: "Classroom Safety", score: "2.5" },
      { label: "Clarity", score: "2.8" },
      { label: "Inclusion", score: "2.0" },
      { label: "Fairness", score: "1.8" },
      { label: "Adaptive Teaching", score: "1.8" },
      { label: "Ongoing Improvement", score: "1.8" },
    ],
  },
  {
    id: "developing",
    title: "Developing",
    borderColor: "border-[#FB8C00]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA]",
    items: [
      { label: "Pace", score: "3.0" },
      { label: "Purpose", score: "3.8" },
      { label: "Support", score: "3.5" },
      { label: "Behaviour", score: "3.5" },
      { label: "Lesson Coherence", score: "3.5" },
      { label: "Meaningful Assessment", score: "3.5" },
    ],
  },
  {
    id: "effective",
    title: "Effective",
    borderColor: "border-[#66BB6A]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA]",
    items: [
      { label: "Engagement", score: "4.5" },
      { label: "Feedback", score: "4.2" },
      { label: "Challenge", score: "4.5" },
      { label: "Dialogue", score: "5.0" },
    ],
  },
]

const TeacherExperience = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Section Title */}
      <Title48 className="text-[#038AF9] font-bold">Teacher Experience</Title48>

      {/* Outer #F6F6F6 Container */}
      <div className="bg-[#F6F6F6] p-2 sm:p-3 rounded-3xl sm:rounded-4xl border border-gray-200/60">
        <div className="grid grid-cols-12 gap-4 items-stretch">
          <div className="col-span-12 lg:col-span-8 flex flex-col">
            <ScatterPlot
              title="Teacher Experience"
              subtitle=""
              hideTabs={true}
              xAxisLabel="Improvement Since Last Year"
              showReferenceLine={false}
              showBottomCaption={false}
              data={TEACHER_EXPERIENCE_DATA}
              className="h-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col">
            <PrioprityArea groups={TEACHER_PRIORITY_GROUPS} type="teacher" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherExperience