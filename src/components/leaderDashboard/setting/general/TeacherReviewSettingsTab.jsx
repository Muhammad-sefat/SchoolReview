import React, { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const TeacherReviewSettingsTab = () => {
  const [selectedOption, setSelectedOption] = useState("")
  const [allowedDomains, setAllowedDomains] = useState("")

  const handleCardClick = (val) => {
    if (selectedOption === val) {
      setSelectedOption("")
      console.log("Teacher Review Settings Option Deselected")
    } else {
      setSelectedOption(val)
      console.log("Teacher Review Settings Selected Option:", val, "Allowed Domains:", allowedDomains)
    }
  }

  const handleDomainChange = (e) => {
    setAllowedDomains(e.target.value)
    console.log("Allowed Domains:", e.target.value)
  }

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6 font-urbanist">
      <h3 className="text-[20px] font-semibold text-[#080808]">Who Can Submit Teacher Reviews</h3>

      <RadioGroup value={selectedOption} className="space-y-4">
        {/* Option 1: School Email Verification */}
        <div
          onClick={() => handleCardClick("email_verification")}
          className={`block p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
            selectedOption === "email_verification"
              ? "border-2 border-gray-400 bg-white"
              : "border border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex items-start gap-3">
            <RadioGroupItem value="email_verification" id="opt-1" className="mt-1 shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[18px] font-semibold text-[#080808]">School Email Verification</span>
                <span className="text-[14px] font-medium text-[#038AF9]">(Best for Most Schools)</span>
              </div>
              <p className="text-[16px] font-normal text-textPrimary leading-relaxed">
                Only users with a verified school email domain can submit reviews. Quick setup with moderate control. Does not verify teacher assignment.
              </p>

              {/* Nested Domain Input */}
              {selectedOption === "email_verification" && (
                <div className="pt-2" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="text"
                    value={allowedDomains}
                    onChange={handleDomainChange}
                    placeholder="Enter one or more allowed school email domains (e.g. @student.schoolname.ch, @schoolname.ch)."
                    className="w-full max-w-xl h-11 px-4 rounded-xl border border-blue-300 focus:border-[#038AF9] outline-none text-[15px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Option 2: Anyone */}
        <div
          onClick={() => handleCardClick("anyone")}
          className={`block p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
            selectedOption === "anyone"
              ? "border-2 border-gray-400 bg-white"
              : "border border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex items-start gap-3">
            <RadioGroupItem value="anyone" id="opt-2" className="mt-1 shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[18px] font-semibold text-[#080808]">Anyone</span>
                <span className="text-[14px] font-normal text-gray-500">(Public Access)</span>
              </div>
              <p className="text-[16px] font-normal text-textPrimary leading-relaxed">
                Anyone can submit reviews. AI moderation helps reduce harmful or abusive content.
              </p>
            </div>
          </div>
        </div>

        {/* Option 3: Assigned Students Only */}
        <div
          onClick={() => handleCardClick("assigned_only")}
          className={`block p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
            selectedOption === "assigned_only"
              ? "border-2 border-gray-400 bg-white"
              : "border border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex items-start gap-3">
            <RadioGroupItem value="assigned_only" id="opt-3" className="mt-1 shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[18px] font-semibold text-[#080808]">Assigned Students Only</span>
                <span className="text-[14px] font-normal text-gray-500">(Maximum Control)</span>
              </div>
              <p className="text-[16px] font-normal text-textPrimary leading-relaxed">
                Only students assigned to a teacher can submit reviews. Requires teacher and class assignments to be configured in User Administration.
              </p>
            </div>
          </div>
        </div>
      </RadioGroup>
    </div>
  )
}

export default TeacherReviewSettingsTab
