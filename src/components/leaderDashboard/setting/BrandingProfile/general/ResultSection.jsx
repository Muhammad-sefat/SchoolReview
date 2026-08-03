import React, { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import CustomMultiSelect from "@/components/ui/CustomMultiSelect"
import { Title18 } from "@/components/typho/Title"

const ResultSection = ({ setValue }) => {
  const [resultOpen, setResultOpen] = useState(false)

  const [selectedSwissQual, setSelectedSwissQual] = useState([])
  const [selectedIntlQual, setSelectedIntlQual] = useState([])
  const [selectedGradPathways, setSelectedGradPathways] = useState([])
  const [selectedUnivDest, setSelectedUnivDest] = useState([])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start border-b border-gray-100 pb-8">
      <div className="lg:col-span-2 flex items-center gap-2">
        <Title18 className="text-[#080808]">Result</Title18>
        <button
          type="button"
          onClick={() => setResultOpen(!resultOpen)}
          className="w-5 h-5 rounded-full bg-[#038AF9] text-white flex items-center justify-center cursor-pointer shrink-0"
        >
          {resultOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {resultOpen && (
        <div className="lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 min-w-0">
          <CustomMultiSelect
            placeholder="Select swiss qualifications"
            options={[
              "Swiss Matura",
              "Fachmaturität",
              "Berufsmaturität",
              "Swiss Federal VET Diploma (EFZ)",
              "A-Levels",
            ]}
            value={selectedSwissQual}
            onChange={(val) => {
              setSelectedSwissQual(val)
              setValue("swissQual", val)
            }}
          />

          <CustomMultiSelect
            placeholder="Select international qualifications"
            options={[
              "Cambridge International A-Levels",
              "IB Diploma Program (IB DP)",
              "US High School Diploma",
              "Advanced Placement (AP)",
              "Cambridge IGCSE",
              "A-Levels (UK)",
            ]}
            value={selectedIntlQual}
            onChange={(val) => {
              setSelectedIntlQual(val)
              setValue("intlQual", val)
            }}
          />

          <CustomMultiSelect
            placeholder="Select typical graduate pathways"
            options={[
              "University (Switzerland)",
              "University (International)",
              "University of Applied Sciences (Fachhochschule)",
              "Higher Vocational Education (HF)",
              "Apprenticeship / VET Pathway",
              "Foundation / Pathway Program",
              "Direct Employment",
              "Entrepreneurship",
              "Gap Year",
              "Military / Civil Service",
            ]}
            value={selectedGradPathways}
            onChange={(val) => {
              setSelectedGradPathways(val)
              setValue("graduatePathways", val)
            }}
          />

          <CustomMultiSelect
            placeholder="Select typical university destinations"
            options={[
              "Switzerland",
              "United Kingdom",
              "Europe",
              "North America",
              "Asia",
              "Australia",
              "New Zealand",
            ]}
            value={selectedUnivDest}
            onChange={(val) => {
              setSelectedUnivDest(val)
              setValue("univDestinations", val)
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ResultSection
