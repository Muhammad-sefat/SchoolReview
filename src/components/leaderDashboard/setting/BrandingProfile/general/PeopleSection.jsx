import React, { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import CustomSlider from "@/components/ui/slider"
import { Title18 } from "@/components/typho/Title"

const PeopleSection = ({ register }) => {
  const [peopleOpen, setPeopleOpen] = useState(true)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start border-b border-gray-100 pb-8">
      <div className="lg:col-span-2 flex items-center gap-2">
        <Title18 className="text-[#080808]">People</Title18>
        <button
          type="button"
          onClick={() => setPeopleOpen(!peopleOpen)}
          className="w-5 h-5 rounded-full bg-[#038AF9] text-white flex items-center justify-center cursor-pointer shrink-0"
        >
          {peopleOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
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
