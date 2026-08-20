import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Shield, Heart, BookOpen, Users, Building, MessageSquare, ThumbsUp } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// User Provided Exact Star SVG Icon
const UserStarRatingIcon = ({ filled = false, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="focus:outline-none transition-transform hover:scale-110 cursor-pointer p-0.5"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.89506 2.45939C9.44081 1.39895 10.9706 1.39895 11.5164 2.45939L13.3551 6.03267C13.3856 6.09196 13.443 6.13323 13.5093 6.14369L17.5062 6.7741C18.6917 6.96108 19.1641 8.39973 18.3164 9.24156L15.4551 12.0828C15.4076 12.1299 15.3858 12.1965 15.3963 12.2621L16.027 16.2276C16.2139 17.4028 14.9765 18.2923 13.9061 17.7523L10.3011 15.9336C10.2412 15.9033 10.1702 15.9033 10.1103 15.9336L6.50534 17.7523C5.43494 18.2923 4.19759 17.4028 4.3845 16.2276L5.01518 12.2621C5.02562 12.1965 5.00378 12.1299 4.95639 12.0828L2.09504 9.24156C1.24734 8.39973 1.71974 6.96108 2.90524 6.7741L6.90212 6.14369C6.96848 6.13323 7.02579 6.09452 7.0563 6.03267L8.89506 2.45939Z"
        fill={filled ? "#038AF9" : "#E2E8F0"}
      />
    </svg>
  </button>
)

const CATEGORY_KEYS = [
  "Wellbeing",
  "Learning",
  "Teaching",
  "Community",
  "Facilities",
  "Share your experience",
]

const INITIAL_EDIT_DATA = {
  Wellbeing: [
    {
      id: "wb_01",
      metric: "Safety",
      icon: Shield,
      rating: 4,
      ratingLabel: "Good",
      subtitle: "The school is safe.",
      comment: "My child feels safe and comfortable at school every day",
    },
    {
      id: "wb_02",
      metric: "Student Wellbeing",
      icon: Heart,
      rating: 5,
      ratingLabel: "Excellent",
      subtitle: "My child feels happy and supported.",
      comment: "My child enjoys coming to school and feels well supported by teachers.",
    },
  ],
  Learning: [
    {
      id: "ac_01",
      metric: "Learning Support",
      icon: BookOpen,
      rating: 4,
      ratingLabel: "Good",
      subtitle: "My child gets the support they need to learn.",
      comment: "Teachers provide extra guidance whenever my child asks for help.",
    },
    {
      id: "ac_02",
      metric: "Individual Learning Support",
      icon: BookOpen,
      rating: 4,
      ratingLabel: "Good",
      subtitle: "Teachers notice when my child needs help.",
      comment: "Strong attention to individual student needs.",
    },
    {
      id: "ac_03",
      metric: "Homework Load",
      icon: BookOpen,
      rating: 5,
      ratingLabel: "Excellent",
      subtitle: "Homework is manageable.",
      comment: "Homework amount is balanced and well structured.",
    },
    {
      id: "fr_01",
      metric: "Future Readiness",
      icon: BookOpen,
      rating: 4,
      ratingLabel: "Good",
      subtitle: "Students are prepared for next steps.",
      comment: "Good career counseling and skill development.",
    },
  ],
  Teaching: [
    {
      id: "tl_01",
      metric: "Teaching Quality",
      icon: Users,
      rating: 5,
      ratingLabel: "Excellent",
      subtitle: "Teaching is high quality.",
      comment: "High standards of teaching across all grade levels.",
    },
    {
      id: "tl_02",
      metric: "School Communication",
      icon: MessageSquare,
      rating: 4,
      ratingLabel: "Good",
      subtitle: "The school communicates clearly.",
      comment: "Weekly newsletters and clear progress reports.",
    },
    {
      id: "tl_03",
      metric: "Leadership",
      icon: Users,
      rating: 4,
      ratingLabel: "Good",
      subtitle: "School leadership is effective.",
      comment: "Principal and leaders are accessible and receptive.",
    },
    {
      id: "tl_04",
      metric: "Classroom Management",
      icon: Users,
      rating: 5,
      ratingLabel: "Excellent",
      subtitle: "Classes are well managed.",
      comment: "Calm and disciplined classroom environment.",
    },
  ],
  Community: [
    {
      id: "ci_01",
      metric: "Fairness",
      icon: Users,
      rating: 4,
      ratingLabel: "Good",
      subtitle: "Students are treated fairly.",
      comment: "Fair rules and equal treatment for all students.",
    },
    {
      id: "ci_03",
      metric: "Inclusion",
      icon: Heart,
      rating: 5,
      ratingLabel: "Excellent",
      subtitle: "The school is welcoming to all families.",
      comment: "Inclusive environment for families from all backgrounds.",
    },
    {
      id: "ci_04",
      metric: "Voice",
      icon: MessageSquare,
      rating: 4,
      ratingLabel: "Good",
      subtitle: "Parents are listened to.",
      comment: "Parent feedback is heard and acted upon.",
    },
  ],
  Facilities: [
    {
      id: "af_01",
      metric: "Activities",
      icon: Building,
      rating: 4,
      ratingLabel: "Good",
      subtitle: "The school offers many activities.",
      comment: "Diverse sports clubs, music, and arts options.",
    },
    {
      id: "af_02",
      metric: "Facilities",
      icon: Building,
      rating: 5,
      ratingLabel: "Excellent",
      subtitle: "Facilities are clean and well maintained.",
      comment: "Clean classrooms, modern lab equipment, and sports hall.",
    },
    {
      id: "vl_01",
      metric: "Value for Money",
      icon: Building,
      rating: 4,
      ratingLabel: "Good",
      subtitle: "The school offers good value for money.",
      comment: "Worth the investment for the quality of education provided.",
    },
  ],
  "Share your experience": [
    {
      id: "re_01",
      metric: "Recommendation",
      icon: ThumbsUp,
      rating: 5,
      ratingLabel: "Excellent",
      subtitle: "I would recommend this school.",
      comment: "Highly recommend Lindenhof Kantonsschule to all parents.",
    },
    {
      id: "op_01",
      metric: "Strengths",
      icon: Heart,
      rating: 5,
      ratingLabel: "Excellent",
      subtitle: "What’s working well at this school?",
      comment: "Great teachers, supportive community, and modern facilities.",
    },
    {
      id: "op_02",
      metric: "Areas for Improvement",
      icon: Shield,
      rating: 4,
      ratingLabel: "Good",
      subtitle: "What could the school do better?",
      comment: "More outdoor sports activities during winter season.",
    },
  ],
}

const EditCategoryReviewModal = ({ isOpen, onClose, categoryName = "Wellbeing", onSave }) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const [editFormData, setEditFormData] = useState(INITIAL_EDIT_DATA)

  useEffect(() => {
    const idx = CATEGORY_KEYS.indexOf(categoryName)
    if (idx !== -1) setCurrentCategoryIndex(idx)
  }, [categoryName])

  if (!isOpen) return null

  const activeCategory = CATEGORY_KEYS[currentCategoryIndex] || "Wellbeing"
  const currentMetrics = editFormData[activeCategory] || INITIAL_EDIT_DATA.Wellbeing

  const handlePrevCategory = () => {
    setCurrentCategoryIndex((prev) => (prev > 0 ? prev - 1 : CATEGORY_KEYS.length - 1))
  }

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prev) => (prev < CATEGORY_KEYS.length - 1 ? prev + 1 : 0))
  }

  const handleRatingChange = (metricId, newRating) => {
    const labels = {
      1: "Could be better",
      2: "Could be better",
      3: "Good",
      4: "Good",
      5: "Excellent",
    }
    setEditFormData((prev) => ({
      ...prev,
      [activeCategory]: (prev[activeCategory] || []).map((m) =>
        m.id === metricId
          ? { ...m, rating: newRating, ratingLabel: labels[newRating] || "Good" }
          : m
      ),
    }))
  }

  const handleCommentChange = (metricId, newComment) => {
    setEditFormData((prev) => ({
      ...prev,
      [activeCategory]: (prev[activeCategory] || []).map((m) =>
        m.id === metricId ? { ...m, comment: newComment } : m
      ),
    }))
  }

  const handleSave = () => {
    if (onSave) onSave(editFormData)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[1572px] w-[95vw] rounded-[28px] p-6 sm:p-8 bg-white border border-gray-100 shadow-2xl font-urbanist max-h-[90vh] overflow-y-auto">
        
        {/* Pagination Arrows Header Controls */}
        <div className="flex items-center justify-center gap-3 pt-2 pb-4">
          <button
            type="button"
            onClick={handlePrevCategory}
            className="w-8 h-8 rounded-full bg-gray-100/80 hover:bg-gray-200 text-[#5A5A5A] flex items-center justify-center transition-colors cursor-pointer"
            title="Previous category"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2]" />
          </button>
          <button
            type="button"
            onClick={handleNextCategory}
            className="w-8 h-8 rounded-full bg-[#038AF9] text-white flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            title="Next category"
          >
            <ChevronRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Category Title */}
        <div className="pb-4 text-left">
          <h2 className="text-[24px] sm:text-[26px] font-semibold text-[#080808]">
            {activeCategory}
          </h2>
        </div>

        {/* Metrics List */}
        <div className="space-y-6 text-left">
          {currentMetrics.map((m) => {
            const IconComp = m.icon || Shield
            return (
              <div key={m.id} className="space-y-3 pb-4 border-b border-gray-100 last:border-0 font-urbanist">
                {/* Metric Header & Stars */}
                <div className="flex items-center gap-2">
                  <IconComp className="w-5 h-5 text-[#1F1F21] stroke-[1.75]" />
                  <span className="text-base font-medium text-[#080808]">
                    {m.metric}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <UserStarRatingIcon
                        key={star}
                        filled={star <= m.rating}
                        onClick={() => handleRatingChange(m.id, star)}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-normal text-[#5A5A5A]">
                    {m.ratingLabel}
                  </span>
                </div>

                {/* Subtitle Heading */}
                <h3 className="text-[17px] font-medium text-[#080808] pt-1">
                  {m.subtitle}
                </h3>

                {/* Comment Input */}
                <input
                  type="text"
                  value={m.comment}
                  onChange={(e) => handleCommentChange(m.id, e.target.value)}
                  className="w-full h-12 px-4 bg-white border border-gray-200/90 rounded-[12px] text-[15px] text-[#080808] focus:outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] transition-all"
                />
              </div>
            )
          })}
        </div>

        {/* Modal Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-6 border-t border-dashed border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-[14px] border border-gray-200/90 bg-white hover:bg-gray-50 text-[#080808] font-medium text-base transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2.5 rounded-[14px] bg-[#038AF9] hover:bg-[#0270ce] text-white font-medium text-base transition-colors cursor-pointer shadow-xs"
          >
            Save Changes
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditCategoryReviewModal
