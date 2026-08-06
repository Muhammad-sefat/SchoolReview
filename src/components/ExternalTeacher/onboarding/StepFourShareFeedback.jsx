import React, { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import externalAvatar from "@/assets/images/externalAvatar.png"
import { QrScan, ExternalLogoIcon } from "@/components/icons/CustomIcons"

const AnonymousIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M14.0316 2.62151C12.6124 1.91537 10.8757 1.5 9 1.5C7.12432 1.5 5.38763 1.91537 3.96837 2.62151C3.27239 2.9678 2.92439 3.14094 2.5872 3.68534C2.25 4.22974 2.25 4.75686 2.25 5.81111V8.42783C2.25 12.6904 5.65677 15.0603 7.62975 16.0754C8.18003 16.3585 8.45513 16.5 9 16.5C9.54487 16.5 9.81997 16.3585 10.3702 16.0754C12.3432 15.0603 15.75 12.6904 15.75 8.42783V5.81111C15.75 4.75687 15.75 4.22975 15.4128 3.68534C15.0756 3.14093 14.7276 2.9678 14.0316 2.62151Z" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.75 8.625C6.75 8.625 7.80592 8.81393 8.25 10.125C8.25 10.125 9.375 7.875 11.25 7.125" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ClockIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <g clipPath="url(#clip0_10748_222765_share)">
      <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="black" strokeWidth="1.125" />
      <path d="M9 6V9L10.5 10.5" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_10748_222765_share">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const DownloadIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
    <path d="M9.75004 9.25004C9.75004 9.25004 6.43584 13.75 5.24994 13.75C4.06414 13.75 0.75 9.25004 0.75 9.25004M5.24994 12.75V0.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ShareIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 4.5C5.50442 5.70104 3 8.94175 3 12.7511C3 13.9579 3.25134 15.1076 3.70591 16.1534M15 4.5C18.4956 5.70104 21 8.94175 21 12.7511C21 13.7736 20.8195 14.7552 20.4879 15.6674M16.5 20.3296C15.1762 21.074 13.6393 21.5 12 21.5C10.3607 21.5 8.82378 21.074 7.5 20.3296" stroke="#080808" strokeWidth="1.5" />
    <path d="M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z" stroke="#080808" strokeWidth="1.5" />
    <path d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z" stroke="#080808" strokeWidth="1.5" />
    <path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C16 17.3431 17.3431 22 19 22Z" stroke="#080808" strokeWidth="1.5" />
  </svg>
)

const CopyLinkIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9H16C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16V15Z" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const EditHoverIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M16.4219 4.53172C17.2913 3.58979 17.726 3.11883 18.1879 2.84412C19.3024 2.18125 20.6749 2.16064 21.8081 2.78974C22.2777 3.05046 22.7257 3.50817 23.6218 4.42358C24.5179 5.339 24.966 5.7967 25.2212 6.27645C25.837 7.434 25.8169 8.83595 25.168 9.97452C24.899 10.4464 24.438 10.8904 23.516 11.7785L12.545 22.3454C10.7976 24.0284 9.92394 24.8699 8.83201 25.2964C7.74008 25.7229 6.53967 25.6915 4.13886 25.6287L3.81222 25.6202C3.08133 25.6011 2.71589 25.5915 2.50346 25.3504C2.29102 25.1093 2.32003 24.737 2.37803 23.9926L2.40953 23.5883C2.57278 21.4928 2.6544 20.4451 3.0636 19.5033C3.47279 18.5614 4.17862 17.7968 5.59027 16.2673L16.4219 4.53172Z" stroke="#038AF9" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M15.1641 4.66797L23.3307 12.8346" stroke="#038AF9" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M16.3359 25.668H25.6693" stroke="#038AF9" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const StepFourShareFeedback = ({ onOpenEditModal }) => {
  const [inviteStudents, setInviteStudents] = useState(true)
  const [inviteObservers, setInviteObservers] = useState(true)
  const [copied, setCopied] = useState(false)
  const feedbackLink = "https://schoolreview.ch/feedback/Arlene McCoy"

  const handleCopy = () => {
    navigator.clipboard.writeText(feedbackLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6 font-urbanist">
      {/* Title */}
      <h1 className="text-[32px] md:text-[40px] font-semibold text-[#080808] leading-tight">
        Share your feedback page
      </h1>

      {/* Main Container Card */}
      <div className="space-y-6">

        {/* Card 1: Invite by email */}
        <div
          style={{ borderRadius: "20px" }}
          className="bg-white border border-[#EAEAEA] p-6 space-y-3 shadow-xs"
        >
          <h2 className="text-[24px] font-semibold text-[#080808]">
            Invite by email
          </h2>
          <p className="text-lg font-normal text-[#080808]">
            Invitations will be sent to your saved student and observer email lists.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-1">
            <div className="flex items-center gap-3">
              <Checkbox
                id="inviteStudents"
                checked={inviteStudents}
                onCheckedChange={setInviteStudents}
                className="w-5 h-5 rounded-md border-gray-300 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9]"
              />
              <label htmlFor="inviteStudents" className="text-base font-medium text-[#080808] cursor-pointer">
                Students
              </label>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                id="inviteObservers"
                checked={inviteObservers}
                onCheckedChange={setInviteObservers}
                className="w-5 h-5 rounded-md border-gray-300 data-[state=checked]:bg-[#038AF9] data-[state=checked]:border-[#038AF9]"
              />
              <label htmlFor="inviteObservers" className="text-base font-medium text-[#080808] cursor-pointer">
                Observers
              </label>
            </div>

            <button
              type="button"
              className="bg-[#038AF9] ml-4 hover:bg-[#0270ce] text-white px-5 py-2.5 rounded-xl font-medium text-base transition-colors cursor-pointer"
            >
              Send Invitation
            </button>
          </div>
        </div>

        {/* Separator line with OR badge */}
        <div className="relative flex items-center justify-center my-12">
          <div className="w-full border-t border-[#E7E8EA]" />
          <span className="absolute rounded-full aspect-square flex justify-center items-center bg-[#F6F6F6] px-4 text-sm font-mediumbold text-textPrimary uppercase tracking-wider">
            OR
          </span>
        </div>

        {/* Card 2: Share your feedback link */}
        <div
          style={{ borderRadius: "20px" }}
          className="bg-white border border-[#EAEAEA] p-6 sm:p-8 space-y-6 shadow-xs"
        >
          <div className="space-y-1">
            <h2 className="text-[24px] font-semibold text-[#080808]">
              Share your feedback link
            </h2>
            <p className="text-lg font-normal text-[#080808]">
              Use your personal feedback link to collect responses anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Personal Card Preview ("How's my teaching?") with Hover Blur & Edit Button */}
            <div className="lg:col-span-7">
              <div
                style={{ borderRadius: "20px", border: "1px solid #B1DBFD", background: "#FFFFFF" }}
                className="p-6 relative group overflow-hidden shadow-xs border transition-all"
              >
                <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="text-[24px] font-semibold text-[#080808]">
                      How's my teaching?
                    </h3>
                    <p className="text-[14px] sm:text-[16px] font-normal text-textPrimary">
                      Your feedback helps improve my teaching
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#038AF9] p-2 flex items-center justify-center shrink-0">
                    <ExternalLogoIcon className="w-full h-full text-white" />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  {/* Teacher Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={externalAvatar}
                        alt="jenny Wilson"
                        className="w-12 h-12 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <h4 className="text-[20px] font-normal text-[#080808]">
                          jenny Wilson
                        </h4>
                        <p className="text-sm font-normal text-secondary">
                          Mathematics <span className="text-gray-300">•</span> Zurich International School
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-[14px] font-normal pt-1">
                      <div className="flex items-center gap-1.5 text-[#038AF9]">
                        <AnonymousIconSVG />
                        <span>100% Anonymous</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#080808]">
                        <ClockIconSVG />
                        <span>5 min</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#038AF9] pt-1">
                      schoolreview.ch/jenny Wilson
                    </p>
                  </div>

                  {/* QR Code graphic */}
                  <div className="shrink-0 flex items-center justify-center">
                    <QrScan className="w-24 h-24 text-[#080808]" />
                  </div>
                </div>

                {/* Hover Blur Overlay with Middle Edit Button */}
                <div className="absolute inset-0 bg-white/75 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    type="button"
                    onClick={onOpenEditModal}
                    style={{
                      borderRadius: "80px",
                      background: "#FFFFFF",
                      border: "1px solid #038AF9",
                    }}
                    className="p-3 shadow-md hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
                    title="Edit feedback card"
                  >
                    <EditHoverIconSVG />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Action Box: Download, Share, Copy Link */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="bg-[#038AF9] hover:bg-[#0270ce] text-white text-lg font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors cursor-pointer shrink-0"
                >
                  <DownloadIconSVG />
                  <span>Download QR Card</span>
                </button>

                <button
                  type="button"
                  className="bg-[#FAFAFA] border border-gray-200 text-[#080808] text-lg font-medium px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
                >
                  <ShareIconSVG />
                  <span>Share</span>
                </button>
              </div>

              {/* Copy Link Row */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="bg-[#FAFAFA] border border-[#E6F3FE] text-[#080808] text-base font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
                >
                  <CopyLinkIconSVG />
                  <span>{copied ? "Copied!" : "Copy Link"}</span>
                </button>

                <input
                  type="text"
                  readOnly
                  value={feedbackLink}
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #E6F3FE",
                    background: "#FAFAFA",
                    color: "#3A3A3A",
                  }}
                  className="px-4 py-2.5 text-[18px] font-normal leading-[28px] w-full focus:outline-hidden"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default StepFourShareFeedback
