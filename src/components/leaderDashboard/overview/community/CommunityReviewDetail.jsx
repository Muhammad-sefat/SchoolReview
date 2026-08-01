import React, { useState } from "react"
import { CheckCircle2, Sparkles } from "lucide-react"
import VoiceInputButton from "../../../common/VoiceInputButton"
import FullReviewModal from "../../communityFeedback/FullReviewModal"
import { TbCheck } from "react-icons/tb";
import checkImage from "@/assets/images/check.png"
// Star rating display
const DetailStarRating = ({ rating = 4.5 }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.6772 0.954397C9.3321 -0.318133 11.1679 -0.318133 11.8228 0.954397L14.0293 5.24233C14.0659 5.31348 14.1347 5.363 14.2143 5.37556L19.0106 6.13205C20.4332 6.35643 21.0001 8.0828 19.9828 9.093L16.5492 12.5025C16.4923 12.559 16.4661 12.6389 16.4787 12.7177L17.2355 17.4762C17.4598 18.8865 15.9749 19.9539 14.6905 19.3059L10.3645 17.1234C10.2926 17.0871 10.2074 17.0871 10.1355 17.1234L5.80953 19.3059C4.52505 19.9539 3.04024 18.8865 3.26453 17.4762L4.02134 12.7177C4.03387 12.6389 4.00766 12.559 3.95079 12.5025L0.517179 9.093C-0.500071 8.0828 0.0668085 6.35643 1.48941 6.13205L6.28567 5.37556C6.3653 5.363 6.43407 5.31348 6.47069 5.24233L8.6772 0.954397Z" fill="#038AF9" />
        </svg>
      )
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9.99609 1.45862C10.555 1.45876 11.0678 1.82974 11.4629 2.48108L11.625 2.77795L13.0918 5.73499V5.73596C13.1733 5.90371 13.3314 6.08135 13.5273 6.22717C13.7232 6.37286 13.9383 6.47355 14.1221 6.50452H14.123L16.7812 6.94983V6.94885C17.6699 7.09831 18.2857 7.51204 18.4785 8.11682C18.6711 8.72138 18.4083 9.41647 17.7686 10.0573L17.7676 10.0582L15.7021 12.1403C15.5584 12.2852 15.4375 12.5093 15.3662 12.7604C15.2963 13.0067 15.2805 13.2579 15.3223 13.4576V13.4606L15.3252 13.4723L15.916 16.0475C16.1539 17.088 16.0232 17.9121 15.4834 18.3092C14.9762 18.6819 14.2216 18.5945 13.376 18.1334L13.2061 18.0367L10.7148 16.5494C10.5302 16.4392 10.2719 16.3776 10 16.3776C9.79698 16.3776 9.60017 16.4125 9.43457 16.4762L9.28027 16.5485L9.2793 16.5494L9.27441 16.5524L6.78809 18.0367H6.78711C5.87649 18.5816 5.0552 18.7045 4.51367 18.3063C3.97313 17.9086 3.84005 17.0852 4.07812 16.0475L4.66797 13.4723L4.66992 13.4664C4.71392 13.2654 4.69791 13.0103 4.62695 12.7604C4.55564 12.5094 4.4348 12.2852 4.29102 12.1403L2.22461 10.0573C1.58889 9.41628 1.32624 8.72114 1.51758 8.11682C1.70917 7.51188 2.32388 7.09834 3.21289 6.94885L5.86914 6.50452H5.87012L5.87207 6.50354C6.05106 6.47249 6.2641 6.37287 6.45898 6.22717C6.65359 6.08164 6.81093 5.90512 6.89258 5.73792L6.89355 5.73303L8.36035 2.77795V2.77698C8.77612 1.94305 9.35735 1.45862 9.99609 1.45862Z" stroke="#038AF9" stroke-width="0.833333" />
          <path d="M7.98762 2.59127C8.43152 1.70086 9.12235 1.04163 9.99577 1.04163V16.7943C9.78227 16.795 9.60044 16.8447 9.48969 16.9091L9.4881 16.91L7.00142 18.3943C6.06073 18.9572 5.0253 19.2 4.26661 18.6418C3.5111 18.086 3.4258 17.025 3.67161 15.9539L4.26227 13.3789L4.26263 13.3772C4.28853 13.2589 4.28346 13.0756 4.22635 12.8745C4.16885 12.672 4.07718 12.5165 3.99534 12.434L1.9289 10.3505C1.2429 9.65879 0.861696 8.80863 1.12065 7.991C1.38035 7.171 2.18355 6.69979 3.1443 6.53834L5.80012 6.09345L5.80096 6.09331C5.89833 6.07642 6.05127 6.01209 6.20942 5.89386C6.36786 5.77541 6.47368 5.64608 6.51829 5.55426L6.52054 5.54968L7.98704 2.59243L7.98762 2.59127Z" fill="#038AF9" />
        </svg>
      )
    } else {
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="#038AF9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>
}

