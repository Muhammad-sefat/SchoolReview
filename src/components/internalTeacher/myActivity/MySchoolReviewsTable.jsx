import React, { useState } from "react"
import { X } from "lucide-react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"

const SmallStarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.12074 1.97025C7.55734 1.1219 8.7812 1.1219 9.2178 1.97025L10.6888 4.82887C10.7132 4.8763 10.7591 4.90932 10.8121 4.91769L14.0097 5.42202C14.9581 5.5716 15.336 6.72252 14.6578 7.39598L12.3687 9.66898C12.3308 9.70665 12.3133 9.75992 12.3217 9.81245L12.8263 12.9848C12.9758 13.925 11.9859 14.6366 11.1296 14.2046L8.2456 12.7496C8.19767 12.7254 8.14087 12.7254 8.09294 12.7496L5.20896 14.2046C4.35264 14.6366 3.36276 13.925 3.51229 12.9848L4.01683 9.81245C4.02518 9.75992 4.00771 9.70665 3.9698 9.66898L1.68072 7.39598C1.00256 6.72252 1.38048 5.5716 2.32888 5.42202L5.52638 4.91769C5.57947 4.90932 5.62532 4.8763 5.64973 4.82887L7.12074 1.97025Z"
      fill="#038AF9"
    />
  </svg>
)

const LikeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z"
      stroke="#038AF9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z"
      stroke="#038AF9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_10748_202918_edit)">
      <path d="M9.38507 2.59095C9.88187 2.0527 10.1303 1.78358 10.3942 1.6266C11.0311 1.24782 11.8153 1.23604 12.4629 1.59553C12.7312 1.74452 12.9872 2.00606 13.4993 2.52916C14.0113 3.05225 14.2674 3.3138 14.4132 3.58794C14.7651 4.2494 14.7536 5.05051 14.3828 5.70112C14.2291 5.97076 13.9657 6.2245 13.4388 6.73198L7.16967 12.7702C6.17119 13.7319 5.67194 14.2128 5.04798 14.4565C4.42402 14.7002 3.73807 14.6823 2.36618 14.6464L2.17953 14.6415C1.76188 14.6306 1.55305 14.6251 1.43166 14.4873C1.31027 14.3496 1.32684 14.1369 1.35999 13.7115L1.37799 13.4805C1.47128 12.283 1.51792 11.6843 1.75174 11.1461C1.98556 10.6079 2.3889 10.171 3.19556 9.29698L9.38507 2.59095Z" stroke="#1F1F21" strokeLinejoin="round" />
      <path d="M8.66406 2.66602L13.3307 7.33268" stroke="#1F1F21" strokeLinejoin="round" />
      <path d="M9.33594 14.666H14.6693" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_10748_202918_edit">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const DeleteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M15.6016 4.40039L14.8927 16.0972C14.8415 16.9417 14.1416 17.6004 13.2956 17.6004H5.90753C5.06147 17.6004 4.36164 16.9417 4.31046 16.0972L3.60156 4.40039" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.39844 4.39961H6.39844M6.39844 4.39961L7.39064 2.08447C7.5167 1.79033 7.80593 1.59961 8.12596 1.59961H11.0709C11.3909 1.59961 11.6802 1.79033 11.8062 2.08447L12.7984 4.39961M6.39844 4.39961H12.7984M16.7984 4.39961H12.7984" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.60156 13.2004V8.40039" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.6016 13.2004V8.40039" stroke="#1F1F21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const InfoCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#038AF9" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 8V11.3333" stroke="#038AF9" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 4.66667H8.00667" stroke="#038AF9" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const INITIAL_SCHOOL_REVIEWS = [
  {
    id: 1,
    title: "Parent Perspective on Learning & Communication",
    rating: "4.5",
    date: "26 May, 2026",
    school: "Lindenhof Kantonsschule",
    status: "Active",
    response: "Based on recurring parent feedback...",
    responseDate: "28 May, 2026",
    likes: 4,
    private: false,
  },
  {
    id: 2,
    title: "Feedback on Student Support and Wellbeing",
    rating: "4.0",
    date: "14 November 2025",
    school: "Kantonsschule Zürich Nord",
    status: "Active",
    response: "Your feedback has been included in our...",
    responseDate: "28 May, 2026",
    likes: 0,
    private: true,
  },
  {
    id: 3,
    title: "Reflection on School Communication and Engagement",
    rating: "4.8",
    date: "03 March 2024",
    school: "Gymnasium Bern City",
    status: "Removed by moderation",
    response: "No update shared yet",
    responseDate: null,
    likes: 4,
    private: false,
  },
  {
    id: 4,
    title: "Parent Review of Teaching and Classroom Experience",
    rating: "4.0",
    date: "18 September 2023",
    school: "Sekundarschule Luzern West",
    status: "Active",
    response: "We appreciate your constructive feedback...",
    responseDate: "28 May, 2026",
    likes: 0,
    private: true,
  },
]

const MySchoolReviewsTable = () => {
  const [reviewsData, setReviewsData] = useState(INITIAL_SCHOOL_REVIEWS)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [removedInfoTarget, setRemovedInfoTarget] = useState(null)

  const handleDeleteConfirm = () => {
    if (deleteTarget) {
      const targetItem = deleteTarget
      setReviewsData((prev) => prev.filter((item) => item.id !== deleteTarget.id))
      setDeleteTarget(null)
      // Show the "Review removed" info modal after delete confirmation
      setRemovedInfoTarget(targetItem)
    }
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-xs font-urbanist relative">
      <div className="w-full overflow-x-auto no-scrollbar">
        <Table className="w-full text-left border-collapse">
          <TableHeader>
            <TableRow className="border-b border-gray-100 bg-[#FAFAFA]/60 hover:bg-[#FAFAFA]/60">
              <TableHead className="py-4 px-6 text-[16px] font-normal text-secondary h-auto">
                Your Feedback
              </TableHead>
              <TableHead className="py-4 px-6 text-[16px] font-normal text-secondary h-auto">
                <div className="flex items-center gap-1.5">
                  <span>School Responses</span>
                  <span className="w-4 h-4 rounded-full bg-[#038AF9] text-white text-[10px] font-bold flex items-center justify-center">
                    1
                  </span>
                </div>
              </TableHead>
              <TableHead className="py-4 px-6 text-[16px] font-normal text-secondary h-auto">
                Community Feedback
              </TableHead>
              <TableHead className="py-4 px-6 text-[16px] font-normal text-secondary text-right h-auto">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100/80">
            {reviewsData.map((row) => (
              <TableRow
                key={row.id}
                className="hover:bg-gray-50/50 transition-colors border-gray-100"
              >
                {/* Your Feedback Cell */}
                <TableCell className="py-5 px-6 space-y-1 max-w-sm">
                  <h4 className="text-[16px] font-normal text-textBlack text-[#080808]">
                    {row.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[12px] font-normal text-secondary flex-wrap">
                    <span className="text-[#038AF9] font-medium flex items-center gap-1">
                      <SmallStarIcon /> {row.rating}
                    </span>
                    <span>|</span>
                    <span>{row.date}</span>
                    <span>|</span>
                    <span>{row.school}</span>
                    <span>|</span>
                    {/* Status badge: text-[#E53935] for "Removed by moderation", text-[#66BB6A] for Active */}
                    {row.status === "Removed by moderation" ? (
                      <button
                        type="button"
                        onClick={() => setRemovedInfoTarget(row)}
                        className="text-[#E53935] font-normal hover:underline cursor-pointer"
                      >
                        {row.status}
                      </button>
                    ) : (
                      <span className="text-[#66BB6A] font-normal">
                        {row.status}
                      </span>
                    )}
                  </div>
                </TableCell>

                {/* School Responses Cell: Title 16px text-textBlack font-normal, subtext 14px */}
                <TableCell className="py-5 px-6">
                  {row.responseDate ? (
                    <div className="space-y-0.5">
                      <p className="text-[16px] text-textBlack text-[#080808] font-normal leading-normal">
                        {row.response}{" "}
                        <button
                          type="button"
                          className="text-[#038AF9] font-medium hover:underline cursor-pointer"
                        >
                          Read Response
                        </button>
                      </p>
                      <p className="text-secondary text-[14px] font-normal">
                        {row.responseDate}
                      </p>
                    </div>
                  ) : (
                    <span className="text-[16px] text-[#080808] font-normal">
                      {row.response}
                    </span>
                  )}
                </TableCell>

                {/* Community Feedback Cell: 16px for likes, 14px for private text */}
                <TableCell className="py-5 px-6">
                  {row.private ? (
                    <span className="text-secondary text-[14px] font-normal">
                      Feedback hidden for private reviews.
                    </span>
                  ) : (
                    <div className="flex items-center gap-1.5 text-[#080808] text-[16px] font-normal">
                      <LikeIcon />
                      <span>{row.likes}</span>
                    </div>
                  )}
                </TableCell>

                {/* Actions Cell */}
                <TableCell className="py-5 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full bg-[rgba(8,8,8,0.04)] hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <EditIcon />
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeleteTarget(row)}
                      className="w-8 h-8 rounded-full bg-[rgba(8,8,8,0.04)] hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                      title="Delete"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Delete Review Modal (Image 1) */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 font-urbanist">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-7 shadow-xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] font-semibold text-[#080808]">
                Delete Review?
              </h3>
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Dotted Divider */}
            <div className="border-b border-dashed border-gray-200/80 my-2" />

            {/* Modal Body */}
            <p className="text-[16px] font-normal text-textPrimary py-1">
              Are you sure you want to delete this review?
            </p>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="px-6 py-2.5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-textPrimary text-[16px] font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className="px-6 py-2.5 rounded-2xl bg-[#038AF9] hover:bg-blue-600 text-white text-[16px] font-medium transition-colors cursor-pointer shadow-xs"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Review Removed Info Modal (Image 2 - shown after delete confirmation or status click) */}
      {removedInfoTarget && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 font-urbanist">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-7 shadow-xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] font-semibold text-[#080808]">
                Review removed
              </h3>
              <button
                type="button"
                onClick={() => setRemovedInfoTarget(null)}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Dotted Divider */}
            <div className="border-b border-dashed border-gray-200/80 my-2" />

            {/* Modal Body */}
            <p className="text-[16px] font-normal text-textPrimary leading-relaxed">
              This review has been removed after moderation because it does not meet our guidelines.
            </p>

            {/* Blue Info Box */}
            <div className="bg-[#E6F4FE] border border-[#B3E1FF] text-[#038AF9] rounded-2xl p-4 flex items-center gap-3 text-[14px] font-medium my-3">
              <InfoCircleIcon />
              <span>False or misleading information</span>
            </div>

            {/* Learn More Link */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setRemovedInfoTarget(null)}
                className="text-[#038AF9] font-medium text-[14px] hover:underline cursor-pointer"
              >
                Learn more about our review guidelines
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MySchoolReviewsTable
