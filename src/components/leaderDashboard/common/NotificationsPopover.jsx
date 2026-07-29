import React from "react"
import { X } from "lucide-react"

const NOTIFICATIONS_DATA = {
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

const NotificationsPopover = ({ onClose, unreadCount, onMarkAllRead }) => {
  return (
    <>
      {/* Click Backdrop to close */}
      <div
        className="fixed inset-0 z-40 bg-transparent"
        onClick={onClose}
      />

      <div className="absolute right-0 top-14 z-50 bg-white border border-gray-100 rounded-3xl shadow-2xl w-[340px] sm:w-[420px] p-5 sm:p-6 space-y-5 text-left animate-fadeIn max-h-[85vh] overflow-y-auto no-scrollbar">
        {/* Popover Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="font-urbanist md:text-[24px] text-lg font-bold text-textPrimary">
            Notifications
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Section 1: TODAY */}
        <div className="space-y-4">
          <p className="md:text-lg text-sm font-semibold text-[#BFBFBF] tracking-wider uppercase">
            TODAY
          </p>

          <div className="space-y-4">
            {NOTIFICATIONS_DATA.today.map((item) => (
              <div
                key={item.id}
                className="border-b border-[#E0E0E0] pb-3.5 space-y-1"
              >
                <div className="flex items-center gap-2">

                  <h4 className="md:text-[20px] text-base font-medium text-textPrimary">
                    {item.title}
                  </h4>
                </div>
                <p className="text-base text-secondary leading-normal pl-1">
                  {item.desc}
                </p>
                <p className="text-sm text-secondary pl-1 pt-0.5">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: THIS WEEK */}
        <div className="space-y-4 pt-1">
          <p className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">
            THIS WEEK
          </p>

          <div className="space-y-4">
            {NOTIFICATIONS_DATA.thisWeek.map((item) => (
              <div
                key={item.id}
                className="border-b border-[#E0E0E0] pb-3.5 space-y-1"
              >
                <div className="flex items-center gap-2">

                  <h4 className="md:text-[20px] text-base font-medium text-textPrimary">
                    {item.title}
                  </h4>
                </div>
                <p className="text-base text-secondary leading-normal pl-1">
                  {item.desc}
                </p>
                <p className="text-sm text-secondary pl-1 pt-0.55">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Popover Footer Links */}
        <div className="flex items-center justify-between pt-2 md:text-lg text-sm font-medium border-t border-gray-100">
          <button
            type="button"
            onClick={onMarkAllRead}
            className="text-textPrimary underline hover:text-[#038AF9] transition-colors cursor-pointer"
          >
            Mark all as read
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-[#1F1F21] underline hover:text-[#038AF9] transition-colors cursor-pointer"
          >
            View all notifications
          </button>
        </div>
      </div>
    </>
  )
}

export default NotificationsPopover
