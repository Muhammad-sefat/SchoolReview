import React, { useEffect } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import PioneerTeacherCard from "@/components/auth/teacher/PioneerTeacherCard"

const TeacherPlanSelect = () => {
  const { setAuthHeader } = useOutletContext() || {}
  const navigate = useNavigate()

  useEffect(() => {
    if (setAuthHeader) {
      setAuthHeader({
        title: "Create your teacher account",
        subtitle: "Join School Review to explore schools, share insights, and support better education.",
        extra: null,
        backTo: "/auth/signup/teacher",
      })
    }
  }, [setAuthHeader])

  const handleStartFree = () => {
    console.log("Pioneer Teacher Free 12 Months Plan selected!")
    navigate("/dashboard")
  }

  return (
    <div className="w-full flex justify-center py-4">
      <PioneerTeacherCard onStartFree={handleStartFree} />
    </div>
  )
}

export default TeacherPlanSelect
