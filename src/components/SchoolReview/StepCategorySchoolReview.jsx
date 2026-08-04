import React, { useState, useRef } from "react"
import { Heart, Shield, BookOpen, Users, Building, Smile, Briefcase, Award, TrendingUp } from "lucide-react"
import InlineSuggestionPopover from "./InlineSuggestionPopover"

const RATING_LABELS = {
  1: "Could Be Better",
  2: "Could Be Better",
  3: "OK",
  4: "Good",
  5: "Excellent",
}

const UnfilledStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 33 33" fill="none">
    <path
      d="M18.7164 3.29127L21.3561 8.61432C21.7161 9.3553 22.6759 10.066 23.4859 10.2021L28.2704 11.0036C31.3301 11.5178 32.05 13.7559 29.8452 15.9637L26.1257 19.714C25.4957 20.3491 25.1508 21.574 25.3457 22.4512L26.4106 27.0937C27.2505 30.7684 25.3156 32.19 22.0911 30.2694L17.6065 27.5928C16.7967 27.1089 15.4618 27.1089 14.6368 27.5928L10.1524 30.2694C6.94275 32.19 4.99297 30.7533 5.83288 27.0937L6.89776 22.4512C7.09273 21.574 6.74778 20.3491 6.11784 19.714L2.39826 15.9637C0.208499 13.7559 0.913424 11.5178 3.97308 10.2021L8.75755 10.2021C9.55246 10.066 10.5124 9.3553 10.8723 8.61432L13.512 3.29127C14.9518 0.402911 17.2915 0.402911 18.7164 3.29127Z"
      stroke="#038AF9"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const FilledStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0158 4.4316C16.9981 2.5228 19.7518 2.5228 20.7342 4.4316L24.0439 10.8635C24.0989 10.9702 24.202 11.0445 24.3214 11.0633L31.5159 12.1981C33.6498 12.5346 34.5001 15.1242 32.9742 16.6395L27.8238 21.7537C27.7384 21.8385 27.6991 21.9583 27.718 22.0765L28.8532 29.2143C29.1897 31.3297 26.9623 32.9308 25.0357 31.9588L18.5467 28.6851C18.4389 28.6306 18.3111 28.6306 18.2032 28.6851L11.7143 31.9588C9.78757 32.9308 7.56036 31.3297 7.89679 29.2143L9.03201 22.0765C9.0508 21.9583 9.01149 21.8385 8.92618 21.7537L3.77577 16.6395C2.24989 15.1242 3.10021 12.5346 5.23411 12.1981L12.4285 11.0633C12.5479 11.0445 12.6511 10.9702 12.706 10.8635L16.0158 4.4316Z"
      fill="#038AF9"
    />
  </svg>
)

const getItemIcon = (meaning) => {
  const m = (meaning || "").toLowerCase()
  if (m.includes("safety")) return <Shield className="w-5 h-5 text-muted-foreground" />
  if (m.includes("wellbeing") || m.includes("happy") || m.includes("workload")) return <Heart className="w-5 h-5 text-muted-foreground" />
  if (m.includes("learning") || m.includes("homework") || m.includes("resources")) return <BookOpen className="w-5 h-5 text-muted-foreground" />
  if (m.includes("teaching") || m.includes("leadership") || m.includes("staff")) return <Users className="w-5 h-5 text-muted-foreground" />
  if (m.includes("facilities") || m.includes("activities")) return <Building className="w-5 h-5 text-muted-foreground" />
  if (m.includes("compensation") || m.includes("growth")) return <TrendingUp className="w-5 h-5 text-muted-foreground" />
  return <Smile className="w-5 h-5 text-muted-foreground" />
}

const StepCategorySchoolReview = ({
  categoryTitle,
  items = [],
  ratings = {},
  updateRating,
  role = "student",
}) => {
  const [activeSuggestionItemId, setActiveSuggestionItemId] = useState(null)
  const debounceTimerRef = useRef({})

  return (
    <div className="space-y-8 font-urbanist">
      {/* Category Header */}
      <h2 className="text-2xl md:text-[28px] font-bold text-[#080808]">
        {categoryTitle}
      </h2>

      <div className="space-y-8">
        {items.map((item) => {
          const itemRatingObj = ratings[item.id] || { rating: 0, details: "" }
          const currentRating = itemRatingObj.rating || 0
          const currentDetails = itemRatingObj.details || ""

          const questionText =
            role === "leader"
              ? item.leader_question
              : role === "teacher"
              ? item.teacher_question
              : role === "parent"
              ? item.parent_question
              : item.student_question

          const handleStarClick = (starValue) => {
            updateRating(item.id, {
              ...itemRatingObj,
              rating: starValue,
            })
          }

          const handleDetailsChange = (e) => {
            const val = e.target.value
            updateRating(item.id, {
              ...itemRatingObj,
              details: val,
            })

            if (debounceTimerRef.current[item.id]) {
              clearTimeout(debounceTimerRef.current[item.id])
            }

            if (val.trim().length >= 3) {
              debounceTimerRef.current[item.id] = setTimeout(() => {
                setActiveSuggestionItemId(item.id)
              }, 1000)
            } else {
              setActiveSuggestionItemId(null)
            }
          }

          return (
            <div key={item.id} className="space-y-4 pb-6 border-b border-border/40 last:border-b-0">
              {/* Header: Icon + Category Meaning */}
              <div className="flex items-center gap-2 text-foreground font-medium text-base md:text-[18px]">
                {getItemIcon(item.meaning)}
                <span>{item.meaning}</span>
              </div>

              {/* Custom Star Rating Section */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = star <= currentRating
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(star)}
                        className="p-0.5 transition-transform hover:scale-110 cursor-pointer focus:outline-none"
                      >
                        {isFilled ? <FilledStar /> : <UnfilledStar />}
                      </button>
                    )
                  })}
                </div>

                <span className="text-sm md:text-base font-normal text-muted-foreground">
                  {currentRating > 0 ? RATING_LABELS[currentRating] : "Select a Rating"}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-lg md:text-[20px] font-medium text-[#080808]">
                {questionText}
              </h3>

              {/* Details Input Field */}
              {currentRating > 0 && (
                <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <input
                    type="text"
                    placeholder="Details"
                    value={currentDetails}
                    onChange={handleDetailsChange}
                    className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background text-foreground text-sm md:text-base placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />

                  {/* Inline Flowing Suggestion Box */}
                  {activeSuggestionItemId === item.id && (
                    <InlineSuggestionPopover
                      originalText={currentDetails}
                      suggestedText="I find it difficult when teachers are not available for additional support. More one-on-one time would be very helpful."
                      onUseSuggestion={(newText) => {
                        updateRating(item.id, {
                          ...itemRatingObj,
                          details: newText,
                        })
                        setActiveSuggestionItemId(null)
                      }}
                      onContinue={() => {
                        setActiveSuggestionItemId(null)
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StepCategorySchoolReview
