import React, { useState, useRef } from "react"
import { Title24 } from "@/components/typho/Title"
import SuggestionModal from "@/components/common/SuggestionModal"

// Exact User Star SVG Component
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

const RatingItem = ({
  item,
  ratingData = {},
  onUpdateRating,
  role = "student",
}) => {
  const [hoveredStar, setHoveredStar] = useState(0)
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false)
  const debounceTimerRef = useRef(null)

  // Unrated by default (no pre-selected stars!)
  const currentRating = ratingData.rating || 0
  const selectedTags = ratingData.selectedTags || []
  const details = ratingData.details || ""

  const handleStarClick = (stars) => {
    const newRating = currentRating === stars ? 0 : stars
    onUpdateRating(item.id, {
      ...ratingData,
      rating: newRating,
      selectedTags: newRating === currentRating ? selectedTags : [],
    })
  }

  const handleTagToggle = (tagValue) => {
    const isSelected = selectedTags.includes(tagValue)
    const updated = isSelected
      ? selectedTags.filter((t) => t !== tagValue)
      : [...selectedTags, tagValue]
    onUpdateRating(item.id, {
      ...ratingData,
      selectedTags: updated,
    })
  }

  const handleDetailsChange = (val) => {
    onUpdateRating(item.id, {
      ...ratingData,
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
    onUpdateRating(item.id, {
      ...ratingData,
      details: suggestedText,
    })
  }

  // Get question text depending on role
  const questionText =
    role === "observer"
      ? item.observer?.question
      : role === "teacher"
      ? item.teacher?.question
      : item.student?.question

  // Get star_based_review list depending on role/data
  const starBasedReviewList =
    (role === "observer" && item.observer?.star_based_review) ||
    (role === "teacher" && item.teacher?.star_based_review) ||
    item.student?.star_based_review ||
    item.star_based_review

  const starReviewObj = starBasedReviewList?.find((s) => s.number_of_stars === currentRating)
  let availableTags = (starReviewObj?.tag || []).map((t) => (typeof t === "string" ? t : t.value || t.name))

  // Provide fallback tags if none exist in dataset for this rating
  if (availableTags.length === 0 && currentRating > 0) {
    if (currentRating >= 4) {
      availableTags = ["Mostly clear", "Some helpful examples", "Usually checks understanding"]
    } else if (currentRating === 3) {
      availableTags = ["Mostly clear", "Some helpful examples", "Usually checks understanding"]
    } else {
      availableTags = ["Hard to follow", "Need more explanation", "Fast pace"]
    }
  }

  // Details input box ONLY appears when "Something else" tag is clicked/selected
  const showDetailsInput = selectedTags.includes("Something else") || details.length > 0

  return (
    <div className="py-5 border-b border-[#EAEAEA] last:border-b-0 space-y-3 font-urbanist">
      {/* Top Row: Question Text on Left + 5 Star SVGs on Right */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        {/* Question Text with Title24 styling: color #1F1F21, 24px medium */}
        <Title24 className="text-[#1F1F21] font-medium text-[20px] lg:text-[24px] leading-[32px] lg:leading-[36px] flex-1 min-w-0 pr-2">
          {questionText}
        </Title24>

        {/* 5 Star SVGs Container */}
        <div
          className="flex items-center gap-1.5 shrink-0 self-start sm:self-center"
          onMouseLeave={() => setHoveredStar(0)}
        >
          {[1, 2, 3, 4, 5].map((starNum) => {
            const isFilled = starNum <= (hoveredStar || currentRating)
            return (
              <button
                key={starNum}
                type="button"
                onClick={() => handleStarClick(starNum)}
                onMouseEnter={() => setHoveredStar(starNum)}
                className="cursor-pointer transition-transform hover:scale-110 focus:outline-none p-0.5"
                title={getStarHoverTitle(starNum)}
              >
                <UserStarSvg isFilled={isFilled} />
              </button>
            )
          })}
        </div>
      </div>

      {/* Tags Section (Appears below Question when rating > 0) */}
      {currentRating > 0 && (
        <div className="pt-2 animate-fadeIn space-y-3">
          <div className="flex items-center gap-2.5 flex-wrap">
            {availableTags.map((tagText, idx) => {
              const isSelected = selectedTags.includes(tagText)
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleTagToggle(tagText)}
                  className={`text-[14px] leading-[20px] rounded-[48px] px-4 py-2 transition-all cursor-pointer ${
                    isSelected
                      ? "text-[#080808] border border-[#080808] bg-white font-semibold shadow-2xs"
                      : "text-[#1F1F21] border border-[#EAEAEA] bg-white font-medium hover:border-[#080808]"
                  }`}
                >
                  {tagText}
                </button>
              )
            })}

            {/* "Something else" Tag Button */}
            {(() => {
              const isSelected = selectedTags.includes("Something else")
              return (
                <button
                  type="button"
                  onClick={() => handleTagToggle("Something else")}
                  className={`text-[14px] leading-[20px] rounded-[48px] px-4 py-2 transition-all cursor-pointer ${
                    isSelected
                      ? "text-[#080808] border border-[#080808] bg-white font-semibold shadow-2xs"
                      : "text-[#1F1F21] border border-[#EAEAEA] bg-white font-medium hover:border-[#080808]"
                  }`}
                >
                  Something else
                </button>
              )
            })()}
          </div>

          {/* Details Input Text Box (Automatic Debounce Suggestion Modal Trigger) */}
          {showDetailsInput && (
            <div className="pt-1 animate-fadeIn">
              <input
                type="text"
                placeholder="Details"
                value={details}
                onChange={(e) => handleDetailsChange(e.target.value)}
                className="w-full h-11 px-4 text-sm sm:text-base border border-[#EAEAEA] rounded-xl bg-white text-[#1F1F21] placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] transition-all font-urbanist shadow-2xs"
              />
            </div>
          )}
        </div>
      )}

      {/* Overlay Suggestion Modal */}
      <SuggestionModal
        isOpen={isSuggestionModalOpen}
        onClose={() => setIsSuggestionModalOpen(false)}
        originalText={details || "This class moves way too fast and it's really annoying. I don't understand half of what's being taught and it feels impossible to keep up."}
        suggestedText="I find it difficult when teachers are not available for additional support. More one-on-one time would be very helpful."
        onUseSuggestion={handleUseSuggestion}
      />
    </div>
  )
}

export default RatingItem
