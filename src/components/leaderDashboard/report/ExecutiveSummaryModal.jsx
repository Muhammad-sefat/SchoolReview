import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const DEFAULT_SUMMARY = `Overall, our school has developed positively this year, with a stable level of quality across teaching, school climate and collaboration. Students generally experience the school as a safe and supportive environment, with strong relationships to teachers. At the same time, there are some differences in instructional clarity and expectations between classes, which we aim to address.

Parents remain largely satisfied, particularly with communication and the wellbeing of their children. There is, however, a need for greater transparency around assessment and learning progress. Teachers show strong commitment and collaboration, but workload remains a challenge in certain periods.

Supporting staff in this area will be a key focus. The school continues to be perceived as safe, with effective structures in place to identify and address concerns early. Overall, teaching quality is solid, with strengths in classroom management and relationships. Key development areas include differentiation and clarity in instruction.`

const ExecutiveSummaryModal = ({ isOpen, onClose }) => {
  const [summaryText, setSummaryText] = useState(DEFAULT_SUMMARY)
  const maxCharacters = 1200

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose && onClose()}>
      <DialogContent className="max-w-[760px] w-[95%] sm:w-full rounded-3xl bg-white p-8 border border-gray-100 shadow-2xl  font-urbanist max-h-[92vh] overflow-y-auto">
        {/* Modal Header */}
        <DialogHeader className="space-y-1.5 text-left">
          <DialogTitle className="text-[24px] font-semibold text-[#080808] font-urbanist leading-tight">
            Executive Summary
          </DialogTitle>
          <DialogDescription className="text-[16px] font-normal text-textPrimary font-urbanist">
            Enter a concise summary that will appear at the beginning of your School Report.
          </DialogDescription>
        </DialogHeader>

        {/* Faint Dotted Divider Line */}
        <div className="border-b border-dashed border-gray-200/80 my-1" />

        {/* Content Box with Textarea */}
        <div className="space-y-2">
          <div className="border border-gray-200/80 rounded-2xl p-4  bg-white focus-within:border-[#038AF9] focus-within:ring-1 focus-within:ring-[#038AF9] transition-all">
            <textarea
              value={summaryText}
              onChange={(e) => setSummaryText(e.target.value)}
              rows={12}
              maxLength={maxCharacters}
              className="w-full bg-transparent border-none outline-none resize-none md:text-lg text-base font-normal text-textPrimary leading-relaxed p-0 placeholder:text-gray-400"
              placeholder="Enter executive summary..."
            />
          </div>

          {/* Character Count */}
          <div className="text-right md:text-lg text-base font-normal text-secondary pt-1">
            {summaryText.length} / {maxCharacters} Character
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#FAFAFA] hover:bg-gray-200 text-textPrimary text-lg font-medium transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-2.5 rounded-xl bg-primary hover:bg-[#0274d4] text-white text-lg font-medium transition-colors cursor-pointer shadow-xs"
          >
            Next
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ExecutiveSummaryModal
