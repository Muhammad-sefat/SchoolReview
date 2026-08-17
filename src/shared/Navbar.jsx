import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  BookOpen,
  Layers,
  PhoneCall,
} from "lucide-react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [navbarMode, setNavbarMode] = useState("guest");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // JavaScript Hover Dropdown States
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  // Mobile accordion states
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  // Smooth hover managers with 150ms buffer to prevent flickering
  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navigationLinks = [
    [
      {
        label: "Schools",
        link: "/for-schools",
      },
      {
        label: "Parents",
        link: "/for-parents",
      },
    ],
    [
      {
        label: "Teachers",
        link: "/for-teachers",
      },
      {
        label: "Students",
        link: "/for-students",
      },
    ],
    [
      {
        label: "School Evaluators",
        link: "/for-school-evaluators",
      },
    ],
    [
      {
        label: "Teacher Observers",
        link: "/for-teacher-observers",
      },
    ],
  ];
  const solutionsMenu = [
    {
      title: "Communicate",
      links: [
        {
          label: "SpeakUp™",
          link: "#",
        },
        {
          label: "ThankTeacher™",
          link: "#",
        },
        {
          label: "CommunityConnect™",
          link: "#",
        },
      ],
    },
    {
      title: "Reviews & Feedback",
      links: [
        {
          label: "School Feedback",
          link: "#",
        },
        {
          label: "Teacher Feedback",
          link: "#",
        },
      ],
    },
    {
      title: "Improve",
      links: [
        {
          label: "360° School Insight™",
          link: "#",
        },
        {
          label: "ReflectED Teacher Development™",
          link: "#",
        },
        {
          label: "School Evaluation Suite™",
          link: "#",
        },
      ],
    },
    {
      title: "Discover",
      links: [
        {
          label: "Find a School",
          link: "#",
        },
      ],
    },
  ];

  // Track scroll position for header glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu on desktop window resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset menu configurations on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const platformPaths = [
    "/for-schools",
    "/for-teachers",
    "/for-parents",
    "/for-students",
    "/for-school-evaluators",
    "/for-teacher-observers",
  ];
  const isPlatformActive = platformPaths.includes(location.pathname);

  // Synchronize navbarMode with routing
  useEffect(() => {
    if (location.pathname === "/for-schools") {
      setNavbarMode("school");
    } else if (location.pathname === "/for-teachers") {
      setNavbarMode("teacher");
    } else if (location.pathname === "/") {
      setNavbarMode("guest");
    } else if (platformPaths.includes(location.pathname)) {
      if (navbarMode === "guest") {
        setNavbarMode("school");
      }
    }
  }, [location.pathname, navbarMode]);

  const handleLogoClick = () => {
    setNavbarMode("guest");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100/90"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="section-padding-x flex items-center justify-between h-[76px] relative">
        {/* Left */}
        <div className="flex items-center gap-8 lg:gap-16 h-full">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center shrink-0 z-10"
          >
            <img
              src={Logo}
              alt="SchoolReview Logo"
              className="h-7 sm:h-8 md:h-[34px] w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
            />
          </Link>
          {(navbarMode === "school" || navbarMode === "teacher") && (
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 h-full z-20">
              {/* Platform Nav Option */}
              <div
                className="h-full flex items-center py-2"
                onMouseEnter={() => handleMouseEnter("platform")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 transition-colors font-semibold text-sm cursor-pointer outline-none ${
                    activeDropdown === "platform" || isPlatformActive
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  <span>Platform</span>
                  {/* <ChevronDown
                    className={`w-4 h-4 stroke-[2] transition-transform duration-200 ${
                      activeDropdown === "platform"
                        ? "rotate-180 text-primary"
                        : "text-secondary"
                    }`}
                  /> */}
                </button>
              </div>

              {/* Solutions Nav Option */}
              <div
                className="h-full flex items-center py-2"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 transition-colors font-semibold text-sm cursor-pointer outline-none ${
                    activeDropdown === "solutions"
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  <span>Solutions</span>
                  {/* <ChevronDown
                    className={`w-4 h-4 stroke-[2] transition-transform duration-200 ${
                      activeDropdown === "solutions"
                        ? "rotate-180 text-primary"
                        : "text-secondary"
                    }`}
                  /> */}
                </button>
              </div>

              {/* About Us Nav Option */}
              <div
                className="h-full flex items-center py-2 relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 transition-colors font-semibold text-sm cursor-pointer outline-none ${
                    activeDropdown === "about"
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 stroke-[2] transition-transform duration-200 ${
                      activeDropdown === "about"
                        ? "rotate-180 text-primary"
                        : "text-secondary"
                    }`}
                  />
                </button>

                {/* Centered hover popover content with visual padding bridge */}
                {activeDropdown === "about" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] z-50 pointer-events-auto"
                    onMouseEnter={() => handleMouseEnter("about")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-4 grid grid-cols-1 gap-2.5">
                      <Link
                        to="/about/our-story"
                        className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                          <BookOpen className="w-[18px] h-[18px] stroke-[1.75]" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-textPrimary">
                            Our Story
                          </h4>
                          <p className="text-[10px] text-secondary mt-0.5 leading-relaxed">
                            Discover our journey, mission, and vision.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/about/how-it-works"
                        className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                          <Layers className="w-[18px] h-[18px] stroke-[1.75]" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-textPrimary">
                            How It Works
                          </h4>
                          <p className="text-[10px] text-secondary mt-0.5 leading-relaxed">
                            Learn how we gather and verify school feedback.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/about/contact"
                        className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                          <PhoneCall className="w-[18px] h-[18px] stroke-[1.75]" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-textPrimary">
                            Contact Us
                          </h4>
                          <p className="text-[10px] text-secondary mt-0.5 leading-relaxed">
                            Get in touch with our support & partnership team.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          )}
        </div>

        {/* Right: Desktop Navigation actions & controls */}
        <div className="hidden md:flex items-center gap-6 lg:gap-[26px] z-10 h-full">
          {navbarMode === "guest" ? (
            <>
              {/* About Us Hover Option (Guest Mode) */}
              <div
                className="relative py-2 h-full flex items-center"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 transition-colors font-semibold text-sm cursor-pointer outline-none ${
                    activeDropdown === "about"
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 stroke-[2] transition-transform duration-200 ${
                      activeDropdown === "about"
                        ? "rotate-180 text-primary"
                        : "text-secondary"
                    }`}
                  />
                </button>

                {activeDropdown === "about" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] pt-1.5 z-50 pointer-events-auto"
                    onMouseEnter={() => handleMouseEnter("about")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-4 grid grid-cols-1 gap-2.5">
                      <Link
                        to="/about/our-story"
                        className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                          <BookOpen className="w-[18px] h-[18px] stroke-[1.75]" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-textPrimary">
                            Our Story
                          </h4>
                          <p className="text-[10px] text-secondary mt-0.5 leading-relaxed">
                            Discover our journey, mission, and vision.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/about/how-it-works"
                        className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                          <Layers className="w-[18px] h-[18px] stroke-[1.75]" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-textPrimary">
                            How It Works
                          </h4>
                          <p className="text-[10px] text-secondary mt-0.5 leading-relaxed">
                            Learn how we gather and verify school feedback.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/about/contact"
                        className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                          <PhoneCall className="w-[18px] h-[18px] stroke-[1.75]" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-textPrimary">
                            Contact Us
                          </h4>
                          <p className="text-[10px] text-secondary mt-0.5 leading-relaxed">
                            Get in touch with our support & partnership team.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Log In */}
              <Link
                to="/auth/login"
                className="text-secondary hover:text-primary transition-colors font-semibold text-sm"
              >
                Log in
              </Link>

              <div className="flex items-center gap-2">
                {" "}
                {/* For Schools */}
                <Link
                  to="/for-schools"
                  className="bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-5 py-2 rounded-[8px] transition-all duration-200 cursor-pointer text-center outline-none flex items-center justify-center"
                >
                  For Schools
                </Link>
                {/* For Teachers */}
                <Link
                  to="/for-teachers"
                  className="bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-textPrimary font-semibold text-sm px-5 py-2 rounded-[8px] transition-all duration-200 cursor-pointer text-center flex items-center justify-center"
                >
                  For Teachers
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Log In (School Mode) */}
              <Link
                to="/auth/login"
                className="text-secondary hover:text-primary transition-colors font-semibold text-sm"
              >
                Log in
              </Link>

              {/* Request a School Demo Button */}
              <Link
                to="/demo"
                className="bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-5 py-2.5 rounded-[8px] transition-all duration-200 cursor-pointer text-center"
              >
                Request a School Demo
              </Link>
            </>
          )}

          {/* Globe Selector - Identical layout in both Guest and School Modes */}
          <div
            className="relative py-2 h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("lang")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`border p-2 rounded-full cursor-pointer transition-all outline-none flex items-center justify-center ${
                activeDropdown === "lang"
                  ? "border-primary text-primary bg-blue-50/50"
                  : "border-gray-200 text-secondary hover:text-primary hover:bg-gray-50"
              }`}
              title="Change Language"
            >
              <Globe className="w-4 h-4 stroke-[1.75]" />
            </button>

            {activeDropdown === "lang" && (
              <div
                className="absolute right-0 top-full w-36 pt-1.5 z-50 pointer-events-auto"
                onMouseEnter={() => handleMouseEnter("lang")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-1.5">
                  <button className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold text-textPrimary bg-gray-50">
                    English (US)
                  </button>
                  <button className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-secondary hover:text-primary hover:bg-gray-50 transition-colors">
                    Español
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu controllers */}
        <div className="md:hidden flex items-center gap-2">
          {/* Lang Selector on Mobile */}
          <div className="relative">
            <button
              onClick={() => setMobileLangOpen(!mobileLangOpen)}
              className="border border-gray-200 p-2 rounded-full text-secondary hover:text-textPrimary hover:bg-gray-50 cursor-pointer transition-all outline-none flex items-center justify-center"
            >
              <Globe className="w-4 h-4 stroke-[1.75]" />
            </button>
            {mobileLangOpen && (
              <div className="absolute right-0 top-[45px] w-32 bg-white border border-gray-100 rounded-xl shadow-lg p-1.5 z-50 animate-in fade-in-50 duration-150">
                <button className="w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-textPrimary bg-gray-50">
                  English (US)
                </button>
                <button className="w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-secondary hover:text-textPrimary hover:bg-gray-50 transition-colors">
                  Español
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-secondary hover:text-textPrimary hover:bg-gray-50 transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.75]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.75]" />
            )}
          </button>
        </div>
      </div>

      {/* Backdrop overlay (dark shadow + blur) when hovering Platform or Solutions */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[76px] bg-black/30 backdrop-blur-[2px] z-30 transition-all duration-200 pointer-events-none ${
          activeDropdown === "platform" || activeDropdown === "solutions"
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* RENDER MEGA MENUS ABSOLUTE TO THE HEADER FOR VIEWPORT WIDTH SUPPORT */}
      {/* 1. Platform Mega Menu */}
      {(navbarMode === "school" || navbarMode === "teacher") &&
        activeDropdown === "platform" && (
          <div
            onMouseEnter={() => handleMouseEnter("platform")}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 top-[75px] w-full z-40 bg-white border-b border-gray-100/90 shadow-lg py-8 pb-10 animate-in fade-in slide-in-from-top-1 duration-150 pointer-events-auto"
          >
            <div className="section-padding-x w-full">
              <p className="text-secondary mb-6 block">
                Who is this platform for?
              </p>
              <div className="grid grid-cols-4 gap-8">
                {navigationLinks.map((column, columnIndex) => (
                  <div key={columnIndex} className="flex flex-col gap-4">
                    {column.map((item) => (
                      <Link
                        key={item.label}
                        to={item.link}
                        className={`transition-colors ${
                          location.pathname === item.link
                            ? "text-primary"
                            : "text-textPrimary hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* 2. Solutions Mega Menu */}
      {(navbarMode === "school" || navbarMode === "teacher") &&
        activeDropdown === "solutions" && (
          <div
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 top-[75px] w-full z-40 bg-white border-b border-gray-100/90 shadow-lg py-8 pb-10 animate-in fade-in slide-in-from-top-1 duration-150 pointer-events-auto"
          >
            <div className="section-padding-x w-full">
              <div className="grid grid-cols-4 gap-8">
                {solutionsMenu.map((column) => (
                  <div key={column.title} className="flex flex-col gap-4">
                    <span className="text-secondary">{column.title}</span>

                    <div className="flex flex-col gap-3">
                      {column.links.map((item) => (
                        <Link
                          key={item.label}
                          to={item.link}
                          className="text-textPrimary hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100 bg-white"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="section-padding-x py-5 flex flex-col gap-4 overflow-y-auto max-h-[400px]">
          {navbarMode === "guest" ? (
            <>
              {/* Guest Mobile Menu */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-textPrimary hover:text-primary outline-none"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 flex flex-col gap-2 border-l border-gray-100 ml-2">
                    <Link
                      to="/about/our-story"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-1"
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/about/how-it-works"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-1"
                    >
                      How It Works
                    </Link>
                    <Link
                      to="/about/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-1"
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>

              <hr className="border-gray-100" />

              <Link
                to="/auth/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center font-semibold text-sm text-secondary hover:text-textPrimary py-1"
              >
                Log in
              </Link>

              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  to="/for-schools"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-5 py-2.5 rounded-[8px] text-center outline-none flex items-center justify-center"
                >
                  For Schools
                </Link>
                <Link
                  to="/for-teachers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-textPrimary font-semibold text-sm px-5 py-2 rounded-[8px] text-center flex items-center justify-center"
                >
                  For Teachers
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* School Mobile Menu */}
              <div className="flex flex-col gap-2">
                {/* Platform */}
                <button
                  onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                  className="flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-textPrimary hover:text-primary outline-none"
                >
                  <span>Platform</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobilePlatformOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobilePlatformOpen && (
                  <div className="pl-4 flex flex-col gap-2 border-l border-gray-100 ml-2">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mt-1">
                      For Who
                    </span>
                    <Link
                      to="/auth/signup/school-leader"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      Schools
                    </Link>
                    <Link
                      to="/auth/signup/teacher"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      Teachers
                    </Link>
                    <Link
                      to="/auth/signup/school-evaluator"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      School Evaluators
                    </Link>
                    <Link
                      to="/review/observer-to-teacher"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      Teacher Observers
                    </Link>
                    <Link
                      to="/school-review"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      Parents
                    </Link>
                    <Link
                      to="/school-review"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      Students
                    </Link>
                  </div>
                )}

                {/* Solutions */}
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-textPrimary hover:text-primary outline-none"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div className="pl-4 flex flex-col gap-2 border-l border-gray-100 ml-2">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mt-1">
                      Communicate
                    </span>
                    <Link
                      to="/speak-up"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      SpeakUp™
                    </Link>
                    <Link
                      to="/thank-teacher"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      ThankTeacher™
                    </Link>
                    <Link
                      to="/school-review"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      CommunityConnect™
                    </Link>

                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mt-1">
                      Reviews & Feedback
                    </span>
                    <Link
                      to="/school-review"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      School Feedback
                    </Link>
                    <Link
                      to="/review/student-to-teacher"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      Teacher Feedback
                    </Link>

                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mt-1">
                      Improve
                    </span>
                    <Link
                      to="/leader-dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      360° School Insight™
                    </Link>
                    <Link
                      to="/review/teacher-self"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      ReflectED Teacher Development™
                    </Link>
                    <Link
                      to="/evaluator"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      School Evaluation Suite™
                    </Link>

                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mt-1">
                      Discover
                    </span>
                    <Link
                      to="/school-review"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-0.5"
                    >
                      Find a School
                    </Link>
                  </div>
                )}

                {/* About Us */}
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-textPrimary hover:text-primary outline-none"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 flex flex-col gap-2 border-l border-gray-100 ml-2">
                    <Link
                      to="/about/our-story"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-1"
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/about/how-it-works"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-1"
                    >
                      How It Works
                    </Link>
                    <Link
                      to="/about/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-secondary py-1"
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>

              <hr className="border-gray-100" />

              <Link
                to="/auth/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center font-semibold text-sm text-secondary hover:text-textPrimary py-1"
              >
                Log in
              </Link>

              <div className="flex flex-col gap-2">
                <Link
                  to="/demo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-5 py-2.5 rounded-[8px] text-center"
                >
                  Request a School Demo
                </Link>
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-textPrimary font-semibold text-sm px-5 py-2.5 rounded-[8px] text-center outline-none flex items-center justify-center"
                >
                  Go to Main Site
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
