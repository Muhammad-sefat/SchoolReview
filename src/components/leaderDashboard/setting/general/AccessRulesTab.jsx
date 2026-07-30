import React, { useState } from "react"
import { Switch } from "@/components/ui/switch"

const AccessRulesTab = () => {
  const [evaluatorRequests, setEvaluatorRequests] = useState(false)
  const [aggregatedDataAccess, setAggregatedDataAccess] = useState(false)
  const [externalObserverRequests, setExternalObserverRequests] = useState(false)

  const handleToggleEvaluator = (val) => {
    setEvaluatorRequests(val)
    console.log("Access Rules - Evaluator Requests:", val)
  }

  const handleToggleAggregated = (val) => {
    setAggregatedDataAccess(val)
    console.log("Access Rules - Allow Aggregated Data Access:", val)
  }

  const handleToggleObserver = (val) => {
    setExternalObserverRequests(val)
    console.log("Access Rules - External Observer Access Requests:", val)
  }

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6 font-urbanist">
      {/* Item 1 */}
      <div className="flex items-center justify-between gap-6 pb-4">
        <div className="space-y-4">
          <h3 className="text-[20px] font-semibold text-[#080808]">Evaluator Requests</h3>
          <p className="text-[16px] font-normal text-[#5A5A5A]">
            Allow external evaluators to request access to reports and insights. Requests require approval.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[14px] font-normal text-[#5A5A5A]">On / Off</span>
          <Switch
            checked={evaluatorRequests}
            onCheckedChange={handleToggleEvaluator}
            className="data-[state=checked]:bg-[#038AF9]"
          />
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center justify-between gap-6 pb-4 pt-2">
        <div className="space-y-4">
          <h3 className="text-[20px] font-semibold text-[#080808]">Allow Aggregated Data Access</h3>
          <p className="text-[16px] font-normal text-[#5A5A5A]">
            Allow approved evaluators to access aggregated school insights. Individual reviews and teacher data are never shared.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[14px] font-normal text-[#5A5A5A]">On / Off</span>
          <Switch
            checked={aggregatedDataAccess}
            onCheckedChange={handleToggleAggregated}
            className="data-[state=checked]:bg-[#038AF9]"
          />
        </div>
      </div>

      {/* Item 3 */}
      <div className="border-t border-dashed border-gray-200 pt-6 flex items-center justify-between gap-6">
        <div className="space-y-4">
          <h3 className="text-[20px] font-semibold text-[#080808]">External Observer Access Requests</h3>
          <p className="text-[16px] font-normal text-[#5A5A5A]">
            Allow external observers to request access. Requests require approval.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[14px] font-normal text-[#5A5A5A]">On / Off</span>
          <Switch
            checked={externalObserverRequests}
            onCheckedChange={handleToggleObserver}
            className="data-[state=checked]:bg-[#038AF9]"
          />
        </div>
      </div>
    </div>
  )
}

export default AccessRulesTab
