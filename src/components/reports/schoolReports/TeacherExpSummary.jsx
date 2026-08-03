import React from "react"
import { Title24 } from "@/components/typho/Title"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const UpTrendArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path d="M14.5846 12.4993V5.41602H7.5013M14.2274 5.77318L5.41797 14.5827" stroke="#66BB6A" strokeWidth="1.25" strokeLinecap="square" />
  </svg>
)

const DownTrendArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path d="M7.4987 14.5846H14.582V7.5013M14.2249 14.2274L5.41536 5.41797" stroke="#E53935" strokeWidth="1.25" strokeLinecap="square" />
  </svg>
)

const TEACHER_SUMMARY_DATA = [
  {
    area: "Wellbeing",
    rows: [
      {
        metric: "Workload",
        keyInsight: "Many teachers do not consistently agree that workload is manageable, especially during reporting and peak periods.",
        suggestedApproach: "Remove or simplify one major admin task this term (e.g. reduce marking or reporting requirements).",
        satisfaction: "75%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "Staff Wellbeing",
        keyInsight: "Staff are mixed on whether wellbeing is truly supported, with support not always visible day to day.",
        suggestedApproach: "Run a short monthly team check-in to identify and address wellbeing concerns.",
        satisfaction: "45%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "Safety",
        keyInsight: "Most teachers feel safe, though concerns exist during breaks and less structured times.",
        suggestedApproach: "Increase visible staff presence during breaks and transitions starting this term.",
        satisfaction: "60%",
        trend: "15%",
        isUp: false,
      },
    ],
  },
  {
    area: "Leadership",
    rows: [
      {
        metric: "Leadership",
        keyInsight: "Not all staff agree leadership is consistently effective, particularly around clarity and follow-through.",
        suggestedApproach: "Set and share 3 clear school priorities for this term, with a brief monthly progress update.",
        satisfaction: "75%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "Voice",
        keyInsight: "Many staff are unsure whether their input leads to change.",
        suggestedApproach: "Publish a monthly \"You said → We did\" update showing actions taken from staff feedback.",
        satisfaction: "85%",
        trend: "15%",
        isUp: false,
      },
      {
        metric: "Communication",
        keyInsight: "Communication is not always clear or timely, especially during changes.",
        suggestedApproach: "Move to one weekly staff update as the single source of key information.",
        satisfaction: "75%",
        trend: "15%",
        isUp: false,
      },
    ],
  },
  {
    area: "Culture",
    rows: [
      {
        metric: "Team Culture",
        keyInsight: "Teams work well in some areas, but not consistently across departments.",
        suggestedApproach: "Share one example of strong team practice in the next staff meeting.",
        satisfaction: "60%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "Fairness & Inclusion",
        keyInsight: "Staff feel respected overall, but experience inconsistency in decisions and expectations.",
        suggestedApproach: "Publish clear criteria for duties, roles, and opportunities this term.",
        satisfaction: "40%",
        trend: "15%",
        isUp: false,
      },
      {
        metric: "Teaching Quality",
        keyInsight: "Teaching standards are seen as high, but not consistent across all classrooms.",
        suggestedApproach: "Introduce one short peer observation focused on a single teaching practice this term.",
        satisfaction: "80%",
        trend: "15%",
        isUp: false,
      },
    ],
  },
  {
    area: "Resources & Growth",
    rows: [
      {
        metric: "Resources",
        keyInsight: "Not all teachers feel they have the resources they need, with variation across teams.",
        suggestedApproach: "Ask staff to list top 3 missing resources and address at least one this term.",
        satisfaction: "45%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "Professional Growth",
        keyInsight: "Feedback is valued, but not always regular or helpful for improvement.",
        suggestedApproach: "Run one short feedback conversation with each teacher this term.",
        satisfaction: "85%",
        trend: "15%",
        isUp: false,
      },
      {
        metric: "Compensation",
        keyInsight: "Less than half of staff feel fairly compensated, often linked to workload.",
        suggestedApproach: "Offer one form of time-based recognition this term (e.g. reduced duties for key roles).",
        satisfaction: "40%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "Facilities",
        keyInsight: "Facilities are generally usable, but some areas need improvement.",
        suggestedApproach: "Fix the top 1–2 most reported facility issues this term.",
        satisfaction: "85%",
        trend: "15%",
        isUp: false,
      },
    ],
  },
]

