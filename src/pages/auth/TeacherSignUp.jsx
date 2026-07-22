import React, { useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { Link, useNavigate, useOutletContext } from "react-router-dom"
import { Title32, Title18 } from "@/components/typho/Title"
import CustomInput from "@/components/common/CustomInput"
import TeacherSchoolSelectDropdown from "@/components/auth/teacher/TeacherSchoolSelectDropdown"

const TeacherSignUp = () => {
  const { setAuthHeader } = useOutletContext() || {}
  const navigate = useNavigate()

  useEffect(() => {
    if (setAuthHeader) {
      setAuthHeader({
        title: "Enable better teaching",
        subtitle: "Enter your details and verify your email. We'll activate your account.",
        extra: null,
        backTo: "/auth/select-role",
      })
    }
  }, [setAuthHeader])

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      schoolName: "",
      firstName: "",
      lastName: "",
      schoolEmail: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
  })

  const passwordValue = watch("password")

  const onSubmit = (data) => {
    console.log("Teacher Sign Up Form Submitted:", data)
    navigate("/auth/verify-email?role=teacher")
  }

  return (
    <div className="w-full space-y-6">
      {/* Title */}
      <Title32 className="text-foreground">
        Tell us about you
      </Title32>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* School Dropdown Selector (Teacher Version without Request Add School) */}
        <div className="space-y-1">
          <Controller
            name="schoolName"
            control={control}
            rules={{ required: "Please select your school" }}
            render={({ field }) => (
              <TeacherSchoolSelectDropdown
                value={field.value}
                onChange={field.onChange}
                error={errors.schoolName}
              />
            )}
          />
        </div>

        {/* First name & Last name (Grid 2 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CustomInput
            id="firstName"
            type="text"
            placeholder="First name"
            register={register("firstName", { required: "First name is required" })}
            error={errors.firstName}
          />
          <CustomInput
            id="lastName"
            type="text"
            placeholder="Last name"
            register={register("lastName", { required: "Last name is required" })}
            error={errors.lastName}
          />
        </div>

        {/* School Email Address */}
        <CustomInput
          id="schoolEmail"
          type="email"
          placeholder="School email address"
          register={register("schoolEmail", {
            required: "School email address is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={errors.schoolEmail}
        />

        {/* Password */}
        <CustomInput
          id="password"
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

        {/* Confirm Password */}
        <CustomInput
          id="confirmPassword"
          type="password"
          placeholder="Re-enter your password"
          register={register("confirmPassword", {
            required: "Please confirm your password",
            validate: (val) => val === passwordValue || "Passwords do not match",
          })}
          error={errors.confirmPassword}
        />

        {/* Checkbox */}
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
        <div className="pt-2">
          <button
            type="submit"
            className="w-full h-12 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm cursor-pointer flex items-center justify-center text-base"
          >
            Create Account
          </button>
        </div>

        {/* Footer Link */}
        <div className="flex items-center justify-center gap-1.5 pt-2">
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

export default TeacherSignUp
