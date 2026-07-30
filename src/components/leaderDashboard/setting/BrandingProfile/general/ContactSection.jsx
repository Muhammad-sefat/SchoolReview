import React, { useState } from "react"
import { Info, Plus, Trash2 } from "lucide-react"
import CustomMultiSelect from "@/components/ui/CustomMultiSelect"
import { Title18 } from "@/components/typho/Title"

const ContactSection = ({ register, setValue }) => {
  const [campuses, setCampuses] = useState([
    { id: 1, name: "", phone: "", website: "", social: [], email: "", address: "", maps: "" },
  ])

  const handleAddCampus = () => {
    setCampuses((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        phone: "",
        website: "",
        social: [],
        email: "",
        address: "",
        maps: "",
      },
    ])
  }

  const handleRemoveCampus = (id) => {
    if (campuses.length === 1) return
    setCampuses((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start border-b border-gray-100 pb-8">
      <div className="lg:col-span-2">
        <Title18 className="text-[#080808]">Contact</Title18>
      </div>

      <div className="lg:col-span-10 space-y-6 min-w-0">
        {campuses.map((campus, idx) => (
          <div key={campus.id} className="space-y-5 pt-2 first:pt-0 border-b border-gray-100/60 last:border-0 pb-4">
            {idx > 0 && (
              <div className="flex items-center justify-between pb-1">
                <span className="text-[16px] font-semibold text-[#038AF9]">Campus #{idx + 1}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveCampus(campus.id)}
                  className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 cursor-pointer font-medium"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Remove Campus</span>
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              <input
                type="text"
                placeholder="Campus name"
                {...register(`campuses.${idx}.name`)}
                className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
              <input
                type="text"
                placeholder="Phone number"
                {...register(`campuses.${idx}.phone`)}
                className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
              <input
                type="text"
                placeholder="Website URL"
                {...register(`campuses.${idx}.website`)}
                className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
              <CustomMultiSelect
                placeholder="Add social links"
                options={["LinkedIn", "Instagram", "Facebook", "Twitter / X", "YouTube"]}
                value={campus.social}
                onChange={(val) => {
                  setCampuses((prev) =>
                    prev.map((c) => (c.id === campus.id ? { ...c, social: val } : c))
                  )
                  setValue(`campuses.${idx}.social`, val)
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Admissions email"
                  {...register(`campuses.${idx}.email`)}
                  className="w-full h-11 px-3.5 pr-9 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
                />
                <Info className="w-4 h-4 text-gray-400 absolute right-3 top-3.5" />
              </div>

              <input
                type="text"
                placeholder="Address"
                {...register(`campuses.${idx}.address`)}
                className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />

              <input
                type="text"
                placeholder="Google maps embed code"
                {...register(`campuses.${idx}.maps`)}
                className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />

              {idx === campuses.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddCampus}
                  className="h-11 px-3.5 rounded-xl border border-dashed border-[#038AF9] text-[#038AF9] text-[16px] font-medium flex items-center justify-center gap-1.5 hover:bg-blue-50/50 transition-colors cursor-pointer w-full"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Another Campus</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactSection
