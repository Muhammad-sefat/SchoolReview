import { useState, useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";
import { CircleCheck, AlertCircle, AlertTriangle, Circle } from "lucide-react";

function CommunityGuidelines() {
  const [activeSection, setActiveSection] = useState("honest-respectful");

  const sections = [
    { id: "honest-respectful", label: "1. Be Honest & Respectful" },
    { id: "protect-privacy", label: "2. Protect Privacy" },
    { id: "use-anonymity", label: "3. Use Anonymity Responsibly" },
    { id: "keep-feedback", label: "4. Keep Feedback Constructive" },
    { id: "harmful-content", label: "5. Harmful Content" },
    { id: "reporting-content", label: "6. Reporting Content" },
    { id: "moderation", label: "7. Moderation" },
    { id: "speakup-reports", label: "8. SpeakUp Reports" },
    { id: "breaches", label: "9. Breaches" },
    { id: "our-promise", label: "10. Our Promise" },
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
            Community Guidelines
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-textSecondary mt-4 font-medium max-w-[600px]">
            Together, we can build a respectful, safe, and constructive school
            community. These guidelines help ensure every voice is heard fairly
            and responsibly.
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
            {/* 1. Be Honest & Respectful */}
            <section id="honest-respectful" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                1. Be Honest & Respectful
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                Share real experiences, not rumours or assumptions. Focus on
                behaviours and situations—not personal attacks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-5">
                <ul className="flex flex-col gap-3 pl-1">
                  {[
                    "Describe what happened",
                    "Explain how it affected you or your child",
                    "Suggest what could be better",
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
                <ul className="flex flex-col gap-3 pl-1">
                  {[
                    "Insult, threaten, or harass anyone",
                    "Use harmful, abusive, or discriminatory language",
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
              </div>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 2. Protect Privacy */}
            <section id="protect-privacy" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                2. Protect Privacy
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                Never share:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Full names of teachers, students, or private individuals",
                  "Personal contact details",
                  "Medical, legal, or highly sensitive personal information",
                  "Sexual orientation or other deeply personal details",
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
                Discuss schools and professional roles, but always protect the
                privacy of individuals.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 3. Use Anonymity Responsibly */}
            <section id="use-anonymity" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                3. Use Anonymity Responsibly
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                Anonymity exists to keep people safe — not to harm others.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-5">
                <ul className="flex flex-col gap-3 pl-1">
                  {[
                    "Use anonymity to speak honestly",
                    "Share difficult experiences safely",
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
                <ul className="flex flex-col gap-3 pl-1">
                  {[
                    "Lie or exaggerate to damage someone",
                    "Organise attacks against a school or person",
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
              </div>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 4. Keep Feedback Constructive */}
            <section id="keep-feedback" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                4. Keep Feedback Constructive
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                Feedback should help improve schools—not tear people down.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-5">
                <ul className="flex flex-col gap-3 pl-1">
                  {[
                    "Is specific",
                    "Is fair",
                    "Explains both strengths and problems",
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
                <ul className="flex flex-col gap-3 pl-1">
                  {[
                    "Is vague or purely emotional",
                    "Attacks people instead of actions",
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
              </div>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 5. Harmful Content */}
            <section id="harmful-content" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                5. Harmful Content
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                We do not allow:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Hate speech or discrimination",
                  "Threats or violence",
                  "Sexual content involving minors",
                  "Encouraging self-harm or harm to others",
                  "Bullying or harassment",
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
                Content that breaks these rules will be removed.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 6. Reporting Content */}
            <section id="reporting-content" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                6. Reporting Content
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed">
                Every post includes a <strong>Report</strong> option. If
                something feels unsafe, unfair, or against these rules, you can
                flag it for review.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 7. Moderation */}
            <section id="moderation" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                7. Moderation
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                We use automated systems and moderation rules to review content.
                Content may be:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Hidden",
                  "Edited",
                  "Removed",
                  "Escalated for further review",
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
                Repeated rule-breaking may lead to restrictions or removal.
              </p>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 8. SpeakUp Reports */}
            <section id="speakup-reports" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                8. SpeakUp Reports
              </h2>

              {/* Emergency Notice Box */}
              <div className="bg-[#FE9A00]/10 border border-[#FE9A00]/50 rounded-xl p-4 mb-6 flex gap-3 text-left">
                <AlertTriangle className="w-5 h-5 text-[#FE9A00] shrink-0 stroke-[2]" />
                <div>
                  <span className="font-bold text-[#FE9A00] text-xs block uppercase tracking-wider mb-1">
                    Emergency Notice
                  </span>
                  <span className="text-sm font-medium leading-normal">
                    SpeakUp is not for emergencies or crime. If there is
                    immediate danger, contact your local emergency services or
                    the police.
                  </span>
                </div>
              </div>

              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                SpeakUp is for serious school-related concerns like:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {["Bullying", "Harassment", "Safety issues"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-textPrimary"
                    >
                      <Circle className="w-3.5 h-3.5 text-gray-300 stroke-[2] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </section>

            <hr className="border-gray-100 my-10" />

            {/* 9. Breaches */}
            <section id="breaches" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                9. Breaches
              </h2>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "If content breaks these guidelines, we may remove it without notice.",
                  "In serious or repeated cases, access to the platform may be limited or removed.",
                  "Our goal is not to silence honest feedback but to keep SchoolReview safe, fair, and useful for everyone.",
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

            {/* 10. Our Promise */}
            <section id="our-promise" className="scroll-mt-28 text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight mb-4">
                10. Our Promise
              </h2>
              <p className="text-textSecondary font-medium leading-relaxed mb-4">
                We want SchoolReview to be:
              </p>
              <ul className="flex flex-col gap-3 my-5 pl-1">
                {[
                  "Safe for students",
                  "Fair to teachers",
                  "Helpful for parents",
                  "Useful for schools",
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
              <p className="text-textPrimary font-medium leading-relaxed mt-6">
                If everyone follows these guidelines, the platform can create
                real change – without fear, without harm, and without silence.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityGuidelines;
