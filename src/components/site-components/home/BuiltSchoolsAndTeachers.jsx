import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import forSchoolsImg from "../../../assets/images/forschools.png";
import forTeachersImg from "../../../assets/images/forteachers.png";

const BuiltSchoolsAndTeachers = () => {
    return (
        <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden font-urbanist select-none">

            {/* Top-Right Decorative Blue Corner Shape */}
            <svg
                viewBox="0 0 100 100"
                className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-[360px] lg:h-[360px] text-[#038AF9] pointer-events-none z-0"
                preserveAspectRatio="none"
            >
                <path
                    d="M 10,0 C 15,30 85,30 100,85 L 100,0 Z"
                    fill="currentColor"
                />
            </svg>

            <div className="section-padding-x w-full flex flex-col relative z-10">

                {/* Header Section */}
                <div className="text-center flex flex-col items-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-textPrimary leading-tight">
                        Built for Schools and Teachers
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-secondary max-w-[720px] mx-auto leading-relaxed mt-3.5 font-medium">
                        Whether you lead a school or teach in the classroom, SchoolReview turns feedback into meaningful improvement.
                    </p>
                </div>

                {/* Two-Column Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">

                    {/* Card 1: For Schools */}
                    <div className="w-full bg-gray-50 rounded-[32px] overflow-hidden border border-gray-100 flex flex-col shadow-xs p-4">
                        {/* Top Text & Action Panel */}
                        <div className="p-6 sm:p-8 flex flex-col items-start gap-1 bg-white rounded-[32px]">
                            <h3 className="text-xl sm:text-[22px] font-bold text-textPrimary">
                                For Schools
                            </h3>
                            <p className="text-sm sm:text-base text-secondary mt-1.5 mb-5 leading-relaxed font-medium">
                                See your school through every voice and turn feedback into action.
                            </p>
                            <Link
                                to="/school-review"
                                className="px-5 py-2.5 bg-[#038AF9] hover:bg-blue-600 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                            >
                                <span>Explore for Schools</span>
                                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                            </Link>
                        </div>

                        {/* Bottom Image Panel with static pagination dots */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[32px] mt-4">
                            <img
                                src={forSchoolsImg}
                                alt="For Schools demonstration"
                                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                            />
                            {/* Pagination Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                                <div className="w-5 h-2 rounded-full bg-[#038AF9]" />
                                <div className="w-2 h-2 rounded-full bg-white" />
                                <div className="w-2 h-2 rounded-full bg-white" />
                                <div className="w-2 h-2 rounded-full bg-white" />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: For Teachers */}
                    <div className="w-full bg-gray-50 rounded-[32px] overflow-hidden border border-gray-100 flex flex-col shadow-xs p-4">
                        {/* Top Text & Action Panel */}
                        <div className="p-6 sm:p-8 flex flex-col items-start gap-1 bg-white rounded-[32px]">
                            <h3 className="text-xl sm:text-[22px] font-bold text-textPrimary">
                                For Teachers
                            </h3>
                            <p className="text-sm sm:text-base text-secondary mt-1.5 mb-5 leading-relaxed font-medium">
                                See your teaching through the eyes of students, peers and observers.
                            </p>
                            <Link
                                to="/review/student-to-teacher"
                                className="px-5 py-2.5 bg-[#038AF9] hover:bg-blue-600 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                            >
                                <span>Explore for Teachers</span>
                                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                            </Link>
                        </div>

                        {/* Bottom Image Panel with static pagination dots */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[32px] mt-4">
                            <img
                                src={forTeachersImg}
                                alt="For Teachers demonstration"
                                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                            />
                            {/* Pagination Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                                <div className="w-5 h-2 rounded-full bg-[#038AF9]" />
                                <div className="w-2 h-2 rounded-full bg-white" />
                                <div className="w-2 h-2 rounded-full bg-white" />
                                <div className="w-2 h-2 rounded-full bg-white" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BuiltSchoolsAndTeachers;
