import React, { useState } from "react"
import { Switch } from "@/components/ui/switch"

const PrivacyDataTab = () => {
  const [dataRetention, setDataRetention] = useState(true)

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6 font-urbanist">
      <h3 className="text-[20px] font-semibold text-[#080808]">Privacy & Data Policy</h3>

      <div className="space-y-6">
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-[18px] font-medium text-[#080808]">Data Retention Compliance</h4>
            <p className="text-[16px] font-normal text-[#5A5A5A]">
              Automatically archive review responses older than 365 days in accordance with school data governance policies.
            </p>
          </div>
          <Switch checked={dataRetention} onCheckedChange={setDataRetention} className="data-[state=checked]:bg-[#038AF9]" />
        </div>
      </div>
    </div>
  )
}

export default PrivacyDataTab
