import React, { useState, useRef } from "react"
import TeacherSchoolSelectDropdown from "@/components/auth/teacher/TeacherSchoolSelectDropdown"
import TeacherSelectDropdown from "@/components/auth/teacher/TeacherSelectDropdown"
import VoiceInputButton from "@/components/common/VoiceInputButton"
import { Info } from "lucide-react"

import thumbsUpImg from "@/assets/images/Thumbs Up.png"
import thumbsDownImg from "@/assets/images/Thumbs Down.png"

const MOCK_TEACHERS = [
  { id: "t1", name: "Frances Swann", subject: "English, German", school: "Kantonsschule Zug", reviewed: false },
  { id: "t2", name: "Rhonda Rhodes", subject: "English, Physics", school: "Geneva International Academy", reviewed: false },
  { id: "t3", name: "Jerry Helfer", subject: "English, French", school: "Kantonsschule Zug", reviewed: false },
  { id: "t4", name: "Dennis Callis", subject: "English, Chemistry", school: "Kantonsschule Zug", reviewed: true },
]

const COMPLIMENT_OPTIONS = [
  { id: "understand", label: "Helped me understand a topic", icon: thumbsUpImg },
  { id: "believed", label: "Believed in me", icon: null, emoji: "🤝" },
  { id: "supported", label: "Supported me when I struggled", icon: null, emoji: "⭐" },
  { id: "fun", label: "Made learning fun", icon: null, emoji: "🎉" },
]

