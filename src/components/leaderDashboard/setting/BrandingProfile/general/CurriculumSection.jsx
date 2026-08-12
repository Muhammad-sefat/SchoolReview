import React, { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import CustomMultiSelect from "@/components/ui/CustomMultiSelect"
import { Title18 } from "@/components/typho/Title"

const CurriculumSection = ({ setValue }) => {
  const [curriculumOpen, setCurriculumOpen] = useState(false)

  const [selectedAccreditation, setSelectedAccreditation] = useState([])
  const [selectedCurriculum, setSelectedCurriculum] = useState([])
  const [selectedLearningApproaches, setSelectedLearningApproaches] = useState([])
  const [selectedLanguagesOffered, setSelectedLanguagesOffered] = useState([])
  const [selectedStem, setSelectedStem] = useState([])
  const [selectedLanguagesSubj, setSelectedLanguagesSubj] = useState([])
  const [selectedHumanities, setSelectedHumanities] = useState([])
  const [selectedArts, setSelectedArts] = useState([])

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
      <div
        className="lg:col-span-2 flex items-center gap-1.5 cursor-pointer select-none"
        onClick={() => setCurriculumOpen(!curriculumOpen)}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setCurriculumOpen(!curriculumOpen)
          }}
          className="text-[#038AF9] hover:text-[#0270ce] transition-colors cursor-pointer shrink-0 p-0.5"
        >
          {curriculumOpen ? <ChevronUp className="w-5 h-5 stroke-[2.25]" /> : <ChevronDown className="w-5 h-5 stroke-[2.25]" />}
        </button>
        <Title18 className="text-[#080808]">Curriculum</Title18>
      </div>

      {curriculumOpen && (
        <div className="lg:col-span-10 space-y-7 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            <CustomMultiSelect
              placeholder="Select accreditation's"
              options={[
                "Swiss cantonal recognition",
                "NEASC accreditation",
                "CIS accreditation",
                "AP Authorized School",
                "Cambridge International authorization",
                "IB World School Authorisation",
                "Swiss Federal Matura Recognition",
                "WASC Accreditation",
                "Cognia Accreditation",
                "British Schools Overseas (BSO)",
                "Pearson Edexcel Authorisation",
              ]}
              value={selectedAccreditation}
              onChange={(val) => {
                setSelectedAccreditation(val)
                setValue("accreditation", val)
              }}
            />

            <CustomMultiSelect
              placeholder="Select curriculum"
              options={[
                "Swiss Curriculum (Lehrplan 21 / Cantonal Curriculum)",
                "Swiss Matura",
                "Swiss Vocational Education & Training (VET / EFZ)",
                "International Baccalaureate (IB)",
                "British National Curriculum",
                "German National Curriculum",
                "American Curriculum (US High School Diploma)",
                "Cambridge International (IGCSE / A-Levels)",
                "French National Curriculum",
                "Italian National Curriculum",
                "Spanish National Curriculum",
              ]}
              value={selectedCurriculum}
              onChange={(val) => {
                setSelectedCurriculum(val)
                setValue("curriculum", val)
              }}
            />

            <CustomMultiSelect
              placeholder="Select learning approaches"
              options={[
                "Montessori",
                "Steiner / Waldorf",
                "Reggio Emilia",
                "Inquiry-based learning",
                "Teacher-led / traditional",
                "Competency-Based Learning",
                "Blended Learning",
                "Bilingual / Immersion Approach",
                "International Primary Curriculum (IPC)",
              ]}
              value={selectedLearningApproaches}
              onChange={(val) => {
                setSelectedLearningApproaches(val)
                setValue("learningApproaches", val)
              }}
            />

            <CustomMultiSelect
              placeholder="Select languages"
              options={["German", "French", "Italian", "English", "Spanish", "Chinese (Mandarin)"]}
              value={selectedLanguagesOffered}
              onChange={(val) => {
                setSelectedLanguagesOffered(val)
                setValue("languagesOffered", val)
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            <CustomMultiSelect
              placeholder="Select STEM subject"
              options={[
                "Mathematics",
                "Biology",
                "Chemistry",
                "Physics",
                "Environmental Science",
                "Computer Science",
                "Technology",
              ]}
              value={selectedStem}
              onChange={(val) => {
                setSelectedStem(val)
                setValue("stemSubject", val)
              }}
            />

            <CustomMultiSelect
              placeholder="Select languages subject"
              options={["German", "French", "Italian", "English", "Spanish", "Additional Languages"]}
              value={selectedLanguagesSubj}
              onChange={(val) => {
                setSelectedLanguagesSubj(val)
                setValue("languagesSubject", val)
              }}
            />

            <CustomMultiSelect
              placeholder="Select humanities & business subject"
              options={["History", "Geography", "Economics", "Business Studies", "Philosophy", "Psychology"]}
              value={selectedHumanities}
              onChange={(val) => {
                setSelectedHumanities(val)
                setValue("humanitiesSubject", val)
              }}
            />

            <CustomMultiSelect
              placeholder="Select arts & physical education subject"
              options={["Visual Arts", "Music", "Drama", "Design", "Sport", "Physical Education"]}
              value={selectedArts}
              onChange={(val) => {
                setSelectedArts(val)
                setValue("artsSubject", val)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default CurriculumSection
