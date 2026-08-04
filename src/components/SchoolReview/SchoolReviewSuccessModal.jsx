import React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Info } from "lucide-react"

const GreenSuccessCheckIcon = () => (
  <div
    className="w-[52px] h-[52px] rounded-[32px] flex items-center justify-center shrink-0"
    style={{ background: "rgba(102, 187, 106, 0.10)" }}
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

const BlueEnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M7.49791 8.77938C7.80426 9.23892 7.68009 9.85978 7.22057 10.1661L5.5955 11.2495C4.99774 11.648 4.60665 11.91 4.32063 12.1419C4.05086 12.3607 3.9335 12.5074 3.86017 12.645C3.83086 12.7 3.80433 12.7613 3.78101 12.837L12.3978 18.007C13.4176 18.619 14.1198 19.0389 14.7032 19.3131C15.2662 19.5778 15.6439 19.6693 15.9992 19.6693C16.3546 19.6693 16.7323 19.5778 17.2952 19.3131C17.8787 19.0389 18.5808 18.619 19.6007 18.007L28.2174 12.837C28.194 12.7613 28.1675 12.7 28.1382 12.645C28.0648 12.5074 27.9475 12.3607 27.6778 12.1419C27.3918 11.91 27.0007 11.648 26.4028 11.2495L24.7778 10.1661C24.3183 9.85978 24.1942 9.23892 24.5004 8.77938C24.8068 8.31986 25.4278 8.19569 25.8872 8.50204L27.5487 9.6097C28.1002 9.9773 28.5702 10.2906 28.9375 10.5885C29.3291 10.9061 29.6608 11.2496 29.9031 11.7043C30.1706 12.2059 30.2652 12.7222 30.3035 13.2818C30.3332 13.7153 30.3315 14.2294 30.3295 14.8255L30.3294 14.8582C30.3238 16.5377 30.308 18.2533 30.2647 19.9913L30.2628 20.0691C30.2134 22.0526 30.1734 23.6527 29.9463 24.9402C29.708 26.2914 29.2503 27.391 28.3115 28.3298C27.3707 29.2706 26.2623 29.7275 24.8996 29.9655C23.5991 30.1927 21.979 30.2331 19.9675 30.2834L19.8899 30.2854C17.2884 30.3503 14.71 30.3503 12.1085 30.2854L12.0309 30.2834C10.0194 30.2331 8.39935 30.1927 7.09886 29.9655C5.7361 29.7275 4.62773 29.2706 3.68697 28.3298C2.74817 27.391 2.29041 26.2914 2.0521 24.9402C1.82503 23.6527 1.78513 22.0526 1.73565 20.0691L1.7337 19.9913C1.69031 18.2533 1.6747 16.5378 1.66905 14.8582L1.66894 14.8258C1.66693 14.2295 1.66519 13.7153 1.69487 13.2818C1.73318 12.7221 1.82783 12.2059 2.09523 11.7043C2.33755 11.2496 2.66926 10.9061 3.06089 10.5885C3.42821 10.2906 3.89821 9.97732 4.44966 9.6097L6.11117 8.50204C6.57069 8.19569 7.19157 8.31986 7.49791 8.77938Z"
      fill="#038AF9"
    />
    <path
      d="M20.0706 1.66602C21.2686 1.66598 22.2676 1.66595 23.0606 1.77256C23.8977 1.88511 24.6534 2.13267 25.2606 2.73996C25.868 3.34726 26.1156 4.10299 26.2281 4.94004C26.3348 5.73308 26.3346 6.73203 26.3346 7.92999V15.9994C26.3346 16.5516 25.8869 16.9994 25.3346 16.9994C24.7824 16.9994 24.3346 16.5516 24.3346 15.9994V7.99935C24.3346 6.714 24.3325 5.85059 24.246 5.20654C24.1632 4.59126 24.0202 4.32794 23.8465 4.15418C23.6728 3.98042 23.4094 3.83746 22.7941 3.75474C22.1501 3.66815 21.2866 3.66602 20.0013 3.66602H12.0013C10.716 3.66602 9.85254 3.66815 9.20849 3.75474C8.59321 3.83746 8.32989 3.98042 8.15613 4.15418C7.98237 4.32794 7.83941 4.59126 7.75669 5.20654C7.6701 5.85059 7.66797 6.714 7.66797 7.99935V15.9994C7.66797 16.5516 7.22026 16.9994 6.66797 16.9994C6.11569 16.9994 5.66797 16.5516 5.66797 15.9994V7.93002C5.66793 6.73206 5.6679 5.73308 5.77452 4.94004C5.88706 4.10299 6.13462 3.34726 6.74192 2.73996C7.34921 2.13267 8.10494 1.88511 8.942 1.77256C9.73504 1.66595 10.734 1.66598 11.9319 1.66602H20.0706Z"
      fill="#038AF9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.332 13.3333C12.332 13.8856 12.7798 14.3333 13.332 14.3333H18.6654C19.2176 14.3333 19.6654 13.8856 19.6654 13.3333C19.6654 12.7811 19.2176 12.3333 18.6654 12.3333H13.332C12.7798 12.3333 12.332 12.7811 12.332 13.3333ZM12.332 8C12.332 8.55228 12.7798 9 13.332 9H18.6654C19.2176 9 19.6654 8.55228 19.6654 8C19.6654 7.44772 19.2176 7 18.6654 7H13.332C12.7798 7 12.332 7.44772 12.332 8Z"
      fill="#038AF9"
    />
  </svg>
)

