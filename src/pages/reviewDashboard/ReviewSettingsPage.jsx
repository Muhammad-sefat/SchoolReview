import React, { useState } from "react"
import { Title24 } from "@/components/typho/Title"
import AdministratorProfileTab from "@/components/leaderDashboard/setting/general/AdministratorProfileTab"
import PrivacyDataTab from "@/components/leaderDashboard/setting/general/PrivacyDataTab"
import SecurityTab from "@/components/leaderDashboard/setting/general/SecurityTab"
import NotificationsTab from "@/components/leaderDashboard/setting/general/NotificationsTab"

const TABS = [

  { id: "privacy", label: "Privacy & Data" },
  { id: "security", label: "Security" },
  { id: "notifications", label: "Notifications" },
]

const ReviewSettingsPage = () => {
  const [activeTab, setActiveTab] = useState("privacy")

  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Page Header */}
      <div>
        <Title24 className="text-[#080808] font-semibold">Settings</Title24>
      </div>

      {/* Horizontal Tabs Bar matching General.jsx */}
      <div className="flex items-center gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1 max-w-full">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-[16px] transition-all cursor-pointer whitespace-nowrap shrink-0 ${isActive
                ? "bg-[#038AF9] text-white font-medium shadow-xs"
                : "border border-gray-200/90 bg-white text-textPrimary font-normal hover:text-[#080808]"
                }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Active Tab Content Components */}
      <div className="pt-2">

        {activeTab === "privacy" && <PrivacyDataTab />}
        {activeTab === "security" && <SecurityTab />}
        {activeTab === "notifications" && <NotificationsTab />}
      </div>
    </div>
  )
}

export default ReviewSettingsPage
