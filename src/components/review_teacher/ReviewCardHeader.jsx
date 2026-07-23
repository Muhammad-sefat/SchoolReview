import React from "react"
import reviewBanner from "@/assets/images/reviewBg.png"
import { LogoOne } from "@/components/icons/Logo/AllLogo"

const ReviewCardHeader = () => {
  return (
    <div className="relative w-full h-[120px] rounded-t-[20px] overflow-hidden bg-primary flex items-center justify-center shrink-0">
      {/* Banner background image */}
      <img
        src={reviewBanner}
        alt="Review Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      {/* Centered Logo */}
      {/* <div className="relative z-10 flex items-center justify-center">
        <LogoOne className="w-16 h-14" />
      </div> */}
    </div>
  )
}

export default ReviewCardHeader
