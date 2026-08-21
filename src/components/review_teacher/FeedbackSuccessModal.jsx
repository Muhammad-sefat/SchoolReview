import React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const FeedbackSuccessModal = ({
  isOpen,
  open,
  onOpenChange,
  onClose,
  title = "Thank you for your feedback!",
  subtitle = "Your anonymous feedback has been shared.",
  primaryButtonText = "Review Another Teacher",
  onPrimaryClick,
  secondaryButtonText = "Done",
  onSecondaryClick,
}) => {
  const isModalOpen = open !== undefined ? open : isOpen

  const handleClose = () => {
    if (onOpenChange) {
      onOpenChange(false)
    }
    if (onClose) {
      onClose()
    } else if (onSecondaryClick) {
      onSecondaryClick()
    } else if (onPrimaryClick) {
      onPrimaryClick()
    }
  }

  const handleOpenChange = (val) => {
    if (!val) {
      handleClose()
    } else if (onOpenChange) {
      onOpenChange(true)
    }
  }

  return (
    <Dialog open={!!isModalOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[420px] bg-white rounded-3xl p-8 shadow-2xl border border-border/60 text-center  font-urbanist">
        {/* Green Checkmark Circle Badge */}
        <div className="w-14 h-14 rounded-full bg-[rgba(102,187,106,0.10)] flex items-center justify-center mx-auto text-emerald-600 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.9987 37.9154C10.1036 37.9154 2.08203 29.8939 2.08203 19.9987C2.08203 10.1036 10.1036 2.08203 19.9987 2.08203C29.8939 2.08203 37.9154 10.1036 37.9154 19.9987C37.9154 29.8939 29.8939 37.9154 19.9987 37.9154ZM27.4654 15.628C28.2729 15.1863 28.5695 14.1736 28.1279 13.366C27.6862 12.5584 26.6735 12.2617 25.866 12.7034C22.8182 14.3701 20.298 17.5869 18.6035 20.1814C17.9774 21.1404 17.4424 22.0482 17.0144 22.8172C16.6151 22.4299 16.2197 22.0937 15.866 21.814C15.4032 21.4482 14.9867 21.1595 14.6831 20.9607L14.158 20.6345C13.3584 20.1785 12.3406 20.457 11.8846 21.2567C11.4286 22.056 11.7069 23.0735 12.5061 23.5299L12.8565 23.749C13.0946 23.9049 13.4281 24.1359 13.7986 24.4289C14.5612 25.0317 15.3841 25.822 15.902 26.6879C16.2198 27.2192 16.806 27.5305 17.4242 27.4965C18.0422 27.4624 18.5905 27.088 18.848 26.5252L19.0119 26.1829C19.1247 25.9522 19.2937 25.6149 19.5137 25.1994C19.9545 24.3665 20.5955 23.2274 21.3944 22.004C23.0334 19.4945 25.1797 16.8779 27.4654 15.628Z" fill="#66BB6A" />
          </svg>
        </div>

        {/* Text Headers */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground">
            {title}
          </h3>
          <p className="text-base text-textPrimary font-normal">
            {subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          {primaryButtonText && onPrimaryClick && (
            <button
              type="button"
              onClick={onPrimaryClick}
              className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium text-base transition-all cursor-pointer shadow-xs active:scale-98"
            >
              {primaryButtonText}
            </button>
          )}
          {secondaryButtonText && onSecondaryClick && (
            <button
              type="button"
              onClick={onSecondaryClick}
              className="w-full h-12 rounded-xl bg-[#FAFAFA] hover:bg-muted/60 text-foreground border border-[#EAEAEA] font-medium text-base transition-all cursor-pointer active:scale-98"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default FeedbackSuccessModal
