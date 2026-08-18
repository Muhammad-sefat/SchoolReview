import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bannerImg from "../../../assets/images/banner.png";
import banner1Img from "../../../assets/images/banner1.png";
import banner2Img from "../../../assets/images/banner2.png";
import banner3Img from "../../../assets/images/banner3.png";

import "swiper/css";
import "swiper/css/navigation";

const TrustedByTeachers = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const TESTIMONIALS_DATA = [
        {
            id: 1,
            quote: "For the first time, I felt like my opinion actually mattered.",
            role: "Student Voice",
            image: bannerImg,
        },
        {
            id: 2,
            quote: "As a parent, I don't want to complain. I want to help. SchoolReview gave me a voice and a constructive way to support my child's school.",
            role: "Parent Voice",
            image: banner1Img,
        },
        {
            id: 3,
            quote: "The feedback reminded me why I became a teacher. Some comments made me smile. Others helped me grow.",
            role: "Teacher Voice",
            image: banner2Img,
        },
        {
            id: 4,
            quote: "We thought we knew how our school was experienced. The feedback helped us see what we were missing.",
            role: "School Leader Voice",
            image: banner3Img,
        },
        {
            id: 5,
            quote: "The constructive feedback provided us with actionable insights to build a stronger, more supportive educational environment.",
            role: "Community Voice",
            image: bannerImg,
        },
    ];

    return (
        <section className="section-padding-x py-12 lg:py-16 bg-white overflow-hidden font-urbanist select-none">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 w-full mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-textPrimary leading-tight">
                    Trusted by Parents, Students and Teachers
                </h2>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-2.5 mb-1.5 shrink-0">
                    <button
                        ref={prevRef}
                        className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 hover:bg-gray-50 flex items-center justify-center transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Previous"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700 stroke-[2.5]" />
                    </button>
                    <button
                        ref={nextRef}
                        className="w-10 h-10 rounded-full bg-[#038AF9] shadow-md hover:bg-blue-600 flex items-center justify-center transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Next"
                    >
                        <ChevronRight className="w-5 h-5 text-white stroke-[2.5]" />
                    </button>
                </div>
            </div>

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
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="w-full !py-2"
                >
                    {TESTIMONIALS_DATA.map((card) => (
                        <SwiperSlide key={card.id} className="!h-auto flex">
                            <div className="group w-full relative h-[420px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xs cursor-pointer flex flex-col justify-end">

                                {/* Background Image with hover zoom */}
                                <img
                                    src={card.image}
                                    alt={card.role}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Dark Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                                {/* Content (absolute positioned on top of the overlay) */}
                                <div className="relative z-20 p-6 sm:p-8 flex flex-col items-start gap-1">
                                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                                        {card.quote}
                                    </p>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                                        {card.role}
                                    </h3>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TrustedByTeachers;
