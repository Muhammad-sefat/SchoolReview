import React, { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { X } from "lucide-react"

import AddStudentModal from "@/components/leaderDashboard/setting/user-manangement/student/AddStudentModal"
import ImportStudentModal from "@/components/leaderDashboard/setting/user-manangement/student/ImportStudentModal"
import EditStudentModal from "@/components/leaderDashboard/setting/user-manangement/student/EditStudentModal"
import DeleteStudentModal from "@/components/leaderDashboard/setting/user-manangement/student/DeleteStudentModal"

const AddStudentIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 5V19.002" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.002 12H5" stroke="#1F1F21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ImportCsvIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 17C3 17.93 3 18.395 3.10222 18.7765C3.37962 19.8117 4.18826 20.6204 5.22354 20.8978C5.60504 21 6.07002 21 7 21H17C17.93 21 18.395 21 18.7765 20.8978C19.8118 20.6204 20.6204 19.8117 20.8978 18.7765C21 18.395 21 17.93 21 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5 7.49997C16.5 7.49997 13.1858 3.00001 12 3C10.8142 2.99999 7.5 7.5 7.5 7.5M12 4V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const EditIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M9.38507 2.589C9.88187 2.05075 10.1303 1.78163 10.3942 1.62465C11.0311 1.24587 11.8153 1.23409 12.4629 1.59358C12.7312 1.74256 12.9872 2.00411 13.4993 2.5272C14.0113 3.0503 14.2674 3.31184 14.4132 3.58598C14.7651 4.24744 14.7536 5.04856 14.3828 5.69916C14.2291 5.9688 13.9657 6.22255 13.4388 6.73003L7.16967 12.7682C6.17119 13.73 5.67194 14.2108 5.04798 14.4545C4.42402 14.6982 3.73807 14.6803 2.36618 14.6444L2.17953 14.6396C1.76188 14.6286 1.55305 14.6232 1.43166 14.4854C1.31027 14.3476 1.32684 14.1349 1.35999 13.7095L1.37799 13.4785C1.47128 12.281 1.51792 11.6824 1.75174 11.1442C1.98556 10.606 2.3889 10.169 3.19556 9.29503L9.38507 2.589Z" stroke="#1F1F21" strokeJoin="round" />
    <path d="M8.66406 2.66797L13.3307 7.33464" stroke="#1F1F21" strokeJoin="round" />
    <path d="M9.33594 14.668H14.6693" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DeleteIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path d="M15.6016 4.40234L14.8927 16.0991C14.8415 16.9436 14.1416 17.6023 13.2956 17.6023H5.90753C5.06147 17.6023 4.36164 16.9436 4.31046 16.0991L3.60156 4.40234" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.39844 4.39766H6.39844M6.39844 4.39766L7.39064 2.08252C7.5167 1.78838 7.80593 1.59766 8.12596 1.59766H11.0709C11.3909 1.59766 11.6802 1.78838 11.8062 2.08252L12.7984 4.39766M6.39844 4.39766H12.7984M16.7984 4.39766H12.7984" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.60156 13.1984V8.39844" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.6016 13.1984V8.39844" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const StepTwoStudentsModal = ({ isOpen, onClose }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "Albert Flores", email: "georgia.young@example.com" },
    { id: 2, name: "Savannah Nguyen", email: "tanya.hill@example.com" },
  ])

  // Sub-modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const [editingStudent, setEditingStudent] = useState(null)
  const [deletingStudent, setDeletingStudent] = useState(null)

  const handleAddStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent])
  }

  const handleUpdateStudent = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    )
  }

  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id))
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-[1500px] w-[95vw] rounded-3xl p-6 space-y-8 bg-white border border-gray-100 shadow-2xl font-urbanist max-h-[92vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <DialogHeader className="p-0 space-y-0 text-left flex flex-row items-center justify-between border-b border-dashed border-gray-200 pb-6">
            <DialogTitle asChild>
              <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#080808]">
                Students Who Can Give Feedback
              </h2>
            </DialogTitle>
          </DialogHeader>

          {/* Content Section Container */}
          <div
            style={{ borderRadius: "20px" }}
            className="border border-[#EAEAEA] bg-white p-6 sm:p-8 space-y-6 shadow-xs"
          >
            {/* Header Bar with Students Title and Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-gray-200 pb-6">
              <h3 className="text-[24px] font-semibold text-[#080808]">Students</h3>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(true)}
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #EAEAEA",
                    background: "#FDFDFD",
                  }}
                  className="px-4 py-2.5 text-[#1F1F21] text-base font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <AddStudentIconSVG />
                  <span>Add Student</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsImportModalOpen(true)}
                  className="bg-[#038AF9] hover:bg-[#0270ce] text-white px-5 py-2.5 rounded-[10px] text-base font-medium flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <ImportCsvIconSVG />
                  <span>Import CSV</span>
                </button>
              </div>
            </div>

            {/* Students Shadcn Table */}
            <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#FAFAFA] hover:bg-[#FAFAFA] border-b border-gray-100">
                    <TableHead className="w-10 text-center px-2">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#038AF9] align-middle" />
                    </TableHead>
                    <TableHead className="py-4 px-6 text-base font-medium text-secondary">
                      Name
                    </TableHead>
                    <TableHead className="py-4 px-6 text-base font-medium text-secondary">
                      Email
                    </TableHead>
                    <TableHead className="py-4 px-6 text-right text-base font-medium text-secondary">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow
                      key={student.id}
                      className="hover:bg-gray-50/60 transition-colors border-b border-gray-100 last:border-0"
                    >
                      <TableCell className="text-center px-2">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#038AF9] align-middle" />
                      </TableCell>
                      <TableCell className="py-4 px-6 text-base font-medium text-[#080808]">
                        {student.name}
                      </TableCell>
                      <TableCell className="py-4 px-6 text-base font-normal text-[#080808]">
                        {student.email}
                      </TableCell>
                      <TableCell className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setEditingStudent(student)}
                            style={{
                              borderRadius: "48px",
                              background: "rgba(8, 8, 8, 0.04)",
                            }}
                            className="p-2 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                            title="Edit"
                          >
                            <EditIconSVG />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeletingStudent(student)}
                            style={{
                              borderRadius: "48px",
                              background: "rgba(8, 8, 8, 0.04)",
                            }}
                            className="p-2 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer text-red-600"
                            title="Delete"
                          >
                            <DeleteIconSVG />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end pt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#038AF9] text-white px-8 py-3 rounded-xl font-medium text-[18px] hover:bg-[#0270ce] transition-colors cursor-pointer shadow-xs"
            >
              Save & Continue
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Sub-Modals reused directly from leader dashboard student section */}
      <AddStudentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddStudent={handleAddStudent}
      />

      <ImportStudentModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
      />

      <EditStudentModal
        isOpen={!!editingStudent}
        onClose={() => setEditingStudent(null)}
        student={editingStudent}
        onUpdateStudent={handleUpdateStudent}
      />

      <DeleteStudentModal
        isOpen={!!deletingStudent}
        onClose={() => setDeletingStudent(null)}
        student={deletingStudent}
        onDeleteConfirm={handleDeleteStudent}
      />
    </>
  )
}

export default StepTwoStudentsModal
