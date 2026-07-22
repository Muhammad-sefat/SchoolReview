import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Title18 } from "@/components/typho/Title"

const CustomInput = ({
  label,
  id,
  type = "text",
  placeholder,
  register,
  error,
  className = "",
  wrapperClassName = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === "password"
  const inputType = isPassword ? (showPassword ? "text" : "password") : type

  return (
    <div className={`space-y-[14px] ${wrapperClassName}`}>
      {label && (
        <label htmlFor={id} className="block">
          <Title18 className="text-foreground font-medium">{label}</Title18>
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className={`w-full h-12 ${
            isPassword ? "pl-4 pr-12" : "px-4"
          } rounded-xl border border-border/80 bg-background text-[16px] text-foreground placeholder:text-[#5A5A5A] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${
            error ? "border-destructive focus:border-destructive focus:ring-destructive" : ""
          } ${className}`}
          {...(register ? register : {})}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 opacity-70" />
            ) : (
              <Eye className="h-5 w-5 opacity-70" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="text-xs text-destructive mt-1">
          {typeof error === "string" ? error : error.message}
        </p>
      )}
    </div>
  )
}

export default CustomInput
