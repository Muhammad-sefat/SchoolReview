import React, { useState } from "react"
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

// Blue Star Icon for Overall Rating
const BlueStarIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.6772 2.9544C11.3321 1.68187 13.1679 1.68187 13.8228 2.9544L16.0293 7.24233C16.0659 7.31348 16.1347 7.363 16.2143 7.37556L21.0106 8.13205C22.4332 8.35643 23.0001 10.0828 21.9828 11.093L18.5492 14.5025C18.4923 14.559 18.4661 14.6389 18.4787 14.7177L19.2355 19.4762C19.4598 20.8865 17.9749 21.9539 16.6905 21.3059L12.3645 19.1234C12.2926 19.0871 12.2074 19.0871 12.1355 19.1234L7.80953 21.3059C6.52505 21.9539 5.04024 20.8865 5.26453 19.4762L6.02134 14.7177C6.03387 14.6389 6.00766 14.559 5.95079 14.5025L2.51718 11.093C1.49993 10.0828 2.06681 8.35643 3.48941 8.13205L8.28567 7.37556C8.3653 7.363 8.43407 7.31348 8.47069 7.24233L10.6772 2.9544Z" fill="#038AF9" />
  </svg>
)

// Safety Circle Badge with Solid Color BG and White Shield SVG inside (Matching Image 1)
const SafetyCircleBadge = ({ color = "#FE9A00" }) => (
  <div
    style={{ backgroundColor: color }}
    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-2xs"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M14 3.33203C12.5857 2.11204 10.4234 1.33203 8 1.33203C5.57663 1.33203 3.41425 2.11204 2 3.33203V7.33203C2 12.6654 8 14.6654 8 14.6654C8 14.6654 14 12.6654 14 7.33203V3.33203Z" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  </div>
)

// Alignment Circle Badge with Solid Color BG and White Alignment SVG inside (Matching Image 1)
const AlignmentCircleBadge = ({ color = "#FE9A00" }) => (
  <div
    style={{ backgroundColor: color }}
    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-2xs"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_10748_233113_badge)">
        <path d="M1.81576 10.8561C1.45117 10.8561 1.16254 10.7513 0.94987 10.5417C0.737196 10.332 0.630859 10.048 0.630859 9.68945V6.4082C0.630859 6.0497 0.737196 5.76562 0.94987 5.55599C1.16254 5.34635 1.45117 5.24154 1.81576 5.24154H5.0651C5.42969 5.24154 5.7168 5.34635 5.92643 5.55599C6.13911 5.76562 6.24544 6.0497 6.24544 6.4082V9.68945C6.24544 10.048 6.13911 10.332 5.92643 10.5417C5.7168 10.7513 5.42969 10.8561 5.0651 10.8561H1.81576ZM1.9388 9.90365H4.9375C5.04991 9.90365 5.1365 9.87175 5.19727 9.80794C5.26107 9.7411 5.29297 9.653 5.29297 9.54362V6.55859C5.29297 6.44618 5.26107 6.35807 5.19727 6.29427C5.1365 6.22743 5.04991 6.19401 4.9375 6.19401H1.9388C1.82943 6.19401 1.74284 6.22743 1.67904 6.29427C1.61827 6.35807 1.58789 6.44618 1.58789 6.55859V9.54362C1.58789 9.653 1.61827 9.7411 1.67904 9.80794C1.74284 9.87175 1.82943 9.90365 1.9388 9.90365ZM8 12.9616C7.86632 12.9616 7.75391 12.9175 7.66276 12.8294C7.57465 12.7413 7.5306 12.6319 7.5306 12.5013V3.59635C7.5306 3.46571 7.57465 3.35786 7.66276 3.27279C7.75391 3.18468 7.86632 3.14062 8 3.14062C8.13672 3.14062 8.24913 3.18468 8.33724 3.27279C8.42839 3.35786 8.47396 3.46571 8.47396 3.59635V12.5013C8.47396 12.6319 8.42839 12.7413 8.33724 12.8294C8.24913 12.9175 8.13672 12.9616 8 12.9616ZM10.9395 10.8561C10.5749 10.8561 10.2862 10.7513 10.0736 10.5417C9.86089 10.332 9.75456 10.048 9.75456 9.68945V6.4082C9.75456 6.0497 9.86089 5.76562 10.0736 5.55599C10.2862 5.34635 10.5749 5.24154 10.9395 5.24154H14.1842C14.5488 5.24154 14.8375 5.34635 15.0501 5.55599C15.2628 5.76562 15.3691 6.0497 15.3691 6.4082V9.68945C15.3691 10.048 15.2628 10.332 15.0501 10.5417C14.8375 10.7513 14.5488 10.8561 14.1842 10.8561H10.9395ZM11.0625 9.90365H14.0612C14.1706 9.90365 14.2572 9.87175 14.321 9.80794C14.3848 9.7411 14.4167 9.653 14.4167 9.54362V6.55859C14.4167 6.44618 14.3848 6.35807 14.321 6.29427C14.2572 6.22743 14.1706 6.19401 14.0612 6.19401H11.0625C10.9531 6.19401 10.8665 6.22743 10.8027 6.29427C10.7389 6.35807 10.707 6.44618 10.707 6.55859V9.54362C10.707 9.653 10.7389 9.7411 10.8027 9.80794C10.8665 9.87175 10.9531 9.90365 11.0625 9.90365Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_10748_233113_badge">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
)

