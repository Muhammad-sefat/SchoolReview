import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export const CustomSlider = ({
  min = 0,
  max = 100,
  defaultLow = 20,
  defaultHigh = 80,
  rangeText = "",
  onChange,
  className,
}) => {
  const [low, setLow] = useState(defaultLow)
  const [high, setHigh] = useState(defaultHigh)
  const trackRef = useRef(null)

  const activeThumbRef = useRef(null)

  useEffect(() => {
    if (onChange) {
      onChange(low, high)
    }
  }, [low, high, onChange])

  const getValueFromX = (clientX) => {
    if (!trackRef.current) return 0
    const rect = trackRef.current.getBoundingClientRect()
    const relativeX = clientX - rect.left
    const percentage = Math.max(0, Math.min(1, relativeX / rect.width))
    return Math.round(min + percentage * (max - min))
  }

  const handlePointerDown = (thumbType, e) => {
    e.preventDefault()
    e.stopPropagation()
    activeThumbRef.current = thumbType
    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerup", handlePointerUp)
  }

  const handlePointerMove = (e) => {
    if (!activeThumbRef.current) return
    const val = getValueFromX(e.clientX)

    if (activeThumbRef.current === "low") {
      setLow((prevLow) => Math.min(val, high - 1))
    } else if (activeThumbRef.current === "high") {
      setHigh((prevHigh) => Math.max(val, low + 1))
    }
  }

  const handlePointerUp = () => {
    activeThumbRef.current = null
    window.removeEventListener("pointermove", handlePointerMove)
    window.removeEventListener("pointerup", handlePointerUp)
  }

  const lowPercent = Math.min(Math.max(((low - min) / (max - min)) * 100, 0), 100)
  const highPercent = Math.min(Math.max(((high - min) / (max - min)) * 100, 0), 100)

  return (
    <div className={cn("flex items-center gap-3 w-full font-urbanist min-w-[140px]", className)}>
      <div ref={trackRef} className="relative w-full flex items-center h-6 touch-none select-none">
        {/* Track Background */}
        <div className="absolute w-full h-2 bg-gray-200/90 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-[#038AF9] rounded-full transition-none"
            style={{
              left: `${lowPercent}%`,
              width: `${highPercent - lowPercent}%`,
            }}
          />
        </div>

        {/* Left Thumb Handle */}
        <div
          onPointerDown={(e) => handlePointerDown("low", e)}
          className="absolute w-5 h-5 bg-white border-2 border-[#038AF9] rounded-full shadow-md cursor-grab active:cursor-grabbing z-20 -ml-2.5 hover:scale-110 transition-transform"
          style={{ left: `${lowPercent}%` }}
        />

        {/* Right Thumb Handle */}
        <div
          onPointerDown={(e) => handlePointerDown("high", e)}
          className="absolute w-5 h-5 bg-white border-2 border-[#038AF9] rounded-full shadow-md cursor-grab active:cursor-grabbing z-20 -ml-2.5 hover:scale-110 transition-transform"
          style={{ left: `${highPercent}%` }}
        />
      </div>

      {rangeText && (
        <span className="text-[12px] font-normal text-[#5A5A5A] shrink-0 whitespace-nowrap">
          {rangeText}
        </span>
      )}
    </div>
  )
}

export default CustomSlider
