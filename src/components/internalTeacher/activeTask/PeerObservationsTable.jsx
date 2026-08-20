import React from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_10748_203386_peer)">
      <path d="M1.33594 7.33268C1.33594 5.1328 1.33594 4.03285 2.01936 3.34944C2.70277 2.66602 3.80272 2.66602 6.0026 2.66602H6.66927C8.86914 2.66602 9.96907 2.66602 10.6525 3.34944C11.3359 4.03285 11.3359 5.1328 11.3359 7.33268V8.66602C11.3359 10.8659 11.3359 11.9658 10.6525 12.6493C9.96907 13.3327 8.86914 13.3327 6.66927 13.3327H6.0026C3.80272 13.3327 2.70277 13.3327 2.01936 12.6493C1.33594 11.9658 1.33594 10.8659 1.33594 8.66602V7.33268Z" stroke="#1F1F21" />
      <path d="M11.3359 5.93789L11.4199 5.86863C12.8304 4.70481 13.5357 4.12289 14.1025 4.40387C14.6693 4.68484 14.6693 5.61635 14.6693 7.47939V8.52192C14.6693 10.385 14.6693 11.3165 14.1025 11.5975C13.5357 11.8784 12.8304 11.2965 11.4199 10.1327L11.3359 10.0634" stroke="#1F1F21" strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="clip0_10748_203386_peer">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 10.6654L4.97978 7.68556C5.20615 7.45923 5.51319 7.33203 5.83333 7.33203C6.15348 7.33203 6.46051 7.45923 6.68687 7.68556L9.33333 10.332M9.33333 10.332L10.3333 11.332M9.33333 10.332L10.6465 9.0189C10.8728 8.79256 11.1799 8.66536 11.5 8.66536C11.8201 8.66536 12.1272 8.79256 12.3535 9.0189L14 10.6654" stroke="#1F1F21" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.3333 5.33464C10.5174 5.33464 10.6667 5.1854 10.6667 5.0013C10.6667 4.81721 10.5174 4.66797 10.3333 4.66797M10.3333 5.33464C10.1493 5.33464 10 5.1854 10 5.0013C10 4.81721 10.1493 4.66797 10.3333 4.66797M10.3333 5.33464V4.66797" stroke="#1F1F21" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.46271 13.1661C1.66406 12.231 1.66406 10.8211 1.66406 8.0013C1.66406 5.18148 1.66406 3.77157 2.46271 2.83648C2.57612 2.70369 2.69978 2.58002 2.83257 2.46662C3.76766 1.66797 5.17758 1.66797 7.9974 1.66797C10.8172 1.66797 12.2271 1.66797 13.1622 2.46662C13.295 2.58002 13.4187 2.70369 13.5321 2.83648C14.3307 3.77157 14.3307 5.18148 14.3307 8.0013C14.3307 10.8211 14.3307 12.231 13.5321 13.1661C13.4187 13.2989 13.295 13.4226 13.1622 13.536C12.2271 14.3346 10.8172 14.3346 7.9974 14.3346C5.17758 14.3346 3.76766 14.3346 2.83257 13.536C2.69978 13.4226 2.57612 13.2989 2.46271 13.1661Z" stroke="#1F1F21" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PEER_OBSERVATIONS_DATA = [
  { id: 1, name: "Albert Flores", observationStatus: "action", resources: ["video", "image"], dueDate: "15 Oct 2026" },
  { id: 2, name: "Savannah Nguyen", observationStatus: "action", resources: [], dueDate: "15 Oct 2026" },
  { id: 3, name: "Wade Warren", observationStatus: "completed", resources: ["image"], dueDate: "15 Oct 2026" },
  { id: 4, name: "Kristin Watson", observationStatus: "action", resources: ["image", "video"], dueDate: "15 Oct 2026" },
  { id: 5, name: "Ralph Edwards", observationStatus: "completed", resources: ["video", "image"], dueDate: "15 Oct 2026" },
]

const PeerObservationsTable = ({ onStartObservation }) => {
  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-xs space-y-5 font-urbanist">
      {/* Header Title & Subtitle */}
      <div className="space-y-1">
        <h3 className="text-[24px] font-semibold text-[#080808]">
          Scheduled Peer Observations
        </h3>
        <p className="text-[16px] font-normal text-secondary">
          Complete your assigned peer observations.
        </p>
      </div>

      {/* Dotted Separator */}
      <div className="border-b border-dashed border-gray-200/80 my-2" />

      {/* Table Container */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <Table className="w-full text-left min-w-[650px]">
          <TableHeader>
            <TableRow className="border-b border-gray-100 bg-[#FAFAFA]/60 hover:bg-[#FAFAFA]/60">
              <TableHead className="py-4 px-6 text-[15px] font-normal text-[#5A5A5A] h-auto">
                Name
              </TableHead>
              <TableHead className="py-4 px-6 text-[15px] font-normal text-[#5A5A5A] h-auto">
                Action / Status
              </TableHead>
              <TableHead className="py-4 px-6 text-[15px] font-normal text-[#5A5A5A] h-auto">
                Observation Resources
              </TableHead>
              <TableHead className="py-4 px-6 text-[15px] font-normal text-[#5A5A5A] h-auto">
                Due Date
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100/80">
            {PEER_OBSERVATIONS_DATA.map((row) => (
              <TableRow
                key={row.id}
                className="hover:bg-gray-50/50 transition-colors border-gray-100"
              >
                {/* Name Cell */}
                <TableCell className="py-4 px-6 text-[16px] font-normal text-[#080808]">
                  {row.name}
                </TableCell>

                {/* Action / Status Cell: Observe Teacher button or Completed badge */}
                <TableCell className="py-4 px-6 whitespace-nowrap">
                  {row.observationStatus === "action" && (
                    <button
                      type="button"
                      onClick={() => onStartObservation && onStartObservation(row)}
                      className="px-4 py-2 rounded-[10px] border border-primary bg-[#FAFAFA] text-textPrimary hover:bg-[#038AF9]/10 text-[16px] font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      → Observe Teacher
                    </button>
                  )}
                  {row.observationStatus === "completed" && (
                    <span className="px-3.5 py-1 rounded-full border border-[#66BB6A] text-textPrimary text-[12px] font-normal inline-block">
                      Completed
                    </span>
                  )}
                  {row.observationStatus === "none" && (
                    <span className="text-gray-400 font-medium px-2 text-[16px]">
                      ---
                    </span>
                  )}
                </TableCell>

                {/* Observation Resources Icons */}
                <TableCell className="py-4 px-6">
                  <div className="flex items-center gap-2 min-h-[32px]">
                    {row.resources && row.resources.length > 0 ? (
                      row.resources.map((res, idx) => (
                        <div
                          key={idx}
                          className="w-8 h-8 rounded-full bg-[rgba(8,8,8,0.04)] text-gray-700 flex items-center justify-center shrink-0"
                        >
                          {res === "video" && <VideoIcon />}
                          {res === "image" && <ImageIcon />}
                        </div>
                      ))
                    ) : (
                      <span className="text-secondary text-[16px] font-normal">---</span>
                    )}
                  </div>
                </TableCell>

                {/* Due Date Cell */}
                <TableCell className="py-4 px-6 text-[16px] font-medium text-[#080808]">
                  {row.dueDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default PeerObservationsTable
