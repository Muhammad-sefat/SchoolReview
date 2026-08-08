import React from "react"

const SelfReviewCard = ({ onStartReview }) => {
  return (
    <div className="w-full bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5 font-urbanist">
      <div className="space-y-1">
        <h3 className="text-[20px] font-semibold text-[#080808]">
          Annual Self Review
        </h3>
        <p className="text-[16px] font-normal text-textPrimary">
          Reflect on your teaching practice, identify strengths, and set goals for the coming year.
        </p>
      </div>

      <button
        type="button"
        onClick={onStartReview}
        className="px-6 py-3 rounded-xl bg-[#038AF9] hover:bg-blue-600 text-white text-[18px] font-medium transition-all shadow-2xs cursor-pointer"
      >
        Start Self Review
      </button>
    </div>
  )
}

export default SelfReviewCard
