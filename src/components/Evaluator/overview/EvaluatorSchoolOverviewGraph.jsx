import React from "react"
import ScatterPlot from "@/components/graphCharts/ScatterPlot"

const SCHOOL_OVERVIEW_DATA = [
  { id: 1, name: "Kantonsschule Zug (KSZ)", x: 0.8, y: 0.6, category: "low", overall: 1.0, alignment: "Medium", trend: "↗ 9%" },
  { id: 2, name: "School 2", x: 0.5, y: 0.3, category: "low", overall: 0.8, alignment: "Low", trend: "↗ 3%" },
  { id: 3, name: "School 3", x: 0.9, y: 0.4, category: "low", overall: 1.1, alignment: "Low", trend: "↘ 2%" },
  { id: 4, name: "Pioneer Swiss School", x: 1.7, y: 1.7, category: "medium", overall: 1.8, alignment: "Medium", trend: "↗ 5%" },
  { id: 5, name: "Fachmittelschule Zug", x: 2.6, y: 2.6, category: "neutral", overall: 2.7, alignment: "Medium", trend: "↗ 7%" },
  { id: 6, name: "Kantonsschule Menzingen", x: 2.3, y: 2.3, category: "neutral", overall: 2.3, alignment: "Low", trend: "↘ 4%" },
  { id: 7, name: "School 7", x: 3.5, y: 3.5, category: "good", overall: 3.6, alignment: "Medium", trend: "↗ 8%" },
  { id: 8, name: "Kantonsschule Rotkreuz", x: 3.8, y: 3.8, category: "good", overall: 3.8, alignment: "High", trend: "↗ 11%" },
  { id: 9, name: "School 9", x: 3.4, y: 3.4, category: "good", overall: 3.4, alignment: "Medium", trend: "↘ 1%" },
  { id: 10, name: "School 10", x: 4.2, y: 3.7, category: "good", overall: 3.7, alignment: "High", trend: "↗ 6%" },
  { id: 11, name: "Pioneer Swiss School", x: 4.5, y: 4.4, category: "best", overall: 4.4, alignment: "High", trend: "↗ 12%" },
  { id: 12, name: "School 12", x: 4.8, y: 4.7, category: "best", overall: 4.7, alignment: "High", trend: "↗ 10%" },
  { id: 13, name: "School 13", x: 4.9, y: 4.5, category: "best", overall: 4.5, alignment: "High", trend: "↗ 8%" },
  { id: 14, name: "School 14", x: 5.0, y: 4.8, category: "best", overall: 4.9, alignment: "High", trend: "↗ 14%" },
]

const EvaluatorSchoolOverviewGraph = ({ onSelectSchool }) => {
  return (
    <div className="w-full flex font-urbanist h-full">
      <ScatterPlot
        title="School Overview"
        subtitle=""
        tabs={[]}
        data={SCHOOL_OVERVIEW_DATA}
        onMetricClick={(payload) => {
          if (onSelectSchool) {
            onSelectSchool(payload.name || "Kantonsschule Zug (KSZ)")
          }
        }}
      />
    </div>
  )
}

export default EvaluatorSchoolOverviewGraph
