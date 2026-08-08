import React, { useState } from "react"
import CustomInput from "@/components/common/CustomInput"

const InfoWarningBlueIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 17.5228 6.47715 22 12 22Z" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V12.5" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15.9883V15.9983" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CheckReportStatusView = ({ onBackToForm, onViewReport }) => {
  const [accessCode, setAccessCode] = useState("")
  const [errorBanner, setErrorBanner] = useState(false)

  const handleCheck = () => {
    if (!accessCode.trim()) {
      setErrorBanner(true)
    } else {
      // If code is entered, view report details
      if (onViewReport) onViewReport(accessCode)
    }
  }

  return (
    <div className="space-y-6 font-urbanist max-w-[640px] mx-auto py-4">
      {/* Title */}
      <h2 className="text-[24px] font-semibold text-[#080808] text-center sm:text-left">
        Check your report
      </h2>

      {/* Access Code Input */}
      <div className="space-y-2">
        <h3 className="text-[18px] font-semibold text-[#080808]">Access code</h3>
        <CustomInput
          type="text"
          placeholder="Enter the access code you received."
          value={accessCode}
          onChange={(e) => {
            setAccessCode(e.target.value)
            setErrorBanner(false)
          }}
        />
      </div>

      {/* Error / Status Info Banner (Image 5) */}
      {errorBanner && (
        <div className="bg-[#F0F7FF] border border-[#D0E6FF] p-4 rounded-xl space-y-1">
          <div className="flex items-center gap-2">
            <InfoWarningBlueIcon />
            <h4 className="text-[16px] font-medium text-[#4A90E2]">
              Code not found
            </h4>
          </div>
          <p className="text-[14px] md:text-[16px] font-normal text-textPrimary pl-8">
            Check the code and try again, or submit a new report.
          </p>
        </div>
      )}

      {/* Action Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={handleCheck}
          className="w-full h-11 bg-[#038AF9] hover:bg-[#038AF9]/90 text-white font-semibold text-[16px] rounded-xl shadow-sm transition-all cursor-pointer active:scale-[0.99]"
        >
          Check Report
        </button>
      </div>

      {/* Back to form link */}
      <div className="text-center pt-2">
        <button
          type="button"
          onClick={onBackToForm}
          className="text-[14px] font-medium text-primary hover:underline cursor-pointer"
        >
          Submit a new report instead
        </button>
      </div>
    </div>
  )
}

export default CheckReportStatusView
