import React from "react"
import FeedbackSuccessModal from "../FeedbackSuccessModal"
import { useNavigate } from "react-router-dom"

const ObserverReviewSuccessModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  if (!isOpen) return null

  const handleGoToDashboard = () => {
    if (onClose) onClose()
    navigate("/dashboard")
  }

  return (
    <FeedbackSuccessModal
      isOpen={isOpen}
      title="Thank you for completing the review"
      subtitle="Your observer review has been successfully submitted."
      primaryButtonText="Go to Dashboard"
      onPrimaryClick={handleGoToDashboard}
      secondaryButtonText={null}
      onSecondaryClick={null}
    />
  )
}

export default ObserverReviewSuccessModal
