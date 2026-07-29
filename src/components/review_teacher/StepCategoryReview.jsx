import React from "react"
import { Title32 } from "@/components/typho/Title"
import RatingItem from "./RatingItem"
import reviewDataRaw from "@/utils/teacherReviewData/Data.jsx"

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

  return (
    <div className="space-y-6">
      {/* Category Title */}
      <Title32 className="font-medium text-foreground text-[28px] lg:text-[32px]">
        {categoryTitle}
      </Title32>

      {/* Items List */}
      <div className="divide-y divide-border/40">
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
