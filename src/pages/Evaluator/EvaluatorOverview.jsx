import React, { useState } from "react"
import EvaluatorSchoolOverviewGraph from "@/components/evaluator/overview/EvaluatorSchoolOverviewGraph"
import EvaluatorPriorityAreas from "@/components/evaluator/overview/EvaluatorPriorityAreas"
import EvaluatorSchoolListTable from "@/components/evaluator/overview/EvaluatorSchoolListTable"
import ViewSchoolModal from "@/components/evaluator/overview/ViewSchoolModal"

const EvaluatorOverview = () => {
  const [selectedSchool, setSelectedSchool] = useState(null)

  const handleSelectSchool = (schoolData) => {
    if (typeof schoolData === "string") {
      setSelectedSchool({ name: schoolData })
    } else {
      setSelectedSchool(schoolData)
    }
  }

  return (
    <div className="w-full space-y-6 font-urbanist pb-10">
      {/* Row 1: 2-Column Layout (Left Graph vs Right Priority Areas) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8">
          <EvaluatorSchoolOverviewGraph onSelectSchool={handleSelectSchool} />
        </div>
        <div className="lg:col-span-4">
          <EvaluatorPriorityAreas onSelectSchool={handleSelectSchool} />
        </div>
      </div>

      {/* Row 2: School List Table with Shadcn Select Filter */}
      <EvaluatorSchoolListTable onSelectSchool={handleSelectSchool} />

      {/* View School Dialog Modal */}
      {selectedSchool && (
        <ViewSchoolModal
          isOpen={!!selectedSchool}
          onClose={() => setSelectedSchool(null)}
          school={selectedSchool}
        />
      )}
    </div>
  )
}

export default EvaluatorOverview
