import React, { useState } from "react"
import { Title32 } from "@/components/typho/Title"
import ExternalTeacherProfileTab from "@/components/ExternalTeacher/setting/ExternalTeacherProfileTab"
import AdditionalReviewModulesTab from "@/components/leaderDashboard/setting/general/AdditionalReviewModulesTab"
import ExternalSubscriptionTab from "@/components/ExternalTeacher/setting/ExternalSubscriptionTab"
import SecurityTab from "@/components/leaderDashboard/setting/general/SecurityTab"
import PrivacyDataTab from "@/components/leaderDashboard/setting/general/PrivacyDataTab"
import NotificationsTab from "@/components/leaderDashboard/setting/general/NotificationsTab"

const ExternalTeacherGeneral = ({ data }) => {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "review-areas", label: "Additional Review Areas" },
    { id: "subscription", label: "Subscription & Billing" },
    { id: "security", label: "Security" },
    { id: "privacy", label: "Privacy & Data" },
    { id: "notifications", label: "Notifications" },
  ]

  return (
    <div className="w-full space-y-6 font-urbanist pb-10">
      {/* Page Title */}
      <Title32 className="text-[#080808]">General Settings</Title32>

      {/* Tabs Horizontal Pills Bar */}
      <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1 max-w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-sm sm:text-base transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === tab.id
                ? "bg-[#038AF9] text-white font-medium shadow-xs"
                : "border border-gray-200/90 bg-white text-textPrimary font-normal hover:text-[#080808]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Display */}
      {activeTab === "profile" && <ExternalTeacherProfileTab data={data?.profile} />}
      {activeTab === "review-areas" && <AdditionalReviewModulesTab data={data?.reviewAreas} />}
      {activeTab === "subscription" && <ExternalSubscriptionTab data={data?.subscription} />}
      {activeTab === "security" && <SecurityTab data={data?.security} />}
      {activeTab === "privacy" && <PrivacyDataTab data={data?.privacy} />}
      {activeTab === "notifications" && <NotificationsTab data={data?.notifications} />}
    </div>
  )
}

export default ExternalTeacherGeneral
