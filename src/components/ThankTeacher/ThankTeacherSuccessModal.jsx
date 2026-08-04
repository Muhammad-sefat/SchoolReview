import React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const GreenSuccessCheckIcon = () => (
  <div
    className="w-[52px] h-[52px] rounded-[32px] flex items-center justify-center shrink-0"
    style={{ background: "rgba(102, 187, 106, 0.10)" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9987 37.9173C10.1036 37.9173 2.08203 29.8958 2.08203 20.0006C2.08203 10.1055 10.1036 2.08398 19.9987 2.08398C29.8939 2.08398 37.9154 10.1055 37.9154 20.0006C37.9154 29.8958 29.8939 37.9173 19.9987 37.9173ZM27.4654 15.6299C28.2729 15.1883 28.5695 14.1755 28.1279 13.3679C27.6862 12.5603 26.6735 12.2637 25.866 12.7053C22.8182 14.3721 20.298 17.5888 18.6035 20.1833C17.9774 21.1423 17.4424 22.0501 17.0144 22.8191C16.6151 22.4318 16.2197 22.0956 15.866 21.816C15.4032 21.4501 14.9867 21.1615 14.6831 20.9626L14.158 20.6365C13.3584 20.1805 12.3406 20.459 11.8846 21.2586C11.4286 22.058 11.7069 23.0755 12.5061 23.5318L12.8565 23.751C13.0946 23.9068 13.4281 24.1378 13.7986 24.4308C14.5612 25.0336 15.3841 25.824 15.902 26.6898C16.2198 27.2211 16.806 27.5325 17.4242 27.4985C18.0422 27.4643 18.5905 27.09 18.848 26.5271L19.0119 26.1848C19.1247 25.9541 19.2937 25.6168 19.5137 25.2013C19.9545 24.3685 20.5955 23.2293 21.3944 22.006C23.0334 19.4965 25.1797 16.8798 27.4654 15.6299Z"
        fill="#66BB6A"
      />
    </svg>
  </div>
)

const ThankTeacherSuccessModal = ({ open, onOpenChange, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[480px] p-6 rounded-[24px] bg-white border border-border/60 shadow-2xl space-y-5 text-center font-urbanist">
        {/* Top Icon Container */}
        <div className="flex justify-center">
          <GreenSuccessCheckIcon />
        </div>

        {/* Modal Title & Subtitle */}
        <div className="space-y-3">
          <h2 className="text-[24px] font-semibold text-[#080808] leading-tight">
            Thank you for your feedback
          </h2>

          <div className="space-y-2 text-[18px] font-normal text-textPrimary leading-relaxed">
            <p>Your anonymous feedback has been sent to your teacher.</p>
            <p>We appreciate you taking the time to help improve teaching and learning.</p>
          </div>
        </div>

        {/* Done Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full h-12 bg-[#038AF9] hover:bg-[#038AF9]/90 text-white font-semibold text-[16px] rounded-xl shadow-sm transition-all cursor-pointer active:scale-[0.99]"
          >
            Done
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ThankTeacherSuccessModal
