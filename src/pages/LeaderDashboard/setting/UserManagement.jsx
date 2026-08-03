import React, { useState } from "react"
import TeacherTableSection from "@/components/leaderDashboard/setting/user-manangement/teacher/TeacherTableSection"
import StudentTableSection from "@/components/leaderDashboard/setting/user-manangement/student/StudentTableSection"
import ObserverTableSection from "@/components/leaderDashboard/setting/user-manangement/observer/ObserverTableSection"
import EvaluatorTableSection from "@/components/leaderDashboard/setting/user-manangement/evaluator/EvaluatorTableSection"

const UserManagement = () => {
  const [activeUserTab, setActiveUserTab] = useState("teacher")

  return (
    <div className="w-full space-y-6 font-urbanist bg-gray-50/20 min-h-screen">
      {/* User Role Pills Bar */}
      <div className="flex flex-wrap items-center gap-3">
        {[
          { id: "teacher", label: "Teacher" },
          { id: "student", label: "Student" },
          { id: "observer", label: "Observer" },
          { id: "evaluator", label: "Evaluator" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveUserTab(tab.id)}
            className={`px-6 py-2 rounded-full text-[18px] transition-all cursor-pointer ${activeUserTab === tab.id
                ? "bg-[#038AF9] text-white font-medium shadow-xs"
                : "border border-gray-200/90 bg-white text-textPrimary font-normal hover:text-[#080808]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Role Table Section Sub-Component */}
      {activeUserTab === "teacher" && <TeacherTableSection />}
      {activeUserTab === "student" && <StudentTableSection />}
      {activeUserTab === "observer" && <ObserverTableSection />}
      {activeUserTab === "evaluator" && <EvaluatorTableSection />}
    </div>
  )
}

export default UserManagement