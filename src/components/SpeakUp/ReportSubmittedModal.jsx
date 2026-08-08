import React, { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const GreenSuccessCheckIcon = () => (
  <div
    className="w-[52px] h-[52px] rounded-[32px] flex items-center justify-center shrink-0"
    style={{ background: "rgba(19, 182, 1, 0.10)" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9987 37.9173C10.1036 37.9173 2.08203 29.8958 2.08203 20.0006C2.08203 10.1055 10.1036 2.08398 19.9987 2.08398C29.8939 2.08398 37.9154 10.1055 37.9154 20.0006C37.9154 29.8958 29.8939 37.9173 19.9987 37.9173ZM27.4654 15.6299C28.2729 15.1883 28.5695 14.1755 28.1279 13.3679C27.6862 12.5603 26.6735 12.2637 25.866 12.7053C22.8182 14.3721 20.298 17.5888 18.6035 20.1833C17.9774 21.1423 17.4424 22.0501 17.0144 22.8191C16.6151 22.4318 16.2197 22.0956 15.866 21.816C15.4032 21.4501 14.9867 21.1615 14.6831 20.9626L14.158 20.6365C13.3584 20.1805 12.3406 20.459 11.8846 21.2586C11.4286 22.058 11.7069 23.0755 12.5061 23.5318L12.8565 23.751C13.0946 23.9068 13.4281 24.1378 13.7986 24.4308C14.5612 25.0336 15.3841 25.824 15.902 26.6898C16.2198 27.2211 16.806 27.5325 17.4242 27.4985C18.0422 27.4643 18.5905 27.09 18.848 26.5271L19.0119 26.1848C19.1247 25.9541 19.2937 25.6168 19.5137 25.2013C19.9545 24.3685 20.5955 23.2293 21.3944 22.006C23.0334 19.4965 25.1797 16.8798 27.4654 15.6299Z"
        fill="#66BB6A"
      />
    </svg>
  </div>
)

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9H16C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16V15Z"
      stroke="#080808"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
      stroke="#080808"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ReportSubmittedModal = ({
  open,
  onOpenChange,
  updatePreference = "anonymous",
  accessCodeDelivery = "email",
  generatedCode = "KSZ-2025-5462",
  onDone,
  onCheckStatus,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Determine modal content based on user selections (Images 1, 2, 3, 4)
  const isAnonymous = updatePreference === "anonymous"
  const isEmail = updatePreference === "email"
  const isAccessCodeEmail = updatePreference === "access-code" && accessCodeDelivery === "email"
  const isAccessCodeNow = updatePreference === "access-code" && accessCodeDelivery === "now"

  let title = "Report submitted"
  let subtitle = "Thank you for speaking up. Your report has been submitted and will be reviewed by the school."

  if (isEmail) {
    title = "Report submitted"
    subtitle = "Your report has been submitted and will be reviewed. Updates will be sent to your email."
  } else if (isAccessCodeEmail) {
    title = "Your report has been sent."
    subtitle = "We'll email you a code to check for updates."
  } else if (isAccessCodeNow) {
    title = "Report submitted"
    subtitle = "Save this access code to check your report status. It won't be shown again."
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[480px] p-8 rounded-[24px] bg-white border border-border/60 shadow-2xl space-y-6 text-center font-urbanist">
        {/* Top Check Icon with Light Green Circle (rgba(19, 182, 1, 0.10)) */}
        <div className="flex justify-center">
          <GreenSuccessCheckIcon />
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-2">
          <h2 className="text-[24px] font-semibold text-[#080808] leading-tight">
            {title}
          </h2>
          <p className="text-[16px] font-normal text-textPrimary leading-relaxed px-2">
            {subtitle}
          </p>
        </div>

        {/* Access Code Display Box (Image 4 - Show it now option) */}
        {isAccessCodeNow && (
          <div className="p-4 rounded-2xl border border-[#F5F8FC] bg-[#FBFBFB] flex items-center justify-between gap-3 shadow-xs">
            <span className="text-[20px] font-medium text-[#080808] tracking-wide pl-2">
              {generatedCode}
            </span>
            <button
              type="button"
              onClick={handleCopyCode}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-muted/60 transition-colors cursor-pointer text-base font-normal text-[#080808]"
            >
              <CopyIcon />
              <span>{copied ? "Copied!" : "Copy Code"}</span>
            </button>
          </div>
        )}

        {/* Modal Buttons */}
        <div className="pt-2">
          {isAccessCodeNow ? (
            /* Image 4: Dual buttons (Done & Check status) */
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onDone}
                className="flex-1 h-12 bg-white hover:bg-muted/40 border border-border/80 text-[#080808] font-semibold text-[16px] rounded-xl transition-all cursor-pointer"
              >
                Done
              </button>
              <button
                type="button"
                onClick={onCheckStatus}
                className="flex-1 h-12 bg-[#038AF9] hover:bg-[#038AF9]/90 text-white font-semibold text-[16px] rounded-xl shadow-sm transition-all cursor-pointer active:scale-[0.99]"
              >
                Check status
              </button>
            </div>
          ) : (
            /* Images 1, 2, 3: Single primary Done button */
            <button
              type="button"
              onClick={onDone}
              className="w-full h-12 bg-[#038AF9] hover:bg-[#038AF9]/90 text-white font-semibold text-[16px] rounded-xl shadow-sm transition-all cursor-pointer active:scale-[0.99]"
            >
              Done
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ReportSubmittedModal
