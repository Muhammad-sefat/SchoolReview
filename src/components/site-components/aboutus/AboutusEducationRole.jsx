import React, { useState } from "react";
import {
  LayoutDashboard,
  Target,
  Handshake,
  Clock,
  TrendingUp,
  ClipboardList,
  CheckCircle2,
  FileText,
  Lock,
  Sparkles,
  Heart,
  Activity,
  MessageSquare,
  Network,
  Shield,
  Users,
  Eye,
  BookOpen,
  Layers,
  Award,
  ClipboardCheck,
  Compass,
  MessageCircle,
} from "lucide-react";

function AboutusEducationRole() {
  const [activeTab, setActiveTab] = useState("school-leader");

  const roles = [
    { id: "school-leader", name: "School Leader" },
    { id: "school-evaluator", name: "School Evaluator" },
    { id: "student", name: "Student" },
    { id: "parents", name: "Parents" },
    { id: "teacher", name: "Teacher" },
    { id: "teacher-observer", name: "Teacher Observer" },
  ];

  const roleContent = {
    "school-leader": [
      {
        icon: LayoutDashboard,
        title: "View 360° School Insights",
        desc: "See every voice in one place with powerful school-wide reporting.",
      },
      {
        icon: Target,
        title: "Identify Priorities",
        desc: "Spot strengths, gaps, and opportunities for improvement.",
      },
      {
        icon: Handshake,
        title: "Respond & Engage",
        desc: "Respond to feedback and strengthen trust across your school community.",
      },
      {
        icon: Clock,
        title: "Continuous Improvement",
        desc: "Track progress over time with evidence-based insights.",
      },
    ],
    "school-evaluator": [
      {
        icon: TrendingUp,
        title: "External Benchmarks",
        desc: "Compare school performance against national and regional standards.",
      },
      {
        icon: ClipboardList,
        title: "Framework Alignment",
        desc: "Map school feedback against official evaluation frameworks.",
      },
      {
        icon: CheckCircle2,
        title: "Verify Progress",
        desc: "Assess long-term improvement trends using historical data.",
      },
      {
        icon: FileText,
        title: "Structural Reports",
        desc: "Generate detailed evaluation reports for governing bodies.",
      },
    ],
    student: [
      {
        icon: Lock,
        title: "Safe & Anonymous",
        desc: "Share honest feedback about your classes and school environment.",
      },
      {
        icon: Sparkles,
        title: "Make a Difference",
        desc: "Help shape your school's culture and learning experiences.",
      },
      {
        icon: Heart,
        title: "Express Gratitude",
        desc: "Send private ThankTeacher cards to recognize great teaching.",
      },
      {
        icon: Activity,
        title: "Track Report Status",
        desc: "Monitor the progress of concerns raised via SpeakUp.",
      },
    ],
    parents: [
      {
        icon: MessageSquare,
        title: "Share Experiences",
        desc: "Provide constructive feedback on safety, communication, and learning.",
      },
      {
        icon: Network,
        title: "Stay Connected",
        desc: "Strengthen the partnership between home and school.",
      },
      {
        icon: Shield,
        title: "Support Wellbeing",
        desc: "Contribute to a safe, positive school climate for your children.",
      },
      {
        icon: Users,
        title: "Access Community Insights",
        desc: "See aggregate school feedback trends and action plans.",
      },
    ],
    teacher: [
      {
        icon: Eye,
        title: "Private Insights",
        desc: "Receive direct feedback from students to guide your teaching.",
      },
      {
        icon: BookOpen,
        title: "Professional Growth",
        desc: "Use evidence-based insights to support your development.",
      },
      {
        icon: Layers,
        title: "Peer Collaboration",
        desc: "Engage in constructive peer observations and feedback.",
      },
      {
        icon: Award,
        title: "Celebrate Success",
        desc: "Receive recognition and thank-you cards from your community.",
      },
    ],
    "teacher-observer": [
      {
        icon: ClipboardCheck,
        title: "Structured Observations",
        desc: "Conduct formal or informal teaching observations efficiently.",
      },
      {
        icon: Compass,
        title: "Provide Guidance",
        desc: "Deliver actionable, context-aware feedback to teachers.",
      },
      {
        icon: TrendingUp,
        title: "Monitor Development",
        desc: "Track teacher growth and support plan implementation over time.",
      },
      {
        icon: MessageCircle,
        title: "Collaborative Dialogue",
        desc: "Facilitate meaningful post-observation reflection sessions.",
      },
    ],
  };

  const currentCards = roleContent[activeTab] || [];

  return (
    <section className="w-full bg-primary py-16 lg:py-24 text-white font-urbanist select-none">
      <div className="section-padding-x w-full">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          Built for Every Role in Education
        </h2>

        {/* Tab Headers */}
        <div className="border-b border-white/20 w-full mb-10 overflow-x-auto flex scrollbar-none">
          <div className="flex gap-6 sm:gap-8 pb-3 min-w-max">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveTab(role.id)}
                className={`text-xs sm:text-sm font-semibold transition-colors cursor-pointer relative pb-3 outline-none ${
                  activeTab === role.id
                    ? "text-white font-bold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {role.name}
                {activeTab === role.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white rounded-full animate-in fade-in zoom-in duration-200" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {currentCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white text-textPrimary rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[200px]"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-primary flex items-center justify-center shrink-0 mb-6">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-sm sm:text-base font-bold text-textPrimary leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-textSecondary mt-2.5 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutusEducationRole;
