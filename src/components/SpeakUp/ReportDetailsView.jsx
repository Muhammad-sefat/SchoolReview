import React, { useState, useRef } from "react"
import { Paperclip, FileText, X } from "lucide-react"
import VoiceInputButton from "@/components/common/VoiceInputButton"

const InfoNoticeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path d="M10.0013 18.3327C14.6037 18.3327 18.3346 14.6017 18.3346 9.99935C18.3346 5.39698 14.6037 1.66602 10.0013 1.66602C5.39893 1.66602 1.66797 5.39698 1.66797 9.99935C1.66797 14.6017 5.39893 18.3327 10.0013 18.3327Z" stroke="#080808" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 13.334V9.58398" stroke="#080808" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 6.67435V6.66602" stroke="#080808" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ReportDetailsView = () => {
  const [replyMessage, setReplyMessage] = useState("")
  const [attachedFile, setAttachedFile] = useState(null)
  const fileInputRef = useRef(null)

  const [messages, setMessages] = useState([
    {
      id: "m1",
      sender: "user",
      title: "You reported",
      text: "A few classmates created a private group on Instagram where they post edited pictures of people from our class with mean captions. One of them is about me. They also shared the link in our group chat, so everyone saw it.",
      timestamp: "Oct 11, 2025 at 2:30 PM",
    },
    {
      id: "m2",
      sender: "school",
      title: "School response",
      text: "Thank you for bringing this to our attention. Our administrative team is investigating the incident and will take appropriate measures to support all affected students.",
      timestamp: "Oct 11, 2025 at 2:30 PM",
    },
  ])

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (file) setAttachedFile(file)
  }

  const handleSendReply = () => {
    if (!replyMessage.trim() && !attachedFile) return
    const newMsg = {
      id: `m-${Date.now()}`,
      sender: "user",
      title: "You reported",
      text: replyMessage,
      timestamp: "Just now",
    }
    setMessages((prev) => [...prev, newMsg])
    setReplyMessage("")
    setAttachedFile(null)
  }

  return (
    <div className="space-y-6 font-urbanist max-w-[800px] mx-auto py-2">
      {/* Header Title & Status Badge */}
      <div className="text-center space-y-3">
        <h2 className="text-[28px] font-semibold text-[#080808]">Your report</h2>

        {/* Status Badge: Under review by your school */}
        <div>
          <span
            className="px-4 py-1.5 rounded-[12px] inline-flex items-center justify-center text-[16px] font-normal"
            style={{
              color: "#FE9A00",
              border: "1px solid #FE9A00",
              background: "rgba(254, 154, 0, 0.04)",
            }}
          >
            Under review by your school
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-border/40 my-4" />

      {/* Messages Timeline Container */}
      <div className="space-y-6">
        {messages.map((msg) => {
          const isUser = msg.sender === "user"

          return (
            <div key={msg.id} className="space-y-1.5">
              {/* Chat Bubble */}
              <div
                className={`p-5 w-full max-w-[90%] transition-all ${
                  isUser
                    ? "mr-auto rounded-tl-[8px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px]"
                    : "ml-auto rounded-tl-[16px] rounded-tr-[8px] rounded-br-[16px] rounded-bl-[16px]"
                }`}
                style={{
                  border: "1px solid #E6F3FE",
                  background: "#FDFDFD",
                }}
              >
                <h3 className="text-[20px] font-medium text-[#080808] mb-2 leading-tight">
                  {msg.title}
                </h3>
                <p className="text-[16px] font-normal text-textPrimary leading-relaxed">
                  {msg.text}
                </p>
              </div>

              {/* Timestamp */}
              <div
                className={`text-[12px] text-muted-foreground px-1 ${
                  isUser ? "text-left" : "text-right"
                }`}
              >
                {msg.timestamp}
              </div>
            </div>
          )
        })}
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Reply Textarea Container */}
      <div className="w-full rounded-xl border border-border/80 bg-background p-4 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all space-y-3">
        {/* Paperclip & Mic Icons */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-1 rounded-full hover:text-foreground hover:bg-muted/40 transition-colors cursor-pointer"
            title="Attach file"
          >
            <Paperclip className="w-4 h-4" />
          </button>

          <VoiceInputButton
            onTranscript={(transcript) => {
              setReplyMessage((prev) => (prev ? `${prev} ${transcript}` : transcript))
            }}
          />

          <span className="text-sm text-muted-foreground/70 ml-1">Add a message...</span>
        </div>

        <textarea
          rows={3}
          value={replyMessage}
          onChange={(e) => setReplyMessage(e.target.value)}
          placeholder=""
          className="w-full bg-transparent text-base text-foreground placeholder:text-muted-foreground/70 resize-none focus:outline-none"
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
              onClick={() => setAttachedFile(null)}
              className="p-0.5 rounded-full hover:bg-muted text-muted-foreground hover:text-destructive transition-colors cursor-pointer ml-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Avoid Names Info Banner */}
      <div
        className="p-3.5 flex items-center gap-2.5"
        style={{
          borderRadius: "8px",
          border: "1px solid #D9EDFE",
          background: "rgba(3, 138, 249, 0.08)",
        }}
      >
        <InfoNoticeIcon />
        <span className="text-[16px] font-normal text-textPrimary">
          Avoid names or identifying details unless you feel safe sharing them them.
        </span>
      </div>

      {/* Action Button & Sub-text */}
      <div className="space-y-2 pt-1 text-center">
        <button
          type="button"
          onClick={handleSendReply}
          className="w-full h-12 bg-[#038AF9] hover:bg-[#038AF9]/90 text-white font-semibold text-[16px] rounded-xl shadow-sm transition-all cursor-pointer active:scale-[0.99]"
        >
          Send Reply
        </button>

        <p className="text-[16px] text-secondary font-normal">
          Your reply remains confidential and anonymous.
        </p>
      </div>
    </div>
  )
}

export default ReportDetailsView
