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
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5.07709 12.4992C4.76175 11.7903 4.58594 11.0018 4.58594 10.1708C4.58594 7.08446 7.01106 4.58252 10.0026 4.58252C12.9942 4.58252 15.4193 7.08446 15.4193 10.1708C15.4193 11.0018 15.2434 11.7903 14.9281 12.4992" stroke="#038AF9" strokeWidth="1.25" strokeLinecap="round" />
                            <path d="M10 1.66626V2.49959" stroke="#038AF9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18.3333 10H17.5" stroke="#038AF9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.4974 10H1.66406" stroke="#038AF9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.8939 4.10645L15.3047 4.6957" stroke="#038AF9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.69863 4.69692L4.10938 4.10767" stroke="#038AF9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.0989 16.0883C12.9409 15.8159 13.2786 15.0453 13.3736 14.2701C13.4019 14.0385 13.2114 13.8464 12.9781 13.8464L7.06543 13.8466C6.8241 13.8466 6.63028 14.0514 6.6591 14.291C6.75214 15.0647 6.98697 15.6299 7.87926 16.0883M12.0989 16.0883C12.0989 16.0883 8.02615 16.0883 7.87926 16.0883M12.0989 16.0883C11.9976 17.7091 11.5296 18.351 10.0071 18.333C8.37855 18.3631 8.00391 17.5697 7.87926 16.0883" stroke="#038AF9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
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
                              <span className="bg-[#E3F2FD] text-[#038AF9] font-semibold text-[11px] px-2 py-1 rounded-full">
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
                    <div className="flex items-center gap-1.5 font-normal text-[16px] text-textPrimary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89506 2.46196C9.44081 1.40152 10.9706 1.40152 11.5164 2.46196L13.3551 6.03523C13.3856 6.09452 13.443 6.13579 13.5093 6.14626L17.5062 6.77667C18.6917 6.96365 19.1641 8.40229 18.3164 9.24412L15.4551 12.0854C15.4076 12.1325 15.3858 12.199 15.3963 12.2647L16.027 16.2301C16.2139 17.4054 14.9765 18.2949 13.9061 17.7549L10.3011 15.9361C10.2412 15.9059 10.1702 15.9059 10.1103 15.9361L6.50534 17.7549C5.43494 18.2949 4.19759 17.4054 4.3845 16.2301L5.01518 12.2647C5.02562 12.199 5.00378 12.1325 4.95639 12.0854L2.09504 9.24412C1.24734 8.40229 1.71974 6.96365 2.90524 6.77667L6.90212 6.14626C6.96848 6.13579 7.02579 6.09452 7.0563 6.03523L8.89506 2.46196Z" fill="#038AF9" />
                      </svg>
                      <span>{row.score.toFixed(1)}</span>
                    </div>
                  </td>

                  {/* Trend Column (16px, color #66BB6A) */}
                  <td className="py-5 px-5 align-top whitespace-nowrap">
                    <span className="text-[#66BB6A] text-[16px] font-normal inline-flex items-center gap-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M14.5885 12.4993V5.41602H7.50521M14.2313 5.77318L5.42188 14.5827" stroke="#66BB6A" stroke-width="1.25" stroke-linecap="square" />
                      </svg>
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
