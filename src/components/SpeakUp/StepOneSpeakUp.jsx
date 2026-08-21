import React from "react"
import TeacherSchoolSelectDropdown from "@/components/auth/teacher/TeacherSchoolSelectDropdown"
import TopicSelectDropdown from "@/components/SpeakUp/TopicSelectDropdown"
import WhatHappenedInput from "@/components/SpeakUp/WhatHappenedInput"
import { MapPin, Landmark } from "lucide-react"

const SchweizerSchuleLogo = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-1">
    <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
      <path
        d="M15 12C15 9.79086 16.7909 8 19 8H81C83.2091 8 85 9.79086 85 12V42C85 64 50 88 50 88C50 88 15 64 15 42V12Z"
        fill="#0F294A"
      />
      <path
        d="M15 12C15 9.79086 16.7909 8 19 8H81C83.2091 8 85 9.79086 85 12V30H15V12Z"
        fill="#D92D20"
      />
      <rect x="46" y="12" width="8" height="14" fill="white" rx="1" />
      <rect x="43" y="15" width="14" height="8" fill="white" rx="1" />
      <path d="M15 45L34 26L55 45H15Z" fill="#1E3A8A" />
      <path d="M32 45L56 22L80 45H32Z" fill="#2563EB" opacity="0.9" />
      <rect x="36" y="42" width="28" height="24" fill="white" rx="1" />
      <path d="M34 42L50 30L66 42H34Z" fill="#0F294A" />
      <rect x="40" y="46" width="5" height="6" fill="#0F294A" />
      <rect x="55" y="46" width="5" height="6" fill="#0F294A" />
      <rect x="40" y="55" width="5" height="6" fill="#0F294A" />
      <rect x="55" y="55" width="5" height="6" fill="#0F294A" />
      <rect x="48" y="54" width="4" height="12" fill="#0F294A" />
      <circle cx="73" cy="48" r="6" fill="#65A30D" />
      <rect x="72.5" y="53" width="1.5" height="8" fill="#78350F" />
    </svg>
  </div>
)

const StepOneSpeakUp = ({ formData, updateFormData, attachedFile, onFileChange }) => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* School Field */}
      <div className="space-y-4 md:space-y-[24px]">
        <h3 className="text-xl md:text-2xl font-semibold text-[#080808]">
          {formData.school ? "School name" : "School"}
        </h3>

        {!formData.school ? (
          <TeacherSchoolSelectDropdown
            value={formData.school}
            onChange={(schoolName) => updateFormData({ school: schoolName })}
          />
        ) : (
          /* Selected School Card (Image 2) */
          <div className="flex items-start gap-4 p-4 rounded-xl border border-border/80 bg-background">
            {/* School Logo */}
            <div className="w-16 h-16 rounded-xl border border-border/60 bg-muted/20 flex items-center justify-center shrink-0 overflow-hidden">
              <SchweizerSchuleLogo />
            </div>

            {/* School Info */}
            <div className="space-y-1">
              <h4 className="text-[18px] font-semibold text-[#080808]">
                {formData.school}
              </h4>
              <div className="flex items-center gap-1.5 text-[14px] text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 text-muted-foreground" />
                <span>Zug, Switzerland</span>
              </div>
              <div className="flex items-center gap-1.5 text-[14px] text-muted-foreground">
                <Landmark className="w-4 h-4 shrink-0 text-muted-foreground" />
                <span>Public</span>
              </div>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => updateFormData({ school: "" })}
                  className="text-[14px] font-medium text-primary hover:underline cursor-pointer"
                >
                  Select Another School
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Select a Topic Field */}
      <div className="space-y-4 md:space-y-[24px]">
        <h3 className="text-xl md:text-2xl font-semibold text-[#080808]">Select a topic</h3>
        <TopicSelectDropdown
          value={formData.topic}
          onChange={(topicId) => updateFormData({ topic: topicId })}
        />
      </div>

      {/* What Happened Field */}
      <WhatHappenedInput
        value={formData.description}
        onChange={(text) => updateFormData({ description: text })}
        attachedFile={attachedFile}
        onFileChange={onFileChange}
      />
    </div>
  )
}

export default StepOneSpeakUp
