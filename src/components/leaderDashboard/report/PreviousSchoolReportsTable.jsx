import React from "react"
import { Plus, Download } from "lucide-react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"

const REPORTS_DATA = [
  { id: 1, year: "2026", type: "add" },
  { id: 2, year: "2024", type: "download" },
  { id: 3, year: "2023", type: "download" },
  { id: 4, year: "2024", type: "download" },
  { id: 5, year: "2023", type: "download" },
]

const PreviousSchoolReportsTable = ({ onOpenModal }) => {
  return (
    <div className="w-full bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xs font-urbanist">
      {/* Title (24px font-semibold) */}
      <h3 className="text-[24px] font-semibold text-[#080808]">
        Previous School Reports
      </h3>

      {/* Dotted Divider */}
      <div className="border-b border-dashed border-gray-200/80 my-2" />

      {/* Shadcn Table Component */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <Table className="w-full text-left">
          <TableHeader>
            <TableRow className="border-b border-gray-100 bg-[#FAFAFA]/60 hover:bg-[#FAFAFA]/60">
              <TableHead className="py-4 px-6 text-[16px] font-normal text-secondary h-auto">
                Report of Year
              </TableHead>
              <TableHead className="py-4 px-6 text-[16px] font-normal text-secondary text-right h-auto">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100/80">
            {REPORTS_DATA.map((row) => (
              <TableRow
                key={row.id}
                className="hover:bg-gray-50/50 transition-colors border-gray-100"
              >
                {/* Year Cell (16px text-textPrimary) */}
                <TableCell className="py-5 px-6 text-[16px] font-normal text-textPrimary">
                  {row.year}
                </TableCell>

                {/* Actions Cell */}
                <TableCell className="py-5 px-6 text-right">
                  <div className="flex items-center justify-end">
                    {row.type === "add" ? (
                      <button
                        type="button"
                        onClick={onOpenModal}
                        className="w-8 h-8 rounded-full border border-gray-200/90 text-gray-500 hover:text-[#080808] hover:border-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                        title="Create Report"
                      >
                        <Plus className="w-4 h-4 stroke-[2]" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="w-8 h-8 rounded-full border border-gray-200/90 text-gray-500 hover:text-[#080808] hover:border-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                        title="Download Report"
                      >
                        <Download className="w-4 h-4 stroke-[2]" />
                      </button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default PreviousSchoolReportsTable
