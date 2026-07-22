import React from "react"
import { Check, Info } from "lucide-react"

const FEATURES = [
  "Anonymous Student Feedback",
  "AI Teaching Insights",
  "Performance Dashboard",
  "Professional Reports",
]

const PioneerTeacherCard = ({ onStartFree }) => {
  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-border/80 bg-white p-6 sm:p-7 shadow-sm space-y-6">
      {/* Header & PRO Badge */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-foreground">
          Pioneer Teacher
        </h3>
        <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          PRO
        </span>
      </div>

      {/* Pricing Header */}
      <div className="space-y-1">
        <h4 className="text-lg font-bold text-primary">
          Free for 12 months
        </h4>
        <p className="text-xs text-muted-foreground">
          Then CHF 15/month
        </p>
        <div className="pt-2 space-y-1.5 text-xs text-muted-foreground font-medium">
          <div className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-foreground shrink-0" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-foreground shrink-0" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div>
        <button
          type="button"
          onClick={onStartFree}
          className="w-full h-11 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm cursor-pointer flex items-center justify-center text-sm"
        >
          Start Free
        </button>
      </div>

      {/* Features Breakdown */}
      <div className="pt-2 border-t border-border/60 space-y-3">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="flex items-center justify-between text-xs text-foreground/80 font-medium">
            <span>{feature}</span>
            <Info className="h-3.5 w-3.5 text-muted-foreground/60 hover:text-foreground cursor-pointer transition-colors" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PioneerTeacherCard
