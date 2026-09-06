import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import forSchoolsImg from "../../../assets/images/forschools.png";
import forTeachersImg from "../../../assets/images/forteachers.png";

import "swiper/css";

const BuiltSchoolsAndTeachers = () => {
  const [schoolsSwiper, setSchoolsSwiper] = useState(null);
  const [schoolsActiveIndex, setSchoolsActiveIndex] = useState(0);

  const [teachersSwiper, setTeachersSwiper] = useState(null);
  const [teachersActiveIndex, setTeachersActiveIndex] = useState(0);

  const schoolSlides = [
    forSchoolsImg,
    forSchoolsImg,
    forSchoolsImg,
    forSchoolsImg,
  ];
  const teacherSlides = [
    forTeachersImg,
    forTeachersImg,
    forTeachersImg,
    forTeachersImg,
  ];

  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden font-urbanist select-none">
      {/* Top-Right Decorative Blue Corner Shape */}
      <svg
        viewBox="0 0 100 100"
        className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-[360px] lg:h-[360px] text-[#038AF9] pointer-events-none z-0"
        preserveAspectRatio="none"
      >
        <path d="M 10,0 C 15,30 85,30 100,85 L 100,0 Z" fill="currentColor" />
      </svg>

      <div className="section-padding-x w-full flex flex-col relative z-10">
        {/* Header Section */}
        <div className="text-center flex flex-col items-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-textPrimary leading-tight">
            Built for Schools and Teachers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-secondary max-w-[720px] mx-auto leading-relaxed mt-3.5 font-medium">
            Whether you lead a school or teach in the classroom, SchoolReview
            turns feedback into meaningful improvement.
          </p>
        </div>

        {/* Two-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
          {/* Card 1: For Schools */}
          <div className="w-full bg-[#F8F9FA] rounded-[32px] overflow-hidden border border-gray-100 flex flex-col p-3 sm:p-4 shadow-2xs">
            {/* Top Text & Action Panel (Compact ~200px) */}
            <div className="p-6 sm:p-7 flex flex-col items-start bg-white rounded-[24px] sm:rounded-[28px]">
              <h3 className="text-xl sm:text-2xl font-bold text-textPrimary">
                For Schools
              </h3>
              <p className="text-sm sm:text-base text-secondary mt-2 mb-6 leading-relaxed font-medium">
                See your school through every voice and turn feedback into
                action.
              </p>
              <Link
                to="/school-review"
                className="px-5 py-2.5 bg-[#038AF9] hover:bg-blue-600 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <span>Explore for Schools</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>

            {/* Bottom Image Panel with Increased Height Swiper */}
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[490px] overflow-hidden rounded-[24px] sm:rounded-[28px] mt-3 sm:mt-4 bg-gray-100">
              <Swiper
                onSwiper={setSchoolsSwiper}
                onSlideChange={(swiper) =>
                  setSchoolsActiveIndex(swiper.realIndex)
                }
                slidesPerView={1}
                className="w-full h-full"
              >
                {schoolSlides.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    className="w-full h-full overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`For Schools demonstration ${index + 1}`}
                      className="w-full h-full object-cover select-none"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination Dots Pill with Blur & Shadow */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md shadow-md z-20">
                {schoolSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => schoolsSwiper?.slideTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      schoolsActiveIndex === index
                        ? "w-5 sm:w-6 bg-[#038AF9]"
                        : "w-2 bg-white hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: For Teachers */}
          <div className="w-full bg-[#F8F9FA] rounded-[32px] overflow-hidden border border-gray-100 flex flex-col p-3 sm:p-4 shadow-2xs">
            {/* Top Text & Action Panel (Compact ~200px) */}
            <div className="p-6 sm:p-7 flex flex-col items-start bg-white rounded-[24px] sm:rounded-[28px]">
              <h3 className="text-xl sm:text-2xl font-bold text-textPrimary">
                For Teachers
              </h3>
              <p className="text-sm sm:text-base text-secondary mt-2 mb-6 leading-relaxed font-medium">
                See your teaching through the eyes of students, peers and
                observers.
              </p>
              <Link
                to="/review/student-to-teacher"
                className="px-5 py-2.5 bg-[#038AF9] hover:bg-blue-600 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <span>Explore for Teachers</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>

            {/* Bottom Image Panel with Increased Height Swiper */}
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[490px] overflow-hidden rounded-[24px] sm:rounded-[28px] mt-3 sm:mt-4 bg-gray-100">
              <Swiper
                onSwiper={setTeachersSwiper}
                onSlideChange={(swiper) =>
                  setTeachersActiveIndex(swiper.realIndex)
                }
                slidesPerView={1}
                className="w-full h-full"
              >
                {teacherSlides.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    className="w-full h-full overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`For Teachers demonstration ${index + 1}`}
                      className="w-full h-full object-cover select-none"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination Dots Pill with Blur & Shadow */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md shadow-md z-20">
                {teacherSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => teachersSwiper?.slideTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      teachersActiveIndex === index
                        ? "w-5 sm:w-6 bg-[#038AF9]"
                        : "w-2 bg-white hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltSchoolsAndTeachers;
