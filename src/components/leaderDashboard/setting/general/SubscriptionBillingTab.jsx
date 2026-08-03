import React from "react"
import { Title32 } from "@/components/typho/Title"
import { Info } from "lucide-react"

const SubscriptionBillingTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-urbanist">
      {/* Card 1: Core */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col justify-between space-y-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-2">
            <Title32 className="text-[#080808]">Core</Title32>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-[#723CEB] border border-indigo-200/80 flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#723CEB]"></span>
              <span>SAFETY</span>
            </span>
          </div>

          <p className="text-[16px] font-normal text-[#5A5A5A]">Essential features</p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              type="button"
              className="w-full py-3 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[18px] font-medium transition-colors shadow-xs cursor-pointer"
            >
              Request a Quote
            </button>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-3 text-xs text-gray-400 absolute">or</span>
            </div>

            <button
              type="button"
              className="w-full py-3 rounded-xl bg-gray-50/80 border border-gray-200 text-[#080808] text-[18px] font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Request a School Demo
            </button>
          </div>

          {/* Features List */}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between text-[16px] font-normal text-[#080808]">
              <span>SpeakUp Safety Reporting</span>
              <Info className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Pro */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col justify-between space-y-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-2">
            <Title32 className="text-[#080808]">Pro</Title32>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAFAFA] text-primary border border-cyan-200/80 flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
              <span>INSIGHT</span>
            </span>
          </div>

          <p className="text-[16px] font-normal text-[#5A5A5A]">Advanced insights</p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              type="button"
              className="w-full py-3 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[18px] font-medium transition-colors shadow-xs cursor-pointer"
            >
              Request a Quote
            </button>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-3 text-xs text-gray-400 absolute">or</span>
            </div>

            <button
              type="button"
              className="w-full py-3 rounded-xl bg-gray-50/80 border border-gray-200 text-[#080808] text-[18px] font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Request a School Demo
            </button>
          </div>

          {/* Features List */}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <p className="text-[16px] font-medium text-[#080808]">Everything in Core, plus:</p>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-[16px] font-normal text-[#080808]">
                <span>360° School Insights</span>
                <Info className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 shrink-0" />
              </div>
              <div className="flex items-center justify-between text-[16px] font-normal text-[#080808]">
                <span>ReflectED Teacher Development</span>
                <Info className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 shrink-0" />
              </div>
              <div className="flex items-center justify-between text-[16px] font-normal text-[#080808]">
                <span>ThankTeacher Recognition</span>
                <Info className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 shrink-0" />
              </div>
              <div className="flex items-center justify-between text-[16px] font-normal text-[#080808]">
                <span>Access to the School Evaluation Suite</span>
                <Info className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Premium */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col justify-between space-y-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-2">
            <Title32 className="text-[#080808]">Premium</Title32>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              <span>EXCELLENCE</span>
            </span>
          </div>

          <p className="text-[16px] font-normal text-[#5A5A5A]">Complete solution</p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              type="button"
              className="w-full py-3 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[18px] font-medium transition-colors shadow-xs cursor-pointer"
            >
              Request a Quote
            </button>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-3 text-xs text-gray-400 absolute">or</span>
            </div>

            <button
              type="button"
              className="w-full py-3 rounded-xl bg-gray-50/80 border border-gray-200 text-[#080808] text-[18px] font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Request a School Demo
            </button>
          </div>

          {/* Features List */}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <p className="text-[16px] font-medium text-[#080808]">Everything in Pro, plus:</p>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-[16px] font-normal text-[#080808]">
                <span>Community Connect</span>
                <Info className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionBillingTab
