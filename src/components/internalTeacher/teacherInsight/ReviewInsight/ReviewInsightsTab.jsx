import React, { useState, useMemo } from "react"
import { ChevronRight, Maximize2, Minimize2, X } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { format } from "date-fns"
import { Switch } from "@/components/ui/switch"

const REVIEWS_LIST = [
  {
    id: 1,
    title: "Great teachers, but workload can be challenging",
    rating: 4.5,
    role: "Student",
    date: "Sept 2026",
    strengths:
      "One of the biggest strengths of the school is the supportive teaching staff, who are generally approachable and willing to help students understand their lessons.",
    areasForImprovement:
      "While the overall experience is positive, there are areas that could be improved. Academic workload can feel overwhelming during exam periods, and better coordination across subjects could help reduce pressure on students.",
  },
  {
    id: 2,
    title: "Safe, Inclusive Environment with Diverse Programs",
    rating: 3.0,
    role: "Student",
    date: "Aug 2026",
    strengths:
      "Inclusive atmosphere where students feel welcome and valued regardless of background.",
    areasForImprovement:
      "Extracurricular schedule could be expanded slightly.",
  },
  {
    id: 3,
    title: "Great Facilities, but Communication Could Improve",
    rating: 4.0,
    role: "Student",
    date: "Jul 2026",
    strengths:
      "Modern classrooms and excellent technology resources.",
    areasForImprovement:
      "Assignment deadlines could be posted earlier.",
  },
  {
    id: 4,
    title: "Great Facilities, but Communication Could Improve",
    rating: 3.5,
    role: "Student",
    date: "Jun 2026",
    strengths:
      "Great library and quiet study areas.",
    areasForImprovement:
      "More feedback on draft assignments.",
  },
]

const SUB_CATEGORIES = [
  { id: "climate", label: "Classroom Climate" },
  { id: "quality", label: "Teaching Quality" },
  { id: "environment", label: "Learning Environment" },
  { id: "impact", label: "Learning Impact" },
]

const SUB_CATEGORY_FEEDBACK_MAP = {
  climate: [
    {
      title: "Classroom Safety",
      tag: "Sometimes feel uncomfortable",
      rating: 4.5,
      text: "Most students feel safe and comfortable in class. However, this becomes less consistent during transitions, where noise and loss of focus create moments of instability.",
    },
    {
      title: "Student Wellbeing",
      tag: "Usually feel good",
      rating: 3.5,
      text: "Students generally feel positive in class. However, when behaviour is corrected loudly, some students feel unsettled or anxious, which can affect their confidence and ability to stay focused.",
    },
  ],
  quality: [
    {
      title: "Teaching Clarity",
      tag: "Clear explanations",
      rating: 4.8,
      text: "Lessons are delivered with high clarity, structured slides, and clear instructions.",
    },
    {
      title: "Pacing & Engagement",
      tag: "Good pace",
      rating: 4.2,
      text: "Lesson speed is suitable for most learners with interactive activities.",
    },
  ],
  environment: [
    {
      title: "Classroom Setup & Resources",
      tag: "Well-equipped",
      rating: 4.5,
      text: "Desks, digital boards, and learning material are easily accessible and organized.",
    },
  ],
  impact: [
    {
      title: "Academic Growth",
      tag: "High impact",
      rating: 4.0,
      text: "Formative assessments demonstrate steady student understanding and improvement.",
    },
  ],
}

