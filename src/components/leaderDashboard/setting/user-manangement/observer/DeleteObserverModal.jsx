import React from "react"
import { Title24 } from "@/components/typho/Title"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const DeleteObserverModal = ({ isOpen, onClose, observer, onDeleteConfirm }) => {
  if (!observer) return null

  const handleDelete = () => {
    if (onDeleteConfirm) onDeleteConfirm(observer.id)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-[95vw] rounded-3xl p-6 sm:p-8 space-y-6 bg-white border border-gray-200 shadow-2xl font-urbanist">
        <DialogHeader className="p-0 space-y-1 text-left pb-3 border-b border-gray-100">
          <DialogTitle asChild>
            <Title24 className="text-[#080808] font-semibold">Delete Observer?</Title24>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-[16px] font-normal text-[#5A5A5A] leading-relaxed">
            Are you sure you want to remove this observer? They will no longer have access to your school.
          </p>
        </div>

        {/* Modal Footer matching Screenshot 5 */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-gray-200 text-[16px] font-medium text-[#080808] hover:bg-gray-50 cursor-pointer transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="px-6 py-2.5 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white text-[16px] font-medium cursor-pointer shadow-xs transition-colors"
          >
            Delete
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteObserverModal
