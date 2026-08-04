import React from "react"
import reviewBanner from "@/assets/images/reviewBg.png"
import { LogoOne } from "@/components/icons/Logo/AllLogo"

const SpeakUpHeader = () => {
  return (
    <div className="relative w-full h-[120px] rounded-t-[20px] overflow-hidden bg-[#038AF9] flex items-center justify-center shrink-0">
      {/* Banner background pattern */}
      <img
        src={reviewBanner}
        alt="SpeakUp Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      {/* Centered White Logo */}
      <div className="relative z-10 flex items-center justify-center">
        <LogoOne className="w-16 h-14 text-white" />
      </div>
    </div>
  )
}

export default SpeakUpHeader
