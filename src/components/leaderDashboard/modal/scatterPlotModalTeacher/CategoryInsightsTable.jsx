import React, { useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const METRIC_SCORE_MAP = {
  // Needs Attention (1.0 - 2.0)
  Pace: 1.5,
  Dialogue: 1.0,
  Clarity: 1.5,
  Purpose: 1.0,
  "Classroom Safety": 1.5,
  "Lesson Coherence": 1.5,

  // Developing (2.0 - 4.0)
  Behavior: 2.5,
  Behaviour: 2.5,
  Inclusion: 3.5,
  Support: 3.0,
  Progression: 2.5,
  Challenge: 3.0,
  Engagement: 3.5,
  Feedback: 2.8,
  "Student Wellbeing": 3.2,
  "Meaningful Assessment": 3.0,
  "Adaptive Teaching": 3.5,

  // Strong (4.0 - 5.0)
  Fairness: 4.5,
  "Ongoing Improvement": 4.8,
}

const getScoreForRow = (row, index) => {
  if (row.score !== undefined && row.score !== 4.5) {
    return Number(row.score)
  }
  if (METRIC_SCORE_MAP[row.metric]) {
    return METRIC_SCORE_MAP[row.metric]
  }
  const pattern = [1.5, 1.0, 2.5, 3.5, 3.0, 4.5]
  return pattern[index % pattern.length]
}

const DEFAULT_DEMO_ROWS = [
  {
    metric: "Pace",
    score: 1.5,
    trend: "9%",
    insightText: "Lesson pacing is not consistently matched to student understanding.",
    tags: [
      { label: "Hard to keep up", percentage: "48%" },
      { label: "Sometimes rushed", percentage: "20%" },
      { label: "Not enough thinking time", percentage: "18%" },
    ],
    observerInput: "Pace sometimes moves ahead of student understanding.",
    yourInput: "I sometimes move to independent work before checking readiness.",
    suggestedApproach:
      "Build in short pause points during lessons to check readiness (e.g. quick questions, mini whiteboards). Adjust pacing based on responses before moving on.",
  },
  {
    metric: "Dialogue",
    score: 1.0,
    trend: "9%",
    insightText: "Student dialogue and discussions require structured guidance.",
    tags: [
      { label: "Few chances to share", percentage: "48%" },
      { label: "Same students speak", percentage: "20%" },
      { label: "Ideas not fully explored", percentage: "20%" },
    ],
    observerInput: "Teacher talk time is high during explanations.",
    yourInput: "I tend to answer my own questions when students pause.",
    suggestedApproach:
      "Use structured discussion routines (e.g. think-pair-share, cold call, sentence stems) to ensure all students explain their thinking.",
  },
  {
    metric: "Behaviour",
    score: 2.5,
    trend: "9%",
    insightText: "Classroom expectations are clear but enforcement varies.",
    tags: [
      { label: "Rules unclear", percentage: "48%" },
      { label: "Not always fair", percentage: "20%" },
    ],
    observerInput: "Transitions between activities lead to minor off-task behavior.",
    yourInput: "I spend significant time redirecting side conversations during group work.",
    suggestedApproach:
      "Re-teach and reinforce clear routines and expectations. Apply them consistently to build predictability and a stable classroom environment.",
  },
  {
    metric: "Inclusion",
    score: 3.5,
    trend: "9%",
    insightText: "Not all students consistently feel a strong sense of belonging in the classroom.",
    tags: [
      { label: "Often feel left out", percentage: "48%" },
      { label: "Sometimes feel left out", percentage: "20%" },
    ],
    observerInput: "Eager volunteers dominate whole-class Q&A.",
    yourInput: "I need strategies to draw out quieter students without putting them on the spot.",
    suggestedApproach:
      "Use inclusive strategies (e.g. targeted questioning, group roles, positive recognition) to ensure all students feel seen and involved.",
  },
  {
    metric: "Support",
    score: 3.0,
    trend: "9%",
    status: "Developing",
    insightText: "Academic support is available when requested.",
    tags: [
      { label: "Need more prompt help", percentage: "28%" },
    ],
    observerInput: "Scaffolding is effective for struggling students.",
    yourInput: "I circulate during individual practice to offer targeted help.",
    suggestedApproach:
      "Use structured support strategies (e.g. check-in points, help signals, targeted circulation) to ensure struggling students are identified and supported quickly.",
  },
  {
    metric: "Fairness",
    score: 4.5,
    trend: "9%",
    insightText: "Students perceive grading and classroom interactions as consistently fair.",
    tags: [
      { label: "Fair treatment", percentage: "92%" },
    ],
    observerInput: "Teacher uses objective criteria and positive reinforcement uniformly.",
    yourInput: "I apply rubrics transparently and give clear feedback.",
    suggestedApproach:
      "Make behaviour expectations explicit and consistently applied. Briefly explain decisions to reinforce fairness and transparency.",
  },
]

const CategoryInsightsTable = ({ rows = [] }) => {
  const baseRows = rows && rows.length > 0 ? rows : DEFAULT_DEMO_ROWS

  // Compute normalized scores and statuses:
  // 1.0 to 2.0 -> Needs Attention
  // 2.0 to 4.0 -> Developing
  // 4.0 to 5.0 -> Strong
  const itemsToRender = baseRows.map((row, idx) => {
    const computedScore = getScoreForRow(row, idx)
    let status = "Developing"
    if (computedScore < 2.0) status = "Needs Attention"
    else if (computedScore >= 4.0) status = "Strong"

    return {
      ...row,
      score: computedScore,
      status: row.status || status,
    }
  })

  // Always set default expanded item to 1st item of current tab/rows
  const firstMetric = itemsToRender[0]?.metric || "Pace"
  const [expandedMetric, setExpandedMetric] = useState(firstMetric)

  // Reset expanded item to 1st item whenever sub-tab/rows change
  useEffect(() => {
    if (itemsToRender.length > 0) {
      setExpandedMetric(itemsToRender[0].metric)
    }
  }, [rows])

  // Group items into Needs Attention, Developing, and Strong with exact design rules
  const groups = [
    {
      title: "Needs Attention",
      badgeStyle: "border border-[#E53935] bg-[#FAFAFA]",
      items: itemsToRender.filter((r) => r.status === "Needs Attention"),
    },
    {
      title: "Developing",
      badgeStyle: "border border-[#FB8C00] bg-[#FAFAFA]",
      items: itemsToRender.filter((r) => r.status === "Developing"),
    },
    {
      title: "Strong",
      badgeStyle: "border border-[#66BB6A] bg-[#FAFAFA]",
      items: itemsToRender.filter((r) => r.status === "Strong"),
    },
  ]

  const renderCard = (row) => {
    const isExpanded = expandedMetric === row.metric
    const observerText =
      row.observerInput ||
      row.observerText ||
      `${row.metric} sometimes moves ahead of student understanding.`
    const yourText =
      row.yourInput ||
      row.teacherText ||
      "I sometimes move to independent work before checking readiness."

    // Header items layout with fixed-width title column so stars align in a straight vertical line like Image 2!
    const renderHeaderContent = () => (
      <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
        {/* Chevron Icon */}
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-[#038AF9] shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#038AF9] shrink-0 transition-transform group-hover:scale-110" />
        )}

        {/* Title Text Area - Fixed width (w-[150px] sm:w-[190px]) so all stars align vertically across rows! */}
        <div className="w-[120px]  shrink-0">
          <span className="text-[18px] font-normal text-[#1F1F21] leading-[28px] font-urbanist block truncate">
            {row.metric}
          </span>
        </div>

        {/* Star Icon SVG & Rating Score Text - Positioned at fixed column position */}
        <div className="flex items-center gap-1.5 shrink-0 min-w-[70px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.89506 2.46135C9.44081 1.40091 10.9706 1.40091 11.5164 2.46135L13.3551 6.03462C13.3856 6.09391 13.443 6.13518 13.5093 6.14565L17.5062 6.77605C18.6917 6.96304 19.1641 8.40168 18.3164 9.24351L15.4551 12.0848C15.4076 12.1318 15.3858 12.1984 15.3963 12.2641L16.027 16.2295C16.2139 17.4048 14.9765 18.2943 13.9061 17.7543L10.3011 15.9355C10.2412 15.9053 10.1702 15.9053 10.1103 15.9355L6.50534 17.7543C5.43494 18.2943 4.19759 17.4048 4.3845 16.2295L5.01518 12.2641C5.02562 12.1984 5.00378 12.1318 4.95639 12.0848L2.09504 9.24351C1.24734 8.40168 1.71974 6.96304 2.90524 6.77605L6.90212 6.14565C6.96848 6.13518 7.02579 6.09391 7.0563 6.03462L8.89506 2.46135Z" fill="#038AF9" />
          </svg>
          <span className="text-[16px] font-normal text-[#080808] leading-[24px] font-urbanist">
            {Number(row.score).toFixed(1)}
          </span>
        </div>

        {/* Up Arrow SVG & Trend Text */}
        <div className="flex items-center gap-1 shrink-0 -ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14.5885 12.4993V5.41602H7.50521M14.2313 5.77318L5.42188 14.5827" stroke="#66BB6A" strokeWidth="1.25" strokeLinecap="square" />
          </svg>
          <span className="text-[16px] font-normal text-[#66BB6A] leading-[24px] font-urbanist">
            {row.trend || "9%"}
          </span>
        </div>
      </div>
    )

    if (!isExpanded) {
      return (
        <div
          key={row.metric}
          onClick={() => setExpandedMetric(row.metric)}
          className="bg-[#F6F6F6] hover:bg-[#EFEFEF] rounded-[16px] px-5 py-4 flex items-center justify-between cursor-pointer transition-colors group"
        >
          {renderHeaderContent()}
        </div>
      )
    }

    return (
      <div
        key={row.metric}
        className="bg-white border border-[#BFBFBF] rounded-[24px] p-5 sm:p-6 space-y-4 font-urbanist animate-fadeIn shadow-2xs"
      >
        {/* Expanded Header */}
        <div
          onClick={() => setExpandedMetric(null)}
          className="cursor-pointer pb-2"
        >
          {renderHeaderContent()}
        </div>

        {/* 2-Column Content Area with Tall Vertical Border Divider Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-1 font-urbanist">
          {/* Left Column: Insight, Tags, Observer & Your Input */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="text-[#5A5A5A] text-[16px] font-normal leading-[24px] font-urbanist truncate mb-2">
                Insight
              </div>
              <p className="text-[#1F1F21] text-[16px] font-normal leading-[24px] font-urbanist">
                {row.insightText}
              </p>
            </div>

            {/* Student Percentage Tag Pills */}
            {row.tags && row.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {row.tags.map((tag, tagIdx) => (
                  <div
                    key={tagIdx}
                    className="rounded-[48px] border border-[#B1DBFD] bg-white text-[#1F1F21] text-[16px] font-normal leading-[24px] pl-3 pr-2 py-1.5 inline-flex items-center gap-2 font-urbanist shadow-2xs"
                  >
                    <span>{tag.label}</span>
                    {tag.percentage && (
                      <span className="bg-[#038AF9]/15 text-[#038AF9] font-medium text-[12px] px-2 py-0.5 rounded-full">
                        {tag.percentage}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Dotted Separator Line */}
            <div className="border-b border-dashed border-[#BFBFBF]/60 my-3" />

            {/* Observer & Your Inputs */}
            <div className="space-y-2.5 pt-1 font-urbanist">
              <div className="flex items-start gap-2 text-[16px]">
                <span className="text-[#5A5A5A] text-[16px] font-normal leading-[24px] font-urbanist shrink-0 truncate">
                  Observer Input:
                </span>
                <span className="text-[#1F1F21] text-[16px] font-normal leading-[24px] font-urbanist">
                  {observerText}
                </span>
              </div>
              <div className="flex items-start gap-2 text-[16px]">
                <span className="text-[#5A5A5A] text-[16px] font-normal leading-[24px] font-urbanist shrink-0 truncate">
                  Your Input:
                </span>
                <span className="text-[#1F1F21] text-[16px] font-normal leading-[24px] font-urbanist">
                  {yourText}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Suggested Approach with Tall Vertical Middle Border Divider */}
          <div className="lg:col-span-5 lg:border-l lg:border-[#BFBFBF]/60 lg:pl-8 space-y-1.5 pt-1 font-urbanist">
            <div className="text-[#5A5A5A] text-[16px] font-normal leading-[24px] font-urbanist truncate mb-2">
              Suggested Approach
            </div>
            <p className="text-[#1F1F21] text-[16px] font-normal leading-[24px] font-urbanist">
              {row.suggestedApproach}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full space-y-6 font-urbanist">
      {groups.map((group) => {
        if (!group.items || group.items.length === 0) return null

        return (
          <div key={group.title} className="space-y-5">
            {/* Status Pill Badge Header */}
            <div>
              <span
                className={`rounded-[104px] text-[#080808] text-[14px] font-medium leading-[20px] font-urbanist text-center px-3 py-1.5 inline-block ${group.badgeStyle}`}
              >
                {group.title}
              </span>
            </div>

            {/* Group Accordion Cards */}
            <div className="space-y-5">
              {group.items.map((row) => renderCard(row))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryInsightsTable
