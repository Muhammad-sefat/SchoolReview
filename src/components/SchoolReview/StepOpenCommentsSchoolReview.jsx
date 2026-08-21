import React from "react"
import { Title32 } from "@/components/typho/Title"
import { Star, Settings } from "lucide-react"
import VoiceInputButton from "@/components/common/VoiceInputButton"

const ShareExperienceIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M8.01172 13.5H16.0245M8.01172 8.5H12.0181" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.10928 19C4.80709 18.8721 3.83158 18.4816 3.17735 17.8284C2.00391 16.6569 2.00391 14.7712 2.00391 11V10.5C2.00391 6.72876 2.00391 4.84315 3.17735 3.67157C4.35081 2.5 6.23944 2.5 10.0167 2.5H14.0231C17.8004 2.5 19.6891 2.5 20.8625 3.67157C22.036 4.84315 22.036 6.72876 22.036 10.5V11C22.036 14.7712 22.036 16.6569 20.8625 17.8284C19.6891 19 17.8004 19 14.0231 19C13.4617 19.0125 13.0146 19.0551 12.5754 19.155C11.3751 19.4309 10.2636 20.0441 9.16523 20.5789C7.60015 21.3408 6.81761 21.7218 6.32651 21.3651C5.38701 20.6665 6.30533 18.5019 6.51112 17.5" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const StepOpenCommentsSchoolReview = ({ formData, updateFormData, role = "student" }) => {
  const workingWellQuestion =
    role === "parent"
      ? "What’s working well at this school?"
      : "What do you like most about your school?"

  const couldBeBetterQuestion =
    role === "parent"
      ? "What could the school do better?"
      : "What could make your school better?"

  const recommendQuestion = "Would recommend this school to a friend."

  return (
    <div className="space-y-6 md:space-y-8 font-urbanist w-full">
      {/* Category Header Row: SVG Icon in bg-[#F7F7F7] rounded-full + Title32 */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#F7F7F7] flex items-center justify-center shrink-0">
          <ShareExperienceIcon className="w-6 h-6 text-[#1F1F21]" />
        </div>
        <Title32 className="text-[#1F1F21] leading-[48px] font-semibold text-[26px] sm:text-[32px] overflow-hidden text-ellipsis whitespace-nowrap">
          Share your experience
        </Title32>
      </div>

      <div className="space-y-6 md:space-y-8">
        {/* Question 1: What's Working Well? */}
        <div className="space-y-4 md:space-y-[24px] pb-6 border-b border-[#EAEAEA]">


          <h3 className="text-lg md:text-[20px] font-medium text-[#080808]">
            {workingWellQuestion}
          </h3>

          {/* Textarea Box with Voice Input Button inside */}
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
        <div className="space-y-4 md:space-y-[24px] pb-6 border-b border-[#EAEAEA]">


          <h3 className="text-lg md:text-[20px] font-medium text-[#080808]">
            {couldBeBetterQuestion}
          </h3>

          {/* Textarea Box with Voice Input Button inside */}
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

        {/* Question 3: Would recommend this school to a friend. */}
        <div className="space-y-4 md:space-y-[24px] pb-6 border-b border-[#EAEAEA]">
          <h3 className="text-lg md:text-[20px] font-medium text-[#080808]">
            {recommendQuestion}
          </h3>

          <div className="flex items-center gap-6">
            <label
              onClick={() => updateFormData({ recommend: "yes" })}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.recommend === "yes"
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
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.recommend === "no"
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

        {/* Title Input Section (Matching Screenshot) */}
        <div className="space-y-3">
          <h3 className="text-lg md:text-[20px] font-medium text-[#080808]">
            Title
          </h3>

          <div>
            <input
              type="text"
              maxLength={120}
              value={formData.title || ""}
              onChange={(e) => updateFormData({ title: e.target.value })}
              placeholder="Shortly summarize your overall feedback"
              className="w-full px-4 py-3.5 rounded-xl border border-[#EAEAEA] bg-white text-base text-[#080808] placeholder:text-gray-400 focus:outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] transition-all font-urbanist"
            />
            <div className="text-xs sm:text-sm text-gray-400 text-right mt-1.5 font-normal">
              {(formData.title || "").length} / 120 characters
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOpenCommentsSchoolReview
