import React from "react"

const DragDropUploadBox = ({
  onChange,
  accept = "*",
  multiple = false,
  subLabel = "Drag & drop files here",
  chooseText = "Choose files",
  className = "w-52 h-36",
}) => {
  return (
    <label
      className={`border border-dashed border-[#038AF9] rounded-2xl p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50/40 transition-colors bg-white shrink-0 ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M10.0005 9.01101C9.16474 8.38194 8.12582 8.00917 7 8.00917C6.83823 8.00917 6.67826 8.01687 6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273"
          stroke="#5A5A5A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 16L12 13.5L14.5 16M12 21V14.1088"
          stroke="#5A5A5A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-sm text-secondary font-normal mt-1.5">{subLabel}</span>
      <span className="text-xs text-secondary my-0.5">or</span>
      <span className="text-sm text-textPrimary font-medium underline">{chooseText}</span>
      <input
        type="file"
        multiple={multiple}
        className="hidden"
        accept={accept}
        onChange={onChange}
      />
    </label>
  )
}

export default DragDropUploadBox
