import React, { useState } from "react"
import { Title24 } from "@/components/typho/Title"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const DeclineObserverModal = ({ isOpen, onClose, observer, onDeclineConfirm }) => {
  const [reason, setReason] = useState("")

  if (!observer) return null

  const handleDecline = () => {
    if (onDeclineConfirm) onDeclineConfirm(observer.id, reason)
    setReason("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-[95vw] rounded-3xl p-6 sm:p-8 space-y-6 bg-white border border-gray-200 shadow-2xl font-urbanist">
        <DialogHeader className="p-0 space-y-1 text-left pb-3 border-b border-gray-100">
          <DialogTitle asChild>
            <Title24 className="text-[#080808] font-semibold">Decline Observer Request?</Title24>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <label className="block text-[18px] font-medium text-[#080808]">Reason (optional)</label>
          <textarea
            rows={4}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Add a reason for declining (optional). This may be included in the notification sent to the applicant."
            className="w-full rounded-2xl border border-gray-200 p-4 text-[16px] font-normal text-[#080808] placeholder:text-[#5A5A5A] outline-none focus:border-[#038AF9] bg-white resize-none"
          />
        </div>

        {/* Modal Footer matching Screenshot 3 */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-gray-200 text-[16px] font-medium text-[#080808] hover:bg-gray-50 cursor-pointer transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDecline}
            className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium cursor-pointer shadow-xs transition-colors"
          >
            Decline
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DeclineObserverModal
