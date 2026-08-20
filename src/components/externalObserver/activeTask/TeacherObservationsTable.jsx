import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Title24 } from "@/components/typho/Title"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// SVG Icons provided by user
const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <g clipPath="url(#clip0_10748_248864_table)">
      <path d="M1.35156 7.43461C1.35156 5.20417 1.35156 4.08894 2.04447 3.39604C2.73738 2.70312 3.8526 2.70313 6.08305 2.70313H6.75897C8.98939 2.70313 10.1046 2.70312 10.7976 3.39604C11.4905 4.08894 11.4905 5.20417 11.4905 7.43461V8.78646C11.4905 11.0169 11.4905 12.1321 10.7976 12.825C10.1046 13.5179 8.98939 13.5179 6.75897 13.5179H6.08305C3.8526 13.5179 2.73738 13.5179 2.04447 12.825C1.35156 12.1321 1.35156 11.0169 1.35156 8.78646V7.43461Z" stroke="#1F1F21" />
      <path d="M11.4922 6.02071L11.5773 5.95049C13.0074 4.7705 13.7225 4.18051 14.2971 4.46538C14.8718 4.75026 14.8718 5.69471 14.8718 7.58362V8.64063C14.8718 10.5296 14.8718 11.474 14.2971 11.7589C13.7225 12.0437 13.0074 11.4538 11.5773 10.2737L11.4922 10.2035" stroke="#1F1F21" strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="clip0_10748_248864_table">
        <rect width="16.2222" height="16.2222" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const DocsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path d="M5.40625 4.73047H10.8137" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.40625 7.43359H8.10995" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.78646 14.5321V14.1942C8.78646 12.2824 8.78646 11.3265 9.3804 10.7325C9.97433 10.1386 10.9302 10.1386 12.842 10.1386H13.18M13.5179 9.01866V6.75897C13.5179 4.20989 13.5179 2.93536 12.726 2.14346C11.9342 1.35156 10.6596 1.35156 8.11053 1.35156C5.56146 1.35156 4.28692 1.35156 3.49502 2.14346C2.70312 2.93535 2.70313 4.20989 2.70313 6.75897V9.83051C2.70313 12.0239 2.70312 13.1206 3.30204 13.8634C3.42304 14.0135 3.55973 14.1502 3.7098 14.2711C4.45263 14.8701 5.54933 14.8701 7.74269 14.8701C8.21963 14.8701 8.45803 14.8701 8.67642 14.793C8.72184 14.777 8.76632 14.7586 8.80978 14.7378C9.01871 14.6378 9.18728 14.4693 9.5245 14.132L12.726 10.9305C13.1168 10.5398 13.3121 10.3444 13.4151 10.096C13.5179 9.84755 13.5179 9.57123 13.5179 9.01866Z" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 10.6654L4.97978 7.68556C5.20615 7.45923 5.51319 7.33203 5.83333 7.33203C6.15348 7.33203 6.46051 7.45923 6.68687 7.68556L9.33333 10.332M9.33333 10.332L10.3333 11.332M9.33333 10.332L10.6465 9.0189C10.8728 8.79256 11.1799 8.66536 11.5 8.66536C11.8201 8.66536 12.1272 8.79256 12.3535 9.0189L14 10.6654" stroke="#1F1F21" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.3333 5.33464C10.5174 5.33464 10.6667 5.1854 10.6667 5.0013C10.6667 4.81721 10.5174 4.66797 10.3333 4.66797M10.3333 5.33464C10.1493 5.33464 10 5.1854 10 5.0013C10 4.81721 10.1493 4.66797 10.3333 4.66797M10.3333 5.33464V4.66797" stroke="#1F1F21" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.46271 13.1661C1.66406 12.231 1.66406 10.8211 1.66406 8.0013C1.66406 5.18148 1.66406 3.77157 2.46271 2.83648C2.57612 2.70369 2.69978 2.58002 2.83257 2.46662C3.76766 1.66797 5.17758 1.66797 7.9974 1.66797C10.8172 1.66797 12.2271 1.66797 13.1622 2.46662C13.295 2.58002 13.4187 2.70369 13.5321 2.83648C14.3307 3.77157 14.3307 5.18148 14.3307 8.0013C14.3307 10.8211 14.3307 12.231 13.5321 13.1661C13.4187 13.2989 13.295 13.4226 13.1622 13.536C12.2271 14.3346 10.8172 14.3346 7.9974 14.3346C5.17758 14.3346 3.76766 14.3346 2.83257 13.536C2.69978 13.4226 2.57612 13.2989 2.46271 13.1661Z" stroke="#1F1F21" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11.6693 10.0013V4.33464H6.0026M11.3835 4.62037L4.33594 11.668" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const OBSERVATIONS_DATA = [
  {
    id: 1,
    teacher: "Dianne Russell",
    school: "Lindenhof Kantonsschule",
    dates: "4 May 2026 – 27 May 2026",
    materials: ["video", "docs", "image"],
  },
  {
    id: 2,
    teacher: "Brooklyn Simmons",
    school: "Kantonsschule Zürich Nord",
    dates: "4 May 2026 – 27 May 2026",
    materials: ["video", "image"],
  },
  {
    id: 3,
    teacher: "Albert Flores",
    school: "Gymnasium Bern City",
    dates: "4 May 2026 – 27 May 2026",
    materials: ["video"],
  },
  {
    id: 4,
    teacher: "Jane Cooper",
    school: "Sekundarschule Luzern West",
    dates: "4 May 2026 – 27 May 2026",
    materials: ["docs", "video"],
  },
]

