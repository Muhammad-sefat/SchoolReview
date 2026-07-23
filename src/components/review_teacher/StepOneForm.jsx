import React, { useState } from "react"
import TeacherSchoolSelectDropdown from "@/components/auth/teacher/TeacherSchoolSelectDropdown"
import CustomInput from "@/components/common/CustomInput"
import { Title24 } from "@/components/typho/Title"
import { Info, CheckCircle2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

  const selectedTeacher = MOCK_TEACHERS.find((t) => t.id === formData.teacherId)

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
        <Select
          value={formData.teacherId}
          onValueChange={(val) => updateFormData({ teacherId: val })}
        >
          <SelectTrigger className="w-full h-12 px-4 rounded-xl border border-border/80 bg-background text-[16px] text-foreground focus:ring-1 focus:ring-primary">
            <SelectValue placeholder="Select a teacher">
              {selectedTeacher ? (
                <span className="text-foreground text-sm font-medium">
                  {selectedTeacher.name}, {selectedTeacher.subject}
                </span>
              ) : (
                <span className="text-[#5A5A5A] text-sm">Select a teacher</span>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="w-full bg-white rounded-2xl border border-primary p-2 shadow-xl">
            {MOCK_TEACHERS.map((teacher) => (
              <SelectItem
                key={teacher.id}
                value={teacher.id}
                className="py-3 px-4 rounded-xl hover:bg-[#F8FAFC] focus:bg-[#F8FAFC] cursor-pointer [&>span:first-child]:hidden [&>span:last-child]:w-full my-0.5"
              >
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="flex flex-col text-left space-y-0.5">
                    <span className="text-sm font-semibold text-foreground leading-tight">
                      {teacher.name}
                    </span>
                    <span className="text-xs text-muted-foreground font-normal">
                      {teacher.subject}
                    </span>
                  </div>
                  {teacher.reviewed && (
                    <div className="flex items-center gap-1.5 text-[#22C55E] text-xs font-normal shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] stroke-[1.75]" />
                      <span>Reviewed</span>
                    </div>
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default StepOneForm
