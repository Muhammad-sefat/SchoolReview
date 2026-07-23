import React, { useState, useEffect } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import { Title32, Title24, Title20 } from "@/components/typho/Title"
import AuthBtn from "@/components/common/button/AuthBtn"

const FIRST_ROLE = {
  id: "school-reviewer",
  badge: "Community Member",
  title: "School Reviewer",
  description: "Share your experience and leave feedback about your school.",
}

const OTHER_ROLES = [
  {
    id: "school-leader",
    badge: "Community Member",
    title: "School Leader",
    description: "Access school insights, respond to feedback, and drive improvement.",
  },
  {
    id: "teacher",
    badge: null,
    title: "Teacher",
    description: "Access teaching tools, see feedback, and track your own performance.",
  },
  {
    id: "school-evaluator",
    badge: null,
    title: "School Evaluator",
    description: "Evaluate schools, analyse 360° insights, and create evaluation reports.",
  },
  {
    id: "teacher-observer",
    badge: null,
    title: "Teacher Observer",
    description: "Provide structured lesson observations and evaluate teaching quality.",
  },
]

const RoleSelect = () => {
  const { setAuthHeader } = useOutletContext() || {}
  const [selectedRole, setSelectedRole] = useState("school-reviewer")
  const navigate = useNavigate()

  useEffect(() => {
    if (setAuthHeader) {
      setAuthHeader({
        title: "Create your account",
        subtitle: "Join SchoolReview to share feedback, gain insights, and help improve education.",
        extra: null,
        backTo: "/auth/login",
      })
    }
  }, [setAuthHeader])

  const handleContinue = () => {
    console.log("Selected Role value:", selectedRole)
    if (selectedRole === "school-leader") {
      navigate("/auth/signup/school-leader")
    } else if (selectedRole === "teacher") {
      navigate("/auth/signup/teacher")
    } else if (selectedRole === "school-evaluator") {
      navigate("/auth/signup/school-evaluator")
    } else if (selectedRole === "school-reviewer") {
      navigate("/auth/signup")
    } else {
      navigate(`/auth/signup?role=${selectedRole}`)
    }
  }

  const isFirstSelected = selectedRole === FIRST_ROLE.id

  return (
    <div className="w-full relative space-y-[20px]">
      {/* Greeting Icon & Title */}
      <div className="space-y-2">
        <span className="text-2xl" role="img" aria-label="wave">👋</span>
        <Title32 className="text-foreground">
          Select your role
        </Title32>
        <Title24 className="text-[#1F1F21] font-normal">
          We'll personalise your experience based on your role.
        </Title24>
      </div>

      {/* Section 1: School Reviewer Box */}
      <div className="pt-2">
        <div className="mb-5">
          <span className="text-xs font-medium text-primary bg-white border border-[#E6F3FE] px-3.5 py-1 rounded-full inline-block">
            {FIRST_ROLE.badge}
          </span>
        </div>
        <div
          onClick={() => setSelectedRole(FIRST_ROLE.id)}
          className={`relative lg:p-5 p-4 rounded-2xl border transition-all cursor-pointer bg-[#FDFDFD] ${isFirstSelected
            ? "border-primary ring-1 ring-primary shadow-sm"
            : "border-border/80 hover:border-border"
            }`}
        >
          <Title24 className="text-[#080808] font-semibold mb-1">
            {FIRST_ROLE.title}
          </Title24>
          <Title20 className="text-[#080808] font-normal leading-relaxed">
            {FIRST_ROLE.description}
          </Title20>
        </div>
      </div>

      {/* Subtle Section Divider */}
      <div className="my-6 border-t border-border/40" />

      {/* Section 2: Remaining Roles */}
      <div className="space-y-5">
        {OTHER_ROLES.map((role) => {
          const isSelected = selectedRole === role.id
          return (
            <div key={role.id} className="w-full">
              {/* Badge outside box if present */}
              {role.badge && (
                <div className="mb-5">
                  <span className="text-xs font-medium text-primary bg-white border border-[#E6F3FE] px-3.5 py-1 rounded-full inline-block">
                    {role.badge}
                  </span>
                </div>
              )}

              {/* Role Card Box */}
              <div
                onClick={() => setSelectedRole(role.id)}
                className={`relative p-6 rounded-2xl border transition-all cursor-pointer bg-[#FDFDFD] ${isSelected
                  ? "border-primary ring-1 ring-primary shadow-sm"
                  : "border-border/80 hover:border-border"
                  }`}
              >
                <Title24 className="text-[#080808] font-semibold mb-1">
                  {role.title}
                </Title24>
                <Title20 className="text-[#080808] font-normal leading-relaxed">
                  {role.description}
                </Title20>
              </div>
            </div>
          )
        })}
      </div>

      {/* Continue Button */}
      <div className="pt-4">
        <AuthBtn onClick={handleContinue}>
          Continue
        </AuthBtn>
      </div>
    </div>
  )
}

export default RoleSelect
