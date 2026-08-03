import React, { useState, useRef } from "react"
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

const DISCOVERY_CALLS_DATA = [
  {
    id: 1,
    name: "Sarah Klein",
    status: "Schedule",
    statusColor: "bg-[rgba(102,187,106,0.10)] text-[#66BB6A] border-[#EAEAEA]",
    date: "August 2, 2026",
    time: "10:00 PM",
    duration: "30 min",
  },
  {
    id: 2,
    name: "Sarah Klein",
    status: "Canceled",
    statusColor: "bg-[rgba(229,57,53,0.10)] text-[#E53935] border-[#EAEAEA]",
    date: "August 2, 2026",
    time: "10:00 PM",
    duration: "30 min",
  },
  {
    id: 3,
    name: "Sarah Klein",
    status: "Completed",
    statusColor: "bg-[rgba(3,138,249,0.04)] text-[#4A90E2] border-[#EAEAEA]",
    date: "August 2, 2026",
    time: "10:00 PM",
    duration: "30 min",
  },
  {
    id: 4,
    name: "Michael Scott",
    status: "Schedule",
    statusColor: "bg-[rgba(102,187,106,0.10)] text-[#66BB6A] border-[#EAEAEA]",
    date: "August 3, 2026",
    time: "02:30 PM",
    duration: "45 min",
  },
  {
    id: 5,
    name: "Emma Watson",
    status: "Completed",
    statusColor: "bg-[rgba(3,138,249,0.04)] text-[#4A90E2] border-[#EAEAEA]",
    date: "August 4, 2026",
    time: "11:00 AM",
    duration: "30 min",
  },
  {
    id: 6,
    name: "Sarah Klein",
    status: "Schedule",
    statusColor: "bg-[rgba(102,187,106,0.10)] text-[#66BB6A] border-[#EAEAEA]",
    date: "August 2, 2026",
    time: "10:00 PM",
    duration: "30 min",
  },
  {
    id: 7,
    name: "Sarah Klein",
    status: "Canceled",
    statusColor: "bg-[rgba(229,57,53,0.10)] text-[#E53935] border-[#EAEAEA]",
    date: "August 2, 2026",
    time: "10:00 PM",
    duration: "30 min",
  },
  {
    id: 8,
    name: "Sarah Klein",
    status: "Completed",
    statusColor: "bg-[rgba(3,138,249,0.04)] text-[#4A90E2] border-[#EAEAEA]",
    date: "August 2, 2026",
    time: "10:00 PM",
    duration: "30 min",
  },
  {
    id: 9,
    name: "Michael Scott",
    status: "Schedule",
    statusColor: "bg-[rgba(102,187,106,0.10)] text-[#66BB6A] border-[#EAEAEA]",
    date: "August 3, 2026",
    time: "02:30 PM",
    duration: "45 min",
  },
  {
    id: 10,
    name: "Emma Watson",
    status: "Completed",
    statusColor: "bg-[rgba(3,138,249,0.04)] text-[#4A90E2] border-[#EAEAEA]",
    date: "August 4, 2026",
    time: "11:00 AM",
    duration: "30 min",
  },
]

const getStatusColorClass = (status, defaultClass) => {
  if (status === "Schedule" || status === "Scheduled") {
    return "bg-[rgba(102,187,106,0.10)] text-[#66BB6A] border-[#EAEAEA]"
  }
  if (status === "Canceled") {
    return "bg-[rgba(229,57,53,0.10)] text-[#E53935] border-[#EAEAEA]"
  }
  if (status === "Completed") {
    return "bg-[rgba(3,138,249,0.04)] text-[#4A90E2] border-[#EAEAEA]"
  }
  return defaultClass || "bg-gray-50 text-gray-600 border-[#EAEAEA]"
}

