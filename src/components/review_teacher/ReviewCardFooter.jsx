import React from "react"
import { ArrowLeft } from "lucide-react"

const ReviewCardFooter = ({ currentStep, totalSteps = 6, onNext, onBack, isNextDisabled = false }) => {
  const progressPercent = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100))

  return (
    <div className="w-full pt-6 pb-2 border-t border-border/40 flex items-center justify-between gap-4">
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        disabled={currentStep === 1}
        className={`w-10 h-10 rounded-full flex items-center justify-center border border-border/80 transition-colors ${
          currentStep === 1
            ? "opacity-30 cursor-not-allowed bg-muted/20"
            : "hover:bg-muted/40 cursor-pointer bg-background"
        }`}
      >
        <ArrowLeft className="w-4 h-4 text-foreground" />
      </button>

      {/* Progress Bar Container */}
      <div className="flex-1 flex items-center gap-3 max-w-md">
        <div className="flex-1 h-2 rounded-full bg-muted/40 overflow-hidden relative">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
          Step {currentStep}/{totalSteps}
        </span>
      </div>

      {/* Next / Submit Button */}
      <button
        type="button"
        onClick={onNext}
        disabled={isNextDisabled}
        className={`h-10 px-7 rounded-xl font-medium text-sm transition-all shadow-sm ${
          isNextDisabled
            ? "bg-primary/50 text-white cursor-not-allowed"
            : "bg-primary hover:bg-primary/90 text-white cursor-pointer active:scale-95"
        }`}
      >
        {currentStep === totalSteps ? "Submit" : "Next"}
      </button>
    </div>
  )
}

export default ReviewCardFooter
