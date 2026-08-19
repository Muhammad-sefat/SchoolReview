import { useState } from "react";
import { Mail } from "lucide-react";
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

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
  };

  return (
    <section className="w-full bg-white font-urbanist select-none pt-24 sm:pt-28 pb-16 lg:pb-24">
      <ScrollRestoration />
      <div className="section-padding-x w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        {/* Left Column: Heading and Info */}
        <div className="w-full lg:w-[40%] flex flex-col items-start text-left lg:sticky lg:top-28">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-secondary mb-6">
            <Mail className="w-3.5 h-3.5 shrink-0 stroke-[2.25]" />
            <span>Contact Us</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-textPrimary leading-[1.15] tracking-tight">
            Contact{" "}
            <span className="text-primary relative inline-block">
              Us
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
          <h2 className="text-xl sm:text-2xl font-bold text-textPrimary mt-6 leading-snug">
            We're Here to Help
          </h2>

          <p className="text-sm sm:text-base text-textSecondary mt-3 leading-relaxed font-medium max-w-[480px]">
            Have a question, need support, or want to learn more about SchoolReview? We'd love to hear from you.
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

              {/* Email Field */}
              <Input
                type="email"
                placeholder="Email address"
                required
                className="h-11 border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium"
              />

              {/* Subject Select */}
              <Select required>
                <SelectTrigger className="h-11 border-gray-200 focus:ring-primary focus:border-primary text-secondary rounded-lg text-sm font-medium w-full bg-white">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-100 rounded-lg shadow-md z-50">
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="partnership">School Partnership</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              {/* How can we help text area */}
              <Textarea
                placeholder="How can we help?"
                required
                className="min-h-[110px] border-gray-200 focus-visible:ring-primary focus-visible:border-primary rounded-lg text-sm font-medium resize-none p-3 bg-white"
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/95 text-white font-semibold rounded-[10px] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer text-sm"
              >
                Contact Us
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
