import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import SpeakUpHeader from "@/components/SpeakUp/SpeakUpHeader"
import CustomInput from "@/components/common/CustomInput"
import VoiceInputButton from "@/components/common/VoiceInputButton"
import { Paperclip, FileText, X } from "lucide-react"

/* Info / Warning SVGs */
const InfoWarningBlueIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 17.5228 6.47715 22 12 22Z" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V12.5" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15.9883V15.9983" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const InfoNoticeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path d="M10.0013 18.3327C14.6037 18.3327 18.3346 14.6017 18.3346 9.99935C18.3346 5.39698 14.6037 1.66602 10.0013 1.66602C5.39893 1.66602 1.66797 5.39698 1.66797 9.99935C1.66797 14.6017 5.39893 18.3327 10.0013 18.3327Z" stroke="#080808" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 13.334V9.58398" stroke="#080808" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 6.67435V6.66602" stroke="#080808" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ReportTrack = () => {
  const navigate = useNavigate()
  const [viewMode, setViewMode] = useState("check") // "check" (Image 1) or "details" (Image 2)
  const [accessCode, setAccessCode] = useState("")
  const [errorBanner, setErrorBanner] = useState(false)

  // Details View Chat state
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
      text: "A few classmates created a private group on Instagram where they post edited pictures of people from our class with mean captions. One of them is about me. They also shared the link in our group chat, so everyone saw it.",
      timestamp: "Oct 11, 2025 at 2:30 PM",
    },
  ])

  const handleCheckCode = () => {
    if (!accessCode.trim()) {
      setErrorBanner(true)
    } else {
      // Transition to details view
      setViewMode("details")
    }
  }

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
    <div className="w-full flex items-center justify-center font-urbanist min-h-screen p-4">
      <div className="w-full max-w-[1000px] bg-white rounded-[20px] border border-primary/40 shadow-xl overflow-hidden flex flex-col my-auto h-[90vh] max-h-[920px]">
        {/* Top Header Banner */}
        <SpeakUpHeader />

        {/* PAGE 1: Check Access Code View (Image 1) */}
        {viewMode === "check" && (
          <div className="px-6 py-8 lg:px-10 flex-1 overflow-y-auto flex flex-col justify-center max-w-[680px] w-full mx-auto space-y-6">
            <h2 className="text-[28px] font-semibold text-[#080808] text-center">
              Check your report
            </h2>

            <div className="space-y-4 md:space-y-[24px]">
              <h3 className="text-[18px] font-semibold text-[#080808]">Access code</h3>
              <CustomInput
                type="text"
                placeholder="Enter the access code you received."
                value={accessCode}
                onChange={(e) => {
                  setAccessCode(e.target.value)
                  setErrorBanner(false)
                }}
              />
            </div>

            {/* Error Banner (Image 1) */}
            {errorBanner && (
              <div className="bg-[#F0F7FF] border border-[#D0E6FF] p-4 rounded-xl space-y-1">
                <div className="flex items-center gap-2">
                  <InfoWarningBlueIcon />
                  <h4 className="text-[16px] font-medium text-[#4A90E2]">
                    Code not found
                  </h4>
                </div>
                <p className="text-[14px] md:text-[16px] font-normal text-textPrimary pl-8">
                  Check the code and try again, or submit a new report.
                </p>
              </div>
            )}

            <div className="pt-2">
              <button
                type="button"
                onClick={handleCheckCode}
                className="w-full h-12 bg-[#038AF9] hover:bg-[#038AF9]/90 text-white font-semibold text-[16px] rounded-xl shadow-sm transition-all cursor-pointer active:scale-[0.99]"
              >
                Check Report
              </button>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => navigate("/speak-up")}
                className="text-[14px] font-medium text-primary hover:underline cursor-pointer"
              >
                Submit a new report instead
              </button>
            </div>
          </div>
        )}

        {/* PAGE 2: Report Details & Conversation View (Image 2) */}
        {viewMode === "details" && (
          <>
            {/* Middle Scrollable Section: Title, Status Badge & Chat Messages */}
            <div className="px-6 py-6 lg:px-10 flex-1 overflow-y-auto min-h-0 space-y-6">
              {/* Header Title & Status Badge */}
              <div className="text-center space-y-3 pt-2">
                <h2 className="text-[28px] font-semibold text-[#080808]">Your report</h2>
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

              <div className="w-full h-px bg-border/40" />

              {/* Chat Message Timeline */}
              <div className="space-y-6">
                {messages.map((msg) => {
                  const isUser = msg.sender === "user"

                  return (
                    <div key={msg.id} className="space-y-1.5">
                      <div
                        className={`p-5 w-full max-w-[85%] transition-all ${
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
            </div>

            {/* Bottom Fixed Section: Reply Input, Notice Banner, Action Button & Confidentiality Note */}
            <div className="px-6 pb-6 pt-3 lg:px-10 lg:pb-6 shrink-0 bg-white border-t border-border/30 space-y-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden"
              />

              {/* Reply Textarea Container */}
              <div className="w-full rounded-xl border border-border/80 bg-background p-4 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all space-y-2">
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
                  rows={2}
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  className="w-full bg-transparent text-base text-foreground placeholder:text-muted-foreground/70 resize-none focus:outline-none"
                />

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

              {/* Action Button & Confidentiality Note */}
              <div className="space-y-2 text-center">
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
          </>
        )}
      </div>
    </div>
  )
}

export default ReportTrack
