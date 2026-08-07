import React, { useState } from "react"
import { Title32 } from "@/components/typho/Title"
import ExternalTeacherProfileTab from "@/components/ExternalTeacher/setting/ExternalTeacherProfileTab"
import ManageEvaluatorsTab from "@/components/evaluator/setting/ManageEvaluatorsTab"
import EvaluatorSubscriptionTab from "@/components/evaluator/setting/EvaluatorSubscriptionTab"
import EvaluatorPrivacyDataTab from "@/components/evaluator/setting/EvaluatorPrivacyDataTab"
import SecurityTab from "@/components/leaderDashboard/setting/general/SecurityTab"
import NotificationsTab from "@/components/leaderDashboard/setting/general/NotificationsTab"

const EvaluatorGeneral = () => {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "evaluators", label: "Manage Evaluators" },
    { id: "subscription", label: "Subscription & Billing" },
    { id: "privacy", label: "Privacy & Data" },
    { id: "security", label: "Security" },
    { id: "notifications", label: "Notifications" },
  ]

  return (
    <div className="w-full space-y-6 font-urbanist pb-10">
      {/* Page Title */}
      <Title32 className="text-[#080808]">General Settings</Title32>

      {/* Tabs Navigation Bar */}
      <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-base font-normal transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                isActive
                  ? "bg-[#038AF9] text-white shadow-xs"
                  : "bg-white border border-gray-200 text-[#080808] hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Dynamic Tab Body */}
      <div className="pt-2">
        {activeTab === "profile" && <ExternalTeacherProfileTab />}
        {activeTab === "evaluators" && <ManageEvaluatorsTab />}
        {activeTab === "subscription" && <EvaluatorSubscriptionTab />}
        {activeTab === "privacy" && <EvaluatorPrivacyDataTab />}
        {activeTab === "security" && <SecurityTab />}
        {activeTab === "notifications" && <NotificationsTab />}
      </div>
    </div>
  )
}

export default EvaluatorGeneral
