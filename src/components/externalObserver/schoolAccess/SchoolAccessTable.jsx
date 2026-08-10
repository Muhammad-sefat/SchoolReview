import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, Trash2, Info, XCircle, RefreshCw, ChevronDown } from "lucide-react"
import { Title24 } from "@/components/typho/Title"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import RequestSchoolAccessModal from "./RequestSchoolAccessModal"

// User Provided Resend Toast Checkmark SVG
const ResendSuccessCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const INITIAL_SCHOOL_ACCESS_DATA = [
  {
    id: 1,
    schoolName: "Kantonsschule Zug (KSZ)",
    status: "Approved",
  },
  {
    id: 2,
    schoolName: "Kantonsschule Menzingen (KSM)",
    status: "Declined",
  },
  {
    id: 3,
    schoolName: "Kantonsschule Rotkreuz",
    status: "Pending",
  },
  {
    id: 4,
    schoolName: "Fachmittelschule Zug (FMS Zug)",
    status: "Approved",
  },
]

const statusPriority = {
  Pending: 1,
  Approved: 2,
  Declined: 3,
}

const SchoolAccessTable = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(INITIAL_SCHOOL_ACCESS_DATA)
  const [filterStatus, setFilterStatus] = useState("All")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value)
  }

  const filteredData = data.filter((item) => {
    if (filterStatus === "All") return true
    return item.status === filterStatus
  })

  const sortedData = [...filteredData].sort((a, b) => {
    return (statusPriority[a.status] || 99) - (statusPriority[b.status] || 99)
  })

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id))
  }

  const handleResend = (id) => {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 4000)
  }

  const handleModalSubmit = (formData) => {
    const newEntry = {
      id: Date.now(),
      schoolName: formData.school,
      status: "Pending",
    }
    setData((prev) => [newEntry, ...prev])
  }

  const renderStatusBadge = (status) => {
    switch (status) {
      case "Approved":
        return (
          <span className="inline-block px-3 py-1 text-sm font-normal text-[#080808] rounded-[104px] bg-white border border-[#66BB6A]">
            Approved
          </span>
        )
      case "Declined":
        return (
          <span className="inline-block px-3 py-1 text-sm font-normal text-[#080808] rounded-[104px] bg-white border border-[#E53935]">
            Declined
          </span>
        )
      case "Pending":
        return (
          <span className="inline-block px-3 py-1 text-sm font-normal text-[#080808] rounded-[104px] bg-white border border-[#FE9A00]">
            Pending
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6 font-urbanist">
      {/* Table Main Card */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">

        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-dashed border-gray-200">
          <div className="space-y-1">
            <Title24 className="text-[#080808] font-semibold">School Access</Title24>
            <p className="text-[16px] font-normal text-textBlack">
              Manage school observation access and invitation requests.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-[#038AF9] hover:bg-[#0270ce] text-white text-base font-medium rounded-[12px] transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              Request School Access
            </button>

            {/* Filter Dropdown */}
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="h-11 px-4 rounded-[12px] border-gray-200 text-sm font-medium text-[#080808] bg-white min-w-[110px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Declined">Declined</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table Container */}
        <Table containerClassName="overflow-x-auto border border-gray-100 rounded-2xl bg-white shadow-2xs w-full max-w-full" className="w-full min-w-[650px]">
          <TableHeader>
            <TableRow className="border-b border-gray-100 hover:bg-transparent bg-gray-50/40">
              <TableHead className="text-[16px] font-medium text-[#5A5A5A] pl-4 py-4 whitespace-nowrap">School Name</TableHead>
              <TableHead className="text-[16px] font-medium text-[#5A5A5A] text-center py-4 whitespace-nowrap">Status</TableHead>
              <TableHead className="text-[16px] font-medium text-[#5A5A5A] text-center py-4 whitespace-nowrap">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.length > 0 ? (
              sortedData.map((row) => (
                <TableRow key={row.id} className="border-b border-gray-50/80 hover:bg-gray-50/50 transition-colors">
                  <TableCell className="text-[16px] font-normal text-[#080808] pl-4 py-5 whitespace-nowrap">{row.schoolName}</TableCell>
                  <TableCell className="text-center py-5 whitespace-nowrap">
                    {renderStatusBadge(row.status)}
                  </TableCell>
                  <TableCell className="text-center py-5 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-3">
                      {row.status === "Approved" && (
                        <>
                          <button
                            type="button"
                            onClick={() => navigate("/review/observer-to-teacher")}
                            className="p-1.5 rounded-full bg-gray-100/80 text-[#5A5A5A] hover:text-[#038AF9] transition-colors cursor-pointer"
                            title="View School"
                          >
                            <Eye className="w-4 h-4 stroke-[1.75]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(row.id)}
                            className="p-1.5 rounded-full bg-gray-100/80 text-[#5A5A5A] hover:text-red-500 transition-colors cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4 stroke-[1.75]" />
                          </button>
                        </>
                      )}

                      {row.status === "Declined" && (
                        <>
                          <button
                            type="button"
                            className="p-1.5 rounded-full bg-gray-100/80 text-[#5A5A5A] hover:text-gray-700 transition-colors cursor-pointer"
                            title="Decline Info"
                          >
                            <Info className="w-4 h-4 stroke-[1.75]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(row.id)}
                            className="p-1.5 rounded-full bg-gray-100/80 text-[#5A5A5A] hover:text-red-500 transition-colors cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4 stroke-[1.75]" />
                          </button>
                        </>
                      )}

                      {row.status === "Pending" && (
                        <>
                          <button
                            type="button"
                            onClick={() => handleDelete(row.id)}
                            className="p-1.5 rounded-full bg-gray-100/80 text-[#5A5A5A] hover:text-red-500 transition-colors cursor-pointer"
                            title="Cancel Request"
                          >
                            <XCircle className="w-4 h-4 stroke-[1.75]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleResend(row.id)}
                            className="p-1.5 rounded-full bg-gray-100/80 text-[#5A5A5A] hover:text-[#038AF9] transition-colors cursor-pointer"
                            title="Resend Request"
                          >
                            <RefreshCw className="w-4 h-4 stroke-[1.75]" />
                          </button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-8 text-gray-500 text-sm">
                  No school access records found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Resend Toast Badge Overlay / Indicator matching Image 1 */}
      {showToast && (
        <div className="inline-flex items-center gap-2.5 px-4 py-3 bg-white border border-gray-200/90 rounded-[12px] shadow-sm font-urbanist text-sm text-[#080808] font-medium animate-fadeIn">
          <ResendSuccessCheckIcon />
          <span>Request resent successfully</span>
        </div>
      )}

      {/* Request School Access Modal */}
      <RequestSchoolAccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitSuccess={handleModalSubmit}
      />
    </div>
  )
}

export default SchoolAccessTable
