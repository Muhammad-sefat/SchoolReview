import React, { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import thankTeacherImg from "@/assets/images/thankTeacher.png"
import littleThumbUp from "@/assets/images/littleThumbUp.png"
import littleHandshake from "@/assets/images/littleHandhshake.png"
import littleStar from "@/assets/images/littleStar.png"
import littleParty from "@/assets/images/littleParty.png"

import "swiper/css"
import "swiper/css/navigation"

const RECOGNITION_CARDS = [
  {
    id: 1,
    tags: [
      { icon: littleHandshake, text: "Believed in me" },
      { icon: littleStar, text: "Supported me when I struggled" },
    ],
    content:
      "When I was struggling, you didn't just move on — you took the time to help me and made sure I understood. It made me feel like I wasn't just being left behind.",
    date: "16/07/2026",
  },
  {
    id: 2,
    tags: [{ icon: littleStar, text: "Supported me when I struggled" }],
    content:
      "When I was struggling, you didn't just move on — you took the time to help me and made sure I understood. It made me feel like I wasn't just being left behind.",
    date: "16/07/2026",
  },
  {
    id: 3,
    tags: [{ icon: littleHandshake, text: "Believed in me" }],
    content:
      "When I was struggling, you didn't just move on — you took the time to help me and made sure I understood. It made me feel like I wasn't just being left behind.",
    date: "16/07/2026",
  },
  {
    id: 4,
    tags: [
      { icon: littleParty, text: "Made learning fun" },
      { icon: littleThumbUp, text: "Helped me understand a topic" },
    ],
    content:
      "Thank you for making lessons so interactive! I used to find this subject really tough, but your teaching made everything clear and enjoyable.",
    date: "15/07/2026",
  },
]

const StudentRecognitionSlider = () => {
  const [activeCardId, setActiveCardId] = useState(1)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="w-full bg-white border border-gray-300 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4 font-urbanist">
      {/* Header Row */}
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[24px] font-semibold text-textPrimary leading-tight">
            Student Recognition
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

        {/* <p className="text-[16px] font-normal text-textPrimary mt-1">
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
          {RECOGNITION_CARDS.map((card) => {
            const isSelected = activeCardId === card.id

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
                    {/* Top Tags */}
                    <div className="flex items-center gap-2 flex-wrap min-h-[32px]">
                      {card.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="px-3.5 py-1.5 rounded-full border border-gray-200/90 bg-white text-[14px] font-normal text-textPrimary flex items-center gap-1.5 shadow-2xs"
                        >
                          <img
                            src={tag.icon}
                            alt={tag.text}
                            className="w-4 h-4 object-contain shrink-0"
                          />
                          <span>{tag.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Faint Horizontal Divider */}
                    <div className="border-b border-gray-100 my-1" />

                    {/* Main Content Quote with Left Blue Accent Border */}
                    <div className="border-l-2 border-[#038AF9] pl-3.5 py-0.5 space-y-1">
                      <p className="text-[18px] font-normal text-textPrimary leading-relaxed line-clamp-3">
                        {card.content}
                      </p>
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
                  <div className="flex items-end justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-end gap-3">
                      <img
                        src={thankTeacherImg}
                        alt="Thank Teacher"
                        className="w-14 h-14 object-contain rounded-xl shrink-0"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        className="text-[16px] font-medium text-[#038AF9] hover:underline cursor-pointer"
                      >
                        Share on Social
                      </button>
                    </div>

                    <span className="text-[16px] font-normal text-secondary shrink-0 mb-1">
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

export default StudentRecognitionSlider
