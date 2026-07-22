import React, { useState } from "react"
import { ChevronDown, Search, Check } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const MOCK_SCHOOLS = [
  {
    id: "sch-1",
    name: "Kantonsschule Zug",
    location: "Zug, Switzerland",
    logoSvg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 40 40" fill="none">
        <path d="M8 28L18 8L24 20L32 12L28 32H8Z" fill="#3B82F6" />
        <path d="M14 32L22 16L28 28H14Z" fill="#60A5FA" opacity="0.8" />
      </svg>
    ),
  },
  {
    id: "sch-2",
    name: "Geneva International Academy",
    location: "Geneva, Switzerland",
    logoSvg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L32 12V24C32 30 20 36 20 36C20 36 8 30 8 24V12L20 4Z" fill="#2563EB" />
        <path d="M12 14L20 8L28 14V22C28 26 20 30 20 30C20 30 12 26 12 22V14Z" fill="#EAB308" />
        <text x="20" y="22" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">ZIS</text>
      </svg>
    ),
  },
  {
    id: "sch-3",
    name: "Kantonsschule Kreuzlingen",
    location: "Kreuzlingen, Switzerland",
    logoSvg: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#334155" strokeWidth="2" fill="none" />
        <path d="M14 16H26M20 12V28M16 24L24 24" stroke="#334155" strokeWidth="1.5" />
      </svg>
    ),
  },
]

const TeacherSchoolSelectDropdown = ({ value, onChange, error }) => {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const selectedSchool = MOCK_SCHOOLS.find((s) => s.id === value || s.name === value)

  const filteredSchools = MOCK_SCHOOLS.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelect = (school) => {
    onChange(school.name)
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
            <span className={selectedSchool ? "text-foreground text-[16px] font-medium" : "text-[#5A5A5A] text-[16px]"}>
              {selectedSchool ? selectedSchool.name : "Search for school"}
            </span>
            <ChevronDown className={`h-5 w-5 text-muted-foreground/70 transition-transform ${open ? "rotate-180" : ""}`} />
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 rounded-2xl border border-border/80 shadow-xl overflow-hidden bg-white" align="start">
          {/* Search Bar inside Dropdown */}
          <div className="p-3 border-b border-border/60 flex items-center gap-2 bg-muted/20">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Search school name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-transparent focus:outline-none text-foreground placeholder:text-[#5A5A5A]"
              autoFocus
            />
          </div>

          {/* School Items List (Without Request to Add School Option) */}
          <div className="max-h-[260px] overflow-y-auto divide-y divide-border/40">
            {filteredSchools.length === 0 ? (
              <div className="p-4 text-center text-xs text-muted-foreground">No schools found</div>
            ) : (
              filteredSchools.map((school) => {
                const isSelected = selectedSchool?.id === school.id || selectedSchool?.name === school.name
                return (
                  <div
                    key={school.id}
                    onClick={() => handleSelect(school)}
                    className={`flex items-center gap-3.5 p-3.5 cursor-pointer transition-colors ${
                      isSelected ? "bg-muted/40" : "hover:bg-muted/30"
                    }`}
                  >
                    {school.logoSvg}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-foreground truncate">{school.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">{school.location}</p>
                    </div>
                    {isSelected && <Check className="h-4 w-4 text-primary shrink-0" />}
                  </div>
                )
              })
            )}
          </div>
        </PopoverContent>
      </Popover>

      {error && <p className="text-xs text-destructive mt-1">{typeof error === "string" ? error : error.message}</p>}
    </div>
  )
}

export default TeacherSchoolSelectDropdown
