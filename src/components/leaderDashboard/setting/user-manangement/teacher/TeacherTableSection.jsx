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
import AssignClassesSelect from "./AssignClassesSelect"
import ImportTeacherModal from "./ImportTeacherModal"
import AddTeacherModal from "./AddTeacherModal"
import EditTeacherModal from "./EditTeacherModal"
import DeleteTeacherModal from "./DeleteTeacherModal"

const INITIAL_TEACHERS = [
  {
    id: 1,
    name: "Albert Flores",
    email: "albert.flores@example.com",
    subjects: "Chemistry, Math",
    classes: ["1B", "2B", "3A"],
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    email: "tanya.hill@example.com",
    subjects: "Math, Chemistry",
    classes: [],
  },
  {
    id: 3,
    name: "Wade Warren",
    email: "jessica.hanson@example.com",
    subjects: "Physics, Math",
    classes: ["1B", "2B", "3A"],
  },
  {
    id: 4,
    name: "Kristin Watson",
    email: "felicia.reid@example.com",
    subjects: "Biology, Physics",
    classes: [],
  },
  {
    id: 5,
    name: "Ralph Edwards",
    email: "willie.jennings@example.com",
    subjects: "English, Biology",
    classes: [],
  },
  {
    id: 6,
    name: "Kristin Watson",
    email: "felicia.reid@example.com",
    subjects: "History, English",
    classes: ["1B", "2B", "3A"],
  },
]

const TeacherTableSection = () => {
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS)

  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const [isAddTeacherModalOpen, setIsAddTeacherModalOpen] = useState(false)
  const [editingTeacher, setEditingTeacher] = useState(null)
  const [deletingTeacher, setDeletingTeacher] = useState(null)

  const handleClassesChange = (id, newClasses) => {
    setTeachers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, classes: newClasses } : t))
    )
  }

  const handleAddTeacher = (newTeacher) => {
    setTeachers((prev) => [...prev, newTeacher])
  }

  const handleUpdateTeacher = (updatedTeacher) => {
    setTeachers((prev) =>
      prev.map((t) => (t.id === updatedTeacher.id ? updatedTeacher : t))
    )
  }

  const handleDeleteTeacher = (id) => {
    setTeachers((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6 font-urbanist">
      {/* Header & Action Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Title24 className="text-[#080808]">Teachers</Title24>

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
            onClick={() => setIsAddTeacherModalOpen(true)}
            className="px-4 py-2.5 rounded-xl border border-[#038AF9] text-textPrimary hover:bg-blue-50/50 text-[16px] font-medium transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Teacher</span>
          </button>

          <Select defaultValue="all">
            <SelectTrigger className="h-11 px-3.5 rounded-xl border-gray-200 text-[16px] font-medium text-textPrimary bg-white min-w-[130px] overflow-hidden">
              <SelectValue placeholder="Role Filter" className="truncate text-left whitespace-nowrap" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Role Filter</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="head">Head of Dept</SelectItem>
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
            <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Subject(s)</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Assign Classes</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((row) => (
            <TableRow key={row.id} className="hover:bg-gray-50/50">
              <TableCell className="text-center px-2">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#038AF9] align-middle" />
              </TableCell>
              <TableCell className="text-[16px] font-normal text-[#080808] pl-1">{row.name}</TableCell>
              <TableCell className="text-[16px] font-normal text-[#5A5A5A]">{row.email}</TableCell>
              <TableCell className="text-[16px] font-normal text-[#080808]">{row.subjects}</TableCell>
              <TableCell>
                <AssignClassesSelect
                  selectedClasses={row.classes}
                  onChange={(newCls) => handleClassesChange(row.id, newCls)}
                />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2 text-[#1F1F21]">
                  <button
                    type="button"
                    onClick={() => setEditingTeacher(row)}
                    className="w-7 h-7 rounded-full bg-[rgba(8,8,8,0.04)] flex items-center justify-center hover:bg-gray-200/80 transition-colors cursor-pointer"
                    title="Edit Teacher"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeletingTeacher(row)}
                    className="w-7 h-7 rounded-full bg-[rgba(8,8,8,0.04)] flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer"
                    title="Delete Teacher"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ImportTeacherModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
      />

      <AddTeacherModal
        isOpen={isAddTeacherModalOpen}
        onClose={() => setIsAddTeacherModalOpen(false)}
        onAddTeacher={handleAddTeacher}
      />

      <EditTeacherModal
        isOpen={!!editingTeacher}
        onClose={() => setEditingTeacher(null)}
        teacher={editingTeacher}
        onUpdateTeacher={handleUpdateTeacher}
      />

      <DeleteTeacherModal
        isOpen={!!deletingTeacher}
        onClose={() => setDeletingTeacher(null)}
        teacher={deletingTeacher}
        onDeleteConfirm={handleDeleteTeacher}
      />
    </div>
  )
}

export default TeacherTableSection
