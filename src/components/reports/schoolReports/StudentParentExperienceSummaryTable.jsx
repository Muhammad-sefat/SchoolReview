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

const SUMMARY_DATA = [
  {
    area: "Learning",
    rows: [
      {
        metric: "Learning Support",
        keyInsight: "Support is strong overall, but weaker in some classes where explanations and follow-up are less consistent.",
        suggestedApproach: "Review lowest-rated classes and share effective support practices.",
        satisfaction: "75%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "Individual Learning Support",
        keyInsight: "Students needing extra help are not always identified early, with inconsistent follow-up across subjects.",
        suggestedApproach: "Introduce simple tracking and regular check-ins for supported students.",
        satisfaction: "45%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "Homework Load",
        keyInsight: "Workload is uneven across subjects, creating peak pressure on certain days.",
        suggestedApproach: "Align homework deadlines across subjects to smooth workload.",
        satisfaction: "60%",
        trend: "15%",
        isUp: false,
      },
      {
        metric: "Future Readiness",
        keyInsight: "Students perform well in class but are less clear on how learning connects to future pathways.",
        suggestedApproach: "Add more applied learning and clearer career guidance.",
        satisfaction: "75%",
        trend: "9%",
        isUp: true,
      },
    ],
  },
  {
    area: "Wellbeing",
    rows: [
      {
        metric: "Safety",
        keyInsight: "Safety is high overall, but concerns are raised during breaks and less supervised times.",
        suggestedApproach: "Increase staff presence during breaks and transitions.",
        satisfaction: "85%",
        trend: "15%",
        isUp: false,
      },
      {
        metric: "Student Wellbeing",
        keyInsight: "Some students report stress linked to workload and uneven support across classes.",
        suggestedApproach: "Introduce regular wellbeing check-ins and improve support access.",
        satisfaction: "75%",
        trend: "15%",
        isUp: false,
      },
    ],
  },
  {
    area: "Teaching",
    rows: [
      {
        metric: "Teaching Quality",
        keyInsight: "Teaching quality varies between classes, particularly in clarity and engagement.",
        suggestedApproach: "Support lower-rated classes and share best practices.",
        satisfaction: "60%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "School Communication",
        keyInsight: "Communication is inconsistent, especially around expectations and academic updates.",
        suggestedApproach: "Standardise communication and clarify key information.",
        satisfaction: "40%",
        trend: "15%",
        isUp: false,
      },
      {
        metric: "Leadership",
        keyInsight: "Leadership is trusted but not always visible or clearly communicated.",
        suggestedApproach: "Increase visibility and provide regular updates.",
        satisfaction: "80%",
        trend: "15%",
        isUp: false,
      },
      {
        metric: "Classroom Management",
        keyInsight: "Behaviour management is inconsistent, affecting focus in some lessons.",
        suggestedApproach: "Align behaviour expectations and support teachers.",
        satisfaction: "45%",
        trend: "9%",
        isUp: true,
      },
    ],
  },
  {
    area: "Community",
    rows: [
      {
        metric: "Fairness",
        keyInsight: "Most feel treated fairly, but application of rules varies between classes.",
        suggestedApproach: "Ensure consistent application of school policies.",
        satisfaction: "85%",
        trend: "15%",
        isUp: false,
      },
      {
        metric: "Inclusion",
        keyInsight: "Some students do not feel fully included, particularly across groups or activities.",
        suggestedApproach: "Strengthen inclusion initiatives and monitor participation.",
        satisfaction: "40%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "Voice",
        keyInsight: "Students can share views, but opportunities are not always structured or consistent.",
        suggestedApproach: "Introduce regular, structured feedback channels.",
        satisfaction: "85%",
        trend: "15%",
        isUp: false,
      },
    ],
  },
  {
    area: "Facilities",
    rows: [
      {
        metric: "Activities",
        keyInsight: "Activity options are seen as limited or unevenly accessible.",
        suggestedApproach: "Expand and better promote activity offerings.",
        satisfaction: "75%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "Facilities",
        keyInsight: "Facilities are generally good, but some areas are outdated or overcrowded.",
        suggestedApproach: "Prioritise upgrades in most frequently raised areas.",
        satisfaction: "85%",
        trend: "9%",
        isUp: true,
      },
      {
        metric: "Value for Money",
        keyInsight: "Perceived value varies, particularly where expectations of support and communication are not met.",
        suggestedApproach: "Improve transparency on spending and communicate value clearly.",
        satisfaction: "85%",
        trend: "15%",
        isUp: false,
      },
    ],
  },
]

const StudentParentExperienceSummaryTable = () => {
  return (
    <div className="bg-[#F6F6F6] p-3 sm:p-4 rounded-[32px] border border-gray-200/60 font-urbanist">
      <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 font-urbanist">
        {/* Title 24px semibold */}
        <Title24 className="text-[#080808] font-semibold">Student & Parent Experience Summary</Title24>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <Table className="w-full text-left border-collapse">
            <TableHeader className="bg-[#F9FAFB]">
              <TableRow className="border-b border-gray-100 hover:bg-transparent">
                <TableHead className="w-[140px] text-[16px] font-normal text-secondary py-3.5 pl-4">Area</TableHead>
                <TableHead className="w-[180px] text-[16px] font-normal text-secondary py-3.5">Metric</TableHead>
                <TableHead className="text-[16px] font-normal text-secondary py-3.5">Key Insight</TableHead>
                <TableHead className="text-[16px] font-normal text-secondary py-3.5">Suggested Approach</TableHead>
                <TableHead className="w-[110px] text-[16px] font-normal text-secondary py-3.5 text-right">Satisfaction</TableHead>
                <TableHead className="w-[100px] text-[16px] font-normal text-secondary py-3.5 text-right pr-4">Trend</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="bg-white">
              {SUMMARY_DATA.map((group) => (
                <React.Fragment key={group.area}>
                  {group.rows.map((row, idx) => (
                    <TableRow
                      key={`${group.area}-${row.metric}`}
                      className="border-b border-gray-100/80 bg-white hover:bg-gray-50/50 transition-colors"
                    >
                      {/* Area Name rendered ONLY on first row of each group with pure white background */}
                      {idx === 0 ? (
                        <TableCell
                          rowSpan={group.rows.length}
                          className="align-top text-[16px] font-medium text-textPrimary py-4 pl-4 pr-4 bg-white border-r border-gray-50"
                        >
                          {group.area}
                        </TableCell>
                      ) : null}

                      {/* Metric */}
                      <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top bg-white">
                        {row.metric}
                      </TableCell>

                      {/* Key Insight */}
                      <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top leading-relaxed max-w-sm bg-white">
                        {row.keyInsight}
                      </TableCell>

                      {/* Suggested Approach */}
                      <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top leading-relaxed max-w-sm bg-white">
                        {row.suggestedApproach}
                      </TableCell>

                      {/* Satisfaction */}
                      <TableCell className="text-[16px] font-normal text-textPrimary py-4 align-top text-right font-medium bg-white">
                        {row.satisfaction}
                      </TableCell>

                      {/* Trend */}
                      <TableCell className="text-[16px] font-normal py-4 align-top text-right pr-4 bg-white">
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

export default StudentParentExperienceSummaryTable
