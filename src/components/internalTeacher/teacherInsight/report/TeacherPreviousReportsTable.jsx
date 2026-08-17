import React from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"

const DEFAULT_REPORTS = [
  { id: 1, year: "2026" },
  { id: 2, year: "2024" },
  { id: 3, year: "2023" },
  { id: 4, year: "2024" },
  { id: 5, year: "2023" },
]

const TeacherPreviousReportsTable = ({ reports = DEFAULT_REPORTS, onDownload }) => {
  return (
    <div className="w-full bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xs font-urbanist">
      {/* Title */}
      <h3 className="text-[24px] font-semibold text-[#080808]">
        Previous Reports
      </h3>

      {/* Dotted Divider */}
      <div className="border-b border-dashed border-gray-200/80 my-2" />

      {/* Shadcn Table */}
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
            {reports.map((row) => (
              <TableRow
                key={row.id || row.year}
                className="hover:bg-gray-50/50 transition-colors border-gray-100"
              >
                {/* Year Cell */}
                <TableCell className="py-5 px-6 text-[16px] font-normal text-textPrimary">
                  {row.year}
                </TableCell>

                {/* Actions Cell - ALL rows rendered with Download icon */}
                <TableCell className="py-5 px-6 text-right">
                  <div className="flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => onDownload && onDownload(row)}
                      className="w-8 h-8 rounded-full bg-[rgba(8,8,8,0.04)] text-gray-500 hover:text-[#080808] hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer"
                      title="Download Report"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <path
                          d="M2.03125 11.4907C2.03125 12.1193 2.03125 12.4336 2.10035 12.6915C2.28785 13.3912 2.83443 13.9378 3.53421 14.1253C3.79207 14.1944 4.10636 14.1944 4.73495 14.1944H11.4942C12.1228 14.1944 12.4371 14.1944 12.695 14.1253C13.3947 13.9378 13.9413 13.3912 14.1288 12.6915C14.1979 12.4336 14.1979 12.1193 14.1979 11.4907"
                          stroke="#1F1F21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.1537 7.77323C11.1537 7.77323 8.91352 10.8149 8.11194 10.8149C7.31043 10.8149 5.07031 7.77323 5.07031 7.77323M8.11194 10.139V2.02783"
                          stroke="#1F1F21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
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

export default TeacherPreviousReportsTable
