import React, { useState } from "react"
import { Trash2, Plus, Upload } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Title18 } from "@/components/typho/Title"

const INITIAL_POSITIONS = [
  { id: 1, title: "", description: "", link: "", isPublished: true },
  { id: 2, title: "", description: "", link: "", isPublished: true },
]

const CareerTab = ({ register, onSubmit }) => {
  const [positions, setPositions] = useState(INITIAL_POSITIONS)

  const handleAddPosition = () => {
    setPositions((prev) => [
      ...prev,
      { id: Date.now(), title: "", description: "", link: "", isPublished: true },
    ])
  }

  const handleRemovePosition = (id) => {
    setPositions((prev) => prev.filter((p) => p.id !== id))
  }

  const handleTogglePublished = (id) => {
    setPositions((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isPublished: !p.isPublished } : p))
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 font-urbanist text-textPrimary py-4">
      {positions.map((pos, index) => (
        <div
          key={pos.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start border-b border-gray-100 pb-8"
        >
          {/* Position Label */}
          <div className="lg:col-span-2">
            <Title18 className="text-[#080808]">Position {index + 1}</Title18>
          </div>

          {/* Form Fields */}
          <div className="lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Inputs Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-3.5">
              <input
                type="text"
                placeholder="Position title"
                defaultValue={pos.title}
                className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] outline-none text-[16px] text-textPrimary placeholder:text-gray-400 bg-white transition-all"
              />

              <div className="relative">
                <textarea
                  rows={3}
                  placeholder="Short description"
                  defaultValue={pos.description}
                  maxLength={200}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] outline-none text-[16px] text-textPrimary placeholder:text-gray-400 bg-white resize-none transition-all"
                />
                <span className="absolute bottom-2.5 right-3 text-xs text-gray-400">
                  200 Character
                </span>
              </div>

              <input
                type="text"
                placeholder="Application link (URL)"
                defaultValue={pos.link}
                className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] outline-none text-[16px] text-textPrimary placeholder:text-gray-400 bg-white transition-all"
              />
            </div>

            {/* Middle Upload Box (3.5 Cols) */}
            <div className="lg:col-span-3">
              <label className="border border-dashed border-gray-300 rounded-2xl p-5 w-full h-36 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#038AF9] transition-colors bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M10.0005 9.01101C9.16474 8.38194 8.12582 8.00917 7 8.00917C6.83823 8.00917 6.67826 8.01687 6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.5 16L12 13.5L14.5 16M12 21V14.1088" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="text-sm text-gray-500 font-normal">Job Description (PDF)</span>
                <span className="text-sm text-textPrimary font-medium underline mt-1">Choose files</span>
                <input type="file" className="hidden" accept=".pdf" />
              </label>
            </div>

            {/* Right Action Buttons (1.5 Cols) */}
            <div className="lg:col-span-2 flex items-center gap-3 pt-2">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Checkbox
                  id={`pub-${pos.id}`}
                  checked={pos.isPublished}
                  onCheckedChange={() => handleTogglePublished(pos.id)}
                />
                <label
                  htmlFor={`pub-${pos.id}`}
                  className="text-sm font-medium text-textPrimary cursor-pointer"
                >
                  Published
                </label>
              </div>

              <button
                type="button"
                onClick={() => handleRemovePosition(pos.id)}
                className="text-gray-400 hover:text-red-600 transition-colors p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer ml-auto"
                title="Delete position"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Add Position Button */}
      <div>
        <button
          type="button"
          onClick={handleAddPosition}
          className="px-5 py-2.5 rounded-xl border border-dashed border-[#038AF9] text-[#038AF9] text-[16px] font-medium flex items-center gap-2 hover:bg-blue-50/50 transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Position</span>
        </button>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-8 py-3 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-semibold transition-colors shadow-xs cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </form>
  )
}

export default CareerTab
