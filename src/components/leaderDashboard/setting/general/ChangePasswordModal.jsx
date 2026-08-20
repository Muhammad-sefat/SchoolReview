import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Title24 } from "@/components/typho/Title"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Change Password Submitted:", {
      currentPassword,
      newPassword,
      confirmPassword,
    })
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-[95vw] rounded-3xl p-6 sm:p-8  bg-white border border-gray-200 shadow-2xl font-urbanist">
        <DialogHeader className="p-0 space-y-1 text-left pb-3 border-b border-gray-100">
          <DialogTitle asChild>
            <Title24 className="text-[#080808] font-semibold">Change Password</Title24>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Current Password */}
          <div className="flex flex-col gap-3">
            <label className="text-[18px] font-medium text-[#080808]">Current password</label>
            <div className="relative flex items-center">
              <input
                type={showCurrent ? "text" : "password"}
                placeholder="Enter your current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full h-11 pl-4 pr-11 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="flex flex-col gap-2">
            <label className="text-[18px] font-medium text-[#080808]">New password</label>
            <p className="text-[13px] font-normal text-gray-400">
              Must be at least 8 characters and include a mix of letters and numbers.
            </p>
            <div className="relative flex items-center">
              <input
                type={showNew ? "text" : "password"}
                placeholder="Enter a new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full h-11 pl-4 pr-11 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="flex flex-col gap-3">
            <label className="text-[18px] font-medium text-[#080808]">Confirm new password</label>
            <div className="relative flex items-center">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full h-11 pl-4 pr-11 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Modal Footer matching Screenshot 2 */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl border border-gray-200 text-[16px] font-medium text-[#080808] hover:bg-gray-50 cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium cursor-pointer shadow-xs transition-colors"
            >
              Update Password
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ChangePasswordModal
