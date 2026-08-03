import React from "react"
import { Title48, Title24 } from "@/components/typho/Title"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const AlignmentBadgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
    <path d="M1.81576 10.8547C1.45117 10.8547 1.16254 10.7498 0.94987 10.5402C0.737196 10.3306 0.630859 10.0465 0.630859 9.68799V6.40674C0.630859 6.04823 0.737196 5.76416 0.94987 5.55452C1.16254 5.34489 1.45117 5.24007 1.81576 5.24007H5.0651C5.42969 5.24007 5.7168 5.34489 5.92643 5.55452C6.13911 5.76416 6.24544 6.04823 6.24544 6.40674V9.68799C6.24544 10.0465 6.13911 10.3306 5.92643 10.5402C5.7168 10.7498 5.42969 10.8547 5.0651 10.8547H1.81576ZM1.9388 9.90218H4.9375C5.04991 9.90218 5.1365 9.87028 5.19727 9.80648C5.26107 9.73964 5.29297 9.65153 5.29297 9.54216V6.55713C5.29297 6.44472 5.26107 6.35661 5.19727 6.29281C5.1365 6.22597 5.04991 6.19255 4.9375 6.19255H1.9388C1.82943 6.19255 1.74284 6.22597 1.67904 6.29281C1.61827 6.35661 1.58789 6.44472 1.58789 6.55713V9.54216C1.58789 9.65153 1.61827 9.73964 1.67904 9.80648C1.74284 9.87028 1.82943 9.90218 1.9388 9.90218ZM8 12.9601C7.86632 12.9601 7.75391 12.9161 7.66276 12.828C7.57465 12.7399 7.5306 12.6305 7.5306 12.4998V3.59489C7.5306 3.46425 7.57465 3.35639 7.66276 3.27132C7.75391 3.18321 7.86632 3.13916 8 3.13916C8.13672 3.13916 8.24913 3.18321 8.33724 3.27132C8.42839 3.35639 8.47396 3.46425 8.47396 3.59489V12.4998C8.47396 12.6305 8.42839 12.7399 8.33724 12.828C8.24913 12.9161 8.13672 12.9601 8 12.9601ZM10.9395 10.8547C10.5749 10.8547 10.2862 10.7498 10.0736 10.5402C9.86089 10.3306 9.75456 10.0465 9.75456 9.68799V6.40674C9.75456 6.04823 9.86089 5.76416 10.0736 5.55452C10.2862 5.34489 10.5749 5.24007 10.9395 5.24007H14.1842C14.5488 5.24007 14.8375 5.34489 15.0501 5.55452C15.2628 5.76416 15.3691 6.04823 15.3691 6.40674V9.68799C15.3691 10.0465 15.2628 10.3306 15.0501 10.5402C14.8375 10.7498 14.5488 10.8547 14.1842 10.8547H10.9395ZM11.0625 9.90218H14.0612C14.1706 9.90218 14.2572 9.87028 14.321 9.80648C14.3848 9.73964 14.4167 9.65153 14.4167 9.54216V6.55713C14.4167 6.44472 14.3848 6.35661 14.321 6.29281C14.2572 6.22597 14.1706 6.19255 14.0612 6.19255H11.0625C10.9531 6.19255 10.8665 6.22597 10.8027 6.29281C10.7389 6.35661 10.707 6.44472 10.707 6.55713V9.54216C10.707 9.65153 10.7389 9.73964 10.8027 9.80648C10.8665 9.87028 10.9531 9.90218 11.0625 9.90218Z" fill="white" />
  </svg>
)

const PERCEPTION_ALIGNMENT_DATA = [
  {
    alignment: "Misaligned",
    color: "#E53935",
    rows: [
      {
        category: "Safety",
        insights: "Students and parents feel safe in structured settings, while staff report more issues during less supervised times — reflecting differences in exposure to risk.",
        student: "85%",
        parent: "85%",
        teacher: "75%",
        leader: "45%",
      },
      {
        category: "Wellbeing",
        insights: "Students report generally positive wellbeing, while staff observe more sustained stress — reflecting self-perception vs ongoing observation.",
        student: "80%",
        parent: "80%",
        teacher: "45%",
        leader: "45%",
      },
      {
        category: "Learning Support",
        insights: "Parents see support through outcomes, while students experience variability in day-to-day teaching — highlighting classroom-level inconsistency.",
        student: "45%",
        parent: "80%",
        teacher: "60%",
        leader: "60%",
      },
      {
        category: "Workload",
        insights: "Students experience workload as uneven and concentrated, while adults assess it as manageable overall — a typical gap between lived and aggregated experience.",
        student: "75%",
        parent: "80%",
        teacher: "75%",
        leader: "40%",
      },
      {
        category: "Fairness",
        insights: "Staff see expectations as consistent, while students judge fairness based on individual interactions — leading to perceived inconsistency.",
        student: "60%",
        parent: "75%",
        teacher: "85%",
        leader: "80%",
      },
      {
        category: "Voice",
        insights: "Schools provide formal opportunities for voice, but students judge impact based on visible change — creating a gap between provision and influence.",
        student: "60%",
        parent: "40%",
        teacher: "75%",
        leader: "85%",
      },
      {
        category: "Facilities",
        insights: "Students assess facilities based on usability, while adults focus on long-term condition and constraints — leading to different satisfaction levels.",
        student: "80%",
        parent: "85%",
        teacher: "60%",
        leader: "85%",
      },
      {
        category: "Teaching Quality",
        insights: "All groups see teaching as strong overall, but students and parents are more sensitive to variation between classrooms than staff.",
        student: "45%",
        parent: "85%",
        teacher: "40%",
        leader: "40%",
      },
    ],
  },
  {
    alignment: "Partially Aligned",
    color: "#FB8C00",
    rows: [
      {
        category: "Communication",
        insights: "Communication is functional overall, but parents rely more on clarity and timing, leading to lower satisfaction when inconsistent.",
        student: "85%",
        parent: "45%",
        teacher: "80%",
        leader: "80%",
      },
      {
        category: "Inclusion",
        insights: "Students and parents see inclusion improving, while staff are more positive due to visibility of policies not always matched by experience.",
        student: "85%",
        parent: "45%",
        teacher: "45%",
        leader: "75%",
      },
      {
        category: "Future Readiness",
        insights: "All groups share a similar view of academic preparation, indicating alignment between expectations and outcomes.",
        student: "60%",
        parent: "80%",
        teacher: "85%",
        leader: "40%",
      },
    ],
  },
  {
    alignment: "Aligned",
    color: "#66BB6A",
    rows: [
      {
        category: "Leadership",
        insights: "Leadership is viewed positively across groups, suggesting consistent direction and communication.",
        student: "80%",
        parent: "40%",
        teacher: "40%",
        leader: "45%",
      },
    ],
  },
]

const PerceptionAlignment = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Section Header */}
      <div>
        <Title48 className="text-[#038AF9] font-bold">
          Perception Alignment Across Stakeholders
        </Title48>
        <p className="text-[16px] text-secondary font-normal mt-1">
          Where school leader, student, parent, and teacher perceptions align - and where gaps require attention.
        </p>
      </div>

      {/* Outer #F6F6F6 Container */}
      <div className="bg-[#F6F6F6] p-2 rounded-4xl border border-gray-200/60 font-urbanist w-full max-w-full">
        <div className="w-full bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs space-y-6 font-urbanist">
          {/* Card Header Title */}
          <Title24 className="text-[#080808] font-semibold">
            Parents, Students & Teacher
          </Title24>

          {/* Responsive Table */}
          <div className="overflow-x-auto w-full">
            <Table
              containerClassName="border-0 border-none bg-transparent shadow-none rounded-none w-full"
              className="w-full min-w-[950px] text-left border-collapse border-0 border-none"
            >
              <TableHeader className="bg-[#F9FAFB]">
                <TableRow className="border-b border-gray-100 hover:bg-transparent">
                  <TableHead className="w-[180px] text-[16px] font-normal text-secondary py-3.5 pl-4">Alignment</TableHead>
                  <TableHead className="w-[170px] text-[16px] font-normal text-secondary py-3.5">Category</TableHead>
                  <TableHead className="text-[16px] font-normal text-secondary py-3.5">Insights</TableHead>
                  <TableHead className="w-[90px] text-[16px] font-normal text-secondary py-3.5 text-center">Student</TableHead>
                  <TableHead className="w-[90px] text-[16px] font-normal text-secondary py-3.5 text-center">Parent</TableHead>
                  <TableHead className="w-[90px] text-[16px] font-normal text-secondary py-3.5 text-center">Teacher</TableHead>
                  <TableHead className="w-[120px] text-[16px] font-normal text-secondary py-3.5 text-center pr-4">School leader</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="bg-white border-0 border-none">
                {PERCEPTION_ALIGNMENT_DATA.map((group) => (
                  <React.Fragment key={group.alignment}>
                    {group.rows.map((row, idx) => (
                      <TableRow
                        key={`${group.alignment}-${row.category}`}
                        className="border-0 border-none hover:bg-gray-50/40 transition-colors"
                      >
                        {/* Alignment Column with Badge Icon (Rendered on first row of each alignment group) */}
                        {idx === 0 ? (
                          <TableCell
                            rowSpan={group.rows.length}
                            className="align-top py-4 pl-4 pr-4 bg-white border-0 border-none"
                          >
                            <div className="flex items-center gap-2">
                              <div
                                style={{ backgroundColor: group.color }}
                                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                              >
                                <AlignmentBadgeIcon />
                              </div>
                              <span className="text-[16px] font-normal text-[#080808]">
                                {group.alignment}
                              </span>
                            </div>
                          </TableCell>
                        ) : null}

                        {/* Category */}
                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top bg-white border-0 border-none">
                          {row.category}
                        </TableCell>

                        {/* Insights */}
                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 pr-4 align-top leading-relaxed max-w-md bg-white border-0 border-none">
                          {row.insights}
                        </TableCell>

                        {/* Student */}
                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 align-top text-center bg-white border-0 border-none">
                          {row.student}
                        </TableCell>

                        {/* Parent */}
                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 align-top text-center bg-white border-0 border-none">
                          {row.parent}
                        </TableCell>

                        {/* Teacher */}
                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 align-top text-center bg-white border-0 border-none">
                          {row.teacher}
                        </TableCell>

                        {/* School leader */}
                        <TableCell className="text-[16px] font-normal text-textPrimary py-4 align-top text-center pr-4 bg-white border-0 border-none">
                          {row.leader}
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
    </div>
  )
}

export default PerceptionAlignment