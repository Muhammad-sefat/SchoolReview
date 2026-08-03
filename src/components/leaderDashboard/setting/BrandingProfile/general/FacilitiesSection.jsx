import React, { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import CustomMultiSelect from "@/components/ui/CustomMultiSelect"
import { Title18 } from "@/components/typho/Title"

const FacilitiesSection = ({ setValue }) => {
  const [facilitiesOpen, setFacilitiesOpen] = useState(false)
  const [selectedFacilities, setSelectedFacilities] = useState([])
  const [selectedSports, setSelectedSports] = useState([])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start border-b border-gray-100 pb-8">
      <div className="lg:col-span-2 flex items-center gap-2">
        <Title18 className="text-[#080808]">Facilities</Title18>
        <button
          type="button"
          onClick={() => setFacilitiesOpen(!facilitiesOpen)}
          className="w-5 h-5 rounded-full bg-[#038AF9] text-white flex items-center justify-center cursor-pointer shrink-0"
        >
          {facilitiesOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
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
