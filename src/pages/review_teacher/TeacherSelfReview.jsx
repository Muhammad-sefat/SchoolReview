import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ReviewCardHeader from "@/components/review_teacher/ReviewCardHeader"
import ReviewCardFooter from "@/components/review_teacher/ReviewCardFooter"
import StepCategoryReview from "@/components/review_teacher/StepCategoryReview"
import StepTeachingFeedback from "@/components/review_teacher/StepTeachingFeedback"
import SelfAttachmentsStep from "@/components/review_teacher/self_teacher_review/SelfAttachmentsStep"
import FeedbackSuccessModal from "@/components/review_teacher/FeedbackSuccessModal"

const STEP_TITLES = {
  1: "Teaching Quality",
  2: "Learning Environment",
  3: "Teaching Feedback",
  4: "Professional Practice",
  5: "Attachment (Optional)",
}

const TeacherSelfReview = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Map of itemId -> { rating: 0, details: "" }
  const [ratings, setRatings] = useState({})

  // Feedback for Step 3
  const [teachingFeedback, setTeachingFeedback] = useState({
    workingWell: "",
    couldBeImproved: "",
  })

  // File attachments for Step 5
  const [attachedFiles, setAttachedFiles] = useState([])

  const updateRating = (itemId, ratingObj) => {
    setRatings((prev) => {
      const updated = { ...prev, [itemId]: ratingObj }
      console.log(`[TeacherSelfReview] Updated rating for item ${itemId}:`, ratingObj)
      return updated
    })
  }

  const updateTeachingFeedback = (fields) => {
    setTeachingFeedback((prev) => {
      const updated = { ...prev, ...fields }
      console.log("[TeacherSelfReview] Updated teachingFeedback:", updated)
      return updated
    })
  }

  const handleNext = () => {
    if (currentStep < 5) {
      const nextStep = currentStep + 1
      console.log(`[TeacherSelfReview] Advancing to Step ${nextStep}: ${STEP_TITLES[nextStep]}`)
      setCurrentStep(nextStep)
    } else if (currentStep === 5) {
      console.log("[TeacherSelfReview] Review completed, opening success modal")
      setIsModalOpen(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1
      console.log(`[TeacherSelfReview] Returning to Step ${prevStep}: ${STEP_TITLES[prevStep]}`)
      setCurrentStep(prevStep)
    }
  }

  const handleGoToDashboard = () => {
    setIsModalOpen(false)
    navigate("/dashboard")
  }

  return (
    <div className="w-full flex items-center justify-center font-urbanist">
      {/* Main Review Card Container */}
      <div className="w-full max-w-[760px] bg-white rounded-[20px] border border-primary shadow-md overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Top Banner Header (120px) */}
        <ReviewCardHeader />

        {/* Card Body Content */}
        <div className="px-6 py-6 lg:px-10 lg:py-8 flex-1 overflow-y-auto max-h-[calc(90vh-200px)]">
          {currentStep === 1 && (
            <StepCategoryReview
              categoryTitle="Teaching Quality"
              ratings={ratings}
              updateRating={updateRating}
              role="teacher"
            />
          )}

          {currentStep === 2 && (
            <StepCategoryReview
              categoryTitle="Learning Environment"
              ratings={ratings}
              updateRating={updateRating}
              role="teacher"
            />
          )}

          {currentStep === 3 && (
            <StepTeachingFeedback
              feedbackData={teachingFeedback}
              updateFeedback={updateTeachingFeedback}
            />
          )}

          {currentStep === 4 && (
            <StepCategoryReview
              categoryTitle="Professional Practice"
              ratings={ratings}
              updateRating={updateRating}
              role="teacher"
            />
          )}

          {currentStep === 5 && (
            <SelfAttachmentsStep
              files={attachedFiles}
              setFiles={setAttachedFiles}
            />
          )}
        </div>

        {/* Card Footer Navigation (Step 1/5 to Step 5/5) */}
        <div className="px-6 pb-6 lg:px-10 shrink-0">
          <ReviewCardFooter
            currentStep={currentStep}
            totalSteps={5}
            onNext={handleNext}
            onBack={handleBack}
          />
        </div>
      </div>

      {/* Confirmation Modal */}
      <FeedbackSuccessModal
        isOpen={isModalOpen}
        title="Thank you for completing the review!"
        subtitle="Your self-review has been successfully submitted."
        primaryButtonText="Go to dashboard"
        onPrimaryClick={handleGoToDashboard}
        secondaryButtonText="Done"
        onSecondaryClick={handleGoToDashboard}
      />
    </div>
  )
}

export default TeacherSelfReview