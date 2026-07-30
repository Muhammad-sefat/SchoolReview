import React, { useState } from "react"
import { Switch } from "@/components/ui/switch"

const NotificationsTab = () => {
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [weeklyDigest, setWeeklyDigest] = useState(true)

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6 font-urbanist">
      <h3 className="text-[20px] font-semibold text-[#080808]">Notification Preferences</h3>

      <div className="space-y-6">
        <div className="flex items-center justify-between gap-6 pb-4 border-b border-gray-100">
          <div className="space-y-2">
            <h4 className="text-[18px] font-medium text-[#080808]">Email Request Alerts</h4>
            <p className="text-[16px] font-normal text-[#5A5A5A]">
              Receive instant email notifications when evaluators or observers submit access requests.
            </p>
          </div>
          <Switch checked={emailAlerts} onCheckedChange={setEmailAlerts} className="data-[state=checked]:bg-[#038AF9]" />
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-[18px] font-medium text-[#080808]">Weekly Review Digest</h4>
            <p className="text-[16px] font-normal text-[#5A5A5A]">
              Receive a weekly summary email of new teacher reviews and response rates.
            </p>
          </div>
          <Switch checked={weeklyDigest} onCheckedChange={setWeeklyDigest} className="data-[state=checked]:bg-[#038AF9]" />
        </div>
      </div>
    </div>
  )
}

export default NotificationsTab
