import React from "react"

const ExternalSubscriptionTab = ({ data }) => {
  const planTitle = data?.planTitle || "Pro Plan"
  const trialText = data?.trialText || "Free trial ends in 12 days"
  const nextPayment = data?.nextPayment || "Next payment: 12 Dec 2025 (CHF 19/month)"
  const cancelDescription = data?.cancelDescription || "You can cancel anytime - your access will continue until the end of the billing period."

  return (
    <div className="w-full bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 font-urbanist">
      {/* Top Header & Trial Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between ">
        <h2 className="text-[20px] font-semibold text-[#080808]">
          {planTitle}
        </h2>
        <span className="text-base font-normal text-textPrimary">
          {trialText}
        </span>
      </div>

      {/* Subtext & Description */}
      <div className="space-y-3">
        <p className="text-base font-normal text-textBlack">
          {nextPayment}
        </p>
        <p className="text-[16px] font-normal text-secondary">
          {cancelDescription}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="button"
          className="px-6 py-2.5 bg-[#038AF9] hover:bg-[#0270ce] text-white font-semibold text-lg rounded-[12px] cursor-pointer transition-colors shadow-xs"
        >
          Manage Plan
        </button>

        <button
          type="button"
          style={{
            borderRadius: "12px",
            border: "1px solid #E7E8EA",
            background: "#FAFAFA",
          }}
          className="px-6 py-2.5 text-[#1F1F21] font-medium text-lg cursor-pointer hover:bg-gray-100 transition-colors"
        >
          Cancel Plan
        </button>
      </div>
    </div>
  )
}

export default ExternalSubscriptionTab
