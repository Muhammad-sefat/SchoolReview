import React from "react";
import { Link } from "react-router-dom";
import { School, MessageSquare, ShieldCheck, Target } from "lucide-react";

const HowItsWork = () => {
    const steps = [
        {
            title: "Find Your School",
            description: "Select your school and choose how you'd like to contribute.",
            icon: School,
        },
        {
            title: "Share Your Experience",
            description: "Leave feedback, report a concern or thank a teacher.",
            icon: MessageSquare,
        },
        {
            title: "Safe & Anonymous",
            description: "Your identity remains protected through privacy-first design.",
            icon: ShieldCheck,
        },
        {
            title: "See Your Impact",
            description: "Participating schools can respond to feedback, share updates and communicate actions taken.",
            icon: Target,
        },
    ];

    return (
        <section className="section-padding-x py-16 lg:py-24 bg-gray-50 overflow-hidden font-urbanist select-none">
            <div className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 items-start">

                {/* Left Column (Main Information) */}
                <div className="flex flex-col items-start w-full md:w-[40%]">
                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-textPrimary leading-tight">
                        How it Works
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-secondary mt-3.5 mb-7 leading-relaxed font-medium">
                        Share feedback, report concerns, and help schools improve.
                    </p>
                    <Link
                        to="/schools"
                        className="px-6 py-3 bg-[#038AF9] hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-2xs cursor-pointer"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Right Column (Timeline Steps) */}
                <div className="relative flex flex-col gap-8 w-full md:w-[60%]">

                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-[#038AF9]/20" />

                    {steps.map((step, idx) => {
                        const IconComponent = step.icon;
                        return (
                            <div key={idx} className="relative flex items-start gap-4 z-10">
                                {/* Circle Icon Badge */}
                                <div className="w-10 h-10 rounded-full bg-[#038AF9] flex items-center justify-center text-white shrink-0 shadow-2xs">
                                    <IconComponent className="w-4.5 h-4.5 stroke-[2]" />
                                </div>

                                {/* Step content */}
                                <div className="flex flex-col gap-1 pt-0.5">
                                    <h3 className="text-base sm:text-lg font-bold text-textPrimary leading-snug">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-secondary font-medium leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default HowItsWork;
