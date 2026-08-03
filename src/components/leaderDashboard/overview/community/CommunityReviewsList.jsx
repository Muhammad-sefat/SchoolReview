import React, { useState, useMemo } from "react"
import { ChevronUp, ArrowRight, X } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { format } from "date-fns"

const ALL_REVIEWS_DATA = [
  {
    id: 1,
    title: "Great teachers, but workload can be challenging",
    rating: 4.5,
    role: "Parent",
    date: "Sept 2026",
    isRecommended: true,
    fullReview:
      "The academic standards and teaching quality at this school are exceptional. Teachers are genuinely dedicated to student growth and offer excellent support. However, homework load and project deadlines can occasionally cause unnecessary stress for students.",
  },
  {
    id: 2,
    title: "Safe, Inclusive Environment with Diverse Programs",
    rating: 3.0,
    role: "Parent",
    date: "Aug 2026",
    isRecommended: true,
    fullReview:
      "We appreciate the inclusive environment and extra-curricular choices available for secondary students. Staff communication has been steady and welcoming overall.",
  },
  {
    id: 3,
    title: "Great Facilities, but Communication Could Improve",
    rating: 4.0,
    role: "Student",
    date: "Jul 2026",
    isRecommended: false,
    fullReview:
      "Campus sports facilities and science labs are top tier. Response times to parent portal inquiries could be improved during exam periods.",
  },
  {
    id: 4,
    title: "Great Facilities, but Communication Could Improve",
    rating: 3.5,
    role: "Alumni",
    date: "Jun 2026",
    isRecommended: true,
    fullReview:
      "Solid foundation for university preparation. Learning resources are up to date, though administration updates could be delivered faster.",
  },
]

// Render Blue Star Rating
const StarRating = ({ rating = 4.5 }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89506 2.46196C9.44081 1.40152 10.9706 1.40152 11.5164 2.46196L13.3551 6.03523C13.3856 6.09452 13.443 6.13579 13.5093 6.14626L17.5062 6.77667C18.6917 6.96365 19.1641 8.40229 18.3164 9.24412L15.4551 12.0854C15.4076 12.1325 15.3858 12.199 15.3963 12.2647L16.027 16.2301C16.2139 17.4054 14.9765 18.2949 13.9061 17.7549L10.3011 15.9361C10.2412 15.9059 10.1702 15.9059 10.1103 15.9361L6.50534 17.7549C5.43494 18.2949 4.19759 17.4054 4.3845 16.2301L5.01518 12.2647C5.02562 12.199 5.00378 12.1325 4.95639 12.0854L2.09504 9.24412C1.24734 8.40229 1.71974 6.96365 2.90524 6.77667L6.90212 6.14626C6.96848 6.13579 7.02579 6.09452 7.0563 6.03523L8.89506 2.46196Z" fill="#038AF9" />
        </svg>
      )
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9.99609 1.45862C10.555 1.45876 11.0678 1.82974 11.4629 2.48108L11.625 2.77795L13.0918 5.73499V5.73596C13.1733 5.90371 13.3314 6.08135 13.5273 6.22717C13.7232 6.37286 13.9383 6.47355 14.1221 6.50452H14.123L16.7812 6.94983V6.94885C17.6699 7.09831 18.2857 7.51204 18.4785 8.11682C18.6711 8.72138 18.4083 9.41647 17.7686 10.0573L17.7676 10.0582L15.7021 12.1403C15.5584 12.2852 15.4375 12.5093 15.3662 12.7604C15.2963 13.0067 15.2805 13.2579 15.3223 13.4576V13.4606L15.3252 13.4723L15.916 16.0475C16.1539 17.088 16.0232 17.9121 15.4834 18.3092C14.9762 18.6819 14.2216 18.5945 13.376 18.1334L13.2061 18.0367L10.7148 16.5494C10.5302 16.4392 10.2719 16.3776 10 16.3776C9.79698 16.3776 9.60017 16.4125 9.43457 16.4762L9.28027 16.5485L9.2793 16.5494L9.27441 16.5524L6.78809 18.0367H6.78711C5.87649 18.5816 5.0552 18.7045 4.51367 18.3063C3.97313 17.9086 3.84005 17.0852 4.07812 16.0475L4.66797 13.4723L4.66992 13.4664C4.71392 13.2654 4.69791 13.0103 4.62695 12.7604C4.55564 12.5094 4.4348 12.2852 4.29102 12.1403L2.22461 10.0573C1.58889 9.41628 1.32624 8.72114 1.51758 8.11682C1.70917 7.51188 2.32388 7.09834 3.21289 6.94885L5.86914 6.50452H5.87012L5.87207 6.50354C6.05106 6.47249 6.2641 6.37287 6.45898 6.22717C6.65359 6.08164 6.81093 5.90512 6.89258 5.73792L6.89355 5.73303L8.36035 2.77795V2.77698C8.77612 1.94305 9.35735 1.45862 9.99609 1.45862Z" stroke="#038AF9" stroke-width="0.833333" />
          <path d="M7.98762 2.59127C8.43152 1.70086 9.12235 1.04163 9.99577 1.04163V16.7943C9.78227 16.795 9.60044 16.8447 9.48969 16.9091L9.4881 16.91L7.00142 18.3943C6.06073 18.9572 5.0253 19.2 4.26661 18.6418C3.5111 18.086 3.4258 17.025 3.67161 15.9539L4.26227 13.3789L4.26263 13.3772C4.28853 13.2589 4.28346 13.0756 4.22635 12.8745C4.16885 12.672 4.07718 12.5165 3.99534 12.434L1.9289 10.3505C1.2429 9.65879 0.861696 8.80863 1.12065 7.991C1.38035 7.171 2.18355 6.69979 3.1443 6.53834L5.80012 6.09345L5.80096 6.09331C5.89833 6.07642 6.05127 6.01209 6.20942 5.89386C6.36786 5.77541 6.47368 5.64608 6.51829 5.55426L6.52054 5.54968L7.98704 2.59243L7.98762 2.59127Z" fill="#038AF9" />
        </svg>
      )
    } else {
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="#038AF9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>
}

