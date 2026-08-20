import React, { useState } from "react"
import { Video, FileText, Trash2, X } from "lucide-react"
import { Title24 } from "@/components/typho/Title"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import DragDropUploadBox from "@/components/leaderDashboard/setting/BrandingProfile/common/DragDropUploadBox"

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
      <DialogContent className="max-w-xl w-[95vw] rounded-3xl p-6  bg-white border border-gray-200 shadow-2xl font-urbanist">
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

            {/* Common Drag & Drop Upload Box */}
            <DragDropUploadBox
              onChange={handleFileSelect}
              multiple={true}
              subLabel="Drag & drop files here"
              chooseText="Choose files"
              className="w-full h-36"
            />

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
              className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[18px] font-medium cursor-pointer shadow-xs transition-colors"
            >
              Send Request
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default GetHelpModal
