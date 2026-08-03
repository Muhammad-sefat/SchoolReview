import React, { useState } from "react"
import { SchoolLocation, IconPrivacy, LoveIcon } from "@/components/icons/CustomIcons"
import defaultSchoolCard from "@/assets/images/schoolCard.png"
import defaultSchoolLogo from "@/assets/images/schoolLogo.png"
import UnfollowSchoolModal from "./UnfollowSchoolModal"

const VerifiedCheckmark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
    <circle cx="8" cy="8" r="8" fill="#038AF9" />
    <path d="M5 8.2L7 10.2L11 5.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const StarIcon = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.231 0.795331C7.77675 -0.26511 9.30658 -0.26511 9.85233 0.795331L11.6911 4.36861C11.7216 4.4279 11.7789 4.46916 11.8452 4.47963L15.8422 5.11004C17.0277 5.29702 17.5001 6.73566 16.6523 7.5775L13.791 10.4187C13.7436 10.4658 13.7217 10.5324 13.7322 10.5981L14.3629 14.5635C14.5498 15.7387 13.3124 16.6282 12.2421 16.0882L8.63708 14.2695C8.57717 14.2392 8.50617 14.2392 8.44625 14.2695L4.84127 16.0882C3.77087 16.6282 2.53353 15.7387 2.72044 14.5635L3.35112 10.5981C3.36156 10.5324 3.33972 10.4658 3.29232 10.4187L0.430982 7.5775C-0.416726 6.73566 0.0556737 5.29702 1.24117 5.11004L5.23806 4.47963C5.30442 4.46916 5.36172 4.4279 5.39224 4.36861L7.231 0.795331Z" fill="#038AF9" />
  </svg>
)

const SchoolCard = ({ school, onUnfollow }) => {
  const [isUnfollowModalOpen, setIsUnfollowModalOpen] = useState(false)

  const {
    name = "Zurich International School",
    isVerified = true,
    location = "Zurich, Switzerland",
    type = "Private",
    rating = 4.5,
    reviewsCount = "1,020",
    coverImg = defaultSchoolCard,
    logoImg = defaultSchoolLogo,
  } = school || {}

  const handleUnfollowConfirm = () => {
    console.log("Unfollowed school:", name)
    if (onUnfollow) onUnfollow(school)
  }

  return (
    <>
      <div className="bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-2xs space-y-4 flex flex-col justify-between font-urbanist hover:shadow-md transition-shadow">
        <div className="space-y-7">
          {/* Cover Image & Overlay Logo */}
          <div className="relative w-full h-44 bg-gray-100">
            <img src={coverImg} alt={name} className="w-full h-full object-cover" />

            {/* Logo Badge Overlay */}
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 p-1 shadow-2xs absolute -bottom-5 left-4 flex items-center justify-center overflow-hidden">
              <img src={logoImg} alt="Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
          </div>

          {/* Info Content */}
          <div className="px-5 space-y-3">
            {/* School Name & Verified Icon */}
            <div className="flex items-center gap-1.5">
              <h4 className="text-[18px] font-medium text-[#080808] truncate">{name}</h4>
              {isVerified && <VerifiedCheckmark />}
            </div>

            {/* Location & Type */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[14px] font-normal text-textPrimary">
                <SchoolLocation className="w-4 h-4 text-[#080808] shrink-0" />
                <span>{location}</span>
              </div>

              <div className="flex items-center gap-2 text-[14px] font-normal text-textPrimary">
                <IconPrivacy className="w-4 h-4 text-[#080808] shrink-0" />
                <span>{type}</span>
              </div>
            </div>

            {/* Rating Stars & Review Count */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= Math.floor(rating)} />
                ))}
              </div>
              <span className="text-[14px] font-medium text-[#080808]">{rating}</span>
              <span className="text-sm font-normal text-secondary">({reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="p-5 pt-2 grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => console.log("View School clicked:", name)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[18px] font-semibold text-center transition-colors cursor-pointer shadow-2xs"
          >
            View School
          </button>

          <button
            type="button"
            onClick={() => setIsUnfollowModalOpen(true)}
            className="py-2.5 px-4 rounded-xl bg-[#EAEBEE] hover:bg-gray-300/80 text-[#080808] text-[18px] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <LoveIcon />
            <span>Following</span>
          </button>
        </div>
      </div>

      {/* Unfollow School Shadcn Modal */}
      <UnfollowSchoolModal
        isOpen={isUnfollowModalOpen}
        onClose={() => setIsUnfollowModalOpen(false)}
        school={school}
        onUnfollowConfirm={handleUnfollowConfirm}
      />
    </>
  )
}

export default SchoolCard
