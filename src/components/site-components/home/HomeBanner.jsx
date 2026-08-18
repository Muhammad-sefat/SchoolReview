import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Star } from "lucide-react";
import { ImageProvider } from "../../../assets/image-provider/ImageProvider";

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
      <span className="text-xs text-textPrimary ml-1.5">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

const HomeBanner = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const activeCardIndex = hoveredCard !== null ? hoveredCard : 0;
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const optionCards = [
    {
      title: "Share School Feedback",
      subtext: "Enabled",
      path: "/school-review",
      icon: ImageProvider.share,
      iconBg: "bg-[#038AF9]/10",
      colorClass: "text-[#038AF9]",
    },
    {
      title: "Report a Concern",
      subtext: "Enabled",
      path: "/speak-up",
      icon: ImageProvider.report,
      iconBg: "bg-[#F97316]/10",
      colorClass: "text-[#F97316]",
    },
    {
      title: "Share Teacher Feedback",
      subtext: "Not Enabled",
      path: "/review/student-to-teacher",
      icon: ImageProvider.teacher,
      iconBg: "bg-[#8B5CF6]/10",
      colorClass: "text-[#8B5CF6]",
    },
    {
      title: "Thank a Teacher",
      subtext: "Enabled",
      path: "/thank-teacher",
      icon: ImageProvider.thank,
      iconBg: "bg-[#EF4444]/10",
      colorClass: "text-[#EF4444]",
    },
  ];

  return (
    <section className="section-padding-x py-12 lg:py-16 bg-white overflow-hidden font-urbanist select-none">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16 w-full">
        {/* Left Section: Information, Search, and Action Options */}
        <div className="flex flex-col items-start w-full md:w-[60%]">
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-secondary">
              <Lock className="w-3.5 h-3.5 text-secondary shrink-0 stroke-2" />
              <span>100% Anonymous</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-secondary">
              <SwissFlag />
              <span>Swiss Hosted</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-textPrimary leading-[1.1] tracking-tight">
            Help Schools{" "}
            <span className="text-primary relative inline-block">
              Learn
              <svg
                viewBox="0 0 90 10"
                className="absolute left-0 -bottom-2 w-full h-2.5 text-primary pointer-events-none"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M 2,8 Q 45,-4 88,8 Q 45,0 2,8 Z" fill="currentColor" />
              </svg>
            </span>
          </h1>
          <p className="lg:text-lg font-medium text-textSecondary mt-6 leading-relaxed">
            Find your school. Select an option. Make your voice count.
          </p>
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-full mt-8 z-10"
          >
            <input
              type="text"
              placeholder="Search for your school..."
              className="w-full h-12 sm:h-[52px] pl-5 pr-28 bg-white border border-gray-200 rounded-full text-sm placeholder:text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-xs transition-all font-medium"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary hover:bg-primary/95 text-white text-xs sm:text-sm px-6 rounded-full cursor-pointer transition-colors shadow-xs"
            >
              Search
            </button>
          </form>

          {/* 4 Interactive Option Cards Grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8 w-full z-10"
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
                  className={`flex flex-col justify-between p-4 sm:p-5 min-h-[90px] sm:min-h-[100px] rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-md translate-y-0.5"
                      : "bg-white text-textPrimary border-gray-100 shadow-2xs hover:shadow-md hover:border-gray-200"
                  }`}
                >
                  {/* Card Header title */}
                  <h3 className="text-sm sm:text-base font-semibold leading-snug">
                    {card.title}
                  </h3>

                  {/* Bottom Row: Icon & Status */}
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className={`flex items-center justify-center rounded-full ${
                        isActive ? "bg-white" : card.iconBg
                      }`}
                    >
                      <img
                        src={CardIcon}
                        alt={`${card.title} icon`}
                        className="w-6 h-6"
                      />
                    </div>

                    <div
                      className={`flex items-center gap-1 text-[10px] sm:text-sm ${
                        isActive ? "text-blue-100" : "text-secondary"
                      }`}
                    >
                      {card.subtext === "Enabled" ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3 h-3 stroke-[2] fill-none shrink-0"
                          stroke="currentColor"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3 h-3 stroke-[2] fill-none shrink-0"
                          stroke="currentColor"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m4.93 4.93 14.14 14.14" />
                        </svg>
                      )}
                      <span className="text-[10px] sm:text-xs">
                        {card.subtext}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Low Subheading */}
          <span className="text-xs text-secondary mt-5 block tracking-wide font-medium">
            Available features vary by school.
          </span>
        </div>

        {/* Right Section: Staggered Grid of 4 rounded image cards with overlays */}
        <div className="w-full md:w-[40%] flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full">
            {/* Column 1 (Left column - Staggered offset downwards) */}
            <div className="flex flex-col gap-4 lg:gap-6">
              {/* Card 1: Teaching */}
              <div className="relative w-full h-[380px] rounded-4xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 group">
                <img
                  src={ImageProvider.banner}
                  alt="Teaching review details"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Overlay Badge Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-xs rounded-2xl p-3 border border-gray-100 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-md bg-blue-50 text-primary">
                      <img src={ImageProvider.bannericon} alt="Teaching icon" />
                    </div>
                    <div>
                      <span className="text-sm text-textPrimary">Teaching</span>
                      <BlueStarRating rating={4.0} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Leadership */}
              <div className="relative w-[95%] h-[350px] rounded-4xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 group">
                <img
                  src={ImageProvider.banner2}
                  alt="Leadership feedback details"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Overlay Badge Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-xs rounded-2xl p-3 border border-gray-100 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-md bg-blue-50 text-primary">
                      <img
                        src={ImageProvider.bannericon2}
                        alt="Leadership icon"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-textPrimary">
                        Leadership
                      </span>
                      <BlueStarRating rating={4.2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 (Right column - aligned normal) */}
            <div className="flex flex-col gap-4 lg:gap-6">
              {/* Card 2: Inclusion */}
              <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 group">
                <img
                  src={ImageProvider.banner1}
                  alt="Inclusion review details"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Overlay Badge Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-xs rounded-xl p-3 border border-gray-100 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-md bg-blue-50 text-primary">
                      <img
                        src={ImageProvider.bannericon1}
                        alt="Inclusion icon"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-textPrimary">
                        Inclusion
                      </span>
                      <BlueStarRating rating={4.8} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 4: Wellbeing */}
              <div className="relative w-[90%] max-h-[340px] rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 group">
                <img
                  src={ImageProvider.banner3}
                  alt="Wellbeing feedback details"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Overlay Badge Card */}
                <div className="absolute top-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-xs rounded-xl p-3 border border-gray-100 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-md bg-blue-50 text-primary">
                      <img
                        src={ImageProvider.bannericon3}
                        alt="Wellbeing icon"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-textPrimary">
                        Wellbeing
                      </span>
                      <BlueStarRating rating={4.5} />
                    </div>
                  </div>
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
