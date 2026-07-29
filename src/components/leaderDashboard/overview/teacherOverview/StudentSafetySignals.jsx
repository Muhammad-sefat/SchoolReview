import React, { useState } from "react"
import { ShieldAlert, Info, Star, ChevronUp, ChevronDown } from "lucide-react"

const SAFETY_SIGNALS_DATA = [
  { id: 1, name: "Albert Flores", score: "2.0" },
  { id: 2, name: "Arlene McCoy", score: "1.5" },
  { id: 3, name: "Darrell Steward", score: "1.5" },
  { id: 4, name: "Bessie Cooper", score: "1.8" },
  { id: 5, name: "Wade Warren", score: "2.1" },
]

const StudentSafetySignals = ({ enabled = false }) => {
  const [isSafetyEnabled, setIsSafetyEnabled] = useState(enabled)
  const [page, setPage] = useState(0)

  const pageSize = 3
  const totalPages = Math.ceil(SAFETY_SIGNALS_DATA.length / pageSize)
  const visibleData = SAFETY_SIGNALS_DATA.slice(
    page * pageSize,
    (page + 1) * pageSize
  )

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-4 md:p-5 shadow-xs flex flex-col justify-between h-full">
      {/* Header with Title and Info Icon */}
      <div>
        <div className="flex items-center justify-between gap-3 pb-3">
          <h3 className="font-urbanist text-lg md:text-[24px] font-semibold text-[#080808]">
            Student Safety Signals
          </h3>
          <button
            type="button"
            className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            title="Safety details info"
          >
            <Info className="w-3.5 h-3.5 stroke-[2]" />
          </button>
        </div>
        <div className="border-b border-dashed border-gray-200/80 mb-4" />
      </div>

      {/* Conditional Content based on Enabled State */}
      {!isSafetyEnabled ? (
        /* Empty State (Not Enabled Yet) */
        <div className="flex-1 flex flex-col items-center justify-center py-4 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 flex items-center justify-center mb-1">
            <ShieldAlert className="w-6 h-6 stroke-[1.5]" />
          </div>
          <p className="text-base font-semibold text-textPrimary">
            No safety data yet
          </p>
          <p className="text-xs sm:text-sm text-gray-500 max-w-[220px]">
            Enable safety questions to start tracking.
          </p>

          <button
            type="button"
            onClick={() => setIsSafetyEnabled(true)}
            className="mt-2 px-5 py-2.5 rounded-full bg-gray-100 hover:bg-[#038AF9] hover:text-white text-textPrimary text-xs font-semibold transition-colors cursor-pointer"
          >
            Enable Safety Questions
          </button>
        </div>
      ) : (
        /* Enabled State Matching Image 3 */
        <div className="flex-1 flex flex-col justify-between space-y-4 py-1">
          {/* List of Student Safety Signals */}
          <div className="space-y-4">
            {visibleData.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4 text-sm sm:text-base font-normal text-textPrimary"
              >
                <span>{item.name}</span>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-semibold text-textPrimary">
                    {item.score}
                  </span>
                  <Star className="w-4 h-4 text-[#E53935] fill-[#E53935]" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Pagination Buttons Matching Image 3 */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage((prev) => Math.max(0, prev - 1))}
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${page === 0
                ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
              title="Previous"
            >
              <ChevronUp className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              type="button"
              disabled={page >= totalPages - 1}
              onClick={() =>
                setPage((prev) => Math.min(totalPages - 1, prev + 1))
              }
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${page >= totalPages - 1
                ? "bg-[#038AF9]/50 text-white cursor-not-allowed"
                : "bg-[#038AF9] hover:bg-[#0274d4] text-white shadow-xs"
                }`}
              title="Next"
            >
              <ChevronDown className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentSafetySignals
