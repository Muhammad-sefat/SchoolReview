import { useState } from "react";
import { Shield } from "lucide-react";
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
import CustomSlider from "../../components/ui/slider";
import { Button } from "../../components/ui/button";

function Consultation() {
  const [budgetRange, setBudgetRange] = useState({ low: 0, high: 200 });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consultation request submitted successfully!");
  };

  return (
    <section className="w-full bg-white font-urbanist select-none pt-24 sm:pt-28 pb-16 lg:pb-24">
      <ScrollRestoration />
      <div className="section-padding-x w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        {/* Left Column: Heading and Info */}
        <div className="w-full lg:w-[40%] flex flex-col items-start text-left lg:sticky lg:top-28">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-secondary mb-6">
            <Shield className="w-3.5 h-3.5 shrink-0 stroke-[2.25]" />
            <span>Book a Consultation</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-textPrimary leading-[1.15] tracking-tight">
            Find the Right School <br /> with Expert{" "}
            <span className="text-primary relative inline-block">
              Guidance
              <svg
                viewBox="0 0 90 10"
                className="absolute left-0 -bottom-1.5 w-full h-3 text-primary pointer-events-none"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M 2,8 Q 45,-4 88,8 Q 45,0 2,8 Z" fill="currentColor" />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-textSecondary mt-6 leading-relaxed font-medium max-w-[480px]">
            Receive personalised school advice from an experienced education
            consultant.
          </p>
        </div>

        {/* Right Column: Shadcn Form Card */}
        <div className="w-full lg:w-[60%] flex justify-center lg:justify-end">
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

              {/* Child's Age & Current School Grade Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Child's Age"
                  className="h-11 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium"
                />
                <Input
                  type="text"
                  placeholder="Current School Grade (Optional)"
                  className="h-11 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium"
                />
              </div>

              {/* Preferred School Location */}
              <Input
                type="text"
                placeholder="Preferred School Location"
                className="h-11 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium"
              />

              {/* School Type Select */}
              <Select>
                <SelectTrigger className="h-11 border-gray-200 focus:ring-primary focus:border-primary text-secondary rounded-lg text-sm font-medium w-full bg-white">
                  <SelectValue placeholder="School Type" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-100 rounded-lg shadow-md z-50">
                  <SelectItem value="public">Public School</SelectItem>
                  <SelectItem value="private">Private School</SelectItem>
                  <SelectItem value="international">
                    International School
                  </SelectItem>
                  <SelectItem value="boarding">Boarding School</SelectItem>
                </SelectContent>
              </Select>

              {/* Tuition Budget Range Slider */}
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-xs font-semibold text-textSecondary">
                  <span>Annual Tuition Budget</span>
                  <span className="text-primary font-bold">
                    {budgetRange.low}k - {budgetRange.high}k
                  </span>
                </div>
                <CustomSlider
                  min={0}
                  max={200}
                  defaultLow={0}
                  defaultHigh={200}
                  onChange={(low, high) => setBudgetRange({ low, high })}
                  className="py-1"
                />
              </div>

              {/* What are you looking for text area */}
              <Textarea
                placeholder="What are you looking for in a school?"
                className="min-h-[110px] border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium resize-none p-3 bg-white"
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/95 text-white font-semibold rounded-[10px] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer text-sm"
              >
                Request My Consultation
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Consultation;
