import { useState, useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";
import { CircleCheck, AlertCircle } from "lucide-react";

function TermsAndCondition() {
  const [activeSection, setActiveSection] = useState("using-schoolreview");

  const sections = [
    { id: "using-schoolreview", label: "1. Using SchoolReview" },
    { id: "content-guidelines", label: "2. Content Guidelines" },
    { id: "moderation-enforcement", label: "3. Moderation & Enforcement" },
    { id: "emergency-notice", label: "4. Emergency Notice" },
    { id: "platform-changes", label: "5. Platform Changes" },
    { id: "liability-disclaimer", label: "6. Liability Disclaimer" },
    { id: "use-of-data", label: "7. Use of Data for Research" },
    { id: "governing-law", label: "8. Governing Law" },
    { id: "acceptance-terms", label: "9. Acceptance of Terms" },
  ];

  // Scrollspy logic using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Smooth scroll handler with offset for sticky navbar
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // offset to clear sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white font-urbanist select-none">
      <ScrollRestoration />

      {/* Top Banner */}
      <div className="w-full bg-[#f0f7ff] border-b border-blue-100/50 py-16 sm:py-20 text-left">
        <div className="section-padding-x">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-textPrimary leading-[1.15] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-textSecondary mt-4 font-medium max-w-[600px]">
            Please read these Terms before using SchoolReview.
          </p>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-secondary mt-8">
            <span>4 minute read</span>
            <span className="text-gray-300">•</span>
            <span>Last updated: January 2027</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="section-padding-x py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Sidebar Table of Contents */}
          <div className="lg:sticky lg:top-28 w-full lg:w-[15%] shrink-0 text-left border-b lg:border-b-0 lg:border-r border-gray-100 pb-8 lg:pb-0 lg:pr-8">
            <h3 className="text-lg font-semibold text-textPrimary mb-6 tracking-tight">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-3.5">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleScrollTo(sec.id)}
                  className={`text-left transition-all leading-normal cursor-pointer outline-none ${
                    activeSection === sec.id
                      ? "text-primary font-bold translate-x-1"
                      : "text-secondary hover:text-primary hover:translate-x-1"
                  } duration-200 transform`}
                >
                  {sec.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Column: Main Terms Content */}
          <div className="w-full lg:w-[72%] flex flex-col">
            {/* 1. Using SchoolReview */}
            <section id="using-schoolreview" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                1. Using SchoolReview
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                SchoolReview is a platform for sharing school experiences,
                feedback, and concerns. By using the platform, you agree to
                follow our Community Guidelines and these Terms. You must:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Be honest",
                  "Be respectful",
                  "Protect privacy",
                  "Use anonymity responsibly",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-textPrimary"
                  >
                    <CircleCheck className="w-4 h-4 text-primary shrink-0 stroke-[2.25]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-textPrimary font-medium leading-relaxed mt-4">
                SchoolReview is intended for users aged 13 and above.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 2. Content Guidelines */}
            <section id="content-guidelines" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                2. Content Guidelines
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                You are responsible for the content you post. You must not post:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Harmful or abusive content",
                  "False or misleading information",
                  "Personal data of private individuals",
                  "Content involving minors in a sexual way",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-textPrimary"
                  >
                    <AlertCircle className="w-4 h-4 text-orange-500 shrink-0 stroke-[2.25]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-textPrimary font-medium leading-relaxed mt-4">
                We may remove content that breaks our rules.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 3. Moderation & Enforcement */}
            <section
              id="moderation-enforcement"
              className="scroll-mt-28 text-left"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                3. Moderation & Enforcement
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                We can:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Hide or remove content",
                  "Limit or remove access",
                  "Change platform features",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-textPrimary"
                  >
                    <CircleCheck className="w-4 h-4 text-primary shrink-0 stroke-[2.25]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-textPrimary font-medium leading-relaxed mt-4">
                This is to keep the platform safe and useful.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 4. Emergency Notice */}
            <section id="emergency-notice" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                4. Emergency Notice
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed">
                SchoolReview is not monitored for emergencies. For serious
                danger or illegal activity, contact local authorities.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 5. Platform Changes */}
            <section id="platform-changes" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                5. Platform Changes
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed">
                We may update these Terms, platform features, or services from
                time to time.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 6. Liability Disclaimer */}
            <section
              id="liability-disclaimer"
              className="scroll-mt-28 text-left"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                6. Liability Disclaimer
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed">
                SchoolReview is not responsible for user-generated content. User
                opinions belong to their authors and do not necessarily reflect
                SchoolReview's views.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 7. Use of Data for Research */}
            <section id="use-of-data" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                7. Use of Data for Research
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                We may use anonymous, aggregated data to support research and
                understanding in education. This means:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "No names",
                  "No emails",
                  "No personal identities",
                  "No individual profiles",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-textPrimary"
                  >
                    <AlertCircle className="w-4 h-4 text-orange-500 shrink-0 stroke-[2.25]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-textSecondary font-medium leading-relaxed my-4">
                Only combined, non-identifiable trends may be used or shared—for
                example, to understand patterns in wellbeing, safety, or
                learning environments.
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "We do not sell personal data.",
                  "We may share or sell fully anonymised, aggregated insights that cannot identify any person.",
                  "We do not share contact details without consent.",
                  "All research use is designed to improve education - not to expose individuals.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-textPrimary"
                  >
                    <CircleCheck className="w-4 h-4 text-primary shrink-0 stroke-[2.25]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 8. Governing Law */}
            <section id="governing-law" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                8. Governing Law
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed">
                These Terms are governed by the laws of Switzerland.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 9. Acceptance of Terms */}
            <section id="acceptance-terms" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                9. Acceptance of Terms
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed">
                By accessing or using SchoolReview, you agree to these Terms and
                our Community Guidelines.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndCondition;
