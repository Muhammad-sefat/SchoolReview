import React, { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FEEDBACK_CATEGORIES = [
  "Wellbeing & Safety",
  "Learning & Curriculum",
  "Teaching Quality",
  "Community & Culture",
  "Facilities & Activities",
]

const CATEGORY_SUMMARIES_MAP = {
  "Wellbeing & Safety": {
    title: "Wellbeing & Safety",
    subtitle: "AI-generated summary based on 48 verified reviews",
    description: (
      <>
        Parents and students consistently describe the school as{" "}
        <strong className="font-semibold text-textPrimary">safe</strong>,{" "}
        <strong className="font-semibold text-textPrimary">welcoming</strong>, and{" "}
        <strong className="font-semibold text-textPrimary">supportive</strong>. Feedback
        highlights respectful relationships, approachable teachers, and a strong sense of
        community. Some reviewers suggest that responding more consistently to peer
        conflicts and improving communication around wellbeing policies could further
        strengthen the experience.
      </>
    ),
  },
  "Learning & Curriculum": {
    title: "Learning & Curriculum",
    subtitle: "AI-generated summary based on 36 verified reviews",
    description: (
      <>
        Feedback praises academic standards and structured coursework. Reviewers highlight clear
        learning objectives and engaging classroom materials across all key stages.
      </>
    ),
  },
  "Teaching Quality": {
    title: "Teaching Quality",
    subtitle: "AI-generated summary based on 52 verified reviews",
    description: (
      <>
        Teachers are praised for high dedication, passionate instruction, and accessibility during
        office hours. Parents note excellent progress tracking.
      </>
    ),
  },
  "Community & Culture": {
    title: "Community & Culture",
    subtitle: "AI-generated summary based on 29 verified reviews",
    description: (
      <>
        Strong inclusive environment with active parent council involvement and collaborative
        school traditions.
      </>
    ),
  },
  "Facilities & Activities": {
    title: "Facilities & Activities",
    subtitle: "AI-generated summary based on 40 verified reviews",
    description: (
      <>
        Modern science labs, well-equipped sports complex, and diverse extracurricular clubs are
        highly appreciated by both students and parents.
      </>
    ),
  },
}

const ExploreFeedbackCard = () => {
  const [userType, setUserType] = useState("parent") // 'parent' | 'teacher'
  const [selectedCategory, setSelectedCategory] = useState("Wellbeing & Safety")

  const summary = CATEGORY_SUMMARIES_MAP[selectedCategory] || CATEGORY_SUMMARIES_MAP["Wellbeing & Safety"]

  return (
    <div className="w-full bg-white rounded-3xl border border-[#038AF9]/30 p-5 md:p-6 shadow-2xs space-y-5 font-urbanist">
      {/* Explore Title (24px font-medium) */}
      <h3 className="text-[24px] font-medium text-[#080808]">
        Explore Feedback by Category
      </h3>

      {/* Row 1: Sub-Tabs + Category Select */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center  gap-4">
        {/* User Type Sub-Tabs Box */}
        <div className="bg-[rgba(3,138,249,0.10)] p-1 rounded-2xl flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setUserType("parent")}
            className={`px-5 py-2.5 rounded-xl text-base font-medium transition-all cursor-pointer ${userType === "parent"
              ? "bg-[#038AF9] text-white shadow-xs"
              : "bg-white text-[#080808] hover:text-[#038AF9]"
              }`}
          >
            Parent & Student Feedback
          </button>

          <button
            type="button"
            onClick={() => setUserType("teacher")}
            className={`px-5 py-2.5 rounded-xl text-base font-medium transition-all cursor-pointer ${userType === "teacher"
              ? "bg-[#038AF9] text-white shadow-xs"
              : "bg-white text-[#080808] hover:text-[#038AF9]"
              }`}
          >
            Teacher Feedback
          </button>
        </div>

        {/* Category Shadcn Select */}
        <div className="w-64">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full h-12 rounded-2xl border-[#038AF9] text-[16px] font-normal text-textPrimary bg-white focus:ring-1 focus:ring-[#038AF9]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-gray-200 shadow-lg">
              {FEEDBACK_CATEGORIES.map((cat, idx) => (
                <SelectItem
                  key={idx}
                  value={cat}
                  className="text-[16px] font-normal py-2.5 focus:bg-gray-50 cursor-pointer"
                >
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Inner AI Summary Card */}
      <div className="w-full border border-gray-100 rounded-2xl p-5 md:p-6 space-y-3 bg-[#FAFAFA]/50">
        {/* Title (20px medium #038AF9) */}
        <h4 className="text-[20px] font-medium text-[#038AF9]">
          {summary.title}
        </h4>

        {/* Subtitle (16px normal secondary) */}
        <p className="md:text-lg text-base font-normal text-secondary">
          {summary.subtitle}
        </p>

        {/* Content (16px normal textPrimary) */}
        <p className="md:text-lg text-base font-normal text-textPrimary leading-relaxed pt-1">
          {summary.description}
        </p>
      </div>
    </div>
  )
}

export default ExploreFeedbackCard
