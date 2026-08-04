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
import checkImage from "@/assets/images/check.png"
const DetailStarRating = ({ rating = 4.5 }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6772 2.9544C11.3321 1.68187 13.1679 1.68187 13.8228 2.9544L16.0293 7.24233C16.0659 7.31348 16.1347 7.363 16.2143 7.37556L21.0106 8.13205C22.4332 8.35643 23.0001 10.0828 21.9828 11.093L18.5492 14.5025C18.4923 14.559 18.4661 14.6389 18.4787 14.7177L19.2355 19.4762C19.4598 20.8865 17.9749 21.9539 16.6905 21.3059L12.3645 19.1234C12.2926 19.0871 12.2074 19.0871 12.1355 19.1234L7.80953 21.3059C6.52505 21.9539 5.04024 20.8865 5.26453 19.4762L6.02134 14.7177C6.03387 14.6389 6.00766 14.559 5.95079 14.5025L2.51718 11.093C1.49993 10.0828 2.06681 8.35643 3.48941 8.13205L8.28567 7.37556C8.3653 7.363 8.43407 7.31348 8.47069 7.24233L10.6772 2.9544Z" fill="#038AF9" />
        </svg>
      )
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M11.998 1.75C12.7648 1.75 13.4593 2.33214 13.9531 3.33301V3.33398L15.7139 6.88281V6.88379C15.8116 7.08496 16.0003 7.29776 16.2354 7.47266C16.4117 7.60385 16.6015 7.70411 16.7783 7.76172L16.9502 7.80469L20.1396 8.33887C21.2064 8.51811 21.9463 9.01434 22.1777 9.74023C22.4087 10.4656 22.0937 11.2995 21.3262 12.0684L21.3242 12.0703L18.8457 14.5684C18.6731 14.7423 18.528 15.0112 18.4424 15.3125C18.3585 15.6081 18.3395 15.9097 18.3896 16.1494V16.1504L18.3906 16.1523L18.3916 16.1602L18.3936 16.166L19.1025 19.2568C19.3881 20.5058 19.2311 21.4952 18.583 21.9717C17.9339 22.4486 16.9464 22.2968 15.8496 21.6436L12.8613 19.8594C12.6398 19.7271 12.3293 19.6533 12.0029 19.6533C11.7187 19.6533 11.4447 19.71 11.2285 19.8125L11.1396 19.8584L11.1387 19.8594L11.1328 19.8623L8.14844 21.6436V21.6445C7.05548 22.2986 6.06884 22.4459 5.41895 21.9678C4.77037 21.4905 4.61078 20.502 4.89648 19.2568L5.60547 16.166L5.60645 16.1602V16.1572C5.65865 15.9163 5.64056 15.6115 5.55566 15.3125C5.47008 15.0113 5.32489 14.7423 5.15234 14.5684L2.67285 12.0684C1.91002 11.2992 1.59461 10.4654 1.82422 9.74023C2.05416 9.0142 2.79232 8.51818 3.85938 8.33887L7.0459 7.80566L7.04785 7.80469H7.0498C7.26459 7.76741 7.52006 7.64748 7.75391 7.47266C7.98725 7.29815 8.1754 7.08625 8.27344 6.88574L8.27637 6.87988L8.27539 6.87891L10.0342 3.33398L10.0352 3.33496V3.33301H10.0361C10.5351 2.33224 11.2315 1.75 11.998 1.75Z" stroke="#038AF9" />
          <path d="M9.58827 3.10957C10.1209 2.04108 10.95 1.25 11.9981 1.25V20.1532C11.7419 20.154 11.5237 20.2137 11.3907 20.291L11.3889 20.2921L8.40483 22.0732C7.276 22.7487 6.03349 23.04 5.12306 22.3702C4.21644 21.7032 4.11409 20.43 4.40906 19.1447L5.11785 16.0547L5.11828 16.0527C5.14936 15.9107 5.14328 15.6908 5.07475 15.4494C5.00575 15.2064 4.89574 15.0199 4.79753 14.9209L2.3178 12.4206C1.4946 11.5906 1.03716 10.5704 1.3479 9.58925C1.65954 8.60525 2.62338 8.0398 3.77628 7.84606L6.96327 7.31219L6.96428 7.31202C7.08112 7.29175 7.26465 7.21456 7.45443 7.07268C7.64456 6.93054 7.77154 6.77535 7.82507 6.66516L7.82777 6.65967L9.58757 3.11097L9.58827 3.10957Z" fill="#038AF9" />
        </svg>
      )
    } else {
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M11.4371 2.86999L12.9036 5.82724C13.1036 6.23889 13.6368 6.63375 14.0868 6.70936L16.7448 7.15463C18.4446 7.44028 18.8446 8.68367 17.6197 9.91025L15.5533 11.9938C15.2033 12.3466 15.0117 13.0271 15.12 13.5144L15.7116 16.0936C16.1782 18.1351 15.1033 18.9248 13.3119 17.8578L10.8205 16.3708C10.3706 16.102 9.62898 16.102 9.17065 16.3708L6.67929 17.8578C4.89615 18.9248 3.81294 18.1267 4.27955 16.0936L4.87115 13.5144C4.97947 13.0271 4.78783 12.3466 4.43786 11.9938L2.37143 9.91025C1.1549 8.68367 1.54652 7.44028 3.24633 7.15463L5.90437 6.70936C6.34599 6.63375 6.87926 6.23889 7.07924 5.82724L8.54573 2.86999C9.34565 1.26534 10.6455 1.26534 11.4371 2.86999Z" stroke="#038AF9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
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
        <DialogContent className="max-w-[920px] w-[95%] sm:w-full rounded-[32px] bg-white p-5 sm:p-6 border border-gray-100 shadow-2xl space-y-4 font-urbanist max-h-[92vh] overflow-y-auto">
          {/* Modal Header Title */}
          <DialogHeader className="space-y-0 text-left">
            <DialogTitle className="text-[24px] font-semibold text-[#080808] font-urbanist leading-tight">
              {reviewTitle}
            </DialogTitle>

            {/* Meta Header Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <span className="font-medium text-textPrimary text-[16px]">{rating}</span>
                <DetailStarRating rating={rating} />
                <div className="flex items-center gap-2 text-base font-normal ml-2">

                  <img src={checkImage} alt="check" />

                  <span className="text-textBlack text-base">Recommended</span>
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
            {/* Left Sub-Tabs Column (Reduced width) */}
            <div className="md:col-span-2 border border-gray-200/60 rounded-2xl p-2.5 bg-white space-y-2 flex flex-row md:flex-col justify-center overflow-x-auto no-scrollbar h-full min-h-[280px]">
              {MODAL_SUB_TABS.map((tab) => {
                const isActive = activeSubTab === tab
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveSubTab(tab)}
                    className={`w-full text-center px-3 py-2 rounded-full text-[14px] transition-all cursor-pointer whitespace-nowrap ${isActive
                      ? "bg-[#038AF9] text-white font-medium shadow-2xs"
                      : "bg-[#FAFAFA] border border-gray-200/60 text-[#5A5A5A] font-normal"
                      }`}
                  >
                    {tab}
                  </button>
                )
              })}
            </div>

            {/* Right Content Box (Expanded width) */}
            <div className="md:col-span-10 bg-white border border-gray-200/80 rounded-2xl shadow-2xs overflow-hidden h-full flex flex-col justify-between min-h-[280px]">
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