const CommunityReviewDetail = ({ selectedReview }) => {
  const [responseText, setResponseText] = useState("")
  const [showFullReviewModal, setShowFullReviewModal] = useState(false)
  const [isGeneratingAi, setIsGeneratingAi] = useState(false)

  const review = selectedReview || {
    id: 1,
    title: "Great teachers, but workload can be challenging",
    rating: 4.5,
    role: "Parent",
    date: "Sept 2026",
    isRecommended: true,
    fullReview:
      "The academic standards and teaching quality at this school are exceptional. Teachers are genuinely dedicated to student growth and offer excellent support. However, homework load and project deadlines can occasionally cause unnecessary stress for students.",
  }

  const handleVoiceTranscript = (text) => {
    setResponseText((prev) => (prev ? `${prev} ${text}` : text))
  }

  const handleGenerateAiResponse = () => {
    setIsGeneratingAi(true)
    setTimeout(() => {
      setResponseText(
        `Thank you for sharing your feedback. We are proud of our dedicated teaching staff and take student workload balance very seriously. Our academic team is actively reviewing assignment schedules to ensure a balanced homework load.`
      )
      setIsGeneratingAi(false)
    }, 800)
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-xs flex flex-col justify-between h-full space-y-6 font-urbanist">
      {/* Top Review Info Card Container */}
      <div className="border border-gray-100 rounded-3xl p-5 space-y-4 bg-gray-50/30">
        {/* Title */}
        <h3 className="font-urbanist text-xl sm:text-2xl font-semibold text-textPrimary">
          {review.title}
        </h3>

        {/* Rating Score & Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span className="font-medium text-textBlack ">{review.rating}</span>
            <DetailStarRating rating={review.rating} />

            {/* Recommended Badge */}
            <div className="flex items-center gap-2 text-base font-normal ml-4">

              <img src={checkImage} alt="check" />

              <span className="text-textBlack text-base">Recommended</span>
            </div>
          </div>

          <div className="text-textPrimary text-base! font-normal">
            {review.role}, {review.date}
          </div>
        </div>

        {/* Dotted Separator */}
        <div className="border-b border-dashed border-gray-200/80" />

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => setShowFullReviewModal(true)}
            className="px-4 py-2 rounded-xl border border-primary hover:bg-primary hover:text-white bg-[#FAFAFA] text-base font-medium transition-colors cursor-pointer"
          >
            Read Full Review
          </button>

          <button
            type="button"
            onClick={handleGenerateAiResponse}
            className="px-4 py-2 rounded-xl border hover:bg-primary hover:text-white border-[#EAEAEA] bg-[#FAFAFA] text-textPrimary text-base font-medium transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Generate AI Summary</span>
          </button>
        </div>
      </div>

      {/* Full Review Modal Trigger */}
      <FullReviewModal
        isOpen={showFullReviewModal}
        onClose={() => setShowFullReviewModal(false)}
        review={review}
      />

      {/* School Response Section */}
      <div className="space-y-3.5 flex-1 flex flex-col justify-between">
        <h4 className="font-medium text-sm sm:text-base text-textPrimary">
          School Response
        </h4>

        {/* Response Input Box with VoiceInputButton */}
        <div className="relative w-full border border-gray-200/80 rounded-2xl p-3 bg-white focus-within:border-[#038AF9] focus-within:ring-2 focus-within:ring-[#038AF9]/20 transition-all flex-1 min-h-[140px] flex flex-col justify-between">
          <div className="flex items-start gap-2">
            {/* Mic Voice Input Button from components/common/VoiceInputButton */}
            <VoiceInputButton
              onTranscript={handleVoiceTranscript}
              className=" -mt-0.5"
            />
            <textarea
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              placeholder="Write your response to this review or use the Generate AI Response button."
              className="w-full h-full bg-transparent border-none outline-none resize-none text-sm sm:text-base text-textPrimary placeholder-secondary focus:ring-0 p-0"
              rows={4}
            />
          </div>
        </div>

        {/* Primary Action Button */}
        <div>
          <button
            type="button"
            onClick={handleGenerateAiResponse}
            disabled={isGeneratingAi}
            className="px-6 py-3 rounded-2xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-sm md:text-lg font-semibold transition-all shadow-xs cursor-pointer flex items-center gap-2"
          >

            <span>
              {isGeneratingAi ? "Generating..." : "Generate AI Response"}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommunityReviewDetail
