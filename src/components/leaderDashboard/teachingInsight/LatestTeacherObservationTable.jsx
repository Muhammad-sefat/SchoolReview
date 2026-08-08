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
                        className="px-4 py-2 rounded-[10px] border border-primary bg-[#FAFAFA] text-textPrimary hover:bg-[#038AF9]/10 text-[16px] font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5"
                      >
                        → Observe Teacher
                      </button>
                    )}
                    {row.observationStatus === "completed" && (
                      <span className="px-3.5 py-1 rounded-full border border-[#66BB6A] text-textPrimary text-[12px] font-normal inline-block">
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
                    <div className="flex items-center gap-1.5 font-normal text-[16px] text-textBlack">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89506 2.46208C9.44081 1.40164 10.9706 1.40164 11.5164 2.46208L13.3551 6.03535C13.3856 6.09465 13.443 6.13591 13.5093 6.14638L17.5062 6.77679C18.6917 6.96377 19.1641 8.40241 18.3164 9.24425L15.4551 12.0855C15.4076 12.1326 15.3858 12.1992 15.3963 12.2648L16.027 16.2302C16.2139 17.4055 14.9765 18.295 13.9061 17.755L10.3011 15.9362C10.2412 15.906 10.1702 15.906 10.1103 15.9362L6.50534 17.755C5.43494 18.295 4.19759 17.4055 4.3845 16.2302L5.01518 12.2648C5.02562 12.1992 5.00378 12.1326 4.95639 12.0855L2.09504 9.24425C1.24734 8.40241 1.71974 6.96377 2.90524 6.77679L6.90212 6.14638C6.96848 6.13591 7.02579 6.09465 7.0563 6.03535L8.89506 2.46208Z" fill="#038AF9" />
                      </svg>
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
