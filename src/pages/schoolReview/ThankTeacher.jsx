import React, { useState } from "react"
import SpeakUpHeader from "@/components/SpeakUp/SpeakUpHeader"
import SchoolReviewFooter from "@/components/SchoolReview/SchoolReviewFooter"
import ThankTeacherForm from "@/components/ThankTeacher/ThankTeacherForm"
import SuggestionModal from "@/components/SpeakUp/SuggestionModal"
import ThankTeacherSuccessModal from "@/components/ThankTeacher/ThankTeacherSuccessModal"

const ThankTeacher = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    school: "",
    email: "",
    verificationCode: "2026",
    teacherId: "",
    actionType: "",
    complimentId: "",
    message: "",
  })

  const updateFormData = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }))
  }

  const handleNext = () => {
    // Step 1 -> Open Suggestion Modal (matching SpeakUp.jsx)
    setIsSuggestionModalOpen(true)
  }

  const handleSuggestionContinue = () => {
    setIsSuggestionModalOpen(false)
    // Open final Thank You Feedback Success Modal
    setIsSuccessModalOpen(true)
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleReset = () => {
    setIsSuccessModalOpen(false)
    setIsSuggestionModalOpen(false)
    setCurrentStep(1)
    setFormData({
      school: "",
      email: "",
      verificationCode: "2026",
      teacherId: "",
      actionType: "",
      complimentId: "",
      message: "",
    })
  }

  return (
    <div className="w-full flex items-center justify-center font-urbanist min-h-screen p-4">
      {/* Main Card Container */}
      <div className="w-full max-w-[1012px] bg-white rounded-[20px] border border-primary/40 shadow-xl overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Top Header Banner */}
        <SpeakUpHeader />

        {/* Card Body Content */}
        <div className="px-6 py-6 lg:px-10 lg:py-8 flex-1 overflow-y-auto max-h-[calc(90vh-200px)]">
          <ThankTeacherForm
            formData={formData}
            updateFormData={updateFormData}
          />
        </div>

        {/* Card Footer Navigation */}
        <div className="px-6 pb-6 lg:px-10 lg:pb-8">
          <SchoolReviewFooter
            currentStep={currentStep}
            totalSteps={1}
            onNext={handleNext}
            onBack={handleBack}
            nextButtonText="Next"
          />
        </div>
      </div>

      {/* Suggestion Modal Dialog (matching SpeakUp.jsx) */}
      <SuggestionModal
        open={isSuggestionModalOpen}
        onOpenChange={setIsSuggestionModalOpen}
        onContinue={handleSuggestionContinue}
      />

      {/* Submission Confirmation Green Checkmark Modal */}
      <ThankTeacherSuccessModal
        open={isSuccessModalOpen}
        onOpenChange={setIsSuccessModalOpen}
        onClose={handleReset}
      />
    </div>
  )
}

export default ThankTeacher