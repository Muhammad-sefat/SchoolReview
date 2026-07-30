import React, { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp, Plus, Check } from "lucide-react"

export const CustomMultiSelect = ({
  placeholder = "Select options",
  options = [],
  value = [],
  onChange,
  allowAddCustom = true,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [customItems, setCustomItems] = useState([])
  const [selected, setSelected] = useState(value || [])
  const [customInput, setCustomInput] = useState("")
  const dropdownRef = useRef(null)

  // Combine static options with user-added custom items
  const allItems = Array.from(new Set([...(options || []), ...customItems]))

  useEffect(() => {
    if (value) setSelected(value)
  }, [value])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleOption = (opt) => {
    let updated
    if (selected.includes(opt)) {
      updated = selected.filter((item) => item !== opt)
    } else {
      updated = [...selected, opt]
    }
    setSelected(updated)
    if (onChange) onChange(updated)
  }

  const handleAddCustom = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    const newItem = customInput.trim()
    if (!newItem) return

    if (!customItems.includes(newItem) && !options.includes(newItem)) {
      setCustomItems((prev) => [...prev, newItem])
    }

    if (!selected.includes(newItem)) {
      const updated = [...selected, newItem]
      setSelected(updated)
      if (onChange) onChange(updated)
    }

    setCustomInput("")
  }

  // Display text in trigger box
  const getDisplayText = () => {
    if (!selected || selected.length === 0) return placeholder
    if (selected.length === 1) return selected[0]
    return `${selected[0]} (+${selected.length - 1} more)`
  }

  return (
    <div ref={dropdownRef} className={`relative w-full min-w-0 font-urbanist ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-11 px-4 rounded-xl bg-white text-[16px] font-normal transition-all flex items-center justify-between cursor-pointer ${
          isOpen
            ? "border-2 border-[#038AF9] shadow-xs"
            : "border border-gray-200 hover:border-[#038AF9]"
        }`}
      >
        <span className={`truncate text-left ${selected.length > 0 ? "text-[#080808] font-normal" : "text-[#5A5A5A]"}`}>
          {getDisplayText()}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[#080808] shrink-0 ml-2" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#080808] shrink-0 ml-2" />
        )}
      </button>

      {/* Expanded Dropdown Box */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 w-full min-w-[260px] bg-white rounded-2xl border-2 border-[#038AF9] shadow-xl p-4 z-50 animate-fadeIn space-y-3">
          {/* Top Custom Add Input Row */}
          {allowAddCustom && (
            <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
              <input
                type="text"
                placeholder="Add another"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddCustom(e)
                }}
                className="flex-1 h-10 px-3.5 rounded-xl border border-gray-200 text-[14px] font-normal text-[#080808] placeholder:text-gray-400 outline-none focus:border-[#038AF9] bg-white"
              />
              <button
                type="button"
                onClick={handleAddCustom}
                className="w-10 h-10 rounded-xl border border-[#038AF9] text-[#038AF9] flex items-center justify-center hover:bg-blue-50/50 transition-colors cursor-pointer shrink-0"
                title="Add option"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Options Checkbox List */}
          <div className="max-h-60 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
            {allItems.map((opt, idx) => {
              const isChecked = selected.includes(opt)
              return (
                <div
                  key={idx}
                  onClick={() => toggleOption(opt)}
                  className="flex items-center justify-between py-1.5 px-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                        isChecked
                          ? "bg-[#038AF9] border-[#038AF9] text-white"
                          : "border-gray-400 bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-[15px] font-normal text-[#080808] truncate">
                      {opt}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomMultiSelect
