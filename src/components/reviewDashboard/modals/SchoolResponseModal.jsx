import React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const SchoolResponseModal = ({ isOpen, onClose, responseData }) => {
  if (!responseData) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[780px] w-[95vw] rounded-[24px] p-6 sm:p-8 bg-white border border-gray-100 shadow-2xl font-urbanist max-h-[90vh] overflow-y-auto">
        
        {/* Modal Title Header */}
        <div className="pb-4">
          <h2 className="text-[22px] sm:text-[24px] font-semibold text-[#080808] leading-tight">
            Response from the School
          </h2>
        </div>

        {/* Outer Message Box Box Container (Image 2) */}
        <div className="p-6 sm:p-8 bg-white border border-gray-200/90 rounded-[20px] space-y-4 text-left">
          <span className="block text-sm font-medium text-[#5A5A5A]">
            {responseData.responseDate || "March 2026"}
          </span>

          <div className="space-y-4 text-[15px] sm:text-base font-normal text-[#080808] leading-relaxed">
            <p>Dear Parent,</p>
            <p>
              Thank you for taking the time to share your feedback with us. We truly appreciate both your positive comments and the thoughtful areas for improvement you highlighted.
            </p>
            <p>
              Parent feedback plays an important role in helping us better understand the experiences of our school community and supports our ongoing efforts to create a positive, supportive, and effective learning environment for all students.
            </p>
            <p>
              We value the trust you place in our school and thank you again for contributing constructively to our continued development.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SchoolResponseModal
