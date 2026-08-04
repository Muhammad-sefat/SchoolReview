import React from "react"
import { Star, Settings } from "lucide-react"
import VoiceInputButton from "@/components/common/VoiceInputButton"

const StepOpenCommentsSchoolReview = ({ formData, updateFormData, role = "student" }) => {
  const workingWellQuestion =
    role === "parent"
      ? "What’s working well at this school?"
      : "What do you like most about your school?"

  const couldBeBetterQuestion =
    role === "parent"
      ? "What could the school do better?"
      : "What could make your school better?"

  const recommendQuestion =
    role === "parent"
      ? "I would recommend this school."
      : "Would you recommend this school?"

  return (
    <div className="space-y-6 md:space-y-8 font-urbanist w-full">
      {/* Title */}
      <h2 className="text-2xl md:text-[28px] font-bold text-[#080808]">
        Share your experience
      </h2>

      <div className="space-y-6 md:space-y-8">
        {/* Question 1: What's Working Well? */}
        <div className="space-y-4 md:space-y-[24px] pb-6 border-b border-border/40">
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
            <Star className="w-4 h-4 text-muted-foreground" />
            <span>What's Working Well?</span>
          </div>

          <h3 className="text-lg md:text-[20px] font-medium text-[#080808]">
            {workingWellQuestion}
          </h3>

          {/* Textarea Box with Voice Input Button inside (Matching StepTeachingFeedback.jsx) */}
          <div className="relative w-full">
            <textarea
              rows={4}
              placeholder="Details"
              value={formData.workingWell || ""}
              onChange={(e) => updateFormData({ workingWell: e.target.value })}
              className="w-full p-4 pl-14 text-sm md:text-base border border-border/70 rounded-2xl bg-background text-foreground placeholder:text-[#5A5A5A] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
            <div className="absolute bg-[rgba(48,48,48,0.04)] left-3.5 top-3.5 p-[2px] border border-border/50 rounded-full flex items-center justify-center">
              <VoiceInputButton
                onTranscript={(transcript) => {
                  const current = formData.workingWell || ""
                  updateFormData({
                    workingWell: current ? `${current} ${transcript}` : transcript,
                  })
                }}
              />
            </div>
          </div>
        </div>

        {/* Question 2: What Could Be Better? */}
        <div className="space-y-4 md:space-y-[24px] pb-6 border-b border-border/40">
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
            <Settings className="w-4 h-4 text-muted-foreground" />
            <span>What Could Be Better?</span>
          </div>

          <h3 className="text-lg md:text-[20px] font-medium text-[#080808]">
            {couldBeBetterQuestion}
          </h3>

          {/* Textarea Box with Voice Input Button inside (Matching StepTeachingFeedback.jsx) */}
          <div className="relative w-full">
            <textarea
              rows={4}
              placeholder="Details"
              value={formData.couldBeBetter || ""}
              onChange={(e) => updateFormData({ couldBeBetter: e.target.value })}
              className="w-full p-4 pl-14 text-sm md:text-base border border-border/70 rounded-2xl bg-background text-foreground placeholder:text-[#5A5A5A] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
            <div className="absolute bg-[rgba(48,48,48,0.04)] left-3.5 top-3.5 p-[2px] border border-border/50 rounded-full flex items-center justify-center">
              <VoiceInputButton
                onTranscript={(transcript) => {
                  const current = formData.couldBeBetter || ""
                  updateFormData({
                    couldBeBetter: current ? `${current} ${transcript}` : transcript,
                  })
                }}
              />
            </div>
          </div>
        </div>

        {/* Question 3: Would you recommend this school? */}
        <div className="space-y-4 md:space-y-[24px]">
          <h3 className="text-lg md:text-[20px] font-medium text-[#080808]">
            {recommendQuestion}
          </h3>

          <div className="flex items-center gap-6">
            <label
              onClick={() => updateFormData({ recommend: "yes" })}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  formData.recommend === "yes"
                    ? "border-primary bg-white"
                    : "border-muted-foreground/60 bg-transparent"
                }`}
              >
                {formData.recommend === "yes" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                )}
              </div>
              <span className="text-base text-[#080808] font-medium">Yes</span>
            </label>

            <label
              onClick={() => updateFormData({ recommend: "no" })}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  formData.recommend === "no"
                    ? "border-primary bg-white"
                    : "border-muted-foreground/60 bg-transparent"
                }`}
              >
                {formData.recommend === "no" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                )}
              </div>
              <span className="text-base text-[#080808] font-medium">No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOpenCommentsSchoolReview
