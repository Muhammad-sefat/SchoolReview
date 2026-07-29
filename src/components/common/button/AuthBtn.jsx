import React from "react"
import { Title18 } from "@/components/typho/Title"

const AuthBtn = ({ children, type = "submit", onClick, className = "", disabled = false, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-12 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      <Title18 className="text-white font-semibold">{children}</Title18>
    </button>
  )
}

export default AuthBtn
