import React, { useState } from "react"
import { Check } from "lucide-react"

const AdditionalReviewModulesTab = () => {
  const [modules, setModules] = useState({
    classroomClimate: false,
    learningImpact: false,
    professionalPractice: false,
  })

  const toggleModule = (key) => {
    const updated = { ...modules, [key]: !modules[key] }
    setModules(updated)
    console.log("Additional Review Modules Changed:", updated)
  }

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6 font-urbanist">
      <div>
        <h3 className="text-[20px] font-semibold text-[#080808]">Additional Review Modules</h3>
        <p className="text-[16px] font-normal text-[#5A5A5A] mt-2 leading-relaxed max-w-4xl">
          Select optional review modules to collect additional feedback. These questions are added to the core review and provide deeper insights into specific areas. Keep in mind that longer reviews may reduce response rates.
        </p>
      </div>

      <div className="space-y-4">
        {/* Module 1: Classroom Climate */}
        <div
          onClick={() => toggleModule("classroomClimate")}
          className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer bg-white ${
            modules.classroomClimate ? "border-gray-200" : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                modules.classroomClimate
                  ? "bg-[#038AF9] border-[#038AF9] text-white"
                  : "border-gray-300 bg-white"
              }`}
            >
              {modules.classroomClimate && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>

            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className={`text-[18px] font-medium ${modules.classroomClimate ? "text-[#038AF9]" : "text-[#080808]"}`}>
                  Classroom Climate
                </span>
                <span className="text-[16px] font-normal text-gray-500">(Student Reviews Only)</span>
              </div>
              <p className="text-[16px] font-normal text-[#5A5A5A]">
                Understand how safe, supported, and included students feel in the classroom.
              </p>
              <ul className="space-y-1 text-[16px] font-normal text-[#5A5A5A] pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>Classroom Safety</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>Student Wellbeing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Module 2: Learning Impact */}
        <div
          onClick={() => toggleModule("learningImpact")}
          className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer bg-white ${
            modules.learningImpact ? "border-gray-200" : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                modules.learningImpact
                  ? "bg-[#038AF9] border-[#038AF9] text-white"
                  : "border-gray-300 bg-white"
              }`}
            >
              {modules.learningImpact && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>

            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className={`text-[18px] font-medium ${modules.learningImpact ? "text-[#038AF9]" : "text-[#080808]"}`}>
                  Learning Impact
                </span>
                <span className="text-[16px] font-normal text-gray-500">(Students Only)</span>
              </div>
              <p className="text-[16px] font-normal text-[#5A5A5A]">
                Measure how students perceive their learning, progress, and confidence.
              </p>
              <ul className="space-y-1 text-[16px] font-normal text-[#5A5A5A] pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>Understanding</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>Progress</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>Confidence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Module 3: Professional Practice */}
        <div
          onClick={() => toggleModule("professionalPractice")}
          className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer bg-white ${
            modules.professionalPractice ? "border-gray-200" : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                modules.professionalPractice
                  ? "bg-[#038AF9] border-[#038AF9] text-white"
                  : "border-gray-300 bg-white"
              }`}
            >
              {modules.professionalPractice && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>

            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className={`text-[18px] font-medium ${modules.professionalPractice ? "text-[#038AF9]" : "text-[#080808]"}`}>
                  Professional Practice
                </span>
                <span className="text-[16px] font-normal text-gray-500">(Teachers & Observers Only)</span>
              </div>
              <p className="text-[16px] font-normal text-[#5A5A5A]">
                Collect structured feedback on instructional practice and professional growth from teachers and observers.
              </p>
              <ul className="space-y-1 text-[16px] font-normal text-[#5A5A5A] pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>Lesson Coherence</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>Meaningful Assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>Adaptive Teaching</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>Ongoing Improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalReviewModulesTab
