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
    <div className="space-y-6 font-urbanist">
      {/* Item 1: Evaluator Requests */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-[20px] font-semibold text-[#080808]">Evaluator Requests</h3>
          <p className="text-[16px] font-normal text-textPrimary">
            Allow external evaluators to request access to reports and insights. Requests require approval.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
          <span className="text-base font-normal text-textPrimary">On / Off</span>
          <Switch
            checked={evaluatorRequests}
            onCheckedChange={handleToggleEvaluator}
          />
        </div>
      </div>

      {/* Item 2: Allow Aggregated Data Access */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-[20px] font-semibold text-[#080808]">Allow Aggregated Data Access</h3>
          <p className="text-[16px] font-normal text-textPrimary">
            Allow approved evaluators to access aggregated school insights. Individual reviews and teacher data are never shared.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
          <span className="text-base font-normal text-textPrimary">On / Off</span>
          <Switch
            checked={aggregatedDataAccess}
            onCheckedChange={handleToggleAggregated}
          />
        </div>
      </div>

      {/* Item 3: External Observer Access Requests */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-[20px] font-semibold text-[#080808]">External Observer Access Requests</h3>
          <p className="text-[16px] font-normal text-textPrimary">
            Allow external observers to request access. Requests require approval.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
          <span className="text-base font-normal text-textPrimary">On / Off</span>
          <Switch
            checked={externalObserverRequests}
            onCheckedChange={handleToggleObserver}
          />
        </div>
      </div>
    </div>
  )
}

export default AccessRulesTab
