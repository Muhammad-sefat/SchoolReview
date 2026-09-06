const PlatformEveryVoice = () => {
  return (
    <section className="w-full bg-[#038AF9] overflow-hidden select-none font-urbanist">
      <div className="section-padding-x py-16 lg:py-20 text-white w-full gap-10 lg:gap-14">
        {/* Top Header Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight tracking-tight">
            A Platform Built for Every Voice
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mt-2.5 font-medium leading-relaxed">
            Connecting students, parents, teachers and school leaders across
            Switzerland.
          </p>
        </div>

        {/* Bottom 4-Column Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 w-full mt-8">
          {/* Column 1 */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              100% Anonymous
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium">
              Share feedback without revealing your identity. Securely hosted in
              Switzerland.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start w-full md:border-l md:border-white/40 md:pl-6 lg:pl-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              Speak Up Safely
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium">
              Report bullying, wellbeing and safeguarding concerns safely.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start w-full md:border-l lg:border-white/40 lg:pl-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              Every Voice Matters
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium">
              Students, parents and teachers help schools improve.
            </p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-start w-full md:border-l md:border-white/40 md:pl-6 lg:pl-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              AI-Assisted Quality Checks
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium">
              Helping keep feedback respectful, relevant and constructive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformEveryVoice;
