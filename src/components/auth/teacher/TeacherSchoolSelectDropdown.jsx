import React, { useState } from "react"
import { ChevronDown, Search, Check, MapPin, Landmark } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const SchweizerSchuleLogo = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-1">
    <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
      {/* Shield container with dark blue fill */}
      <path
        d="M15 12C15 9.79086 16.7909 8 19 8H81C83.2091 8 85 9.79086 85 12V42C85 64 50 88 50 88C50 88 15 64 15 42V12Z"
        fill="#0F294A"
      />
      {/* Top Red Bar with Swiss cross */}
      <path
        d="M15 12C15 9.79086 16.7909 8 19 8H81C83.2091 8 85 9.79086 85 12V30H15V12Z"
        fill="#D92D20"
      />
      {/* Swiss cross inside top red section */}
      <rect x="46" y="12" width="8" height="14" fill="white" rx="1" />
      <rect x="43" y="15" width="14" height="8" fill="white" rx="1" />

      {/* Blue mountains background */}
      <path d="M15 45L34 26L55 45H15Z" fill="#1E3A8A" />
      <path d="M32 45L56 22L80 45H32Z" fill="#2563EB" opacity="0.9" />

      {/* School building illustration */}
      <rect x="36" y="42" width="28" height="24" fill="white" rx="1" />
      <path d="M34 42L50 30L66 42H34Z" fill="#0F294A" />
      {/* Windows & doors */}
      <rect x="40" y="46" width="5" height="6" fill="#0F294A" />
      <rect x="55" y="46" width="5" height="6" fill="#0F294A" />
      <rect x="40" y="55" width="5" height="6" fill="#0F294A" />
      <rect x="55" y="55" width="5" height="6" fill="#0F294A" />
      <rect x="48" y="54" width="4" height="12" fill="#0F294A" />

      {/* Green tree icon */}
      <circle cx="73" cy="48" r="6" fill="#65A30D" />
      <rect x="72.5" y="53" width="1.5" height="8" fill="#78350F" />
    </svg>
    <span className="text-[7px] font-extrabold text-[#0F294A] tracking-wider uppercase mt-0.5 leading-none text-center">
      SCHWEIZER
    </span>
    <span className="text-[7px] font-extrabold text-[#0F294A] tracking-wider uppercase leading-none text-center">
      SCHULE
    </span>
  </div>
)

const MOCK_SCHOOLS = [
  {
    id: "sch-1",
    name: "Pioneer Swiss School",
    location: "Zug, Switzerland",
    type: "Public",
    logoSvg: <SchweizerSchuleLogo />,
  },
  {
    id: "sch-2",
    name: "Kantonsschule Zug",
    location: "Zug, Switzerland",
    type: "Public",
    logoSvg: <SchweizerSchuleLogo />,
  },
  {
    id: "sch-3",
    name: "Geneva International Academy",
    location: "Geneva, Switzerland",
    type: "Private",
    logoSvg: (
      <div className="w-full h-full flex items-center justify-center">
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <path d="M20 4L32 12V24C32 30 20 36 20 36C20 36 8 30 8 24V12L20 4Z" fill="#2563EB" />
          <path d="M12 14L20 8L28 14V22C28 26 20 30 20 30C20 30 12 26 12 22V14Z" fill="#EAB308" />
          <text x="20" y="22" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">ZIS</text>
        </svg>
      </div>
    ),
  },
  {
    id: "sch-4",
    name: "Kantonsschule Kreuzlingen",
    location: "Kreuzlingen, Switzerland",
    type: "Public",
    logoSvg: (
      <div className="w-full h-full flex items-center justify-center">
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="16" stroke="#334155" strokeWidth="2" fill="none" />
          <path d="M14 16H26M20 12V28M16 24L24 24" stroke="#334155" strokeWidth="1.5" />
        </svg>
      </div>
    ),
  },
]

const TeacherSchoolSelectDropdown = ({ value, onChange, error }) => {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const selectedSchool = MOCK_SCHOOLS.find(
    (s) => s.id === value || s.name === value
  )

  const handleSelect = (school) => {
    onChange(school.name)
    setOpen(false)
  }

  // Render Selected School Card if a school is currently selected
  if (value) {
    const school = selectedSchool || {
      name: value,
      location: "Zug, Switzerland",
      type: "Public",
      logoSvg: <SchweizerSchuleLogo />,
    }

    return (
      <div className="flex items-start gap-4 pt-1">
        {/* School Logo Card Container */}
        <div className="w-[96px] h-[96px] bg-white rounded-2xl border border-border/80 p-2 flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
          {school.logoSvg}
        </div>

        {/* School Info Details */}
        <div className="flex flex-col justify-center space-y-1 pt-0.5">
          <h4 className="text-lg font-bold text-foreground leading-tight">
            {school.name}
          </h4>

          <div className="flex items-center gap-2 text-sm text-foreground/80 pt-0.5">
            <MapPin className="w-4.5 h-4.5 text-foreground shrink-0 stroke-[1.75]" />
            <span>{school.location}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <Landmark className="w-4.5 h-4.5 text-foreground shrink-0 stroke-[1.75]" />
            <span>{school.type || "Public"}</span>
          </div>

          <button
            type="button"
            onClick={() => onChange("")}
            className="text-sm font-medium text-[#0088FF] hover:underline cursor-pointer text-left pt-1 transition-colors"
          >
            Select Another School
          </button>
        </div>
      </div>
    )
  }

  const filteredSchools = MOCK_SCHOOLS.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="relative w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className={`w-full h-12 px-4 rounded-xl border border-border/80 bg-background flex items-center justify-between cursor-pointer transition-colors ${
              open ? "border-primary ring-1 ring-primary" : "hover:border-border"
            } ${error ? "border-destructive" : ""}`}
          >
            <span className="text-[#5A5A5A] text-[16px]">
              Search for school
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

          {/* School Items List */}
          <div className="max-h-[260px] overflow-y-auto divide-y divide-border/40">
            {filteredSchools.length === 0 ? (
              <div className="p-4 text-center text-xs text-muted-foreground">No schools found</div>
            ) : (
              filteredSchools.map((school) => (
                <div
                  key={school.id}
                  onClick={() => handleSelect(school)}
                  className="flex items-center gap-3.5 p-3.5 cursor-pointer transition-colors hover:bg-muted/30"
                >
                  <div className="w-8 h-8 shrink-0 overflow-hidden flex items-center justify-center">
                    {school.logoSvg}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-foreground truncate">{school.name}</h4>
                    <p className="text-xs text-muted-foreground truncate">{school.location}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </PopoverContent>
      </Popover>

      {error && <p className="text-xs text-destructive mt-1">{typeof error === "string" ? error : error.message}</p>}
    </div>
  )
}

export default TeacherSchoolSelectDropdown
