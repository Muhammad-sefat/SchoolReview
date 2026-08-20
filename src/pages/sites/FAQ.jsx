import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

// Custom Accordion Item Component for smooth animation
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white border border-gray-100 rounded-[16px] p-5 sm:p-6 hover:shadow-xs transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 text-left cursor-pointer outline-none group"
      >
        <span className="text-base sm:text-lg font-semibold text-textPrimary leading-snug group-hover:text-primary transition-colors">
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all shrink-0 ${isOpen ? "bg-blue-50/50 border-primary/20 text-primary" : "bg-white text-secondary hover:bg-gray-50"}`}
        >
          <ChevronDown
            className={`w-4 h-4 stroke-[2.25] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-textSecondary font-medium leading-relaxed mt-4 pt-4 border-t border-gray-50/80">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      category: "Privacy",
      questions: [
        {
          id: "cancel-plan",
          question: "Can I change or cancel my plan anytime?",
          answer:
            "Yes, you can upgrade, downgrade, or cancel your school or teacher plan at any time through your account settings or by contacting our support team.",
        },
        {
          id: "how-does-work",
          question: "How does SchoolReview work?",
          answer:
            "SchoolReview helps schools collect and understand feedback from students, parents, teachers, and observers. Feedback is organised into dashboards and reports that help identify strengths, highlight opportunities for improvement, and support better decision-making.",
        },
        {
          id: "who-can-see",
          question: "Who can see my information?",
          answer:
            "Your personal account information is secure and private. Reviews are displayed anonymously to maintain trust, while school leaders see aggregated insights and reports to ensure anonymity.",
        },
        {
          id: "how-protected",
          question: "How is my data protected?",
          answer:
            "We use industry-standard encryption and secure cloud servers based in Switzerland and the EU to protect your data from unauthorized access or disclosure.",
        },
      ],
    },
  ];

  // Filtering logic
  const filteredFaqData = faqData
    .map((cat) => {
      const filteredQuestions = cat.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      return {
        ...cat,
        questions: filteredQuestions,
      };
    })
    .filter((cat) => cat.questions.length > 0);

  return (
    <div className="w-full bg-white font-urbanist select-none">
      <ScrollRestoration />

      {/* Top Banner */}
      <div className="w-full bg-[#f0f7ff] border-b border-blue-100/50 py-16 sm:py-20 text-left">
        <div className="section-padding-x">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-textPrimary leading-[1.15] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-textSecondary mt-4 font-medium max-w-[650px]">
            Find answers about SchoolReview, privacy, reviews, schools,
            teachers, and platform features.
          </p>

          {/* Search Bar */}
          <div className="flex items-center gap-2.5 mt-8 max-w-md w-full">
            <Input
              type="text"
              placeholder="Search FAQs... (e.g. privacy, reviews, schools)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white border-gray-200 h-11 text-sm font-medium rounded-lg focus-visible:ring-primary focus-visible:border-primary shadow-xs"
            />
            <Button className="bg-primary hover:bg-primary/95 text-white h-11 px-5 rounded-lg font-semibold text-xs transition-colors shrink-0">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="section-padding-x py-16 lg:py-24">
        <div className="flex flex-col gap-16">
          {filteredFaqData.length > 0 ? (
            filteredFaqData.map((cat) => (
              <div
                key={cat.category}
                className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start border-b border-gray-50/80 pb-12 last:border-0 last:pb-0"
              >
                {/* Left Column: Category Title */}
                <div className="w-full lg:w-[25%] lg:sticky lg:top-28 text-left">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary tracking-tight">
                    {cat.category}
                  </h2>
                </div>

                {/* Right Column: Accordion List */}
                <div className="w-full lg:w-[75%] flex flex-col gap-4">
                  {cat.questions.map((faq) => (
                    <FaqItem
                      key={faq.id}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-textSecondary text-lg font-medium">
                No matching questions found for "{searchQuery}".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
