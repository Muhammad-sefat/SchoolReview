import React from "react"
import OverviewSection from "./general/OverviewSection"
import FeesSection from "./general/FeesSection"
import PeopleSection from "./general/PeopleSection"
import CurriculumSection from "./general/CurriculumSection"
import ResultSection from "./general/ResultSection"
import SchoolInfoSection from "./general/SchoolInfoSection"
import FacilitiesSection from "./general/FacilitiesSection"
import ContactSection from "./general/ContactSection"
import PoliciesSection from "./general/PoliciesSection"

const GeneralTab = ({ register, setValue, watch, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-8 font-urbanist text-[#080808] w-full max-w-full overflow-hidden">
      {/* 1. OVERVIEW SECTION */}
      <OverviewSection register={register} setValue={setValue} />

      {/* 2. FEES SECTION */}
      <FeesSection setValue={setValue} />

      {/* 3. PEOPLE SECTION */}
      <PeopleSection register={register} />

      {/* 4. CURRICULUM SECTION */}
      <CurriculumSection setValue={setValue} />

      {/* 5. RESULT SECTION */}
      <ResultSection setValue={setValue} />

      {/* 6. SCHOOL INFO SECTION */}
      <SchoolInfoSection register={register} setValue={setValue} />

      {/* 7. FACILITIES SECTION */}
      <FacilitiesSection setValue={setValue} />

      {/* 8. CONTACT SECTION */}
      <ContactSection register={register} setValue={setValue} />

      {/* 9. POLICIES SECTION */}
      <PoliciesSection register={register} />

      {/* Save Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-8 py-3 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-semibold transition-colors shadow-xs cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </form>
  )
}

export default GeneralTab
