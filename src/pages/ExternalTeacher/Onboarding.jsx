import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import StepOneTeachingAreas from "@/components/ExternalTeacher/onboarding/StepOneTeachingAreas"
import StepTwoStudentFeedback from "@/components/ExternalTeacher/onboarding/StepTwoStudentFeedback"
import StepThreeInviteObservers from "@/components/ExternalTeacher/onboarding/StepThreeInviteObservers"
import StepFourShareFeedback from "@/components/ExternalTeacher/onboarding/StepFourShareFeedback"
import StartSelfReviewModal from "@/components/ExternalTeacher/onboarding/StartSelfReviewModal"
import RemindMeLaterModal from "@/components/ExternalTeacher/onboarding/RemindMeLaterModal"

const BackArrowIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M11 18L5 12L11 6M5.5 12H19" stroke="#080808" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
)

const TOTAL_STEPS = 4

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isStartSelfReviewOpen, setIsStartSelfReviewOpen] = useState(false)
  const [isRemindMeLaterOpen, setIsRemindMeLaterOpen] = useState(false)

  const navigate = useNavigate()

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1)
    } else {
      // Step 4 Finish clicked -> Open Start Your Self-Review modal
      setIsStartSelfReviewOpen(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const progressPercent = (currentStep / TOTAL_STEPS) * 100

  return (
    <div className="w-full min-h-screen bg-[#F6F6F6] p-6 lg:p-8 font-urbanist flex flex-col justify-center items-center">
      <div className="max-w-[1500px] w-full mx-auto space-y-6">

        {/* Main Onboarding Container Box */}
        <div
          style={{ borderRadius: "32px" }}
          className="bg-white border border-[#EAEAEA] p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8 shadow-xs"
        >
          {/* Quick Setup Progress Bar Bar */}
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between gap-4">
              <span className="text-base font-normal text-[#080808] shrink-0">Quick Setup</span>
              <div className="flex-1 mx-4 bg-gray-100 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-[#038AF9] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="bg-[#038AF9] text-white text-xs font-medium px-2.5 py-0.5 rounded-full shrink-0">
                {currentStep}/{TOTAL_STEPS}
              </span>
            </div>
            <div className="w-full border-b border-gray-100/60 pt-2" />
          </div>

          {/* Current Step Body Component */}
          {currentStep === 1 && <StepOneTeachingAreas />}
          {currentStep === 2 && <StepTwoStudentFeedback />}
          {currentStep === 3 && <StepThreeInviteObservers />}
          {currentStep === 4 && <StepFourShareFeedback />}

          {/* Footer Navigation Bar */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            {/* Back Button */}
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                style={{ borderRadius: "360px", background: "#F7F7F7" }}
                className="w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                title="Go back"
              >
                <BackArrowIconSVG />
              </button>
            ) : (
              <div className="w-12 h-12" />
            )}

            {/* Next / Finish Button */}
            <button
              type="button"
              onClick={handleNext}
              className="bg-[#038AF9] hover:bg-[#0270ce] text-white text-[18px] font-medium px-8 py-3 rounded-xl transition-all cursor-pointer shadow-xs"
            >
              {currentStep === TOTAL_STEPS ? "Finish" : "Next"}
            </button>
          </div>

        </div>

      </div>

      {/* Modal 2: Start Your Self-Review? */}
      <StartSelfReviewModal
        isOpen={isStartSelfReviewOpen}
        onClose={() => setIsStartSelfReviewOpen(false)}
        onStartNow={() => {
          setIsStartSelfReviewOpen(false)
          navigate("/external-teacher")
        }}
        onRemindMeLater={() => {
          setIsStartSelfReviewOpen(false)
          setIsRemindMeLaterOpen(true)
        }}
      />

      {/* Modal 3: When Should We Remind You? */}
      <RemindMeLaterModal
        isOpen={isRemindMeLaterOpen}
        onClose={() => setIsRemindMeLaterOpen(false)}
        onSetReminder={() => {
          setIsRemindMeLaterOpen(false)
          navigate("/external-teacher")
        }}
      />
    </div>
  )
}

export default Onboarding