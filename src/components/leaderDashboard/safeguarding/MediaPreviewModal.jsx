import React from "react"
import { X, FileText, Image as ImageIcon, Video } from "lucide-react"

const MediaPreviewModal = ({ media, onClose }) => {
  if (!media) return null

  const isVideo = media.type === "video" || media.name?.endsWith(".mp4")

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 max-w-2xl w-full relative space-y-4 shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-[#1F1F21]">
            {isVideo ? (
              <Video className="w-4 h-4 text-[#038AF9]" />
            ) : (
              <ImageIcon className="w-4 h-4 text-[#038AF9]" />
            )}
            <span>{media.name || "Attachment Preview"}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Media Preview Box */}
        <div className="w-full h-80 bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center relative">
          {isVideo ? (
            <video
              controls
              autoPlay
              className="w-full h-full object-contain"
              src={media.url || "https://www.w3schools.com/html/mov_bbb.mp4"}
            />
          ) : (
            <img
              src={
                media.url ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
              }
              alt="Attachment Preview"
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MediaPreviewModal
