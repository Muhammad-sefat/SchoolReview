import React from "react"
import { Title48, Title24 } from "@/components/typho/Title"
import CategoryStackedBarChart from "@/components/graphCharts/CategoryStackedBarChart"

const TEACHER_CATEGORY_DATA = [
  {
    id: "wellbeing",
    title: "Wellbeing",
    summaryTitle: "Wellbeing Summary",
    subtitle: "Based on 50 reviews",
    description: "Teachers describe workload as manageable at times but difficult to sustain, especially around reporting periods and busy terms. Support is available, but often used once pressure has already built up. This is reducing time for planning, feedback, and staying on top of student needs.",
    bars: [
      { label: "Workload", values: [10, 12, 15, 10, 20] },
      { label: "Staff Wellbeing", values: [20, 10, 10, 5, 15] },
      { label: "Safety", values: [15, 12, 8, 20, 20] },
    ],
  },
  {
    id: "leadership",
    title: "Leadership",
    summaryTitle: "Leadership Summary",
    subtitle: "Based on 80 reviews",
    description: "Leadership is seen as supportive, but communication is not always consistent. Teachers say decisions are sometimes shared late or without full context, and staff input does not always lead to visible changes. This can make expectations unclear and harder to apply consistently.",
    bars: [
      { label: "Leadership", values: [10, 12, 15, 10, 20] },
      { label: "Voice", values: [20, 10, 10, 5, 15] },
      { label: "Communication", values: [15, 12, 8, 20, 20] },
    ],
  },
  {
    id: "culture",
    title: "Culture",
    summaryTitle: "Culture Summary",
    subtitle: "Based on 20 reviews",
    description: "Staff describe a positive team culture day-to-day, but expectations around behaviour, teaching practice, and inclusion are not always applied in the same way across classrooms. This leads to differences in how students behave and how supported teachers feel.",
    bars: [
      { label: "Team Culture", values: [10, 12, 15, 10, 20] },
      { label: "Fairness & Inclusion", values: [20, 10, 10, 5, 15] },
      { label: "Teaching Quality", values: [15, 12, 8, 20, 20] },
    ],
  },
  {
    id: "resources",
    title: "Resources & Growth",
    summaryTitle: "Resources & Growth Summary",
    subtitle: "Based on 80 reviews",
    description: "Teachers value the resources available, but finding time to use them or engage in professional development can be difficult alongside daily workload. Development opportunities exist, but are not always easy to access or apply in practice.",
    bars: [
      { label: "Resources", values: [10, 12, 15, 10, 20] },
      { label: "Professional Growth", values: [20, 10, 10, 5, 15] },
      { label: "Compensation", values: [15, 12, 8, 20, 20] },
      { label: "Facilities", values: [18, 12, 10, 20, 10] },
    ],
  },
]

const CategoryOverviewTeacher = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Section Title */}
      <Title48 className="text-[#038AF9] font-bold">
        Category Overview (Teacher)
      </Title48>

      {/* Rows of Category Overview (Teacher) */}
      <div className="space-y-6">
        {TEACHER_CATEGORY_DATA.map((item) => (
          <div
            key={item.id}
            className="bg-[#F6F6F6] p-2 sm:p-3 rounded-3xl sm:rounded-4xl border border-gray-200/60"
          >
            <div className="grid grid-cols-12 gap-4 items-stretch">
              {/* Left Stacked Bar Chart */}
              <div className="col-span-12 lg:col-span-8 flex flex-col">
                <CategoryStackedBarChart title={item.title} bars={item.bars} />
              </div>

              {/* Right Summary Card */}
              <div className="col-span-12 lg:col-span-4 flex flex-col">
                <div className="w-full bg-white rounded-2xl border border-gray-100 p-6 shadow-xs font-urbanist space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-1">
                    <Title24 className="text-[#080808] font-semibold">
                      {item.summaryTitle}
                    </Title24>
                    <p className="text-[14px] text-secondary font-normal border-b border-gray-100 pb-3">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-[16px] text-textPrimary font-normal leading-relaxed flex-1 pt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryOverviewTeacher