import React from "react"
import { Check } from "lucide-react"

const FeedbackSuccessModal = ({
  isOpen,
  title = "Thank you for your feedback!",
  subtitle = "Your anonymous feedback has been shared.",
  primaryButtonText = "Review Another Teacher",
  onPrimaryClick,
  secondaryButtonText = "Done",
  onSecondaryClick,
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-[420px] bg-white rounded-3xl p-8 shadow-2xl border border-border/60 text-center space-y-6 animate-in zoom-in-95 duration-200">
        {/* Green Checkmark Circle Badge */}
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
          <Check className="w-7 h-7 stroke-[2.5]" />
        </div>

        {/* Text Headers */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-normal">
            {subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          {primaryButtonText && onPrimaryClick && (
            <button
              type="button"
              onClick={onPrimaryClick}
              className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium text-sm transition-all cursor-pointer shadow-sm active:scale-98"
            >
              {primaryButtonText}
            </button>
          )}
          {secondaryButtonText && onSecondaryClick && (
            <button
              type="button"
              onClick={onSecondaryClick}
              className="w-full h-12 rounded-xl bg-muted/30 hover:bg-muted/60 text-foreground border border-border/50 font-medium text-sm transition-all cursor-pointer active:scale-98"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeedbackSuccessModal
