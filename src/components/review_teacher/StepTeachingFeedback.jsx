import React from "react"
import { Title32, Title16 } from "@/components/typho/Title"
import { Star, Settings } from "lucide-react"
import VoiceInputButton from "@/components/common/VoiceInputButton"

const TeachingFeedbackIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M8.01562 13.5H16.0284M8.01562 8.5H12.022" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.10538 19C4.80319 18.8721 3.82767 18.4816 3.17345 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17345 3.67157C4.3469 2.5 6.23554 2.5 10.0128 2.5H14.0192C17.7965 2.5 19.6852 2.5 20.8586 3.67157C22.0321 4.84315 22.0321 6.72876 22.0321 10.5V11C22.0321 14.7712 22.0321 16.6569 20.8586 17.8284C19.6852 19 17.7965 19 14.0192 19C13.4578 19.0125 13.0107 19.0551 12.5715 19.155C11.3712 19.4309 10.2597 20.0441 9.16133 20.5789C7.59624 21.3408 6.8137 21.7218 6.32261 21.3651C5.3831 20.6665 6.30142 18.5019 6.50721 17.5" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const StepTeachingFeedback = ({ feedbackData = {}, updateFeedback, role = "student" }) => {
  const workingWell = feedbackData.workingWell || ""
  const couldBeImproved = feedbackData.couldBeImproved || ""

  const handleWorkingWellVoice = (transcript) => {
    const updated = workingWell ? `${workingWell} ${transcript}` : transcript
    updateFeedback({ workingWell: updated })
  }

  const handleCouldBeImprovedVoice = (transcript) => {
    const updated = couldBeImproved ? `${couldBeImproved} ${transcript}` : transcript
    updateFeedback({ couldBeImproved: updated })
  }

  // Question text based on role
  const workingWellQuestion =
    role === "observer"
      ? "What strengths were observed?"
      : "What is your teacher doing well?"

  const couldBeImprovedQuestion =
    role === "observer"
      ? "What are the improvement priorities?"
      : "What could be improved?"

  return (
    <div className="space-y-8 font-urbanist">
      {/* Category Header Row: SVG Icon in bg-[#F7F7F7] rounded-full + Title32 */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#F7F7F7] flex items-center justify-center shrink-0">
          <TeachingFeedbackIcon className="w-6 h-6 text-[#1F1F21]" />
        </div>
        <Title32 className="text-[#1F1F21] leading-[48px] font-semibold text-[26px] sm:text-[32px] overflow-hidden text-ellipsis whitespace-nowrap">
          Teaching Feedback
        </Title32>
      </div>

      {/* Section 1: What's Working Well? */}
      <div className="space-y-3">
        {/* <div className="flex items-center gap-2 text-foreground">
          <Star className="w-5 h-5 text-foreground shrink-0 stroke-[1.75]" />
          <Title16 className="text-[16px] font-normal text-foreground">
            What is working well?
          </Title16>
        </div> */}

        <p className="text-lg md:text-[20px] font-medium text-[#080808]">
          {workingWellQuestion}
        </p>

        {/* Textarea Box with Voice Input Button inside */}
        <div className="relative w-full">
          <textarea
            rows={4}
            placeholder="Details"
            value={workingWell}
            onChange={(e) => updateFeedback({ workingWell: e.target.value })}
            className="w-full p-4 pl-14 text-sm border border-border/70 rounded-2xl bg-background text-foreground placeholder:text-[#5A5A5A] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
          />
          <div className="absolute bg-[rgba(48,48,48,0.04)] left-3.5 top-2 p-[2px] border border-border/50 rounded-full flex items-center justify-center">
            <VoiceInputButton onTranscript={handleWorkingWellVoice} />
          </div>
        </div>
      </div>

      {/* Section 2: What Could Be Better? */}
      <div className="space-y-3">
        {/* <div className="flex items-center gap-2 text-foreground">
          <Settings className="w-5 h-5 text-foreground shrink-0 stroke-[1.75]" />
          <Title16 className="text-[16px] font-normal text-foreground">
            What Could Be Better?
          </Title16>
        </div> */}

        <p className="text-lg md:text-[20px] font-medium text-[#080808]">
          {couldBeImprovedQuestion}
        </p>

        {/* Textarea Box with Voice Input Button inside */}
        <div className="relative w-full">
          <textarea
            rows={4}
            placeholder="Details"
            value={couldBeImproved}
            onChange={(e) => updateFeedback({ couldBeImproved: e.target.value })}
            className="w-full p-4 pl-14 text-sm border border-border/70 rounded-2xl bg-background text-foreground placeholder:text-[#5A5A5A] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
          />
          <div className="absolute bg-[rgba(48,48,48,0.04)] left-3.5 top-2 p-[2px] border border-border/50 rounded-full flex items-center justify-center">
            <VoiceInputButton onTranscript={handleCouldBeImprovedVoice} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTeachingFeedback
