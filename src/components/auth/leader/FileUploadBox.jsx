import React, { useState } from "react"
import { UploadCloud, FileText, X } from "lucide-react"

const FileUploadBox = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      if (onFileSelect) onFileSelect(file)
    }
  }

  const handleRemove = (e) => {
    e.stopPropagation()
    setSelectedFile(null)
    if (onFileSelect) onFileSelect(null)
  }

  return (
    <div className="space-y-2">
      <div className="border border-dashed border-sky-300 rounded-2xl p-5 text-center bg-sky-50/30 hover:bg-sky-50/50 transition-colors relative cursor-pointer group">
        <input
          type="file"
          id="role-document"
          accept=".pdf,.doc,.docx,.jpg,.png"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="flex flex-col items-center justify-center space-y-1">
          <UploadCloud className="h-7 w-7 text-[#5A5A5A]  group-hover:scale-110 transition-transform" />
          <p className="text-[14px] text-primary font-medium">
            Optional: Upload a document to help verify your role.
          </p>
          <span className="text-[14px] text-[#5A5A5A] font-medium underline cursor-pointer">
            Choose files
          </span>
        </div>
      </div>

      {/* Uploaded File Chip */}
      {selectedFile && (
        <div className="flex justify-end pt-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/40 border border-border rounded-lg text-xs text-foreground font-medium">
            <FileText className="h-3.5 w-3.5 text-primary" />
            <span className="truncate max-w-[200px]">{selectedFile.name}</span>
            <button
              type="button"
              onClick={handleRemove}
              className="text-muted-foreground hover:text-destructive cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FileUploadBox