const TeacherObservationsTable = () => {
  const navigate = useNavigate()

  const handleStartObservation = (row) => {
    navigate("/review/observer-to-teacher")
  }

  const renderMaterialIcon = (type, key) => {
    switch (type) {
      case "video":
        return (
          <span
            key={key}
            className="w-7 h-7 rounded-full bg-[rgba(8,8,8,0.04)] inline-flex items-center justify-center transition-colors hover:bg-gray-200/80"
            title="Video Material"
          >
            <VideoIcon />
          </span>
        )
      case "docs":
        return (
          <span
            key={key}
            className="w-7 h-7 rounded-full bg-[rgba(8,8,8,0.04)] inline-flex items-center justify-center transition-colors hover:bg-gray-200/80"
            title="Document Material"
          >
            <DocsIcon />
          </span>
        )
      case "image":
        return (
          <span
            key={key}
            className="w-7 h-7 rounded-full bg-[rgba(8,8,8,0.04)] inline-flex items-center justify-center transition-colors hover:bg-gray-200/80"
            title="Image Material"
          >
            <ImageIcon />
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6 font-urbanist">
      {/* Table Title Header */}
      <div>
        <Title24 className="text-[#080808] font-semibold">Teacher Observations</Title24>
      </div>

      {/* Table Container */}
      <Table containerClassName="overflow-x-auto border border-gray-100 rounded-2xl bg-white shadow-2xs w-full max-w-full" className="w-full min-w-[700px]">
        <TableHeader>
          <TableRow className="border-b border-gray-100 hover:bg-transparent bg-gray-50/40">
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] pl-4 py-4 whitespace-nowrap">Teacher</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] py-4 whitespace-nowrap">School</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] py-4 whitespace-nowrap">Observation Dates</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] py-4 whitespace-nowrap">Observation Materials</TableHead>
            <TableHead className="text-[16px] font-medium text-[#5A5A5A] text-center pr-4 py-4 whitespace-nowrap">Start Observation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {OBSERVATIONS_DATA.map((row) => (
            <TableRow key={row.id} className="border-b border-gray-50/80 hover:bg-gray-50/50 transition-colors">
              <TableCell className="text-[16px] font-normal text-[#080808] pl-4 py-5 whitespace-nowrap">{row.teacher}</TableCell>
              <TableCell className="text-[16px] font-normal text-[#080808] py-5 whitespace-nowrap">{row.school}</TableCell>
              <TableCell className="text-[16px] font-normal text-[#080808] py-5 whitespace-nowrap">{row.dates}</TableCell>
              <TableCell className="py-5 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  {row.materials.map((m, idx) => renderMaterialIcon(m, idx))}
                </div>
              </TableCell>
              <TableCell className="text-center pr-4 py-5 whitespace-nowrap">
                <button
                  type="button"
                  onClick={() => handleStartObservation(row)}
                  className="w-7 h-7 rounded-full bg-[#038AF9] hover:bg-[#0270ce] transition-colors inline-flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
                  title="Start Observation"
                >
                  <ArrowIcon />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TeacherObservationsTable
