import React, { useState } from "react"
import { ChevronDown, Plus, Download, ListFilter } from "lucide-react"

const REPORTS_TABLE_DATA = [
  {
    id: 1,
    date: "Mar 27, 2026",
    category: "Bullying & Harassment",
    summary: "Some people make fun of others in class.",
    priority: { label: "Urgent", color: "bg-[#E53935]" },
    status: "Open",
    reportedBy: "Anonymous",
    fullText:
      "A few classmates created a private group on Instagram where they post edited pictures of people from our class with mean captions. One of them is about me. They also shared the link in our group chat, so everyone saw it.",
  },
  {
    id: 2,
    date: "Mar 27, 2026",
    category: "Mental Health & Wellbeing",
    summary: "There are students who make others uncomfortable.",
    priority: null,
    status: "Open",
    reportedBy: "Anonymous",
    fullText:
      "There are students who make others uncomfortable during break time in the hallway. We requested additional supervision near the lockers.",
  },
  {
    id: 3,
    date: "Mar 27, 2026",
    category: "Teaching & Fairness",
    summary: "Sometimes it doesn't feel like a safe space.",
    priority: { label: "High", color: "bg-[#FE9A00]" },
    status: "Open",
    reportedBy: "Student",
    fullText:
      "Homework deadline overlaps significantly between subjects without prior notice, making workload balance challenging.",
  },
  {
    id: 4,
    date: "Mar 27, 2026",
    category: "Safety & Environment",
    summary: "Sometimes there are fights or arguments between students.",
    priority: { label: "Low", color: "bg-[#66BB6A]" },
    status: "Open",
    reportedBy: "Parent",
    fullText:
      "Fencing near the secondary playground needs routine maintenance check before winter season.",
  },
]

const SafeguardingReportsTable = ({ onSelectReport }) => {
  const [activeTab, setActiveTab] = useState("Open")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [selectedIds, setSelectedIds] = useState([])

  const filteredReports = REPORTS_TABLE_DATA.filter((rep) => {
    if (rep.status !== activeTab) return false
    if (categoryFilter !== "All" && rep.category !== categoryFilter) return false
    return true
  })

  const toggleSelectRow = (id, e) => {
    e.stopPropagation()
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs space-y-5">
      {/* Table Card Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Title & Open/Closed Tab Pills */}
        <div className="flex items-center gap-4">
          <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808]">
            Reports
          </h3>

          <div className="flex items-center gap-1 bg-gray-100/70 p-1 rounded-2xl">
            {["Open", "Closed"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-white text-[#1F1F21] shadow-2xs font-semibold"
                    : "text-[#5A5A5A] hover:text-[#1F1F21]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Actions: Export Button & Category Dropdown Filter */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="px-4 py-2 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-xs font-semibold transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
          >
            <span>Export Reports</span>
          </button>

          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-[#1F1F21] outline-none cursor-pointer focus:border-[#038AF9]"
            >
              <option value="All">All Categories</option>
              <option value="Bullying & Harassment">Bullying & Harassment</option>
              <option value="Mental Health & Wellbeing">Mental Health & Wellbeing</option>
              <option value="Teaching & Fairness">Teaching & Fairness</option>
              <option value="Safety & Environment">Safety & Environment</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dotted Separator */}
      <div className="border-b border-dashed border-gray-200/80" />

      {/* Table Container */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-gray-100 text-xs font-medium text-gray-400">
              <th className="py-3 px-4 w-10">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-[#038AF9] focus:ring-0 cursor-pointer"
                  checked={
                    selectedIds.length === filteredReports.length &&
                    filteredReports.length > 0
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedIds(filteredReports.map((r) => r.id))
                    } else {
                      setSelectedIds([])
                    }
                  }}
                />
              </th>
              <th className="py-3 px-4 font-normal">Date</th>
              <th className="py-3 px-4 font-normal">Category</th>
              <th className="py-3 px-4 font-normal">Summary</th>
              <th className="py-3 px-4 font-normal text-right">Priority</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100/80 text-xs sm:text-sm font-medium text-[#1F1F21]">
            {filteredReports.map((row) => {
              const isSelected = selectedIds.includes(row.id)

              return (
                <tr
                  key={row.id}
                  onClick={() => onSelectReport && onSelectReport(row)}
                  className={`hover:bg-gray-50/80 transition-colors cursor-pointer ${
                    isSelected ? "bg-rose-50/40" : ""
                  }`}
                >
                  <td className="py-4 px-4">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => toggleSelectRow(row.id, e)}
                      className="rounded border-gray-300 text-[#038AF9] focus:ring-0 cursor-pointer"
                    />
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap text-gray-700">
                    {row.date}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap font-medium text-[#1F1F21]">
                    {row.category}
                  </td>
                  <td className="py-4 px-4 text-gray-600 font-normal max-w-xs truncate">
                    {row.summary}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end">
                      {row.priority ? (
                        <div
                          className={`w-5 h-5 rounded-full ${row.priority.color} flex items-center justify-center text-white shadow-xs`}
                          title={`Priority: ${row.priority.label}`}
                        >
                          <span className="text-[10px] font-bold">!</span>
                        </div>
                      ) : (
                        <div
                          className="w-5 h-5 rounded-full border border-[#038AF9] text-[#038AF9] flex items-center justify-center hover:bg-[#038AF9]/10"
                          title="Unassigned Priority"
                        >
                          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SafeguardingReportsTable
