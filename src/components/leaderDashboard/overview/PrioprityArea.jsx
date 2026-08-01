import React from "react"

const PRIORITY_GROUPS = [
  {
    id: "needs-attention",
    title: "Needs Attention",
    borderColor: "border-[#E53935]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA]",
    items: [
      { label: "Facilities", score: "1.5" },
      { label: "Student Wellbeing", score: "2.5" },
      { label: "Future Readiness", score: "2.8" },
      { label: "Safety", score: "4.5" },
      { label: "Homework Load", score: "4.2" },
      { label: "Teaching Quality", score: "4.0" },
    ],
  },
  {
    id: "developing",
    title: "Developing",
    borderColor: "border-[#FB8C00]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA",
    items: [
      { label: "School Communication", score: "3.2" },
      { label: "Leadership", score: "3.8" },
      { label: "Activities", score: "3.0" },
      { label: "Fairness", score: "3.0" },
      { label: "Value for Money", score: "3.0" },
      { label: "Homework Load", score: "3.6" },
      { label: "Individual Learning Support", score: "3.5" },
    ],
  },
  {
    id: "performing-well",
    title: "Performing Well",
    borderColor: "border-[#66BB6A]",
    textColor: "text-[#080808]",
    bgColor: "bg-[#FAFAFA]",
    items: [
      { label: "Mostly connected", score: "4.0" },
      { label: "Learning Support", score: "4.8" },
      { label: "Inclusion", score: "4.5" },
      { label: "Voice", score: "4.5" },
      { label: "Classroom Management", score: "4.0" },
      { label: "Mostly connected", score: "4.0" },
    ],
  },
]

const PrioprityArea = ({
  groups = PRIORITY_GROUPS,
  title = "Priority Areas by Performance",
}) => {
  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-4 md:p-5 shadow-xs space-y-5 h-full flex flex-col justify-between">
      {/* Header Title */}
      <div>
        <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808] leading-snug">
          {title}
        </h3>
      </div>

      {/* Priority Category Groups */}
      <div className="space-y-6 flex-1 flex flex-col justify-start pt-2">
        {groups.map((group) => (
          <div key={group.id} className="space-y-4">
            {/* Category Pill Header */}
            <div>
              <span
                className={`inline-block px-3 py-2 rounded-full border text-sm font-medium tracking-tight ${group.borderColor} ${group.textColor} ${group.bgColor}`}
              >
                {group.title}
              </span>
            </div>

            {/* Chips List */}
            <div className="flex flex-wrap gap-3">
              {group.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#EAEAEA] rounded-full px-3 py-2 text-xs sm:text-sm font-normal text-textPrimary flex items-center gap-2.5 shadow-2xs hover:border-gray-300 transition-colors cursor-default"
                >
                  <span>{item.label}</span>
                  <span className="font-medium text-textPrimary">
                    {item.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PrioprityArea
