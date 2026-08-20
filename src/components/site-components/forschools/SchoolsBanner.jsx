import React from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Shield,
  Star,
  TrendingUp,
  ShieldCheck,
  Users,
} from "lucide-react";
import { ImageProvider } from "../../../assets/image-provider/ImageProvider";

// Custom Star Rating Component with Brand Blue Color
const BlueStarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const remainder = rating - filledStars;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        if (i < filledStars) {
          return (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-[#038AF9] text-[#038AF9]"
            />
          );
        }
        if (i === filledStars && remainder > 0) {
          return (
            <div key={i} className="relative">
              <Star className="w-3.5 h-3.5 text-gray-200" />
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: `${remainder * 100}%` }}
              >
                <Star className="w-3.5 h-3.5 fill-[#038AF9] text-[#038AF9]" />
              </div>
            </div>
          );
        }
        return <Star key={i} className="w-3.5 h-3.5 text-gray-200" />;
      })}
      <span className="text-xs text-textPrimary ml-1.5 font-bold">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

function SchoolsBanner() {
  return (
    <section className="relative w-full bg-white py-12 lg:py-20 overflow-hidden font-urbanist select-none">
      <div className="section-padding-x w-full flex flex-col md:flex-row gap-12 lg:gap-16 min-h-[500px] lg:min-h-[560px]">
        {/* Left Column: Information Badges, Title, Description, and Call to Action */}
        <div className="w-full md:w-[50%] flex flex-col items-start z-10 pr-0 md:pr-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-secondary">
              <MessageSquare className="w-3.5 h-3.5 text-secondary shrink-0 stroke-[2.25]" />
              <span>Anonymous feedback</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-secondary">
              <Shield className="w-3.5 h-3.5 text-secondary shrink-0 stroke-[2.25]" />
              <span>Your data, your control</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-textPrimary leading-[1.2] tracking-tight">
            <span className="text-primary relative inline-block">
              Understand
              <svg
                viewBox="0 0 90 10"
                className="absolute left-0 -bottom-1.5 w-full h-3 text-primary pointer-events-none"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M 2,8 Q 45,-4 88,8 Q 45,0 2,8 Z" fill="currentColor" />
              </svg>
            </span>{" "}
            What's Really Happening in Your School
          </h1>

          {/* Subhead Description */}
          <p className="text-sm sm:text-base md:text-lg text-textSecondary mt-6 leading-relaxed max-w-[500px] font-medium">
            Turn feedback from students, parents and staff into clear insights
            that drive school improvement.
          </p>

          {/* Action Button */}
          <div className="mt-8">
            <Link
              to="/demo"
              className="inline-block px-7 py-3 bg-primary hover:bg-primary/95 text-white font-medium rounded-[10px] transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01]"
            >
              See It in Action
            </Link>
          </div>
        </div>

        {/* Right Column: Contained School Image & Rating Cards Overlay */}
        <div className="w-full md:w-[50%] relative h-[400px] md:h-[500px] lg:h-[550px] z-10 flex items-center justify-center md:justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src={ImageProvider.schoolBannerImg}
              alt="School Presentation"
              className="w-full h-full object-cover rounded-[32px] border border-gray-100 shadow-xs"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/15 to-transparent rounded-b-[32px] pointer-events-none" />
          </div>

          {/* Staggered Rating Cards Overlay */}
          <div className="relative z-10 flex flex-col gap-3 mr-4 lg:mr-8 -bottom-32 md:max-w-[220px] w-full">
            <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-4 border border-gray-100 flex items-center gap-3.5 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                <TrendingUp className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-secondary">
                  School Improvement
                </span>
                <BlueStarRating rating={4.5} />
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-4 border border-gray-100 flex items-center gap-3.5 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-secondary">
                  Wellbeing & Safety
                </span>
                <BlueStarRating rating={4.3} />
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-4 border border-gray-100 flex items-center gap-3.5 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                <Users className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-secondary">
                  School Community
                </span>
                <BlueStarRating rating={4.2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SchoolsBanner;
