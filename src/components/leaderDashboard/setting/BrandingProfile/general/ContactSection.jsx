import React, { useState } from "react"
import { Info, Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react"
import CustomMultiSelect from "@/components/ui/CustomMultiSelect"
import { Title18 } from "@/components/typho/Title"

const ContactSection = ({ register, setValue }) => {
  const [contactOpen, setContactOpen] = useState(false)
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
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
      <div className="lg:col-span-2 flex items-center gap-2">
        <div className="w-28 sm:w-32 shrink-0">
          <Title18 className="text-[#080808]">Contact</Title18>
        </div>
        <button
          type="button"
          onClick={() => setContactOpen(!contactOpen)}
          className="text-[#038AF9] hover:text-[#0270ce] transition-colors cursor-pointer shrink-0 p-0.5"
        >
          {contactOpen ? <ChevronUp className="w-5 h-5 stroke-[2.25]" /> : <ChevronDown className="w-5 h-5 stroke-[2.25]" />}
        </button>
      </div>

      {contactOpen && (
        <div className="lg:col-span-10 space-y-6 min-w-0">
          {campuses.map((campus, idx) => (
            <div key={campus.id} className="space-y-5 pt-2 first:pt-0 border-b border-gray-100/60 last:border-0 pb-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[16px] font-medium text-[#080808]">
                  Campus #{idx + 1}
                </span>

                {campuses.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveCampus(campus.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                    title="Remove campus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                <input
                  type="text"
                  placeholder="Campus name"
                  {...register(`campuses.${idx}.name`)}
                  className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
                />

                <input
                  type="tel"
                  placeholder="Phone number"
                  {...register(`campuses.${idx}.phone`)}
                  className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
                />

                <input
                  type="url"
                  placeholder="Website address"
                  {...register(`campuses.${idx}.website`)}
                  className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
                />

                <CustomMultiSelect
                  placeholder="Social channels"
                  options={["LinkedIn", "Facebook", "Instagram", "Twitter", "YouTube"]}
                  onChange={(val) => setValue(`campuses.${idx}.social`, val)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-center">
                <input
                  type="email"
                  placeholder="Official Email Address"
                  {...register(`campuses.${idx}.email`)}
                  className="w-full h-11 px-3.5 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
                />

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
      )}
    </div>
  )
}

export default ContactSection
