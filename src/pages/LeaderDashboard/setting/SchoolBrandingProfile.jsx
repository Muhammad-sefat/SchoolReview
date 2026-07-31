import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { ExternalLink } from "lucide-react"
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
        <div className="w-full max-w-full overflow-x-hidden space-y-6 font-urbanist bg-gray-50/20 min-h-screen">
            {/* Top Header Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Title32 className="text-[#080808]">
                    School Branding Profile
                </Title32>

                <a
                    href="#live-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#038AF9] hover:underline text-[16px] font-normal inline-flex items-center gap-1.5 transition-colors"
                >
                    <span>View Live Profile</span>
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>

            {/* Public Profile Switch Row */}
            <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-3">
                    <Switch
                        checked={isPublic}
                        onCheckedChange={setIsPublic}
                        className="data-[state=checked]:bg-[#038AF9]"
                    />
                    <Title20Semi className="text-[#080808]">
                        Public Profile
                    </Title20Semi>
                </div>
                <Title16 className="text-[#5A5A5A]">
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

            {/* Main White Card Container */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs w-full max-w-full overflow-hidden">
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