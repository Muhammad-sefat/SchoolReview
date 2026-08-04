import React from "react"

const INSIGHTS_BY_CATEGORY = {
  bullying: {
    title: "Bullying & Harassment",
    trend: "6.5%",
    totalLastYear: 18,
    keyInsights: [
      "A small number of bullying reports were recorded in the last 12 months",
      "Most incidents involved peer conflict during breaks",
      "Continued monitoring and early intervention are recommended",
    ],
    suggestedApproaches: [
      "A small number of bullying reports were recorded in the last 12 months",
      "Most incidents involved peer conflict during breaks",
      "Continued monitoring and early intervention are recommended",
    ],
  },
  safety: {
    title: "Safety & Environment",
    trend: "4.2%",
    totalLastYear: 12,
    keyInsights: [
      "Facilities reports have stabilized over recent months",
      "Physical environment upgrades completed in key common areas",
      "Routine safety checks performed on schedule",
    ],
    suggestedApproaches: [
      "Maintain monthly inspection logs for all sports facilities",
      "Increase lighting in secondary stairwells and outdoor paths",
      "Schedule quarterly student feedback on campus safety",
    ],
  },
  teaching: {
    title: "Teaching & Fairness",
    trend: "8.1%",
    totalLastYear: 24,
    keyInsights: [
      "Grading fairness perceptions improved significantly",
      "Student feedback indicates consistent homework policy enforcement",
      "Classroom support requests addressed within target SLA",
    ],
    suggestedApproaches: [
      "Standardize rubric sharing prior to major assessments",
      "Provide teacher training on restorative classroom practices",
      "Conduct bi-monthly check-ins on workload balance",
    ],
  },
  mental: {
    title: "Mental Health & Wellbeing",
    trend: "5.0%",
    totalLastYear: 30,
    keyInsights: [
      "Counseling service usage increased by 15% this quarter",
      "Peer support initiatives received positive student feedback",
      "Wellbeing workshops held across secondary grades",
    ],
    suggestedApproaches: [
      "Expand mindfulness and stress management workshops",
      "Train additional staff members in First Aid for Mental Health",
      "Streamline anonymous referral channels for students",
    ],
  },
  others: {
    title: "Others",
    trend: "3.0%",
    totalLastYear: 15,
    keyInsights: [
      "General feedback items resolved promptly by admin team",
      "Transportation and cafeteria inquiries handled efficiently",
      "No critical safety escalations recorded in this category",
    ],
    suggestedApproaches: [
      "Continue monitoring general feedback channels",
      "Provide automated resolution updates for submitted reports",
      "Review category classification quarterly for precision",
    ],
  },
}

const SafeguardingCategoryInsights = ({ selectedCategoryId = "bullying" }) => {
  const activeData =
    INSIGHTS_BY_CATEGORY[selectedCategoryId] || INSIGHTS_BY_CATEGORY.bullying

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between h-full font-urbanist">
      <div>
        {/* Header Title & Trend */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[24px] font-semibold text-[#080808]">
              {activeData.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-secondary mt-1">
              total last year: {activeData.totalLastYear}
            </p>
          </div>

          {/* Trend Pill */}
          <div className="flex items-center gap-1.5 text-base font-normal text-[#66BB6A] shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M14.5807 12.5V5.41663H7.4974M14.2235 5.77379L5.41406 14.5833" stroke="#66BB6A" strokeWidth="1.25" strokeLinecap="square" />
            </svg>
            <span>{activeData.trend}</span>
          </div>
        </div>

        {/* Dotted Separator */}
        <div className="border-b border-dashed border-gray-200/80 my-4" />

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Key Insights Section */}
          <div className="space-y-3">
            <h4 className="text-[18px] font-medium text-textPrimary">
              Key Insights
            </h4>
            <div className="space-y-2.5 text-base">
              {activeData.keyInsights.map((insight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-sm bg-gray-200 shrink-0 mt-1.5" />
                  <p className="text-textPrimary font-normal leading-normal">
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Approaches Section */}
          <div className="space-y-3">
            <h4 className="text-[18px] font-medium text-textPrimary">
              Suggested Approaches
            </h4>
            <div className="space-y-2.5 text-base">
              {activeData.suggestedApproaches.map((approach, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-sm bg-gray-200 shrink-0 mt-1.5" />
                  <p className="text-textPrimary font-normal leading-normal">
                    {approach}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SafeguardingCategoryInsights
