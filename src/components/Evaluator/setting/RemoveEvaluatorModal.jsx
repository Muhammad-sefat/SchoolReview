import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const RemoveEvaluatorModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[460px] w-[95vw] p-6 rounded-3xl font-urbanist bg-white border border-gray-100 shadow-2xl space-y-6">
        {/* Header */}
        <DialogHeader className="pb-3 border-b border-dashed border-gray-200">
          <DialogTitle className="text-[24px] font-semibold text-[#080808] text-left">
            Remove Evaluator?
          </DialogTitle>
        </DialogHeader>

        {/* Content Body */}
        <p className="text-secondary text-base font-normal leading-relaxed">
          This will remove the evaluator's access to all assigned schools and reports.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-[#E7E8EA] bg-[#FAFAFA] text-[#1F1F21] text-base font-medium hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              if (onConfirm) onConfirm()
              onClose()
            }}
            className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0270ce] text-white text-base font-medium transition-colors cursor-pointer shadow-xs"
          >
            Remove
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default RemoveEvaluatorModal
