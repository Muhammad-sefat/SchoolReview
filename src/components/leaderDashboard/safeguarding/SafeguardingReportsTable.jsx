import React, { useState } from "react"
import { Plus } from "lucide-react"
import { CgDetailsMore } from "react-icons/cg"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

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

  const toggleSelectRow = (id, checked) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((i) => i !== id)
    )
  }

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedIds(filteredReports.map((r) => r.id))
    } else {
      setSelectedIds([])
    }
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

        {/* Right Actions: Export Button & Shadcn Select Category Filter */}
        <div className="flex items-center gap-3">
          <Button
            type="button"
            className="px-4 py-2 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-xs font-semibold transition-colors shadow-2xs cursor-pointer h-auto"
          >
            Export Reports
          </Button>

          <div className="w-48">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="rounded-xl border-gray-200 text-xs font-semibold text-[#1F1F21]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Bullying & Harassment">
                  Bullying & Harassment
                </SelectItem>
                <SelectItem value="Mental Health & Wellbeing">
                  Mental Health & Wellbeing
                </SelectItem>
                <SelectItem value="Teaching & Fairness">
                  Teaching & Fairness
                </SelectItem>
                <SelectItem value="Safety & Environment">
                  Safety & Environment
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Dotted Separator */}
      <div className="border-b border-dashed border-gray-200/80" />

      {/* Shadcn UI Table Component Container */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow className="border-b border-gray-100 hover:bg-transparent">
              <TableHead className="w-12 px-4">
                <Checkbox
                  checked={
                    selectedIds.length === filteredReports.length &&
                    filteredReports.length > 0
                  }
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all reports"
                  className="w-5 h-5 rounded-md border-2 border-gray-300 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9]"
                />
              </TableHead>
              <TableHead className="font-normal text-xs text-gray-400">
                Date
              </TableHead>
              <TableHead className="font-normal text-xs text-gray-400">
                Category
              </TableHead>
              <TableHead className="font-normal text-xs text-gray-400">
                Summary
              </TableHead>
              <TableHead className="font-normal text-xs text-gray-400 text-right">
                Priority
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs sm:text-sm font-medium text-[#1F1F21]">
            {filteredReports.map((row) => {
              const isSelected = selectedIds.includes(row.id)

              return (
                <TableRow
                  key={row.id}
                  onClick={() => onSelectReport && onSelectReport(row)}
                  className={`hover:bg-gray-50/80 transition-colors cursor-pointer border-b border-gray-100/80 ${
                    isSelected ? "bg-rose-50/40" : ""
                  }`}
                >
                  <TableCell
                    className="px-4 py-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={(checked) =>
                        toggleSelectRow(row.id, !!checked)
                      }
                      aria-label={`Select report ${row.id}`}
                      className="w-5 h-5 rounded-md border-2 border-gray-300 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9]"
                    />
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap text-gray-700">
                    {row.date}
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap font-medium text-[#1F1F21]">
                    {row.category}
                  </TableCell>
                  <TableCell className="px-4 py-4 text-gray-600 font-normal max-w-xs truncate">
                    {row.summary}
                  </TableCell>
                  <TableCell className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end">
                      {/* Priority Square Badge displaying CgDetailsMore icon inside priority background */}
                      {row.priority ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            onSelectReport && onSelectReport(row)
                          }}
                          className={`w-7 h-7 rounded-xl ${row.priority.color} text-white flex items-center justify-center shadow-xs transition-transform hover:scale-105 cursor-pointer`}
                          title={`Priority: ${row.priority.label}`}
                        >
                          <CgDetailsMore className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            onSelectReport && onSelectReport(row)
                          }}
                          className="w-7 h-7 rounded-xl border-2 border-[#038AF9] text-[#038AF9] flex items-center justify-center bg-[#038AF9]/5 hover:bg-[#038AF9]/15 transition-all cursor-pointer"
                          title="Unassigned Priority (Add Priority)"
                        >
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        </button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default SafeguardingReportsTable
