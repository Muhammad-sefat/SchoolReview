import React, { useState } from "react"
import { Download, X, FileText } from "lucide-react"
import { Title24, Title20 } from "@/components/typho/Title"
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

const ImportStudentModal = ({ isOpen, onClose }) => {
  const [uploadedFile, setUploadedFile] = useState("student.csv")

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[850px] w-[95vw] rounded-3xl p-6 sm:p-8 space-y-6 bg-white border border-gray-200 shadow-2xl font-urbanist max-h-[90vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <DialogHeader className="p-0 space-y-1 text-left">
          <DialogTitle asChild>
            <Title24 className="text-[#080808] font-semibold">Upload Students (CSV)</Title24>
          </DialogTitle>
          <p className="text-[16px] font-normal text-textPrimary mt-2">
            Upload your student list using our CSV template.
          </p>
        </DialogHeader>

        {/* Box 1: Download CSV Template */}
        <div className="p-5 rounded-2xl border border-gray-200 bg-white space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <Title20 className="text-[#080808] font-semibold">Download CSV Template</Title20>
              <p className="text-[16px] font-normal text-textPrimary mt-2">
                Use this template to format your student data correctly.
              </p>
            </div>
            <button
              type="button"
              className="px-4 py-2 rounded-xl border border-[#038AF9] text-[#038AF9] text-[14px] font-medium flex items-center gap-2 hover:bg-blue-50/50 cursor-pointer shrink-0 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Template</span>
            </button>
          </div>

          {/* Template Preview Table */}
          <div className="rounded-xl border border-gray-100 overflow-x-auto bg-gray-50/50 w-full">
            <Table>
              <TableHeader className="bg-gray-100/60">
                <TableRow>
                  <TableHead className="text-[16px] font-medium text-[#5A5A5A]">First Name</TableHead>
                  <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Last Name</TableHead>
                  <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Email</TableHead>
                  <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Class</TableHead>
                  <TableHead className="text-[16px] font-medium text-[#5A5A5A]">Assigned Teacher(s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-transparent">
                  <TableCell className="text-[16px] font-normal text-[#080808]">Emma</TableCell>
                  <TableCell className="text-[16px] font-normal text-[#080808]">Müller</TableCell>
                  <TableCell className="text-[16px] font-normal text-[#5A5A5A]">emma.mueller@school.com</TableCell>
                  <TableCell className="text-[16px] font-normal text-[#080808]">1A</TableCell>
                  <TableCell className="text-[16px] font-normal text-[#080808]">John Smith</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Box 2: Upload Student File (CSV) */}
        <div className="space-y-4">
          <div>
            <Title24 className="text-[#080808] font-medium">Upload Student File (CSV)</Title24>
            <p className="text-[16px] font-normal text-[#5A5A5A] mt-0.5">Accepted format: .csv</p>
          </div>

          <label className="border border-dashed border-blue-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50/40 transition-colors bg-white space-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M10.0005 9.01101C9.16474 8.38194 8.12582 8.00917 7 8.00917C6.83823 8.00917 6.67826 8.01687 6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273" stroke="#5A5A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.5 16L12 13.5L14.5 16M12 21V14.1088" stroke="#5A5A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[14px] text-[#5A5A5A] font-normal pt-1">Drag & drop files here</span>
            <span className="text-xs text-gray-400">or</span>
            <span className="text-[14px] text-[#080808] font-medium underline">Choose files</span>
            <input type="file" accept=".csv" className="hidden" />
          </label>

          {uploadedFile && (
            <div className="flex items-center justify-between gap-4 p-3 rounded-2xl border border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-[15px] font-normal text-[#080808]">{uploadedFile}</span>
              </div>

              <div className="flex-1 max-w-md h-2 bg-gray-200 rounded-full overflow-hidden mx-4">
                <div className="h-full bg-[#038AF9] w-[80%] rounded-full transition-all duration-300" />
              </div>

              <button
                type="button"
                onClick={() => setUploadedFile(null)}
                className="w-6 h-6 rounded-full border border-gray-300 text-gray-500 hover:text-red-500 flex items-center justify-center cursor-pointer shrink-0 transition-colors"
                title="Remove file"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-gray-200 text-[16px] font-medium text-[#5A5A5A] hover:bg-gray-50 cursor-pointer transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium cursor-pointer shadow-xs transition-colors"
          >
            Import Students
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImportStudentModal
