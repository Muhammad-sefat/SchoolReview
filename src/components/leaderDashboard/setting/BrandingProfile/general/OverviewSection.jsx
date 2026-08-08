import React, { useState } from "react"
import { Paperclip, X, ChevronUp, ChevronDown } from "lucide-react"
import CustomMultiSelect from "@/components/ui/CustomMultiSelect"
import { Title18 } from "@/components/typho/Title"

const OverviewSection = ({ register, setValue }) => {
  const [overviewOpen, setOverviewOpen] = useState(true)
  const [logoPreview, setLogoPreview] = useState(null)
  const [bannerPreview, setBannerPreview] = useState(null)

  const [selectedSchoolType, setSelectedSchoolType] = useState([])
  const [selectedSchoolLevel, setSelectedSchoolLevel] = useState([])

  const handleLogoUpload = (e) => {
    const file = e.target.files[0]
    if (file) setLogoPreview(URL.createObjectURL(file))
  }

  const handleBannerUpload = (e) => {
    const file = e.target.files[0]
    if (file) setBannerPreview(URL.createObjectURL(file))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start border-b border-gray-100 pb-8">
      <div className="lg:col-span-2 flex items-center gap-2">
        <div className="w-28 sm:w-32 shrink-0">
          <Title18 className="text-[#080808]">Overview</Title18>
        </div>
        <button
          type="button"
          onClick={() => setOverviewOpen(!overviewOpen)}
          className="text-[#038AF9] hover:text-[#0270ce] transition-colors cursor-pointer shrink-0 p-0.5"
        >
          {overviewOpen ? <ChevronUp className="w-5 h-5 stroke-[2.25]" /> : <ChevronDown className="w-5 h-5 stroke-[2.25]" />}
        </button>
      </div>

      {overviewOpen && (
        <div className="lg:col-span-10 space-y-5 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            <input
              type="text"
              placeholder="Enter your school name"
              {...register("schoolName")}
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white min-w-0"
            />

            <CustomMultiSelect
              placeholder="Select a school type"
              options={["Public School", "Private School", "International School"]}
              value={selectedSchoolType}
              onChange={(val) => {
                setSelectedSchoolType(val)
                setValue("schoolType", val)
              }}
            />

            <CustomMultiSelect
              placeholder="Select a school level"
              options={["Primary", "Secondary", "K-12"]}
              value={selectedSchoolLevel}
              onChange={(val) => {
                setSelectedSchoolLevel(val)
                setValue("schoolLevel", val)
              }}
            />
          </div>

          {/* Logo & Banner Upload Buttons & Live Previews */}
          <div className="flex flex-col gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-4">
              <label className="h-11 border border-dashed border-[#038AF9] bg-white rounded-xl px-4 text-[16px] font-normal text-[#080808] hover:bg-blue-50/30 cursor-pointer flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap">
                <Paperclip className="w-4 h-4 text-[#5A5A5A]" />
                <span>School logo</span>
                <input type="file" className="hidden" accept="image/*" onChange={handleLogoUpload} />
              </label>

              <label className="h-11 border border-dashed border-[#038AF9] bg-white rounded-xl px-4 text-[16px] font-normal text-[#080808] hover:bg-blue-50/30 cursor-pointer flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap">
                <Paperclip className="w-4 h-4 text-[#5A5A5A]" />
                <span>School banner</span>
                <input type="file" className="hidden" accept="image/*" onChange={handleBannerUpload} />
              </label>
            </div>

            {(logoPreview || bannerPreview) && (
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {logoPreview && (
                  <div className="relative group w-20 h-20 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img src={logoPreview} alt="School Logo Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setLogoPreview(null)}
                      className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer shadow-md hover:bg-red-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}

                {bannerPreview && (
                  <div className="relative group w-44 h-20 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img src={bannerPreview} alt="School Banner Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setBannerPreview(null)}
                      className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer shadow-md hover:bg-red-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <textarea
            rows={2}
            placeholder="Write about your school (max 250 characters)"
            {...register("schoolOverview")}
            maxLength={250}
            className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white resize-none"
          />
        </div>
      )}
    </div>
  )
}

export default OverviewSection
