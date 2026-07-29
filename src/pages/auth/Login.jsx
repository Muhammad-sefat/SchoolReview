import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useOutletContext } from "react-router-dom"
import { Title32, Title18 } from "@/components/typho/Title"
import CustomInput from "@/components/common/CustomInput"
import AuthBtn from "@/components/common/button/AuthBtn"


const Login = () => {
  const { setAuthHeader } = useOutletContext() || {}
  const navigate = useNavigate()

  useEffect(() => {
    if (setAuthHeader) {
      setAuthHeader({
        title: "Welcome back",
        subtitle: "Enter your details to access your account.",
        extra: null,
        backTo: null,
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
      password: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Login form submitted values:", data)
    navigate("/dashboard")
  }

  return (
    <div className="w-full">
      {/* Title */}
      <Title32 className="text-foreground mb-8">
        Log in
      </Title32>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
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

        {/* Forgot password link */}
        <div className="flex justify-end pt-1">
          <Link
            to="/auth/forgot-password"
            className="text-primary hover:underline"
          >
            <Title18 className="text-primary text-right font-medium">
              Forgot password?
            </Title18>
          </Link>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <AuthBtn type="submit">
            Sign in
          </AuthBtn>
        </div>

        {/* Footer Link */}
        <div className="flex items-center justify-center gap-1.5 pt-4">
          <Title18 className="text-foreground/80 font-normal">
            Don't have an account?
          </Title18>
          <Link
            to="/auth/select-role"
            className="text-primary font-semibold hover:underline"
          >
            <Title18 className="text-primary font-semibold">
              Sign Up
            </Title18>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login