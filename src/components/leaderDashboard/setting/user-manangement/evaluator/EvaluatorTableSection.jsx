import React, { useState } from "react"
import { Eye, XCircle, Trash2 } from "lucide-react"
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
import EvaluatorDetailsModal from "./EvaluatorDetailsModal"
import DeclineEvaluatorModal from "./DeclineEvaluatorModal"
import ApproveEvaluatorModal from "./ApproveEvaluatorModal"
import DeleteEvaluatorModal from "./DeleteEvaluatorModal"

const ApproveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_10795_143898_ev)">
      <path d="M11.3359 2.22489C10.3553 1.65765 9.21687 1.33301 8.0026 1.33301C4.3207 1.33301 1.33594 4.31777 1.33594 7.99968C1.33594 11.6815 4.3207 14.6663 8.0026 14.6663C11.6845 14.6663 14.6693 11.6815 14.6693 7.99968C14.6693 7.54308 14.6233 7.09714 14.5359 6.66634" stroke="#1F1F21" strokeLinecap="round" />
      <path d="M5.33594 8.33301C5.33594 8.33301 6.33594 8.33301 7.66927 10.6663C7.66927 10.6663 11.3751 4.55523 14.6693 3.33301" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_10795_143898_ev">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const INITIAL_EVALUATORS = [
  {
    id: 1,
    name: "Albert Flores",
    email: "georgia.young@example.com",
    status: "Verified",
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    email: "tanya.hill@example.com",
    status: "Pending",
  },
  {
    id: 3,
    name: "Wade Warren",
    email: "jessica.hanson@example.com",
    status: "Declined",
  },
  {
    id: 4,
    name: "Kristin Watson",
    email: "felicia.reid@example.com",
    status: "Verified",
  },
  {
    id: 5,
    name: "Ralph Edwards",
    email: "willie.jennings@example.com",
    status: "Verified",
  },
  {
    id: 6,
    name: "Kristin Watson",
    email: "felicia.reid@example.com",
    status: "Verified",
  },
]

const EvaluatorTableSection = () => {
  const [evaluators, setEvaluators] = useState(INITIAL_EVALUATORS)
  const [statusFilter, setStatusFilter] = useState("all")

  // Modals state
  const [viewingEvaluator, setViewingEvaluator] = useState(null)
  const [approvingEvaluator, setApprovingEvaluator] = useState(null)
  const [decliningEvaluator, setDecliningEvaluator] = useState(null)
  const [deletingEvaluator, setDeletingEvaluator] = useState(null)

  const handleApproveConfirm = (id) => {
    setEvaluators((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: "Verified" } : e))
    )
  }

  const handleDeclineConfirm = (id) => {
    setEvaluators((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: "Declined" } : e))
    )
  }

  const handleDeleteConfirm = (id) => {
    setEvaluators((prev) => prev.filter((e) => e.id !== id))
  }

  const filteredEvaluators = evaluators.filter((e) => {
    if (statusFilter === "all") return true
    return e.status.toLowerCase() === statusFilter.toLowerCase()
  })

  const getStatusPill = (status) => {
    switch (status) {
      case "Verified":
        return (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-200/80 inline-block">
            Verified
          </span>
        )
      case "Pending":
        return (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200/80 inline-block">
            Pending
          </span>
        )
      case "Declined":
        return (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-600 border border-rose-200/80 inline-block">
            Declined
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6 font-urbanist">
      {/* Header & Filter */}
      <div className="flex items-center justify-between gap-4">
        <Title24 className="text-[#080808]">Evaluators</Title24>

        <div className="flex items-center gap-3 shrink-0 whitespace-nowrap">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-11 px-3.5 rounded-xl border-gray-200 text-[16px] font-medium text-textPrimary bg-white min-w-[100px] overflow-hidden">
              <SelectValue placeholder="All" className="truncate text-left whitespace-nowrap" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="declined">Declined</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center px-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#038AF9] align-middle" />
            </TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] pl-1">Name</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Email</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Status</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredEvaluators.map((row) => (
            <TableRow key={row.id} className="hover:bg-gray-50/50">
              <TableCell className="text-center px-2">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#038AF9] align-middle" />
              </TableCell>
              <TableCell className="text-[16px] font-normal text-[#080808] pl-1">{row.name}</TableCell>
              <TableCell className="text-[16px] font-normal text-[#5A5A5A]">{row.email}</TableCell>
              <TableCell>{getStatusPill(row.status)}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2 text-[#1F1F21]">
                  {/* Eye Icon Button */}
                  <button
                    type="button"
                    onClick={() => setViewingEvaluator(row)}
                    className="w-7 h-7 rounded-full bg-[rgba(8,8,8,0.04)] flex items-center justify-center hover:bg-gray-200/80 transition-colors cursor-pointer"
                    title="View Evaluator Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Actions depending on status */}
                  {row.status === "Pending" ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setApprovingEvaluator(row)}
                        className="w-7 h-7 rounded-full bg-[rgba(8,8,8,0.04)] flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors cursor-pointer"
                        title="Approve Evaluator"
                      >
                        <ApproveIcon />
                      </button>
                      <button
                        type="button"
                        onClick={() => setDecliningEvaluator(row)}
                        className="w-7 h-7 rounded-full bg-[rgba(8,8,8,0.04)] flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-colors cursor-pointer"
                        title="Decline Evaluator"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setDeletingEvaluator(row)}
                      className="w-7 h-7 rounded-full bg-[rgba(8,8,8,0.04)] flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer"
                      title="Delete Evaluator"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modals */}
      <EvaluatorDetailsModal
        isOpen={!!viewingEvaluator}
        onClose={() => setViewingEvaluator(null)}
        evaluator={viewingEvaluator}
        onApprove={(e) => setApprovingEvaluator(e)}
        onDecline={(e) => setDecliningEvaluator(e)}
      />

      <ApproveEvaluatorModal
        isOpen={!!approvingEvaluator}
        onClose={() => setApprovingEvaluator(null)}
        evaluator={approvingEvaluator}
        onApproveConfirm={handleApproveConfirm}
      />

      <DeclineEvaluatorModal
        isOpen={!!decliningEvaluator}
        onClose={() => setDecliningEvaluator(null)}
        evaluator={decliningEvaluator}
        onDeclineConfirm={handleDeclineConfirm}
      />

      <DeleteEvaluatorModal
        isOpen={!!deletingEvaluator}
        onClose={() => setDeletingEvaluator(null)}
        evaluator={deletingEvaluator}
        onDeleteConfirm={handleDeleteConfirm}
      />
    </div>
  )
}

export default EvaluatorTableSection
