import { Link } from "react-router-dom";
import {
  MessageSquare,
  Shield,
  Star,
  GraduationCap,
  Eye,
  BookOpen,
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

function TeachersBanner() {
  return (
    <section className="relative w-full bg-white overflow-hidden font-urbanist select-none min-h-[500px] md:h-[600px] lg:h-[720px] flex flex-col md:flex-row md:items-center">
      {/* Teacher Banner Photo (Stretches to top/bottom/right edge on desktop) */}
      <div className="relative md:absolute md:top-0 md:right-0 w-full md:w-[50%] h-[400px] md:h-full z-0 overflow-hidden">
        <img
          src={ImageProvider.teacherBannerImg}
          alt="Smiling Teacher"
          className="w-full h-full object-cover"
        />
        {/* Soft fade gradient to blend with the white left side (Desktop only) */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none" />
        {/* Soft fade gradient to blend with the bottom white space */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container aligned with site padding */}
      <div className="section-padding-x w-full relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Column: Information Badges, Title, Description, and Call to Action */}
        <div className="w-full md:w-[50%] flex flex-col items-start py-12 lg:py-20 pr-0 md:pr-8 lg:pr-16">
          {/* Top Badges Row */}
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
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-textPrimary leading-[1.2] tracking-tight max-w-[580px]">
            <span className="text-primary relative inline-block">
              Empower
              {/* Premium curved underline SVG */}
              <svg
                viewBox="0 0 90 10"
                className="absolute left-0 -bottom-1.5 w-full h-3 text-primary pointer-events-none"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M 2,8 Q 45,-4 88,8 Q 45,0 2,8 Z" fill="currentColor" />
              </svg>
            </span>{" "}
            your teaching through honest feedback
          </h1>

          {/* Subhead Description */}
          <p className="text-sm sm:text-base md:text-lg text-textSecondary mt-6 leading-relaxed max-w-[500px] font-medium">
            Collect meaningful feedback from students, peers and observers to
            strengthen your teaching and support your growth.
          </p>

          {/* Action Button */}
          <div className="mt-8">
            <Link
              to="/auth/signup/teacher"
              className="inline-block px-7 py-3 bg-primary hover:bg-primary/95 text-white font-medium rounded-[10px] transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01]"
            >
              Start Free
            </Link>
          </div>
        </div>

        {/* Right Column: Overlay area holding the rating cards */}
        <div className="w-full md:w-[50%] flex items-center justify-center md:justify-end py-8 md:py-0 pr-0 md:pr-4 lg:pr-8">
          <div className="relative z-10 flex flex-col gap-4 max-w-[220px] w-full">
            {/* Card 1: Student Feedback */}
            <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-4 border border-gray-100 flex items-center gap-3.5 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                <GraduationCap className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-secondary">
                  Student feedback
                </span>
                <BlueStarRating rating={4.5} />
              </div>
            </div>

            {/* Card 2: Observer Feedback */}
            <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-4 border border-gray-100 flex items-center gap-3.5 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                <Eye className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-secondary">
                  Observer feedback
                </span>
                <BlueStarRating rating={4.0} />
              </div>
            </div>

            {/* Card 3: Self Review */}
            <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-4 border border-gray-100 flex items-center gap-3.5 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-primary shrink-0">
                <BookOpen className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-secondary">
                  Self Review
                </span>
                <BlueStarRating rating={4.0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeachersBanner;
