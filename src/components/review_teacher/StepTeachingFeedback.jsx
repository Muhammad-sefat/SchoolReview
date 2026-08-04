import React from "react"
import { Title32, Title16 } from "@/components/typho/Title"
import { Star, Settings } from "lucide-react"
import VoiceInputButton from "@/components/common/VoiceInputButton"

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
    <div className="space-y-8">
      {/* Title */}
      <Title32 className="font-medium text-foreground text-[28px] lg:text-[32px]">
        Teaching Feedback
      </Title32>

      {/* Section 1: What's Working Well? */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-foreground">
          <Star className="w-5 h-5 text-foreground shrink-0 stroke-[1.75]" />
          <Title16 className="text-[16px] font-normal text-foreground">
            What is working well?
          </Title16>
        </div>

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
        <div className="flex items-center gap-2 text-foreground">
          <Settings className="w-5 h-5 text-foreground shrink-0 stroke-[1.75]" />
          <Title16 className="text-[16px] font-normal text-foreground">
            What Could Be Better?
          </Title16>
        </div>

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
