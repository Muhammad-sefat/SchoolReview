import React from "react"

const EvaluatorSubscriptionTab = () => {
  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-xs space-y-6 font-urbanist">
      {/* Title */}
      <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#080808]">
        Evaluator Core (Owner)
      </h3>

      {/* Info Grid Columns with Top & Bottom Border matching Image 1 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-dashed border-[#E0E0E0]">
        <div className="space-y-1.5">
          <p className="text-secondary text-sm font-normal">Seats Included</p>
          <p className="text-[18px] font-semibold text-[#080808]">10 Evaluators</p>
        </div>

        <div className="space-y-1.5">
          <p className="text-secondary text-sm font-normal">Seats Used</p>
          <p className="text-[18px] font-semibold text-[#080808]">6 / 10</p>
        </div>

        <div className="space-y-1.5">
          <p className="text-secondary text-sm font-normal">Billing Cycle</p>
          <p className="text-[18px] font-semibold text-[#080808]">Monthly</p>
        </div>

        <div className="space-y-1.5">
          <p className="text-secondary text-sm font-normal">Next Renewal</p>
          <p className="text-[18px] font-semibold text-[#080808]">15 March 2026</p>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <button
          type="button"
          className="px-5 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0270ce] text-white text-base font-medium transition-colors shadow-xs cursor-pointer"
        >
          Request More Seats
        </button>
      </div>
    </div>
  )
}

export default EvaluatorSubscriptionTab
