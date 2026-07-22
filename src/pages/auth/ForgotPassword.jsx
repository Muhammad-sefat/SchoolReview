import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useOutletContext } from "react-router-dom"
import { Title32, Title18 } from "@/components/typho/Title"
import CustomInput from "@/components/common/CustomInput"

const ForgotPassword = () => {
  const { setAuthHeader } = useOutletContext() || {}
  const navigate = useNavigate()

  useEffect(() => {
    if (setAuthHeader) {
      setAuthHeader({
        title: "Reset your password",
        subtitle: "Enter your email and we'll send you a verification code to reset your password.",
        extra: null,
        backTo: "/auth/login",
      })
    }
  }, [setAuthHeader])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Forgot Password submitted values:", data)
    navigate("/auth/reset-password")
  }

  return (
    <div className="w-full space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <Title32 className="text-foreground">
          Forgot your password?
        </Title32>
        <p className="text-muted-foreground text-sm">
          Enter the email you used for your account.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pt-2">
        {/* Email Field */}
        <CustomInput
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={errors.email}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-12 mt-2 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm cursor-pointer flex items-center justify-center text-base"
        >
          Send Code
        </button>

        {/* Footer Link */}
        <div className="flex items-center justify-center gap-1.5 pt-4">
          <Title18 className="text-foreground/80 font-normal">
            Remember your password?
          </Title18>
          <Link
            to="/auth/login"
            className="text-primary font-semibold hover:underline"
          >
            <Title18 className="text-primary font-semibold">
              Back to Log in
            </Title18>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
