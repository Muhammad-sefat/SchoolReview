import React, { useState, useEffect, useRef } from "react"
import { useNavigate, useOutletContext, useSearchParams } from "react-router-dom"
import { Title32, Title18 } from "@/components/typho/Title"
import AuthBtn from "@/components/common/button/AuthBtn"

const VerifyEmail = () => {
  const { setAuthHeader } = useOutletContext() || {}
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const isTeacher = searchParams.get("role") === "teacher"

  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(56)
  const inputRefs = useRef([])

  useEffect(() => {
    if (setAuthHeader) {
      setAuthHeader({
        title: "Verify your email",
        subtitle: "We've sent a 6-digit code to your email. Enter it below to verify your account.",
        extra: null,
        backTo: isTeacher ? "/auth/signup/teacher" : "/auth/signup",
      })
    }
  }, [setAuthHeader, isTeacher])

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000)
      return () => clearInterval(countdown)
    }
  }, [timer])

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").trim().slice(0, 6)
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split("")
      const newOtp = [...otp]
      digits.forEach((digit, i) => {
        if (i < 6) newOtp[i] = digit
      })
      setOtp(newOtp)
      const nextFocus = Math.min(digits.length, 5)
      inputRefs.current[nextFocus]?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const code = otp.join("")
    console.log("Verify Email Submitted OTP Code:", code)
    if (isTeacher) {
      navigate("/auth/signup/teacher/plan")
    } else {
      navigate("/dashboard")
    }
  }

  const handleResend = () => {
    console.log("Resending OTP code...")
    setTimer(60)
  }

  return (
    <div className="w-full space-y-[20px]">
      {/* Title */}
      <div className="space-y-2">
        <Title32 className="text-foreground">
          Enter your verification code
        </Title32>
        <p className="text-muted-foreground text-sm">
          Enter the 6-digit code we sent to your email.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-[20px] pt-2">
        {/* OTP Inputs */}
        <div className="flex items-center justify-between gap-2 max-w-[380px]">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center text-lg font-semibold rounded-xl border border-border/80 bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          ))}
        </div>

        {/* Resend timer */}
        <div className="text-xs text-muted-foreground">
          Resend code in{" "}
          <span className="font-semibold text-primary">{timer}</span> seconds.
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <AuthBtn type="submit">
            Verify your email
          </AuthBtn>
        </div>

        {/* Footer Link */}
        <div className="flex items-center justify-center gap-1.5 pt-2">
          <Title18 className="text-foreground/80 font-normal">
            Didn't get the code?
          </Title18>
          <button
            type="button"
            onClick={handleResend}
            disabled={timer > 0}
            className={`font-semibold ${
              timer > 0
                ? "text-muted-foreground cursor-not-allowed"
                : "text-primary hover:underline cursor-pointer"
            }`}
          >
            <Title18 className={timer > 0 ? "text-muted-foreground" : "text-primary font-semibold"}>
              Resend
            </Title18>
          </button>
        </div>
      </form>
    </div>
  )
}

export default VerifyEmail
