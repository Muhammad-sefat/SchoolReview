import React, { useState, useEffect } from "react"
import { Shield, AlertTriangle, X } from "lucide-react"

// Exact User SVG for Suggestion modal header
const UserSuggestionCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className="shrink-0">
    <path d="M27.5 15C27.5 8.09644 21.9035 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9035 8.09644 27.5 15 27.5C21.9035 27.5 27.5 21.9035 27.5 15Z" stroke="#080808" strokeWidth="1.875" />
    <path d="M10 16.3392C10 16.3392 11.875 17.1429 13 18.75C13 18.75 15.625 13.3929 20 11.25" stroke="#080808" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const InfoNoticeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path
      d="M9.9974 18.3327C14.5998 18.3327 18.3307 14.6017 18.3307 9.99935C18.3307 5.39698 14.5998 1.66602 9.9974 1.66602C5.39502 1.66602 1.66406 5.39698 1.66406 9.99935C1.66406 14.6017 5.39502 18.3327 9.9974 18.3327Z"
      stroke="#080808"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10 13.334V9.58398" stroke="#080808" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 6.67435V6.66602" stroke="#080808" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const RedCloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
    <path
      d="M12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25ZM9.85125 8.57581C9.49502 8.28527 8.96987 8.30578 8.63781 8.63781C8.30587 8.96987 8.28529 9.49505 8.57581 9.85125L8.63781 9.92033L10.7174 12L8.6387 14.0797C8.28463 14.4339 8.28452 15.0081 8.6387 15.3622C8.99289 15.7161 9.56711 15.7162 9.92122 15.3622L12 13.2826L14.0788 15.3622L14.1479 15.4242C14.504 15.7147 15.0292 15.694 15.3613 15.3622C15.6933 15.0303 15.7144 14.505 15.4242 14.1487L15.3613 14.0797L13.2816 12L15.3622 9.92033L15.4242 9.85125C15.7147 9.49504 15.6941 8.96987 15.3622 8.63781C15.0301 8.30578 14.505 8.28527 14.1487 8.57581L14.0797 8.63781L12 10.7174L9.92033 8.63781L9.85125 8.57581Z"
      fill="#E53935"
    />
  </svg>
)

const GreenCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 21 21" fill="none" className="shrink-0 mt-0.5">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0737 19.286C4.98475 19.286 0.859375 15.1607 0.859375 10.0717C0.859375 4.9828 4.98475 0.857422 10.0737 0.857422C15.1626 0.857422 19.2879 4.9828 19.2879 10.0717C19.2879 15.1607 15.1626 19.286 10.0737 19.286ZM13.8795 8.27024C14.3046 8.06202 14.4804 7.54857 14.2722 7.12344C14.0639 6.69831 13.5505 6.52248 13.1253 6.7307C11.4489 7.5518 10.151 8.96076 9.29126 10.1093C8.99332 10.5072 8.74183 10.8823 8.5396 11.204C8.30034 10.9967 8.06437 10.8251 7.85637 10.6879C7.61848 10.5311 7.40739 10.4129 7.25334 10.333C7.1761 10.2929 7.11256 10.2619 7.0664 10.2402C7.0433 10.2294 7.0245 10.2209 7.01045 10.2145L6.99297 10.2068L6.98699 10.2042L6.98471 10.2032L6.98291 10.2024C6.9827 10.2023 6.98291 10.2024 6.64526 10.9903L6.98291 10.2024C6.5478 10.016 6.0439 10.2175 5.85743 10.6526C5.67131 11.0869 5.87202 11.5898 6.3054 11.7772L6.30629 11.7775L6.30934 11.7789C6.31449 11.7812 6.32406 11.7856 6.33763 11.7919C6.3648 11.8047 6.40774 11.8255 6.46308 11.8542C6.57421 11.912 6.73276 12.0005 6.91272 12.1192C7.28027 12.3615 7.699 12.7046 8.00021 13.1349C8.17414 13.3834 8.46643 13.5214 8.76883 13.4979C9.07106 13.4744 9.33857 13.2927 9.47212 13.0205L9.47435 13.0161L9.48678 12.9914C9.49852 12.9684 9.51695 12.9328 9.54198 12.8859C9.59212 12.7919 9.6684 12.6529 9.76972 12.4803C9.97278 12.1343 12.5559 8.91851 13.8795 8.27024Z"
      fill="#66BB6A"
    />
  </svg>
)

