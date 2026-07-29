import React, { useState } from "react"
import { CheckCircle2, Sparkles } from "lucide-react"
import VoiceInputButton from "../../../common/VoiceInputButton"
import FullReviewModal from "../../communityFeedback/FullReviewModal"

// Star rating display
const DetailStarRating = ({ rating = 4.5 }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-[#038AF9] fill-[#038AF9]" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-[#038AF9]" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`detail-half-star-${i}`}>
              <stop offset="50%" stopColor="#038AF9" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill={`url(#detail-half-star-${i})`} stroke="#038AF9" strokeWidth="1.5" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
  return <div className="flex items-center gap-1">{stars}</div>
}

const CommunityReviewDetail = ({ selectedReview }) => {
  const [responseText, setResponseText] = useState("")
  const [showFullReviewModal, setShowFullReviewModal] = useState(false)
  const [isGeneratingAi, setIsGeneratingAi] = useState(false)

  const review = selectedReview || {
    id: 1,
    title: "Great teachers, but workload can be challenging",
    rating: 4.5,
    role: "Parent",
    date: "Sept 2026",
    isRecommended: true,
    fullReview:
      "The academic standards and teaching quality at this school are exceptional. Teachers are genuinely dedicated to student growth and offer excellent support. However, homework load and project deadlines can occasionally cause unnecessary stress for students.",
  }

  const handleVoiceTranscript = (text) => {
    setResponseText((prev) => (prev ? `${prev} ${text}` : text))
  }

  const handleGenerateAiResponse = () => {
    setIsGeneratingAi(true)
    setTimeout(() => {
      setResponseText(
        `Thank you for sharing your feedback. We are proud of our dedicated teaching staff and take student workload balance very seriously. Our academic team is actively reviewing assignment schedules to ensure a balanced homework load.`
      )
      setIsGeneratingAi(false)
    }, 800)
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between h-full space-y-6 font-urbanist">
      {/* Top Review Info Card Container */}
      <div className="border border-gray-100 rounded-3xl p-5 space-y-4 bg-gray-50/30">
        {/* Title */}
        <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808]">
          {review.title}
        </h3>

        {/* Rating Score & Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <span className="font-medium text-textPrimary">{review.rating}</span>
            <DetailStarRating rating={review.rating} />

            {/* Recommended Badge */}
            <div className="flex items-center gap-1.5 text-base font-normal text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-[#8DC613] stroke-[2.5]" />
              <span>Recommended</span>
            </div>
          </div>

          <div className="text-textPrimary text-base! font-normal">
            {review.role}, {review.date}
          </div>
        </div>

        {/* Dotted Separator */}
        <div className="border-b border-dashed border-gray-200/80" />

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => setShowFullReviewModal(true)}
            className="px-4 py-2 rounded-xl border border-[#038AF9] hover:bg-[#038AF9]/5 text-base font-semibold transition-colors cursor-pointer"
          >
            Read Full Review
          </button>

          <button
            type="button"
            onClick={handleGenerateAiResponse}
            className="px-4 py-2 rounded-xl bg-[#FAFAFA] hover:bg-gray-200 text-textPrimary text-base font-medium transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Generate AI Summary</span>
          </button>
        </div>
      </div>

      {/* Full Review Modal Trigger */}
      <FullReviewModal
        isOpen={showFullReviewModal}
        onClose={() => setShowFullReviewModal(false)}
        review={review}
      />

      {/* School Response Section */}
      <div className="space-y-3.5 flex-1 flex flex-col justify-between">
        <h4 className="font-semibold text-sm sm:text-base text-[#1F1F21]">
          School Response
        </h4>

        {/* Response Input Box with VoiceInputButton */}
        <div className="relative w-full border border-gray-200/80 rounded-2xl p-3 bg-white focus-within:border-[#038AF9] focus-within:ring-2 focus-within:ring-[#038AF9]/20 transition-all flex-1 min-h-[140px] flex flex-col justify-between">
          <div className="flex items-start gap-2">
            {/* Mic Voice Input Button from components/common/VoiceInputButton */}
            <VoiceInputButton
              onTranscript={handleVoiceTranscript}
              className=" -mt-1"
            />
            <textarea
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              placeholder="Write your response to this review or use the Generate AI Response button."
              className="w-full h-full bg-transparent border-none outline-none resize-none text-sm sm:text-base text-textPrimary placeholder-gray-400 focus:ring-0 p-0"
              rows={4}
            />
          </div>
        </div>

        {/* Primary Action Button */}
        <div>
          <button
            type="button"
            onClick={handleGenerateAiResponse}
            disabled={isGeneratingAi}
            className="px-6 py-3 rounded-2xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>
              {isGeneratingAi ? "Generating..." : "Generate AI Response"}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommunityReviewDetail
