import React from "react"
import { CheckCircle2 } from "lucide-react"
import { Title32, Title18 } from "@/components/typho/Title"

const StepSuccess = ({ teacherName, onReset }) => {
  return (
    <div className="py-12 px-4 text-center space-y-6 flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2 max-w-md">
        <Title32 className="font-medium text-foreground text-[28px] lg:text-[32px]">
          Review Submitted!
        </Title32>
        <Title18 className="text-muted-foreground font-normal">
          Thank you for providing your feedback for {teacherName || "your teacher"}. Your review has been recorded successfully.
        </Title18>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="h-11 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium text-sm transition-all cursor-pointer shadow-sm"
      >
        Review Another Teacher
      </button>
    </div>
  )
}

export default StepSuccess
