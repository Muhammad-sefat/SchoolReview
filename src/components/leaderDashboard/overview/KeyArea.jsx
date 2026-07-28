import React from "react"
import KeyImprovementAreas from "./KeyImprovementAreas"
import KeyMetricsCard from "./KeyMetricsCard"

const KeyArea = () => {
  return (
    <div className="w-full grid grid-cols-1 xlg:grid-cols-12 gap-6 items-stretch min-w-0">
      {/* Left Box: Key Improvement Areas (7 Columns on Large Screens) */}
      <div className="xlg:col-span-8 flex flex-col min-w-0">
        <KeyImprovementAreas />
      </div>

      {/* Right Box: Key Metrics (5 Columns on Large Screens) */}
      <div className="xlg:col-span-4 flex flex-col min-w-0">
        <KeyMetricsCard />
      </div>
    </div>
  )
}

export default KeyArea