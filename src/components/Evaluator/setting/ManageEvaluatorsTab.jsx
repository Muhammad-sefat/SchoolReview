import React, { useState } from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"
import InviteEvaluatorModal from "./InviteEvaluatorModal"
import RemoveEvaluatorModal from "./RemoveEvaluatorModal"

const DeleteTrashSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13 3.66797L12.4093 13.4153C12.3666 14.119 11.7834 14.668 11.0783 14.668H4.92164C4.21659 14.119 3.6334 14.119 3.59075 13.4153L3 3.66797" stroke="#1F1F21" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 3.66536H5.33333M5.33333 3.66536L6.16017 1.73608C6.26522 1.49096 6.50625 1.33203 6.77293 1.33203H9.22707C9.49373 1.33203 9.7348 1.49096 9.8398 1.73608L10.6667 3.66536M5.33333 3.66536H10.6667M14 3.66536H10.6667" stroke="#1F1F21" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.33594 11V7" stroke="#1F1F21" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.66406 11V7" stroke="#1F1F21" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const INITIAL_EVALUATORS = [
  { id: 1, name: "Dianne Russell", email: "deanna.curtis@example.com", status: "Active" },
  { id: 2, name: "Brooklyn Simmons", email: "jackson.graham@example.com", status: "Active" },
  { id: 3, name: "Albert Flores", email: "felicia.reid@example.com", status: "Pending" },
  { id: 4, name: "Jane Cooper", email: "georgia.young@example.com", status: "Active" },
]

const ManageEvaluatorsTab = () => {
  const [evaluators, setEvaluators] = useState(INITIAL_EVALUATORS)
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)
  const [evaluatorToRemove, setEvaluatorToRemove] = useState(null)

  const handleInvite = (newEvaluator) => {
    setEvaluators((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newEvaluator.name,
        email: newEvaluator.email,
        status: "Pending",
      },
    ])
  }

  const confirmDelete = () => {
    if (evaluatorToRemove) {
      setEvaluators((prev) => prev.filter((item) => item.id !== evaluatorToRemove.id))
      setEvaluatorToRemove(null)
    }
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-xs space-y-6 font-urbanist">
      {/* Header & Invite Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-[24px] font-semibold text-[#080808]">Evaluators</h3>
          <p className="text-secondary text-sm sm:text-base font-normal pt-1">
            Invite and manage evaluators with access to your account.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsInviteModalOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0270ce] text-white text-base font-medium transition-colors cursor-pointer shadow-xs whitespace-nowrap self-start sm:self-auto"
        >
          Invite Evaluator
        </button>
      </div>

      {/* Dotted Line Separator */}
      <div className="border-b border-dashed border-gray-200/80 my-2" />

      {/* Evaluators Shadcn Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-100 hover:bg-transparent">
              <TableHead className="font-normal text-base text-secondary text-left">Name</TableHead>
              <TableHead className="font-normal text-base text-secondary text-center">Email</TableHead>
              <TableHead className="font-normal text-base text-secondary text-center">Status</TableHead>
              <TableHead className="font-normal text-base text-secondary text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {evaluators.map((row) => (
              <TableRow key={row.id} className="border-b border-gray-100/80 hover:bg-gray-50/80 transition-colors">
                <TableCell className="text-base font-medium text-[#080808] text-left py-4">
                  {row.name}
                </TableCell>
                <TableCell className="text-base font-normal text-[#080808] text-center py-4">
                  {row.email}
                </TableCell>
                <TableCell className="text-center py-4">
                  {row.status === "Active" ? (
                    <span className="px-3 py-0.5 rounded-full border border-[#66BB6A] bg-white text-[#66BB6A] text-sm font-medium inline-block">
                      Active
                    </span>
                  ) : (
                    <span className="px-3 py-0.5 rounded-full border border-[#FE9A00] bg-white text-[#FE9A00] text-sm font-medium inline-block">
                      Pending
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-right py-4">
                  <button
                    type="button"
                    onClick={() => setEvaluatorToRemove(row)}
                    className="w-8 h-8 rounded-full bg-[rgba(8,8,8,0.04)] hover:bg-[rgba(8,8,8,0.08)] flex items-center justify-center transition-colors cursor-pointer inline-flex"
                    title="Delete Evaluator"
                  >
                    <DeleteTrashSVG />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Invite Evaluator Modal */}
      {isInviteModalOpen && (
        <InviteEvaluatorModal
          isOpen={isInviteModalOpen}
          onClose={() => setIsInviteModalOpen(false)}
          onInvite={handleInvite}
        />
      )}

      {/* Remove Evaluator Confirmation Modal */}
      {evaluatorToRemove && (
        <RemoveEvaluatorModal
          isOpen={!!evaluatorToRemove}
          onClose={() => setEvaluatorToRemove(null)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default ManageEvaluatorsTab