const SCHOOLS_DATA = [
  { id: 1, name: "Kantonsschule Zug (KSZ)", rating: "2.0", safetyColor: "#FE9A00", trend: "↗ 9%", trendUp: true, alignmentColor: "#FE9A00" },
  { id: 2, name: "Kantonsschule Menzingen (KSM)", rating: "4.8", safetyColor: "#66BB6A", trend: "↘ 10%", trendUp: false, alignmentColor: "#66BB6A" },
  { id: 3, name: "Kantonsschule Rotkreuz", rating: "4.5", safetyColor: "#E53935", trend: "↗ 9%", trendUp: true, alignmentColor: "#FE9A00" },
  { id: 4, name: "Fachmittelschule Zug (FMS Zug)", rating: "3.5", safetyColor: "#66BB6A", trend: "↘ 2%", trendUp: false, alignmentColor: "#E53935" },
]

const EvaluatorSchoolListTable = ({ onSelectSchool }) => {
  const [selectedRows, setSelectedRows] = useState([])
  const [filterValue, setFilterValue] = useState("all")

  const toggleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    )
  }

  const toggleSelectAll = () => {
    if (selectedRows.length === SCHOOLS_DATA.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(SCHOOLS_DATA.map((s) => s.id))
    }
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-xs space-y-6 font-urbanist">
      {/* Table Title & Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-[24px] font-semibold text-[#080808]">
          School List
        </h2>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0270ce] text-white text-base font-medium transition-colors shadow-xs cursor-pointer"
          >
            Compare schools
          </button>

          {/* Shadcn Select Filter Dropdown */}
          <Select value={filterValue} onValueChange={setFilterValue}>
            <SelectTrigger className="w-[140px] h-10 rounded-xl bg-white border border-gray-200 text-textPrimary text-base font-normal focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Filter list" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-100 shadow-lg rounded-xl">
              <SelectItem value="all">All Schools</SelectItem>
              <SelectItem value="high">High Rating</SelectItem>
              <SelectItem value="needs">Needs Support</SelectItem>
              <SelectItem value="active">Active</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Dotted Line Separator */}
      <div className="border-b border-dashed border-gray-200/80 my-2" />

      {/* Shadcn Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-100 hover:bg-transparent">
              <TableHead className="w-12 text-center px-4">
                <Checkbox
                  className="!rounded-[4px] border-gray-400 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9] data-[state=checked]:text-white"
                  checked={selectedRows.length === SCHOOLS_DATA.length && SCHOOLS_DATA.length > 0}
                  onCheckedChange={toggleSelectAll}
                  aria-label="Select all schools"
                />
              </TableHead>
              <TableHead className="font-normal text-base text-secondary text-left">Name</TableHead>
              <TableHead className="font-normal text-base text-secondary text-center">Overall Rating</TableHead>
              <TableHead className="font-normal text-base text-secondary text-center">Safety</TableHead>
              <TableHead className="font-normal text-base text-secondary text-center">Trend</TableHead>
              <TableHead className="font-normal text-base text-secondary text-center">Alignment</TableHead>
              <TableHead className="font-normal text-base text-secondary text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SCHOOLS_DATA.map((row) => (
              <TableRow key={row.id} className="border-b border-gray-100/80 hover:bg-gray-50/80 transition-colors">
                <TableCell className="text-center px-4 py-4">
                  <Checkbox
                    className="!rounded-[4px] border-gray-400 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9] data-[state=checked]:text-white"
                    checked={selectedRows.includes(row.id)}
                    onCheckedChange={() => toggleSelectRow(row.id)}
                    aria-label={`Select ${row.name}`}
                  />
                </TableCell>
                <TableCell className="text-base font-medium text-[#080808] text-left">
                  {row.name}
                </TableCell>
                <TableCell className="text-base font-medium text-[#080808] text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <span>{row.rating}</span>
                    <BlueStarIcon className="w-4 h-4" />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <SafetyCircleBadge color={row.safetyColor} />
                  </div>
                </TableCell>
                <TableCell className={`text-base font-normal text-center ${row.trendUp ? "text-emerald-600" : "text-rose-500"}`}>
                  {row.trend}
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <AlignmentCircleBadge color={row.alignmentColor} />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <button
                    type="button"
                    onClick={() => onSelectSchool && onSelectSchool(row)}
                    style={{
                      borderRadius: "48px",
                      border: "1px solid #038AF9",
                    }}
                    className="px-3.5 py-1 text-[#038AF9] hover:bg-[#038AF9] hover:text-white text-xs font-medium transition-colors cursor-pointer inline-block"
                  >
                    View School
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default EvaluatorSchoolListTable
