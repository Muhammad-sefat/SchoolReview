import React, { useState } from "react"
import { Upload, Plus, Pencil, Trash2 } from "lucide-react"
import { Title24 } from "@/components/typho/Title"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import AssignTeacherSelect from "./AssignTeacherSelect"
import ImportStudentModal from "./ImportStudentModal"
import AddStudentModal from "./AddStudentModal"
import EditStudentModal from "./EditStudentModal"
import DeleteStudentModal from "./DeleteStudentModal"

const INITIAL_STUDENTS = [
  {
    id: 1,
    name: "Albert Flores",
    email: "georgia.young@example.com",
    class: "1B",
    assignedTeachers: ["John Smith", "Conner", "Teacher A", "Teacher B", "Teacher C"],
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    email: "tanya.hill@example.com",
    class: "2A",
    assignedTeachers: [],
  },
  {
    id: 3,
    name: "Wade Warren",
    email: "jessica.hanson@example.com",
    class: "3A",
    assignedTeachers: [],
  },
  {
    id: 4,
    name: "Kristin Watson",
    email: "felicia.reid@example.com",
    class: "3B",
    assignedTeachers: [],
  },
  {
    id: 5,
    name: "Ralph Edwards",
    email: "willie.jennings@example.com",
    class: "CA",
    assignedTeachers: ["Eleanor Pena", "Eleanor Pena", "Teacher A", "Teacher B"],
  },
  {
    id: 6,
    name: "Kristin Watson",
    email: "felicia.reid@example.com",
    class: "CB",
    assignedTeachers: ["Darlene Robertson", "Leslie", "Teacher A", "Teacher B", "Teacher C", "Teacher D", "Teacher E"],
  },
]

const StudentTableSection = () => {
  const [students, setStudents] = useState(INITIAL_STUDENTS)

  // Modals state
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false)
  const [editingStudent, setEditingStudent] = useState(null)
  const [deletingStudent, setDeletingStudent] = useState(null)

  const handleTeachersChange = (id, newTeachers) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, assignedTeachers: newTeachers } : s))
    )
  }

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
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6 font-urbanist">
      {/* Header & Action Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Title24 className="text-[#080808]">Students</Title24>

        <div className="flex items-center gap-3 shrink-0 whitespace-nowrap">
          <button
            type="button"
            onClick={() => setIsImportModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium transition-colors shadow-xs cursor-pointer flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            <span>Import CSV</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAddStudentModalOpen(true)}
            className="px-4 py-2.5 rounded-xl border border-[#038AF9] text-textPrimary hover:bg-blue-50/50 text-[16px] font-medium transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Student</span>
          </button>

          <Select defaultValue="all">
            <SelectTrigger className="h-11 px-3.5 rounded-xl border-gray-200 text-[16px] font-medium text-textPrimary bg-white min-w-[130px] overflow-hidden">
              <SelectValue placeholder="All Class" className="truncate text-left whitespace-nowrap" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Class</SelectItem>
              <SelectItem value="1a">Class 1A</SelectItem>
              <SelectItem value="1b">Class 1B</SelectItem>
              <SelectItem value="2a">Class 2A</SelectItem>
              <SelectItem value="3a">Class 3A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center px-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#038AF9] align-middle" />
            </TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] pl-1">Name</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Email</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Class</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Assigned Teacher(s)</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((row) => (
            <TableRow key={row.id} className="hover:bg-gray-50/50">
              <TableCell className="text-center px-2">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#038AF9] align-middle" />
              </TableCell>
              <TableCell className="text-[16px] font-normal text-[#080808] pl-1">{row.name}</TableCell>
              <TableCell className="text-[16px] font-normal text-[#5A5A5A]">{row.email}</TableCell>
              <TableCell className="text-[16px] font-normal text-[#080808]">{row.class}</TableCell>
              <TableCell>
                <AssignTeacherSelect
                  selectedTeachers={row.assignedTeachers}
                  onChange={(newTeachers) => handleTeachersChange(row.id, newTeachers)}
                />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2 text-[#1F1F21]">
                  <button
                    type="button"
                    onClick={() => setEditingStudent(row)}
                    className="w-7 h-7 rounded-full bg-[rgba(8,8,8,0.04)] flex items-center justify-center hover:bg-gray-200/80 transition-colors cursor-pointer"
                    title="Edit Student"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeletingStudent(row)}
                    className="w-7 h-7 rounded-full bg-[rgba(8,8,8,0.04)] flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer"
                    title="Delete Student"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ImportStudentModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
      />

      <AddStudentModal
        isOpen={isAddStudentModalOpen}
        onClose={() => setIsAddStudentModalOpen(false)}
        onAddStudent={handleAddStudent}
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
    </div>
  )
}

export default StudentTableSection
