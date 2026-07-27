import React from "react"
import KeyImprovementAreas from "./KeyImprovementAreas"
import KeyMetricsCard from "./KeyMetricsCard"

const KeyArea = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left Box: Key Improvement Areas (7 Columns on Large Screens) */}
      <div className="lg:col-span-7 flex">
        <KeyImprovementAreas />
      </div>

      {/* Right Box: Key Metrics (5 Columns on Large Screens) */}
      <div className="lg:col-span-5 flex">
        <KeyMetricsCard />
      </div>
    </div>
  )
}

export default KeyArea