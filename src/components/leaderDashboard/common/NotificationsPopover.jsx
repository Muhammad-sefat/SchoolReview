import React, { useState } from "react"
import { createPortal } from "react-dom"

const NOTIFICATIONS_INITIAL_DATA = {
  today: [
    {
      id: 1,
      title: "New School Review",
      desc: "A new school review has been submitted and is waiting for your response.",
      time: "35 min ago",
      isUnread: true,
    },
    {
      id: 2,
      title: "New SpeakUp Report",
      desc: "A new safeguarding concern has been submitted for review.",
      time: "1 hour ago",
      isUnread: false,
    },
    {
      id: 3,
      title: "Observer Access Request",
      desc: "James Carter requested observer access for classroom observations.",
      time: "7 hour ago",
      isUnread: false,
    },
  ],
  thisWeek: [
    {
      id: 4,
      title: "Community Update",
      desc: "Three new parent reviews have been published this week.",
      time: "Yesterday",
      isUnread: true,
    },
    {
      id: 5,
      title: "360° School Report Ready",
      desc: "Your latest school performance report is now available.",
      time: "Yesterday",
      isUnread: false,
    },
    {
      id: 6,
      title: "Teacher Joined",
      desc: "Emily Johnson has successfully joined your school.",
      time: "2 days ago",
      isUnread: false,
    },
  ],
}

const UnreadDotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
    <circle cx="5" cy="5" r="5" fill="#FE9A00" />
  </svg>
)

const CloseCrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.3346 9.99996C18.3346 5.39758 14.6036 1.66663 10.0013 1.66663C5.39893 1.66663 1.66797 5.39758 1.66797 9.99996C1.66797 14.6023 5.39893 18.3333 10.0013 18.3333C14.6036 18.3333 18.3346 14.6023 18.3346 9.99996Z" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.4995 12.5L7.5 7.5M7.50053 12.5L12.5 7.5" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const NotificationsPopover = ({ onClose, unreadCount, onMarkAllRead }) => {
  const [data, setData] = useState(NOTIFICATIONS_INITIAL_DATA)

  const handleMarkAllAsRead = () => {
    setData((prev) => ({
      today: prev.today.map((item) => ({ ...item, isUnread: false })),
      thisWeek: prev.thisWeek.map((item) => ({ ...item, isUnread: false })),
    }))
    if (onMarkAllRead) onMarkAllRead()
  }

  return createPortal(
    <>
      {/* Full Website Blur Backdrop Overlay covering Sidebar & Entire Viewport */}
      <div
        className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Right Drawer Container */}
      <aside className="fixed right-0 top-0 bottom-0 z-[1000] w-full sm:w-[500px] md:w-[560px] bg-white h-screen shadow-2xl flex flex-col justify-between font-urbanist rounded-none text-left border-l border-gray-100 transition-all duration-300">

        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between shrink-0 bg-white">
          <h2 className="text-[24px] font-semibold text-[#080808] font-urbanist">
            Notifications
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F7F7F7] hover:bg-[#EAEAEA] flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
            title="Close notifications"
          >
            <CloseCrossIcon />
          </button>
        </div>

        {/* Scrollable Notifications Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 no-scrollbar">

          {/* TODAY Section */}
          <div className="space-y-4">
            <h3 className="text-[18px] font-medium text-[#BFBFBF] uppercase tracking-wider">
              TODAY
            </h3>

            <div className="space-y-5">
              {data.today.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-100 pb-4 space-y-1.5"
                >
                  <div className="flex items-center gap-2.5">
                    {item.isUnread && <UnreadDotIcon />}
                    <h4 className="text-[18px] font-medium text-[#080808]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[16px] font-normal text-[#5A5A5A] leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="text-sm font-normal text-[#5A5A5A] pt-0.5">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* THIS WEEK Section */}
          <div className="space-y-4 pt-2">
            <h3 className="text-[18px] font-medium text-[#BFBFBF] uppercase tracking-wider">
              THIS WEEK
            </h3>

            <div className="space-y-5">
              {data.thisWeek.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-100 pb-4 space-y-1.5"
                >
                  <div className="flex items-center gap-2.5">
                    {item.isUnread && <UnreadDotIcon />}
                    <h4 className="text-[18px] font-medium text-[#080808]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[16px] font-normal text-[#5A5A5A] leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="text-sm font-normal text-[#5A5A5A] pt-0.5">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="px-6 py-5 border-t border-gray-100 flex items-center justify-between shrink-0 bg-white">
          <button
            type="button"
            onClick={handleMarkAllAsRead}
            className="text-[16px] font-medium text-[#080808] underline hover:text-[#038AF9] transition-colors cursor-pointer"
          >
            Mark all as read
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-[16px] font-medium text-[#080808] underline hover:text-[#038AF9] transition-colors cursor-pointer"
          >
            View all notifications
          </button>
        </div>

      </aside>
    </>,
    document.body
  )
}

export default NotificationsPopover
