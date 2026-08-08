import React, { useState } from "react"
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

const InfoIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path d="M9.9974 18.3307C14.5998 18.3307 18.3307 14.5998 18.3307 9.9974C18.3307 5.39502 14.5998 1.66406 9.9974 1.66406C5.39502 1.66406 1.66406 5.39502 1.66406 9.9974C1.66406 14.5998 5.39502 18.3307 9.9974 18.3307Z" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 13.3359V9.58594" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 6.6724V6.66406" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const InviteEvaluatorModal = ({ isOpen, onClose, onInvite }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onInvite) {
      onInvite({ name, email, role: role || "School Evaluator" })
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[500px] w-[95vw] p-6 sm:p-8 rounded-3xl font-urbanist bg-white border border-gray-100 shadow-2xl space-y-6">
        {/* Modal Header */}
        <DialogHeader className="pb-2 border-b border-dashed border-gray-200">
          <DialogTitle className="text-[24px] font-semibold text-[#080808] text-left">
            Invite Evaluator
          </DialogTitle>
        </DialogHeader>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Field 1: Name */}
          <div className="space-y-2">
            <label className="block text-[18px] font-medium text-[#080808]">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter evaluator's name"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 text-base text-[#080808] placeholder:text-gray-400 focus:outline-none focus:border-[#038AF9] transition-all"
            />
          </div>

          {/* Field 2: Email */}
          <div className="space-y-2">
            <label className="block text-[18px] font-medium text-[#080808]">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter evaluator's email"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 text-base text-[#080808] placeholder:text-gray-400 focus:outline-none focus:border-[#038AF9] transition-all"
            />
          </div>

          {/* Field 3: Role */}
          <div className="space-y-2">
            <label className="block text-[18px] font-medium text-[#080808]">
              Role
            </label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="w-full h-12 px-4 rounded-xl border border-gray-200 text-base text-[#080808] focus:ring-0">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-100 rounded-xl shadow-lg">
                <SelectItem value="School Evaluator">School Evaluator</SelectItem>
                <SelectItem value="Lead Evaluator">Lead Evaluator</SelectItem>
                <SelectItem value="Observer">Observer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Info Banner */}
          <div className="p-3.5 rounded-lg border border-[#B1DBFD] bg-[rgba(3,138,249,0.10)] flex items-center gap-3 text-sm text-[#080808]">
            <InfoIconSVG />
            <span>This invitation will use one licence seat once accepted.</span>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl border border-[#E7E8EA] bg-[#FAFAFA] text-[#1F1F21] text-base font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0270ce] text-white text-base font-medium transition-colors cursor-pointer shadow-xs"
            >
              Send Invitation
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default InviteEvaluatorModal