// All Categories Dataset for Expand All View
const ALL_SUB_CATEGORIES_FEEDBACK = [
  {
    category: "Classroom Climate",
    items: [
      {
        title: "Classroom Safety",
        tag: "Sometimes feel uncomfortable",
        rating: 4.5,
        text: "Most students feel safe and comfortable in class. However, this becomes less consistent during transitions, where noise and loss of focus create moments of instability.",
      },
      {
        title: "Student Wellbeing",
        tag: "Usually feel good",
        rating: 3.5,
        text: "Students generally feel positive in class. However, when behaviour is corrected loudly, some students feel unsettled or anxious, which can affect their confidence and ability to stay focused.",
      },
    ],
  },
  {
    category: "Teaching Quality",
    items: [
      {
        title: "Teaching Clarity",
        tag: "Clear explanations",
        rating: 4.8,
        text: "Lessons are delivered with high clarity, structured slides, and clear instructions.",
      },
      {
        title: "Pacing & Engagement",
        tag: "Good pace",
        rating: 4.2,
        text: "Lesson speed is suitable for most learners with interactive activities.",
      },
    ],
  },
  {
    category: "Learning Environment",
    items: [
      {
        title: "Classroom Setup & Resources",
        tag: "Well-equipped",
        rating: 4.5,
        text: "Desks, digital boards, and learning material are easily accessible and organized.",
      },
    ],
  },
  {
    category: "Learning Impact",
    items: [
      {
        title: "Academic Growth",
        tag: "High impact",
        rating: 4.0,
        text: "Formative assessments demonstrate steady student understanding and improvement.",
      },
    ],
  },
]

const BlueStarRating = ({ rating = 4.5 }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.6772 2.9544C11.3321 1.68187 13.1679 1.68187 13.8228 2.9544L16.0293 7.24233C16.0659 7.31348 16.1347 7.363 16.2143 7.37556L21.0106 8.13205C22.4332 8.35643 23.0001 10.0828 21.9828 11.093L18.5492 14.5025C18.4923 14.559 18.4661 14.6389 18.4787 14.7177L19.2355 19.4762C19.4598 20.8865 17.9749 21.9539 16.6905 21.3059L12.3645 19.1234C12.2926 19.0871 12.2074 19.0871 12.1355 19.1234L7.80953 21.3059C6.52505 21.9539 5.04024 20.8865 5.26453 19.4762L6.02134 14.7177C6.03387 14.6389 6.00766 14.559 5.95079 14.5025L2.09504 9.24351C1.24734 8.40168 1.71974 6.96304 2.90524 6.77605L6.90212 6.14565C6.96848 6.13518 7.02579 6.09391 7.0563 6.03462L8.89506 2.46135Z" fill="#038AF9" />
        </svg>
      )
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M11.998 1.75C12.7648 1.75 13.4593 2.33214 13.9531 3.33301V3.33398L15.7139 6.88281V6.88379C15.8116 7.08496 16.0003 7.29776 16.2354 7.47266C16.4117 7.60385 16.6015 7.70411 16.7783 7.76172L16.9502 7.80469L20.1396 8.33887C21.2064 8.51811 21.9463 9.01434 22.1777 9.74023C22.4087 10.4656 22.0937 11.2995 21.3262 12.0684L21.3242 12.0703L18.8457 14.5684C18.6731 14.7423 18.528 15.0112 18.4424 15.3125C18.3585 15.6081 18.3395 15.9097 18.3896 16.1494V16.1504L18.3906 16.1523L18.3916 16.1602L18.3936 16.166L19.1025 19.2568C19.3881 20.5058 19.2311 21.4952 18.583 21.9717C17.9339 22.4486 16.9464 22.2968 15.8496 21.6436L12.8613 19.8594C12.6398 19.7271 12.3293 19.6533 12.0029 19.6533C11.7187 19.6533 11.4447 19.71 11.2285 19.8125L11.1396 19.8584L11.1387 19.8594L11.1328 19.8623L8.14844 21.6436V21.6445C7.05548 22.2986 6.06884 22.4459 5.41895 21.9678C4.77037 21.4905 4.61078 20.502 4.89648 19.2568L5.60547 16.166L5.60645 16.1602V16.1572C5.65865 15.9163 5.64056 15.6115 5.55566 15.3125C5.47008 15.0113 5.32489 14.7423 5.15234 14.5684L2.67285 12.0684C1.91002 11.2992 1.59461 10.4654 1.82422 9.74023C2.05416 9.0142 2.79232 8.51818 3.85938 8.33887L7.0459 7.80566L7.04785 7.80469H7.0498C7.26459 7.76741 7.52006 7.64748 7.75391 7.47266C7.98725 7.29815 8.1754 7.08625 8.27344 6.88574L8.27637 6.87988L8.27539 6.87891L10.0342 3.33398L10.0352 3.33496V3.33301H10.0361C10.5351 2.33224 11.2315 1.75 11.998 1.75Z" stroke="#038AF9" />
          <path d="M9.58827 3.10957C10.1209 2.04108 10.95 1.25 11.9981 1.25V20.1532C11.7419 20.154 11.5237 20.2137 11.3907 20.291L11.3889 20.2921L8.40483 22.0732C7.276 22.7487 6.03349 23.04 5.12306 22.3702C4.21644 21.7032 4.11409 20.43 4.40906 19.1447L5.11785 16.0547L5.11828 16.0527C5.14936 15.9107 5.14328 15.6908 5.07475 15.4494C5.00575 15.2064 4.89574 15.0199 4.79753 14.9209L2.3178 12.4206C1.4946 11.5906 1.03716 10.5704 1.3479 9.58925C1.65954 8.60525 2.62338 8.0398 3.77628 7.84606L6.96327 7.31219L6.96428 7.31202C7.08112 7.29175 7.26465 7.21456 7.45443 7.07268C7.64456 6.93054 7.77154 6.77535 7.82507 6.66516L7.82777 6.65967L9.58757 3.11097L9.58827 3.10957Z" fill="#038AF9" />
        </svg>
      )
    } else {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="#038AF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>
}

