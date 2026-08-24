import React, { useState, useRef } from "react"
import { Title32, Title24 } from "@/components/typho/Title"
import SuggestionModal from "@/components/common/SuggestionModal"

// Category SVGs provided by user
const WellbeingIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M12.016 20.5C12.016 20.5 2 14.5 2 8.69444C2 5.82563 4.10863 3.5 7.00801 3.5C8.51042 3.5 10.0128 4 12.016 6C14.0192 4 15.5216 3.5 17.024 3.5C19.9234 3.5 22.0321 5.82563 22.0321 8.69444C22.0321 14.5 12.016 20.5 12.016 20.5Z" stroke="#1F1F21" strokeWidth="1.5" />
  </svg>
)

const LearningIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M12.016 20.25V5.875M12.016 5.5C13.8505 3.88709 16.229 2.99657 18.6934 3.00001C19.8642 3.00001 20.9882 3.19634 22.0321 3.55847V19.0585C20.9882 18.6963 19.8642 18.5 18.6934 18.5C16.229 18.4966 13.8505 19.3871 12.016 21C10.1816 19.3871 7.80307 18.4966 5.33867 18.5C4.16791 18.5 3.04389 18.6963 2 19.0585V3.55847C3.04389 3.19634 4.16791 3.00001 5.33867 3.00001C7.80307 2.99657 10.1816 3.88709 12.016 5.5Z" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
)

const TeachingIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M12.016 22L10.0128 16H2L4.00321 22H12.016ZM12.016 22H16.0224" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.0206 13V12.5C12.0206 10.6144 12.0206 9.67157 11.4339 9.08579C10.8472 8.5 9.90286 8.5 8.01422 8.5C6.12558 8.5 5.18126 8.5 4.59454 9.08579C4.00781 9.67157 4.00781 10.6144 4.00781 12.5V13" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.0298 13C19.0298 14.1046 18.133 15 17.0266 15C15.9203 15 15.0234 14.1046 17.0266 11C18.133 11 19.0298 11.8954 19.0298 13Z" stroke="#1F1F21" strokeWidth="1.5" />
    <path d="M10.0142 4C10.0142 5.10457 9.11736 6 8.01102 6C6.90468 6 6.00781 5.10457 6.00781 4C6.00781 2.89543 6.90468 2 8.01102 2C9.11736 2 10.0142 2.89543 10.0142 4Z" stroke="#1F1F21" strokeWidth="1.5" />
    <path d="M14.0234 17.5H20.0331C21.1394 17.5 22.0363 18.3954 22.0363 19.5V20C22.0363 21.1046 21.1394 22 20.0331 22H19.0315" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const CommunityIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M15.5268 11C15.5268 9.067 13.9573 7.5 12.0212 7.5C10.0851 7.5 8.51562 9.067 8.51562 11C8.51562 12.933 10.0851 14.5 12.0212 14.5C13.9573 14.5 15.5268 12.933 15.5268 11Z" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5084 11.3499C15.8309 11.4475 16.173 11.5 16.5273 11.5C18.4634 11.5 20.033 9.933 20.033 8C20.033 6.067 18.4634 4.5 16.5273 4.5C14.7095 4.5 13.2148 5.8814 13.0391 7.65013" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.0017 7.65013C10.8259 5.8814 9.33125 4.5 7.51342 4.5C5.57732 4.5 4.00781 6.067 4.00781 8C4.00781 9.933 5.57732 11.5 7.51342 11.5C7.8678 11.5 8.20989 11.4475 8.53232 11.3499" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.0323 16.5C22.0323 13.7386 19.5659 11.5 16.5234 11.5" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.5254 19.5C17.5254 16.7386 15.0591 14.5 12.0166 14.5C8.97419 14.5 6.50781 16.7386 6.50781 19.5" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.50881 11.5C4.46638 11.5 2 13.7386 2 16.5" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FacilityIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M6.20163 11.3965L12.2097 3.31186C12.6796 2.67957 13.5604 3.07311 13.5604 3.91536V10.1729C13.5604 10.6775 13.9058 11.0865 14.3318 11.0865H17.2541C17.9179 11.0865 18.2717 12.0134 17.8332 12.6035L11.8251 20.6881C11.3553 21.3204 10.4745 20.9269 10.4745 20.0846V13.8271C10.4745 13.3225 10.1291 12.9135 9.70304 12.9135H6.78078C6.11694 12.9135 5.76308 11.9866 6.20163 11.3965Z" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ShareExperienceIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M8.01562 13.5H16.0284M8.01562 8.5H12.022" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.10538 19C4.80319 18.8721 3.82767 18.4816 3.17345 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17345 3.67157C4.3469 2.5 6.23554 2.5 10.0128 2.5H14.0192C17.7965 2.5 19.6852 2.5 20.8586 3.67157C22.0321 4.84315 22.0321 6.72876 22.0321 10.5V11C22.0321 14.7712 22.0321 16.6569 20.8586 17.8284C19.6852 19 17.7965 19 14.0192 19C13.4578 19.0125 13.0107 19.0551 12.5715 19.155C11.3712 19.4309 10.2597 20.0441 9.16133 20.5789C7.59624 21.3408 6.8137 21.7218 6.32261 21.3651C5.3831 20.6665 6.30142 18.5019 6.50721 17.5" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

