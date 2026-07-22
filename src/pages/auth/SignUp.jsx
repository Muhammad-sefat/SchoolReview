import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useOutletContext } from "react-router-dom"
import { Title32, Title18 } from "@/components/typho/Title"
import CustomInput from "@/components/common/CustomInput"

const SignUp = () => {
  const { setAuthHeader } = useOutletContext() || {}
  const navigate = useNavigate()

  useEffect(() => {
    if (setAuthHeader) {
      setAuthHeader({
        title: "Help schools learn",
        subtitle: "Share your experience, receive school responses, and make a positive difference.",
        extra: null,
        backTo: "/auth/select-role",
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
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
  })

  const passwordValue = watch("password")

  const onSubmit = (data) => {
    console.log("Sign Up form submitted values:", data)
    navigate("/auth/verify-email")
  }

  return (
    <div className="w-full space-y-6">
      {/* Title */}
      <Title32 className="text-foreground">
        Create your account
      </Title32>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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

        {/* Password Field */}
        <CustomInput
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
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

        {/* Terms & Conditions Checkbox */}
        <div className="pt-1">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-4.5 w-4.5 rounded border-border text-primary focus:ring-primary accent-primary"
              {...register("agreeTerms", {
                required: "You must agree to the Terms of Service & Privacy Policy",
              })}
            />
            <span className="text-xs text-foreground/80">
              I agree to the{" "}
              <Link to="#" className="text-primary hover:underline font-medium">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="#" className="text-primary hover:underline font-medium">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-xs text-destructive mt-1">{errors.agreeTerms.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-12 mt-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm cursor-pointer flex items-center justify-center text-base"
        >
          Create Account
        </button>

        {/* Footer Link */}
        <div className="flex items-center justify-center gap-1.5 pt-4">
          <Title18 className="text-foreground/80 font-normal">
            Already have an account?
          </Title18>
          <Link
            to="/auth/login"
            className="text-primary font-semibold hover:underline"
          >
            <Title18 className="text-primary font-semibold">
              Log in
            </Title18>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