const ReviewInsightsTab = () => {
  const [selectedReviewId, setSelectedReviewId] = useState(1)
  const [activeSubCategory, setActiveSubCategory] = useState("climate")
  const [isExpanded, setIsExpanded] = useState(false)
  const [alwaysExpand, setAlwaysExpand] = useState(false)

  const [roleFilter, setRoleFilter] = useState("All")
  const [ratingFilter, setRatingFilter] = useState("All")
  const [selectedDate, setSelectedDate] = useState(undefined)

  const filteredReviews = useMemo(() => {
    return REVIEWS_LIST.filter((item) => {
      if (roleFilter !== "All" && item.role.toLowerCase() !== roleFilter.toLowerCase()) return false
      if (ratingFilter === "4+ Stars" && item.rating < 4.0) return false
      if (ratingFilter === "3+ Stars" && item.rating < 3.0) return false
      if (selectedDate) {
        const formattedFilterDate = format(selectedDate, "MMM yyyy")
        if (item.date.toLowerCase() !== formattedFilterDate.toLowerCase()) return false
      }
      return true
    })
  }, [roleFilter, ratingFilter, selectedDate])

  const resetFilters = () => {
    setRoleFilter("All")
    setRatingFilter("All")
    setSelectedDate(undefined)
  }

  const selectedReview =
    filteredReviews.find((r) => r.id === selectedReviewId) || filteredReviews[0] || REVIEWS_LIST[0]

  const currentFeedbackItems = SUB_CATEGORY_FEEDBACK_MAP[activeSubCategory] || SUB_CATEGORY_FEEDBACK_MAP["climate"]

  const handleSelectReview = (id) => {
    setSelectedReviewId(id)
    if (alwaysExpand) {
      setIsExpanded(true)
    }
  }

  return (
    <div className="w-full grid grid-cols-1 xlg:grid-cols-12 gap-6 items-stretch font-urbanist">
      {/* Left Reviews List Column (4 Cols) */}
      <div className="xlg:col-span-4 bg-white rounded-3xl border border-gray-100 p-5 shadow-xs space-y-4 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Header with Title, Badge, Shadcn Switch & Reset */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <h3 className="font-urbanist text-2xl font-bold text-[#080808]">
                Reviews
              </h3>
              <span className="w-6 h-6 rounded-full bg-[#038AF9] text-white text-xs font-bold flex justify-center items-center">
                {filteredReviews.length}
              </span>
            </div>

            {/* Shadcn Switch for Always Expand */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-medium text-[#5A5A5A]">Always expand</span>
              <Switch
                checked={alwaysExpand}
                onCheckedChange={(checked) => {
                  setAlwaysExpand(checked)
                  setIsExpanded(checked)
                }}
              />
            </div>

            {(roleFilter !== "All" || ratingFilter !== "All" || selectedDate !== undefined) && (
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

          {/* Clickable Filter Dropdowns */}
          <div className="flex items-center gap-2 flex-wrap text-sm font-normal text-[#080808]">
            <div className="w-28">
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="rounded-full border-gray-200 text-sm font-medium text-textPrimary bg-white h-8">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent className="rounded-xl font-urbanist">
                  <SelectItem value="All">Role: All</SelectItem>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Parent">Parent</SelectItem>
                  <SelectItem value="Teacher">Teacher</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-28">
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="rounded-full border-gray-200 text-sm font-medium text-textPrimary bg-white h-8">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent className="rounded-xl font-urbanist">
                  <SelectItem value="All">Rating: All</SelectItem>
                  <SelectItem value="4+ Stars">4+ Stars</SelectItem>
                  <SelectItem value="3+ Stars">3+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* DatePicker */}
            <div className="w-28">
              <DatePicker
                value={selectedDate}
                onChange={setSelectedDate}
                placeholder="Date"
                showIcon={false}
                showChevron={true}
                className="rounded-full border-gray-200 text-sm font-medium text-textPrimary bg-white h-8 px-3"
              />
            </div>
          </div>

          {/* Dotted Separator */}
          <div className="border-b border-dashed border-gray-200/80" />

          {/* Review Items List */}
          <div className="space-y-3">
            {filteredReviews.map((item) => {
              const isSelected = item.id === selectedReview?.id
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectReview(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                    isSelected
                      ? "border-[#038AF9] bg-white shadow-2xs"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  <h4 className="font-medium text-sm sm:text-base text-[#080808] pr-6">
                    {item.title}
                  </h4>
                  <div className="pt-2">
                    <BlueStarRating rating={item.rating} />
                  </div>

                  {/* Active Selected Blue Right Arrow */}
                  {isSelected && (
                    <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#038AF9] text-white flex items-center justify-center shadow-md z-10">
                      <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Right Review Detail Column (8 Cols) */}
      <div className="xlg:col-span-8 bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-xs space-y-6 flex flex-col justify-between">
        <div className="space-y-6">
          {/* Top Header: Title, Rating, Subtitle Meta */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-[24px] font-semibold text-textPrimary leading-tight">
                {selectedReview.title}
              </h2>
              <div className="flex items-center gap-2">
                <span className="font-medium text-textPrimary text-base">
                  {selectedReview.rating}
                </span>
                <BlueStarRating rating={selectedReview.rating} />
              </div>
            </div>
            <span className="text-sm sm:text-base font-normal text-textPrimary shrink-0">
              {selectedReview.role}, {selectedReview.date}
            </span>
          </div>

          {/* Dotted Separator */}
          <div className="border-b border-dashed border-gray-200/80" />

          {/* Strengths Section */}
          <div className="space-y-1.5">
            <h4 className="text-base font-medium text-[#080808]">
              Strengths
            </h4>
            <p className="text-base font-normal text-textPrimary leading-relaxed">
              {selectedReview.strengths}
            </p>
          </div>

          {/* Areas for Improvement Section */}
          <div className="space-y-1.5">
            <h4 className="text-base font-medium text-[#080808]">
              Areas for Improvement
            </h4>
            <p className="text-base font-normal text-textPrimary leading-relaxed">
              {selectedReview.areasForImprovement}
            </p>
          </div>

          {/* Bottom Sub-Category Container */}
          <div className="border border-gray-200/80 rounded-2xl p-5 bg-white space-y-5">
            <div className="flex gap-5 flex-col md:flex-row items-start">
              {/* Left Sub-Category Column (ALWAYS VISIBLE & Aligned to TOP via justify-start) */}
              <div className="max-w-[208px] w-full border border-gray-200/60 rounded-2xl p-2.5 bg-white space-y-2 flex flex-col justify-start shrink-0 min-h-[220px]">
                {SUB_CATEGORIES.map((cat) => {
                  const isActive = activeSubCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveSubCategory(cat.id)}
                      className={`w-full text-center px-4 py-2.5 rounded-full text-base transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "bg-[#038AF9] text-white font-medium shadow-2xs"
                          : "bg-[#FAFAFA] border border-gray-200/60 text-textPrimary font-normal hover:bg-gray-100"
                      }`}
                    >
                      {cat.label}
                    </button>
                  )
                })}
              </div>

              {/* Right Content Box (Expands height smoothly displaying all categories when isExpanded) */}
              <div className="bg-white border flex-1 w-full border-gray-200/80 rounded-2xl shadow-2xs overflow-hidden flex flex-col justify-between transition-all duration-500 ease-in-out min-h-[220px]">
                <div>
                  {/* Top Bar with Expand All / Hide All Toggle */}
                  <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-start bg-white">
                    <button
                      type="button"
                      onClick={() => setIsExpanded((prev) => !prev)}
                      className="text-[#038AF9] hover:underline text-sm font-medium inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <Minimize2 className="w-3.5 h-3.5 text-[#038AF9]" />
                          <span>Hide All</span>
                        </>
                      ) : (
                        <>
                          <Maximize2 className="w-3.5 h-3.5 text-[#038AF9]" />
                          <span>Expand All</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Sub-Category Feedback Body */}
                  <div className="p-5 transition-all duration-500 ease-in-out">
                    {isExpanded ? (
                      /* Expanded View: All Category Groups with Badges & Dotted Dividers */
                      <div className="space-y-6 animate-fadeIn transition-all duration-500">
                        {ALL_SUB_CATEGORIES_FEEDBACK.map((catGroup, groupIdx) => (
                          <div key={groupIdx} className="space-y-4">
                            {/* Category Badge Header Row */}
                            <div className="flex items-center justify-between gap-4">
                              <div />
                              <span className="px-3.5 py-1 rounded-full bg-[#FAFAFA] border border-gray-200/60 text-textPrimary text-xs sm:text-sm font-normal shrink-0">
                                {catGroup.category}
                              </span>
                            </div>

                            {/* Feedback Items inside Category */}
                            <div className="space-y-4">
                              {catGroup.items.map((fb, itemIdx) => (
                                <div key={itemIdx} className="space-y-2 border-b border-gray-100 last:border-none pb-4 last:pb-0 font-urbanist">
                                  <div className="flex items-center gap-3 flex-wrap">
                                    <h5 className="font-semibold text-base text-[#080808]">
                                      {fb.title}
                                    </h5>
                                    {fb.tag && (
                                      <span className="px-3 py-1 rounded-full text-sm font-normal text-textPrimary bg-white border border-[#90D0FF]">
                                        {fb.tag}
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-normal text-textPrimary">{fb.rating}</span>
                                    <BlueStarRating rating={fb.rating} />
                                  </div>
                                  <p className="text-base font-normal text-textPrimary leading-relaxed">
                                    {fb.text}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Dotted Divider between Category Blocks */}
                            {groupIdx < ALL_SUB_CATEGORIES_FEEDBACK.length - 1 && (
                              <div className="border-b border-dashed border-gray-200/80 pt-2 my-4" />
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Collapsed Single Category Feedback List */
                      <div className="space-y-4 animate-fadeIn transition-all duration-500">
                        {currentFeedbackItems.map((fb, idx) => (
                          <div key={idx} className="space-y-2 border-b border-gray-100 last:border-none pb-4 last:pb-0">
                            <div className="flex items-center gap-3 flex-wrap">
                              <h5 className="font-medium text-base text-[#080808]">
                                {fb.title}
                              </h5>
                              {fb.tag && (
                                <span className="px-3 py-1 rounded-full text-sm font-normal text-textPrimary bg-white border border-[#90D0FF]">
                                  {fb.tag}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-normal text-textPrimary">{fb.rating}</span>
                              <BlueStarRating rating={fb.rating} />
                            </div>
                            <p className="text-base font-normal text-textPrimary leading-relaxed">
                              {fb.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewInsightsTab
