import React, { useState } from "react"
import SpeakUpHeader from "@/components/SpeakUp/SpeakUpHeader"
import SchoolReviewFooter from "@/components/SchoolReview/SchoolReviewFooter"
import StepOneSchoolReview from "@/components/SchoolReview/StepOneSchoolReview"
import StepCategorySchoolReview from "@/components/SchoolReview/StepCategorySchoolReview"
import StepOpenCommentsSchoolReview from "@/components/SchoolReview/StepOpenCommentsSchoolReview"
import StepEmailVerificationSchoolReview from "@/components/SchoolReview/StepEmailVerificationSchoolReview"
import SchoolReviewSuccessModal from "@/components/SchoolReview/SchoolReviewSuccessModal"
import reviewItemsData from "@/utils/studnetParentReviewData/Data.jsx"

// Category filters for Student / Parent
const studentWellbeingItems = reviewItemsData.filter((i) => i.category_id === 3 && (i.student_question || i.parent_question))
const studentLearningItems = reviewItemsData.filter((i) => i.category_id === 2)
const studentTeachingItems = reviewItemsData.filter((i) => i.category_id === 4)
const studentCommunityItems = reviewItemsData.filter((i) => i.category_id === 5)
const studentFacilitiesItems = reviewItemsData.filter((i) => i.category_id === 6)

// Category filters for Teacher
const teacherWellbeingItems = reviewItemsData.filter((i) => i.category_id === 3 && i.teacher_question)
const teacherLeadershipItems = reviewItemsData.filter((i) => i.category_id === 8 && i.teacher_question)
const teacherCultureItems = reviewItemsData.filter((i) => i.category_id === 9 && i.teacher_question)
const teacherResourcesItems = reviewItemsData.filter((i) => i.category_id === 10 && i.teacher_question)

const StudentSchoolReview = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    school: "",
    role: "student",
    title: "",
    workingWell: "",
    couldBeBetter: "",
    recommend: "yes",
    email: "",
  })

  // Ratings map: itemId -> { rating: number, details: string }
  const [ratings, setRatings] = useState({})

  const isTeacherRole = formData.role === "teacher"
  const totalSteps = isTeacherRole ? 7 : 8

  const updateFormData = (fields) => {
    setFormData((prev) => {
      const next = { ...prev, ...fields }
      if (fields.role && fields.role !== prev.role) {
        const newTotal = fields.role === "teacher" ? 7 : 8
        if (currentStep > newTotal) {
          setCurrentStep(newTotal)
        }
      }
      return next
    })
  }

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
      console.log("[SchoolReview] Review submitted:", { formData, ratings })
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
    setFormData({
      school: "",
      role: "student",
      title: "",
      workingWell: "",
      couldBeBetter: "",
      recommend: "yes",
      email: "",
    })
  }

  return (
    <div className="w-full flex items-center justify-center font-urbanist min-h-screen p-4">
      {/* Main Review Card Container */}
      <div className="w-full max-w-[1012px] bg-white rounded-[20px] border border-primary/40 shadow-xl overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Top Header Banner */}
        <SpeakUpHeader />

        {/* Card Body Content */}
        <div className="px-6 py-6 lg:px-10 lg:py-8 flex-1 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Step 1: School, Role, Title */}
          {currentStep === 1 && (
            <StepOneSchoolReview formData={formData} updateFormData={updateFormData} />
          )}

          {/* TEACHER ROLE STEPS (7 steps total) */}
          {isTeacherRole ? (
            <>
              {currentStep === 2 && (
                <StepCategorySchoolReview
                  categoryTitle="Wellbeing"
                  items={teacherWellbeingItems}
                  ratings={ratings}
                  updateRating={updateRating}
                  role={formData.role}
                />
              )}

              {currentStep === 3 && (
                <StepCategorySchoolReview
                  categoryTitle="Leadership"
                  items={teacherLeadershipItems}
                  ratings={ratings}
                  updateRating={updateRating}
                  role={formData.role}
                />
              )}

              {currentStep === 4 && (
                <StepCategorySchoolReview
                  categoryTitle="Culture"
                  items={teacherCultureItems}
                  ratings={ratings}
                  updateRating={updateRating}
                  role={formData.role}
                />
              )}

              {currentStep === 5 && (
                <StepCategorySchoolReview
                  categoryTitle="Resources & Growth"
                  items={teacherResourcesItems}
                  ratings={ratings}
                  updateRating={updateRating}
                  role={formData.role}
                />
              )}

              {currentStep === 6 && (
                <StepOpenCommentsSchoolReview
                  formData={formData}
                  updateFormData={updateFormData}
                  role={formData.role}
                />
              )}

              {currentStep === 7 && (
                <StepEmailVerificationSchoolReview
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}
            </>
          ) : (
            /* STUDENT / PARENT ROLE STEPS (8 steps total) */
            <>
              {currentStep === 2 && (
                <StepCategorySchoolReview
                  categoryTitle="Wellbeing"
                  items={studentWellbeingItems}
                  ratings={ratings}
                  updateRating={updateRating}
                  role={formData.role}
                />
              )}

              {currentStep === 3 && (
                <StepCategorySchoolReview
                  categoryTitle="Learning"
                  items={studentLearningItems}
                  ratings={ratings}
                  updateRating={updateRating}
                  role={formData.role}
                />
              )}

              {currentStep === 4 && (
                <StepCategorySchoolReview
                  categoryTitle="Teaching"
                  items={studentTeachingItems}
                  ratings={ratings}
                  updateRating={updateRating}
                  role={formData.role}
                />
              )}

              {currentStep === 5 && (
                <StepCategorySchoolReview
                  categoryTitle="Community"
                  items={studentCommunityItems}
                  ratings={ratings}
                  updateRating={updateRating}
                  role={formData.role}
                />
              )}

              {currentStep === 6 && (
                <StepCategorySchoolReview
                  categoryTitle="Facilities"
                  items={studentFacilitiesItems.filter((i) =>
                    formData.role === "student" ? i.student_question !== "*" : true
                  )}
                  ratings={ratings}
                  updateRating={updateRating}
                  role={formData.role}
                />
              )}

              {currentStep === 7 && (
                <StepOpenCommentsSchoolReview
                  formData={formData}
                  updateFormData={updateFormData}
                  role={formData.role}
                />
              )}

              {currentStep === 8 && (
                <StepEmailVerificationSchoolReview
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}
            </>
          )}
        </div>

        {/* Card Footer Navigation */}
        <div className="px-6 pb-6 lg:px-10 lg:pb-8">
          <SchoolReviewFooter
            currentStep={currentStep}
            totalSteps={totalSteps}
            onNext={handleNext}
            onBack={handleBack}
            nextButtonText={
              currentStep === totalSteps && formData.role !== "teacher"
                ? "Send Confirmation link"
                : "Next"
            }
          />
        </div>
      </div>

      {/* Submission Confirmation Success Modal */}
      <SchoolReviewSuccessModal
        open={isSuccessModalOpen}
        onOpenChange={setIsSuccessModalOpen}
        onClose={handleReset}
        mode={formData.role}
      />
    </div>
  )
}

export default StudentSchoolReview
