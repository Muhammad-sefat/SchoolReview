import React from "react"

const BackArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M11 18L5 12L11 6M5.5 12H19" stroke="#080808" strokeWidth="1.5" strokeLinecap="square"/>
  </svg>
)

const SpeakUpFooter = ({ currentStep = 1, totalSteps = 2, onNext, onBack, isNextDisabled = false }) => {
  const progressPercent = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100))

  return (
    <div className="w-full pt-6 pb-2 border-t border-border/40 flex items-center justify-between gap-4 font-urbanist shrink-0">
      {/* Back Button with #F7F7F7 bg and 360px radius */}
      <button
        type="button"
        onClick={onBack}
        disabled={currentStep === 1}
        className={`w-11 h-11 rounded-[360px] flex items-center justify-center transition-all bg-[#F7F7F7] ${
          currentStep === 1
            ? "opacity-30 cursor-not-allowed"
            : "hover:bg-[#EAEAEA] cursor-pointer active:scale-95 shadow-xs"
        }`}
      >
        <BackArrowIcon />
      </button>

      {/* Progress Bar & Step Text */}
      <div className="flex-1 flex items-center gap-3 max-w-md">
        <div className="flex-1 h-2 rounded-full bg-muted/40 overflow-hidden relative border border-border/20">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
          Step {currentStep}/{totalSteps}
        </span>
      </div>

      {/* Next Button with bg-primary, text-18px, font-medium */}
      <button
        type="button"
        onClick={onNext}
        disabled={isNextDisabled}
        className={`h-11 px-8 rounded-xl text-[18px] font-medium text-white transition-all shadow-sm ${
          isNextDisabled
            ? "bg-primary/50 cursor-not-allowed"
            : "bg-primary hover:bg-primary/90 cursor-pointer active:scale-95"
        }`}
      >
        {currentStep === totalSteps ? "Submit" : "Next"}
      </button>
    </div>
  )
}

export default SpeakUpFooter
