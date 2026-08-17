import React from "react"
import { Title24 } from "@/components/typho/Title"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const LogoutModal = ({ isOpen, onClose, onLogoutConfirm }) => {
  const handleLogout = () => {
    console.log("Logged out successfully")
    if (onLogoutConfirm) onLogoutConfirm()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-[95vw] rounded-3xl p-6  bg-white border border-gray-200 shadow-2xl font-urbanist">
        <DialogHeader className="p-0 space-y-1 text-left pb-3 border-b border-gray-100">
          <DialogTitle asChild>
            <Title24 className="text-[#080808] font-semibold">Log out?</Title24>
          </DialogTitle>
        </DialogHeader>

        <div>
          <p className="text-[18px] font-normal text-textPrimary leading-relaxed">
            Are you sure you want to log out?
          </p>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-gray-200 text-[18px] font-medium text-[#080808] hover:bg-gray-50 cursor-pointer transition-colors"
          >
            Stay Signed In
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="px-6 py-2.5 rounded-xl bg-primary hover:bg-[#0274d4] text-white text-[18px] font-semibold cursor-pointer shadow-xs transition-colors"
          >
            Log Out
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LogoutModal
