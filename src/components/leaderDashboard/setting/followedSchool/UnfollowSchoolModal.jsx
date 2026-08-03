import React from "react"
import { Title24 } from "@/components/typho/Title"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const UnfollowSchoolModal = ({ isOpen, onClose, school, onUnfollowConfirm }) => {
  if (!school) return null

  const handleUnfollow = () => {
    if (onUnfollowConfirm) onUnfollowConfirm(school.id || school)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-[95vw] rounded-3xl p-6 space-y-4 bg-white border border-gray-200 shadow-2xl font-urbanist">
        <DialogHeader className="p-0 space-y-1 text-left pb-3 border-b border-gray-100">
          <DialogTitle asChild>
            <Title24 className="text-[#080808] font-semibold">Unfollow this school?</Title24>
          </DialogTitle>
        </DialogHeader>

        <div>
          <p className="text-[20px] font-normal text-textPrimary leading-relaxed">
            You'll stop receiving updates from this school and it will be removed from your followed schools.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-gray-200 text-[18px] font-medium text-[#080808] hover:bg-gray-50 cursor-pointer transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleUnfollow}
            className="px-6 py-2.5 rounded-xl bg-primary hover:bg-[#0274d4] text-white text-[18px] font-semibold cursor-pointer shadow-xs transition-colors"
          >
            Unfollow School?
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UnfollowSchoolModal
