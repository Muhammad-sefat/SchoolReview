import React, { useState, useEffect } from "react"
import { Title24 } from "@/components/typho/Title"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import AssignClassesSelect from "./AssignClassesSelect"

const EditTeacherModal = ({ isOpen, onClose, teacher, onUpdateTeacher }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subjects, setSubjects] = useState("")
  const [selectedClasses, setSelectedClasses] = useState([])

  useEffect(() => {
    if (teacher) {
      const parts = (teacher.name || "").split(" ")
      setFirstName(parts[0] || "")
      setLastName(parts.slice(1).join(" ") || "")
      setEmail(teacher.email || "")
      setSubjects(teacher.subjects || "")
      setSelectedClasses(teacher.classes || [])
    }
  }, [teacher])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!teacher) return
    if (onUpdateTeacher) {
      onUpdateTeacher({
        ...teacher,
        name: `${firstName} ${lastName}`.trim(),
        email: email.trim(),
        subjects: subjects.trim(),
        classes: selectedClasses,
      })
    }
    onClose()
  }

  if (!teacher) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-[95vw] rounded-3xl p-6 sm:p-8 space-y-6 bg-white border border-gray-200 shadow-2xl font-urbanist overflow-visible">
        <DialogHeader className="p-0 space-y-1 text-left pb-3 border-b border-gray-100">
          <DialogTitle asChild>
            <Title24 className="text-[#080808] font-semibold">Edit a Teacher</Title24>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-4">
              <label className="text-[18px] font-medium text-[#080808]">First name</label>
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[18px] font-medium text-[#080808]">Last name</label>
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
            </div>
          </div>

          {/* Row 2: Email */}
          <div className="flex flex-col gap-4">
            <label className="text-[18px] font-medium text-[#080808]">Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
            />
          </div>

          {/* Row 3: Subjects */}
          <div className="flex flex-col gap-4">
            <label className="text-[18px] font-medium text-[#080808]">Subjects</label>
            <input
              type="text"
              placeholder="Select subject(s)"
              value={subjects}
              onChange={(e) => setSubjects(e.target.value)}
              className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
            />
            <p className="text-[13px] font-normal text-gray-400 -mt-2">
              Enter multiple subjects separated by commas (e.g., Math, English, Science).
            </p>
          </div>

          {/* Row 4: Classes (Label on top, select below) */}
          <div className="flex flex-col gap-4">
            <label className="text-[18px] font-medium text-[#080808]">Classes</label>
            <AssignClassesSelect
              selectedClasses={selectedClasses}
              onChange={setSelectedClasses}
            />
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl border border-gray-200 text-[16px] font-medium text-[#5A5A5A] hover:bg-gray-50 cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium cursor-pointer shadow-xs transition-colors"
            >
              Update Teacher
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditTeacherModal
