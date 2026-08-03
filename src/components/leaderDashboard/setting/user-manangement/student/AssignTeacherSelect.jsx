import React, { useState, useRef, useEffect } from "react"
import { ChevronDown, Check } from "lucide-react"

const AssignTeacherSelect = ({ selectedTeachers = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const availableTeachers = [
    "John Smith",
    "Conner",
    "Eleanor Pena",
    "Darlene Robertson",
    "Leslie",
    "Graham, Cotter",
  ]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleTeacher = (t) => {
    let updated
    if (selectedTeachers.includes(t)) {
      updated = selectedTeachers.filter((item) => item !== t)
    } else {
      updated = [...selectedTeachers, t]
    }
    if (onChange) onChange(updated)
  }

  const getDisplayText = () => {
    if (!selectedTeachers || selectedTeachers.length === 0) return "Assign Teacher"
    if (selectedTeachers.length === 1) return selectedTeachers[0]
    if (selectedTeachers.length === 2) return `${selectedTeachers[0]}, ${selectedTeachers[1]}`
    return `${selectedTeachers[0]}, ${selectedTeachers[1]}, ${selectedTeachers.length - 2} more`
  }

  return (
    <div ref={dropdownRef} className="relative w-full font-urbanist">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-[16px] font-normal text-[#5A5A5A] hover:border-[#038AF9] flex items-center justify-between cursor-pointer transition-colors"
      >
        <span className={selectedTeachers.length > 0 ? "text-[#080808] truncate" : "text-[#5A5A5A] truncate"}>
          {getDisplayText()}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 w-full bg-white rounded-2xl border border-gray-200 shadow-xl p-4 z-50 animate-fadeIn space-y-2 max-h-56 overflow-y-auto">
          <div className="space-y-1.5">
            {availableTeachers.map((t) => {
              const isChecked = selectedTeachers.includes(t)
              return (
                <div
                  key={t}
                  onClick={() => toggleTeacher(t)}
                  className="flex items-center gap-2.5 rounded-lg hover:bg-gray-50 cursor-pointer py-1 px-1.5"
                >
                  <div
                    className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                      isChecked ? "bg-[#038AF9] border-[#038AF9] text-white" : "border-gray-300 bg-white"
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className="text-sm font-normal text-[#080808]">{t}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default AssignTeacherSelect
