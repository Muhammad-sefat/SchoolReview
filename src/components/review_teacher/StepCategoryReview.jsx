import React from "react"
import { Title32 } from "@/components/typho/Title"
import RatingItem from "./RatingItem"
import reviewDataRaw from "@/utils/teacherReviewData/Data.jsx"

// Category SVGs as provided by user
const ClassroomSafetyIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M21.0367 5C18.9119 3.17002 15.6632 2 12.0222 2C8.38135 2 5.13258 3.17002 3.00781 5V11C3.00781 19 12.0222 22 12.0222 22C12.0222 19 21.0367 19 21.0367 11V5Z" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
)

const TeachingQualityIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 15C10.7083 21 4.29167 15 2 21" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5039 15H17.0052C19.3622 15 20.5407 15 21.273 14.2678C22.0052 13.5355 22.0052 12.357 22.0052 10V8C22.0052 5.64298 22.0052 4.46447 21.273 3.73223C20.5407 3 19.3622 3 17.0052 3H13.0052C10.6482 3 9.46966 3 8.73743 3.73223C8.11702 4.35264 8.02228 5.29344 8.00781 7" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 15C8.88071 15 10 13.8807 10 12.5C10 11.1193 8.88071 10 7.5 10C6.11929 10 5 11.1193 5 12.5C5 13.8807 6.11929 15 7.5 15Z" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7H18M18 11H15" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const LearningEnvironmentIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M12.016 22L10.0128 16H2L4.00321 22H12.016ZM12.016 22H16.0224" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.0206 13V12.5C12.0206 10.6144 12.0206 9.67157 11.4339 9.08579C10.8472 8.5 9.90286 8.5 8.01422 8.5C6.12558 8.5 5.18126 8.5 4.59454 9.08579C4.00781 9.67157 4.00781 10.6144 4.00781 12.5V13" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.0298 13C19.0298 14.1046 18.133 15 17.0266 15C15.9203 15 15.0234 14.1046 17.0266 11C18.133 11 19.0298 11.8954 19.0298 13Z" stroke="#1F1F21" strokeWidth="1.5" />
    <path d="M10.0142 4C10.0142 5.10457 9.11736 6 8.01102 6C6.90468 6 6.00781 5.10457 6.00781 4C6.00781 2.89543 6.90468 2 8.01102 2C9.11736 2 10.0142 2.89543 10.0142 4Z" stroke="#1F1F21" strokeWidth="1.5" />
    <path d="M14.0234 17.5H20.0331C21.1394 17.5 22.0363 18.3954 22.0363 19.5V20C22.0363 21.1046 21.1394 22 20.0331 22H19.0315" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const LearningImpactIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M17.0238 12C17.0238 14.7614 14.7817 17 12.0158 17C9.24998 17 7.00781 14.7614 7.00781 12C7.00781 9.23858 9.24998 7 12.0158 7" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14.0192 2.20004C13.372 2.06886 12.702 2 12.016 2C6.48432 2 2 6.47715 2 12C2 17.5228 6.48432 22 12.016 22C17.5477 22 22.0321 17.5228 22.0321 12C22.0321 11.3151 21.963 10.6462 21.8317 10" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12.0469 11.9604L16.6071 7.40754M19.7693 4.34256L19.2152 2.35542C19.1132 2.02805 18.7186 1.89759 18.4527 2.11456C17.0143 3.28812 15.4474 4.86885 16.7271 7.36213C19.3053 8.56249 20.7771 6.94378 21.9057 5.58324C22.1302 5.31254 21.9948 4.90561 21.6567 4.80799L19.7693 4.34256Z" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const TeachingFeedbackIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
    <path d="M8.01562 13.5H16.0284M8.01562 8.5H12.022" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.10538 19C4.80319 18.8721 3.82767 18.4816 3.17345 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17345 3.67157C4.3469 2.5 6.23554 2.5 10.0128 2.5H14.0192C17.7965 2.5 19.6852 2.5 20.8586 3.67157C22.0321 4.84315 22.0321 6.72876 22.0321 10.5V11C22.0321 14.7712 22.0321 16.6569 20.8586 17.8284C19.6852 19 17.7965 19 14.0192 19C13.4578 19.0125 13.0107 19.0551 12.5715 19.155C11.3712 19.4309 10.2597 20.0441 9.16133 20.5789C7.59624 21.3408 6.8137 21.7218 6.32261 21.3651C5.3831 20.6665 6.30142 18.5019 6.50721 17.5" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const getCategoryIconComponent = (title = "") => {
  const t = title.toLowerCase()
  if (t.includes("climate") || t.includes("safety")) return ClassroomSafetyIcon
  if (t.includes("quality")) return TeachingQualityIcon
  if (t.includes("environment")) return LearningEnvironmentIcon
  if (t.includes("impact")) return LearningImpactIcon
  return TeachingFeedbackIcon
}

const StepCategoryReview = ({ categoryTitle, ratings, updateRating, role = "student" }) => {
  const flagKey =
    role === "observer"
      ? "has_observer_question"
      : role === "teacher"
      ? "has_teacher_question"
      : "has_student_question"

  const questionKey =
    role === "observer" ? "observer" : role === "teacher" ? "teacher" : "student"

  const categoryItems = reviewDataRaw.filter(
    (item) =>
      item.category_name?.toLowerCase() === categoryTitle?.toLowerCase() &&
      item[flagKey] === true &&
      item[questionKey]
  )

  const CategorySvgComp = getCategoryIconComponent(categoryTitle)

  return (
    <div className="space-y-4 font-urbanist">
      {/* Category Header Row: SVG Icon in bg-[#F7F7F7] rounded-full + Title32 */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#F7F7F7] flex items-center justify-center shrink-0">
          <CategorySvgComp className="w-6 h-6 text-[#1F1F21]" />
        </div>
        <Title32 className="text-[#1F1F21] leading-[48px] font-semibold text-[26px] sm:text-[32px] overflow-hidden text-ellipsis whitespace-nowrap">
          {categoryTitle}
        </Title32>
      </div>

      {/* Items List */}
      <div className="divide-y divide-[#EAEAEA]">
        {categoryItems.map((item, index) => (
          <RatingItem
            key={item.id}
            item={item}
            isFirst={index === 0}
            ratingData={ratings[item.id] || { rating: 0, selectedTags: [], details: "" }}
            onUpdateRating={updateRating}
            role={role}
          />
        ))}
      </div>
    </div>
  )
}

export default StepCategoryReview
