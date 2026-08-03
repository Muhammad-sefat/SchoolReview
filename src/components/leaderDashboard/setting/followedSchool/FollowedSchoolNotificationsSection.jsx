import React, { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const FollowedSchoolNotificationsSection = () => {
  const [enabled, setEnabled] = useState(true)
  const [frequency, setFrequency] = useState("instant")

  const handleToggleSwitch = (val) => {
    setEnabled(val)
    console.log("Followed School Notifications Enabled:", val)
  }

  const handleFrequencyChange = (val) => {
    setFrequency(val)
    console.log("Followed School Notification Frequency:", val)
  }

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6 font-urbanist">
      {/* Header Row with Enable / Disable Switch */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-[18px] font-medium text-[#080808]">Followed School Notifications</h3>
          <p className="text-[16px] font-normal text-secondary">
            Choose how you'd like to receive updates from the schools you follow.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[14px] font-normal text-[#5A5A5A]">Enable / Disable</span>
          <Switch
            checked={enabled}
            onCheckedChange={handleToggleSwitch}
            className="data-[state=checked]:bg-[#038AF9]"
          />
        </div>
      </div>

      {/* Radio Frequency Selection */}
      <RadioGroup value={frequency} onValueChange={handleFrequencyChange} className="space-y-3 pt-1">
        {/* Option 1: Weekly */}
        <label className="flex items-center gap-3 cursor-pointer select-none w-fit">
          <RadioGroupItem value="weekly" id="freq-weekly" />
          <span className="text-[16px] font-normal text-[#080808]">
            Weekly <span className="text-gray-400 font-normal">(Recommended)</span>
          </span>
        </label>

        {/* Option 2: Instant */}
        <label className="flex items-center gap-3 cursor-pointer select-none w-fit">
          <RadioGroupItem value="instant" id="freq-instant" />
          <span className="text-[16px] font-normal text-[#080808]">Instant</span>
        </label>

        {/* Option 3: Monthly */}
        <label className="flex items-center gap-3 cursor-pointer select-none w-fit">
          <RadioGroupItem value="monthly" id="freq-monthly" />
          <span className="text-[16px] font-normal text-[#080808]">Monthly</span>
        </label>
      </RadioGroup>
    </div>
  )
}

export default FollowedSchoolNotificationsSection
