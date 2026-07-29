import React from "react"
import FeedbackSuccessModal from "../FeedbackSuccessModal"

const SelfReviewSuccessModal = ({ isOpen, onClose }) => {
  return (
    <FeedbackSuccessModal
      isOpen={isOpen}
      title="Thank you for completing the review!"
      subtitle="Your self-review has been successfully submitted."
      primaryButtonText="Go to dashboard"
      onPrimaryClick={onClose}
      secondaryButtonText="Done"
      onSecondaryClick={onClose}
    />
  )
}

export default SelfReviewSuccessModal
