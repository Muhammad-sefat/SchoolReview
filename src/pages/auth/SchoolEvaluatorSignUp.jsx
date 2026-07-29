import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useOutletContext } from "react-router-dom"
import { Title32, Title18 } from "@/components/typho/Title"
import CustomInput from "@/components/common/CustomInput"
import EvaluatorTypeRadio from "@/components/auth/evaluator/EvaluatorTypeRadio"
import FileUploadBox from "@/components/auth/leader/FileUploadBox"
import AuthBtn from "@/components/common/button/AuthBtn"

const SchoolEvaluatorSignUp = () => {
  const { setAuthHeader } = useOutletContext() || {}
  const navigate = useNavigate()
  const [evaluatorType, setEvaluatorType] = useState("team-owner")
  const [uploadedFile, setUploadedFile] = useState(null)

  useEffect(() => {
    if (setAuthHeader) {
      setAuthHeader({
        title: "Evaluate schools with confidence",
        subtitle: "Sign up to access evaluation tools and reports.\n\nSchool data becomes available once a school grants your organisation access.",
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
      firstName: "",
      lastName: "",
      officialEmail: "",
      evaluatorEmail: "",
      workPhone: "",
      officialTitle: "",
      password: "",
      confirmPassword: "",
      confirmAuthorised: false,
      agreeTerms: false,
    },
  })

  const passwordValue = watch("password")
  const isOwner = evaluatorType === "team-owner"

  const onSubmit = (data) => {
    const registrationData = {
      evaluatorType,
      ...data,
      verificationDocument: isOwner && uploadedFile ? uploadedFile.name : null,
    }
    console.log("School Evaluator Registration Submitted:", registrationData)
    navigate("/auth/verify-email")
  }

  return (
    <div className="w-full space-y-[20px]">
      {/* Title */}
      <Title32 className="text-foreground">
        Create your school evaluator account
      </Title32>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
        {/* Evaluator Type Radio Buttons (Team Owner vs Team Member) */}
        <EvaluatorTypeRadio
          value={evaluatorType}
          onChange={(val) => setEvaluatorType(val)}
        />

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

        {/* Email Address depending on Team Owner vs Team Member */}
        {isOwner ? (
          <CustomInput
            id="officialEmail"
            type="email"
            placeholder="Official email address"
            register={register("officialEmail", {
              required: "Official email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.officialEmail}
          />
        ) : (
          <CustomInput
            id="evaluatorEmail"
            type="email"
            placeholder="Evaluator-issued email address"
            register={register("evaluatorEmail", {
              required: "Evaluator-issued email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.evaluatorEmail}
          />
        )}

        {/* Team Owner specific fields */}
        {isOwner && (
          <>
            {/* Work phone number (optional) */}
            <CustomInput
              id="workPhone"
              type="tel"
              placeholder="Work phone number (optional)"
              register={register("workPhone")}
            />

            {/* Official title */}
            <CustomInput
              id="officialTitle"
              type="text"
              placeholder="Official title"
              register={register("officialTitle", { required: "Official title is required" })}
              error={errors.officialTitle}
            />

            {/* Optional Document Upload Box */}
            <FileUploadBox onFileSelect={(file) => setUploadedFile(file)} />
          </>
        )}

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
          {isOwner && (
            <>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4.5 w-4.5 rounded border-border text-primary focus:ring-primary accent-primary"
                  {...register("confirmAuthorised", {
                    required: "You must confirm you are authorised to act on behalf of this school",
                  })}
                />
                <span className="lg:text-base text-sm text-[#1F1F21]">
                  I confirm that I am authorised to act on behalf of this school.
                </span>
              </label>
              {errors.confirmAuthorised && (
                <p className="text-xs text-destructive">{errors.confirmAuthorised.message}</p>
              )}
            </>
          )}

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-4.5 w-4.5 rounded border-border text-primary focus:ring-primary accent-primary"
              {...register("agreeTerms", {
                required: "You must agree to the Terms of Service & Privacy Policy",
              })}
            />
            <span className="lg:text-base text-sm text-[#1F1F21]">
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
          <AuthBtn type="submit">
            Create Account
          </AuthBtn>
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

export default SchoolEvaluatorSignUp