const ThankTeacherForm = ({ formData, updateFormData }) => {
  const [isCodeSent, setIsCodeSent] = useState(!!formData.verificationCode && formData.verificationCode !== "2026")
  const [codeDigits, setCodeDigits] = useState(
    formData.verificationCode ? formData.verificationCode.split("") : ["", "", "", ""]
  )
  const actionContentRef = useRef(null)

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
    console.log("[ThankTeacherForm] Verification code sent to email:", formData.email)
  }

  const handleActionSelect = (actionType) => {
    updateFormData({ actionType })
    // Auto scroll down smoothly to newly revealed content for better UX
    setTimeout(() => {
      if (actionContentRef.current) {
        actionContentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 120)
  }

  const handleComplimentSelect = (complimentId) => {
    updateFormData({ complimentId })
  }

  const handleMessageChange = (e) => {
    updateFormData({ message: e.target.value })
  }

  return (
    <div className="space-y-6 font-urbanist w-full">
      {/* 1. School Field */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold text-[#080808]">School</h3>
        <TeacherSchoolSelectDropdown
          value={formData.school}
          onChange={(schoolName) => updateFormData({ school: schoolName })}
        />
      </div>

      {/* 2. Email Field */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold text-[#080808]">Email</h3>

        {/* Info Banner */}
        <div className="bg-[#E8F4FE] border border-[#BEE0FF] text-textPrimary px-4 py-3 rounded-xl text-xs md:text-sm flex items-center gap-2.5">
          <Info className="w-4 h-4 shrink-0 text-textPrimary" />
          <span>
            Used only to confirm your teacher(s). Your name and email are <strong>never</strong> shared with the teacher.
          </span>
        </div>

        {/* Email Input Box with Send Code Button Inside (Image 2 design) */}
        <div className="relative flex my-4 py-2 items-center w-full bg-white border border-[#EAEAEA] rounded-xl p-1.5 focus-within:border-[#038AF9] focus-within:ring-1 focus-within:ring-[#038AF9] transition-all shadow-2xs">
          <button
            type="button"
            onClick={handleSendCode}
            disabled={!isValidEmail}
            className={`px-4 h-9 rounded-lg font-medium text-xs sm:text-sm shrink-0 transition-all ${isValidEmail
              ? "bg-[#038AF9] hover:bg-[#0270ce] text-white cursor-pointer active:scale-95 shadow-2xs"
              : "bg-[#038AF9] opacity-70 text-white cursor-not-allowed"
              }`}
          >
            {isCodeSent ? "Resend" : "Send Code"}
          </button>

          <div className="h-5 w-[1px] bg-gray-200 mx-2.5 shrink-0" />

          <input
            type="email"
            placeholder="Enter your email..."
            value={formData.email || ""}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className="w-full h-9 px-1 text-sm sm:text-base text-[#1F1F21] placeholder:text-[#5A5A5A] bg-transparent focus:outline-none font-urbanist"
          />
        </div>
      </div>

      {/* 3. Verification Code Field (HIDDEN BY DEFAULT, REVEALED WHEN SEND CODE IS CLICKED) */}
      {isCodeSent && (
        <div className="space-y-2 animate-fadeIn pt-1">
          <h3 className="text-xl md:text-2xl font-bold text-[#080808]">Verification code</h3>
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

      {/* 4. Select a Teacher Field */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold text-[#080808]">Select a teacher</h3>
        <TeacherSelectDropdown
          value={formData.teacherId || ""}
          onChange={(val) => updateFormData({ teacherId: val })}
          teachers={MOCK_TEACHERS}
        />
      </div>

      {/* 5. What would you like to do ? */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xl md:text-2xl font-semibold text-[#080808]">
          What would you like to do ?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {/* Card 1: Give a compliment */}
          <button
            type="button"
            onClick={() => handleActionSelect("compliment")}
            className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${formData.actionType === "compliment"
              ? "border-[#080808] border-2 bg-white shadow-xs"
              : "border-border/80 bg-background hover:bg-muted/30"
              }`}
          >
            <img src={thumbsUpImg} alt="Give a compliment" className="w-7 h-7 object-contain shrink-0" />
            <span className="text-[18px] font-medium text-[#080808]">Give a compliment</span>
          </button>

          {/* Card 2: Send feedback */}
          <button
            type="button"
            onClick={() => handleActionSelect("feedback")}
            className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${formData.actionType === "feedback"
              ? "border-[#080808] border-2 bg-white shadow-xs"
              : "border-border/80 bg-background hover:bg-muted/30"
              }`}
          >
            <img src={thumbsDownImg} alt="Send feedback" className="w-7 h-7 object-contain shrink-0" />
            <span className="text-[18px] font-medium text-[#080808]">Send feedback</span>
          </button>
        </div>
      </div>

      {/* 6A. If "Give a compliment" is selected */}
      {formData.actionType === "compliment" && (
        <div
          ref={actionContentRef}
          className="space-y-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-300 scroll-mt-6"
        >
          <h3 className="text-[20px] font-semibold text-[#080808] mt-3">
            Why do you want to thank your teacher?
          </h3>

          {/* Compliment Pills */}
          <div className="flex flex-wrap items-center gap-4">
            {COMPLIMENT_OPTIONS.map((opt) => {
              const isSelected = formData.complimentId === opt.id
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleComplimentSelect(opt.id)}
                  className={`px-4 py-2.5 rounded-full text-base flex items-center gap-2 transition-all cursor-pointer ${isSelected
                    ? "border-[#080808] border-2 bg-white font-medium shadow-xs"
                    : "border border-border/80 text-[#080808] bg-background hover:bg-muted/40 font-normal"
                    }`}
                >
                  {opt.icon ? (
                    <img src={opt.icon} alt="" className="w-5 h-5 object-contain shrink-0" />
                  ) : (
                    <span>{opt.emoji}</span>
                  )}
                  <span>{opt.label}</span>
                </button>
              )
            })}
          </div>

          {/* Textarea Input Box */}
          <div className="relative w-full pt-2">
            <textarea
              rows={4}
              placeholder="What would you like to say?"
              value={formData.message || ""}
              onChange={handleMessageChange}
              className="w-full p-4 pl-14 text-sm md:text-base border border-border/70 rounded-2xl bg-background text-foreground placeholder:text-[#5A5A5A] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
            <div className="absolute bg-[rgba(48,48,48,0.04)] left-3.5 top-5 p-[2px] border border-border/50 rounded-full flex items-center justify-center">
              <VoiceInputButton
                onTranscript={(transcript) => {
                  const current = formData.message || ""
                  updateFormData({
                    message: current ? `${current} ${transcript}` : transcript,
                  })
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 6B. If "Send feedback" is selected */}
      {formData.actionType === "feedback" && (
        <div
          ref={actionContentRef}
          className="space-y-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-300 scroll-mt-6"
        >
          {/* Textarea Input Box */}
          <div className="relative w-full">
            <textarea
              rows={4}
              placeholder="What would you like to say?"
              value={formData.message || ""}
              onChange={handleMessageChange}
              className="w-full p-4 pl-14 text-sm md:text-base border border-border/70 rounded-2xl bg-background text-foreground placeholder:text-[#5A5A5A] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
            <div className="absolute bg-[rgba(48,48,48,0.04)] left-3.5 top-3.5 p-[2px] border border-border/50 rounded-full flex items-center justify-center">
              <VoiceInputButton
                onTranscript={(transcript) => {
                  const current = formData.message || ""
                  updateFormData({
                    message: current ? `${current} ${transcript}` : transcript,
                  })
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ThankTeacherForm
