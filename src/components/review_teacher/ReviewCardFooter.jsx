import React from "react"
import { ArrowLeft } from "lucide-react"

const ReviewCardFooter = ({ currentStep, totalSteps = 6, onNext, onBack, isNextDisabled = false }) => {
  const progressPercent = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100))

  return (
    <div className="w-full pt-4 pb-2 border-t border-[#EAEAEA] flex items-center justify-between gap-2 sm:gap-4 font-urbanist shrink-0">
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        disabled={currentStep === 1}
        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 transition-all ${currentStep === 1
            ? "opacity-30 cursor-not-allowed bg-[#F7F7F7] text-gray-400"
            : "hover:bg-gray-200 cursor-pointer bg-[#F7F7F7] text-[#1F1F21] active:scale-95"
          }`}
        title="Previous step"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Progress Bar Container (Responsive for Mobile) */}
      <div className="flex-1 min-w-0 flex items-center justify-center gap-1.5 sm:gap-4 max-w-lg mx-1 sm:mx-auto">
        <div className="flex-1 min-w-[40px] h-2 sm:h-2.5 rounded-full bg-[#EAEAEA] overflow-hidden relative">
          <div
            className="h-full bg-[#038AF9] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-xs sm:text-sm font-medium text-[#1F1F21] whitespace-nowrap shrink-0">
          Step {currentStep}/{totalSteps}
        </span>
      </div>

      {/* Next / Submit Button */}
      <button
        type="button"
        onClick={onNext}
        disabled={isNextDisabled}
        className={`h-9 sm:h-11 px-4 sm:px-8 rounded-xl font-semibold text-xs sm:text-base shrink-0 transition-all shadow-xs ${isNextDisabled
            ? "bg-[#038AF9]/50 text-white cursor-not-allowed"
            : "bg-[#038AF9] hover:bg-[#0270ce] text-white cursor-pointer active:scale-95"
          }`}
      >
        {currentStep === totalSteps ? "Submit" : "Next"}
      </button>
    </div>
  )
}

export default ReviewCardFooter
