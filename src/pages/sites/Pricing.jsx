import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import { HelpCircle, Check, Info } from "lucide-react";
import planImg from "../../assets/images/plan.png";
import plan1Img from "../../assets/images/plan1.png";

function Pricing() {
  const [activeTab, setActiveTab] = useState("school-leader");

  const tabs = [
    { id: "school-leader", label: "School Leader" },
    { id: "school-evaluator", label: "School Evaluator" },
    { id: "pioneer-teacher", label: "Pioneer Teacher" },
  ];

  return (
    <div className="w-full bg-white font-urbanist select-none">
      <ScrollRestoration />

      {/* Top Banner */}
      <div className="w-full bg-[#f0f7ff] border-b border-blue-100/50 py-16 sm:py-20 text-left">
        <div className="section-padding-x">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-textPrimary leading-[1.15] tracking-tight">
            Simple Pricing. Powerful School Improvement.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-textSecondary mt-4 font-medium max-w-[600px]">
            Choose the plan that's right for your school.
          </p>
        </div>
      </div>

      {/* Main content wrapper */}
      <div className="section-padding-x py-16 lg:py-20 text-left">
        {/* Tab switcher */}
        <div className="flex gap-8 border-b border-gray-100 pb-px mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-semibold transition-all relative cursor-pointer outline-none ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Tab 1: School Leader */}
        {activeTab === "school-leader" && (
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
                Choose Your School Plan
              </h2>
              <p className="text-sm sm:text-base text-textSecondary font-medium mt-2">
                Unlock tools that improve safety, insight, and school excellence.
              </p>
            </div>

            {/* School Leader Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              
              {/* Core Card */}
              <div className="bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 hover:shadow-xs transition-all duration-200 text-left flex flex-col h-full min-h-[500px]">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight">
                    Core
                  </h3>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span>Safety</span>
                  </div>
                </div>
                <p className="text-sm text-textSecondary font-medium mb-6">
                  Essential features
                </p>

                <div className="flex flex-col gap-3.5 mb-8">
                  <button className="bg-primary hover:bg-primary/95 text-white w-full h-11 rounded-lg font-semibold text-sm transition-colors cursor-pointer">
                    Start Your Free Trial
                  </button>
                  <span className="text-center text-xs font-semibold text-secondary">or</span>
                  <button className="bg-gray-50 border border-gray-100 hover:bg-gray-100 text-textPrimary w-full h-11 rounded-lg font-semibold text-sm transition-colors cursor-pointer">
                    Request a Quote
                  </button>
                </div>

                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex items-center justify-between gap-2 py-2 border-t border-gray-50">
                    <span className="text-sm font-semibold text-textPrimary">SpeakUp Safety Reporting</span>
                    <HelpCircle className="w-4 h-4 text-secondary/60 shrink-0 stroke-[2]" />
                  </div>
                </div>
              </div>

              {/* Pro Card */}
              <div className="bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 hover:shadow-xs transition-all duration-200 text-left flex flex-col h-full min-h-[500px]">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight">
                    Pro
                  </h3>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Insight</span>
                  </div>
                </div>
                <p className="text-sm text-textSecondary font-medium mb-6">
                  Advanced insights
                </p>

                <div className="flex flex-col gap-3.5 mb-8">
                  <button className="bg-primary hover:bg-primary/95 text-white w-full h-11 rounded-lg font-semibold text-sm transition-colors cursor-pointer">
                    Book a Demo
                  </button>
                  <span className="text-center text-xs font-semibold text-secondary">or</span>
                  <button className="bg-gray-50 border border-gray-100 hover:bg-gray-100 text-textPrimary w-full h-11 rounded-lg font-semibold text-sm transition-colors cursor-pointer">
                    Request a Quote
                  </button>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-1 block">Everything in Core, plus:</span>
                  {[
                    "360° School Insights",
                    "ReflectED Teacher Development",
                    "ThankTeacher Recognition",
                    "Access to the School Evaluation Suite",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-2 py-2 border-t border-gray-50">
                      <span className="text-sm font-semibold text-textPrimary">{item}</span>
                      <HelpCircle className="w-4 h-4 text-secondary/60 shrink-0 stroke-[2]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Card */}
              <div className="bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 hover:shadow-xs transition-all duration-200 text-left flex flex-col h-full min-h-[500px]">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight">
                    Premium
                  </h3>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-orange-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span>Excellence</span>
                  </div>
                </div>
                <p className="text-sm text-textSecondary font-medium mb-6">
                  Complete solution
                </p>

                <div className="flex flex-col gap-3.5 mb-8">
                  <button className="bg-primary hover:bg-primary/95 text-white w-full h-11 rounded-lg font-semibold text-sm transition-colors cursor-pointer">
                    Book a Demo
                  </button>
                  <span className="text-center text-xs font-semibold text-secondary">or</span>
                  <button className="bg-gray-50 border border-gray-100 hover:bg-gray-100 text-textPrimary w-full h-11 rounded-lg font-semibold text-sm transition-colors cursor-pointer">
                    Request a Quote
                  </button>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-1 block">Everything in Pro, plus:</span>
                  {[
                    "Community Connect",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-2 py-2 border-t border-gray-50">
                      <span className="text-sm font-semibold text-textPrimary">{item}</span>
                      <HelpCircle className="w-4 h-4 text-secondary/60 shrink-0 stroke-[2]" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: School Evaluator */}
        {activeTab === "school-evaluator" && (
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
                School Evaluation Suite
              </h2>
              <p className="text-sm sm:text-base text-textSecondary font-medium mt-2">
                Compare schools, benchmark performance, and identify improvement opportunities.
              </p>
            </div>

            {/* School Evaluator Pro Card */}
            <div className="max-w-md w-full bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 hover:shadow-xs transition-all duration-200 text-left flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight">
                  Pro
                </h3>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Insight</span>
                </div>
              </div>
              <p className="text-sm text-textSecondary font-medium mb-6">
                Inspectors & evaluators
              </p>

              <div className="flex flex-col gap-3.5 mb-8">
                <button className="bg-primary hover:bg-primary/95 text-white w-full h-11 rounded-lg font-semibold text-sm transition-colors cursor-pointer">
                  Book a Demo
                </button>
                <span className="text-center text-xs font-semibold text-secondary">or</span>
                <button className="bg-gray-50 border border-gray-100 hover:bg-gray-100 text-textPrimary w-full h-11 rounded-lg font-semibold text-sm transition-colors cursor-pointer">
                  Contact Sales
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  "Compare Multiple Schools",
                  "Benchmark Performance",
                  "Evaluate Teacher Performance",
                  "Improvement Priorities",
                  "Progress Tracking",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-2 py-2 border-t border-gray-50">
                    <span className="text-sm font-semibold text-textPrimary">{item}</span>
                    <HelpCircle className="w-4 h-4 text-secondary/60 shrink-0 stroke-[2]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Pioneer Teacher */}
        {activeTab === "pioneer-teacher" && (
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
                Enable Better Teaching
              </h2>
              <p className="text-sm sm:text-base text-textSecondary font-medium mt-2">
                Grow with structured feedback, AI insights, and professional teaching tools.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              
              {/* Teacher Plan Card */}
              <div className="w-full lg:w-[45%] bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 hover:shadow-xs transition-all duration-200 text-left flex flex-col">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight">
                    Pioneer Teacher
                  </h3>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Pro</span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">Free for 12 months</span>
                  <span className="text-sm text-textSecondary font-semibold block mt-1">Then CHF 15/month</span>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <div className="flex items-center gap-2 text-xs font-semibold text-textSecondary">
                    <Check className="w-4 h-4 text-primary stroke-[2.5]" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-textSecondary">
                    <Check className="w-4 h-4 text-primary stroke-[2.5]" />
                    <span>Cancel anytime</span>
                  </div>
                </div>

                <button className="bg-primary hover:bg-primary/95 text-white w-full h-11 rounded-lg font-semibold text-sm mb-8 transition-colors cursor-pointer">
                  Start Free
                </button>

                <div className="flex flex-col gap-3">
                  {[
                    "Anonymous Student Feedback",
                    "AI Teaching Insights",
                    "Performance Dashboard",
                    "Professional Reports",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-2 py-2 border-t border-gray-50">
                      <span className="text-sm font-semibold text-textPrimary">{item}</span>
                      <HelpCircle className="w-4 h-4 text-secondary/60 shrink-0 stroke-[2]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Teacher Plan Images side-by-side */}
              <div className="w-full lg:w-[55%] flex gap-4">
                <div className="w-1/2">
                  <img
                    src={planImg}
                    alt="Enable Better Teaching - SchoolReview Plan 1"
                    className="w-full h-auto rounded-[20px] object-cover border border-gray-100 shadow-xs"
                  />
                </div>
                <div className="w-1/2">
                  <img
                    src={plan1Img}
                    alt="Enable Better Teaching - SchoolReview Plan 2"
                    className="w-full h-auto rounded-[20px] object-cover border border-gray-100 shadow-xs"
                  />
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Comparison Table Section */}
        <hr className="border-gray-100 my-16 lg:my-20" />

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
              One Platform. Six Integrated Solutions.
            </h2>
            <p className="text-sm sm:text-base text-textSecondary font-medium mt-2">
              Integrated tools that help schools listen, improve, and grow.
            </p>
          </div>

          {/* Table Container for Horizontal Scrolling on Mobile */}
          <div className="w-full overflow-x-auto border border-gray-100 rounded-[20px] shadow-2xs">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm font-semibold text-textPrimary">
              <thead>
                <tr className="border-b border-gray-100 bg-white">
                  <th className="py-5 px-6 border-r border-gray-100 text-base">
                    <span>Speak</span>
                    <span className="text-primary">Up</span>
                  </th>
                  <th className="py-5 px-6 border-r border-gray-100 text-base font-semibold text-textPrimary">
                    360° School Insight
                  </th>
                  <th className="py-5 px-6 border-r border-gray-100 text-base">
                    <span>Reflect</span>
                    <span className="text-primary">ED</span>
                  </th>
                  <th className="py-5 px-6 border-r border-gray-100 text-base">
                    <span>School </span>
                    <span className="text-blue-500">Evaluation Suite</span>
                  </th>
                  <th className="py-5 px-6 border-r border-gray-100 text-base">
                    <span className="text-blue-500">Community</span>
                    <span>Connect</span>
                  </th>
                  <th className="py-5 px-6 text-base">
                    <span className="text-blue-400">Thank</span>
                    <span>Teacher</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 (Light Blue Background) */}
                <tr className="bg-[#e6f2ff]/30 border-b border-gray-100">
                  <td className="py-4 px-6 border-r border-gray-100/70 font-semibold text-textPrimary">Student Voice & Safety</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 font-semibold text-textPrimary">School Performance</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 font-semibold text-textPrimary">Better Teaching</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 font-semibold text-textPrimary">School Improvement</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 font-semibold text-textPrimary">Community Engagement</td>
                  <td className="py-4 px-6 font-semibold text-textPrimary">Teacher Recognition</td>
                </tr>
                {/* Row 2 */}
                <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Anonymous Reporting</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">360° Dashboard</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Teacher Observations</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Compare Schools</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Showcase your school</td>
                  <td className="py-4 px-6 text-textSecondary font-medium">Teacher Recognition</td>
                </tr>
                {/* Row 3 */}
                <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Case Management</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Performance Trends</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">360° Feedback</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Benchmarking</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Review Management</td>
                  <td className="py-4 px-6 text-textSecondary font-medium">Anonymous Feedback</td>
                </tr>
                {/* Row 4 */}
                <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Secure 2-way messaging</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Stakeholder Feedback</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">AI Teaching Insights</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">AI Summaries</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Community Insights</td>
                  <td className="py-4 px-6 text-textSecondary font-medium">AI Feedback Guidance</td>
                </tr>
                {/* Row 5 */}
                <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Evidence Management</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">School Insights</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Growth Tracking</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Improvement Tracking</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Community Analytics</td>
                  <td className="py-4 px-6 text-textSecondary font-medium">AI Teaching Insights</td>
                </tr>
                {/* Row 6 */}
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">AI Moderation</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Automated Reports</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">One-click Reports</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">Evaluation Reports</td>
                  <td className="py-4 px-6 border-r border-gray-100/70 text-textSecondary font-medium">School Jobs</td>
                  <td className="py-4 px-6 text-textSecondary font-medium">Privacy Controls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
