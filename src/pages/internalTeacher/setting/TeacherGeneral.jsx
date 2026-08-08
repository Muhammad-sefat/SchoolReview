import React, { useState } from "react"
import { Title32 } from "@/components/typho/Title"
import AdministratorProfileTab from "@/components/leaderDashboard/setting/general/AdministratorProfileTab"
import SecurityTab from "@/components/leaderDashboard/setting/general/SecurityTab"
import PrivacyDataTab from "@/components/leaderDashboard/setting/general/PrivacyDataTab"
import NotificationsTab from "@/components/leaderDashboard/setting/general/NotificationsTab"

const TeacherGeneral = () => {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "security", label: "Security" },
    { id: "privacy", label: "Privacy & Data" },
    { id: "notifications", label: "Notifications" },
  ]

  return (
    <div className="w-full space-y-6 font-urbanist bg-gray-50/20 min-h-screen pb-10">
      {/* Page Title */}
      <Title32 className="text-[#080808]">General Settings</Title32>

      {/* Tabs Horizontal Pills Bar */}
      <div className="flex items-center gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1 max-w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-[16px] transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === tab.id
                ? "bg-[#038AF9] text-white font-medium shadow-xs"
                : "border border-gray-200/90 bg-white text-textPrimary font-normal hover:text-[#080808]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Components */}
      {activeTab === "profile" && <AdministratorProfileTab />}
      {activeTab === "security" && <SecurityTab />}
      {activeTab === "privacy" && <PrivacyDataTab />}
      {activeTab === "notifications" && <NotificationsTab />}
    </div>
  )
}

export default TeacherGeneral
