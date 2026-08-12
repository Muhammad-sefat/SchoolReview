import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldAlert,
  Building,
  GraduationCap,
  Heart,
  Lock,
  Star,
  Users,
  Award,
  Smile,
  BookOpen
} from "lucide-react";

// Image Assets Imports
import studentbanner from "../../assets/images/studentbanner.png";
import studentbanner1 from "../../assets/images/studentbanner1.png";
import studentbanner2 from "../../assets/images/studentbanner2.png";
import studentbanner3 from "../../assets/images/studentbanner3.png";

// Custom SVG Switzerland Flag Component
const SwissFlag = () => (
  <svg viewBox="0 0 10 10" className="w-3.5 h-3.5 shrink-0">
    <rect width="10" height="10" fill="#D52B1E" rx="1.5" />
    <rect x="4.25" y="2" width="1.5" height="6" fill="#FFFFFF" />
    <rect x="2" y="4.25" width="6" height="1.5" fill="#FFFFFF" />
  </svg>
);

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
          // Approximate a partial star fill visually using gradient if needed,
          // or render a nice outline star. Let's use a semi-filled design:
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
      <span className="text-[10px] font-bold text-secondary ml-1.5">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

const HomeBanner = () => {
  // Option Card States (Index 0 is active/blue by default)
  const [hoveredCard, setHoveredCard] = useState(null);
  const activeCardIndex = hoveredCard !== null ? hoveredCard : 0;

  // Search Submit Handler
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search logic here
  };

  const optionCards = [
    {
      title: "Share School Feedback",
      subtext: "2 Mins",
      path: "/school-review",
      icon: Building,
      colorClass: "text-[#038AF9]"
    },
    {
      title: "Report a Concern",
      subtext: "2 Mins",
      path: "/speak-up",
      icon: ShieldAlert,
      colorClass: "text-[#F97316]"
    },
    {
      title: "Share Teacher Feedback",
      subtext: "3 Mins",
      path: "/review/student-to-teacher",
      icon: GraduationCap,
      colorClass: "text-[#8B5CF6]"
    },
    {
      title: "Thank a Teacher",
      subtext: "1 Min",
      path: "/thank-teacher",
      icon: Heart,
      colorClass: "text-[#EF4444]"
    }
  ];

  return (
    <section className="section-padding-x bg-white overflow-hidden py-12 md:py-20 lg:py-24 font-urbanist select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        
        {/* Left Section: Information, Search, and Action Options */}
        <div className="flex flex-col items-start w-full">
          {/* Top Badges Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-secondary">
              <Lock className="w-3.5 h-3.5 text-secondary shrink-0 stroke-[2]" />
              <span>100% Anonymous</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-secondary">
              <SwissFlag />
              <span>Swiss Hosted</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-textPrimary leading-[1.1] tracking-tight">
            Help Schools{" "}
            <span className="text-primary relative inline-block">
              Learn
              {/* Premium curved underline SVG */}
              <svg
                viewBox="0 0 100 10"
                className="absolute left-0 bottom-[-6px] w-full h-2 text-primary pointer-events-none"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0,3 Q 50,9 100,3"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subhead Description */}
          <p className="text-sm sm:text-base font-semibold text-secondary mt-6 leading-relaxed">
            Find your school. Select an option. Make your voice count.
          </p>

          {/* Search Input Bar Wrapper */}
          <form onSubmit={handleSearchSubmit} className="relative w-full md:w-[480px] mt-8 z-10">
            <input
              type="text"
              placeholder="Search for your school..."
              className="w-full h-12 sm:h-[52px] pl-5 pr-28 bg-white border border-gray-200 rounded-full text-sm text-foreground placeholder:text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-xs transition-all font-semibold"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary hover:bg-primary/95 text-white font-bold text-xs sm:text-sm px-6 rounded-full cursor-pointer transition-colors shadow-xs"
            >
              Search
            </button>
          </form>

          {/* 4 Interactive Option Cards Grid */}
          <div 
            className="grid grid-cols-2 gap-3.5 mt-8 w-full z-10"
            onMouseLeave={() => setHoveredCard(null)}
          >
            {optionCards.map((card, index) => {
              const isActive = index === activeCardIndex;
              const CardIcon = card.icon;
              
              return (
                <Link
                  key={index}
                  to={card.path}
                  onMouseEnter={() => setHoveredCard(index)}
                  className={`flex flex-col gap-2.5 p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-md translate-y-[-2px]"
                      : "bg-white text-textPrimary border-gray-100 shadow-2xs hover:shadow-md hover:border-gray-200"
                  }`}
                >
                  {/* Card Icon & Metadata text */}
                  <div className="flex items-center justify-between">
                    <div 
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        isActive ? "bg-white/10" : "bg-gray-50"
                      }`}
                    >
                      <CardIcon 
                        className={`w-4 h-4 stroke-[2] ${
                          isActive ? "text-white" : card.colorClass
                        }`} 
                      />
                    </div>
                    <span 
                      className={`text-[9px] font-bold uppercase tracking-wider ${
                        isActive ? "text-blue-100" : "text-secondary"
                      }`}
                    >
                      {card.subtext}
                    </span>
                  </div>

                  {/* Card Header title */}
                  <h3 className="text-xs sm:text-[13px] font-bold leading-snug">
                    {card.title}
                  </h3>
                </Link>
              );
            })}
          </div>

          {/* Low Subheading */}
          <span className="text-[10px] sm:text-xs text-secondary mt-5 italic block tracking-wide font-medium">
            Available for every Swiss school
          </span>
        </div>

        {/* Right Section: Staggered Grid of 4 rounded image cards with overlays */}
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full">
            
            {/* Column 1 (Left column - Staggered offset downwards) */}
            <div className="flex flex-col gap-4 lg:gap-6 md:translate-y-8">
              {/* Card 1: Teaching */}
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-md border border-gray-100 bg-gray-50 group">
                <img
                  src={studentbanner}
                  alt="Teaching review details"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Overlay Badge Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-xs rounded-xl p-3 border border-gray-100 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-md bg-blue-50 text-primary">
                      <BookOpen className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold text-textPrimary">Teaching</span>
                  </div>
                  <BlueStarRating rating={4.0} />
                </div>
              </div>

              {/* Card 3: Leadership */}
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-md border border-gray-100 bg-gray-50 group">
                <img
                  src={studentbanner2}
                  alt="Leadership feedback details"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Overlay Badge Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-xs rounded-xl p-3 border border-gray-100 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-md bg-blue-50 text-primary">
                      <Award className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold text-textPrimary">Leadership</span>
                  </div>
                  <BlueStarRating rating={4.2} />
                </div>
              </div>
            </div>

            {/* Column 2 (Right column - aligned normal) */}
            <div className="flex flex-col gap-4 lg:gap-6">
              {/* Card 2: Inclusion */}
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-md border border-gray-100 bg-gray-50 group">
                <img
                  src={studentbanner1}
                  alt="Inclusion review details"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Overlay Badge Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-xs rounded-xl p-3 border border-gray-100 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-md bg-blue-50 text-primary">
                      <Users className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold text-textPrimary">Inclusion</span>
                  </div>
                  <BlueStarRating rating={4.0} />
                </div>
              </div>

              {/* Card 4: Wellbeing */}
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-md border border-gray-100 bg-gray-50 group">
                <img
                  src={studentbanner3}
                  alt="Wellbeing feedback details"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Overlay Badge Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-xs rounded-xl p-3 border border-gray-100 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-md bg-blue-50 text-primary">
                      <Smile className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold text-textPrimary">Wellbeing</span>
                  </div>
                  <BlueStarRating rating={4.5} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeBanner;
