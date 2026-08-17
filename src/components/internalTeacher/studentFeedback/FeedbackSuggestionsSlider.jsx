import React, { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

const SUGGESTIONS_CARDS = [
  {
    id: 1,
    studentFeedback:
      "I get what you're explaining most of the time, but when I start working on my own, I'm not always sure how to begin. I've tried asking a few times, but I don't always get the help I need straight away, so I end up getting stuck and falling behind.",
    suggestedApproach:
      "Provide step-by-step starter guides or template prompts for independent work, and incorporate quick 2-minute individual check-ins at the start of independent practice time.",
    date: "16/07/2026",
  },
  {
    id: 2,
    studentFeedback:
      "Your lessons are usually easy to follow, but I sometimes struggle when it's time to work on my own. A little more support when getting started would help me feel more confident and keep up with the class.",
    suggestedApproach:
      "Offer small-group guided practice tables for students needing additional scaffolding before transitioning to fully independent problem solving.",
    date: "16/07/2026",
  },
  {
    id: 3,
    studentFeedback:
      "Your lessons are usually easy to follow, but I sometimes struggle when it's time to work on my own. A little more support when getting started would help me feel more confident and keep up with the class.",
    suggestedApproach:
      "Use peer-pairing techniques during the first 5 minutes of working independently so students can discuss initial steps with a partner.",
    date: "16/07/2026",
  },
  {
    id: 4,
    studentFeedback:
      "Sometimes the pace moves a bit fast during key explanations, and I miss writing down crucial notes before we switch topics.",
    suggestedApproach:
      "Pause for 30 seconds after presenting key definitions or equations, and share digital slide recaps after class.",
    date: "15/07/2026",
  },
]

const FeedbackSuggestionsSlider = () => {
  const [activeCardId, setActiveCardId] = useState(1)
  const [activeTabPerCard, setActiveTabPerCard] = useState({})
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const handleTabChange = (cardId, tab) => {
    setActiveTabPerCard((prev) => ({
      ...prev,
      [cardId]: tab,
    }))
  }

  return (
    <div className="w-full bg-white border border-gray-300 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4 font-urbanist">
      {/* Header Row */}
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[24px] font-semibold text-textPrimary leading-tight">
            Feedback Suggestions
          </h3>

          {/* Navigation Controls */}
          <div className="flex items-center gap-1.5 ml-1">
            <button
              ref={prevRef}
              type="button"
              className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-all cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              ref={nextRef}
              type="button"
              className="w-6 h-6 rounded-full bg-[#038AF9] hover:bg-blue-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs disabled:opacity-80 disabled:cursor-not-allowed"
              title="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* <p className="text-[16px] font-normal text-textPrimary">
          Click to mark this feedback as read.
        </p> */}
      </div>

      {/* Swiper Slider */}
      <div className="w-full pt-1">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full !py-1"
        >
          {SUGGESTIONS_CARDS.map((card) => {
            const isSelected = activeCardId === card.id
            const currentTab = activeTabPerCard[card.id] || "feedback"

            return (
              <SwiperSlide key={card.id} className="!h-auto flex">
                <div
                  onClick={() => setActiveCardId(card.id)}
                  className={`w-full rounded-[24px] border transition-all p-6 bg-white flex flex-col justify-between space-y-8 cursor-pointer ${isSelected
                    ? "border-[#038AF9] shadow-2xs"
                    : "border-[var(--Gray-Stroke,#E0E0E0)] hover:border-gray-300"
                    }`}
                >
                  {/* Top Section */}
                  <div className="space-y-4">
                    {/* Inside Card Header - 2 Tabs */}
                    <div className="flex items-center gap-5 border-b border-gray-100 pb-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleTabChange(card.id, "feedback")
                        }}
                        className={`text-[18px] transition-all cursor-pointer pb-1 ${currentTab === "feedback"
                          ? "text-[#038AF9] font-medium border-b-2 border-[#038AF9]"
                          : "text-textPrimary font-normal hover:text-[#080808]"
                          }`}
                      >
                        Student Feedback
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleTabChange(card.id, "approach")
                        }}
                        className={`text-[18px] transition-all cursor-pointer pb-1 ${currentTab === "approach"
                          ? "text-[#038AF9] font-medium border-b-2 border-[#038AF9]"
                          : "text-textPrimary font-normal hover:text-[#080808]"
                          }`}
                      >
                        Suggested Approach
                      </button>
                    </div>

                    {/* Main Content with Left Blue Accent Border */}
                    <div className="border-l-2 border-[#038AF9] pl-3.5 py-0.5 space-y-1">
                      {currentTab === "feedback" ? (
                        <p className="text-[18px] font-normal text-textPrimary leading-relaxed line-clamp-3">
                          {card.studentFeedback}
                        </p>
                      ) : (
                        <p className="text-[18px] font-normal text-textPrimary leading-relaxed line-clamp-3">
                          {card.suggestedApproach}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        className="text-[#038AF9] text-[16px] font-medium hover:underline cursor-pointer inline-block"
                      >
                        Show more
                      </button>
                    </div>
                  </div>

                  {/* Footer Row with Increased Top Margin / Gap */}
                  <div className="flex items-center justify-end pt-4 border-t border-gray-50">
                    <span className="text-[16px] font-normal text-secondary mb-1">
                      {card.date}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default FeedbackSuggestionsSlider
