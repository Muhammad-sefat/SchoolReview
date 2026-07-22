import React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const EvaluatorTypeRadio = ({ value, onChange }) => {
  return (
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="flex items-center gap-6 py-1"
    >
      <div className="flex items-center space-x-2 cursor-pointer">
        <RadioGroupItem value="team-owner" id="r-team-owner" />
        <Label htmlFor="r-team-owner" className="cursor-pointer font-medium text-xs sm:text-sm text-foreground">
          Team Owner
        </Label>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer">
        <RadioGroupItem value="team-member" id="r-team-member" />
        <Label htmlFor="r-team-member" className="cursor-pointer font-medium text-xs sm:text-sm text-foreground">
          Team Member
        </Label>
      </div>
    </RadioGroup>
  )
}

export default EvaluatorTypeRadio
