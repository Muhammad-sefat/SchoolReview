import React, { useState, useRef, useEffect } from "react"
import { ChevronDown, Check } from "lucide-react"

const AssignClassesSelect = ({ selectedClasses = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const availableClasses = ["1A", "1B", "2A", "2B", "3A"]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleClass = (cls) => {
    let updated
    if (selectedClasses.includes(cls)) {
      updated = selectedClasses.filter((c) => c !== cls)
    } else {
      updated = [...selectedClasses, cls]
    }
    if (onChange) onChange(updated)
  }

  const toggleSelectAll = () => {
    if (selectedClasses.length === availableClasses.length) {
      if (onChange) onChange([])
    } else {
      if (onChange) onChange([...availableClasses])
    }
  }

  const isAllSelected = selectedClasses.length === availableClasses.length

  const getDisplayText = () => {
    if (!selectedClasses || selectedClasses.length === 0) return "Assign classes"
    return selectedClasses.join(", ")
  }

  return (
    <div ref={dropdownRef} className="relative w-full font-urbanist">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-[16px] font-normal text-[#5A5A5A] hover:border-[#038AF9] flex items-center justify-between cursor-pointer transition-colors"
      >
        <span className={selectedClasses.length > 0 ? "text-[#080808] truncate" : "text-[#5A5A5A] truncate"}>
          {getDisplayText()}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 w-full bg-white rounded-2xl border border-gray-200 shadow-xl p-4 z-50 animate-fadeIn space-y-2.5 max-h-56 overflow-y-auto">
          {/* Select All Classes */}
          <div
            onClick={toggleSelectAll}
            className="flex items-center gap-2.5 rounded-lg hover:bg-gray-50 cursor-pointer border-b border-gray-100 pb-2.5"
          >
            <div
              className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                isAllSelected ? "bg-[#038AF9] border-[#038AF9] text-white" : "border-gray-300 bg-white"
              }`}
            >
              {isAllSelected && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
            <span className="text-sm font-semibold text-[#080808]">Select All Classes</span>
          </div>

          {/* Individual Classes */}
          <div className="space-y-1.5">
            {availableClasses.map((cls) => {
              const isChecked = selectedClasses.includes(cls)
              return (
                <div
                  key={cls}
                  onClick={() => toggleClass(cls)}
                  className="flex items-center gap-2.5 rounded-lg hover:bg-gray-50 cursor-pointer py-1 px-1.5"
                >
                  <div
                    className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                      isChecked ? "bg-[#038AF9] border-[#038AF9] text-white" : "border-gray-300 bg-white"
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className="text-sm font-normal text-[#080808]">{cls}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default AssignClassesSelect
