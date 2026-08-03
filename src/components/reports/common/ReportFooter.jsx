import React from "react"
import footerImage from "@/assets/images/footerImage.png"

const ReportFooter = () => {
  return (
    <footer className="w-full bg-[#038AF9] text-white py-12 sm:py-16 text-center font-urbanist">
      <div className="section-padding-x max-w-4xl mx-auto space-y-6 flex flex-col items-center justify-center">
        {/* Protection Text */}
        <p className="text-[20px] font-normal text-[#EAEAEA]">
          All trademarks mentioned enjoy legal protection.
        </p>

        {/* Footer Image Asset */}
        <div className="pt-2 flex items-center justify-center">
          <img
            src={footerImage}
            alt="SchoolReview - Better Schools. Brighter Students."
            className="max-h-24 sm:max-h-28 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  )
}

export default ReportFooter