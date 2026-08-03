import React, { useState } from "react"
import { Plus } from "lucide-react"

const AddSchoolSection = ({ onAddSchool }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleAdd = (e) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
    if (onAddSchool) onAddSchool(searchTerm)
    console.log("Adding school to follow:", searchTerm)
    setSearchTerm("")
  }

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4 font-urbanist">
      <h3 className="text-[20px] font-medium text-[#080808]">Add School to Follow</h3>

      <form onSubmit={handleAdd} className="flex flex-col max-w-[750px] w-full sm:flex-row items-stretch sm:items-center gap-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a school..."
          className="flex-1 h-12 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
        />

        <button
          type="submit"
          className="h-12 px-6 rounded-xl border border-[#038AF9] text-[#038AF9] hover:bg-blue-50 text-[18px] font-medium transition-colors flex items-center justify-center gap-1.5 shrink-0 bg-white cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Add</span>
        </button>
      </form>
    </div>
  )
}

export default AddSchoolSection
