import React, { useState } from "react"
import { Video, FileText, Trash2, X } from "lucide-react"
import { Title24 } from "@/components/typho/Title"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const UploadCloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M10.0005 9.01101C9.16474 8.38194 8.12582 8.00917 7 8.00917C6.83823 8.00917 6.67826 8.01687 6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273"
      stroke="#5A5A5A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 16L12 13.5L14.5 16M12 21V14.1088"
      stroke="#5A5A5A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GetHelpModal = ({ isOpen, onClose }) => {
  const [issueText, setIssueText] = useState("")
  const [files, setFiles] = useState([])

  const handleClose = () => {
    setIssueText("")
    setFiles([])
    onClose()
  }

  const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files)
    if (files.length + selected.length > 2) {
      alert("You can upload up to 2 files")
      return
    }
    const newFiles = selected.map((f, idx) => ({
      id: Date.now() + idx,
      name: f.name,
      type: f.name.endsWith(".mp4") || f.name.endsWith(".mov") || f.name.endsWith(".avi") ? "video" : "file",
      progress: 100,
    }))
    setFiles((prev) => [...prev, ...newFiles])
  }

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Get Help Submitted:", { issueText, files })
    handleClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl w-[95vw] rounded-3xl p-8 space-y-4 bg-white border border-gray-200 shadow-2xl font-urbanist">
        <DialogHeader className="p-0 space-y-1 text-left pb-3 border-b border-gray-100">
          <DialogTitle asChild>
            <Title24 className="text-[#080808] font-semibold">Get Help</Title24>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* How can we help you? */}
          <div className="space-y-2">
            <label className="text-[18px] font-medium text-[#080808] block">How can we help you?</label>
            <textarea
              rows={4}
              value={issueText}
              onChange={(e) => setIssueText(e.target.value)}
              placeholder="Describe your issue or question..."
              className="w-full rounded-2xl border border-gray-200 p-4 text-[16px] font-normal text-textPrimary placeholder:text-[#5A5A5A] outline-none focus:border-[#038AF9] bg-white resize-none"
            />
          </div>

          {/* Attachment (Optional) */}
          <div className="space-y-2">
            <label className="text-[18px] font-medium text-[#080808] block">Attachment (Optional)</label>

            {/* Drag & Drop Box */}
            <div className="border border-dashed border-[#BEE0FF] bg-[#F0F8FF]/30 rounded-2xl p-5 text-center space-y-1.5 flex flex-col items-center justify-center">
              <UploadCloudIcon />
              <p className="text-[14px] font-normal text-secondary">Drag & drop files here</p>
              <p className="text-[14px] font-normal text-secondary">or</p>
              <label className="text-[14px] font-medium text-textPrimary underline cursor-pointer hover:text-[#038AF9] transition-colors">
                Choose files
                <input type="file" multiple className="hidden" onChange={handleFileSelect} />
              </label>
            </div>

            {/* File List Items */}
            {files.length > 0 && (
              <div className="space-y-2 pt-1">
                {files.map((file) => (
                  <div key={file.id} className="flex items-center justify-between gap-3 text-sm">
                    <div className="flex items-center gap-2 text-textPrimary flex-1 min-w-0">
                      {file.type === "video" ? (
                        <Video className="w-4 h-4 text-gray-500 shrink-0" />
                      ) : (
                        <FileText className="w-4 h-4 text-gray-500 shrink-0" />
                      )}
                      <span className="truncate text-[15px] font-normal">{file.name}</span>

                      {file.progress < 100 && (
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden flex-1 mx-2">
                          <div
                            className="bg-[#038AF9] h-full rounded-full transition-all"
                            style={{ width: `${file.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFile(file.id)}
                      className="text-gray-400 hover:text-red-500 cursor-pointer p-1 transition-colors shrink-0"
                      title="Remove file"
                    >
                      {file.type === "video" ? <Trash2 className="w-4 h-4" /> : <X className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Counter Footer */}
            <div className="flex items-center justify-between text-[14px] font-normal text-secondary pt-0.5">
              <span>You can upload up to 2 files</span>
              <span>{files.length}/2 selected</span>
            </div>
          </div>

          {/* Modal Footer Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 rounded-xl border border-gray-200 text-[18px] font-medium text-[#080808] hover:bg-gray-50 cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-primary hover:bg-[#0274d4] text-white text-[18px] font-semibold cursor-pointer shadow-xs transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default GetHelpModal
