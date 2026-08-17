import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import { ImageProvider } from "../../assets/image-provider/ImageProvider";

import "swiper/css";
import "swiper/css/navigation";

// Carousel Slides Data
const slidesData = [
  {
    title: "School Performance Insights",
    description:
      "Identify strengths, priorities and opportunities for improvement.",
    image: ImageProvider.youschool,
  },
  {
    title: "Teacher Development Insights",
    description:
      "Identify strengths and target development where it matters most.",
    image: ImageProvider.youschool1,
  },
  {
    title: "Wellbeing & Safeguarding",
    description: "Monitor wellbeing, inclusion and concerns across the school.",
    image: ImageProvider.youschool,
  },
  {
    title: "School Community Insights",
    description:
      "Understand the feedback from parents, students and staff in real-time.",
    image: ImageProvider.youschool1,
  },
];

function YourSchoolAndTeacher() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full bg-white py-12 lg:py-4 overflow-hidden font-urbanist select-none">
      <div className="section-padding-x w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 lg:mb-14">
        {/* Left Side: Category Pill & Section Title */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-primary">
            <Users className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>Students • Parents • Teachers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-textPrimary leading-tight">
            Your School. Your Data. Your Insights.
          </h2>
        </div>

        {/* Right Side: Custom Navigation Arrow Buttons */}
        <div className="flex items-center gap-2.5 shrink-0 mb-1.5">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 hover:bg-gray-50 flex items-center justify-center transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group/btn"
            title="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 text-secondary group-hover/btn:text-textPrimary stroke-[2.5]" />
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-primary shadow-md hover:bg-primary/95 flex items-center justify-center transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group/btn"
            title="Next Slide"
          >
            <ChevronRight className="w-5 h-5 text-white stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Bleeding Swiper Slider Container (Left padding matches page margins, right edge overflows) */}
      <div className="w-full pl-4 sm:pl-5 xl:pl-[120px] pr-0">
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
          spaceBetween={24}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.15 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3.15 },
          }}
          className="w-full !py-2"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="!h-auto flex flex-col gap-4">
              {/* Card Image Container with blue stroke border and soft light bg */}
              <div className="w-full aspect-[4/3] rounded-[28px] bg-primary/10 p-1.5 sm:p-2 overflow-hidden flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-[22px]"
                />
              </div>

              {/* Card Text Content */}
              <div className="flex flex-col gap-1.5 mt-2 pr-4 sm:pr-0">
                <h3 className="text-xl sm:text-[22px] font-bold text-textPrimary leading-tight">
                  {slide.title}
                </h3>
                <p className="text-sm sm:text-base text-secondary leading-relaxed font-medium">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default YourSchoolAndTeacher;
