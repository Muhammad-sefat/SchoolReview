import React, { useState } from "react"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const NotificationsTab = () => {
  const [generalNotifications, setGeneralNotifications] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [escalateDays, setEscalateDays] = useState("3")
  const [backupContact, setBackupContact] = useState("")

  const handleToggleGeneral = (val) => {
    setGeneralNotifications(val)
    console.log("Notifications General Toggle:", val)
  }

  const handleToggleEmail = (val) => {
    setEmailNotifications(val)
    console.log("Notifications Email Toggle:", val)
  }

  return (
    <div className="space-y-4 font-urbanist">
      {/* Card 1: Notifications & Email Notifications */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
        {/* Row 1: Notifications */}
        <div className="flex items-center justify-between gap-6 ">
          <div className="space-y-1">
            <h3 className="text-[20px] font-semibold text-[#080808]">Notifications</h3>
            <p className="text-[16px] font-normal text-textPrimary">
              Stay informed about reviews, approvals, and important updates.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-base font-normal text-textPrimary">On / Off</span>
            <Switch
              checked={generalNotifications}
              onCheckedChange={handleToggleGeneral}
              className="data-[state=checked]:bg-[#038AF9]"
            />
          </div>
        </div>

        {/* Row 2: Email Notifications */}
        <div className="border-t border-dashed border-gray-200 pt-6 flex items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-[20px] font-semibold text-[#080808]">Email Notifications</h3>
            <p className="text-[16px] font-normal text-textPrimary">
              Receive important email updates about reviews, approvals, reports, and account activity.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-base font-normal text-textPrimary">On / Off</span>
            <Switch
              checked={emailNotifications}
              onCheckedChange={handleToggleEmail}
              className="data-[state=checked]:bg-[#038AF9]"
            />
          </div>
        </div>
      </div>

      {/* Card 2: Safeguarding Notifications */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="space-y-1">
          <h3 className="text-[20px] font-semibold text-[#080808]">Safeguarding Notifications</h3>
          <p className="text-[16px] font-normal text-textPrimary">
            Configure how safeguarding reports are escalated if no action is taken.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Field 1: Escalate After (days) */}
          <div className="space-y-3">
            <label className="text-[18px] font-medium text-[#080808] block">Escalate After (days)</label>
            <input
              type="number"
              value={escalateDays}
              onChange={(e) => {
                setEscalateDays(e.target.value)
                console.log("Escalate After (days):", e.target.value)
              }}
              min={1}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] bg-white shadow-2xs"
            />
          </div>

          {/* Field 2: Backup Contact */}
          <div className="space-y-3">
            <label className="text-[18px] font-medium text-[#080808] block">Backup Contact</label>
            <Select
              value={backupContact}
              onValueChange={(val) => {
                setBackupContact(val)
                console.log("Selected Backup Contact:", val)
              }}
            >
              <SelectTrigger className="w-full h-12 px-4 rounded-xl border-gray-200 text-[16px] font-normal text-[#080808] bg-white shadow-2xs">
                <SelectValue placeholder="Select backup contact" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john_doe">John Doe (Head of Safeguarding)</SelectItem>
                <SelectItem value="sarah_smith">Sarah Smith (Deputy Head)</SelectItem>
                <SelectItem value="admin_team">School Admin Team</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationsTab
