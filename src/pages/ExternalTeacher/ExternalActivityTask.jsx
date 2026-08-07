import React, { useState } from "react"
import ExternalActiveTaskHeader from "@/components/ExternalTeacher/activeTask/ExternalActiveTaskHeader"
import StepTwoStudentFeedback from "@/components/ExternalTeacher/onboarding/StepTwoStudentFeedback"
import StepThreeInviteObservers from "@/components/ExternalTeacher/onboarding/StepThreeInviteObservers"
import StepOneTeachingAreas from "@/components/ExternalTeacher/onboarding/StepOneTeachingAreas"
import StepFourShareFeedback from "@/components/ExternalTeacher/onboarding/StepFourShareFeedback"
import SelfReviewCard from "@/components/internalTeacher/activeTask/SelfReviewCard"
import SchoolReviewCard from "@/components/internalTeacher/activeTask/SchoolReviewCard"

const ExternalActivityTask = () => {
  const [activeTab, setActiveTab] = useState("students")

  return (
    <div className="w-full space-y-6 font-urbanist pb-10">
      {/* Top Header Pill Tabs */}
      <ExternalActiveTaskHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab 1: Define Students */}
      {activeTab === "students" && <StepTwoStudentFeedback showTitle={false} />}

      {/* Tab 2: Invite Observer */}
      {activeTab === "observers" && <StepThreeInviteObservers showTitle={false} />}

      {/* Tab 3: Additional Review Areas */}
      {activeTab === "teaching-areas" && <StepOneTeachingAreas showTitle={false} />}

      {/* Tab 4: Share & Collect Feedback */}
      {activeTab === "share" && <StepFourShareFeedback showTitle={false} />}

      {/* Tab 5: Start Teaching Observation */}
      {activeTab === "self-review" && <SelfReviewCard />}

      {/* Tab 6: School Review */}
      {activeTab === "school-review" && <SchoolReviewCard />}
    </div>
  )
}

export default ExternalActivityTask
