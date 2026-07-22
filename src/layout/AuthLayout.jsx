import React, { useState } from "react"
import { Outlet, Link, ScrollRestoration } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { LogoOne } from "@/components/icons/Logo/AllLogo"
import { Title48, Title24 } from "@/components/typho/Title"

const AuthLayout = () => {
    const [authHeader, setAuthHeader] = useState({
        title: "Welcome back",
        subtitle: "Enter your details to access your account.",
        extra: null,
        backTo: null,
    })

    return (
        <>
            <ScrollRestoration />
            <div className="flex min-h-screen w-full bg-background font-sans">
                {/* Left side - Common Auth Branding Panel */}
                <div className="hidden lg:flex w-[45%] bg-primary flex-col items-center px-12 xl:px-24 select-none">
                    <div className="max-w-xl space-y-4 pt-36 w-full">
                        <div className="mb-6">
                            <LogoOne className="w-20 h-20" />
                        </div>
                        <Title48 className="text-white">
                            {authHeader.title}
                        </Title48>
                        <Title24 className="text-white/90 font-normal">
                            {authHeader.subtitle}
                        </Title24>
                        {authHeader.extra && (
                            <div className="pt-4 text-white/90">
                                {authHeader.extra}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right side - Form Content Viewport */}
                <div className="flex-1 flex flex-col min-h-screen bg-white">
                    {/* Top Header Bar for Back Button & Mobile Logo */}
                    <div className="w-full flex items-center justify-between px-6 pt-6 sm:px-12 sm:pt-8 min-h-[56px] shrink-0">
                        {authHeader.backTo ? (
                            <Link
                                to={authHeader.backTo}
                                className="inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-muted transition-colors cursor-pointer"
                            >
                                <ArrowLeft className="h-5 w-5 text-foreground" />
                            </Link>
                        ) : (
                            <div className="w-10 h-10" />
                        )}

                        {/* Mobile Logo Branding (lg:hidden) */}
                        <div className="lg:hidden">
                            <LogoOne className="w-10 h-10 text-primary" />
                        </div>
                    </div>

                    {/* Content Container aligned consistently with justify-start */}
                    <div className="flex-1 flex flex-col justify-start items-center px-6 sm:px-12 md:px-16 pt-4 sm:pt-8 pb-16 overflow-y-auto">
                        <div className="w-full max-w-[700px]">
                            <Outlet context={{ setAuthHeader }} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AuthLayout