const SchoolReviewSuccessModal = ({ open, onOpenChange, onClose, mode = "student" }) => {
  const isTeacherOrParent = mode === "teacher" || mode === "parent"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[480px] p-8 rounded-[24px] bg-white border border-border/60 shadow-2xl space-y-6 text-center font-urbanist">
        {/* Top Icon Container */}
        <div className="flex justify-center">
          {isTeacherOrParent ? (
            <GreenSuccessCheckIcon />
          ) : (
            <div
              className="w-14 h-14 rounded-[32px] flex items-center justify-center shrink-0"
              style={{ background: "rgba(3, 138, 249, 0.10)" }}
            >
              <BlueEnvelopeIcon />
            </div>
          )}
        </div>

        {/* Modal Title & Subtitle */}
        <div className="space-y-3">
          <h2 className="text-[24px] font-semibold text-[#080808] leading-tight">
            Thank you for your review!
          </h2>

          {!isTeacherOrParent ? (
            <div className="space-y-1 text-[18px] font-normal text-textPrimary leading-relaxed">
              <p>Check your email and click the confirmation link to publish your review.</p>
              <p>The email should arrive within a few seconds.</p>
            </div>
          ) : (
            <p className="text-[18px] font-normal text-textPrimary leading-relaxed">
              Your feedback has been submitted successfully and will be reviewed by the school.
            </p>
          )}
        </div>

        {/* Info Box (For Student / Email Mode) */}
        {!isTeacherOrParent && (
          <div className="bg-[#F0F7FF] border border-[#D0E6FF] p-3.5 rounded-xl flex items-center gap-2.5 text-left">
            <Info className="w-5 h-5 shrink-0 text-[#038AF9]" />
            <span className="text-[16px] font-normal text-textPrimary">
              Your review stays anonymous.
            </span>
          </div>
        )}

        {/* Footer Buttons / Action */}
        {isTeacherOrParent ? (
          /* Image 4: Primary blue Done button */
          <div className="pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full h-12 bg-[#038AF9] hover:bg-[#038AF9]/90 text-white font-semibold text-[16px] rounded-xl shadow-sm transition-all cursor-pointer active:scale-[0.99]"
            >
              Done
            </button>
          </div>
        ) : (
          /* Image 2: Resend footer subtext */
          <div className="pt-2 text-[14px] text-muted-foreground">
            Didn't get it? Check your spam folder or{" "}
            <button
              type="button"
              onClick={onClose}
              className="text-primary underline font-medium hover:text-primary/80 transition-colors cursor-pointer"
            >
              Resend
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default SchoolReviewSuccessModal
