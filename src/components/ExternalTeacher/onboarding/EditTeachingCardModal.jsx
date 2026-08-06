import React, { useState, useRef } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { X, Pencil } from "lucide-react"
import externalAvatar from "@/assets/images/externalAvatar.png"

const EditTeachingCardModal = ({ isOpen, onClose, initialData, onSave }) => {
  const [name, setName] = useState(initialData?.name || "jenny Wilson")
  const [subject, setSubject] = useState(initialData?.subject || "Mathematics")
  const [avatarPreview, setAvatarPreview] = useState(initialData?.avatar || externalAvatar)
  const fileInputRef = useRef(null)

  if (!isOpen) return null

  const handleAvatarFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatarPreview(imageUrl)
    }
  }

  const handleSave = () => {
    if (onSave) {
      onSave({ name, subject, avatar: avatarPreview })
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[540px] w-[92vw] rounded-[32px] p-6 sm:p-8 space-y-6 bg-white border border-gray-100 shadow-2xl font-urbanist">
        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleAvatarFileChange}
          className="hidden"
        />

        {/* Header */}
        <DialogHeader className="p-0 space-y-0 text-left flex flex-row items-center justify-between border-b border-dashed border-gray-200 pb-4">
          <DialogTitle asChild>
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#080808]">
              Edit Your Teaching Card
            </h2>
          </DialogTitle>
        </DialogHeader>

        {/* Avatar Image with edit badge */}
        <div className="flex items-center pt-2">
          <div className="relative w-20 h-20">
            <img
              src={avatarPreview}
              alt="Avatar"
              className="w-20 h-20 rounded-2xl object-cover border border-gray-100 shadow-xs"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 shadow-xs hover:bg-gray-50 transition-colors cursor-pointer"
              title="Upload new avatar"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Name Field */}
          <div className="flex flex-col gap-4">
            <label className="text-[16px] font-medium text-[#080808]">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Mathematics"
              className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-base text-[#080808] focus:outline-hidden focus:border-[#038AF9] transition-colors"
            />
          </div>

          {/* Subject Field */}
          <div className="flex flex-col gap-4">
            <label className="text-[16px] font-medium text-[#080808]">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Mathematics"
              className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-base text-[#080808] focus:outline-hidden focus:border-[#038AF9] transition-colors"
            />
            <p className="text-sm font-normal text-secondary mt-1">
              Enter multiple subjects separated by commas (e.g., Math, English, Science).
            </p>
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <button
            type="button"
            onClick={onClose}
            style={{ borderRadius: "16px", background: "#F7F7F7" }}
            className="w-full py-3 px-6 text-base font-semibold text-[#080808] border border-gray-200/60 hover:bg-gray-200 transition-colors cursor-pointer bg-[#F7F7F7]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="w-full py-3 px-6 text-base font-medium text-white bg-[#038AF9] hover:bg-[#0270ce] rounded-2xl transition-colors cursor-pointer shadow-xs"
          >
            Save Changes
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditTeachingCardModal
