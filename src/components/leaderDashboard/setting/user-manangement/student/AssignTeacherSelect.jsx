import React, { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp, Plus, Check } from "lucide-react"

const DEFAULT_TEACHERS = [
  "John Smith",
  "Conner",
  "Eleanor Pena",
  "Darlene Robertson",
  "Leslie",
  "Graham, Cotter",
]

const AssignTeacherSelect = ({
  selectedTeachers = [],
  onChange,
  onAddTeacherClick,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(selectedTeachers || [])
  const dropdownRef = useRef(null)

  useEffect(() => {
    if (selectedTeachers) setSelected(selectedTeachers)
  }, [selectedTeachers])

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
    if (selected.includes(t)) {
      updated = selected.filter((item) => item !== t)
    } else {
      updated = [...selected, t]
    }
    setSelected(updated)
    if (onChange) onChange(updated)
  }

  const getDisplayText = () => {
    if (!selected || selected.length === 0) return "Assign Teacher"
    if (selected.length === 1) return selected[0]
    return `${selected[0]} (+${selected.length - 1} more)`
  }

  return (
    <div ref={dropdownRef} className={`relative w-full min-w-0 font-urbanist ${isOpen ? "z-40" : "z-0"}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-11 px-4 rounded-xl bg-white text-[16px] font-normal transition-all flex items-center justify-between cursor-pointer ${
          isOpen
            ? "border border-[#038AF9] shadow-xs"
            : "border border-gray-200 hover:border-[#038AF9]"
        }`}
      >
        <span
          className={`truncate text-left ${
            selected.length > 0 ? "text-[#080808] font-normal" : "text-[#5A5A5A]"
          }`}
        >
          {getDisplayText()}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[#080808] shrink-0 ml-2" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#080808] shrink-0 ml-2" />
        )}
      </button>

      {/* Expanded Dropdown matching CustomMultiSelect exactly */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 w-full bg-white rounded-2xl border border-[#038AF9] shadow-xl p-4 z-50 animate-fadeIn space-y-3">
          {/* Top Add New Teacher Button */}
          <div className="flex items-center gap-2 pb-2.5 border-b border-gray-100">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(false)
                if (onAddTeacherClick) onAddTeacherClick()
              }}
              className="flex-1 py-2.5 px-4 rounded-xl border border-dashed border-[#038AF9] bg-blue-50/50 text-[#038AF9] text-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-100/60 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[2.25]" />
              <span>Add New Teacher</span>
            </button>
          </div>

          {/* Options Checkbox List - Checkbox BEFORE text on the left */}
          <div className="max-h-52 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
            {DEFAULT_TEACHERS.map((t) => {
              const isChecked = selected.includes(t)
              return (
                <div
                  key={t}
                  onClick={() => toggleTeacher(t)}
                  className="flex items-center gap-3 py-1.5 px-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors min-w-0"
                >
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${isChecked
                      ? "bg-[#038AF9] border-[#038AF9] text-white"
                      : "border-gray-400 bg-white"
                      }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="text-[15px] font-normal text-[#080808] truncate">
                    {t}
                  </span>
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
