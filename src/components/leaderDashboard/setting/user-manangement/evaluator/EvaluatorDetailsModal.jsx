import React from "react"
import { FileText } from "lucide-react"
import { Title24 } from "@/components/typho/Title"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const EvaluatorDetailsModal = ({ isOpen, onClose, evaluator, onApprove, onDecline }) => {
  if (!evaluator) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-[95vw] rounded-3xl p-6 sm:p-8 space-y-6 bg-white border border-gray-200 shadow-2xl font-urbanist">
        <DialogHeader className="p-0 space-y-1 text-left pb-3 border-b border-gray-100">
          <DialogTitle asChild>
            <Title24 className="text-[#080808] font-semibold">Evaluator Details</Title24>
          </DialogTitle>
        </DialogHeader>

        {/* Details Grid matching Screenshot 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
          <div className="space-y-1">
            <span className="text-[14px] font-normal text-[#5A5A5A]">Name</span>
            <p className="text-[16px] font-normal text-[#080808]">{evaluator.name || "Courtney Henry"}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[14px] font-normal text-[#5A5A5A]">Email</span>
            <p className="text-[16px] font-normal text-[#080808]">{evaluator.email || "courtneyhenry7@example.com"}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[14px] font-normal text-[#5A5A5A]">Status</span>
            <p className="text-[16px] font-normal text-[#080808] capitalize">{evaluator.status || "Pending"}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[14px] font-normal text-[#5A5A5A]">Document</span>
            <div className="flex items-center gap-2 p-2 rounded-xl border border-gray-200 bg-gray-50/50 w-fit">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-[14px] font-normal text-[#080808]">accreditation_credentials.pdf</span>
            </div>
          </div>
        </div>

        {/* Note Section */}
        <div className="space-y-1 pt-1">
          <span className="text-[14px] font-normal text-[#5A5A5A]">Note</span>
          <p className="text-[16px] font-normal text-[#080808] leading-relaxed">
            I would like to join your school as a Evaluator. Please review and approve my request.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={() => {
              onClose()
              if (onDecline) onDecline(evaluator)
            }}
            className="px-6 py-2.5 rounded-xl border border-gray-200 text-[16px] font-medium text-[#080808] hover:bg-gray-50 cursor-pointer transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => {
              onClose()
              if (onApprove) onApprove(evaluator)
            }}
            className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium cursor-pointer shadow-xs transition-colors"
          >
            Approve
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EvaluatorDetailsModal
