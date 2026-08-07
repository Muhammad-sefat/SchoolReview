import React, { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

const EVALUATOR_PRIORITY_GROUPS = [
  {
    id: "needs-support",
    title: "Needs Support",
    borderColor: "border-[#E53935]",
    textColor: "text-[#E53935]",
    bgColor: "bg-[#FAFAFA]",
    count: "+3",
    items: [
      { label: "Kantonsschule Zug (KSZ)", score: "1.5" },
      { label: "Pioneer Swiss School", score: "4.5" },
      { label: "Pioneer Swiss School", score: "4.5" },
      { label: "Pioneer Swiss School", score: "4.5" },
    ],
  },
  {
    id: "developing",
    title: "Developing",
    borderColor: "border-[#FB8C00]",
    textColor: "text-[#FB8C00]",
    bgColor: "bg-[#FAFAFA]",
    count: "+3",
    items: [
      { label: "Fachmittelschule Zug (FMS Zug)", score: "3.0" },
    ],
  },
  {
    id: "effective",
    title: "Effective",
    borderColor: "border-[#66BB6A]",
    textColor: "text-[#66BB6A]",
    bgColor: "bg-[#FAFAFA]",
    count: "+3",
    items: [
      { label: "Kantonsschule Rotkreuz", score: "4.5" },
      { label: "Pioneer Swiss School", score: "4.5" },
      { label: "Kantonsschule Menzingen (KSM)", score: "4.2" },

    ],
  },
]

const EvaluatorPriorityAreas = ({ onSelectSchool }) => {
  const [expandedGroups, setExpandedGroups] = useState({
    "needs-support": true,
    developing: true,
    effective: true,
  })

  const toggleGroup = (groupId) => {
    setExpandedGroups((prev) => ({ ...prev, [groupId]: !prev[groupId] }))
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-4 md:p-6 shadow-xs space-y-5 h-full flex flex-col justify-between font-urbanist">
      {/* Header Title */}
      <div>
        <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808] leading-snug">
          Priority Areas by Performance
        </h3>
      </div>

      {/* Priority Category Groups */}
      <div className="space-y-6 flex-1 flex flex-col justify-start pt-1">
        {EVALUATOR_PRIORITY_GROUPS.map((group) => {
          const isExpanded = expandedGroups[group.id]

          return (
            <div key={group.id} className="space-y-3">
              {/* Category Pill Header with Arrow & Count */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-sm font-medium tracking-tight transition-colors cursor-pointer ${group.borderColor} text-textBlack ${group.bgColor} hover:opacity-80`}
                >
                  <span>{group.title}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                  <span className="text-sm text-secondary font-medium pl-0.5">{group.count}</span>
                </button>
              </div>

              {/* Chips List */}
              {isExpanded && (
                <div className="flex flex-wrap gap-2.5 pt-0.5 animate-fadeIn">
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => onSelectSchool && onSelectSchool(item.label)}
                      className="bg-white border border-[#EAEAEA] rounded-full px-3.5 py-2 text-xs sm:text-sm font-normal text-textPrimary flex items-center gap-2.5 shadow-2xs hover:border-gray-300 transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <span className="font-semibold text-textPrimary">
                        {item.score}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EvaluatorPriorityAreas
