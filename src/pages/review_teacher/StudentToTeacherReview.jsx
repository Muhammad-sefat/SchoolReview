import React, { useState } from "react"
import ReviewCardHeader from "@/components/review_teacher/ReviewCardHeader"
import ReviewCardFooter from "@/components/review_teacher/ReviewCardFooter"
import StepOneForm from "@/components/review_teacher/StepOneForm"
import StepCategoryReview from "@/components/review_teacher/StepCategoryReview"
import StepTeachingFeedback from "@/components/review_teacher/StepTeachingFeedback"
import FeedbackSuccessModal from "@/components/review_teacher/FeedbackSuccessModal"

const STEP_TITLES = {
  1: "Teacher & School Selection",
  2: "Classroom Climate",
  3: "Teaching Quality",
  4: "Learning Environment",
  5: "Learning Impact",
  6: "Teaching Feedback",
}

const StudentToTeacherReview = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    school: "Pioneer Swiss School",
    email: "",
    verificationCode: "",
    teacherId: "t1",
  })

  // Map of itemId -> { rating: 0, selectedTags: [], details: "" }
  const [ratings, setRatings] = useState({})

  // Feedback for Step 6
  const [teachingFeedback, setTeachingFeedback] = useState({
    workingWell: "",
    couldBeImproved: "",
  })

  const updateFormData = (fields) => {
    setFormData((prev) => {
      const updated = { ...prev, ...fields }
      console.log("[StudentToTeacherReview] Updated formData:", updated)
      return updated
    })
  }

  const updateRating = (itemId, ratingObj) => {
    setRatings((prev) => {
      const updated = { ...prev, [itemId]: ratingObj }
      console.log(`[StudentToTeacherReview] Updated rating for item ${itemId}:`, ratingObj)
      return updated
    })
  }

  const updateTeachingFeedback = (fields) => {
    setTeachingFeedback((prev) => {
      const updated = { ...prev, ...fields }
      console.log("[StudentToTeacherReview] Updated teachingFeedback:", updated)
      return updated
    })
  }

  const handleNext = () => {
    if (currentStep < 6) {
      const nextStep = currentStep + 1
      console.log(`[StudentToTeacherReview] Advancing to Step ${nextStep}: ${STEP_TITLES[nextStep]}`)
      setCurrentStep(nextStep)
    } else if (currentStep === 6) {
      console.log("[StudentToTeacherReview] Review submitted, opening success modal")
      setIsModalOpen(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1
      console.log(`[StudentToTeacherReview] Returning to Step ${prevStep}: ${STEP_TITLES[prevStep]}`)
      setCurrentStep(prevStep)
    }
  }

  const handleReset = () => {
    console.log("[StudentToTeacherReview] Resetting review form to Step 1")
    setIsModalOpen(false)
    setCurrentStep(1)
    setRatings({})
    setTeachingFeedback({ workingWell: "", couldBeImproved: "" })
    setFormData({
      school: "Kantonsschule Zug",
      email: "",
      verificationCode: "",
      teacherId: "",
    })
  }

  return (
    <div className="w-full flex items-center justify-center font-urbanist">
      {/* Main Review Card Container */}
      <div className="w-full max-w-[760px] bg-white rounded-[20px] border border-primary shadow-md overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Top Banner (120px height) */}
        <ReviewCardHeader />

        {/* Card Body Content Area */}
        <div className="px-6 py-6 lg:px-10 lg:py-8 flex-1 overflow-y-auto max-h-[calc(90vh-200px)]">
          {currentStep === 1 && (
            <StepOneForm formData={formData} updateFormData={updateFormData} />
          )}

          {currentStep === 2 && (
            <StepCategoryReview
              categoryTitle="Classroom Climate"
              ratings={ratings}
              updateRating={updateRating}
              role="student"
            />
          )}

          {currentStep === 3 && (
            <StepCategoryReview
              categoryTitle="Teaching Quality"
              ratings={ratings}
              updateRating={updateRating}
              role="student"
            />
          )}

          {currentStep === 4 && (
            <StepCategoryReview
              categoryTitle="Learning Environment"
              ratings={ratings}
              updateRating={updateRating}
              role="student"
            />
          )}

          {currentStep === 5 && (
            <StepCategoryReview
              categoryTitle="Learning Impact"
              ratings={ratings}
              updateRating={updateRating}
              role="student"
            />
          )}

          {currentStep === 6 && (
            <StepTeachingFeedback
              feedbackData={teachingFeedback}
              updateFeedback={updateTeachingFeedback}
            />
          )}
        </div>

        {/* Card Footer Navigation (Step 1 to 6) */}
        <div className="px-6 pb-6 lg:px-10 shrink-0">
          <ReviewCardFooter
            currentStep={currentStep}
            totalSteps={6}
            onNext={handleNext}
            onBack={handleBack}
          />
        </div>
      </div>

      {/* Confirmation Modal when review submitted */}
      <FeedbackSuccessModal
        isOpen={isModalOpen}
        title="Thank you for your feedback!"
        subtitle="Your anonymous feedback has been shared."
        primaryButtonText="Review Another Teacher"
        onPrimaryClick={handleReset}
        secondaryButtonText="Done"
        onSecondaryClick={handleReset}
      />
    </div>
  )
}

export default StudentToTeacherReview