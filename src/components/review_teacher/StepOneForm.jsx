import React, { useState } from "react"
import TeacherSchoolSelectDropdown from "@/components/auth/teacher/TeacherSchoolSelectDropdown"
import TeacherSelectDropdown from "@/components/auth/teacher/TeacherSelectDropdown"
import CustomInput from "@/components/common/CustomInput"
import { Title24 } from "@/components/typho/Title"
import { Info } from "lucide-react"

const MOCK_TEACHERS = [
  { id: "t1", name: "Frances Swann", subject: "English, German", school: "Kantonsschule Zug", reviewed: false },
  { id: "t2", name: "Rhonda Rhodes", subject: "English, Physics", school: "Geneva International Academy", reviewed: false },
  { id: "t3", name: "Jerry Helfer", subject: "English, French", school: "Kantonsschule Zug", reviewed: false },
  { id: "t4", name: "Dennis Callis", subject: "English, Chemistry", school: "Kantonsschule Zug", reviewed: true },
]

const StepOneForm = ({ formData, updateFormData }) => {
  const [codeDigits, setCodeDigits] = useState(
    formData.verificationCode
      ? formData.verificationCode.split("")
      : ["", "", "", ""]
  )

  const handleDigitChange = (index, value) => {
    if (!/^\d*$/.test(value)) return
    const newDigits = [...codeDigits]
    newDigits[index] = value.slice(-1)
    setCodeDigits(newDigits)
    updateFormData({ verificationCode: newDigits.join("") })
  }

  return (
    <div className="space-y-6">
      {/* School Field */}
      <div className="space-y-2">
        <Title24 className="font-semibold text-foreground">School</Title24>
        <TeacherSchoolSelectDropdown
          value={formData.school}
          onChange={(schoolName) => updateFormData({ school: schoolName })}
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Title24 className="font-semibold text-foreground">Email</Title24>
        {/* Info Banner */}
        <div className="bg-[#EBF5FF] border border-[#BEE0FF] text-[#1E40AF] px-3.5 py-2.5 rounded-xl text-xs flex items-center gap-2">
          <Info className="w-4 h-4 shrink-0 text-[#2563EB]" />
          <span>Used only to confirm your teacher. Your name and email are never shared.</span>
        </div>
        <CustomInput
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
        />
      </div>

      {/* Verification Code Field */}
      <div className="space-y-2">
        <Title24 className="font-semibold text-foreground">Verification code</Title24>
        <div className="flex items-center gap-3">
          {codeDigits.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleDigitChange(idx, e.target.value)}
              className="w-12 h-12 text-center text-lg font-semibold border border-border/80 rounded-xl bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          ))}
          <button
            type="button"
            className="text-sm font-medium text-primary hover:underline ml-2 cursor-pointer"
            onClick={() => console.log("Resend code clicked")}
          >
            Resend code
          </button>
        </div>
      </div>

      {/* Select a Teacher Field */}
      <div className="space-y-2">
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
