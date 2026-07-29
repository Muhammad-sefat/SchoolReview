import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { X } from "lucide-react"

const REPORT_REASONS = [
  "False or misleading information",
  "Offensive, abusive or hateful language",
  "Personal or private information",
  "Spam or advertising",
  "Not about this school",
  "Duplicate review",
  "Other",
]

const ReportReviewModal = ({ isOpen, onClose }) => {
  const [reason, setReason] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onClose) onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose && onClose()}>
      <DialogContent className="max-w-[560px] w-[95%] sm:w-full rounded-3xl bg-white p-6 sm:p-8 border border-gray-100 shadow-2xl space-y-6 font-urbanist max-h-[92vh] overflow-y-auto">
        {/* Modal Header */}
        <DialogHeader className="space-y-0 text-left">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-[24px] font-bold text-[#080808] font-urbanist leading-tight">
              Report this review
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* Faint Dotted Divider Line */}
        <div className="border-b border-dashed border-gray-200/80 my-2" />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Field 1: Why are you reporting this review? */}
          <div className="space-y-3">
            <label className="text-[18px] font-medium text-[#080808] block">
              Why are you reporting this review?
            </label>
            <Select value={reason} onValueChange={setReason}>
              <SelectTrigger className="w-full h-12 rounded-xl border-gray-200 text-[16px] font-normal text-textPrimary bg-white focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9]">
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-gray-200 shadow-lg">
                {REPORT_REASONS.map((r, idx) => (
                  <SelectItem
                    key={idx}
                    value={r}
                    className="text-[16px] font-normal py-2.5 focus:bg-gray-50"
                  >
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Field 2: Additional information */}
          <div className="space-y-3">
            <label className="text-[18px] font-medium text-[#080808] block">
              Additional information
            </label>
            <textarea
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Help us understand why this review should be investigated. Be as specific as possible to help us review this report efficiently."
              rows={4}
              className="w-full border border-gray-200 rounded-xl p-4 text-[16px] font-normal text-textPrimary placeholder:text-gray-400 outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-3 rounded-2xl bg-[#FAFAFA] hover:bg-gray-200 text-[#1F1F21] text-[16px] font-semibold transition-colors cursor-pointer text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 py-3 rounded-2xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-semibold transition-colors cursor-pointer text-center shadow-xs"
            >
              Submit
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ReportReviewModal
