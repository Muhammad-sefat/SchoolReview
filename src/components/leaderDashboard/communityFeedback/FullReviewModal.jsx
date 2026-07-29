import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircle2, Maximize2 } from "lucide-react"
import { LikeIcon, ShareIcon, ReportFlag } from "@/components/icons/CustomIcons"
import ReportReviewModal from "./ReportReviewModal"

const DetailStarRating = ({ rating = 4.5 }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-[#038AF9] fill-[#038AF9]" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-[#038AF9]" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`modal-half-star-${i}`}>
              <stop offset="50%" stopColor="#038AF9" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill={`url(#modal-half-star-${i})`} stroke="#038AF9" strokeWidth="1.5" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    } else {
      stars.push(
        <svg key={i} className="w-4 h-4 text-[#038AF9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  }
  return <div className="flex items-center gap-1 shrink-0">{stars}</div>
}

const MODAL_SUB_TABS = ["Wellbeing", "Learning", "Teaching", "Community", "Activities"]

const SUB_TAB_CONTENT_MAP = {
  Wellbeing: [
    {
      title: "Student Wellbeing",
      rating: 4,
      text: "My child feels safe at school and knows there are teachers they can talk to when they need support.",
    },
    {
      title: "Safety & Behaviour",
      rating: 3,
      text: "Behaviour is generally respectful, and staff respond quickly when issues are reported.",
    },
  ],
  Learning: [
    {
      title: "Academic Progress",
      rating: 5,
      text: "Curriculum pacing is challenging and prepares students effectively for higher education.",
    },
    {
      title: "Homework Balance",
      rating: 3.5,
      text: "Assignments are meaningful but workload can pile up during exam weeks.",
    },
  ],
  Teaching: [
    {
      title: "Teacher Dedication",
      rating: 5,
      text: "Teachers are enthusiastic, approachable, and provide excellent individualized feedback.",
    },
  ],
  Community: [
    {
      title: "School Culture",
      rating: 4.5,
      text: "Very welcoming community with frequent parent-teacher engagement events.",
    },
  ],
  Activities: [
    {
      title: "Extracurricular Opportunities",
      rating: 4,
      text: "Great variety of sports, arts, and STEM clubs available after school.",
    },
  ],
}

const FullReviewModal = ({ isOpen, onClose, review }) => {
  const [activeSubTab, setActiveSubTab] = useState("Wellbeing")
  const [showReportModal, setShowReportModal] = useState(false)
  const [agreeCount, setAgreeCount] = useState(4)

  const reviewTitle = review?.title || "Great teachers, but workload can be challenging"
  const rating = review?.rating || 4.5
  const role = review?.role || "Parent"
  const date = review?.date || "Sept 2026"

  const currentItems = SUB_TAB_CONTENT_MAP[activeSubTab] || SUB_TAB_CONTENT_MAP["Wellbeing"]

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose && onClose()}>
        <DialogContent className="max-w-[920px] w-[95%] sm:w-full rounded-3xl bg-white p-5 sm:p-6 border border-gray-100 shadow-2xl space-y-4 font-urbanist max-h-[92vh] overflow-y-auto">
          {/* Modal Header Title */}
          <DialogHeader className="space-y-0 text-left">
            <DialogTitle className="text-[24px] font-semibold text-[#080808] font-urbanist leading-tight">
              {reviewTitle}
            </DialogTitle>

            {/* Meta Header Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <span className="font-normal text-textPrimary text-[16px]">{rating}</span>
                <DetailStarRating rating={rating} />
                <div className="flex items-center gap-1.5 text-base font-normal text-textPrimary">
                  <CheckCircle2 className="w-5 h-5 text-[#8DC613] stroke-[2.5]" />
                  <span>Recommended</span>
                </div>
              </div>

              <div className="text-secondary text-[16px] font-normal">
                {role}, {date}
              </div>
            </div>
          </DialogHeader>

          {/* Dotted Divider */}
          <div className="border-b border-dashed border-gray-200/80 my-1" />

          {/* Main Grid: Equal Height Layout with Min-Height for single-item tabs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Left Sub-Tabs Column */}
            <div className="md:col-span-3 border border-gray-200/60 rounded-2xl p-3 bg-white space-y-2 flex flex-row md:flex-col justify-center overflow-x-auto no-scrollbar h-full min-h-[280px]">
              {MODAL_SUB_TABS.map((tab) => {
                const isActive = activeSubTab === tab
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveSubTab(tab)}
                    className={`w-full text-center px-4 py-2 rounded-full text-[15px] transition-all cursor-pointer whitespace-nowrap ${isActive
                        ? "bg-[#038AF9] text-white font-medium shadow-2xs"
                        : "bg-[#FAFAFA] border border-gray-200/60 text-[#5A5A5A] font-normal"
                      }`}
                  >
                    {tab}
                  </button>
                )
              })}
            </div>

            {/* Right Content Box with min-h-[280px] to prevent height collapse when a tab has only 1 item */}
            <div className="md:col-span-9 bg-white border border-gray-200/80 rounded-2xl shadow-2xs overflow-hidden h-full flex flex-col justify-between min-h-[280px]">
              <div>
                {/* Header Bar with Bottom Border */}
                <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between bg-white">
                  <button
                    type="button"
                    className="text-[#038AF9] hover:underline text-[14px] font-medium inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand All</span>
                  </button>
                </div>

                {/* Sub-Category Reviews List */}
                <div className="p-5 md:p-6 space-y-5">
                  {currentItems.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-[16px] font-medium text-[#080808]">
                        {item.title}
                      </h4>
                      <div className="flex flex-col items-start gap-2 pt-0.5">
                        <DetailStarRating rating={item.rating} />
                        <p className="text-[16px] font-normal text-textPrimary leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dotted Divider */}
          <div className="border-b border-dashed border-gray-200/80 my-1" />

          {/* Modal Bottom Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-3">
              {/* Agree Button */}
              <button
                type="button"
                onClick={() => setAgreeCount((prev) => prev + 1)}
                className="px-4 py-2 rounded-2xl border border-gray-200 hover:bg-gray-50 text-[16px] font-medium text-[#1F1F21] inline-flex items-center gap-2 cursor-pointer transition-colors shadow-2xs"
              >
                <LikeIcon className="w-5 h-5" />
                <span>{agreeCount} Agree</span>
              </button>

              {/* Share Button */}
              <button
                type="button"
                className="px-4 py-2 rounded-2xl border border-gray-200 hover:bg-gray-50 text-[16px] font-medium text-[#1F1F21] inline-flex items-center gap-2 cursor-pointer transition-colors shadow-2xs"
              >
                <ShareIcon className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            {/* Report Flag Button */}
            <button
              type="button"
              onClick={() => setShowReportModal(true)}
              className="px-4 py-2 rounded-2xl border border-gray-200 hover:bg-gray-50 text-[16px] font-medium text-[#1F1F21] inline-flex items-center gap-2 cursor-pointer transition-colors shadow-2xs"
            >
              <ReportFlag className="w-5 h-5 text-[#FB8C00]" />
              <span>Report</span>
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Report Review Modal */}
      <ReportReviewModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
      />
    </>
  )
}

export default FullReviewModal
