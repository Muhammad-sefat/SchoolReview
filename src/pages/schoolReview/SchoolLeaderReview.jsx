import React, { useState } from "react"
import SpeakUpHeader from "@/components/SpeakUp/SpeakUpHeader"
import SchoolReviewFooter from "@/components/SchoolReview/SchoolReviewFooter"
import StepCategorySchoolReview from "@/components/SchoolReview/StepCategorySchoolReview"
import SchoolReviewSuccessModal from "@/components/SchoolReview/SchoolReviewSuccessModal"
import leaderShipData from "@/utils/LeaderShipData.jsx"

const wellbeingItems = leaderShipData.filter((i) => i.category_id === 1)
const learningItems = leaderShipData.filter((i) => i.category_id === 2)
const leadershipItems = leaderShipData.filter((i) => i.category_id === 3)
const cultureItems = leaderShipData.filter((i) => i.category_id === 4)
const facilitiesItems = leaderShipData.filter((i) => i.category_id === 5)

const SchoolLeaderReview = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  // Ratings map: itemId -> { rating: number, details: string }
  const [ratings, setRatings] = useState({})

  const totalSteps = 5

  const updateRating = (itemId, ratingObj) => {
    setRatings((prev) => ({
      ...prev,
      [itemId]: ratingObj,
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    } else if (currentStep === totalSteps) {
      console.log("[SchoolLeaderReview] Review submitted:", { ratings })
      setIsSuccessModalOpen(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleReset = () => {
    setIsSuccessModalOpen(false)
    setCurrentStep(1)
    setRatings({})
  }

  return (
    <div className="w-full flex items-center justify-center font-urbanist min-h-screen p-4">
      {/* Main Review Card Container */}
      <div className="w-full max-w-[1012px] bg-white rounded-[20px] border border-primary/40 shadow-xl overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Top Header Banner */}
        <SpeakUpHeader />

        {/* Card Body Content (Starts directly from Category Step 1/5) */}
        <div className="px-6 py-6 lg:px-10 lg:py-8 flex-1 overflow-y-auto max-h-[calc(90vh-200px)]">
          {currentStep === 1 && (
            <StepCategorySchoolReview
              categoryTitle="Wellbeing"
              items={wellbeingItems}
              ratings={ratings}
              updateRating={updateRating}
              role="leader"
            />
          )}

          {currentStep === 2 && (
            <StepCategorySchoolReview
              categoryTitle="Learning"
              items={learningItems}
              ratings={ratings}
              updateRating={updateRating}
              role="leader"
            />
          )}

          {currentStep === 3 && (
            <StepCategorySchoolReview
              categoryTitle="Leadership"
              items={leadershipItems}
              ratings={ratings}
              updateRating={updateRating}
              role="leader"
            />
          )}

          {currentStep === 4 && (
            <StepCategorySchoolReview
              categoryTitle="Culture"
              items={cultureItems}
              ratings={ratings}
              updateRating={updateRating}
              role="leader"
            />
          )}

          {currentStep === 5 && (
            <StepCategorySchoolReview
              categoryTitle="Facilities"
              items={facilitiesItems}
              ratings={ratings}
              updateRating={updateRating}
              role="leader"
            />
          )}
        </div>

        {/* Card Footer Navigation (Step 1/5 to Step 5/5) */}
        <div className="px-6 pb-6 lg:px-10 lg:pb-8">
          <SchoolReviewFooter
            currentStep={currentStep}
            totalSteps={totalSteps}
            onNext={handleNext}
            onBack={handleBack}
          />
        </div>
      </div>

      {/* Submission Confirmation Green Checkmark Modal */}
      <SchoolReviewSuccessModal
        open={isSuccessModalOpen}
        onOpenChange={setIsSuccessModalOpen}
        onClose={handleReset}
        mode="teacher"
      />
    </div>
  )
}

export default SchoolLeaderReview