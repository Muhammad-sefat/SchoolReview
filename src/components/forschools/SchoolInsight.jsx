import React from "react";
import {
  School,
  FileText,
  MessageCircle,
  AlertTriangle,
  Hexagon,
  Target,
} from "lucide-react";

function SchoolInsight() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden font-urbanist select-none">
      <div className="section-padding-x w-full flex flex-col">
        
        {/* Header Title Section */}
        <div className="flex flex-col gap-2 mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-textPrimary leading-tight">
            One Platform. Complete School Insight.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-textSecondary max-w-[720px] leading-relaxed font-medium">
            Helping school leaders and educators listen better, act faster, and
            grow stronger.
          </p>
        </div>

        {/* Main Grid: Split into Two Large Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Community Voice & Feedback */}
          {/* ========================================================================= */}
          <div className="border border-gray-100 rounded-3xl bg-white p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            
            {/* Header info */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-textPrimary">
                Community Voice & Feedback
              </h3>
              <p className="text-sm text-secondary font-medium mt-1">
                Feedback and reporting tools
              </p>
            </div>

            {/* 2x2 Grid of Sub-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              
              {/* Card 1: School Voice (Primary Blue Solid) */}
              <div className="bg-primary hover:bg-primary/95 text-white rounded-2xl p-5 sm:p-6 flex flex-col items-start gap-4 min-h-[190px] shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 select-none cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                  <School className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold">School Voice</h4>
                  <p className="text-xs text-white/90 font-medium leading-relaxed">
                    Share experiences that help schools learn, improve, and
                    celebrate success.
                  </p>
                </div>
              </div>

              {/* Card 2: Teacher Voice (White with gray border) */}
              <div className="bg-white hover:bg-blue-50/40 border border-gray-150 hover:border-blue-200 rounded-2xl p-5 sm:p-6 flex flex-col items-start gap-4 min-h-[190px] shadow-2xs hover:shadow-sm hover:scale-[1.01] transition-all duration-200 select-none cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                  <FileText className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold text-textPrimary">
                    Teacher Voice
                  </h4>
                  <p className="text-xs text-secondary font-medium leading-relaxed">
                    Help teachers understand what students experience in the
                    classroom.
                  </p>
                </div>
              </div>

              {/* Card 3: TellTeacher (White with gray border) */}
              <div className="bg-white hover:bg-blue-50/40 border border-gray-150 hover:border-blue-200 rounded-2xl p-5 sm:p-6 flex flex-col items-start gap-4 min-h-[190px] shadow-2xs hover:shadow-sm hover:scale-[1.01] transition-all duration-200 select-none cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                  <MessageCircle className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold text-textPrimary">
                    TellTeacher
                  </h4>
                  <p className="text-xs text-secondary font-medium leading-relaxed">
                    Recognise great teaching or provide constructive feedback.
                  </p>
                </div>
              </div>

              {/* Card 4: SpeakUp (White with gray border) */}
              <div className="bg-white hover:bg-blue-50/40 border border-gray-150 hover:border-blue-200 rounded-2xl p-5 sm:p-6 flex flex-col items-start gap-4 min-h-[190px] shadow-2xs hover:shadow-sm hover:scale-[1.01] transition-all duration-200 select-none cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                  <AlertTriangle className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold text-textPrimary">
                    SpeakUp – Report a Concern
                  </h4>
                  <p className="text-xs text-secondary font-medium leading-relaxed">
                    Report concerns safely, confidentially, and with follow-up
                    support.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Insights & Improvement */}
          {/* ========================================================================= */}
          <div className="border border-gray-100 rounded-3xl bg-white p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            
            {/* Header info */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-textPrimary">
                Insights & Improvement
              </h3>
              <p className="text-sm text-secondary font-medium mt-1">
                Internal evaluation and development tools
              </p>
            </div>

            {/* Stack of Sub-Cards */}
            <div className="flex flex-col gap-4 mt-8 h-full justify-center">
              
              {/* Card 1: 360 School Evaluation (White with gray border) */}
              <div className="bg-white hover:bg-blue-50/40 border border-gray-150 hover:border-blue-200 rounded-2xl p-5 sm:p-6 flex flex-col items-start gap-4 min-h-[190px] shadow-2xs hover:shadow-sm hover:scale-[1.01] transition-all duration-200 select-none cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                  <Hexagon className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold text-textPrimary">
                    360° School Evaluation
                  </h4>
                  <p className="text-xs text-secondary font-medium leading-relaxed">
                    A complete view of school performance. Combine feedback from
                    students, parents, and staff into clear insights.
                  </p>
                </div>
              </div>

              {/* Card 2: Teacher Observations (White with gray border) */}
              <div className="bg-white hover:bg-blue-50/40 border border-gray-150 hover:border-blue-200 rounded-2xl p-5 sm:p-6 flex flex-col items-start gap-4 min-h-[190px] shadow-2xs hover:shadow-sm hover:scale-[1.01] transition-all duration-200 select-none cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                  <Target className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold text-textPrimary">
                    Teacher Observations
                  </h4>
                  <p className="text-xs text-secondary font-medium leading-relaxed">
                    A complete view of teacher performance. Combine feedback,
                    self-reflection, and observations to support development.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SchoolInsight;
