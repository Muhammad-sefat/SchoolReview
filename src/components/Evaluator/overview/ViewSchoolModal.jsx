import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Star } from "lucide-react"
import SchoolPerformPriorityPerform from "@/components/leaderDashboard/overview/SchoolPerformPriorityPerform"
import KeyArea from "@/components/leaderDashboard/overview/KeyArea"

const ViewSchoolModal = ({ isOpen, onClose, school }) => {
  const schoolName = school?.name || "Kantonsschule Zug (KSZ)"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] lg:max-w-[1600px] max-h-[90vh] flex flex-col p-6 sm:p-8 rounded-3xl font-urbanist bg-white border border-gray-100 shadow-xl overflow-hidden">
        {/* Header Area */}
        <DialogHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 shrink-0">
          <div className="flex items-center justify-between w-full">
            <DialogTitle className="text-[24px] sm:text-[28px] font-semibold text-[#080808]">
              {schoolName}
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* Sub-Header Bar with School Performance Label & Overall Score Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-5 py-2.5 rounded-full text-base font-normal bg-[#038AF9] text-white shadow-xs">
              School Performance
            </span>
          </div>

          {/* Right Summary Pill */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[#FAFAFA] border border-gray-200/80 rounded-full text-sm sm:text-base text-textPrimary shrink-0">
            <span className="flex items-center gap-1 font-medium text-[#080808]">
              Overall School Score <span className="font-semibold text-[#038AF9] ml-1">3.5</span>
              <Star className="w-4 h-4 fill-[#038AF9] text-[#038AF9] inline" />
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1 font-normal text-[#080808]">
              Would Recommend <span className="font-semibold text-[#038AF9] flex items-center">↗ 80%</span>
            </span>
          </div>
        </div>

        {/* Inner Scrollable Body (School Performance view) */}
        <div className="flex-1 overflow-y-auto pr-1 pt-2 space-y-6">
          {/* Scatter Plot & Priority Areas */}
          <SchoolPerformPriorityPerform schoolData={school} />

          {/* Key Improvement Areas & Key Metrics */}
          <KeyArea schoolData={school} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ViewSchoolModal
