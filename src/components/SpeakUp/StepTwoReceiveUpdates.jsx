import React from "react"
import CustomInput from "@/components/common/CustomInput"

const StepTwoReceiveUpdates = ({ formData, updateFormData }) => {
  const selectedPreference = formData.updatePreference || "email"
  const accessCodeDelivery = formData.accessCodeDelivery || "email"

  return (
    <div className="space-y-4 md:space-y-[24px] font-urbanist">
      {/* Title */}
      <h2 className="text-[24px] font-semibold text-[#080808] text-center sm:text-left">
        How would you like to receive updates?
      </h2>

      <div className="space-y-4 md:space-y-6">
        {/* Option 1: Stay anonymous */}
        <div
          onClick={() => updateFormData({ updatePreference: "anonymous" })}
          className={`p-5 rounded-2xl border transition-all cursor-pointer ${
            selectedPreference === "anonymous"
              ? "border-primary ring-1 ring-primary bg-background shadow-sm"
              : "border-border/80 hover:border-primary/50 bg-background"
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div className="pt-0.5 shrink-0">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  selectedPreference === "anonymous"
                    ? "border-primary bg-white"
                    : "border-muted-foreground/60 bg-transparent"
                }`}
              >
                {selectedPreference === "anonymous" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                )}
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-[18px] font-medium text-[#080808] leading-tight">
                Stay anonymous
              </h3>
              <p className="text-[16px] font-normal text-textPrimary leading-normal">
                The school won't be able to contact you about your report.
              </p>
            </div>
          </div>
        </div>

        {/* Option 2: Get updates by email */}
        <div
          onClick={() => updateFormData({ updatePreference: "email" })}
          className={`p-5 rounded-2xl border transition-all cursor-pointer ${
            selectedPreference === "email"
              ? "border-primary ring-1 ring-primary bg-background shadow-sm"
              : "border-border/80 hover:border-primary/50 bg-background"
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div className="pt-0.5 shrink-0">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  selectedPreference === "email"
                    ? "border-primary bg-white"
                    : "border-muted-foreground/60 bg-transparent"
                }`}
              >
                {selectedPreference === "email" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                )}
              </div>
            </div>
            <div className="space-y-1 w-full">
              <h3 className="text-[18px] font-medium text-[#080808] leading-tight">
                Get updates by email
              </h3>
              <p className="text-[16px] font-normal text-textPrimary leading-normal">
                Get updates from the school about your report.
              </p>

              {/* Expanded Email Input Field */}
              {selectedPreference === "email" && (
                <div className="pt-4 md:pt-[24px]" onClick={(e) => e.stopPropagation()}>
                  <CustomInput
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email || ""}
                    onChange={(e) => updateFormData({ email: e.target.value })}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Option 3: Get an access code to check updates */}
        <div
          onClick={() => updateFormData({ updatePreference: "access-code" })}
          className={`p-5 rounded-2xl border transition-all cursor-pointer ${
            selectedPreference === "access-code"
              ? "border-primary ring-1 ring-primary bg-background shadow-sm"
              : "border-border/80 hover:border-primary/50 bg-background"
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div className="pt-0.5 shrink-0">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  selectedPreference === "access-code"
                    ? "border-primary bg-white"
                    : "border-muted-foreground/60 bg-transparent"
                }`}
              >
                {selectedPreference === "access-code" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                )}
              </div>
            </div>
            <div className="space-y-1 w-full">
              <h3 className="text-[18px] font-medium text-[#080808] leading-tight">
                Get an access code to check updates
              </h3>
              <p className="text-[16px] font-normal text-textPrimary leading-normal">
                Check updates later without sharing your email. You'll get a code after submitting your report.
              </p>

              {/* Expanded Sub-Options for Access Code Delivery */}
              {selectedPreference === "access-code" && (
                <div className="pt-4 md:pt-[24px] space-y-4 md:space-y-[24px]" onClick={(e) => e.stopPropagation()}>
                  <h4 className="text-[16px] font-medium text-[#080808]">
                    How would you like to receive your access code?
                  </h4>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    {/* Sub-Card 1: Send it to my email */}
                    <div
                      onClick={() => updateFormData({ accessCodeDelivery: "email" })}
                      className={`flex-1 w-full p-4 rounded-xl border transition-all cursor-pointer ${
                        accessCodeDelivery === "email"
                          ? "border-primary/80 bg-primary/5 shadow-xs"
                          : "border-border/80 hover:border-primary/40 bg-background"
                      }`}
                    >
                      <h5 className="text-[18px] font-medium text-[#080808]">
                        Send it to my email
                      </h5>
                      <p className="text-[16px] font-normal text-textPrimary mt-0.5">
                        Get the code by email
                      </p>
                    </div>

                    <span className="text-sm font-medium text-muted-foreground px-1">Or</span>

                    {/* Sub-Card 2: Show it now */}
                    <div
                      onClick={() => updateFormData({ accessCodeDelivery: "now" })}
                      className={`flex-1 w-full p-4 rounded-xl border transition-all cursor-pointer ${
                        accessCodeDelivery === "now"
                          ? "border-primary/80 bg-primary/5 shadow-xs"
                          : "border-border/80 hover:border-primary/40 bg-background"
                      }`}
                    >
                      <h5 className="text-[18px] font-medium text-[#080808]">
                        Show it now
                      </h5>
                      <p className="text-[16px] font-normal text-textPrimary mt-0.5">
                        Save it — it won't be shown again
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTwoReceiveUpdates
