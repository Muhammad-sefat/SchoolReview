import { ArrowRight, Check, MapPin } from "lucide-react";

function AboutusBelieve() {
  const values = [
    "Every Voice Matters",
    "Transparency Builds Trust",
    "Feedback Should Lead to Action",
    "Safety Comes First",
  ];

  const impacts = [
    "Students feel safe to speak up.",
    "Parents make more informed decisions.",
    "Teachers feel recognised, valued, and supported.",
    "School communities grow stronger together.",
  ];

  return (
    <div className="w-full bg-white select-none font-urbanist pb-16 sm:pb-24">
      {/* 1. What We Believe Section */}
      <div className="w-full py-12 lg:py-16">
        <div className="section-padding-x">
          <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-8">
            What We Believe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Our Values Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-6">
              <div className="flex items-center gap-2.5 text-primary text-base sm:text-lg font-bold">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                <span className="text-textPrimary">Our values</span>
              </div>
              <ul className="flex flex-col gap-4">
                {values.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm sm:text-base text-textSecondary font-medium"
                  >
                    <div className="w-5 h-5 bg-blue-50/80 border border-blue-100/50 flex items-center justify-center rounded-full text-primary shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Impact We Want to Create Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-6">
              <div className="flex items-center gap-2.5 text-primary text-base sm:text-lg font-bold">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                <span className="text-textPrimary">
                  The impact we want to create
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {impacts.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm sm:text-base text-textSecondary font-medium"
                  >
                    <div className="w-5 h-5 bg-blue-50/80 border border-blue-100/50 flex items-center justify-center rounded-full text-primary shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Where We're Starting Section (Blue Banner with Map SVG) */}
      <div className="section-padding-x w-full">
        <div className="w-full bg-primary rounded-3xl p-8 sm:p-10 lg:p-12 text-white flex flex-col md:flex-row justify-between items-center relative overflow-hidden shadow-xs hover:shadow-md transition-shadow">
          {/* Content Block */}
          <div className="w-full md:w-[60%] flex flex-col items-start z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Where We're Starting
            </h2>
            <p className="text-blue-50/90 leading-relaxed mt-4 max-w-[650px]">
              We are launching in Switzerland, beginning with secondary schools
              across both the public and private sectors. From there, we'll
              expand thoughtfully—always putting trust, privacy, and meaningful
              improvement first.
            </p>
            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs font-medium text-white/95">
              <MapPin className="w-4 h-4 text-white shrink-0 stroke-2" />
              <span>Switzerland</span>
            </div>
          </div>

          {/* Dotted Map of Switzerland SVG Block */}
          <div className="w-full md:w-[60%] flex justify-center md:justify-end items-center z-10 mt-8 md:mt-0">
            <svg
              viewBox="0 0 400 200"
              className="w-full max-w-[540px] h-auto opacity-95 transition-transform duration-500 hover:scale-[1.02]"
            >
              <defs>
                <pattern
                  id="dot-pattern"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="5" cy="5" r="1.5" fill="#ffffff" opacity="0.35" />
                </pattern>
              </defs>
              <path
                d="M 30 110 L 90 55 L 150 45 L 190 25 L 230 20 L 260 35 L 290 25 L 320 45 L 360 75 L 380 95 L 395 115 L 360 145 L 385 165 L 365 190 L 320 185 L 290 195 L 280 175 L 270 190 L 255 180 L 220 175 L 160 170 L 130 185 L 105 175 L 70 165 L 35 140 Z"
                fill="url(#dot-pattern)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusBelieve;
