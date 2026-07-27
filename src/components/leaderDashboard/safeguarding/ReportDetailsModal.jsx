import React, { useState, useRef } from "react"
import {
  X,
  Paperclip,
  ImageIcon,
  Video,
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

const ReportDetailsModal = ({ report, onClose, onUpdateReport }) => {
  const [priority, setPriority] = useState(report?.priority || null)
  const [assignedTeacher, setAssignedTeacher] = useState(
    report?.assignedTo || ""
  )
  const [status, setStatus] = useState(report?.status || "Open")

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
      <DialogContent className="relative max-w-4xl p-6 md:p-8 max-h-[90vh] overflow-y-auto no-scrollbar rounded-3xl border-none shadow-2xl">
        <DialogHeader className="flex flex-row items-center justify-between border-b border-dashed border-gray-200/80 pb-4 space-y-0">
          <DialogTitle className="font-urbanist text-2xl font-bold text-[#080808]">
            Report details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          {/* Controls Bar & Metadata Card */}
          <div className="border border-gray-100 rounded-3xl p-5 space-y-4 bg-gray-50/20 relative">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Left Control Pills */}
              <div className="flex flex-wrap items-center gap-2.5">
                {/* 1. Priority Pill Button */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setShowPriorityDropdown(!showPriorityDropdown)
                    }
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      priority
                        ? "border-gray-200 bg-white text-[#1F1F21]"
                        : "border-[#038AF9] text-[#038AF9] hover:bg-[#038AF9]/5"
                    }`}
                  >
                    <span>
                      Priority: {priority ? priority.label : "(+)"}
                    </span>
                    {priority && (
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${priority.color}`}
                      />
                    )}
                  </button>

                  {/* Priority Dropdown Options */}
                  {showPriorityDropdown && (
                    <div className="absolute top-10 left-0 z-30 bg-white border border-gray-200 rounded-2xl p-2 shadow-xl w-36 space-y-1 text-xs animate-fadeIn">
                      {PRIORITY_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setPriority(opt)
                            setShowPriorityDropdown(false)
                          }}
                          className="w-full text-left px-3 py-1.5 rounded-xl hover:bg-gray-100 flex items-center justify-between text-[#1F1F21] cursor-pointer"
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

                {/* 2. Assign to Pill Button */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowAssignModal(!showAssignModal)}
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      assignedTeacher
                        ? "border-[#038AF9] bg-[#038AF9]/10 text-[#038AF9]"
                        : "border-[#038AF9] text-[#038AF9] hover:bg-[#038AF9]/5"
                    }`}
                  >
                    <span>Assign to: {assignedTeacher || "(+)"}</span>
                  </button>

                  {/* Assign Teacher Modal Dropdown */}
                  {showAssignModal && (
                    <div className="absolute top-10 left-0 z-40 bg-white border border-gray-200 rounded-2xl p-4 shadow-2xl w-64 space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <span className="text-xs font-bold text-[#1F1F21]">
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
                        <SelectTrigger className="rounded-xl border-gray-200 text-xs font-medium text-[#1F1F21]">
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

                {/* 3. Shadcn Status Select */}
                <div className="w-36">
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="rounded-full border-gray-200 bg-white text-xs font-semibold text-[#1F1F21] h-8">
                      <SelectValue placeholder="Status: Open" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Open">Status : Open</SelectItem>
                      <SelectItem value="Closed">Status : Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Metadata Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-[#1F1F21]">
                  {report.category || "Bullying & Harassment"}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-[#1F1F21]">
                  Reported by: {report.reportedBy || "Anonymous"}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-500">
                  {report.date || "Oct 11, 2025 at 2:30 PM"}
                </span>
              </div>
            </div>

            {/* Report Content with Blue Left Line */}
            <div className="border-l-2 border-[#038AF9] pl-4 py-1 text-xs sm:text-sm font-normal text-[#1F1F21] leading-relaxed">
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
                  className="bg-white border border-gray-200 hover:border-gray-300 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#1F1F21] flex items-center gap-2 shadow-2xs transition-colors cursor-pointer"
                >
                  {att.type === "video" ? (
                    <Video className="w-3.5 h-3.5 text-[#038AF9]" />
                  ) : (
                    <ImageIcon className="w-3.5 h-3.5 text-[#038AF9]" />
                  )}
                  <span>{att.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Response Input Section (Image 5) */}
          <div className="space-y-3">
            <div className="relative w-full border border-gray-200 rounded-2xl p-3 bg-white focus-within:border-[#038AF9] focus-within:ring-2 focus-within:ring-[#038AF9]/20 transition-all space-y-2">
              <div className="flex items-start gap-2">
                {/* Paperclip File Upload Icon */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-gray-400 hover:text-gray-600 p-1.5 cursor-pointer mt-0.5"
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
                  className="mt-0.5"
                />

                {/* Textarea */}
                <textarea
                  value={responseText}
                  onChange={(e) => setResponseText(e.target.value)}
                  placeholder="Write a response..."
                  className="w-full h-20 bg-transparent border-none outline-none resize-none text-xs sm:text-sm text-[#1F1F21] placeholder-gray-400 focus:ring-0 p-1"
                />
              </div>

              {/* Newly Uploaded Response Attachments List Pills (Appears in Response Box) */}
              {responseAttachments.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
                  {responseAttachments.map((att, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-[#1F1F21] flex items-center gap-2"
                    >
                      {att.type === "video" ? (
                        <Video className="w-3.5 h-3.5 text-[#038AF9]" />
                      ) : (
                        <ImageIcon className="w-3.5 h-3.5 text-[#038AF9]" />
                      )}
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

              {/* Bottom Right Submit Button */}
              <div className="flex justify-end pt-2">
                <Button
                  type="button"
                  onClick={() => {
                    if (responseText || responseAttachments.length > 0) {
                      alert("Response submitted successfully!")
                      setResponseText("")
                      setResponseAttachments([])
                    }
                  }}
                  className="px-6 py-2 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-xs font-semibold transition-all shadow-xs cursor-pointer h-auto"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>

          {/* History Thread Section (Image 2 & 5) */}
          <div className="border border-gray-100 rounded-3xl p-5 space-y-4 bg-gray-50/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm sm:text-base text-[#1F1F21]">
                History
              </h4>
              <span className="text-xs text-gray-400">
                Oct 11, 2025 at 2:30 PM
              </span>
            </div>

            {/* Reporter Message Bubble */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-4 text-xs sm:text-sm text-[#1F1F21] leading-relaxed max-w-2xl">
              <p>
                A few classmates created a private group on Instagram where
                they post edited pictures of people from our class with mean
                captions. One of them is about me. They also shared the link
                in our group chat, so everyone saw it.
              </p>
            </div>

            {/* School Response Message Bubble */}
            <div className="ml-auto bg-[#038AF9]/5 border border-[#038AF9]/20 rounded-2xl p-4 text-xs sm:text-sm text-[#1F1F21] leading-relaxed max-w-2xl space-y-2">
              <h5 className="font-bold text-[#1F1F21]">School response</h5>
              <p className="text-gray-600">
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

        {/* Media Preview Modal Overlay inside DialogContent */}
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