const SuggestionModal = ({
  isOpen = false,
  onClose,
  originalText = "This class moves way too fast and it's really annoying. I don't understand half of what's being taught and it feels impossible to keep up.",
  suggestedText = "I find it difficult when teachers are not available for additional support. More one-on-one time would be very helpful.",
  onUseSuggestion,
}) => {
  const [activeTab, setActiveTab] = useState("use") // "use" | "edit" | "why"
  const [editedText, setEditedText] = useState(suggestedText)

  useEffect(() => {
    setEditedText(suggestedText)
  }, [suggestedText])

  if (!isOpen) return null

  const handleContinueClick = () => {
    if (activeTab === "use") {
      if (onUseSuggestion) onUseSuggestion(suggestedText)
    } else if (activeTab === "edit") {
      if (onUseSuggestion) onUseSuggestion(editedText)
    } else if (activeTab === "why") {
      if (onUseSuggestion) onUseSuggestion(suggestedText)
    }
    if (onClose) onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 font-urbanist animate-fadeIn backdrop-blur-xs">
      {/* Modal Dialog Box */}
      <div className="w-full max-w-[540px] bg-white rounded-[24px] shadow-2xl p-6 sm:p-7 space-y-4 relative max-h-[90vh] overflow-y-auto animate-scaleUp border border-[#EAEAEA]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {activeTab === "use" ? (
              <UserSuggestionCheckIcon />
            ) : (
              <Shield className="w-7 h-7 text-[#080808] stroke-[1.8]" />
            )}
            <h3 className="text-xl sm:text-2xl font-bold text-[#080808]">
              Suggestion
            </h3>
          </div>

          {activeTab === "why" && (
            <a
              href="#guidelines"
              onClick={(e) => {
                e.preventDefault()
                alert("Guidelines: Please focus on constructive, specific feedback.")
              }}
              className="text-[#038AF9] hover:underline text-xs sm:text-sm font-medium pr-7"
            >
              View guidelines
            </a>
          )}
        </div>

        {/* Info Banner */}
        <div className="bg-[#E8F4FE] border border-[#BEE0FF] px-4 py-3 rounded-xl flex items-center gap-3">
          <InfoNoticeIcon />
          <span className="text-xs sm:text-sm md:text-base font-normal text-[#1F1F21]">
            Some of your feedback may not meet our guidelines.
          </span>
        </div>

        {/* 3 Action Tabs */}
        <div className="flex items-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => setActiveTab("use")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === "use"
                ? "bg-[#038AF9] text-white font-medium shadow-xs"
                : "border border-[#EAEAEA] text-[#1F1F21] font-normal bg-white hover:border-[#080808]"
            }`}
          >
            Use suggestion
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("edit")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === "edit"
                ? "bg-[#038AF9] text-white font-medium shadow-xs"
                : "border border-[#EAEAEA] text-[#1F1F21] font-normal bg-white hover:border-[#080808]"
            }`}
          >
            Edit instead
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("why")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === "why"
                ? "bg-[#038AF9] text-white font-medium shadow-xs"
                : "border border-[#EAEAEA] text-[#1F1F21] font-normal bg-white hover:border-[#080808]"
            }`}
          >
            Why this?
          </button>
        </div>

        {/* Dynamic Tab Body Content */}
        {activeTab === "use" && (
          <div className="space-y-3 pt-1">
            {/* Card 1: Red Close Icon + Original Text */}
            <div className="p-4 rounded-xl border border-[#EAEAEA] bg-white flex items-start gap-3">
              <RedCloseIcon />
              <span className="text-xs sm:text-sm md:text-base font-normal text-[#1F1F21] leading-relaxed">
                {originalText}
              </span>
            </div>

            {/* Card 2: Green Check Icon + Suggested Text */}
            <div className="p-4 rounded-xl border border-[#EAEAEA] bg-white flex items-start gap-3">
              <GreenCheckIcon />
              <span className="text-xs sm:text-sm md:text-base font-normal text-[#1F1F21] leading-relaxed">
                {suggestedText}
              </span>
            </div>
          </div>
        )}

        {activeTab === "edit" && (
          <div className="pt-1 space-y-2">
            <label className="text-xs sm:text-sm font-medium text-[#5A5A5A]">
              Edit your feedback:
            </label>
            <textarea
              rows={4}
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="w-full p-4 text-xs sm:text-sm md:text-base border border-[#EAEAEA] rounded-xl bg-white text-[#1F1F21] placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] transition-all font-urbanist shadow-2xs resize-none"
              placeholder="Edit your feedback..."
            />
          </div>
        )}

        {activeTab === "why" && (
          <div className="pt-1 space-y-3">
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#5A5A5A] mb-1.5">
                Your comment
              </p>
              <div className="border-l-2 border-gray-300 pl-3.5 py-1 text-xs sm:text-sm md:text-base font-normal text-[#1F1F21] leading-relaxed">
                {suggestedText}
              </div>
            </div>

            {/* Yellow Warning Card */}
            <div className="border border-[#FB8C00] rounded-xl p-4 bg-[#FFF9F0] flex gap-3 items-start">
              <AlertTriangle className="w-5 h-5 text-[#FB8C00] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-normal text-[#1F1F21] leading-relaxed">
                Personal attacks on teachers can feel unfair and may reduce the impact of your feedback. Focusing on specific experiences makes your review more credible and actionable.
              </span>
            </div>
          </div>
        )}

        {/* Footer Action Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleContinueClick}
            className="w-full h-12 bg-[#038AF9] hover:bg-[#0270ce] text-white font-semibold text-sm sm:text-base rounded-xl shadow-xs transition-all cursor-pointer active:scale-[0.99]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuggestionModal
