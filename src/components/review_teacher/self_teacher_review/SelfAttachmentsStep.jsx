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
        <h4 className="text-base font-semibold text-foreground">
          Upload Supporting Material
        </h4>
        <p className="text-xs text-muted-foreground font-normal">
          Upload videos or documents that support this review.
        </p>
      </div>

      {/* Drag & Drop Box */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="w-full py-8 px-4 border border-dashed border-border/80 rounded-2xl bg-background hover:bg-muted/20 transition-colors cursor-pointer flex flex-col items-center justify-center text-center space-y-2"
      >
        <UploadCloud className="w-8 h-8 text-muted-foreground/70 stroke-[1.5]" />
        <p className="text-xs text-muted-foreground">
          Drag & drop files here
        </p>
        <span className="text-[11px] text-muted-foreground">or</span>
        <button
          type="button"
          className="text-xs font-semibold text-primary underline hover:text-primary/80 cursor-pointer"
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
                <span className="text-xs font-medium text-foreground truncate">
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
                className="text-muted-foreground/70 hover:text-destructive transition-colors p-1 cursor-pointer"
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
      <div className="flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/40 pt-3">
        <span>You can upload up to 4 files</span>
        <span>{files.length}/4 selected</span>
      </div>
    </div>
  )
}

export default SelfAttachmentsStep
