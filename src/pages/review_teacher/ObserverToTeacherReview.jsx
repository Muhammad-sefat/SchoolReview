import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ReviewCardHeader from "@/components/review_teacher/ReviewCardHeader"
import ReviewCardFooter from "@/components/review_teacher/ReviewCardFooter"
import StepCategoryReview from "@/components/review_teacher/StepCategoryReview"
import StepTeachingFeedback from "@/components/review_teacher/StepTeachingFeedback"
import FeedbackSuccessModal from "@/components/review_teacher/FeedbackSuccessModal"

const STEP_TITLES = {
  1: "Teaching Quality",
  2: "Learning Environment",
  3: "Teaching Feedback",
  4: "Professional Practice",
}

const ObserverToTeacherReview = () => {
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

  const updateRating = (itemId, ratingObj) => {
    setRatings((prev) => {
      const updated = { ...prev, [itemId]: ratingObj }
      console.log(`[ObserverToTeacherReview] Updated rating for item ${itemId}:`, ratingObj)
      return updated
    })
  }

  const updateTeachingFeedback = (fields) => {
    setTeachingFeedback((prev) => {
      const updated = { ...prev, ...fields }
      console.log("[ObserverToTeacherReview] Updated teachingFeedback:", updated)
      return updated
    })
  }

  const handleNext = () => {
    if (currentStep < 4) {
      const nextStep = currentStep + 1
      console.log(`[ObserverToTeacherReview] Advancing to Step ${nextStep}: ${STEP_TITLES[nextStep]}`)
      setCurrentStep(nextStep)
    } else if (currentStep === 4) {
      console.log("[ObserverToTeacherReview] Review completed, opening success modal")
      setIsModalOpen(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1
      console.log(`[ObserverToTeacherReview] Returning to Step ${prevStep}: ${STEP_TITLES[prevStep]}`)
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
      <div className="w-full max-w-[1012px] bg-white rounded-[20px] border border-primary shadow-md overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Top Banner Header (120px) */}
        <ReviewCardHeader />

        {/* Card Body Content */}
        <div className="px-6 py-6 lg:px-10 lg:py-8 flex-1 overflow-y-auto max-h-[calc(90vh-200px)]">
          {currentStep === 1 && (
            <StepCategoryReview
              categoryTitle="Teaching Quality"
              ratings={ratings}
              updateRating={updateRating}
              role="observer"
            />
          )}

          {currentStep === 2 && (
            <StepCategoryReview
              categoryTitle="Learning Environment"
              ratings={ratings}
              updateRating={updateRating}
              role="observer"
            />
          )}

          {currentStep === 3 && (

            <StepCategoryReview
              categoryTitle="Professional Practice"
              ratings={ratings}
              updateRating={updateRating}
              role="observer"
            />

          )}

          {currentStep === 4 && (
            <StepTeachingFeedback
              feedbackData={teachingFeedback}
              updateFeedback={updateTeachingFeedback}
              role="observer"
            />
          )}
        </div>

        {/* Card Footer Navigation (Step 1/4 to Step 4/4) */}
        <div className="px-6 pb-6 lg:px-10 shrink-0">
          <ReviewCardFooter
            currentStep={currentStep}
            totalSteps={4}
            onNext={handleNext}
            onBack={handleBack}
          />
        </div>
      </div>

      {/* Confirmation Modal */}
      <FeedbackSuccessModal
        isOpen={isModalOpen}
        title="Thank you for completing the review"
        subtitle="Your observer review has been successfully submitted."
        primaryButtonText="Go to Dashboard"
        onPrimaryClick={handleGoToDashboard}
        secondaryButtonText={null}
        onSecondaryClick={null}
      />
    </div>
  )
}

export default ObserverToTeacherReview