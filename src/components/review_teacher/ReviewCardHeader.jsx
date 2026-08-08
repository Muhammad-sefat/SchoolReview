import React from "react"
import reviewBanner from "@/assets/images/reviewBg.png"

const ReviewCardHeader = () => {
  return (
    <div className="relative w-full h-[120px] rounded-t-[20px] overflow-hidden bg-primary flex items-center justify-center shrink-0">
      {/* Banner background image */}
      <img
        src={reviewBanner}
        alt="Review Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
    </div>
  )
}

export default ReviewCardHeader
