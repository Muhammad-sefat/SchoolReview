import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import SpeakUpHeader from "@/components/SpeakUp/SpeakUpHeader"
import SpeakUpFooter from "@/components/SpeakUp/SpeakUpFooter"
import StepOneSpeakUp from "@/components/SpeakUp/StepOneSpeakUp"
import StepTwoReceiveUpdates from "@/components/SpeakUp/StepTwoReceiveUpdates"
import SuggestionModal from "@/components/SpeakUp/SuggestionModal"
import ReportSubmittedModal from "@/components/SpeakUp/ReportSubmittedModal"

const SpeakUp = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1) // 1: Step 1, 2: Step 2
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false)
  const [isSubmittedModalOpen, setIsSubmittedModalOpen] = useState(false)
  const [attachedFile, setAttachedFile] = useState(null)

  const [formData, setFormData] = useState({
    school: "",
    topic: "",
    description: "",
    updatePreference: "email",
    accessCodeDelivery: "email",
    email: "",
  })

  const updateFormData = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }))
  }

  const handleNext = () => {
    if (currentStep === 1) {
      // Step 1 -> Open Suggestion Modal (Image 3)
      setIsSuggestionModalOpen(true)
    } else if (currentStep === 2) {
      // Step 2 -> Open Report Submitted Confirmation Modal
      setIsSubmittedModalOpen(true)
    }
  }

  const handleModalContinue = () => {
    setIsSuggestionModalOpen(false)
    setCurrentStep(2)
  }

  const handleDoneSubmitted = () => {
    setIsSubmittedModalOpen(false)
    // Reset form state
    setCurrentStep(1)
    setFormData({
      school: "",
      topic: "",
      description: "",
      updatePreference: "email",
      accessCodeDelivery: "email",
      email: "",
    })
    setAttachedFile(null)
  }

  const handleCheckStatus = () => {
    setIsSubmittedModalOpen(false)
    navigate("/report-track")
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="w-full flex items-center justify-center font-urbanist min-h-screen p-4">
      {/* Main SpeakUp Card Container */}
      <div className="w-full max-w-[1012px] bg-white rounded-[20px] border border-primary/40 shadow-xl overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Top Header Banner */}
        <SpeakUpHeader />

        {/* Card Body Content */}
        <div className="px-6 py-6 lg:px-10 lg:py-8 flex-1 overflow-y-auto max-h-[calc(90vh-200px)]">
          {currentStep === 1 && (
            <StepOneSpeakUp
              formData={formData}
              updateFormData={updateFormData}
              attachedFile={attachedFile}
              onFileChange={setAttachedFile}
            />
          )}

          {currentStep === 2 && (
            <StepTwoReceiveUpdates formData={formData} updateFormData={updateFormData} />
          )}
        </div>

        {/* Card Footer Navigation */}
        <div className="px-6 pb-6 lg:px-10 lg:pb-8">
          <SpeakUpFooter
            currentStep={currentStep}
            totalSteps={2}
            onNext={handleNext}
            onBack={handleBack}
          />
        </div>
      </div>

      {/* Suggestion Modal (Step 1 -> Step 2 transition) */}
      <SuggestionModal
        open={isSuggestionModalOpen}
        onOpenChange={setIsSuggestionModalOpen}
        onContinue={handleModalContinue}
      />

      {/* Report Submitted Confirmation Modal */}
      <ReportSubmittedModal
        open={isSubmittedModalOpen}
        onOpenChange={setIsSubmittedModalOpen}
        updatePreference={formData.updatePreference}
        accessCodeDelivery={formData.accessCodeDelivery}
        generatedCode="KSZ-2025-5462"
        onDone={handleDoneSubmitted}
        onCheckStatus={handleCheckStatus}
      />
    </div>
  )
}

export default SpeakUp
