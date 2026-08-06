import React, { useState } from "react"
import { Trash2 } from "lucide-react"

const StepThreeInviteObservers = () => {
  const [observers, setObservers] = useState([])
  const [newEmail, setNewEmail] = useState("")

  const handleAdd = (e) => {
    e.preventDefault()
    if (newEmail.trim() && !observers.includes(newEmail.trim())) {
      setObservers((prev) => [...prev, newEmail.trim()])
      setNewEmail("")
    }
  }

  const handleRemove = (emailToRemove) => {
    setObservers((prev) => prev.filter((email) => email !== emailToRemove))
  }

  return (
    <div className="space-y-4 sm:space-y-6 font-urbanist">
      {/* Title */}
      <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold text-[#080808] leading-tight">
        Invite Observers (Optional)
      </h1>

      {/* Main Content Area Box */}
      <div
        style={{ borderRadius: "20px" }}
        className="bg-white border border-[#EAEAEA] p-4 sm:p-6 space-y-4 shadow-xs"
      >
        {/* Existing Observers List */}
        {observers.map((email, idx) => (
          <div
            key={idx}
            className="w-full bg-[#FAFAFA] border border-gray-200/80 rounded-xl px-4 py-3 flex items-center justify-between"
          >
            <span className="text-base font-normal text-[#080808]">
              {email}
            </span>
            <button
              type="button"
              onClick={() => handleRemove(email)}
              className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer p-1"
              title="Remove observer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}

        {/* Input Row for adding new observer */}
        <form onSubmit={handleAdd} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Enter email addresses (e.g. inspector@education.ch)"
            className="flex-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-base text-[#080808] placeholder:text-gray-400 focus:outline-hidden focus:border-[#038AF9] transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#FAFAFA] border border-gray-200 text-[#080808] font-medium text-base px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default StepThreeInviteObservers
