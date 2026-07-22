import React, { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import CustomInput from "@/components/common/CustomInput"
import AuthBtn from "@/components/common/button/AuthBtn"

const AddSchoolModal = ({ isOpen, onClose, onSchoolAdded }) => {
  const [emailSent, setEmailSent] = useState(false)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const otpRefs = useRef([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      schoolName: "",
      schoolWebsite: "",
      schoolAddress: "",
      contactEmail: "",
    },
  })

  const handleSendCode = () => {
    console.log("Sending verification code to modal email...")
    setEmailSent(true)
  }

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const onSubmit = (data) => {
    const fullRequest = {
      ...data,
      verificationCode: otp.join(""),
    }
    console.log("Add School Modal Request Submitted:", fullRequest)

    if (onSchoolAdded) {
      onSchoolAdded(data.schoolName)
    }

    reset()
    setEmailSent(false)
    setOtp(["", "", "", "", "", ""])
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[540px] p-6 sm:p-8 rounded-2xl bg-white shadow-2xl transition-all duration-200">
        <DialogHeader className="space-y-1.5 text-left mb-2">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Add a school
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Can't find your school? Submit the details below and we'll review your request.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
          {/* School Name */}
          <CustomInput
            id="schoolName"
            type="text"
            placeholder="School name"
            register={register("schoolName", { required: "School name is required" })}
            error={errors.schoolName}
          />

          {/* School Website (optional) */}
          <CustomInput
            id="schoolWebsite"
            type="text"
            placeholder="School website (optional)"
            register={register("schoolWebsite")}
          />

          {/* School address or location */}
          <CustomInput
            id="schoolAddress"
            type="text"
            placeholder="School address or location"
            register={register("schoolAddress", { required: "Address or location is required" })}
            error={errors.schoolAddress}
          />

          {/* Info Banner */}
          <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-900 text-xs">
            <Info className="h-4 w-4 text-sky-600 shrink-0" />
            <span>Verify your email to help us prevent spam and review your request.</span>
          </div>

          {/* Email address with inline Send Code button */}
          <div className="relative">
            <input
              id="contactEmail"
              type="email"
              placeholder="Your email address"
              className="w-full h-12 pl-4 pr-32 rounded-xl border border-border/80 bg-background text-[16px] text-foreground placeholder:text-[#5A5A5A] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              {...register("contactEmail", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email",
                },
              })}
            />
            <button
              type="button"
              onClick={handleSendCode}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
            >
              {emailSent ? "Resend" : "Send code"}
            </button>
          </div>
          {errors.contactEmail && (
            <p className="text-xs text-destructive mt-1">{errors.contactEmail.message}</p>
          )}

          {/* Verification Code OTP section */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-foreground">
                Enter the verification code
              </label>
              <button
                type="button"
                onClick={handleSendCode}
                className="text-xs text-primary font-semibold hover:underline cursor-pointer"
              >
                Resend code
              </button>
            </div>
            <div className="flex items-center gap-2">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (otpRefs.current[idx] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  className="w-10 h-10 text-center text-sm font-semibold rounded-xl border border-border/80 bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <AuthBtn type="submit">
              Submit School Request
            </AuthBtn>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddSchoolModal
