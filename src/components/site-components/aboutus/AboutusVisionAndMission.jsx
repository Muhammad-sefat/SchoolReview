import { Target, Lock, Sparkles, TrendingUp, Users } from "lucide-react";

function AboutusVisionAndMission() {
  return (
    <div className="w-full bg-white select-none font-urbanist">
      {/* 1. Vision & Mission Section with Top Border */}
      <div className="w-full border-t border-gray-100 py-12 lg:py-16">
        <div className="section-padding-x">
          <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-8">
            Vision & Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Our Vision Card */}
            <div className="border border-blue-200 rounded-2xl p-6 sm:p-8 bg-white hover:border-blue-300 transition-colors shadow-2xs">
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Our Vision
              </span>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 leading-relaxed font-semibold">
                To make education more{" "}
                <span className="text-primary font-bold">
                  transparent, safer, and stronger
                </span>{" "}
                - by giving people the tools to speak, listen, and act.
              </p>
            </div>

            {/* Our Mission Card */}
            <div className="border border-blue-200 rounded-2xl p-6 sm:p-8 bg-white hover:border-blue-300 transition-colors shadow-2xs">
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Our Mission
              </span>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 leading-relaxed font-semibold">
                To help schools{" "}
                <span className="text-primary font-bold">
                  listen, learn, and improve
                </span>{" "}
                through evidence-based insights and meaningful feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. What Makes Us Different Section with Top Border */}
      <div className="w-full border-t border-gray-100 py-16 lg:py-24">
        <div className="section-padding-x flex flex-col lg:flex-row gap-12 lg:gap-16 w-full">
          {/* Left Column: Heading and Text */}
          <div className="w-full lg:w-[40%] flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary leading-tight">
              What Makes Us Different
            </h2>
            <p className=" text-gray-600 mt-4 leading-relaxed max-w-[620px]">
              SchoolReview is a unique system designed to improve education in a
              structured, meaningful way.
            </p>
          </div>

          {/* Right Column: Grid of Feature Cards */}
          <div className="w-full lg:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full">
              {/* Connected by Design (Full Width / Col span 2) */}
              <div className="sm:col-span-2 bg-primary text-white p-6 sm:p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                  <Target className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Connected by Design
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-50/90 leading-relaxed mt-1">
                    One platform for feedback, safety, and
                    improvement—connecting every voice to meaningful action.
                  </p>
                </div>
              </div>

              {/* Anonymity by Design */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 flex flex-col gap-3 shadow-2xs hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                  <Lock className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-textPrimary">
                    Anonymity by Design
                  </h4>
                  <p className="text-xs text-textSecondary mt-1">
                    Voices are protected
                  </p>
                </div>
              </div>

              {/* AI-Powered Moderation */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 flex flex-col gap-3 shadow-2xs hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                  <Sparkles className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-textPrimary">
                    AI-Powered Moderation
                  </h4>
                  <p className="text-xs text-textSecondary mt-1">
                    Feedback stays fair and respectful
                  </p>
                </div>
              </div>

              {/* Evidence-Based Frameworks */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 flex flex-col gap-3 shadow-2xs hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                  <TrendingUp className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-textPrimary">
                    Evidence-Based Frameworks
                  </h4>
                  <p className="text-xs text-textSecondary mt-1">
                    Feedback leads to action
                  </p>
                </div>
              </div>

              {/* Six Active Roles */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 flex flex-col gap-3 shadow-2xs hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                  <Users className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-textPrimary">
                    Six Active Roles
                  </h4>
                  <p className="text-xs text-textSecondary mt-1">
                    Six Voices. One School Community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusVisionAndMission;
