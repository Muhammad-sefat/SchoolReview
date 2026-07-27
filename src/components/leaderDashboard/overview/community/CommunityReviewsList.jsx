import React, { useState, useMemo } from "react"
import { ChevronDown, ChevronUp, ArrowRight, X, Calendar } from "lucide-react"

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
        <svg
          key={i}
          className="w-4 h-4 text-[#038AF9] fill-[#038AF9]"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-[#038AF9]" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`list-half-star-${i}`}>
              <stop offset="50%" stopColor="#038AF9" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#list-half-star-${i})`}
            stroke="#038AF9"
            strokeWidth="1.5"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      )
    } else {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-[#038AF9]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>
}

const CommunityReviewsList = ({
  reviews = ALL_REVIEWS_DATA,
  selectedReviewId = 1,
  onSelectReview,
}) => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [roleFilter, setRoleFilter] = useState("All")
  const [ratingFilter, setRatingFilter] = useState("All")
  const [recFilter, setRecFilter] = useState("All")
  const [dateFilter, setDateFilter] = useState("All")
  const [customDatePicker, setCustomDatePicker] = useState("")

  // Filter logic
  const filteredReviews = useMemo(() => {
    return reviews.filter((item) => {
      if (roleFilter !== "All" && item.role !== roleFilter) return false
      if (ratingFilter === "4+ Stars" && item.rating < 4.0) return false
      if (ratingFilter === "3+ Stars" && item.rating < 3.0) return false
      if (recFilter === "Recommended" && !item.isRecommended) return false
      if (recFilter === "Not Recommended" && item.isRecommended) return false
      if (dateFilter !== "All" && item.date !== dateFilter) return false
      return true
    })
  }, [reviews, roleFilter, ratingFilter, recFilter, dateFilter])

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const resetFilters = () => {
    setRoleFilter("All")
    setRatingFilter("All")
    setRecFilter("All")
    setDateFilter("All")
    setCustomDatePicker("")
    setOpenDropdown(null)
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between h-full relative">
      {/* Click Backdrop to close open dropdown when clicking outside */}
      {openDropdown !== null && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setOpenDropdown(null)}
        />
      )}

      <div>
        {/* Header with Title and Counter Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-[#080808]">
              Reviews
            </h3>
            <span className="w-6 h-6 rounded-full bg-[#038AF9] text-white text-xs font-bold flex items-center justify-center">
              {filteredReviews.length}
            </span>
          </div>

          {(roleFilter !== "All" ||
            ratingFilter !== "All" ||
            recFilter !== "All" ||
            dateFilter !== "All") && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-medium text-[#038AF9] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Filter Pills Row - High Z-index container to prevent clipping */}
        <div className="relative z-50 flex items-center gap-2 pb-3 flex-wrap">
          {/* 1. Role Filter Pill */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => toggleDropdown("Role")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer border ${
                roleFilter !== "All"
                  ? "bg-[#038AF9]/10 text-[#038AF9] border-[#038AF9]"
                  : "bg-white border-gray-200 hover:border-gray-300 text-[#1F1F21]"
              }`}
            >
              <span>{roleFilter !== "All" ? `Role: ${roleFilter}` : "Role"}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </button>

            {openDropdown === "Role" && (
              <div className="absolute top-10 left-0 z-50 bg-white border border-gray-200 rounded-2xl p-2 shadow-2xl w-40 space-y-1 text-xs animate-fadeIn">
                {["All", "Parent", "Student", "Teacher", "Alumni"].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => {
                      setRoleFilter(role)
                      setOpenDropdown(null)
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
                      roleFilter === role
                        ? "bg-[#038AF9] text-white font-semibold"
                        : "hover:bg-gray-100 text-[#1F1F21]"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 2. Rating Filter Pill */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => toggleDropdown("Rating")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer border ${
                ratingFilter !== "All"
                  ? "bg-[#038AF9]/10 text-[#038AF9] border-[#038AF9]"
                  : "bg-white border-gray-200 hover:border-gray-300 text-[#1F1F21]"
              }`}
            >
              <span>{ratingFilter !== "All" ? `Rating: ${ratingFilter}` : "Rating"}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </button>

            {openDropdown === "Rating" && (
              <div className="absolute top-10 left-0 z-50 bg-white border border-gray-200 rounded-2xl p-2 shadow-2xl w-40 space-y-1 text-xs animate-fadeIn">
                {["All", "4+ Stars", "3+ Stars"].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => {
                      setRatingFilter(rating)
                      setOpenDropdown(null)
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
                      ratingFilter === rating
                        ? "bg-[#038AF9] text-white font-semibold"
                        : "hover:bg-gray-100 text-[#1F1F21]"
                    }`}
                  >
                    {rating}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3. Recommendation Filter Pill */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => toggleDropdown("Recommendation")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer border ${
                recFilter !== "All"
                  ? "bg-[#038AF9]/10 text-[#038AF9] border-[#038AF9]"
                  : "bg-white border-gray-200 hover:border-gray-300 text-[#1F1F21]"
              }`}
            >
              <span>{recFilter !== "All" ? recFilter : "Recommendation"}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </button>

            {openDropdown === "Recommendation" && (
              <div className="absolute top-10 left-0 z-50 bg-white border border-gray-200 rounded-2xl p-2 shadow-2xl w-44 space-y-1 text-xs animate-fadeIn">
                {["All", "Recommended", "Not Recommended"].map((rec) => (
                  <button
                    key={rec}
                    type="button"
                    onClick={() => {
                      setRecFilter(rec)
                      setOpenDropdown(null)
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
                      recFilter === rec
                        ? "bg-[#038AF9] text-white font-semibold"
                        : "hover:bg-gray-100 text-[#1F1F21]"
                    }`}
                  >
                    {rec}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4. Date Filter Pill & Interactive Date Picker Popup */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => toggleDropdown("Date")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer border ${
                dateFilter !== "All" || customDatePicker
                  ? "bg-[#038AF9]/10 text-[#038AF9] border-[#038AF9]"
                  : "bg-white border-gray-200 hover:border-gray-300 text-[#1F1F21]"
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-gray-500" />
              <span>
                {dateFilter !== "All"
                  ? `Date: ${dateFilter}`
                  : customDatePicker
                  ? customDatePicker
                  : "Date"}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </button>

            {/* Date Picker Dropdown Overlay */}
            {openDropdown === "Date" && (
              <div className="absolute top-10 right-0 sm:left-0 z-50 bg-white border border-gray-200 rounded-2xl p-3 shadow-2xl w-60 space-y-3 text-xs animate-fadeIn">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-bold text-[#1F1F21]">Select Review Date</span>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Preset Months */}
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase">
                    Presets
                  </span>
                  {["All", "Sept 2026", "Aug 2026", "Jul 2026", "Jun 2026"].map((dt) => (
                    <button
                      key={dt}
                      type="button"
                      onClick={() => {
                        setDateFilter(dt)
                        setCustomDatePicker("")
                        setOpenDropdown(null)
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
                        dateFilter === dt
                          ? "bg-[#038AF9] text-white font-semibold"
                          : "hover:bg-gray-100 text-[#1F1F21]"
                      }`}
                    >
                      {dt === "All" ? "All Dates" : dt}
                    </button>
                  ))}
                </div>

                {/* Custom Date Input */}
                <div className="pt-2 border-t border-gray-100 space-y-1">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase">
                    Custom Date
                  </span>
                  <input
                    type="date"
                    value={customDatePicker}
                    onChange={(e) => {
                      setCustomDatePicker(e.target.value)
                      setDateFilter("All")
                      setOpenDropdown(null)
                    }}
                    className="w-full border border-gray-200 rounded-xl px-2.5 py-1.5 text-xs text-[#1F1F21] outline-none focus:border-[#038AF9]"
                  />
                </div>
              </div>
            )}
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
              const isSelected = selectedReviewId === review.id

              return (
                <div key={review.id} className="relative group">
                  <div
                    onClick={() => onSelectReview && onSelectReview(review)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2.5 ${
                      isSelected
                        ? "border-[#038AF9] bg-[#038AF9]/5 shadow-xs"
                        : "border-gray-200/80 bg-white hover:border-gray-300"
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-semibold text-[#1F1F21] leading-snug">
                      {review.title}
                    </p>
                    <StarRating rating={review.rating} />
                  </div>

                  {/* Right Arrow Connector Badge for Selected Card */}
                  {isSelected && (
                    <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#038AF9] text-white flex items-center justify-center shadow-md z-10 hidden lg:flex">
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>

      {/* Bottom Pagination Controls */}
      <div className="flex items-center justify-center gap-3 pt-5">
        <button
          type="button"
          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors cursor-pointer"
          title="Previous page"
        >
          <ChevronUp className="w-4 h-4 stroke-[2.5]" />
        </button>
        <button
          type="button"
          className="w-7 h-7 rounded-full bg-[#038AF9] hover:bg-[#0274d4] text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
          title="Next page"
        >
          <ChevronDown className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  )
}

export default CommunityReviewsList
