import React from "react"
import { Title56, Title40 } from "@/components/typho/Title"
import { ReportIcon } from "@/components/icons/CustomIcons"
import { Loader2 } from "lucide-react"

const ReportBanner = ({
  title = "School Report (2026)",
  name = "Dr. Anna Keller",
  designation = "Lindenhof Kantonsschule",
  basedOnText = "Based on 342 responses",
  breakdownText = "Students: 210 • Parents: 92 • Teachers: 40",
  onDownloadPdf,
  isExporting = false,
}) => {
  return (
    <div className="w-full bg-[#038AF9] text-white section-padding-x py-12 md:py-16 font-urbanist">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-full">
        {/* Left Info Column */}
        <div className="space-y-6 flex-1">
          <Title56 className="text-white font-extrabold">{title}</Title56>

          <div className="space-y-1">
            <Title40 className="text-white font-semibold">{name}</Title40>
            <p className="text-[28px] sm:text-[32px] font-medium text-white leading-tight">{designation}</p>
          </div>

          <div className="space-y-1 pt-2">
            <p className="text-[18px] sm:text-[20px] font-normal text-white/90">{basedOnText}</p>
            <p className="text-[18px] sm:text-[20px] font-normal text-white/90">{breakdownText}</p>
          </div>
        </div>

        {/* Right Icon & Download PDF Action */}
        <div className="shrink-0 flex flex-col items-end justify-center gap-6">
          <button
            type="button"
            disabled={isExporting}
            onClick={onDownloadPdf}
            className="bg-white hover:bg-gray-50 text-[#038AF9] px-6 py-3 rounded-full text-base sm:text-lg font-semibold flex items-center gap-2.5 shadow-lg transition-all cursor-pointer no-print shrink-0 border border-white/40 hover:scale-105 active:scale-95 disabled:opacity-80"
            title="Download Full School Report PDF"
          >
            {isExporting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-[#038AF9]" />
                <span>Capturing PDF...</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download PDF</span>
              </>
            )}
          </button>

          <ReportIcon className="w-28 h-24 sm:w-36 sm:h-32 text-white" />
        </div>
      </div>
    </div>
  )
}

export default ReportBanner