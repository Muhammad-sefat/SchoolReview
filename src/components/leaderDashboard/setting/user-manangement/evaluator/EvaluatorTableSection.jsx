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
      <path
        d="M11.3359 2.22489C10.3553 1.65765 9.21687 1.33301 8.0026 1.33301C4.3207 1.33301 1.33594 4.31777 1.33594 7.99968C1.33594 11.6815 4.3207 14.6663 8.0026 14.6663C11.6845 14.6663 14.6693 11.6815 14.6693 7.99968C14.6693 7.54308 14.6233 7.09714 14.5359 6.66634"
        stroke="#1F1F21"
        strokeLinecap="round"
      />
      <path
        d="M5.33594 8.33301C5.33594 8.33301 6.33594 8.33301 7.66927 10.6663C7.66927 10.6663 11.3751 4.55523 14.6693 3.33301"
        stroke="#1F1F21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    id: 2,
    name: "Savannah Nguyen",
    email: "tanya.hill@example.com",
    status: "Pending",
  },
  {
    id: 1,
    name: "Albert Flores",
    email: "georgia.young@example.com",
    status: "Verified",
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
  {
    id: 3,
    name: "Wade Warren",
    email: "jessica.hanson@example.com",
    status: "Declined",
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

  // Filter groups according to statusFilter
  const pendingList = evaluators.filter((e) => e.status === "Pending")
  const approvedList = evaluators.filter((e) => e.status === "Verified" || e.status === "Approved")
  const declinedList = evaluators.filter((e) => e.status === "Declined")

  const statusGroups = [
    {
      key: "pending",
      title: "Pending",
      badge: (
        <span className="px-[12px] py-[6px] rounded-full text-sm font-medium leading-tight bg-white text-[#1F1F21] border border-[#FFC300] inline-block shadow-2xs">
          Pending
        </span>
      ),
      items: pendingList,
    },
    {
      key: "verified",
      title: "Approved",
      badge: (
        <span className="px-[12px] py-[6px] rounded-full text-sm font-medium leading-tight bg-white text-[#1F1F21] border border-[#66BB6A] inline-block shadow-2xs">
          Approved
        </span>
      ),
      items: approvedList,
    },
    {
      key: "declined",
      title: "Declined",
      badge: (
        <span className="px-[12px] py-[6px] rounded-full text-sm font-medium leading-tight bg-white text-[#1F1F21] border border-[#E53935] inline-block shadow-2xs">
          Declined
        </span>
      ),
      items: declinedList,
    },
  ].filter((group) => {
    if (statusFilter === "all") return true
    if (statusFilter === "approved" || statusFilter === "verified") return group.key === "verified"
    return group.key === statusFilter
  })

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6 font-urbanist">
      {/* Header & Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <Title24 className="text-[#080808]">Evaluators</Title24>

        <div className="flex items-center gap-3 shrink-0 whitespace-nowrap">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-11 px-3.5 rounded-xl border-gray-200 text-[15px] sm:text-[16px] font-medium text-textPrimary bg-white min-w-[120px] w-full sm:w-auto overflow-hidden">
              <SelectValue placeholder="All" className="truncate text-left whitespace-nowrap" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="declined">Declined</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table containerClassName="overflow-x-auto max-w-full pb-2 [scrollbar-width:thin]" className="min-w-[650px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80">
            <TableHead className="w-36 text-[16px] font-semibold text-[#080808] pl-4 border-r border-gray-200/70">
              Status Group
            </TableHead>
            <TableHead className="w-10 text-center px-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#038AF9] align-middle" />
            </TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] pl-1">Name</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Email</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {statusGroups.map((group, groupIdx) => {
            if (group.items.length === 0) return null

            return group.items.map((row, rowIdx) => (
              <TableRow
                key={row.id}
                className={`hover:bg-gray-50/60 ${
                  rowIdx === group.items.length - 1 && groupIdx < statusGroups.length - 1
                    ? "border-b-2 border-gray-200"
                    : ""
                }`}
              >
                {/* Status Column with rowSpan spanning the group */}
                {rowIdx === 0 && (
                  <TableCell
                    rowSpan={group.items.length}
                    className="align-top py-5 px-4 border-r border-gray-200/70 bg-gray-50/30 text-left font-medium select-none"
                  >
                    <div className="sticky top-4 space-y-1">
                      {group.badge}
                      <p className="text-xs text-gray-400 font-normal pl-1 pt-0.5">
                        {group.items.length} {group.items.length === 1 ? "user" : "users"}
                      </p>
                    </div>
                  </TableCell>
                )}

                <TableCell className="text-center px-2">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#038AF9] align-middle" />
                </TableCell>
                <TableCell className="text-[16px] font-normal text-[#080808] pl-1">{row.name}</TableCell>
                <TableCell className="text-[16px] font-normal text-[#5A5A5A]">{row.email}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2 text-[#1F1F21]">
                    {/* View Details Eye Icon Button */}
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
            ))
          })}
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
