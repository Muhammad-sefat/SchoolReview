import React, { useState } from "react"
import { Plus } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Title18 } from "@/components/typho/Title"
import DragDropUploadBox from "./common/DragDropUploadBox"

// User Provided Delete SVG Icon
const TrashCanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M19.5 5.50098L18.6139 20.122C18.5499 21.1776 17.6751 22.001 16.6175 22.001H7.38246C6.32488 22.001 5.4501 21.1776 5.38612 20.122L4.5 5.50098"
      stroke="#1F1F21"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 5.49902H8M8 5.49902L9.24025 2.6051C9.39783 2.23742 9.75937 1.99902 10.1594 1.99902H13.8406C14.2406 1.99902 14.6022 2.23742 14.7597 2.6051L16 5.49902M8 5.49902H16M21 5.49902H16"
      stroke="#1F1F21"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.5 16.5V10.5" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 16.5V10.5" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const INITIAL_POSITIONS = [
  { id: 1, title: "", description: "", link: "", isPublished: true, pdfFile: null },
  { id: 2, title: "", description: "", link: "", isPublished: true, pdfFile: null },
]

const CareerTab = ({ register, onSubmit }) => {
  const [positions, setPositions] = useState(INITIAL_POSITIONS)

  const handleAddPosition = () => {
    setPositions((prev) => [
      ...prev,
      { id: Date.now(), title: "", description: "", link: "", isPublished: true, pdfFile: null },
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

  const handlePdfUpload = (id, e) => {
    const file = e.target.files[0]
    if (file) {
      setPositions((prev) =>
        prev.map((p) => (p.id === id ? { ...p, pdfFile: file.name } : p))
      )
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 font-urbanist text-textPrimary">
      {positions.map((pos, index) => (
        <div
          key={pos.id}
          className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-4 items-start"
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

            {/* Middle Drag & Drop Upload Box (3.5 Cols) */}
            <div className="lg:col-span-3">
              <DragDropUploadBox
                onChange={(e) => handlePdfUpload(pos.id, e)}
                accept=".pdf"
                multiple={false}
                subLabel={pos.pdfFile ? pos.pdfFile : "Job Description (PDF)"}
                chooseText="Choose files"
                className="w-full h-36"
              />
            </div>

            {/* Right Action Buttons (1.5 Cols) with SVG Delete Icon & Custom Background */}
            <div className="lg:col-span-2 flex items-center justify-between gap-3 pt-2">
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

              {/* Styled SVG Delete Button with background */}
              <button
                type="button"
                onClick={() => handleRemovePosition(pos.id)}
                className="w-9 h-9 rounded-full bg-[rgba(8,8,8,0.04)] hover:bg-gray-200 text-[#1F1F21] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                title="Delete position"
              >
                <TrashCanIcon />
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
