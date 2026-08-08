import React, { useState, useEffect } from "react"
import { Title24 } from "@/components/typho/Title"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import AssignClassesSelect from "../teacher/AssignClassesSelect"
import AssignTeacherSelect from "./AssignTeacherSelect"

const EditStudentModal = ({ isOpen, onClose, student, onUpdateStudent, onAddTeacherClick }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [studentClasses, setStudentClasses] = useState([])
  const [selectedTeachers, setSelectedTeachers] = useState([])

  useEffect(() => {
    if (student) {
      const parts = (student.name || "").split(" ")
      setFirstName(parts[0] || "")
      setLastName(parts.slice(1).join(" ") || "")
      setEmail(student.email || "")
      setStudentClasses(student.class ? student.class.split(", ") : [])
      setSelectedTeachers(student.assignedTeachers || [])
    }
  }, [student])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!student) return
    if (onUpdateStudent) {
      onUpdateStudent({
        ...student,
        name: `${firstName} ${lastName}`.trim(),
        email: email.trim(),
        class: studentClasses.join(", "),
        assignedTeachers: selectedTeachers,
      })
    }
    onClose()
  }

  if (!student) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-[95vw] rounded-3xl p-6 sm:p-8 space-y-6 bg-white border border-gray-200 shadow-2xl font-urbanist overflow-visible">
        <DialogHeader className="p-0 space-y-1 text-left pb-3 border-b border-gray-100">
          <DialogTitle asChild>
            <Title24 className="text-[#080808] font-semibold">Edit Student</Title24>
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
              placeholder="Enter student email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[16px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
            />
          </div>

          {/* Row 3: Class */}
          <div className="flex flex-col gap-4">
            <label className="text-[18px] font-medium text-[#080808]">Class</label>
            <AssignClassesSelect
              selectedClasses={studentClasses}
              onChange={setStudentClasses}
            />
          </div>

          {/* Row 4: Assign Teacher(s) */}
          <div className="flex flex-col gap-4">
            <label className="text-[18px] font-medium text-[#080808]">Assign Teacher(s)</label>
            <AssignTeacherSelect
              selectedTeachers={selectedTeachers}
              onChange={setSelectedTeachers}
              onAddTeacherClick={onAddTeacherClick}
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl border border-gray-200 text-textPrimary hover:bg-gray-50 text-[16px] font-medium transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium transition-colors cursor-pointer shadow-xs"
            >
              Save Changes
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditStudentModal
