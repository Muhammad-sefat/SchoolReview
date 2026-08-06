import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const AlarmClockIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20.5 12.5C20.5 17.1944 16.6944 21 12 21C7.30558 21 3.5 17.1944 3.5 12.5C3.5 7.80558 7.30558 4 12 4C16.6944 4 20.5 7.80558 20.5 12.5Z" stroke="#1F1F21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.88 18.7031L3.5 21.0031" stroke="#1F1F21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.1406 18.668L20.5006 20.998" stroke="#1F1F21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5 3L2 6" stroke="#1F1F21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M22 6L19 3" stroke="#1F1F21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 8V12.5L14 14.5" stroke="#1F1F21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

const StartSelfReviewModal = ({ isOpen, onClose, onStartNow, onRemindMeLater }) => {
  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[421px] w-[92vw] rounded-[32px] p-6 space-y-6 bg-white border border-gray-100 shadow-2xl font-urbanist text-center">
        <DialogHeader className="p-0 space-y-0 text-center border-b border-dashed border-gray-200 pb-4">
          <DialogTitle asChild>
            <h2 className="text-[24px]  font-semibold text-[#080808] text-start w-full">
              Start Your Self-Review?
            </h2>
          </DialogTitle>
        </DialogHeader>

        {/* Buttons Row */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={onStartNow}
            className="bg-[#038AF9] hover:bg-[#0270ce] text-white text-base font-medium px-6 py-3 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            Start Now
          </button>

          <button
            type="button"
            onClick={onRemindMeLater}
            style={{
              borderRadius: "12px",
              border: "1px solid #EAEAEA",
              background: "#F7F7F7",
            }}
            className="text-[#1F1F21] text-base font-medium px-5 py-3 flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <AlarmClockIconSVG />
            <span>Remind Me Later</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default StartSelfReviewModal