// User Star SVG
const UserStarSvg = ({ isFilled = false, className = "w-[30px] h-[30px] sm:w-[33px] sm:h-[33px]" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    className={className}
  >
    <path
      d="M18.7164 3.29127L21.3561 8.61432C21.7161 9.3553 22.6759 10.066 23.4859 10.2021L28.2704 11.0036C31.3301 11.5178 32.05 13.7559 29.8452 15.9637L26.1257 19.714C25.4957 20.3491 25.1508 21.574 25.3457 22.4512L26.4106 27.0937C27.2505 30.7684 25.3156 32.19 22.0911 30.2694L17.6065 27.5928C16.7967 27.1089 15.4618 27.1089 14.6368 27.5928L10.1524 30.2694C6.94275 32.19 4.99297 30.7533 5.83288 27.0937L6.89776 22.4512C7.09273 21.574 6.74778 20.3491 6.11784 19.714L2.39826 15.9637C0.208499 13.7559 0.913424 11.5178 3.97308 10.2021L8.75755 10.2021C9.55246 10.066 10.5124 9.3553 10.8723 8.61432L13.512 3.29127C14.9518 0.402911 17.2915 0.402911 18.7164 3.29127Z"
      fill={isFilled ? "#038AF9" : "none"}
      stroke="#038AF9"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const getStarHoverTitle = (starNum) => {
  if (starNum === 1 || starNum === 2) return "Could be better"
  if (starNum === 3) return "Ok"
  if (starNum === 4) return "Good"
  if (starNum === 5) return "Excellent"
  return ""
}

const getCategoryIconComponent = (title = "") => {
  const t = title.toLowerCase()
  if (t.includes("wellbeing") || t.includes("safety") || t.includes("climate")) return WellbeingIcon
  if (t.includes("learning") || t.includes("environment")) return LearningIcon
  if (t.includes("teaching") || t.includes("quality")) return TeachingIcon
  if (t.includes("community") || t.includes("leadership") || t.includes("culture")) return CommunityIcon
  if (t.includes("facility") || t.includes("facilities") || t.includes("resource")) return FacilityIcon
  return ShareExperienceIcon
}

const SchoolRatingItem = ({
  item,
  itemRatingObj,
  updateRating,
  questionText,
}) => {
  const [hoveredStar, setHoveredStar] = useState(0)
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false)
  const debounceTimerRef = useRef(null)

  const currentRating = itemRatingObj.rating || 0
  const currentDetails = itemRatingObj.details || ""

  const activeRating = hoveredStar || currentRating

  const handleStarClick = (starValue) => {
    const newRating = currentRating === starValue ? 0 : starValue
    updateRating(item.id, {
      ...itemRatingObj,
      rating: newRating,
    })
  }

  const handleDetailsChange = (e) => {
    const val = e.target.value
    updateRating(item.id, {
      ...itemRatingObj,
      details: val,
    })

    // Debounce: trigger SuggestionModal automatically 1 sec after user finishes typing 3+ characters
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    if (val.trim().length >= 3) {
      debounceTimerRef.current = setTimeout(() => {
        setIsSuggestionModalOpen(true)
      }, 1000)
    }
  }

  const handleUseSuggestion = (suggestedText) => {
    updateRating(item.id, {
      ...itemRatingObj,
      details: suggestedText,
    })
  }

  return (
    <div className="py-5 border-b border-[#EAEAEA] last:border-b-0 space-y-3 font-urbanist">
      {/* Question Text on Left + 5 Star SVGs Container on Right */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        <Title24 className="text-[#1F1F21] font-medium text-[20px] lg:text-[24px] leading-[32px] lg:leading-[36px] flex-1 min-w-0 pr-2">
          {questionText}
        </Title24>

        {/* 5 Star SVGs & Customized Tooltip / Mobile Label Container */}
        <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-center">
          <div
            className="flex items-center gap-1.5"
            onMouseLeave={() => setHoveredStar(0)}
          >
            {[1, 2, 3, 4, 5].map((starNum) => {
              const isFilled = starNum <= activeRating
              return (
                <div key={starNum} className="relative flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => handleStarClick(starNum)}
                    onMouseEnter={() => setHoveredStar(starNum)}
                    className="cursor-pointer transition-transform hover:scale-110 focus:outline-none p-0.5"
                  >
                    <UserStarSvg isFilled={isFilled} />
                  </button>

                  {/* Desktop Floating Tooltip Above Hovered Star */}
                  {hoveredStar === starNum && (
                    <div className="hidden sm:flex absolute -top-10 left-1/2 bg-white -translate-x-1/2 border text-textBlack border-textPrimary text-xs font-medium px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap z-20 animate-fadeIn pointer-events-none items-center justify-center">
                      {getStarHoverTitle(starNum)}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile-Only Rating Label Badge (Visible on Right side when star is clicked/rated) */}
          {currentRating > 0 && (
            <span className="block sm:hidden bg-white text-xs font-semibold border text-textBlack border-textPrimary px-2.5 py-1 rounded-full animate-fadeIn whitespace-nowrap shadow-2xs">
              {getStarHoverTitle(currentRating)}
            </span>
          )}
        </div>
      </div>

      {/* Details Input Text Box (Automatic Debounce Suggestion Modal Trigger) */}
      {currentRating > 0 && (
        <div className="pt-1 animate-fadeIn">
          <input
            type="text"
            placeholder="Details"
            value={currentDetails}
            onChange={handleDetailsChange}
            className="w-full h-11 px-4 text-sm sm:text-base border border-[#EAEAEA] rounded-xl bg-white text-[#1F1F21] placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] transition-all font-urbanist shadow-2xs"
          />
        </div>
      )}

      {/* Overlay Suggestion Modal */}
      <SuggestionModal
        isOpen={isSuggestionModalOpen}
        onClose={() => setIsSuggestionModalOpen(false)}
        originalText={currentDetails || "This class moves way too fast and it's really annoying. I don't understand half of what's being taught and it feels impossible to keep up."}
        suggestedText="I find it difficult when teachers are not available for additional support. More one-on-one time would be very helpful."
        onUseSuggestion={handleUseSuggestion}
      />
    </div>
  )
}

const StepCategorySchoolReview = ({
  categoryTitle,
  items = [],
  ratings = {},
  updateRating,
  role = "student",
}) => {
  const CategorySvgComp = getCategoryIconComponent(categoryTitle)

  return (
    <div className="space-y-4 font-urbanist">
      {/* Category Header Row: SVG Icon in bg-[#F7F7F7] rounded-full + Title32 */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#F7F7F7] flex items-center justify-center shrink-0">
          <CategorySvgComp className="w-6 h-6 text-[#1F1F21]" />
        </div>
        <Title32 className="text-[#1F1F21] leading-[48px] font-semibold text-[26px] sm:text-[32px] overflow-hidden text-ellipsis whitespace-nowrap">
          {categoryTitle}
        </Title32>
      </div>

      {/* Items List */}
      <div className="divide-y divide-[#EAEAEA]">
        {items.map((item) => {
          const itemRatingObj = ratings[item.id] || {}
          const questionText =
            role === "leader"
              ? item.leader_question
              : role === "teacher"
              ? item.teacher_question
              : role === "parent"
              ? item.parent_question
              : item.student_question

          return (
            <SchoolRatingItem
              key={item.id}
              item={item}
              itemRatingObj={itemRatingObj}
              updateRating={updateRating}
              questionText={questionText}
            />
          )
        })}
      </div>
    </div>
  )
}

export default StepCategorySchoolReview
