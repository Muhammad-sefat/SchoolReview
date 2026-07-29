import React from "react"
import { starIcon as StarIconSvg } from "@/components/icons/CustomIcons"
import { Title16 } from "@/components/typho/Title"
import {
  Shield,
  Heart,
  MessageSquareText,
  Target,
  BarChart3,
  Brain,
  Users,
  Clock,
  HelpCircle,
  Share2,
  Scale,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  Award,
  BookOpen,
  FileCheck,
  RotateCcw,
} from "lucide-react"

// Helper to map meaning/measure to icons
const getIconForMeaning = (measure = "", meaning = "") => {
  const m = `${measure} ${meaning}`.toLowerCase()
  if (m.includes("safe") || m.includes("safety")) return Shield
  if (m.includes("wellbeing") || m.includes("good")) return Heart
  if (m.includes("clarity") || m.includes("clear")) return CheckCircle2
  if (m.includes("purpose") || m.includes("goals")) return Target
  if (m.includes("progression") || m.includes("building")) return BarChart3
  if (m.includes("challenge") || m.includes("thinking")) return Brain
  if (m.includes("engagement") || m.includes("taking part")) return Users
  if (m.includes("feedback") || m.includes("progress")) return MessageSquareText
  if (m.includes("pace") || m.includes("speed")) return Clock
  if (m.includes("support") || m.includes("help")) return HelpCircle
  if (m.includes("dialogue") || m.includes("sharing")) return Share2
  if (m.includes("fairness") || m.includes("fairly")) return Scale
  if (m.includes("inclusion") || m.includes("belonging")) return Users
  if (m.includes("behaviour") || m.includes("rules")) return Sparkles
  if (m.includes("coherence")) return BookOpen
  if (m.includes("assessment")) return FileCheck
  if (m.includes("adaptive")) return RotateCcw
  if (m.includes("ongoing")) return TrendingUp
  return Shield
}

const getRatingLabel = (stars) => {
  if (!stars || stars === 0) return "Select a Rating"
  if (stars === 1 || stars === 2) return "Could Be Better"
  if (stars === 3) return "Okay"
  if (stars === 4) return "Good"
  if (stars === 5) return "Excellent"
  return "Select a Rating"
}

const RatingItem = ({
  item,
  ratingData = {},
  onUpdateRating,
  role = "student",
  isFirst = false,
  showInstruction = isFirst,
}) => {
  const IconComponent = getIconForMeaning(item.short_measure, item.meaning)
  const currentRating = ratingData.rating || 0
  const selectedTags = ratingData.selectedTags || []
  const details = ratingData.details || ""

  const handleStarClick = (stars) => {
    // Toggle off to 0 stars if clicking the active star
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
  const availableTags = starReviewObj?.tag || []

  return (
    <div className="py-5 border-b border-border/40 last:border-0 space-y-4">
      {/* Top Header: Meaning/Measure + Icon */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-3 flex-1 min-w-0">
          <div className="flex items-center gap-2 text-foreground">
            <IconComponent className="w-5 h-5 text-foreground shrink-0 stroke-[1.75]" />
            <Title16 className="text-[16px] font-normal text-foreground">
              {item.meaning && item.meaning !== "n-a" ? item.meaning : item.short_measure}
            </Title16>
          </div>

          {/* Rating Stars + 20px font-medium Status Label */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((starNum) => {
                const isFilled = starNum <= currentRating
                return (
                  <button
                    key={starNum}
                    type="button"
                    onClick={() => handleStarClick(starNum)}
                    className="cursor-pointer transition-transform hover:scale-110 focus:outline-none"
                  >
                    <StarIconSvg
                      className={`w-7 h-7 ${isFilled
                        ? "fill-primary stroke-primary text-primary"
                        : "fill-transparent stroke-primary/50 text-primary/50 hover:stroke-primary"
                        }`}
                    />
                  </button>
                )
              })}
            </div>

            <Title16
              className={`text-[16px] font-normal transition-colors ${currentRating > 0 ? "text-foreground" : "text-muted-foreground/70"
                }`}
            >
              {getRatingLabel(currentRating)}
            </Title16>
          </div>

          {/* Question Text */}
          <p className="lg:text-[20px] max-w-[500px] text-base font-medium text-foreground leading-snug pt-1">
            {questionText}
          </p>
        </div>

        {/* Tags selector when rated */}
        {currentRating > 0 && (
          <div className="md:w-[280px] shrink-0 bg-white p-0 space-y-2">
            {showInstruction && (
              <p className="text-[12px] text-muted-foreground font-normal">
                Choose one or more of these to continue:
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tagObj) => {
                const isSelected = selectedTags.includes(tagObj.value)
                return (
                  <button
                    key={tagObj.id || tagObj.value}
                    type="button"
                    onClick={() => handleTagToggle(tagObj.value)}
                    className={`text-[14px] px-3.5 py-1 rounded-full border transition-all cursor-pointer ${isSelected
                      ? "border-black font-medium text-foreground bg-muted/20"
                      : "border-border/80 font-normal text-muted-foreground hover:border-foreground/50 hover:text-foreground bg-white"
                      }`}
                  >
                    {tagObj.value}
                  </button>
                )
              })}
              {(() => {
                const isSelected = selectedTags.includes("Something else")
                return (
                  <button
                    type="button"
                    onClick={() => handleTagToggle("Something else")}
                    className={`text-[14px] px-3.5 py-1 rounded-full border transition-all cursor-pointer ${isSelected
                      ? "border-black font-medium text-foreground bg-muted/20"
                      : "border-border/80 font-normal text-muted-foreground hover:border-foreground/50 hover:text-foreground bg-white"
                      }`}
                  >
                    Something else
                  </button>
                )
              })()}
            </div>
          </div>
        )}
      </div>

      {/* Details Text Input */}
      {currentRating > 0 && (
        <div className="pt-2">
          <input
            type="text"
            placeholder="Details"
            value={details}
            onChange={(e) => handleDetailsChange(e.target.value)}
            className="w-full h-11 px-4 text-sm border border-border/70 rounded-xl bg-background text-foreground placeholder:text-[#5A5A5A] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>
      )}
    </div>
  )
}

export default RatingItem
