import React from "react"
import littleThumbUp from "@/assets/images/littleThumbUp.png"
import littleHandshake from "@/assets/images/littleHandhshake.png"
import littleStar from "@/assets/images/littleStar.png"
import littleParty from "@/assets/images/littleParty.png"

const ChatMessageIconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.5 19.5 3.5 19.9125 2.5 20C2.98894 19.1667 3.60922 16.8818 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z" stroke="#038AF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.0033 12H12.0123M15.9988 12H16.0078M8.00781 12H8.01678" stroke="#038AF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const THANK_TEACHER_REPORTS = [
  {
    icon: littleThumbUp,
    text: "Helped me understand a topic",
    count: 8,
  },
  {
    icon: littleHandshake,
    text: "Believed in me",
    count: 1,
  },
  {
    icon: littleStar,
    text: "Supported me when I struggled",
    count: 2,
  },
  {
    icon: littleParty,
    text: "Made learning fun",
    count: 4,
  },
]

const StudentImpactSection = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#038AF9]">
          Student Impact
        </h2>
        <p className=" sm:text-[20px] text-base font-normal text-textBlack">
          Messages from students highlighting the impact of your teaching this year through ThankTeacher secure messaging.
        </p>
      </div>

      {/* Outer Container with requested class */}
      <div className="bg-[#F6F6F6] p-2 rounded-4xl border border-gray-200/60 font-urbanist w-full max-w-full">
        {/* Grid Container */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">

          {/* Left Side Content Card - Pure White */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-center space-y-4">
            <div className="text-[18px] sm:text-[20px] font-normal text-[#080808] leading-relaxed space-y-4">
              <p>
                Across 15 TellTeacher messages this year, students consistently describe a positive and supportive classroom experience. Many highlight feeling encouraged, respected, and more confident in their learning, with clear explanations and helpful guidance frequently mentioned.
              </p>
              <p>
                At the same time, some students suggest that greater clarity in instructions and more consistent checks for understanding would further support their learning. A few messages also indicate that additional examples or slower pacing in certain lessons could be beneficial.
              </p>
              <p>
                Overall, the feedback reflects a strong positive impact on students, alongside clear opportunities to further strengthen instructional clarity and support for all learners.
              </p>
            </div>
          </div>

          {/* Right Side Card: ThankTeacher Reports - Pure White */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-6 space-y-4 flex flex-col justify-between">

            {/* Header Box: border-radius: 18px; border: 1px solid #E6F3FE; background: #FAFAFA; */}
            <div
              style={{ borderRadius: "18px" }}
              className="border border-[#E6F3FE] bg-[#FAFAFA] p-4 flex items-center gap-3"
            >
              <div className="shrink-0">
                <ChatMessageIconSVG />
              </div>
              <div>
                <h3 className="text-[16px] font-medium text-[#080808]">
                  ThankTeacher Reports
                </h3>
                <p className="text-[12px] font-normal text-secondary">
                  Received this year
                </p>
              </div>
            </div>

            {/* List of ThankTeacher Report Badges */}
            <div className="space-y-3 flex-1 justify-center flex flex-col">
              {THANK_TEACHER_REPORTS.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full bg-white border border-gray-200/80 rounded-full py-2.5 px-4 flex items-center justify-between shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.text}
                      className="w-6 h-6 object-contain shrink-0"
                    />
                    <span className="text-[16px] sm:text-[18px] font-medium text-[#080808]">
                      {item.text}
                    </span>
                  </div>
                  {/* Circle Count Badge: bg-[#038AF9] text-white 14px 600 weight */}
                  <div className="w-6 h-6 rounded-full bg-[#038AF9] text-white text-[14px] font-semibold flex items-center justify-center shrink-0">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default StudentImpactSection
