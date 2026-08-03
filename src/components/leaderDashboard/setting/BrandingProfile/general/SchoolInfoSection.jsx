import React, { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import CustomMultiSelect from "@/components/ui/CustomMultiSelect"
import { Title18 } from "@/components/typho/Title"

const SchoolInfoSection = ({ register, setValue }) => {
  const [schoolInfoOpen, setSchoolInfoOpen] = useState(false)

  const [selectedSchoolType, setSelectedSchoolType] = useState([])
  const [selectedUniformPolicy, setSelectedUniformPolicy] = useState([])
  const [selectedBoardingType, setSelectedBoardingType] = useState([])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start border-b border-gray-100 pb-8">
      <div className="lg:col-span-2 flex items-center gap-2">
        <Title18 className="text-[#080808]">School Info</Title18>
        <button
          type="button"
          onClick={() => setSchoolInfoOpen(!schoolInfoOpen)}
          className="w-5 h-5 rounded-full bg-[#038AF9] text-white flex items-center justify-center cursor-pointer shrink-0"
        >
          {schoolInfoOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {schoolInfoOpen && (
        <div className="lg:col-span-10 space-y-7 min-w-0">
          {/* Top Row Fields (3 Columns with gap-7) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-center">
            <CustomMultiSelect
              placeholder="Select a school type"
              options={["Day School", "Boarding School", "Day & Boarding"]}
              value={selectedSchoolType}
              onChange={(val) => {
                setSelectedSchoolType(val)
                setValue("infoSchoolType", val)
              }}
            />

            <input
              type="text"
              placeholder="School Founded"
              {...register("schoolFounded")}
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
            />

            <CustomMultiSelect
              placeholder="Select uniform policy"
              options={["Required", "Not Required", "Optional"]}
              value={selectedUniformPolicy}
              onChange={(val) => {
                setSelectedUniformPolicy(val)
                setValue("uniformPolicy", val)
              }}
            />
          </div>

          {/* Row 2: Boarding & Boarding Type (Moved to new row to prevent cut-off) */}
          <div className="flex md:gap-7 gap-3 md:flex-row flex-col md:items-center">
            <div className="flex items-center gap-4 h-11">
              <span className="text-[16px] font-normal text-[#080808]">Boarding</span>
              <RadioGroup defaultValue="yes" className="flex items-center gap-3">
                <div className="flex items-center space-x-1.5">
                  <RadioGroupItem value="yes" id="r-board-yes" />
                  <label htmlFor="r-board-yes" className="text-[14px] font-normal text-[#080808] cursor-pointer">Yes</label>
                </div>
                <div className="flex items-center space-x-1.5">
                  <RadioGroupItem value="no" id="r-board-no" />
                  <label htmlFor="r-board-no" className="text-[14px] font-normal text-[#080808] cursor-pointer">No</label>
                </div>
              </RadioGroup>
            </div>

            <div className=" md:w-[300px] w-full">
              <CustomMultiSelect
                placeholder="Select boarding type"
                options={["Full Boarding", "Weekly Boarding", "Flexible Boarding"]}
                value={selectedBoardingType}
                onChange={(val) => {
                  setSelectedBoardingType(val)
                  setValue("boardingType", val)
                }}
              />
            </div>
          </div>

          {/* Clean 4-column Radio options grid with gap-7 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-5">
            {[
              "School-provided transport",
              "Public transport",
              "Meals",
              "After-school activities",
              "After-school supervision",
              "Academic counseling",
              "University & career guidance",
              "Holiday program's",
            ].map((opt, idx) => (
              <div key={idx} className="space-y-1 min-w-0">
                <span className="text-[16px] font-normal text-[#080808] block truncate">{opt}</span>
                <RadioGroup defaultValue="yes" className="flex items-center gap-4">
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="yes" id={`r-opt-${idx}-yes`} />
                    <label htmlFor={`r-opt-${idx}-yes`} className="text-[14px] font-normal text-[#080808] cursor-pointer">Yes</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="no" id={`r-opt-${idx}-no`} />
                    <label htmlFor={`r-opt-${idx}-no`} className="text-[14px] font-normal text-[#080808] cursor-pointer">No</label>
                  </div>
                </RadioGroup>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SchoolInfoSection
