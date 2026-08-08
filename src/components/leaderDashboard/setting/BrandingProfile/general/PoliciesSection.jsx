import React, { useState } from "react"
import { Paperclip, Plus, Trash2, Upload, X, ChevronUp, ChevronDown } from "lucide-react"
import { Title18 } from "@/components/typho/Title"

const PoliciesSection = ({ register }) => {
  const [policiesOpen, setPoliciesOpen] = useState(false)
  const [policies, setPolicies] = useState([
    { id: 1, name: "", desc: "", file: null },
  ])

  const handleAddPolicyGroup = () => {
    setPolicies((prev) => [
      ...prev,
      { id: Date.now(), name: "", desc: "", file: null },
    ])
  }

  const handleRemovePolicyGroup = (id) => {
    if (policies.length === 1) return
    setPolicies((prev) => prev.filter((p) => p.id !== id))
  }

  const handleFileUpload = (id, e) => {
    const file = e.target.files[0]
    if (file) {
      setPolicies((prev) =>
        prev.map((p) => (p.id === id ? { ...p, file: file.name } : p))
      )
    }
  }

  const handleRemoveFile = (id) => {
    setPolicies((prev) =>
      prev.map((p) => (p.id === id ? { ...p, file: null } : p))
    )
  }

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
      <div className="lg:col-span-2 flex items-center gap-2">
        <div className="w-28 sm:w-32 shrink-0">
          <Title18 className="text-[#080808]">Policies</Title18>
        </div>
        <button
          type="button"
          onClick={() => setPoliciesOpen(!policiesOpen)}
          className="text-[#038AF9] hover:text-[#0270ce] transition-colors cursor-pointer shrink-0 p-0.5"
        >
          {policiesOpen ? <ChevronUp className="w-5 h-5 stroke-[2.25]" /> : <ChevronDown className="w-5 h-5 stroke-[2.25]" />}
        </button>
      </div>

      {policiesOpen && (
        <div className="lg:col-span-10 space-y-4 min-w-0">
          {policies.map((policy, idx) => (
            <div key={policy.id} className="space-y-3 border-b border-gray-100/60 pb-4 last:border-0">
              {idx > 0 && (
                <div className="flex items-center justify-between pb-1">
                  <span className="text-[16px] font-semibold text-[#038AF9]">Policy #{idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => handleRemovePolicyGroup(policy.id)}
                    className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Remove Policy</span>
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 items-center">
                <input
                  type="text"
                  placeholder="Policy name"
                  {...register(`policies.${idx}.name`)}
                  className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
                />

                <input
                  type="text"
                  placeholder="Description your policy"
                  {...register(`policies.${idx}.desc`)}
                  className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
                />

                {/* Attachment Box or Uploaded File Badge */}
                {policy.file ? (
                  <div className="h-11 flex items-center justify-between px-3 rounded-xl border border-gray-200 text-xs text-[#080808] bg-[#FAF9FB] min-w-0">
                    <div className="flex items-center gap-1.5 truncate">
                      <Paperclip className="w-3.5 h-3.5 text-[#038AF9] shrink-0" />
                      <span className="truncate text-[14px]">{policy.file}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(policy.id)}
                      className="text-gray-400 hover:text-red-500 ml-1 cursor-pointer shrink-0"
                      title="Remove attachment"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <label className="h-11 border border-dashed border-gray-300 rounded-xl px-3 flex items-center justify-center gap-1.5 text-center cursor-pointer hover:border-[#038AF9] transition-colors bg-white whitespace-nowrap">
                    <Upload className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="text-[16px] text-gray-500 font-normal truncate">Attachment (PDF/Doc)</span>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => handleFileUpload(policy.id, e)} />
                  </label>
                )}

                {/* Add policy button on last item */}
                {idx === policies.length - 1 && (
                  <button
                    type="button"
                    onClick={handleAddPolicyGroup}
                    className="h-11 px-3.5 rounded-xl border border-dashed border-[#038AF9] text-[#038AF9] text-[16px] font-medium flex items-center justify-center gap-1.5 hover:bg-blue-50/50 transition-colors cursor-pointer shrink-0 whitespace-nowrap w-full"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Policy</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PoliciesSection
