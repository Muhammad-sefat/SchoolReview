import React, { useState } from "react"
import TeacherSchoolSelectDropdown from "@/components/auth/teacher/TeacherSchoolSelectDropdown"
import TeacherSelectDropdown from "@/components/auth/teacher/TeacherSelectDropdown"
import { Title24 } from "@/components/typho/Title"
import { Info } from "lucide-react"

const MOCK_TEACHERS = [
  { id: "t1", name: "Frances Swann", subject: "English, German", school: "Kantonsschule Zug", reviewed: false },
  { id: "t2", name: "Rhonda Rhodes", subject: "English, Physics", school: "Geneva International Academy", reviewed: false },
  { id: "t3", name: "Jerry Helfer", subject: "English, French", school: "Kantonsschule Zug", reviewed: false },
  { id: "t4", name: "Dennis Callis", subject: "English, Chemistry", school: "Kantonsschule Zug", reviewed: true },
]

const StepOneForm = ({ formData, updateFormData }) => {
  const [isCodeSent, setIsCodeSent] = useState(!!formData.verificationCode)
  const [codeDigits, setCodeDigits] = useState(
    formData.verificationCode
      ? formData.verificationCode.split("")
      : ["", "", "", ""]
  )

  // Basic email validation regex
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((formData.email || "").trim())

  const handleDigitChange = (index, value) => {
    if (!/^\d*$/.test(value)) return
    const newDigits = [...codeDigits]
    newDigits[index] = value.slice(-1)
    setCodeDigits(newDigits)
    updateFormData({ verificationCode: newDigits.join("") })
  }

  const handleSendCode = () => {
    if (!isValidEmail) return
    setIsCodeSent(true)
    console.log("[StepOneForm] Verification code sent to email:", formData.email)
  }

  return (
    <div className="space-y-6 font-urbanist">
      {/* School Field */}
      <div className="space-y-2">
        <Title24 className="font-semibold text-foreground">School</Title24>
        <TeacherSchoolSelectDropdown
          value={formData.school}
          onChange={(schoolName) => updateFormData({ school: schoolName })}
        />
      </div>

      {/* Email Field with Send Code Button & Validation */}
      <div className="space-y-3">
        <Title24 className="font-semibold text-foreground">Email</Title24>

        {/* Info Banner */}
        <div className="bg-[#E8F4FE] border border-[#BEE0FF] text-[#1E40AF] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2">
          <Info className="w-4 h-4 shrink-0 text-[#2563EB]" />
          <span>Used only to confirm your teacher. Your name and email are never shared.</span>
        </div>

        {/* Email Input Box with Send Code Button Inside (Image 2 design) */}
        <div className="relative flex my-4 py-2 items-center w-full bg-white border border-[#EAEAEA] rounded-xl p-1.5 focus-within:border-[#038AF9] focus-within:ring-1 focus-within:ring-[#038AF9] transition-all shadow-2xs">
          {/* Send Code Button */}
          <button
            type="button"
            onClick={handleSendCode}
            disabled={!isValidEmail}
            className={`px-4 h-9 rounded-lg font-medium text-xs sm:text-sm shrink-0 transition-all ${isValidEmail
              ? "bg-[#038AF9] hover:bg-[#0270ce] text-white cursor-pointer active:scale-95 shadow-2xs"
              : "bg-[#038AF9] opacity-60 text-white cursor-not-allowed"
              }`}
          >
            Send Code
          </button>

          {/* Vertical Divider Line */}
          <div className="h-5 w-[1px] bg-gray-200 mx-2.5 shrink-0" />

          {/* Email Input Field */}
          <input
            type="email"
            placeholder="Enter your email..."
            value={formData.email || ""}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className="w-full h-9 px-1 text-sm sm:text-base text-[#1F1F21] placeholder:text-[#5A5A5A] bg-transparent focus:outline-none font-urbanist"
          />
        </div>
      </div>

      {/* Verification Code Field (HIDDEN BY DEFAULT, REVEALED WHEN SEND CODE IS CLICKED) */}
      {isCodeSent && (
        <div className="space-y-2 animate-fadeIn pt-1">
          <Title24 className="font-semibold text-foreground">Verification code</Title24>
          <div className="flex items-center gap-3 flex-wrap">
            {codeDigits.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleDigitChange(idx, e.target.value)}
                className="w-12 h-12 text-center text-lg font-semibold border border-[#EAEAEA] rounded-xl bg-white text-[#1F1F21] focus:outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] transition-all shadow-2xs"
              />
            ))}
            <button
              type="button"
              className="text-sm font-medium text-[#038AF9] hover:underline ml-2 cursor-pointer"
              onClick={handleSendCode}
            >
              Resend code
            </button>
          </div>
        </div>
      )}

      {/* Select a Teacher Field */}
      <div className="space-y-3">
        <Title24 className="font-semibold text-foreground">Select a teacher</Title24>
        <TeacherSelectDropdown
          value={formData.teacherId}
          onChange={(val) => updateFormData({ teacherId: val })}
          teachers={MOCK_TEACHERS}
        />
      </div>
    </div>
  )
}

export default StepOneForm
