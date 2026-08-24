import React, { useState, useRef } from "react"
import { Info, Paperclip, FileText, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import VoiceInputButton from "@/components/common/VoiceInputButton"

const WhatHappenedInput = ({ value, onChange, attachedFile, onFileChange }) => {
  const [infoOpen, setInfoOpen] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (file && onFileChange) {
      onFileChange(file)
    }
  }

  const handleRemoveFile = () => {
    if (onFileChange) onFileChange(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  return (
    <div className="space-y-4 md:space-y-[24px]">
      {/* Title + Info Icon Popover */}
      <div className="flex items-center gap-2">
        <h3 className="text-xl md:text-2xl font-semibold text-[#080808]">What happened?</h3>

        <Popover open={infoOpen} onOpenChange={setInfoOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              onMouseEnter={() => setInfoOpen(true)}
              onMouseLeave={() => setInfoOpen(false)}
              className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <Info className="w-5 h-5 text-muted-foreground" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            side="top"
            className="w-[260px] p-3.5 rounded-xl border border-border/80 bg-white shadow-md space-y-2 z-50 pointer-events-auto"
            onMouseEnter={() => setInfoOpen(true)}
            onMouseLeave={() => setInfoOpen(false)}
          >
            {/* Popover Title */}
            <h4 className="text-[16px] font-semibold text-[#080808]">Information</h4>

            {/* Popover Subtitle / List */}
            <ul className="space-y-1.5 text-[12px] font-normal text-textPrimary leading-snug">
              <li className="flex items-start gap-1.5">
                <span>Be specific about the who, what, and when</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span>Use clear, factual language</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span>Only include names if necessary</span>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Textarea Box with icons at bottom */}
      <div className="w-full rounded-xl border border-border/80 bg-background p-4 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all space-y-3">
        <textarea
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Add any information you think may help..."
          className="w-full bg-transparent text-sm md:text-base text-foreground placeholder:text-muted-foreground/70 resize-none focus:outline-none"
        />

        {/* Attached File Preview */}
        {attachedFile && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs w-fit">
            <FileText className="w-4 h-4 text-primary shrink-0" />
            <span className="font-medium text-foreground truncate max-w-[200px]">
              {attachedFile.name}
            </span>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="p-0.5 rounded-full hover:bg-muted text-muted-foreground hover:text-destructive transition-colors cursor-pointer ml-1"
              title="Remove file"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Attachment & Voice Icons at Bottom */}
        <div className="flex items-center gap-2 pt-1 border-t border-border/30 text-muted-foreground">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-1.5 rounded-full hover:text-foreground hover:bg-muted/40 transition-colors cursor-pointer"
            title="Attach file"
          >
            <Paperclip className="w-4 h-4" />
          </button>

          {/* Voice Input Button Component */}
          <VoiceInputButton
            onTranscript={(transcript) => {
              const updatedText = value ? `${value} ${transcript}` : transcript
              onChange(updatedText)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default WhatHappenedInput
