import { CircleCheck } from "lucide-react";
import { ScrollRestoration } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";

function RequestDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Demo request submitted successfully! We will get in touch with you shortly.",
    );
  };

  return (
    <section className="w-full bg-white font-urbanist select-none pt-24 sm:pt-28 pb-16 lg:pb-24">
      <ScrollRestoration />
      <div className="section-padding-x w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        {/* Left Column: Heading and Info */}
        <div className="w-full lg:w-[45%] flex flex-col items-start text-left lg:sticky lg:top-28">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-secondary mb-6">
            <span>For School Leaders / School Evaluators</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-textPrimary leading-[1.15] tracking-tight">
            Request a Personalised Demo
          </h1>

          {/* Subheading */}
          <p className="text-sm lg:text-lg text-textSecondary mt-6 leading-relaxed">
            See how SchoolReview helps your school collect meaningful feedback,
            measure improvement, and make evidence-based decisions.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-3.5 mt-8">
            {[
              "30-minute personalised demo",
              "Tailored to your school's needs",
              "Live Q&A with our team",
              "No obligation",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-textPrimary"
              >
                <div className="flex items-center justify-center w-6 h-6 shrink-0">
                  <CircleCheck className="w-4 h-4 stroke-[2]" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Shadcn Form Card */}
        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
          <Card className="w-full max-w-[650px] bg-white border-4 border-gray-100 rounded-[24px] shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name Field */}
              <Input
                type="text"
                placeholder="Your name"
                required
                className="h-11 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium"
              />

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email address"
                  required
                  className="h-11 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="h-11 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium"
                />
              </div>

              {/* School Name */}
              <Input
                type="text"
                placeholder="School name"
                required
                className="h-11 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium"
              />

              {/* Your Role Select */}
              <Select required>
                <SelectTrigger className="h-11 border-gray-200 focus:ring-primary focus:border-primary text-secondary rounded-lg text-sm font-medium w-full bg-white">
                  <SelectValue placeholder="Your role" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-100 rounded-lg shadow-md z-50">
                  <SelectItem value="leader">School Leader</SelectItem>
                  <SelectItem value="evaluator">School Evaluator</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              {/* Location */}
              <Input
                type="text"
                placeholder="Location"
                required
                className="h-11 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium"
              />

              {/* School Website (Optional) */}
              <Input
                type="url"
                placeholder="School Website (Optional)"
                className="h-11 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium"
              />

              {/* Text Area */}
              <Textarea
                placeholder="What would you like to learn during the demo?"
                required
                className="min-h-[110px] border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium resize-none p-3 bg-white"
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/95 text-white font-semibold rounded-[10px] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer text-sm"
              >
                Schedule My Demo
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default RequestDemo;
