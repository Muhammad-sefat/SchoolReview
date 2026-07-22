import React, { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { Link, useNavigate, useOutletContext } from "react-router-dom"
import { Title32, Title18 } from "@/components/typho/Title"
import CustomInput from "@/components/common/CustomInput"
import SchoolSelectDropdown from "@/components/auth/leader/SchoolSelectDropdown"
import FileUploadBox from "@/components/auth/leader/FileUploadBox"
import AddSchoolModal from "@/components/auth/leader/AddSchoolModal"

const SchoolLeaderSignUp = () => {
  const { setAuthHeader } = useOutletContext() || {}
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [uploadedFile, setUploadedFile] = useState(null)

  useEffect(() => {
    if (setAuthHeader) {
      setAuthHeader({
        title: "Manage your school",
        subtitle: "Only verified school representatives can access school dashboards.\n\nComplete your registration. We'll verify your details and activate your account.",
        extra: null,
        backTo: "/auth/select-role",
      })
    }
  }, [setAuthHeader])

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      schoolName: "",
      firstName: "",
      lastName: "",
      schoolEmail: "",
      workPhone: "",
      jobTitle: "",
      password: "",
      confirmPassword: "",
      confirmAuthorised: false,
      agreeTerms: false,
    },
  })

  const passwordValue = watch("password")

  const onSubmit = (data) => {
    const registrationData = {
      ...data,
      verificationDocument: uploadedFile ? uploadedFile.name : null,
    }
    console.log("School Leader Registration Form Submitted:", registrationData)
    navigate("/auth/verify-email")
  }

  const handleSchoolAddedFromModal = (newSchoolName) => {
    console.log("School added from modal:", newSchoolName)
    setValue("schoolName", newSchoolName, { shouldValidate: true })
  }

  return (
    <div className="w-full space-y-6">
      {/* Title */}
      <Title32 className="text-foreground">
        Create your school account
      </Title32>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* School Dropdown Selector */}
        <div className="space-y-1">
          <Controller
            name="schoolName"
            control={control}
            rules={{ required: "Please select your school" }}
            render={({ field }) => (
              <SchoolSelectDropdown
                value={field.value}
                onChange={field.onChange}
                onRequestAddSchool={() => setIsModalOpen(true)}
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

        {/* Work phone number (optional) */}
        <CustomInput
          id="workPhone"
          type="tel"
          placeholder="Work phone number (optional)"
          register={register("workPhone")}
        />

        {/* Job title */}
        <CustomInput
          id="jobTitle"
          type="text"
          placeholder="Job title"
          register={register("jobTitle", { required: "Job title is required" })}
          error={errors.jobTitle}
        />

        {/* Optional Document Upload Box */}
        <FileUploadBox onFileSelect={(file) => setUploadedFile(file)} />

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

        {/* Checkboxes */}
        <div className="space-y-2 pt-1">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-4.5 w-4.5 rounded border-border text-primary focus:ring-primary accent-primary"
              {...register("confirmAuthorised", {
                required: "You must confirm you are authorised to represent this school",
              })}
            />
            <span className="text-xs text-foreground/80">
              I confirm that I am authorised to represent this school.
            </span>
          </label>
          {errors.confirmAuthorised && (
            <p className="text-xs text-destructive">{errors.confirmAuthorised.message}</p>
          )}

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
            <p className="text-xs text-destructive">{errors.agreeTerms.message}</p>
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

      {/* Add School Modal */}
      <AddSchoolModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSchoolAdded={handleSchoolAddedFromModal}
      />
    </div>
  )
}

export default SchoolLeaderSignUp
