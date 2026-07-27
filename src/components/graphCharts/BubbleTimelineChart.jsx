import React from "react"
import { ArrowUpRight } from "lucide-react"

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

const DEFAULT_CATEGORIES = [
  {
    id: "bullying",
    name: "Bullying & Harassment",
    color: "#8DC613",
    bubbles: [
      { month: 3, size: 8 }, { month: 3.3, size: 12 }, { month: 3.6, size: 10 },
      { month: 4, size: 7 }, { month: 4.4, size: 14 }, { month: 4.7, size: 12 },
      { month: 5, size: 9 }, { month: 5.3, size: 16 }, { month: 5.7, size: 18 },
      { month: 6, size: 20 }, { month: 6.4, size: 12 }, { month: 6.8, size: 8 },
      { month: 7.1, size: 7 },
    ],
  },
  {
    id: "safety",
    name: "Safety & Environment",
    color: "#723CEB",
    bubbles: [
      { month: 3.4, size: 9 }, { month: 3.6, size: 13 }, { month: 3.8, size: 11 },
      { month: 4.1, size: 10 }, { month: 4.5, size: 7 }, { month: 4.8, size: 15 },
      { month: 5.2, size: 17 }, { month: 5.6, size: 22 }, { month: 6.0, size: 18 },
      { month: 6.4, size: 10 }, { month: 6.8, size: 9 }, { month: 7.2, size: 7 },
    ],
  },
  {
    id: "teaching",
    name: "Teaching & Fairness",
    color: "#B1DBFD",
    bubbles: [
      { month: 4.4, size: 10 }, { month: 4.8, size: 18 }, { month: 5.2, size: 16 },
      { month: 5.6, size: 20 }, { month: 6.0, size: 17 }, { month: 6.4, size: 13 },
      { month: 6.7, size: 9 }, { month: 7.0, size: 8 },
    ],
  },
  {
    id: "mental",
    name: "Mental health & wellbeing",
    color: "#C7B0F7",
    bubbles: [
      { month: 3.8, size: 12 }, { month: 4.4, size: 7 }, { month: 5.0, size: 11 },
      { month: 5.3, size: 14 }, { month: 5.9, size: 10 }, { month: 6.3, size: 15 },
      { month: 6.6, size: 19 }, { month: 7.0, size: 16 }, { month: 7.3, size: 11 },
    ],
  },
  {
    id: "others",
    name: "Others",
    color: "#038AF9",
    bubbles: [
      { month: 4.5, size: 10 }, { month: 4.9, size: 19 }, { month: 5.3, size: 16 },
      { month: 5.7, size: 21 }, { month: 6.1, size: 17 }, { month: 6.4, size: 13 },
      { month: 6.8, size: 11 }, { month: 7.1, size: 9 },
    ],
  },
]

const BubbleTimelineChart = ({
  title = "Safeguarding Reports",
  subtitle = "Select a category to view details.",
  categories = DEFAULT_CATEGORIES,
  selectedCategory = "bullying",
  onSelectCategory,
  onExpand,
}) => {
  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between h-full">
      {/* Header Area */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808] leading-snug">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm font-normal text-[#5A5A5A] mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Badge Action */}
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 text-[#1F1F21] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span>20</span>
            <button
              type="button"
              onClick={onExpand}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
              title="Expand chart"
            >
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Timeline Grid */}
      <div className="flex-1 w-full overflow-x-auto no-scrollbar py-2">
        <div className="min-w-[620px] space-y-6">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id

            return (
              <div key={cat.id} className="relative flex items-center">
                {/* Left Category Label */}
                <div className="w-36 shrink-0 pr-4">
                  <button
                    type="button"
                    onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                    className={`text-left text-xs sm:text-sm font-medium transition-colors cursor-pointer leading-tight ${
                      isSelected
                        ? "text-[#038AF9] font-bold underline"
                        : "text-[#5A5A5A] hover:text-[#1F1F21]"
                    }`}
                  >
                    {cat.name}
                  </button>
                </div>

                {/* Right Timeline Grid Row */}
                <div className="flex-1 h-10 relative flex items-center">
                  {/* Subtle Grid Line */}
                  <div className="w-full h-[1px] bg-gray-200/80 absolute inset-x-0 top-1/2 -translate-y-1/2" />

                  {/* Bubbles Container */}
                  <div className="w-full h-full relative">
                    {cat.bubbles.map((b, idx) => {
                      // Map month 0..11 to percentage 0%..100%
                      const leftPercent = (b.month / 11) * 100

                      return (
                        <div
                          key={idx}
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full transition-transform hover:scale-125 cursor-pointer"
                          style={{
                            left: `${leftPercent}%`,
                            width: `${b.size * 1.3}px`,
                            height: `${b.size * 1.3}px`,
                            backgroundColor: cat.color,
                            opacity: 0.85,
                          }}
                          title={`${cat.name}: Month ${Math.round(b.month + 1)}`}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Month Axis Labels Row */}
          <div className="flex items-center pl-36 pt-2">
            <div className="w-full flex justify-between text-xs font-medium text-gray-400">
              {MONTHS.map((month) => (
                <span key={month} className="w-8 text-center">
                  {month}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BubbleTimelineChart
