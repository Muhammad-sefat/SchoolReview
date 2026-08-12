import React, { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import CustomMultiSelect from "@/components/ui/CustomMultiSelect"
import { Title18 } from "@/components/typho/Title"

const FacilitiesSection = ({ setValue }) => {
  const [facilitiesOpen, setFacilitiesOpen] = useState(false)
  const [selectedFacilities, setSelectedFacilities] = useState([])
  const [selectedSports, setSelectedSports] = useState([])

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
      <div
        className="lg:col-span-2 flex items-center gap-1.5 cursor-pointer select-none"
        onClick={() => setFacilitiesOpen(!facilitiesOpen)}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setFacilitiesOpen(!facilitiesOpen)
          }}
          className="text-[#038AF9] hover:text-[#0270ce] transition-colors cursor-pointer shrink-0 p-0.5"
        >
          {facilitiesOpen ? <ChevronUp className="w-5 h-5 stroke-[2.25]" /> : <ChevronDown className="w-5 h-5 stroke-[2.25]" />}
        </button>
        <Title18 className="text-[#080808]">Facilities</Title18>
      </div>

      {facilitiesOpen && (
        <div className="lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 min-w-0">
          <CustomMultiSelect
            placeholder="Select campus facilities"
            options={[
              "Fitness Centre",
              "Swimming Pool",
              "Sports Courts",
              "Indoor Sports Hall",
              "Playground",
              "Outdoor Learning Spaces",
              "Dining Facilities",
              "Campus Security",
              "Boarding Facilities",
              "Medical Centre / Health Services",
              "Prayer Room / Chapel",
              "Counselling Services",
            ]}
            value={selectedFacilities}
            onChange={(val) => {
              setSelectedFacilities(val)
              setValue("campusFacilities", val)
            }}
          />

          <CustomMultiSelect
            placeholder="Select sports activities"
            options={[
              "Football / Soccer",
              "Tennis",
              "Basketball",
              "Swimming",
              "Skiing",
              "Track & Field",
            ]}
            value={selectedSports}
            onChange={(val) => {
              setSelectedSports(val)
              setValue("sportsActivities", val)
            }}
          />
        </div>
      )}
    </div>
  )
}

export default FacilitiesSection
