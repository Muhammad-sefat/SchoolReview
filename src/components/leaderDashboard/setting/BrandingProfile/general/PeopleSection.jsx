import React, { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import CustomSlider from "@/components/ui/slider"
import { Title18 } from "@/components/typho/Title"

const PeopleSection = ({ register }) => {
  const [peopleOpen, setPeopleOpen] = useState(false)

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
      <div className="lg:col-span-2 flex items-center gap-2">
        <div className="w-28 sm:w-32 shrink-0">
          <Title18 className="text-[#080808]">People</Title18>
        </div>
        <button
          type="button"
          onClick={() => setPeopleOpen(!peopleOpen)}
          className="text-[#038AF9] hover:text-[#0270ce] transition-colors cursor-pointer shrink-0 p-0.5"
        >
          {peopleOpen ? <ChevronUp className="w-5 h-5 stroke-[2.25]" /> : <ChevronDown className="w-5 h-5 stroke-[2.25]" />}
        </button>
      </div>

      {peopleOpen && (
        <div className="lg:col-span-10 space-y-5 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            <input
              type="text"
              placeholder="Head of school name"
              {...register("headName")}
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white min-w-0"
            />
            <input
              type="text"
              placeholder="Student nationalities represented"
              {...register("nationalities")}
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white min-w-0"
            />
            <input
              type="text"
              placeholder="Total number of students"
              {...register("totalStudents")}
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white min-w-0"
            />
            <input
              type="text"
              placeholder="Total number of teacher & staff"
              {...register("totalStaff")}
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white min-w-0"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 items-center">
            <div className="space-y-1 min-w-0">
              <span className="text-[16px] font-normal text-[#080808] block truncate">Average class size</span>
              <CustomSlider min={10} max={50} defaultLow={20} defaultHigh={30} rangeText="20-30" />
            </div>
            <div className="space-y-1 min-w-0">
              <span className="text-[16px] font-normal text-[#080808] block truncate">Student - teacher ratio</span>
              <CustomSlider min={1} max={30} defaultLow={5} defaultHigh={10} rangeText="10:1" />
            </div>
            <input
              type="text"
              placeholder="Teaching approach description..."
              {...register("teachingApproach")}
              className="lg:col-span-2 w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white min-w-0"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PeopleSection
