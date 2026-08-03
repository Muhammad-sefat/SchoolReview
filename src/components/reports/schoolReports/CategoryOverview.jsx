import React from "react"
import { Title48, Title24 } from "@/components/typho/Title"
import CategoryStackedBarChart from "@/components/graphCharts/CategoryStackedBarChart"

const CATEGORY_OVERVIEW_DATA = [
  {
    id: "learning",
    title: "Learning",
    summaryTitle: "Learning Summary",
    subtitle: "Based on 70 reviews",
    description: "Students experience uneven clarity and workload across subjects, particularly during independent tasks and homework. Parents often lack visibility between reporting periods and are unsure how well their child is progressing day-to-day, creating a disconnect between classroom learning and understanding at home.",
    bars: [
      { label: "Learning Support", values: [10, 12, 15, 10, 20] },
      { label: "Individual Learning Support", values: [20, 10, 10, 5, 15] },
      { label: "Homework Load", values: [15, 12, 8, 20, 20] },
      { label: "Future Readiness", values: [18, 12, 10, 20, 10] },
    ],
  },
  {
    id: "wellbeing",
    title: "Wellbeing",
    summaryTitle: "Wellbeing Summary",
    subtitle: "Based on 70 reviews",
    description: "Students generally feel safe, but support is inconsistent between classes and often accessed only when issues escalate. Parents are not always aware of how wellbeing is monitored or when support is provided, reducing confidence in how concerns are identified and handled.",
    bars: [
      { label: "Safety", values: [10, 12, 15, 10, 20] },
      { label: "Student Wellbeing", values: [18, 12, 10, 20, 10] },
    ],
  },
  {
    id: "teaching",
    title: "Teaching",
    summaryTitle: "Teaching Summary",
    subtitle: "Based on 70 reviews",
    description: "Teaching is effective overall, but varies in clarity, expectations, and classroom management, particularly during transitions and independent work. Parents experience this as inconsistent communication and mixed expectations across teachers, making it harder to support learning at home.",
    bars: [
      { label: "Teaching Quality", values: [10, 12, 15, 10, 20] },
      { label: "School Communication", values: [20, 10, 10, 5, 15] },
      { label: "Leadership", values: [15, 12, 8, 20, 20] },
      { label: "Classroom management", values: [18, 12, 10, 20, 10] },
    ],
  },
  {
    id: "community",
    title: "Community",
    summaryTitle: "Community Summary",
    subtitle: "Based on 70 reviews",
    description: "Students feel included but not always heard, particularly in how feedback is acted on. Parents value the school community but have limited structured opportunities to engage or contribute, leading to a more passive than active relationship with the school.",
    bars: [
      { label: "Fairness", values: [10, 12, 15, 10, 20] },
      { label: "Inclusion", values: [20, 10, 10, 5, 15] },
      { label: "Voice", values: [15, 12, 8, 20, 20] },
    ],
  },
  {
    id: "facilities",
    title: "Facilities",
    summaryTitle: "Facilities Summary",
    subtitle: "Based on 70 reviews",
    description: "Facilities are viewed positively overall, but both students and parents notice inconsistencies in quality and access across areas. Parents in particular question value and transparency in certain areas, which can affect overall satisfaction.",
    bars: [
      { label: "Activities", values: [10, 12, 15, 10, 20] },
      { label: "Facilities", values: [20, 10, 10, 5, 15] },
      { label: "Value for Money", values: [15, 12, 8, 20, 20] },
    ],
  },
]

const CategoryOverview = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Section Title */}
      <Title48 className="text-[#038AF9] font-bold">
        Category Overview (Student & Teacher)
      </Title48>

      {/* Rows of Category Overview */}
      <div className="space-y-6">
        {CATEGORY_OVERVIEW_DATA.map((item) => (
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

export default CategoryOverview