import React, { useRef } from "react"
import { Title32 } from "@/components/typho/Title"
import { UploadCloud, Trash2, FileText, Video, X } from "lucide-react"

const SelfAttachmentsStep = ({ files = [], setFiles }) => {
  const fileInputRef = useRef(null)

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files || [])
    if (!selectedFiles.length) return

    const newFilesList = [...files]
    selectedFiles.forEach((file) => {
      if (newFilesList.length < 4) {
        newFilesList.push({
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          progress: 100,
          type: file.type.includes("video") ? "video" : "pdf",
        })
      }
    })
    setFiles(newFilesList)
  }

  const handleRemoveFile = (e, id) => {
    e.stopPropagation()
    setFiles((prevFiles) => prevFiles.filter((f) => f.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Title */}
      <Title32 className="font-medium text-foreground text-[28px] lg:text-[32px]">
        Attachment (Optional)
      </Title32>

      {/* Section Subheading */}
      <div className="space-y-1">
        <h4 className="md:text-[24px] text-xl text-textBlack font-medium ">
          Upload Supporting Material
        </h4>
        <p className="md:text-base text-sm text-textPrimary font-normal">
          Upload videos or documents that support this review.
        </p>
      </div>

      {/* Drag & Drop Box */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="w-full py-8 px-4 border border-dashed border-[#B1DBFD]  rounded-2xl bg-[rgba(255,255,255,0.10)] hover:bg-muted/20 transition-colors cursor-pointer flex flex-col items-center justify-center text-center space-y-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M10.0005 9.01101C9.16474 8.38194 8.12582 8.00917 7 8.00917C6.83823 8.00917 6.67826 8.01687 6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.5 16L12 13.5L14.5 16M12 21V14.1088" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className="text-sm text-secondary">
          Drag & drop files here
        </p>
        <span className="text-sm text-secondary">or</span>
        <button
          type="button"
          className="text-sm font-medium text-textPrimary underline hover:text-primary/80 cursor-pointer"
        >
          Choose files
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          accept="video/*,.pdf,.doc,.docx"
        />
      </div>

      {/* Uploaded Files List (Shown only when files exist) */}
      {files.length > 0 && (
        <div className="space-y-3 pt-2">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between gap-3 text-sm py-2 px-1 border-b border-border/30 last:border-0"
            >
              {/* File Icon & Name */}
              <div className="flex items-center gap-2 min-w-[120px]">
                {file.type === "video" ? (
                  <Video className="w-4 h-4 text-muted-foreground shrink-0" />
                ) : (
                  <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                )}
                <span className="text-sm font-medium text-textPrimary truncate">
                  {file.name}
                </span>
              </div>

              {/* Progress Bar if uploading */}
              {file.progress < 100 ? (
                <div className="flex-1 h-1.5 bg-muted/40 rounded-full overflow-hidden mx-4">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${file.progress}%` }}
                  />
                </div>
              ) : (
                <div className="flex-1" />
              )}

              {/* Action Icon (Trash / Remove) */}
              <button
                type="button"
                onClick={(e) => handleRemoveFile(e, file.id)}
                className="text-secondary hover:text-destructive transition-colors p-1 cursor-pointer"
                title="Remove file"
              >
                {file.progress < 100 ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Footer Info Counter */}
      <div className="flex items-center justify-between text-sm text-textPrimary border-t border-border/40 pt-3">
        <span>You can upload up to 4 files</span>
        <span>{files.length}/4 selected</span>
      </div>
    </div>
  )
}

export default SelfAttachmentsStep
