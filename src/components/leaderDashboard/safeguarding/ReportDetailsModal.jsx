import React, { useState, useRef } from "react"
import {
  X,
  Paperclip,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import VoiceInputButton from "../../common/VoiceInputButton"
import MediaPreviewModal from "./MediaPreviewModal"

const ImageIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M2.39844 12.7988L5.97417 9.22307C6.24582 8.95147 6.61426 8.79883 6.99844 8.79883C7.38261 8.79883 7.75105 8.95147 8.02268 9.22307L11.1984 12.3988M11.1984 12.3988L12.3984 13.5988M11.1984 12.3988L12.7742 10.8231C13.0458 10.5515 13.4143 10.3988 13.7984 10.3988C14.1826 10.3988 14.5511 10.5515 14.8227 10.8231L16.7984 12.7988" stroke="#080808" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.4 6.40156C12.6209 6.40156 12.8 6.22247 12.8 6.00156C12.8 5.78065 12.6209 5.60156 12.4 5.60156M12.4 6.40156C12.1791 6.40156 12 6.22247 12 6.00156C12 5.78065 12.1791 5.60156 12.4 5.60156M12.4 6.40156V5.60156" stroke="#080808" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.95838 15.7978C2 14.6757 2 12.9838 2 9.6C2 6.21622 2 4.52432 2.95838 3.40221C3.09446 3.24286 3.24286 3.09446 3.40221 2.95838C4.52432 2 6.21622 2 9.6 2C12.9838 2 14.6757 2 15.7978 2.95838C15.9571 3.09446 16.1055 3.24286 16.2416 3.40221C17.2 4.52432 17.2 6.21622 17.2 9.6C17.2 12.9838 17.2 14.6757 16.2416 15.7978C16.1055 15.9571 15.9571 16.1055 15.7978 16.2416C14.6757 17.2 12.9838 17.2 9.6 17.2C6.21622 17.2 4.52432 17.2 3.40221 16.2416C3.24286 16.1055 3.09446 15.9571 2.95838 15.7978Z" stroke="#080808" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const VideoIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_10880_153984)">
      <path d="M1.33594 7.33268C1.33594 5.1328 1.33594 4.03285 2.01936 3.34944C2.70277 2.66602 3.80272 2.66602 6.0026 2.66602H6.66927C8.86914 2.66602 9.96907 2.66602 10.6525 3.34944C11.3359 4.03285 11.3359 5.1328 11.3359 7.33268V8.66602C11.3359 10.8659 11.3359 11.9658 10.6525 12.6493C9.96907 13.3327 8.86914 13.3327 6.66927 13.3327H6.0026C3.80272 13.3327 2.70277 13.3327 2.01936 12.6493C1.33594 11.9658 1.33594 10.8659 1.33594 8.66602V7.33268Z" stroke="#080808" />
      <path d="M11.3359 5.93789L11.4199 5.86863C12.8304 4.70481 13.5357 4.12289 14.1025 4.40387C14.6693 4.68484 14.6693 5.61635 14.6693 7.47939V8.52192C14.6693 10.385 14.6693 11.3165 14.1025 11.5975C13.5357 11.8784 12.8304 11.2965 11.4199 10.1327L11.3359 10.0634" stroke="#080808" strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="clip0_10880_153984">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const PRIORITY_OPTIONS = [
  { id: "urgent", label: "Urgent", color: "bg-[#E53935]", textColor: "text-[#E53935]" },
  { id: "high", label: "High", color: "bg-[#FE9A00]", textColor: "text-[#FE9A00]" },
  { id: "low", label: "Low", color: "bg-[#66BB6A]", textColor: "text-[#66BB6A]" },
]

const TEACHERS_LIST = [
  "Ms. Jessica Taylor",
  "Mr. Lukas Meier",
  "Dr. Robert Fox",
  "Mrs. Esther Howard",
]

const ReportDetailsModal = ({ report, onClose, onUpdateReport, showAssignTo = true }) => {
  const [priority, setPriority] = useState(report?.priority || null)
  const [assignedTeacher, setAssignedTeacher] = useState(
    report?.assignedTo || ""
  )
  const [status, setStatus] = useState(report?.status || "Close")

  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false)
  const [showAssignModal, setShowAssignModal] = useState(false)
  const [tempTeacher, setTempTeacher] = useState("")

  const [responseText, setResponseText] = useState("")
  // Initial report attachments (static details)
  const [reportAttachments] = useState([
    { name: "Image.png", type: "image", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80" },
    { name: "Video.mp4", type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ])
  // Newly added attachments for the response input box
  const [responseAttachments, setResponseAttachments] = useState([])

  const [previewMedia, setPreviewMedia] = useState(null)
  const fileInputRef = useRef(null)

  if (!report) return null

  const handleVoiceTranscript = (text) => {
    setResponseText((prev) => (prev ? `${prev} ${text}` : text))
  }

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const type = file.type.startsWith("video") ? "video" : "image"
      const newAtt = {
        name: file.name,
        type,
        url: URL.createObjectURL(file),
      }
      setResponseAttachments((prev) => [...prev, newAtt])
    }
  }

  const handleRemoveResponseAttachment = (index) => {
    setResponseAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  const handleAssignSubmit = () => {
    if (tempTeacher) {
      setAssignedTeacher(tempTeacher)
      setShowAssignModal(false)
    }
  }

  return (
    <Dialog open={!!report} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[1200px] w-[95vw] max-h-[90vh] flex flex-col p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-2xl font-urbanist overflow-hidden">
        <DialogHeader className="flex flex-row items-center justify-between border-b border-dashed border-gray-200/80 pb-4 space-y-0 shrink-0">
          <DialogTitle className="font-urbanist text-[20px] font-medium text-[#080808]">
            Report details
          </DialogTitle>
        </DialogHeader>

        {/* Inner Scrollable Body that preserves outer rounded-3xl corners without scrollbar clipping */}
        <div className="flex-1 overflow-y-auto pr-1 pt-2 space-y-6">
          {/* Section 1: Report Metadata & Summary Card with Primary Border */}
          <div className="border border-[#038AF9] rounded-3xl p-5 space-y-4 bg-white relative">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Left Control Pills */}
              <div className="flex flex-wrap items-center gap-3">
                {/* 1. Priority Pill Button */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setShowPriorityDropdown(!showPriorityDropdown)
                    }
                    className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-normal text-textPrimary flex items-center gap-2 transition-colors cursor-pointer hover:bg-gray-50/80"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                    <span className="font-normal text-textPrimary">Urgent</span>
                  </button>

                  {/* Priority Dropdown Options */}
                  {showPriorityDropdown && (
                    <div className="absolute top-12 left-0 z-30 bg-white border border-gray-200 rounded-2xl p-2 shadow-xl w-36 space-y-1 text-sm animate-fadeIn">
                      {PRIORITY_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setPriority(opt)
                            setShowPriorityDropdown(false)
                          }}
                          className="w-full text-left px-3 py-1.5 rounded-xl hover:bg-gray-100 flex items-center justify-between text-textPrimary cursor-pointer"
                        >
                          <span>{opt.label}</span>
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${opt.color}`}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Assign to Pill Button (Only shown in Leader Dashboard, hidden in Internal Teacher) */}
                {showAssignTo && (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowAssignModal(!showAssignModal)}
                      className="px-4 py-2 rounded-full border border-[#038AF9] bg-white text-sm font-normal text-textPrimary flex items-center gap-2 transition-colors cursor-pointer hover:bg-gray-50/80"
                    >
                      <span>Assign to:</span>
                      {assignedTeacher ? (
                        <span className="font-medium text-[#038AF9]">{assignedTeacher}</span>
                      ) : (
                        <span className="w-5 h-5 rounded-full border border-dashed border-[#038AF9] text-[#038AF9] flex items-center justify-center text-sm font-semibold shrink-0">
                          +
                        </span>
                      )}
                    </button>

                    {/* Assign Teacher Modal Dropdown */}
                    {showAssignModal && (
                      <div className="absolute top-12 left-0 z-40 bg-white border border-gray-200 rounded-2xl p-4 shadow-2xl w-64 space-y-3 animate-fadeIn">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                          <span className="text-sm font-bold text-textPrimary">
                            Assign Teacher
                          </span>
                          <button
                            type="button"
                            onClick={() => setShowAssignModal(false)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <Select
                          value={tempTeacher}
                          onValueChange={setTempTeacher}
                        >
                          <SelectTrigger className="rounded-xl border-gray-200 text-sm font-medium text-textPrimary">
                            <SelectValue placeholder="Select a teacher" />
                          </SelectTrigger>
                          <SelectContent zIndex={100}>
                            {TEACHERS_LIST.map((teacher) => (
                              <SelectItem key={teacher} value={teacher}>
                                {teacher}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <Button
                          type="button"
                          onClick={handleAssignSubmit}
                          className="w-full py-2 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-xs font-semibold transition-colors cursor-pointer h-auto"
                        >
                          Assign
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {/* 3. Status Select Dropdown */}
                <div className="min-w-[150px]">
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="rounded-full border border-gray-200 bg-white text-sm font-normal text-textPrimary h-10 px-4">
                      <SelectValue placeholder="Status : Close" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Open">Status : Open</SelectItem>
                      <SelectItem value="Close">Status : Close</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Metadata Badges */}
              <div className="flex flex-wrap items-center gap-2 text-sm font-normal">
                <span className="border-[#EAEAEA] border px-3 py-1 rounded-full text-secondary">
                  {report.category || "Bullying & Harassment"}
                </span>
                <span className="border-[#EAEAEA] border px-3 py-1 rounded-full text-secondary">
                  Reported by: {report.reportedBy || "Anonymous"}
                </span>
                <span className="border-[#EAEAEA] border px-3 py-1 rounded-full text-secondary">
                  {report.date || "Oct 11, 2025 at 2:30 PM"}
                </span>
              </div>
            </div>

            {/* Report Content with 2x Height Blue Left Border */}
            <div className="border-l-2 border-[#038AF9] pl-4 py-4 text-[16px] font-normal text-textPrimary leading-relaxed my-2">
              <p>
                {report.fullText ||
                  "A few classmates created a private group on Instagram where they post edited pictures of people from our class with mean captions. One of them is about me. They also shared the link in our group chat, so everyone saw it. I've blocked them, but new accounts keep tagging me. I don't want to say who I am, but please can someone look into it before it gets worse."}
              </p>
            </div>

            {/* Original Report Attachments List Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {reportAttachments.map((att, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPreviewMedia(att)}
                  className="rounded-[14px] bg-[rgba(8,8,8,0.04)] px-4 py-2 flex items-center gap-2 text-[14px] font-normal text-textPrimary hover:bg-gray-200/80 transition-colors cursor-pointer"
                >
                  {att.type === "video" ? <VideoIconSVG /> : <ImageIconSVG />}
                  <span>{att.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Response Input Section with Primary Border */}
          <div className="border border-[#038AF9] rounded-3xl p-4 bg-white relative space-y-3">
            <div className="flex items-start gap-2">
              {/* Paperclip File Upload Icon */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-gray-500 hover:text-gray-700 p-1.5 cursor-pointer mt-0.5"
                title="Attach file"
              >
                <Paperclip className="w-4 h-4" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                accept="image/*,video/*"
              />

              {/* Voice Input Button */}
              <VoiceInputButton
                onTranscript={handleVoiceTranscript}
                className="mt-0.5 text-gray-500 hover:text-gray-700"
              />

              {/* Textarea */}
              <textarea
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
                placeholder="Add a message..."
                className="w-full h-16 bg-transparent border-none outline-none resize-none text-[16px] font-normal text-textPrimary placeholder-gray-400 focus:ring-0 p-1"
              />
            </div>

            {/* Newly Uploaded Response Attachments List Pills */}
            {responseAttachments.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
                {responseAttachments.map((att, idx) => (
                  <div
                    key={idx}
                    className="rounded-[14px] bg-[rgba(8,8,8,0.04)] px-3 py-1.5 text-xs font-medium text-textPrimary flex items-center gap-2"
                  >
                    {att.type === "video" ? <VideoIconSVG /> : <ImageIconSVG />}
                    <span
                      onClick={() => setPreviewMedia(att)}
                      className="cursor-pointer hover:underline"
                    >
                      {att.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveResponseAttachment(idx)}
                      className="text-gray-400 hover:text-red-500 cursor-pointer"
                      title="Remove file"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Right Send Button */}
            <div className="flex justify-end pt-1">
              <Button
                type="button"
                onClick={() => {
                  if (responseText || responseAttachments.length > 0) {
                    alert("Response sent successfully!")
                    setResponseText("")
                    setResponseAttachments([])
                  }
                }}
                className="px-6 py-2 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium transition-all shadow-xs cursor-pointer h-auto"
              >
                Send
              </Button>
            </div>
          </div>

          {/* Section 3: History Thread Section */}
          <div className="border border-gray-100 rounded-3xl p-5 space-y-4 bg-gray-50/20">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-[20px] text-[#080808]">
                History
              </h4>
              <span className="text-xs text-secondary">
                Oct 11, 2025 at 2:30 PM
              </span>
            </div>

            {/* Reporter Message Bubble: border-radius: 6px 16px 16px 16px; border: 1px solid #E6F3FE; background: #FDFDFD */}
            <div
              style={{ borderRadius: "6px 16px 16px 16px" }}
              className="border border-[#E6F3FE] bg-[#FDFDFD] p-4 text-[16px] font-normal text-textPrimary leading-relaxed max-w-2xl"
            >
              <p>
                A few classmates created a private group on Instagram where
                they post edited pictures of people from our class with mean
                captions. One of them is about me. They also shared the link
                in our group chat, so everyone saw it.
              </p>
            </div>

            {/* School Response Message Bubble: border-radius: 16px 8px 16px 16px; border: 1px solid #D9EDFE; background: #FDFDFD */}
            <div
              style={{ borderRadius: "16px 8px 16px 16px" }}
              className="ml-auto border border-[#D9EDFE] bg-[#FDFDFD] p-4 text-[16px] font-normal text-textPrimary leading-relaxed max-w-2xl space-y-2"
            >
              <h5 className="font-semibold text-[18px] text-[#080808]">School response</h5>
              <p className="text-[16px] font-normal text-textPrimary">
                Thank you for bringing this to our attention. We're sorry to
                hear about what you've experienced. Your report has been
                received and will be reviewed by the school's safeguarding
                team as a priority. We take reports of online bullying and
                harassment seriously and will investigate the information
                you've provided. If there is anything else you would like to
                share or if the situation changes, please reply to this
                message. Thank you for speaking up.
              </p>
            </div>

            {/* Bottom Pagination Controls */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronUp className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                type="button"
                className="w-7 h-7 rounded-full bg-[#038AF9] text-white flex items-center justify-center shadow-xs cursor-pointer"
              >
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Media Preview Modal Overlay */}
        {previewMedia && (
          <MediaPreviewModal
            media={previewMedia}
            onClose={() => setPreviewMedia(null)}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

export default ReportDetailsModal
