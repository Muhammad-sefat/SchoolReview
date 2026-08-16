import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import shareVoiceImg from "../../assets/images/sharevoice.png";
import shareVoice1Img from "../../assets/images/sharevoice1.png";
import shareVoice2Img from "../../assets/images/sharevoice2.png";

import "swiper/css";
import "swiper/css/navigation";

const ShareYourVoice = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const SHARE_DATA = [
        {
            id: 1,
            title: "Share School Feedback",
            description: "Share your school experience. Anonymous feedback from parents, students, and teachers.",
            image: shareVoiceImg,
            path: "/school-review"
        },
        {
            id: 2,
            title: "Report a Concern",
            description: "Report concerns safely and anonymously - including bullying and safeguarding issues.",
            image: shareVoice1Img,
            path: "/speak-up"
        },
        {
            id: 3,
            title: "Teacher Feedback",
            description: "Student-led, anonymous teacher feedback enhanced by AI for clearer, fairer insights.",
            image: shareVoice2Img,
            path: "/review/student-to-teacher"
        },
        {
            id: 4,
            title: "Thank a Teacher",
            description: "Recognise strengths and show appreciation with positive feedback that helps teachers grow.",
            image: shareVoiceImg,
            path: "/thank-teacher"
        },
        {
            id: 5,
            title: "Community Impact",
            description: "Empower your school community. Share constructive reviews and suggestions to drive change.",
            image: shareVoice1Img,
            path: "/schools"
        }
    ];

    return (
        <section className="section-padding-x py-12 lg:py-16 bg-white overflow-hidden font-urbanist select-none">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 w-full mb-8">
                {/* Left Side: Badge, Title, Subtitle */}
                <div className="flex flex-col items-start gap-3">
                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#038AF9]/5 rounded-full text-xs font-semibold text-[#038AF9]">
                        <MessageSquare className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Students - Parents - Teachers</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-textPrimary leading-tight">
                        Share Your Voice
                    </h2>
                    <p className="text-sm sm:text-base text-secondary font-medium mt-1">
                        Choose how you'd like to make a difference.
                    </p>
                </div>

                {/* Right Side: Navigation Buttons */}
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
                    spaceBetween={28}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full !py-2"
                >
                    {SHARE_DATA.map((card) => (
                        <SwiperSlide key={card.id} className="!h-auto flex">
                            <Link
                                to={card.path}
                                className="w-full flex flex-col gap-4 bg-white hover:translate-y-[-4px] transition-transform duration-300 cursor-pointer"
                            >
                                {/* Card Image Wrapper */}
                                <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-gray-100 shadow-2xs">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Card Info */}
                                <div className="flex flex-col items-start gap-2">
                                    <h3 className="text-lg sm:text-[22px] font-bold text-textPrimary mt-1">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-secondary leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ShareYourVoice;
