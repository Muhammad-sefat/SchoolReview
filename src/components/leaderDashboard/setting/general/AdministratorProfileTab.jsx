import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { X } from "lucide-react"

const EditAvatarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M11.7255 3.2382C12.3465 2.56539 12.657 2.22899 12.9869 2.03277C13.783 1.55929 14.7633 1.54457 15.5727 1.99393C15.9081 2.18016 16.2281 2.50709 16.8682 3.16096C17.5083 3.81483 17.8284 4.14176 18.0106 4.48443C18.4506 5.31126 18.4361 6.31265 17.9726 7.12591C17.7806 7.46296 17.4512 7.78014 16.7926 8.41449L8.95623 15.9622C7.70813 17.1644 7.08406 17.7655 6.30411 18.0701C5.52416 18.3747 4.66673 18.3523 2.95186 18.3075L2.71855 18.3014C2.19649 18.2877 1.93546 18.2809 1.78372 18.1087C1.63198 17.9365 1.6527 17.6706 1.69413 17.1388L1.71663 16.8501C1.83324 15.3532 1.89154 14.6049 2.18382 13.9322C2.4761 13.2594 2.98026 12.7132 3.98859 11.6207L11.7255 3.2382Z" stroke="#038AF9" strokeWidth="1.25" strokeLinejoin="round"/>
    <path d="M10.8359 3.33301L16.6693 9.16634" stroke="#038AF9" strokeWidth="1.25" strokeLinejoin="round"/>
    <path d="M11.6641 18.333H18.3307" stroke="#038AF9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AdministratorProfileTab = () => {
  const [avatarPreview, setAvatarPreview] = useState("")

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Administrator Profile Form Data:", data)
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setAvatarPreview(URL.createObjectURL(file))
    }
  }

  const removeAvatar = () => {
    setAvatarPreview("")
  }

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-8 font-urbanist">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Larger Avatar Container (w-28 h-28 / 112px) */}
        <div className="relative w-28 h-28 shrink-0">
          <div className="w-28 h-28 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden shadow-2xs">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Administrator Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg className="w-14 h-14 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            )}
          </div>

          {/* Close (X) button when avatar image is uploaded */}
          {avatarPreview && (
            <button
              type="button"
              onClick={removeAvatar}
              className="absolute top-0 right-0 z-10 w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer shadow-xs transition-colors"
              title="Remove image"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Edit Avatar Badge Icon */}
          <label className="bg-[#ffffff] border border-[#F7F7F7] shadow-xs p-2 rounded-full absolute bottom-0 right-0 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-center">
            <EditAvatarIcon />
            <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
          </label>
        </div>

        {/* Input Groups */}
        <div className="space-y-[20px]">
          {/* Row 1: First name & Last name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            <div className="flex flex-col gap-[14px]">
              <label className="text-[20px] font-medium text-[#080808]">First name</label>
              <input
                type="text"
                placeholder="Enter first name"
                {...register("firstName")}
                className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
            </div>

            <div className="flex flex-col gap-[14px]">
              <label className="text-[20px] font-medium text-[#080808]">Last name</label>
              <input
                type="text"
                placeholder="Enter last name"
                {...register("lastName")}
                className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            <div className="flex flex-col gap-[14px]">
              <label className="text-[20px] font-medium text-[#080808]">Email</label>
              <input
                type="email"
                placeholder="Enter your school email."
                {...register("email")}
                className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
            </div>

            <div className="flex flex-col gap-[14px]">
              <label className="text-[20px] font-medium text-[#080808]">Phone number</label>
              <input
                type="text"
                placeholder="e.g. +00 000 000 0000"
                {...register("phone")}
                className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium transition-colors shadow-xs cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdministratorProfileTab
