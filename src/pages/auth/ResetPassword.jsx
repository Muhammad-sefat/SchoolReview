import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useOutletContext } from "react-router-dom"
import { CheckCircle2 } from "lucide-react"
import { Title32 } from "@/components/typho/Title"
import CustomInput from "@/components/common/CustomInput"

const PASSWORD_REQUIREMENTS = [
  "Be at least 8 characters long",
  "Include at least one uppercase letter (A-Z)",
  "Include at least one number (0-9)",
  "Include at least one special character (!@#$%^&*)",
  "Not contain spaces",
]

const ResetPassword = () => {
  const { setAuthHeader } = useOutletContext() || {}
  const navigate = useNavigate()

  useEffect(() => {
    if (setAuthHeader) {
      setAuthHeader({
        title: "Create a new password",
        subtitle: "Set a strong password.",
        extra: (
          <ul className="space-y-3 text-sm text-white/90 pt-4">
            {PASSWORD_REQUIREMENTS.map((req, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-white shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        ),
        backTo: "/auth/forgot-password",
      })
    }
  }, [setAuthHeader])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  const passwordValue = watch("password")

  const onSubmit = (data) => {
    console.log("Reset Password submitted values:", data)
    navigate("/auth/login")
  }

  return (
    <div className="w-full space-y-6">
      {/* Title */}
      <Title32 className="text-foreground mb-8">
        Set your new password
      </Title32>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Password Field */}
        <CustomInput
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          error={errors.password}
        />

        {/* Confirm Password Field */}
        <CustomInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Re-enter your password"
          register={register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === passwordValue || "Passwords do not match",
          })}
          error={errors.confirmPassword}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-12 mt-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm cursor-pointer flex items-center justify-center text-base"
        >
          Reset Password
        </button>
      </form>
    </div>
  )
}

export default ResetPassword
