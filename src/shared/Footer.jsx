import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

// X (formerly Twitter) brand icon SVG
const XIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white border-t border-gray-100 overflow-hidden font-urbanist select-none">
      {/* Absolute background wave graphic (visible on desktop) */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[45%] lg:w-[35%] pointer-events-none overflow-hidden hidden md:block z-0">
        <svg
          viewBox="0 0 300 400"
          preserveAspectRatio="none"
          className="absolute right-0 top-0 h-full w-full"
        >
          <path
            d="M 300,50 C 160,200 150,350 50,400 L 300,400 Z"
            fill="#038AF9"
          />
        </svg>
      </div>

      {/* Main Links Container */}
      <div className="section-padding-x pt-16 pb-16 z-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 w-full">
          {/* Column 1: Platform */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-textPrimary tracking-wide">
              Platform
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Tell a Teacher", path: "/tell-a-teacher" },
                { label: "SpeakUp - Report a Concern", path: "/speak-up" },
                { label: "Review Schools", path: "/school-review" },
                {
                  label: "Review Teachers",
                  path: "/review/student-to-teacher",
                },
                {
                  label: "School 360° Insights & Reporting",
                  path: "/leader-dashboard",
                },
                {
                  label: "Teacher Observations – Performance Coaching",
                  path: "/review/observer-to-teacher",
                },
                { label: "School Evaluation Suite", path: "/evaluator" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Who It's For */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-textPrimary tracking-wide">
              Who It's For
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Schools", path: "/auth/signup/school-leader" },
                { label: "Teachers", path: "/auth/signup/teacher" },
                { label: "Students", path: "/school-review" },
                { label: "Parents", path: "/school-review" },
                {
                  label: "School Evaluators",
                  path: "/auth/signup/school-evaluator",
                },
                {
                  label: "Teacher Observers",
                  path: "/review/observer-to-teacher",
                },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore & Company */}
          <div className="flex flex-col">
            {/* Explore Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-textPrimary tracking-wide">
                Explore
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Find a School", path: "/school-review" },
                  { label: "Pricing", path: "/pricing" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Section */}
            <div className="flex flex-col gap-4 mt-10">
              <h3 className="text-base font-semibold text-textPrimary tracking-wide">
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "About Us", path: "/about/our-story" },
                  { label: "Contact Us", path: "/about/contact" },
                  {
                    label: "Community Guidelines",
                    path: "/community-guidelines",
                  },
                  { label: "Terms & Conditions", path: "/terms-conditions" },
                  { label: "Privacy Policy", path: "/privacy-policy" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Get Help & Account */}
          <div className="flex flex-col">
            {/* Get Help Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-textPrimary tracking-wide">
                Get help
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Book a 1:1 Consultation", path: "/consultation" },
                  { label: "Support", path: "/faq" },
                  { label: "Request a Demo", path: "/request-demo" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Account Section */}
            <div className="flex flex-col gap-4 mt-10">
              <h3 className="text-base font-semibold text-textPrimary tracking-wide">
                Account
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Log in", path: "/auth/login" },
                  { label: "Request a Demo", path: "/request-demo" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Divider Line */}
      <div className="w-full h-px bg-gray-200/50 relative z-10" />

      {/* Bottom Bar Container */}
      <div className="section-padding-x py-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left copyright info */}
          <p className="text-sm font-medium text-secondary text-center md:text-left">
            © {new Date().getFullYear()} www.SchoolReview.ch All rights
            reserved.
          </p>

          {/* Right brand social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-200 hover:scale-110 text-[#5a5a5a] md:text-white hover:bg-gray-100 md:hover:bg-white/10"
              title="Facebook"
            >
              <Facebook className="w-4 h-4 stroke-[1.75]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-200 hover:scale-110 text-[#5a5a5a] md:text-white hover:bg-gray-100 md:hover:bg-white/10"
              title="X"
            >
              <XIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-200 hover:scale-110 text-[#5a5a5a] md:text-white hover:bg-gray-100 md:hover:bg-white/10"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 stroke-[1.75]" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-200 hover:scale-110 text-[#5a5a5a] md:text-white hover:bg-gray-100 md:hover:bg-white/10"
              title="YouTube"
            >
              <Youtube className="w-5 h-5 stroke-[1.75]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-200 hover:scale-110 text-[#5a5a5a] md:text-white hover:bg-gray-100 md:hover:bg-white/10"
              title="Instagram"
            >
              <Instagram className="w-4 h-4 stroke-[1.75]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
