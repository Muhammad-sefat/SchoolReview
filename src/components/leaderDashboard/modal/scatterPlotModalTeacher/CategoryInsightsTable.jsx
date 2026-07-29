import React from "react"
import { Star, ArrowUpRight, ChevronDown, Lightbulb } from "lucide-react"

const CategoryInsightsTable = ({ rows = [], iconType = "chevron" }) => {
  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100/90 shadow-2xs overflow-hidden font-urbanist">
      <div className="w-full overflow-x-auto no-scrollbar">
        <table className="w-full min-w-[750px] border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-[#FAFAFA]/60">
              <th className="py-4 px-5 text-[16px] font-normal text-secondary w-[16%]">
                Metric
              </th>
              <th className="py-4 px-5 text-[16px] font-normal text-secondary w-[42%]">
                Insights
              </th>
              <th className="py-4 px-5 text-[16px] font-normal text-secondary w-[28%]">
                Suggested Approach
              </th>
              <th className="py-4 px-5 text-[16px] font-normal text-secondary w-[7%]">
                Score
              </th>
              <th className="py-4 px-5 text-[16px] font-normal text-secondary w-[7%]">
                Trend
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100/80">
            {rows.map((row, idx) => {
              const useLightbulb = row.iconType === "lightbulb" || iconType === "lightbulb"

              return (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  {/* Metric Column (16px) */}
                  <td className="py-5 px-5 align-top text-[16px] font-normal text-textPrimary">
                    {row.metric}
                  </td>

                  {/* Insights Column (16px) */}
                  <td className="py-5 px-5 align-top space-y-3">
                    <div className="flex items-start gap-3">
                      {useLightbulb ? (
                        <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                          <Lightbulb className="w-4 h-4 text-[#038AF9]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-[#038AF9] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <ChevronDown className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                      <p className="text-[16px] font-normal text-textPrimary leading-relaxed">
                        {row.insightText}
                      </p>
                    </div>

                    {/* Tag Pills */}
                    {row.tags && row.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2.5 pl-8 pt-1">
                        {row.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="bg-white text-[#1F1F21] border border-[#90D0FF] rounded-full px-4 py-1.5 text-[14px] font-normal inline-flex items-center gap-2 shadow-2xs"
                          >
                            <span>{tag.label}</span>
                            {tag.percentage && (
                              <span className="bg-[#E3F2FD] text-[#038AF9] font-semibold text-[11px] px-2 py-0.5 rounded-full">
                                {tag.percentage}
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>

                  {/* Suggested Approach Column (16px) */}
                  <td className="py-5 px-5 align-top text-[16px] font-normal text-textPrimary leading-relaxed">
                    {row.suggestedApproach}
                  </td>

                  {/* Score Column (16px) */}
                  <td className="py-5 px-5 align-top whitespace-nowrap">
                    <div className="flex items-center gap-1.5 font-bold text-[16px] text-textPrimary">
                      <Star className="w-4 h-4 text-[#038AF9] fill-[#038AF9]" />
                      <span>{row.score.toFixed(1)}</span>
                    </div>
                  </td>

                  {/* Trend Column (16px, color #66BB6A) */}
                  <td className="py-5 px-5 align-top whitespace-nowrap">
                    <span className="text-[#66BB6A] text-[16px] font-semibold inline-flex items-center gap-0.5">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      {row.trend}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CategoryInsightsTable
