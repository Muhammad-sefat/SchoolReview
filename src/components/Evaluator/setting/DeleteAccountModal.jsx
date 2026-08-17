import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"

const DeleteAccountModal = ({ isOpen, onClose, onConfirmDelete }) => {
  const [step, setStep] = useState(1) // 1: Confirmation, 2: Password
  const [checkData, setCheckData] = useState(false)
  const [checkUndone, setCheckUndone] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleNext = () => {
    if (step === 1) {
      setStep(2)
    } else {
      if (onConfirmDelete) onConfirmDelete()
      onClose()
    }
  }

  const handleCloseModal = () => {
    setStep(1)
    setCheckData(false)
    setCheckUndone(false)
    setPassword("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-w-[480px] w-[95vw] p-6 rounded-3xl font-urbanist bg-white border border-gray-100 shadow-2xl ">
        {step === 1 ? (
          <>
            {/* Step 1: Delete account? */}
            <DialogHeader className="pb-3 border-b border-dashed border-gray-200">
              <DialogTitle className="text-[24px] font-semibold text-[#080808] text-left">
                Delete account?
              </DialogTitle>
            </DialogHeader>

            <p className="text-base  text-textBlack font-normal leading-relaxed">
              Your account and personal data will be scheduled for permanent deletion after 30 days, where technically possible. Some anonymised or legally required information may be retained.
            </p>

            <div className="space-y-3 pt-1">
              <label className="flex items-center gap-3 cursor-pointer text-base text-[#080808]">
                <Checkbox
                  checked={checkData}
                  onCheckedChange={(checked) => setCheckData(!!checked)}
                  className="rounded-sm! border-gray-400 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9]"
                />
                <span>Delete all my personal data and account</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer text-base text-[#080808]">
                <Checkbox
                  checked={checkUndone}
                  onCheckedChange={(checked) => setCheckUndone(!!checked)}
                  className="rounded-sm! border-gray-400 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9]"
                />
                <span>I understand this action cannot be undone.</span>
              </label>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-6 py-2.5 rounded-xl border border-[#E7E8EA] bg-[#FAFAFA] text-[#1F1F21] text-base font-medium hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!checkData || !checkUndone}
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0270ce] disabled:opacity-50 text-white text-base font-medium transition-colors cursor-pointer shadow-xs"
              >
                Delete Account
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Step 2: Confirm your password */}
            <DialogHeader className="pb-3 border-b border-dashed border-gray-200">
              <DialogTitle className="text-[24px] font-semibold text-[#080808] text-left">
                Confirm your password
              </DialogTitle>
            </DialogHeader>

            <p className="text-secondary text-base font-normal leading-relaxed">
              For security, please enter your password to confirm this action.
            </p>

            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-12 pl-4 pr-12 rounded-xl border border-gray-200 text-base text-[#080808] placeholder:text-gray-400 focus:outline-none focus:border-[#038AF9] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-6 py-2.5 rounded-xl border border-[#E7E8EA] bg-[#FAFAFA] text-[#1F1F21] text-base font-medium hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0270ce] text-white text-base font-medium transition-colors cursor-pointer shadow-xs"
              >
                Delete Account
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default DeleteAccountModal
