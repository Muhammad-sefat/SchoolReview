import { useState, useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";
import { CircleCheck } from "lucide-react";

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("what-we-collect");

  const sections = [
    { id: "what-we-collect", label: "1. What We Collect" },
    { id: "why-we-collect", label: "2. Why We Collect It" },
    { id: "anonymity", label: "3. Anonymity" },
    { id: "data-protection", label: "4. Data Protection" },
    { id: "sharing-data", label: "5. Sharing Data" },
    { id: "your-rights", label: "6. Your Rights" },
    { id: "cookies", label: "7. Cookies" },
    { id: "data-retention", label: "8. Data Retention" },
    { id: "where-data-stored", label: "9. Where Data is Stored" },
    { id: "children-minors", label: "10. Children & Minors" },
    { id: "contact", label: "11. Contact" },
    { id: "changes", label: "12. Changes" },
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
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-textSecondary mt-4 font-medium max-w-[600px]">
            Learn how SchoolReview collects, uses, stores, and protects your
            personal information.
          </p>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-secondary mt-8">
            <span>4 minute read</span>
            <span className="text-gray-300">•</span>
            <span>Last updated: January 2026</span>
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
          <div className="w-full lg:w-[82%] flex flex-col">
            {/* 1. Information We Collect */}
            <section id="what-we-collect" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                1. Information We Collect
              </h2>
              <p className="text-textPrimary font-medium leading-relaxed mb-4">
                We may collect:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Your email address",
                  "Your role (student, parent, teacher, etc.)",
                  "Information you choose to submit",
                  "Technical information such as browser type, device, and IP address",
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

            {/* 2. How We Use Your Information */}
            <section id="why-we-collect" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-textPrimary font-medium leading-relaxed mb-4">
                We use data to:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Verify accounts",
                  "Operate the platform",
                  "Protect users and prevent abuse",
                  "Improve SchoolReview",
                  "Meet legal obligations",
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

            {/* 3. Anonymity */}
            <section id="anonymity" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                3. Anonymity
              </h2>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Your public identity is never displayed to other users",
                  "Your email address is only used for account verification, communication, and security",
                  "We never publish personal information without your permission",
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

            {/* 4. Data Protection */}
            <section id="data-protection" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                4. Data Protection
              </h2>
              <p className="text-textPrimary font-medium leading-relaxed">
                We use industry-standard security measures to protect your
                information against unauthorised access, disclosure, alteration,
                or loss. We do not sell personal information.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 5. Sharing Data */}
            <section id="sharing-data" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                5. Sharing Data
              </h2>
              <p className="text-textPrimary font-medium leading-relaxed mb-4">
                We only share data:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "If legally required",
                  "To protect users or the platform",
                  "With essential service providers (hosting, email, security)",
                  "Trusted cloud providers",
                  "Analytics providers (only if anonymised)",
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

            {/* 6. Your Privacy Rights */}
            <section id="your-rights" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                6. Your Privacy Rights
              </h2>
              <p className="text-textPrimary font-medium leading-relaxed mb-4">
                You can:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Access your personal information",
                  "Correct inaccurate information",
                  "Request deletion of your account",
                  "Request a copy of your data",
                  "Withdraw consent where applicable",
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
                Contact us to do this. You can also contact your local data
                protection authority if you have concerns.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 7. Cookies */}
            <section id="cookies" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                7. Cookies
              </h2>
              <p className="text-textPrimary font-medium leading-relaxed mb-4">
                We use basic cookies to run the platform.
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Keep you signed in",
                  "Remember preferences",
                  "Improve performance",
                  "Analyse website usage (where applicable)",
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

            {/* 8. Data Retention */}
            <section id="data-retention" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                8. Data Retention
              </h2>
              <p className="text-textPrimary font-medium leading-relaxed">
                We keep personal data only as long as needed to run the
                platform, meet legal obligations, and protect users. When data
                is no longer needed, it is deleted or anonymised.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 9. Where Data Is Stored */}
            <section id="where-data-stored" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                9. Where Data Is Stored
              </h2>
              <p className="text-textPrimary font-medium leading-relaxed">
                Data is stored using secure cloud services, mainly in
                Switzerland and/or the European Union, or in locations that meet
                strong data protection standards.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 10. Children and Minors */}
            <section id="children-minors" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                10. Children and Minors
              </h2>
              <p className="text-textPrimary font-medium leading-relaxed">
                SchoolReview is intended for users aged 13 and over. We take
                additional measures to protect the privacy of students and
                minors and design our platform to minimise identification and
                exposure.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 11. Contact */}
            <section id="contact" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                11. Contact
              </h2>
              <p className="text-textPrimary font-medium leading-relaxed">
                For privacy-related questions, please contact us through our
                Contact page.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 12. Changes */}
            <section id="changes" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                12. Changes
              </h2>
              <p className="text-textPrimary font-medium leading-relaxed">
                We may update this Privacy Policy from time to time. Any
                significant changes will be communicated through the platform or
                published on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
