import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageProvider } from "../../assets/image-provider/ImageProvider";

import "swiper/css";
import "swiper/css/navigation";

// Slides Data for Left Swiper
const reportsSlidesData = [
  {
    title: "School Performance Insights",
    description:
      "Understand strengths, trends, and opportunities for improvement.",
    image: ImageProvider.minischoolreports,
  },
  {
    title: "Actionable Recommendations",
    description:
      "Identify priorities and next steps with AI-assisted insights.",
    image: ImageProvider.minischoolreports1,
  },
  {
    title: "Wellbeing & Safety Indicators",
    description:
      "Monitor safety signals and wellbeing indicators across all year groups.",
    image: ImageProvider.minischoolreports,
  },
];

function SchoolReports() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden font-urbanist select-none flex flex-col md:flex-row min-h-[600px] lg:min-h-[750px]">
      {/* Absolute Split Background (Left is Brand Blue, Right is White/Light Grey) */}
      <div className="absolute inset-0 z-0 flex flex-col md:flex-row pointer-events-none">
        <div className="w-full md:w-[50%] h-[58%] md:h-full bg-primary" />
        <div className="w-full md:w-[50%] h-[42%] md:h-full bg-[#FAFAFA]" />
      </div>

      {/* Main Grid aligned with section margins */}
      <div className="section-padding-x w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        {/* Left Column (Brand Blue Background) */}
        <div className="w-full flex flex-col justify-center items-start py-12 md:py-16 lg:py-20 text-white">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-semibold text-white/95 backdrop-blur-xs">
              360° School Insights
            </div>
            <div className="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-semibold text-white/95 backdrop-blur-xs">
              Automated Reports Save Time
            </div>
            <div className="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-semibold text-white/95 backdrop-blur-xs">
              Evidence-Based Improvement
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight">
            AI-Powered School Reports
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-blue-50/90 mt-4 leading-relaxed max-w-[500px] font-medium">
            Generate professional evaluation and improvement reports
            automatically from student, parent, and staff feedback.
          </p>

          {/* Action Button */}
          <div className="mt-8">
            <Link
              to="/reports/school"
              className="inline-block px-6 py-2.5 bg-white hover:bg-white/95 text-primary font-bold rounded-[10px] text-sm transition-colors shadow-xs"
            >
              Learn More
            </Link>
          </div>

          {/* Swiper Slider Wrapper */}
          <div className="relative w-full mt-10">
            <button
              ref={prevRef}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-primary border border-white shadow-md flex items-center justify-center hover:bg-gray-50 cursor-pointer disabled:opacity-0 disabled:pointer-events-none transition-opacity duration-200 group/btn"
              title="Previous Slide"
            >
              <ChevronLeft className="w-4.5 h-4.5 text-white group-hover/btn:text-textPrimary stroke-[2.5]" />
            </button>

            <button
              ref={nextRef}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-primary border border-white shadow-md flex items-center justify-center hover:bg-gray-50 cursor-pointer disabled:opacity-0 disabled:pointer-events-none transition-opacity duration-200 group/btn"
              title="Next Slide"
            >
              <ChevronRight className="w-4.5 h-4.5 text-white group-hover/btn:text-textPrimary stroke-[2.5]" />
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              spaceBetween={16}
              slidesPerView={1.15}
              breakpoints={{
                480: { slidesPerView: 1.3 },
                640: { slidesPerView: 1.7 },
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2 },
              }}
              className="w-full !py-2"
            >
              {reportsSlidesData.map((slide, index) => (
                <SwiperSlide key={index} className="!h-auto flex">
                  {/* Slide Card Container (White bg, rounded, with content and mockup) */}
                  <div className="bg-white rounded-[24px] p-4.5 flex flex-col justify-between w-full shadow-md border border-gray-100 select-none">
                    {/* Header: Title and Description */}
                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-sm font-bold text-textPrimary leading-tight">
                        {slide.title}
                      </h4>
                      <p className="text-[10px] text-secondary font-medium leading-relaxed mt-0.5">
                        {slide.description}
                      </p>
                    </div>

                    {/* Mockup Image Container inside the card */}
                    <div className="w-full h-[360px] rounded-xl p-1 sm:p-1.5 overflow-hidden flex items-center justify-center mt-3.5">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right Column (White/Light Grey Background containing detailed schoolreports mockup aligned to bottom) */}
        <div className="w-full flex items-end justify-center md:justify-end pt-12 md:pt-16 lg:pt-20">
          <div className="w-full max-w-[580px] lg:max-w-[640px] rounded-t-[32px] overflow-hidden shadow-2xl border-t border-x border-gray-100 bg-white p-1 sm:p-1.5 hover:scale-[1.01] transition-transform duration-300">
            <img
              src={ImageProvider.schoolreports}
              alt="Detailed School Report Layout"
              className="w-full h-auto object-contain rounded-t-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SchoolReports;
