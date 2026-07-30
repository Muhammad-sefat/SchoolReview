import React, { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Title24, Title20 } from "@/components/typho/Title"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const SetupTwoFactorModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1) // Step 1: Select Method, Step 2: Verification
  const [method, setMethod] = useState("email")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [pin, setPin] = useState(["", "", "", "", "", ""])

  const handleClose = () => {
    setStep(1)
    setEmail("")
    setPhone("")
    setPin(["", "", "", "", "", ""])
    onClose()
  }

  const handleContinue = () => {
    console.log("2FA Step 1 Selected Method:", method, "Email:", email, "Phone:", phone)
    setStep(2)
  }

  const handlePinChange = (index, value) => {
    if (value.length > 1) return
    const updatedPin = [...pin]
    updatedPin[index] = value
    setPin(updatedPin)
  }

  const handleVerify = (e) => {
    e.preventDefault()
    console.log("2FA Verified with Code:", pin.join(""), "Method:", method)
    handleClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg w-[95vw] rounded-3xl p-6 sm:p-8 space-y-6 bg-white border border-gray-200 shadow-2xl font-urbanist">
        {step === 1 ? (
          <>
            {/* Step 1 Header */}
            <DialogHeader className="p-0 space-y-1 text-left pb-3 border-b border-gray-100">
              <DialogTitle asChild>
                <Title24 className="text-[#080808] font-semibold">Set Up Two-Factor Authentication</Title24>
              </DialogTitle>
              <p className="text-[16px] font-normal text-[#5A5A5A] mt-1">
                Choose how you'd like to receive your verification code
              </p>
            </DialogHeader>

            {/* Methods Cards matching Screenshot 3 */}
            <div className="space-y-4 pt-1">
              {/* Option 1: Email (Recommended) */}
              <div
                onClick={() => setMethod("email")}
                className={`p-5 rounded-2xl border transition-all cursor-pointer bg-white space-y-3 ${
                  method === "email"
                    ? "border-2 border-[#080808]"
                    : "border border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="space-y-1">
                  <h4 className="text-[18px] font-medium text-[#080808]">Email (Recommended)</h4>
                  <p className="text-[16px] font-normal text-[#5A5A5A]">
                    Receive verification codes at user@example.com
                  </p>
                </div>

                {method === "email" && (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email.."
                    className="w-full h-11 px-4 rounded-xl border border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
                  />
                )}
              </div>

              {/* Option 2: Phone (SMS) */}
              <div
                onClick={() => setMethod("sms")}
                className={`p-5 rounded-2xl border transition-all cursor-pointer bg-white space-y-3 ${
                  method === "sms"
                    ? "border-2 border-[#080808]"
                    : "border border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="space-y-1">
                  <h4 className="text-[18px] font-medium text-[#080808]">Phone (SMS)</h4>
                  <p className="text-[16px] font-normal text-[#5A5A5A]">
                    Receive verification codes at +41 79 123 45 67
                  </p>
                </div>

                {method === "sms" && (
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number.."
                    className="w-full h-11 px-4 rounded-xl border border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
                  />
                )}
              </div>

              <p className="text-[15px] font-normal text-[#5A5A5A] pt-1">
                You'll need to enter a verification code each time you sign in.
              </p>
            </div>

            {/* Step 1 Footer */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl border border-gray-200 text-[16px] font-medium text-[#080808] hover:bg-gray-50 cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleContinue}
                className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium cursor-pointer shadow-xs transition-colors"
              >
                Continue
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Step 2 Header with Back Button matching Screenshot 4 */}
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#080808] hover:bg-gray-200 cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-[20px] font-medium text-[#080808]">Back</span>
            </div>

            <form onSubmit={handleVerify} className="space-y-6 text-center py-2">
              <div className="space-y-2">
                <Title20 className="text-[#080808] font-semibold">Verify Your {method === "sms" ? "Phone Number" : "Email"}</Title20>
                <p className="text-[16px] font-normal text-[#5A5A5A]">
                  We've sent a 6-digit verification code to <span className="font-medium text-[#080808]">{method === "sms" ? (phone || "+41 79 123 45 67") : (email || "user@example.com")}</span>.
                </p>
              </div>

              {/* 6 Digit Input Boxes */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-3 py-2">
                {pin.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handlePinChange(idx, e.target.value)}
                    className="w-11 h-12 text-center rounded-xl border border-gray-200 focus:border-[#038AF9] text-[18px] font-medium text-[#080808] outline-none bg-white shadow-2xs"
                  />
                ))}
              </div>

              {/* Step 2 Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium transition-colors shadow-xs cursor-pointer"
              >
                Verify & Enable
              </button>

              <div className="text-[15px] font-normal text-[#5A5A5A]">
                Didn't get the code?{" "}
                <button
                  type="button"
                  onClick={() => console.log("Resend Code Triggered")}
                  className="text-[#038AF9] font-medium hover:underline cursor-pointer ml-1"
                >
                  Resend
                </button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default SetupTwoFactorModal
