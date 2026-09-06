import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  Star,
  MapPin,
  School,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import schoolIcon from "../../../assets/images/schoolicon.png";
import fSchoolImg from "../../../assets/images/fschool.jpg";
import fSchool1Img from "../../../assets/images/fschool1.jpg";
import schoolLogoImg from "../../../assets/images/schoolLogo.png";

import "swiper/css";
import "swiper/css/navigation";

// Verified Badge Icon
const VerifiedBadge = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 fill-[#038AF9] text-white shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path
      d="m9 12 2 2 4-4"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Custom Star Rating Component
const BlueStarRating = ({ rating, reviewsCount }) => {
  const filledStars = Math.floor(rating);
  const remainder = rating - filledStars;

  return (
    <div className="flex items-center gap-0.5 select-none">
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
      <span className="text-xs text-gray-400 font-medium ml-1">
        ({reviewsCount.toLocaleString()} reviews)
      </span>
    </div>
  );
};

const FindSchools = () => {
  const [favorites, setFavorites] = useState([3]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id],
    );
  };

  const SCHOOLS_DATA = [
    {
      id: 1,
      name: "Zurich International School",
      location: "Zurich, Switzerland",
      type: "Private",
      rating: 4.5,
      reviewsCount: 1020,
      verified: true,
      logo: schoolLogoImg,
      image: fSchoolImg,
    },
    {
      id: 2,
      name: "Geneva English School",
      location: "Geneva, Switzerland",
      type: "Private",
      rating: 4.8,
      reviewsCount: 850,
      verified: true,
      logo: schoolLogoImg,
      image: fSchool1Img,
    },
    {
      id: 3,
      name: "Lyceum Alpinum Zuoz",
      location: "Zuoz, Switzerland",
      type: "Boarding / Private",
      rating: 4.7,
      reviewsCount: 620,
      verified: true,
      logo: schoolLogoImg,
      image: fSchoolImg,
    },
    {
      id: 4,
      name: "Institut Le Rosey",
      location: "Rolle, Switzerland",
      type: "Boarding / Private",
      rating: 4.9,
      reviewsCount: 1200,
      verified: true,
      logo: schoolLogoImg,
      image: fSchool1Img,
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden font-urbanist select-none">
      <div className="flex flex-col lg:flex-row bg-[#F8F9FA] overflow-hidden border border-gray-100 shadow-xs w-full min-h-[480px]">
        {/* Left Section (Blue Banner) */}
        <div className="w-full lg:w-[35%] bg-[#038AF9] py-8 pl-12 lg:pl-30 flex items-center text-white">
          {/* Top Block */}
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight">
              Find the Right School
            </h2>
            <p className="lg:text-lg text-white/90 mt-3 leading-relaxed max-w-[180px] lg:max-w-none">
              Explore trusted reviews from parents, <br /> students and
              teachers.
            </p>
            <Link
              to="/schools"
              className="my-6 px-6 py-2.5 bg-white text-[#038AF9] hover:bg-white/95 text-sm font-semibold rounded-xl shadow-xs transition-colors self-start cursor-pointer"
            >
              Explore all Schools
            </Link>
            <h3 className="text-lg sm:text-xl lg:text-[22px] font-medium">
              Need Help Choosing?
            </h3>
            <p className="text-sm text-white/90 mt-2 leading-relaxed max-w-[280px] lg:max-w-none">
              Get personalised support from an education expert.
            </p>
            <Link
              to="/consultation"
              className="mt-5 px-6 py-2.5 bg-transparent text-white border hover:bg-white/10 text-sm font-medium rounded-xl transition-all self-start cursor-pointer"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Right Section (Swiper Carousel) */}
        <div className="w-full lg:w-[65%] p-8 sm:p-10 lg:p-12 relative flex items-center bg-[#F8F9FA] overflow-hidden">
          {/* Custom Nav buttons */}
          <button
            ref={prevRef}
            className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md hover:bg-gray-50 flex items-center justify-center transition-all cursor-pointer z-20 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Previous"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700 stroke-[2.5]" />
          </button>

          <button
            ref={nextRef}
            className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#038AF9] hover:bg-blue-600 flex items-center justify-center transition-all cursor-pointer z-20 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Next"
          >
            <ChevronRight className="w-4 h-4 text-white stroke-[2.5]" />
          </button>

          {/* Swiper Slider */}
          <div className="w-full">
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
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="w-full !px-8 !py-2"
            >
              {SCHOOLS_DATA.map((school) => {
                const isFavorited = favorites.includes(school.id);

                return (
                  <SwiperSlide key={school.id} className="!h-auto flex">
                    <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-2xs hover:shadow-xs transition-all overflow-hidden flex flex-col max-h-[360px] select-none">
                      {/* Image container */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <img
                          src={school.image}
                          alt={school.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        {/* Heart Overlay button */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleFavorite(school.id);
                          }}
                          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer z-10"
                        >
                          <Heart
                            className={`w-4.5 h-4.5 transition-colors ${
                              isFavorited
                                ? "fill-[#038AF9] text-[#038AF9]"
                                : "text-[#038AF9]"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Logo Overlay (Outside image container to prevent clipping) */}
                      <div className="relative">
                        <div className="absolute top-0 left-4 -translate-y-1/2 w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-1.5 z-10">
                          <img
                            src={school.logo}
                            alt={`${school.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Card Details */}
                      <div className="pt-9 pb-5 px-5 flex flex-col justify-between flex-grow gap-x-3.5 gap-y-2">
                        {/* School Name & Verified Badge */}
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-[15px] sm:text-base font-bold text-textPrimary leading-snug line-clamp-1">
                            {school.name}
                          </h4>
                          {school.verified && <VerifiedBadge />}
                        </div>

                        {/* Location and Category Stack */}
                        <div className="flex flex-col gap-x-2">
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-secondary font-medium">
                            <MapPin className="w-4 h-4 text-gray-600 shrink-0" />
                            <span>{school.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-secondary font-medium">
                            <School className="w-4 h-4 text-gray-600 shrink-0" />
                            <span>{school.type}</span>
                          </div>
                        </div>

                        {/* Rating row */}
                        <div className="border-t border-gray-100 pt-3">
                          <BlueStarRating
                            rating={school.rating}
                            reviewsCount={school.reviewsCount}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindSchools;