const CommunityReviewsList = ({
  reviews = ALL_REVIEWS_DATA,
  selectedReviewId = 1,
  selectedReview,
  onSelectReview,
}) => {
  const [roleFilter, setRoleFilter] = useState("All")
  const [ratingFilter, setRatingFilter] = useState("All")
  const [recFilter, setRecFilter] = useState("All")
  const [selectedDate, setSelectedDate] = useState(undefined)

  const activeId = selectedReview?.id ?? selectedReviewId ?? 1

  // Filter logic
  const filteredReviews = useMemo(() => {
    return reviews.filter((item) => {
      if (roleFilter !== "All" && item.role !== roleFilter) return false
      if (ratingFilter === "4+ Stars" && item.rating < 4.0) return false
      if (ratingFilter === "3+ Stars" && item.rating < 3.0) return false
      if (recFilter === "Recommended" && !item.isRecommended) return false
      if (recFilter === "Not Recommended" && item.isRecommended) return false
      if (selectedDate) {
        const formattedFilterDate = format(selectedDate, "MMM yyyy")
        if (item.date.toLowerCase() !== formattedFilterDate.toLowerCase()) return false
      }
      return true
    })
  }, [reviews, roleFilter, ratingFilter, recFilter, selectedDate])

  const resetFilters = () => {
    setRoleFilter("All")
    setRatingFilter("All")
    setRecFilter("All")
    setSelectedDate(undefined)
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between h-full relative">
      <div>
        {/* Header with Title and Counter Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808]">
              Reviews
            </h3>
            <span className="w-6 h-6 rounded-full bg-[#038AF9] text-white text-sm font-normal flex justify-center items-center">
              {filteredReviews.length}
            </span>
          </div>

          {(roleFilter !== "All" ||
            ratingFilter !== "All" ||
            recFilter !== "All" ||
            selectedDate !== undefined) && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-sm font-medium text-[#038AF9] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
        </div>

        {/* Filter Row with Shadcn Select Components & DatePicker */}
        <div className="relative flex items-center gap-2 pb-3 flex-wrap">
          {/* 1. Role Filter Shadcn Select */}
          <div className="w-32">
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="rounded-full border-gray-200 text-sm font-medium text-textPrimary bg-white h-8">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Role: All</SelectItem>
                <SelectItem value="Parent">Parent</SelectItem>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Teacher">Teacher</SelectItem>
                <SelectItem value="Alumni">Alumni</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 2. Rating Filter Shadcn Select */}
          <div className="w-32">
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="rounded-full border-gray-200 text-sm font-medium text-textPrimary bg-white h-8">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Rating: All</SelectItem>
                <SelectItem value="4+ Stars">4+ Stars</SelectItem>
                <SelectItem value="3+ Stars">3+ Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 3. Recommendation Filter Shadcn Select */}
          <div className="w-40">
            <Select value={recFilter} onValueChange={setRecFilter}>
              <SelectTrigger className="rounded-full border-gray-200 text-sm font-medium text-textPrimary bg-white h-8">
                <SelectValue placeholder="Recommendation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Recommendation: All</SelectItem>
                <SelectItem value="Recommended">Recommended</SelectItem>
                <SelectItem value="Not Recommended">Not Recommended</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 4. Date Picker Shadcn Component */}
          <div className="w-36">
            <DatePicker
              value={selectedDate}
              onChange={setSelectedDate}
              placeholder="Date"
              className="rounded-full border-gray-200 text-sm font-medium text-textPrimary bg-white h-8 px-3"
            />
          </div>
        </div>

        {/* Dotted Separator */}
        <div className="border-b border-dashed border-gray-200/80 mb-4" />

        {/* Reviews Cards List */}
        <div className="space-y-3.5">
          {filteredReviews.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-xs font-medium">
              No reviews match the selected filters.
            </div>
          ) : (
            filteredReviews.map((review) => {
              const isSelected = activeId === review.id

              return (
                <div key={review.id} className="relative group">
                  <div
                    onClick={() => onSelectReview && onSelectReview(review)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 relative ${isSelected
                      ? "border-[#038AF9] bg-white shadow-2xs"
                      : "border-gray-200/80 bg-white hover:border-gray-300"
                      }`}
                  >
                    <h4 className="font-urbanist text-sm sm:text-base font-normal text-[#080808] line-clamp-1 pr-6">
                      {review.title}
                    </h4>

                    <div className="flex items-center gap-2">
                      <StarRating rating={review.rating} />
                    </div>

                    {/* Active Selected Blue Arrow Badge */}
                    {isSelected && (
                      <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 z-10">
                        <div className="w-7 h-7 rounded-full bg-[#038AF9] text-white flex items-center justify-center shadow-md">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default CommunityReviewsList
