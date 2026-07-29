import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Title24, Title18 } from "@/components/typho/Title"
import CustomInput from "@/components/common/CustomInput"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePicker } from "@/components/ui/date-picker"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const TEACHERS_LIST = [
  "Albert Flores",
  "Kenneth Allen",
  "Joshua Jones",
  "Patricia Sanders",
  "Stephanie Nicol",
]

const OBSERVERS_LIST = [
  "Dr. Sarah Jenkins",
  "Mr. Robert Vance",
  "School Leader",
  "Self Evaluation",
]

const CreateObservationModal = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [observationName, setObservationName] = useState("")
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [assignLeaderToAll, setAssignLeaderToAll] = useState(false)
  const [observerAssignments, setObserverAssignments] = useState({})

  const handleObserverChange = (teacher, observer) => {
    setObserverAssignments((prev) => ({
      ...prev,
      [teacher]: observer,
    }))
  }

  const handleToggleLeaderToAll = (checked) => {
    setAssignLeaderToAll(!!checked)
    if (checked) {
      const updated = {}
      TEACHERS_LIST.forEach((t) => {
        updated[t] = "School Leader"
      })
      setObserverAssignments(updated)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmitSuccess) {
      onSubmitSuccess({
        observationName,
        startDate,
        endDate,
        assignLeaderToAll,
        observerAssignments,
      })
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="relative max-w-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto no-scrollbar rounded-3xl border-none bg-white shadow-2xl font-urbanist">
        {/* Header with Title24 */}
        <DialogHeader className="flex flex-row items-center justify-between border-b border-dashed border-gray-200/80 pb-4 space-y-0">
          <Title24 className="text-[#080808] font-semibold">
            Create a Observation
          </Title24>
        </DialogHeader>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="space-y-6 pt-2">
          {/* 1. Observation Name Input */}
          <div className="space-y-2">
            <Title18 className="text-[#080808] font-medium">
              Observation name
            </Title18>
            <CustomInput
              placeholder="Enter observation name (e.g. 2026 Observation)"
              value={observationName}
              onChange={(e) => setObservationName(e.target.value)}
              className="h-12 text-[16px] rounded-2xl border-gray-200 focus:border-[#038AF9] focus:ring-[#038AF9]"
            />
          </div>

          {/* 2. Observation Period Date Fields (Shadcn DatePicker) */}
          <div className="space-y-2">
            <Title18 className="text-[#080808] font-medium">
              Observation period
            </Title18>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Start Date */}
              <div className="space-y-3">
                <span className="text-[14px] font-normal text-[#5A5A5A]">
                  Start
                </span>
                <DatePicker
                  value={startDate}
                  onChange={setStartDate}
                  placeholder="Start date"
                  className="h-11 rounded-xl mt-2 border border-gray-200/90 text-sm text- bg-white hover:bg-gray-50 focus:border-[#038AF9]"
                />
              </div>

              {/* End Date */}
              <div className="space-y-3">
                <span className="text-[14px] font-normal text-[#5A5A5A]">
                  End
                </span>
                <DatePicker
                  value={endDate}
                  onChange={setEndDate}
                  placeholder="End date"
                  className="h-11 rounded-xl mt-2 border border-gray-200/90 text-sm text- bg-white hover:bg-gray-50 focus:border-[#038AF9]"
                />
              </div>
            </div>
          </div>

          {/* 3. Assign Observer */}
          <div className="space-y-3">
            <Title18 className="text-[#080808] font-medium">
              Assign Observer
            </Title18>

            {/* Checkbox: Assign the school leader to all teachers */}
            <div className="flex items-center gap-2.5 pb-2">
              <Checkbox
                id="assign-all"
                className="!rounded-[4px] border-gray-400 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9] data-[state=checked]:text-white"
                checked={assignLeaderToAll}
                onCheckedChange={handleToggleLeaderToAll}
              />
              <label
                htmlFor="assign-all"
                className="text-base font-normal text- cursor-pointer select-none"
              >
                Assign the school leader to all teachers
              </label>
            </div>

            {/* Teachers List with Observer Select Dropdowns side-by-side */}
            <div className="pt-1 max-h-60 overflow-y-auto pr-1 no-scrollbar -space-y-px">
              {TEACHERS_LIST.map((teacher) => (
                <div
                  key={teacher}
                  className="flex items-center justify-between py-3 px-2 border-y border-[#E6F3FE] hover:bg-[#E6F3FE]/20 transition-colors"
                >
                  <span className="text-[16px] font-normal text-textPrimary]">
                    {teacher}
                  </span>

                  <div className="w-48">
                    <Select
                      value={observerAssignments[teacher] || ""}
                      onValueChange={(val) => handleObserverChange(teacher, val)}
                    >
                      <SelectTrigger className="rounded-xl border-gray-200 text-base font-normal text-secondary h-9 bg-white">
                        <SelectValue placeholder="Select observer" />
                      </SelectTrigger>
                      <SelectContent zIndex={100}>
                        {OBSERVERS_LIST.map((obs) => (
                          <SelectItem key={obs} value={obs}>
                            {obs}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-3 rounded-2xl border border-gray-200 bg-white text- hover:bg-gray-50 text-base font-semibold transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 py-3 rounded-2xl bg-primary hover:bg-[#0274d4] text-white  text-base font-semibold transition-colors cursor-pointer shadow-xs"
            >
              Create Observation
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateObservationModal
