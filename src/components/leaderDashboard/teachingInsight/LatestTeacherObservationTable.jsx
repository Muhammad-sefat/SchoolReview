import React, { useState } from "react"
import { Star } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const DEFAULT_OBSERVATIONS = [
  {
    id: 1,
    name: "Albert Flores",
    observationStatus: "action", // 'action', 'completed', 'none'
    score: 4.5,
    performanceLevel: "Effective",
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    observationStatus: "action",
    score: 3.0,
    performanceLevel: "Effective",
  },
  {
    id: 3,
    name: "Wade Warren",
    observationStatus: "completed",
    score: 2.5,
    performanceLevel: "Developing",
  },
  {
    id: 4,
    name: "Kristin Watson",
    observationStatus: "none",
    score: 1.5,
    performanceLevel: "Needs Support",
  },
  {
    id: 5,
    name: "Ralph Edwards",
    observationStatus: "completed",
    score: 1.5,
    performanceLevel: "Needs Support",
  },
]

const LatestTeacherObservationTable = ({ onSetUpClick }) => {
  const [filterLevel, setFilterLevel] = useState("All")
  const [selectedIds, setSelectedIds] = useState([])

  const filteredData = DEFAULT_OBSERVATIONS.filter((item) => {
    if (filterLevel === "All") return true
    return item.performanceLevel.toLowerCase() === filterLevel.toLowerCase()
  })

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedIds(filteredData.map((d) => d.id))
    } else {
      setSelectedIds([])
    }
  }

  const toggleSelectRow = (id, checked) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id])
    } else {
      setSelectedIds((prev) => prev.filter((item) => item !== id))
    }
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs space-y-4 font-urbanist">
      {/* Top Header Row: Title & Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808]">
          Latest Teacher Observation
        </h3>

        {/* Filter Dropdown */}
        <div className="w-20">
          <Select value={filterLevel} onValueChange={setFilterLevel}>
            <SelectTrigger className="rounded-xl border-gray-200 text-base font-medium text-textPrimary bg-white h-9">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Effective">Effective</SelectItem>
              <SelectItem value="Developing">Developing</SelectItem>
              <SelectItem value="Needs Support">Needs Support</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Primary Action Button */}
      <div>
        <button
          type="button"
          onClick={onSetUpClick}
          className="bg-primary hover:bg-[#0274d4] text-white px-5 py-2.5 rounded-2xl font-semibold  sm:text-base transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
        >
          Set Up Annual Observation
        </button>
      </div>

      {/* Dotted Separator */}
      <div className="border-b border-dashed border-gray-200/80 pt-1" />

      {/* Table Container */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <Table className="min-w-[750px]">
          <TableHeader>
            <TableRow className="border-b border-gray-100 hover:bg-transparent">
              <TableHead className="w-[28%] min-w-[200px] px-4 py-4">
                <div className="flex items-center gap-2.5">
                  <Checkbox
                    className="!rounded-[4px] border-gray-400 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9] data-[state=checked]:text-white"
                    checked={
                      selectedIds.length === filteredData.length &&
                      filteredData.length > 0
                    }
                    onCheckedChange={handleSelectAll}
                    aria-label="Select all teachers"
                  />
                  <span className="font-normal text-[15px] text-[#5A5A5A]">Name</span>
                </div>
              </TableHead>

              <TableHead className="w-[28%] px-4 py-4 font-normal text-[15px] text-[#5A5A5A]">
                Start Teacher Observation
              </TableHead>

              <TableHead className="w-[20%] px-4 py-4 font-normal text-[15px] text-[#5A5A5A]">
                Lat Obs. Score
              </TableHead>

              <TableHead className="w-[24%] px-4 py-4 font-normal text-[15px] text-[#5A5A5A]">
                Performance Level
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-[16px] font-medium text-textPrimary">
            {filteredData.map((row) => {
              const isSelected = selectedIds.includes(row.id)

              return (
                <TableRow
                  key={row.id}
                  className={`hover:bg-gray-50/80 transition-colors cursor-pointer border-b border-gray-100/80 ${isSelected ? "bg-[#038AF9]/5" : ""
                    }`}
                >
                  {/* Name Column with Square Checkbox */}
                  <TableCell
                    className="px-4 py-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-2.5">
                      <Checkbox
                        checked={isSelected}
                        className="!rounded-[4px] border-gray-400 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9] data-[state=checked]:text-white"
                        onCheckedChange={(checked) =>
                          toggleSelectRow(row.id, !!checked)
                        }
                        aria-label={`Select ${row.name}`}
                      />
                      <span className="font-medium text-[16px] text-textPrimary">
                        {row.name}
                      </span>
                    </div>
                  </TableCell>

                  {/* Start Teacher Observation Button / Badge */}
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                    {row.observationStatus === "action" && (
                      <button
                        type="button"
                        className="px-4 py-1.5 rounded-full border border-[#038AF9] text-[#038AF9] hover:bg-[#038AF9]/10 text-[14px] font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <span>→</span> Observe Teacher
                      </button>
                    )}
                    {row.observationStatus === "completed" && (
                      <span className="px-3.5 py-1 rounded-full border border-[#66BB6A] text-[#2E7D32] text-[12px] font-medium bg-[#66BB6A]/10 inline-block">
                        Completed
                      </span>
                    )}
                    {row.observationStatus === "none" && (
                      <span className="text-gray-400 font-medium px-2 text-[16px]">
                        ---
                      </span>
                    )}
                  </TableCell>

                  {/* Lat Obs. Score Column */}
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5 font-bold text-[16px] text-textPrimary">
                      <Star className="w-4 h-4 text-[#038AF9] fill-[#038AF9]" />
                      <span>{row.score.toFixed(1)}</span>
                    </div>
                  </TableCell>

                  {/* Performance Level Column */}
                  <TableCell className="px-4 py-4 whitespace-nowrap font-normal text-[16px] text-textPrimary">
                    {row.performanceLevel}
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

export default LatestTeacherObservationTable
