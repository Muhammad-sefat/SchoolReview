import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"

const DeleteReviewsModal = ({ isOpen, onClose, onConfirmDelete }) => {
  const [confirmed, setConfirmed] = useState(false)

  const handleClose = () => {
    setConfirmed(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[480px] w-[95vw] p-6  rounded-3xl font-urbanist bg-white border border-gray-100 shadow-2xl space-y-6">
        {/* Header */}
        <DialogHeader className="pb-3 border-b border-dashed border-gray-200">
          <DialogTitle className="text-[24px] font-semibold text-[#080808] text-left">
            Delete Reviews?
          </DialogTitle>
        </DialogHeader>

        {/* Content Body */}
        <p className="text-textBlack text-base font-normal leading-relaxed">
          Your submitted reviews and feedback will be permanently removed from your account.
        </p>

        <label className="flex items-center gap-3 cursor-pointer text-base text-[#080808] pt-1">
          <Checkbox
            checked={confirmed}
            onCheckedChange={(checked) => setConfirmed(!!checked)}
            className="!rounded-[4px] border-gray-400 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9]"
          />
          <span>I understand this action cannot be undone</span>
        </label>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-3">
          <button
            type="button"
            onClick={handleClose}
            className="px-6 py-2.5 rounded-xl border border-[#E7E8EA] bg-[#FAFAFA] text-[#1F1F21] text-base font-medium hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!confirmed}
            onClick={() => {
              if (onConfirmDelete) onConfirmDelete()
              handleClose()
            }}
            className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0270ce] disabled:opacity-50 text-white text-base font-medium transition-colors cursor-pointer shadow-xs"
          >
            Delete Reviews
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteReviewsModal
