import React from "react"
import { Title56, Title40 } from "@/components/typho/Title"
import { ReportIcon } from "@/components/icons/CustomIcons"

const ReportBanner = ({
  title = "School Report (2026)",
  name = "Dr. Anna Keller",
  designation = "Lindenhof Kantonsschule",
  basedOnText = "Based on 342 responses",
  breakdownText = "Students: 210 • Parents: 92 • Teachers: 40",
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

        {/* Right Icon Column */}
        <div className="shrink-0 flex items-center justify-center">
          <ReportIcon className="w-28 h-24 sm:w-36 sm:h-32 text-white" />
        </div>
      </div>
    </div>
  )
}

export default ReportBanner