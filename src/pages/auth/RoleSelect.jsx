import React, { useState, useEffect } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import { Title32 } from "@/components/typho/Title"

const ROLES = [
  {
    id: "school-reviewer",
    badge: "Community Member",
    title: "School Reviewer",
    description: "Share your experience and leave feedback about your school.",
  },
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

  return (
    <div className="w-full relative space-y-6">
      {/* Greeting Icon & Title */}
      <div className="space-y-2">
        <span className="text-2xl" role="img" aria-label="wave">👋</span>
        <Title32 className="text-foreground">
          Select your role
        </Title32>
        <p className="text-muted-foreground text-sm">
          We'll personalise your experience based on your role.
        </p>
      </div>

      {/* Role Options */}
      <div className="space-y-4 pt-2">
        {ROLES.map((role) => {
          const isSelected = selectedRole === role.id
          return (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`relative p-5 rounded-2xl border transition-all cursor-pointer ${
                isSelected
                  ? "border-primary bg-primary/[0.02] ring-1 ring-primary shadow-sm"
                  : "border-border/80 hover:border-border bg-background"
              }`}
            >
              {role.badge && (
                <span className="text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  {role.badge}
                </span>
              )}
              <h3 className="font-bold text-foreground text-base mb-1">
                {role.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {role.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Continue Button */}
      <div className="pt-4">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full h-12 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm cursor-pointer flex items-center justify-center text-base"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default RoleSelect
