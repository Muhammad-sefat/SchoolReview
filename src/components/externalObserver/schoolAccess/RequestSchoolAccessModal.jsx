import React, { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const RequestSchoolAccessModal = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    school: "",
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmitSuccess) {
      onSubmitSuccess(formData)
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[580px] w-[95vw] rounded-[24px] p-6 sm:p-8 space-y-6 bg-white border border-gray-100 shadow-2xl font-urbanist max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="space-y-2 pb-5 border-b border-dashed border-gray-200 text-left pr-6">
          <h2 className="text-[24px] font-semibold text-[#080808] leading-[36px]">
            Request School Access
          </h2>
          <p className="text-[16px] font-normal text-[#080808] leading-[24px]">
            Schools review each request before granting observation access.
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-left font-urbanist">
          {/* Field 1: School */}
          <div className="space-y-4">
            <label className="block text-[18px] font-medium text-[#080808]">
              School
            </label>
            <input
              type="text"
              placeholder="Search for a school..."
              value={formData.school}
              onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              className="w-full h-12 px-4 bg-white border border-gray-200/90 rounded-[12px] text-[15px] text-[#080808] placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] transition-all"
              required
            />
          </div>

          {/* Field 2: Name */}
          <div className="space-y-4">
            <label className="block text-[18px] font-medium text-[#080808]">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-12 px-4 bg-white border border-gray-200/90 rounded-[12px] text-[15px] text-[#080808] placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] transition-all"
              required
            />
          </div>

          {/* Field 3: Email */}
          <div className="space-y-4">
            <label className="block text-[18px] font-medium text-[#080808]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-12 px-4 bg-white border border-gray-200/90 rounded-[12px] text-[15px] text-[#080808] placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] transition-all"
              required
            />
          </div>

          {/* Field 4: Message (Optional) */}
          <div className="space-y-4">
            <label className="block text-[18px] font-medium text-[#080808]">
              Message (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Briefly explain why you're requesting access."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-4 bg-white border border-gray-200/90 rounded-[12px] text-[15px] text-[#080808] placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#038AF9] focus:ring-1 focus:ring-[#038AF9] transition-all resize-none"
            />
          </div>

          {/* Modal Action Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full h-12 rounded-[14px] border border-gray-200/90 bg-white hover:bg-gray-50 text-[#080808] font-medium text-base transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full h-12 rounded-[14px] bg-[#038AF9] hover:bg-[#0270ce] text-white font-medium text-base transition-colors cursor-pointer shadow-xs"
            >
              Send Request
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default RequestSchoolAccessModal
