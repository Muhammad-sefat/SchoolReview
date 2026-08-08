import React from "react"
import CustomInput from "@/components/common/CustomInput"
import { Info } from "lucide-react"

const StepEmailVerificationSchoolReview = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6 md:space-y-8 font-urbanist  py-2">
      {/* Title */}
      <h2 className="text-2xl md:text-[28px] font-semibold text-[#080808] text-center">
        Just making sure it's you
      </h2>

      <div className="w-full h-px bg-border/40" />

      {/* Email Section */}
      <div className="space-y-4 md:space-y-[24px]">
        <h3 className="text-xl md:text-2xl font-bold text-[#080808]">Email</h3>

        {/* Info Notice Box */}
        <div className="bg-[#EBF5FF] border border-[#BEE0FF] text-[#1E40AF] px-4 py-3 rounded-xl text-xs md:text-sm flex items-center gap-3">
          <Info className="w-5 h-5 shrink-0 text-[#2563EB]" />
          <span>
            We verify every review to help keep SchoolReview trustworthy. Your email is <strong>never</strong> shared with the school or published.
          </span>
        </div>

        {/* Email Input */}
        <CustomInput
          type="email"
          placeholder="Enter your email"
          value={formData.email || ""}
          onChange={(e) => updateFormData({ email: e.target.value })}
        />
      </div>
    </div>
  )
}

export default StepEmailVerificationSchoolReview
