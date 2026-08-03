import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import GetHelpModal from "@/components/leaderDashboard/setting/GetHelpModal"

const GetHelp = () => {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()

  const handleClose = () => {
    setIsOpen(false)
    navigate(-1)
  }

  return (
    <GetHelpModal isOpen={isOpen} onClose={handleClose} />
  )
}

export default GetHelp