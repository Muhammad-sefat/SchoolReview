import React from "react";
import { Link } from "react-router-dom";
import { Settings, Clock, Star } from "lucide-react";
import { ImageProvider } from "../../../assets/image-provider/ImageProvider";

function StayEvaluation() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden font-urbanist select-none">
      <div className="section-padding-x w-full flex flex-col items-center">
        
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-secondary">
            <Settings className="w-3.5 h-3.5 text-secondary shrink-0 stroke-[2]" />
            <span>You control what is shared</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-secondary">
            <Clock className="w-3.5 h-3.5 text-secondary shrink-0 stroke-[2]" />
            <span>Continuous Evidence</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-textPrimary text-center leading-tight tracking-tight max-w-[780px]">
          Stay Evaluation-Ready <span className="text-primary">All Year Round</span>
        </h2>

        {/* Subhead Description */}
        <p className="text-sm sm:text-base md:text-lg text-textSecondary text-center mt-4 max-w-[720px] leading-relaxed font-medium">
          Select and share evidence, reports, and progress data with School Evaluators when needed.
        </p>

        {/* Call to Action Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/evaluator"
            className="px-6 py-3 bg-primary hover:bg-primary/95 text-white font-medium rounded-[10px] text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01]"
          >
            Explore the School Evaluation Suite
          </Link>
        </div>

        {/* Images Grid (Side-by-side on desktop, stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12 lg:mt-16">
          
          {/* Left Column: Meeting Discussion Photo */}
          <div className="w-full aspect-[4/3] rounded-[28px] overflow-hidden border border-gray-100 shadow-2xs">
            <img
              src={ImageProvider.evaluation}
              alt="Evaluation meeting"
              className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-300"
            />
          </div>

          {/* Right Column: School Benchmarking Dashboard (with primary-colored stroke bg wrapper) */}
          <div className="w-full aspect-[4/3] rounded-[28px] bg-primary/10 p-1.5 sm:p-2 overflow-hidden flex items-center justify-center border border-blue-100 shadow-2xs">
            <img
              src={ImageProvider.evaluation1}
              alt="School Benchmarking Dashboard"
              className="w-full h-full object-cover rounded-[22px]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default StayEvaluation;
