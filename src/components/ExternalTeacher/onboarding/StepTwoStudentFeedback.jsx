import React, { useState } from "react"
import StepTwoStudentsModal from "./StepTwoStudentsModal"

const StepTwoStudentFeedback = ({ showTitle = true }) => {
  const [selectedOption, setSelectedOption] = useState("email")
  const [emailDomain, setEmailDomain] = useState("")
  const [isStudentsModalOpen, setIsStudentsModalOpen] = useState(false)

  const handleOptionSelect = (optionKey) => {
    setSelectedOption(optionKey)
    if (optionKey === "assigned") {
      setIsStudentsModalOpen(true)
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6 font-urbanist">
      {/* Title */}
      {showTitle && (
        <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold text-[#080808] leading-tight">
          Which students can give feedback
        </h1>
      )}

      {/* Options List */}
      <div className="space-y-3 sm:space-y-4">

        {/* Option 1: School Email Verification (Recommended) */}
        <div
          onClick={() => handleOptionSelect("email")}
          className={`rounded-2xl p-6 transition-all cursor-pointer bg-white ${
            selectedOption === "email"
              ? "border-[1.5px] border-[#080808] shadow-xs"
              : "border border-[#EAEAEA] hover:border-gray-300"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="feedbackMode"
                checked={selectedOption === "email"}
                onChange={() => handleOptionSelect("email")}
                className="w-5 h-5 mt-1 accent-[#038AF9] cursor-pointer shrink-0"
              />
              <div className="space-y-1">
                <h3
                  className={`text-[18px] leading-[28px] font-urbanist transition-colors ${
                    selectedOption === "email"
                      ? "text-[#038AF9] font-semibold"
                      : "text-[#080808] font-semibold"
                  }`}
                >
                  School Email Verification (Recommended)
                </h3>
                <p className="text-base text-textPrimary font-normal">
                  Verified school email required.
                </p>
              </div>
            </div>

            {/* Individual Pill Badges (Dot removed, 48px rounded border on each word) */}
            <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
              <span
                style={{ borderRadius: "48px", border: "1px solid #EAEAEA" }}
                className="text-sm sm:text-base font-normal text-[#080808] px-4 py-2 bg-white"
              >
                Quick setup
              </span>
              <span
                style={{ borderRadius: "48px", border: "1px solid #EAEAEA" }}
                className="text-sm sm:text-base font-normal text-[#080808] px-4 py-2 bg-white"
              >
                Moderate control
              </span>
            </div>
          </div>

          {/* Email input field inside active card */}
          {selectedOption === "email" && (
            <div className="mt-4 pl-8" onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                value={emailDomain}
                onChange={(e) => setEmailDomain(e.target.value)}
                placeholder="e.g. @student.schoolname.ch"
                className="w-full max-w-[738px] border border-[#E0E0E0] rounded-xl px-4 py-2.5 text-base text-[#080808] placeholder:text-gray-400 focus:outline-hidden focus:border-[#038AF9] transition-colors"
              />
            </div>
          )}
        </div>

        {/* Option 2: Anyone (Public) */}
        <div
          onClick={() => handleOptionSelect("public")}
          className={`rounded-2xl p-6 transition-all cursor-pointer bg-white ${
            selectedOption === "public"
              ? "border-[1.5px] border-[#080808] shadow-xs"
              : "border border-[#EAEAEA] hover:border-gray-300"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="feedbackMode"
                checked={selectedOption === "public"}
                onChange={() => handleOptionSelect("public")}
                className="w-5 h-5 mt-1 accent-[#038AF9] cursor-pointer shrink-0"
              />
              <div className="space-y-1">
                <h3
                  className={`text-[18px] leading-[28px] font-urbanist transition-colors ${
                    selectedOption === "public"
                      ? "text-[#038AF9] font-semibold"
                      : "text-[#080808] font-semibold"
                  }`}
                >
                  Anyone (Public)
                </h3>
                <p className="text-base text-textPrimary font-normal">
                  Open to anyone. No verification.
                </p>
              </div>
            </div>

            {/* Individual Pill Badges (Dot removed, 48px rounded border on each word) */}
            <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
              <span
                style={{ borderRadius: "48px", border: "1px solid #EAEAEA" }}
                className="text-sm sm:text-base font-normal text-[#080808] px-4 py-2 bg-white"
              >
                High participation
              </span>
              <span
                style={{ borderRadius: "48px", border: "1px solid #EAEAEA" }}
                className="text-sm sm:text-base font-normal text-[#080808] px-4 py-2 bg-white"
              >
                Less control
              </span>
            </div>
          </div>
        </div>

        {/* Option 3: Assigned Students Only (Full Control) */}
        <div
          onClick={() => handleOptionSelect("assigned")}
          className={`rounded-2xl p-6 transition-all cursor-pointer bg-white ${
            selectedOption === "assigned"
              ? "border-[1.5px] border-[#080808] shadow-xs"
              : "border border-[#EAEAEA] hover:border-gray-300"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="feedbackMode"
                checked={selectedOption === "assigned"}
                onChange={() => handleOptionSelect("assigned")}
                className="w-5 h-5 mt-1 accent-[#038AF9] cursor-pointer shrink-0"
              />
              <div className="space-y-1">
                <h3
                  className={`text-[18px] leading-[28px] font-urbanist transition-colors ${
                    selectedOption === "assigned"
                      ? "text-[#038AF9] font-semibold"
                      : "text-[#080808] font-semibold"
                  }`}
                >
                  Assigned Students Only (Full Control)
                </h3>
                <p className="text-base text-textPrimary font-normal">
                  Only assigned students can submit feedback.
                </p>
              </div>
            </div>

            {/* Individual Pill Badges (Dot removed, 48px rounded border on each word) */}
            <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
              <span
                style={{ borderRadius: "48px", border: "1px solid #EAEAEA" }}
                className="text-sm sm:text-base font-normal text-[#080808] px-4 py-2 bg-white"
              >
                Maximum control
              </span>
              <span
                style={{ borderRadius: "48px", border: "1px solid #EAEAEA" }}
                className="text-sm sm:text-base font-normal text-[#080808] px-4 py-2 bg-white"
              >
                Requires setup
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Modal for Option 3 */}
      <StepTwoStudentsModal
        isOpen={isStudentsModalOpen}
        onClose={() => setIsStudentsModalOpen(false)}
      />
    </div>
  )
}

export default StepTwoStudentFeedback
