import React, { useState } from "react"
import { ChevronDown, Search, Check, CheckCircle2 } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const TeacherSelectDropdown = ({ value, onChange, teachers = [], error }) => {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const selectedTeacher = teachers.find(
    (t) => t.id === value || t.name === value
  )

  const filteredTeachers = teachers.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelect = (teacher) => {
    onChange(teacher.id)
    setOpen(false)
  }

  return (
    <div className="relative w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className={`w-full h-12 px-4 rounded-xl border border-border/80 bg-background flex items-center justify-between cursor-pointer transition-colors ${
              open ? "border-primary ring-1 ring-primary" : "hover:border-border"
            } ${error ? "border-destructive" : ""}`}
          >
            <span
              className={
                selectedTeacher
                  ? "text-foreground text-[16px] font-medium truncate"
                  : "text-[#5A5A5A] text-[16px]"
              }
            >
              {selectedTeacher
                ? `${selectedTeacher.name}, ${selectedTeacher.subject}`
                : "Select a teacher"}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground/70 shrink-0 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
        </PopoverTrigger>

        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] p-0 rounded-2xl border border-border/80 shadow-xl overflow-hidden bg-white"
          align="start"
        >
          {/* Search Bar inside Dropdown */}
          <div className="p-3 border-b border-border/60 flex items-center gap-2 bg-muted/20">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Search teacher name or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-transparent focus:outline-none text-foreground placeholder:text-[#5A5A5A]"
              autoFocus
            />
          </div>

          {/* Teacher Items List */}
          <div className="max-h-[260px] overflow-y-auto divide-y divide-border/40">
            {filteredTeachers.length === 0 ? (
              <div className="p-4 text-center text-xs text-muted-foreground">
                No teachers found
              </div>
            ) : (
              filteredTeachers.map((teacher) => {
                const isSelected =
                  selectedTeacher?.id === teacher.id ||
                  selectedTeacher?.name === teacher.name

                return (
                  <div
                    key={teacher.id}
                    onClick={() => handleSelect(teacher)}
                    className={`flex items-center justify-between p-3.5 cursor-pointer transition-colors ${
                      isSelected ? "bg-muted/40" : "hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex flex-col text-left space-y-0.5 min-w-0 pr-2">
                      <span className="text-sm font-bold text-foreground leading-tight truncate">
                        {teacher.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-normal truncate">
                        {teacher.subject}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {teacher.reviewed && (
                        <div className="flex items-center gap-1.5 text-[#22C55E] text-xs font-normal">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E] stroke-[1.75]" />
                          <span>Reviewed</span>
                        </div>
                      )}
                      {isSelected && (
                        <Check className="h-4 w-4 text-primary shrink-0 ml-1" />
                      )}
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </PopoverContent>
      </Popover>

      {error && (
        <p className="text-xs text-destructive mt-1">
          {typeof error === "string" ? error : error.message}
        </p>
      )}
    </div>
  )
}

export default TeacherSelectDropdown
