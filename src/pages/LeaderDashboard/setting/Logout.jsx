import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import LogoutModal from "@/components/leaderDashboard/setting/LogoutModal"

const Logout = () => {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()

  const handleClose = () => {
    setIsOpen(false)
    navigate(-1)
  }

  const handleLogoutConfirm = () => {
    navigate("/auth/login")
  }

  return (
    <LogoutModal isOpen={isOpen} onClose={handleClose} onLogoutConfirm={handleLogoutConfirm} />
  )
}

export default Logout