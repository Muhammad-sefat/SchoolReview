import { Link } from "react-router-dom";
import AboutUsBannerImg from "../../../assets/images/aboutusbanner.png";

function AboutusBanner() {
  return (
    <section className="relative w-full bg-white py-12 lg:py-20 overflow-hidden font-urbanist select-none">
      <div className="section-padding-x w-full flex flex-col md:flex-row gap-12 lg:gap-10">
        {/* Left Column: Content */}
        <div className="w-full md:w-[50%] flex flex-col items-start z-10 pr-0 md:pr-8">
          {/* Top Badge */}
          <div className="inline-block px-3 py-1 bg-blue-50/80 border border-blue-100/50 rounded-full text-xs font-semibold text-primary mb-5 tracking-wider">
            Helping Schools Learn
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-textPrimary leading-snug tracking-tight">
            About Us
          </h1>

          {/* Subhead Tagline */}
          <p className="text-sm sm:text-base font-bold text-textPrimary mt-6 leading-relaxed">
            Every voice matters. Better schools start by listening.
          </p>

          {/* Paragraphs */}
          <p className="text-textSecondary mt-4 leading-relaxed">
            We believe students, parents, teachers and school leaders deserve a
            safe, trusted way to share experiences, recognise excellence, and
            drive meaningful improvement.
          </p>

          <p className="text-textSecondary mt-4 leading-relaxed">
            SchoolReview transforms everyday feedback into meaningful insights
            that support better decisions, stronger communities, and continuous
            improvement.
          </p>

          {/* Action Button */}
          <div className="mt-8">
            <Link
              to="/for-schools"
              className="inline-block px-7 py-3 bg-primary hover:bg-primary/95 text-white font-medium rounded-[10px] transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01]"
            >
              Discover Our Platform
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-[50%] relative h-auto z-10 flex items-center justify-center md:justify-end">
          <img
            src={AboutUsBannerImg}
            alt="About SchoolReview Team"
            className="w-full object-cover rounded-[32px] border border-gray-100 shadow-xs transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutusBanner;
