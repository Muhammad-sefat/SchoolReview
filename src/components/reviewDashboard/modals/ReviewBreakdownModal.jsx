import React, { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"

// User Provided Exact Star SVG Icon
const UserStarIcon = ({ width = 20, height = 20, fill = "#038AF9" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none" className="shrink-0 inline-block">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.89506 2.45939C9.44081 1.39895 10.9706 1.39895 11.5164 2.45939L13.3551 6.03267C13.3856 6.09196 13.443 6.13323 13.5093 6.14369L17.5062 6.7741C18.6917 6.96108 19.1641 8.39973 18.3164 9.24156L15.4551 12.0828C15.4076 12.1299 15.3858 12.1965 15.3963 12.2621L16.027 16.2276C16.2139 17.4028 14.9765 18.2923 13.9061 17.7523L10.3011 15.9336C10.2412 15.9033 10.1702 15.9033 10.1103 15.9336L6.50534 17.7523C5.43494 18.2923 4.19759 17.4028 4.3845 16.2276L5.01518 12.2621C5.02562 12.1965 5.00378 12.1299 4.95639 12.0828L2.09504 9.24156C1.24734 8.39973 1.71974 6.96108 2.90524 6.7741L6.90212 6.14369C6.96848 6.13323 7.02579 6.09196 7.0563 6.03267L8.89506 2.45939Z"
      fill={fill}
    />
  </svg>
)

// User Provided Exact Modal Edit Pencil SVG Icon
const ModalEditPencilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path d="M11.7255 3.23527C12.3465 2.56246 12.657 2.22606 12.9869 2.02984C13.783 1.55636 14.7633 1.54164 15.5727 1.991C15.9081 2.17723 16.2281 2.50416 16.8682 3.15803C17.5083 3.8119 17.8284 4.13883 18.0106 4.4815C18.4506 5.30833 18.4361 6.30972 17.9726 7.12298C17.7806 7.46003 17.4512 7.77721 16.7926 8.41156L8.95623 15.9593C7.70813 17.1615 7.08406 17.7626 6.30411 18.0671C5.52416 18.3718 4.66673 18.3494 2.95186 18.3046L2.71855 18.2985C2.19649 18.2848 1.93546 18.278 1.78372 18.1057C1.63198 17.9336 1.6527 17.6676 1.69413 17.1359L1.71663 16.8471C1.83324 15.3503 1.89154 14.602 2.18382 13.9292C2.4761 13.2565 2.98026 12.7103 3.98859 11.6178L11.7255 3.23527Z" stroke="#038AF9" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M10.8359 3.33594L16.6693 9.16927" stroke="#038AF9" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M11.6641 18.3359H18.3307" stroke="#038AF9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CATEGORIES = [
  "Wellbeing",
  "Learning",
  "Teaching",
  "Community",
  "Facilities",
  "Share your experience",
]

const REVIEW_METRICS_DATA = {
  Wellbeing: [
    { metric: "Safety", score: "4.0", comments: "My child feels safe and comfortable at school every day" },
    { metric: "Student Wellbeing", score: "5.0", comments: "My child enjoys coming to school and feels well supported by teachers." },
  ],
  Learning: [
    { metric: "Learning Support", score: "4.5", comments: "Teachers provide extra guidance whenever my child asks for help." },
    { metric: "Individual Learning Support", score: "4.0", comments: "Strong attention to individual student needs." },
    { metric: "Homework Load", score: "5.0", comments: "Homework amount is balanced and well structured." },
    { metric: "Future Readiness", score: "4.2", comments: "Good career counseling and skill development." },
  ],
  Teaching: [
    { metric: "Teaching Quality", score: "4.8", comments: "High standards of teaching across all grade levels." },
    { metric: "School Communication", score: "4.5", comments: "Weekly newsletters and clear progress reports." },
    { metric: "Leadership", score: "4.3", comments: "Principal and leaders are accessible and receptive." },
    { metric: "Classroom Management", score: "4.9", comments: "Calm and disciplined classroom environment." },
  ],
  Community: [
    { metric: "Fairness", score: "4.4", comments: "Fair rules and equal treatment for all students." },
    { metric: "Inclusion", score: "4.8", comments: "Inclusive environment for families from all backgrounds." },
    { metric: "Voice", score: "4.2", comments: "Parent feedback is heard and acted upon." },
  ],
  Facilities: [
    { metric: "Activities", score: "4.3", comments: "Diverse sports clubs, music, and arts options." },
    { metric: "Facilities", score: "4.7", comments: "Clean classrooms, modern lab equipment, and sports hall." },
    { metric: "Value for Money", score: "4.1", comments: "Worth the investment for the quality of education provided." },
  ],
  "Share your experience": [
    { metric: "Recommendation", score: "4.8", comments: "Highly recommend Lindenhof Kantonsschule to all parents." },
    { metric: "Strengths", score: "5.0", comments: "Great teachers, supportive community, and modern facilities." },
    { metric: "Areas for Improvement", score: "4.0", comments: "More outdoor sports activities during winter season." },
  ],
}

const ReviewBreakdownModal = ({ isOpen, onClose, onEditCategory }) => {
  const [activeCategory, setActiveCategory] = useState("Wellbeing")

  const currentMetrics = REVIEW_METRICS_DATA[activeCategory] || []

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[1572px] w-[95vw] rounded-[28px] p-6 sm:p-8 bg-white border border-gray-100 shadow-2xl font-urbanist max-h-[90vh] overflow-y-auto">

        {/* Category Pills Navigation Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[18px] font-normal transition-all whitespace-nowrap cursor-pointer ${isActive
                  ? "border border-[#038AF9] text-[#080808] bg-white shadow-2xs"
                  : "border border-gray-200/90 text-[#080808] hover:bg-gray-50 bg-white"
                  }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Modal Section Header */}
        <div className="flex items-center  gap-4 pt-4 pb-6 ">
          <h2 className="text-[24px] sm:text-[24px] font-semibold text-[#080808]">
            {activeCategory}
          </h2>

          <button
            type="button"
            onClick={() => onEditCategory(activeCategory)}
            className="px-4 py-2 rounded-full border border-[#038AF9] bg-white hover:bg-blue-50 flex items-center gap-2 transition-colors cursor-pointer"
          >
            <ModalEditPencilIcon />
            <span className="text-[#038AF9] font-medium text-sm leading-[20px] font-urbanist">
              Edit Your Review
            </span>
          </button>
        </div>

        {/* Metrics Table using Shadcn Table */}
        <div className="pt-2">
          <Table containerClassName="border border-gray-100 rounded-2xl bg-white shadow-2xs overflow-hidden" className="w-full">
            <TableHeader>
              <TableRow className="bg-gray-50/40 border-b border-gray-100">
                <TableHead className="text-[16px] font-medium text-[#5A5A5A] py-3.5 pl-6 w-[25%]">Metric</TableHead>
                <TableHead className="text-[16px] font-medium text-[#5A5A5A] py-3.5 w-[20%]">Score</TableHead>
                <TableHead className="text-[16px] font-medium text-[#5A5A5A] py-3.5 pr-6 w-[55%]">Your Comments</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentMetrics.length > 0 ? (
                currentMetrics.map((row, idx) => (
                  <TableRow key={idx} className="border-b border-gray-50/80 hover:bg-gray-50/50 transition-colors">
                    <TableCell className="text-[16px] font-normal text-[#080808] pl-6 py-4 whitespace-nowrap">
                      {row.metric}
                    </TableCell>
                    <TableCell className="py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-[16px] font-normal text-[#080808]">
                        <UserStarIcon width={16} height={16} fill="#038AF9" />
                        <span>{row.score}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-[16px] font-normal text-[#080808] pr-6 py-4">
                      {row.comments}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-gray-500 text-sm">
                    No comments recorded for this category.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ReviewBreakdownModal
