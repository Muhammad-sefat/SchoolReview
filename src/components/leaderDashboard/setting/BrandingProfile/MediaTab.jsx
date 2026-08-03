import React, { useState } from "react"
import { Info, Upload, X } from "lucide-react"
import { Title18 } from "@/components/typho/Title"

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
    <form onSubmit={onSubmit} className="space-y-10 font-urbanist text-textPrimary py-4">
      {/* 1. PHOTO GALLERY SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start border-b border-gray-100 pb-10">
        <div className="lg:col-span-2 flex items-center gap-1.5">
          <Title18 className="text-[#080808]">Photo gallery</Title18>
          <Info className="w-4 h-4 text-secondary shrink-0" />
        </div>

        <div className="lg:col-span-10 flex flex-wrap items-center gap-4">
          {/* Drag & Drop Upload Box */}
          <label className="border border-dashed border-[#038AF9] rounded-2xl p-6 w-52 h-32 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50/40 transition-colors bg-white shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M10.0005 9.01101C9.16474 8.38194 8.12582 8.00917 7 8.00917C6.83823 8.00917 6.67826 8.01687 6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.5 16L12 13.5L14.5 16M12 21V14.1088" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="text-sm text-secondary font-normal">Drag & drop files here</span>
            <span className="text-xs text-secondary my-0.5">or</span>
            <span className="text-sm text-textPrimary font-medium underline">Choose files</span>
            <input type="file" multiple className="hidden" accept="image/*" onChange={handlePhotoUpload} />
          </label>

          {/* Uploaded Photos Grid with Close (X) Buttons */}
          {photos.map((url, idx) => (
            <div key={idx} className="relative w-36 h-32 rounded-2xl overflow-hidden border border-gray-200 shadow-2xs group shrink-0">
              <img src={url} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => handleRemovePhoto(idx)}
                className="absolute top-2 right-2 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer shadow-md"
                title="Remove Photo"
              >
                <X className="w-3 h-3 stroke-[2.5]" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 2. VIDEOS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start border-b border-gray-100 pb-10">
        <div className="lg:col-span-2 flex items-center gap-1.5">
          <Title18 className="text-[#080808]">Videos</Title18>
          <Info className="w-4 h-4 text-secondary shrink-0" />
        </div>

        <div className="lg:col-span-10 flex flex-wrap items-center gap-4">
          {/* Drag & Drop Upload Box */}
          <label className="border border-dashed border-[#038AF9] rounded-2xl p-6 w-52 h-32 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50/40 transition-colors bg-white shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M10.0005 9.01101C9.16474 8.38194 8.12582 8.00917 7 8.00917C6.83823 8.00917 6.67826 8.01687 6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.5 16L12 13.5L14.5 16M12 21V14.1088" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="text-sm text-secondary font-normal">Drag & drop files here</span>
            <span className="text-xs text-secondary my-0.5">or</span>
            <span className="text-sm text-textPrimary font-medium underline">Choose files</span>
            <input type="file" multiple className="hidden" accept="video/*" onChange={handleVideoUpload} />
          </label>

          {/* Uploaded Video Thumbnails with Close (X) Buttons */}
          {videos.map((url, idx) => (
            <div key={idx} className="relative w-36 h-32 rounded-2xl overflow-hidden border border-gray-200 shadow-2xs group shrink-0 bg-black flex items-center justify-center">
              <video src={url} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => handleRemoveVideo(idx)}
                className="absolute top-2 right-2 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer shadow-md"
                title="Remove Video"
              >
                <X className="w-3 h-3 stroke-[2.5]" />
              </button>
            </div>
          ))}

          {/* OR divider */}
          <span className="text-sm font-semibold text-gray-500 px-2">OR</span>

          {/* Video Link Inputs */}
          <div className="flex-1 min-w-[280px] space-y-3">
            <input
              type="text"
              placeholder="Paste Youtube video URL"
              {...register("videoUrl")}
              className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:border-[#038AF9] outline-none text-[14px] font-normal text-[#080808] placeholder:text-gray-400 bg-white"
            />
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
      <div className="flex justify-end pt-4">
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