const TeacherExpSummary = () => {
  return (
    <div className="bg-[#F6F6F6] p-2 rounded-4xl border border-gray-200/60 font-urbanist w-full max-w-full">
      <div className="w-full bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs space-y-6 font-urbanist">
        {/* Title 24px semibold */}
        <Title24 className="text-[#080808] font-semibold">Teacher Experience Summary</Title24>

        {/* Responsive Table with overflow-x-auto and min-w-[850px] */}
        <div className="overflow-x-auto w-full">
          <Table
            containerClassName="border-0 border-none bg-transparent shadow-none rounded-none w-full"
            className="w-full min-w-[850px] text-left border-collapse border-0 border-none"
          >
            <TableHeader className="bg-[#F9FAFB]">
              <TableRow className="border-b border-gray-100 hover:bg-transparent">
                <TableHead className="w-[150px] text-[16px] font-normal text-secondary py-3.5 pl-4">Area</TableHead>
                <TableHead className="w-[180px] text-[16px] font-normal text-secondary py-3.5">Metric</TableHead>
                <TableHead className="text-[16px] font-normal text-secondary py-3.5">Key Insight</TableHead>
                <TableHead className="text-[16px] font-normal text-secondary py-3.5">Suggested Approach</TableHead>
                <TableHead className="w-[110px] text-[16px] font-normal text-secondary py-3.5 text-right">Satisfaction</TableHead>
                <TableHead className="w-[100px] text-[16px] font-normal text-secondary py-3.5 text-right pr-4">Trend</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="bg-white border-0 border-none">
              {TEACHER_SUMMARY_DATA.map((group) => (
                <React.Fragment key={group.area}>
                  {group.rows.map((row, idx) => (
                    <TableRow
                      key={`${group.area}-${row.metric}`}
                      className="border-0 border-none hover:bg-gray-50/40 transition-colors"
                    >
                      {/* Area Name rendered ONLY on first row of each group */}
                      {idx === 0 ? (
                        <TableCell
                          rowSpan={group.rows.length}
                          className="align-top text-[16px] font-medium text-textPrimary py-4 pl-4 pr-4 bg-white border-0 border-none"
                        >
                          {group.area}
                        </TableCell>
                      ) : null}

                      {/* Metric */}
                      <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top bg-white border-0 border-none">
                        {row.metric}
                      </TableCell>

                      {/* Key Insight */}
                      <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top leading-relaxed max-w-sm bg-white border-0 border-none">
                        {row.keyInsight}
                      </TableCell>

                      {/* Suggested Approach */}
                      <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top leading-relaxed max-w-sm bg-white border-0 border-none">
                        {row.suggestedApproach}
                      </TableCell>

                      {/* Satisfaction */}
                      <TableCell className="text-[16px] font-normal text-textPrimary py-4 align-top text-right font-medium bg-white border-0 border-none">
                        {row.satisfaction}
                      </TableCell>

                      {/* Trend */}
                      <TableCell className="text-[16px] font-normal py-4 align-top text-right pr-4 bg-white border-0 border-none">
                        <div
                          className={`inline-flex items-center justify-end gap-1 text-[16px] font-medium ${
                            row.isUp ? "text-[#66BB6A]" : "text-[#E53935]"
                          }`}
                        >
                          {row.isUp ? <UpTrendArrow /> : <DownTrendArrow />}
                          <span>{row.trend}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default TeacherExpSummary