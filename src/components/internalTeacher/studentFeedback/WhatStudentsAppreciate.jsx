import React from "react"
import littleThumbUp from "@/assets/images/littleThumbUp.png"
import littleHandshake from "@/assets/images/littleHandhshake.png"
import littleStar from "@/assets/images/littleStar.png"
import littleParty from "@/assets/images/littleParty.png"

const APPRECIATION_ITEMS = [
  { id: 1, icon: littleThumbUp, text: "Helped me understand a topic", count: 1 },
  { id: 2, icon: littleHandshake, text: "Believed in me", count: 1 },
  { id: 3, icon: littleStar, text: "Supported me when I struggled", count: 1 },
  { id: 4, icon: littleParty, text: "Made learning fun", count: 1 },
]

const WhatStudentsAppreciate = () => {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5 font-urbanist">
      {/* Box Title */}
      <h3 className="text-[24px] font-semibold text-textPrimary leading-tight">
        What Students Appreciate About You
      </h3>

      {/* Badges / Tags Row */}
      <div className="flex items-center gap-3 flex-wrap">
        {APPRECIATION_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 bg-white border border-gray-200/90 rounded-full px-4 py-2.5 shadow-2xs hover:border-gray-300 transition-all select-none"
          >
            <img
              src={item.icon}
              alt={item.text}
              className="w-5 h-5 object-contain shrink-0"
            />
            <span className="text-[16px] font-medium text-textPrimary">
              {item.text}
            </span>
            <span className="w-5 h-5 bg-[#038AF9] text-white rounded-full text-[12px] font-semibold flex items-center justify-center ml-0.5">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatStudentsAppreciate
