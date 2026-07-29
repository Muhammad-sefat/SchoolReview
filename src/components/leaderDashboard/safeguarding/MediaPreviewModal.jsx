import React from "react"
import { X, Image as ImageIcon, Video } from "lucide-react"

const MediaPreviewModal = ({ media, onClose }) => {
  if (!media) return null

  const isVideo = media.type === "video" || media.name?.endsWith(".mp4")

  const handleClose = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    onClose()
  }

  return (
    <div
      className="absolute inset-0 z-50  backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 rounded-3xl animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-3xl p-5 md:p-6 max-w-xl w-full relative space-y-4 shadow-2xl overflow-hidden z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-[#1F1F21]">
            {isVideo ? (
              <Video className="w-4.5 h-4.5 text-[#038AF9]" />
            ) : (
              <ImageIcon className="w-4.5 h-4.5 text-[#038AF9]" />
            )}
            <span>{media.name || "Attachment Preview"}</span>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
            title="Close Preview"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Media Content Display */}
        <div className="w-full h-72 sm:h-80 bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center relative">
          {isVideo ? (
            <video
              controls
              autoPlay
              className="w-full h-full object-contain"
              src={
                media.url && media.url.startsWith("blob:")
                  ? media.url
                  : "https://www.w3schools.com/html/mov_bbb.mp4"
              }
            />
          ) : (
            <img
              src={
                media.url ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
              }
              alt="Attachment Preview"
              className="w-full h-full object-contain bg-black"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MediaPreviewModal
