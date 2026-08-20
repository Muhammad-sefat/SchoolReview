import React, { useState } from "react"
import { Info } from "lucide-react"
import { Title18 } from "@/components/typho/Title"
import DragDropUploadBox from "./common/DragDropUploadBox"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// User Provided Delete SVG Icon
const TrashCanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M19.5 5.50098L18.6139 20.122C18.5499 21.1776 17.6751 22.001 16.6175 22.001H7.38246C6.32488 22.001 5.4501 21.1776 5.38612 20.122L4.5 5.50098"
      stroke="#1F1F21"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 5.49902H8M8 5.49902L9.24025 2.6051C9.39783 2.23742 9.75937 1.99902 10.1594 1.99902H13.8406C14.2406 1.99902 14.6022 2.23742 14.7597 2.6051L16 5.49902M8 5.49902H16M21 5.49902H16"
      stroke="#1F1F21"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.5 16.5V10.5" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 16.5V10.5" stroke="#1F1F21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MediaTab = ({ register, onSubmit }) => {
  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      const newPhotoUrls = files.map((file) => URL.createObjectURL(file))
      setPhotos((prev) => [...prev, ...newPhotoUrls])
    }
  }

  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      const newVideoUrls = files.map((file) => URL.createObjectURL(file))
      setVideos((prev) => [...prev, ...newVideoUrls])
    }
  }

  const handleRemovePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  const handleRemoveVideo = (index) => {
    setVideos((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 font-urbanist text-textPrimary">
      {/* 1. PHOTO GALLERY SECTION */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-2 flex items-center gap-1.5">
          <Title18 className="text-[#080808]">Photo gallery</Title18>

          {/* Hover Tooltip showing photo gallery specs */}
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-0.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Info className="w-4 h-4 text-secondary hover:text-[#038AF9] transition-colors shrink-0" />
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="bg-white text-[#080808] p-3.5 rounded-xl max-w-xs shadow-lg space-y-1 text-xs font-urbanist border border-gray-200/90"
              >
                <p className="font-semibold text-sm text-[#080808]">Photo Gallery Requirements</p>
                <p className="text-textPrimary font-normal">• Formats: JPG, PNG, WEBP</p>
                <p className="text-textPrimary font-normal">• Max file size: 5MB per image</p>
                <p className="text-textPrimary font-normal">• Recommended ratio: 16:9 high resolution</p>
                <p className="text-textPrimary font-normal">• Showcase campus facilities & student life</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="lg:col-span-10 flex flex-wrap items-center gap-4">
          {/* Reusable Drag & Drop Upload Box */}
          <DragDropUploadBox
            onChange={handlePhotoUpload}
            accept="image/*"
            multiple={true}
            chooseText="Choose files"
            className="w-52 h-36"
          />

          {/* Uploaded Photos Grid with Delete Button */}
          {photos.map((url, idx) => (
            <div key={idx} className="relative w-36 h-36 rounded-2xl overflow-hidden border border-gray-200 shadow-2xs group shrink-0">
              <img src={url} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => handleRemovePhoto(idx)}
                className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-xs hover:bg-red-500 hover:text-white text-[#1F1F21] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                title="Remove Photo"
              >
                <TrashCanIcon />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 2. VIDEOS SECTION */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-2 flex items-center gap-1.5">
          <Title18 className="text-[#080808]">Videos</Title18>

          {/* Hover Tooltip showing video specs */}
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-0.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Info className="w-4 h-4 text-secondary hover:text-[#038AF9] transition-colors shrink-0" />
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="bg-white text-[#080808] p-3.5 rounded-xl max-w-xs shadow-lg space-y-1 text-xs font-urbanist border border-gray-200/90"
              >
                <p className="font-semibold text-sm text-[#080808]">Video & Virtual Tour Guidelines</p>
                <p className="text-textPrimary font-normal">• Video files: MP4, WebM up to 50MB</p>
                <p className="text-textPrimary font-normal">• Direct URLs: YouTube or Vimeo video links</p>
                <p className="text-textPrimary font-normal">• Virtual tour: 360° tour iframe / web URL</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="lg:col-span-10 space-y-5">
          {/* Row 1: Upload Box OR Paste Youtube Video URL */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
            {/* Upload Box */}
            <DragDropUploadBox
              onChange={handleVideoUpload}
              accept="video/*"
              multiple={true}
              chooseText="Choose files"
              className="w-52 h-36 shrink-0"
            />

            {/* Uploaded Video Thumbnails */}
            {videos.map((url, idx) => (
              <div key={idx} className="relative w-36 h-36 rounded-2xl overflow-hidden border border-gray-200 shadow-2xs group shrink-0 bg-black flex items-center justify-center">
                <video src={url} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => handleRemoveVideo(idx)}
                  className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-xs hover:bg-red-500 text-[#1F1F21] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  title="Remove Video"
                >
                  <TrashCanIcon />
                </button>
              </div>
            ))}

            {/* OR divider */}
            <span className="text-sm font-semibold text-gray-500 px-1 self-center">OR</span>

            {/* Paste Youtube video URL Input in Row 1 */}
            <div className="flex-1 min-w-[240px]">
              <input
                type="text"
                placeholder="Paste Youtube video URL"
                {...register("videoUrl")}
                className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[14px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
              />
            </div>
          </div>

          {/* Row 2 (Bottom Row): Paste Virtual Tour URL */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Paste virtual tour URL"
              {...register("virtualTourUrl")}
              className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[14px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="px-8 py-3 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-semibold transition-colors shadow-xs cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </form>
  )
}

export default MediaTab
