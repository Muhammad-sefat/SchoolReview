import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Switch } from "@/components/ui/switch"
import { Title32, Title20Semi, Title16 } from "@/components/typho/Title"
import GeneralTab from "@/components/leaderDashboard/setting/BrandingProfile/GeneralTab"
import MediaTab from "@/components/leaderDashboard/setting/BrandingProfile/MediaTab"
import CareerTab from "@/components/leaderDashboard/setting/BrandingProfile/CareerTab"

const SchoolBrandingProfile = () => {
  const [activeTab, setActiveTab] = useState("general")
  const [isPublic, setIsPublic] = useState(true)

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      schoolName: "",
      schoolType: "",
      schoolLevel: "",
      schoolOverview: "",
      currency: "",
      headName: "",
      nationalities: "",
      totalStudents: "",
      totalStaff: "",
      teachingApproach: "",
      accreditation: "",
      curriculum: "",
      campusName: "",
      phoneNumber: "",
      websiteUrl: "",
      admissionsEmail: "",
      address: "",
      videoUrl: "",
      virtualTourUrl: "",
    },
  })

  const onSubmit = (data) => {
    console.log("=== School Branding Profile Form Data Submitted ===", {
      isPublic,
      activeTab,
      ...data,
    })
    alert("Form data logged to console successfully!")
  }

  return (
    <div className="w-full max-w-full overflow-x-hidden space-y-6 font-urbanist min-h-screen">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <Title32 className="text-[#080808]">
          School Branding Profile
        </Title32>


      </div>

      {/* Public Profile Switch Row */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center gap-3 py-2">
          <Switch
            checked={isPublic}
            onCheckedChange={setIsPublic}
            className="data-[state=checked]:bg-[#038AF9]"
          />
          <Title20Semi className="text-[#080808]">
            Public Profile
          </Title20Semi>

          <a
            href="#live-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#038AF9] ml-3 hover:underline text-[18px] font-medium leading-[28px] inline-flex items-center gap-2 transition-colors pb-0.5 sm:self-end"
          >
            <span>View Live Profile</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M11.199 4C7.95542 4.00584 6.2569 4.08549 5.17142 5.17114C4 6.34275 4 8.22842 4 11.9997C4 15.7711 4 17.6568 5.17142 18.8283C6.34283 20 8.2282 20 11.999 20C15.7696 20 17.6551 20 18.8265 18.8283C19.9119 17.7427 19.9915 16.0439 19.9974 12.7998" stroke="#038AF9" strokeWidth="1.33335" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.6073 4.44176L11.1562 12.9418M19.9965 8.46938C20.0054 7.84323 20.0464 4.88143 19.6073 4.44176C19.1682 4.0021 16.2102 4.04308 15.5848 4.05198" stroke="#038AF9" strokeWidth="1.33335" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <Title16 className="text-textPrimary">
          Decide whether your school's SchoolReview page is visible to the public.
        </Title16>
      </div>

      {/* Sub-Tabs Row (General | Media | Career) */}
      <div className="flex items-center gap-3 pt-2">
        <button
          type="button"
          onClick={() => setActiveTab("general")}
          className={`px-6 py-2 rounded-full text-[18px] transition-all cursor-pointer ${activeTab === "general"
            ? "bg-[#038AF9] text-white font-medium shadow-xs"
            : "border border-gray-200/90 bg-white text-textPrimary font-normal hover:text-[#080808]"
            }`}
        >
          General
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("media")}
          className={`px-6 py-2 rounded-full text-[18px] transition-all cursor-pointer ${activeTab === "media"
            ? "bg-[#038AF9] text-white font-medium shadow-xs"
            : "border border-gray-200/90 bg-white text-textPrimary font-normal hover:text-[#080808]"
            }`}
        >
          Media
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("career")}
          className={`px-6 py-2 rounded-full text-[18px] transition-all cursor-pointer ${activeTab === "career"
            ? "bg-[#038AF9] text-white font-medium shadow-xs"
            : "border border-gray-200/90 bg-white text-textPrimary font-normal hover:text-[#080808]"
            }`}
        >
          Career
        </button>
      </div>

      {/* Active Tab Content (Each section renders as an independent white card) */}
      <div className="w-full max-w-full space-y-6">
        {activeTab === "general" && (
          <GeneralTab
            register={register}
            setValue={setValue}
            watch={watch}
            onSubmit={handleSubmit(onSubmit)}
          />
        )}

        {activeTab === "media" && (
          <MediaTab
            register={register}
            onSubmit={handleSubmit(onSubmit)}
          />
        )}

        {activeTab === "career" && (
          <CareerTab
            register={register}
            onSubmit={handleSubmit(onSubmit)}
          />
        )}
      </div>
    </div>
  )
}

export default SchoolBrandingProfile