const DiscoveryCallRequests = ({ calls = DISCOVERY_CALLS_DATA }) => {
  const [showCalendarModal, setShowCalendarModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState("2026-08-02")

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="w-full bg-white rounded-3xl border border-[#EAEAEA] p-5 md:p-6 shadow-xs flex flex-col justify-between h-full relative min-w-0">
      <div>
        {/* Header with Title, Count Badge, and Calendar Modal Button */}
        <div className="flex items-center justify-between gap-3 mb-3 shrink-0">
          <div className="flex items-center gap-2">
            <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808]">
              Discovery Call Requests
            </h3>
            <span className="w-6 h-6 rounded-full bg-[#038AF9] text-white text-xs font-bold flex items-center justify-center">
              20
            </span>
          </div>

          {/* Right Calendar Icon Button */}
          <button
            type="button"
            onClick={() => setShowCalendarModal(!showCalendarModal)}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            title="Select date range"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.5984 3V6.6M8.39844 3V6.6" stroke="#1F1F21" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.8984 4.79999H11.0984C7.70432 4.79999 6.00727 4.79999 4.95285 5.8544C3.89844 6.90882 3.89844 8.60587 3.89844 12V13.8C3.89844 17.1941 3.89844 18.8912 4.95285 19.9455C6.00727 21 7.70432 21 11.0984 21H12.8984C16.2925 21 17.9896 21 19.044 19.9455C20.0984 18.8912 20.0984 17.1941 20.0984 13.8V12C20.0984 8.60587 20.0984 6.90882 19.044 5.8544C17.9896 4.79999 16.2925 4.79999 12.8984 4.79999Z" stroke="#1F1F21" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.89844 10.2H20.0984" stroke="#1F1F21" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.9944 13.8H12.0025M11.9944 17.4H12.0025M15.5903 13.8H15.5984M8.39844 13.8H8.40651M8.39844 17.4H8.40651" stroke="#1F1F21" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dotted Separator */}
        <div className="border-b border-dashed border-[#EAEAEA] mb-4" />

        {/* Calendar Picker Dropdown Modal */}
        {showCalendarModal && (
          <div className="absolute top-16 right-6 z-30 bg-white border border-[#EAEAEA] rounded-2xl p-4 shadow-xl space-y-3 w-72 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-2">
              <span className="text-xs font-bold text-textPrimary">
                Select Call Date
              </span>
              <button
                type="button"
                onClick={() => setShowCalendarModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value)
                setShowCalendarModal(false)
              }}
              className="w-full border border-[#EAEAEA] rounded-xl px-3 py-2 text-xs font-medium text-textPrimary outline-none focus:border-[#038AF9]"
            />
          </div>
        )}

        {/* Swiper.js Cards Container */}
        <div className="relative min-w-0 px-1 py-1">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            className="w-full"
          >
            {calls.map((call) => (
              <SwiperSlide key={call.id}>
                <div className="bg-white border border-[#EAEAEA] rounded-2xl p-5 space-y-3 shadow-2xs hover:border-gray-300 transition-all h-full">
                  {/* Name & Status Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-sm sm:text-lg text-textPrimary">
                      {call.name}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium border ${getStatusColorClass(call.status, call.statusColor)}`}
                    >
                      {call.status}
                    </span>
                  </div>

                  {/* Date & Time */}
                  <p className="text-lg text-textPrimary font-normal">
                    {call.date} <span className="text-gray-300 mx-1">•</span>{" "}
                    {call.time}
                  </p>

                  {/* Duration */}
                  <p className="text-base text-textPrimary font-medium">
                    {call.duration}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            type="button"
            className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-[#EAEAEA] text-gray-500 shadow-md hover:bg-gray-50 flex items-center justify-center transition-all cursor-pointer z-20"
            title="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            ref={nextRef}
            type="button"
            className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#038AF9] text-white shadow-md hover:bg-[#0274d4] flex items-center justify-center transition-all cursor-pointer z-20"
            title="Next slide"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiscoveryCallRequests
