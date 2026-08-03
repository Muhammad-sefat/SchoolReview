import React from "react"
import { Title48 } from "@/components/typho/Title"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const PRIORITY_IMPROVEMENT_DATA = [
  {
    name: "Teacher",
    dataShows: [
      "Teachers use different behaviour approaches (e.g. some enforce routines strictly, others allow flexibility), leading to inconsistent student expectations",
      "Teachers report spending increasing time managing wellbeing issues alongside teaching",
      "Teachers report spending increasing time managing wellbeing issues alongside teaching",
    ],
    whereToFocus: [
      "Align core behaviour routines (e.g. entry routines, attention signals like \"3-2-1\", consistent consequences)",
      "Introduce tiered wellbeing support (e.g. clear referral pathways so not all issues sit with the classroom teacher)",
      "Protect time for proactive support (e.g. scheduled pastoral check-ins instead of only reacting to incidents)",
    ],
  },
  {
    name: "Students",
    dataShows: [
      "Students report that lesson clarity varies — e.g. some teachers explain tasks step-by-step, while others give instructions once and expect immediate independence",
      "Reporting systems exist, but students are unsure what happens after they submit a concern (e.g. \"I reported something but never heard back\")",
      "Wellbeing support is mainly accessed when issues escalate, rather than through regular check-ins",
    ],
    whereToFocus: [
      "Introduce consistent teaching routines across all classes (e.g. model → guided practice → independent work, with regular \"check for understanding\" moments like mini whiteboards)",
      "Close the feedback loop on reporting (e.g. \"You said, we did\" updates in assemblies or tutor time)",
      "Build proactive wellbeing routines (e.g. weekly tutor check-ins or short pulse surveys to catch issues early)",
    ],
  },
  {
    name: "Parents",
    dataShows: [
      "Parents often only receive detailed updates during formal reports or when issues arise (e.g. \"I only hear when something is wrong\")",
      "Communication varies by teacher — some send regular updates, others rarely communicate",
      "Parents feel unsure how their child is progressing on a week-to-week basis",
    ],
    whereToFocus: [
      "Introduce lightweight, regular updates (e.g. monthly learning summaries or \"what we're covering this week\" messages)",
      "Set a minimum communication standard (e.g. every teacher sends one update per month)",
      "Create predictable engagement moments (e.g. scheduled check-ins, not just reactive emails)",
    ],
  },
]

const PriorityImprovement = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Section Header */}
      <div>
        <Title48 className="text-[#038AF9] font-bold">
          Priority Improvement Areas
        </Title48>
        <p className="text-[16px] text-secondary font-normal mt-1">
          Based on combined feedback from students, parents, and teachers, the following highlights the most consistent gaps across each group.
        </p>
      </div>

      {/* Outer #F6F6F6 Container */}
      <div className="bg-[#F6F6F6] p-2 sm:p-3 rounded-3xl sm:rounded-4xl border border-gray-200/60 font-urbanist w-full">
        <div className="w-full bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs space-y-6 font-urbanist">
          {/* Responsive Table */}
          <div className="overflow-x-auto w-full">
            <Table
              containerClassName="border-0 border-none bg-transparent shadow-none rounded-none w-full"
              className="w-full min-w-[850px] text-left border-collapse border-0 border-none"
            >
              <TableHeader className="bg-[#F9FAFB]">
                <TableRow className="border-b border-gray-100 hover:bg-transparent">
                  <TableHead className="w-[160px] text-[16px] font-normal text-secondary py-3.5 pl-4">Name</TableHead>
                  <TableHead className="text-[16px] font-normal text-secondary py-3.5">What the data shows</TableHead>
                  <TableHead className="text-[16px] font-normal text-secondary py-3.5 pr-4">Where to focus</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="bg-white border-0 border-none">
                {PRIORITY_IMPROVEMENT_DATA.map((row) => (
                  <TableRow
                    key={row.name}
                    className="border-0 border-none hover:bg-gray-50/40 transition-colors"
                  >
                    {/* Group Name (Teacher, Students, Parents) */}
                    <TableCell className="text-[16px] font-semibold text-textBlack py-5 pl-4 pr-4 align-top bg-white border-0 border-none">
                      {row.name}
                    </TableCell>

                    {/* What the data shows */}
                    <TableCell className="py-5 pr-6 align-top bg-white border-0 border-none">
                      <div className="space-y-3">
                        {row.dataShows.map((text, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-gray-300 shrink-0 mt-1.5" />
                            <span className="text-[16px] font-normal text-textPrimary leading-relaxed">
                              {text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </TableCell>

                    {/* Where to focus */}
                    <TableCell className="py-5 pr-4 align-top bg-white border-0 border-none">
                      <div className="space-y-3">
                        {row.whereToFocus.map((text, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-gray-300 shrink-0 mt-1.5" />
                            <span className="text-[16px] font-normal text-textPrimary leading-relaxed">
                              {text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriorityImprovement