import React, { useState } from "react"
import { ChevronDown, ChevronUp, Check } from "lucide-react"
import DeleteAccountModal from "@/components/evaluator/setting/DeleteAccountModal"
import DeleteReviewsModal from "@/components/evaluator/setting/DeleteReviewsModal"

const PrivacyDataTab = () => {
  // Download options state
  const [downloadOptions, setDownloadOptions] = useState({
    profile: false,
    reviews: false,
    permissions: false,
  })

  // Accordion state for "Learn More About Your Data" (Default: false / collapsed)
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)

  // Modals state
  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false)
  const [isDeleteReviewsOpen, setIsDeleteReviewsOpen] = useState(false)

  const toggleDownloadOption = (key) => {
    setDownloadOptions((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleDownload = () => {
    console.log("Download My Data requested with options:", downloadOptions)
  }

  return (
    <div className="space-y-6 font-urbanist">
      {/* Card 1: Download My Data */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="space-y-1">
          <h3 className="text-[20px] font-semibold text-[#080808]">Download My Data</h3>
          <p className="text-[16px] font-normal text-[#5A5A5A]">
            Export a copy of your personal data and account activity.
          </p>
        </div>

        <div className="border-t border-dashed border-gray-200 pt-6 space-y-4">
          <h4 className="text-[18px] font-medium text-[#080808]">Choose what to include:</h4>

          <div className="space-y-3">
            {[
              { id: "profile", label: "Profile information" },
              { id: "reviews", label: "Reviews & Feedback" },
              { id: "permissions", label: "Permissions & Consents" },
            ].map((item) => (
              <label
                key={item.id}
                onClick={() => toggleDownloadOption(item.id)}
                className="flex items-center gap-3 cursor-pointer select-none w-fit"
              >
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                    downloadOptions[item.id]
                      ? "bg-[#038AF9] border-[#038AF9] text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {downloadOptions[item.id] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className="text-[16px] font-normal text-[#080808]">{item.label}</span>
              </label>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleDownload}
              className="px-6 py-2.5 rounded-xl bg-[#038AF9] hover:bg-[#0274d4] text-white text-[16px] font-medium transition-colors shadow-xs cursor-pointer"
            >
              Download Data
            </button>
          </div>
        </div>
      </div>

      {/* Card 2: Delete My Account */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
        <div className="space-y-1">
          <h3 className="text-[20px] font-semibold text-[#080808]">Delete My Account</h3>
          <p className="text-[16px] font-normal text-[#5A5A5A]">
            Permanently delete your account and personal data. This action cannot be undone.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsDeleteAccountOpen(true)}
          className="px-6 py-2.5 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white text-[16px] font-medium transition-colors shadow-xs cursor-pointer"
        >
          Delete My Account
        </button>
      </div>

      {/* Card 3: Delete My Reviews */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
        <div className="space-y-1">
          <h3 className="text-[20px] font-semibold text-[#080808]">Delete My Reviews</h3>
          <p className="text-[16px] font-normal text-[#5A5A5A]">
            Permanently delete the reviews and feedback you have submitted.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsDeleteReviewsOpen(true)}
          className="px-6 py-2.5 rounded-xl bg-[#FF9500] hover:bg-amber-600 text-white text-[16px] font-medium transition-colors shadow-xs cursor-pointer"
        >
          Delete My Reviews
        </button>
      </div>

      {/* Card 4: Learn More About Your Data (Accordion Header with Left Blue Chevron Icon) */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs transition-all">
        <button
          type="button"
          onClick={() => setIsLearnMoreOpen(!isLearnMoreOpen)}
          className="w-full flex items-start gap-3 text-left cursor-pointer focus:outline-none"
        >
          {isLearnMoreOpen ? (
            <ChevronUp className="w-5 h-5 text-[#038AF9] shrink-0 mt-1" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#038AF9] shrink-0 mt-1" />
          )}
          <div className="space-y-1">
            <h3 className="text-[20px] font-semibold text-[#080808]">Learn More About Your Data</h3>
            <p className="text-[16px] font-normal text-[#5A5A5A]">
              Additional information about how SchoolReview stores, protects, and processes your data.
            </p>
          </div>
        </button>

        {/* Expandable Content Container */}
        {isLearnMoreOpen && (
          <div className="pt-6 space-y-8 border-t border-gray-100 mt-6">
            {/* 1. Data Retention */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-[18px] font-semibold text-[#080808]">Data Retention</h4>
                <p className="text-[16px] font-normal text-[#5A5A5A]">
                  We aim to retain personal data only for as long as necessary to provide platform services, maintain security, and meet legal obligations.
                </p>
              </div>

              {/* Data Retention Table */}
              <div className="border border-gray-200/80 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200/80 bg-gray-50/60">
                      <th className="py-3.5 px-6 text-[16px] font-semibold text-[#080808] w-1/3">Data Type</th>
                      <th className="py-3.5 px-6 text-[16px] font-semibold text-[#080808]">Retention</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                      <td className="py-3.5 px-6 text-[16px] font-medium text-[#080808]">Account data</td>
                      <td className="py-3.5 px-6 text-[16px] font-normal text-[#5A5A5A]">Deleted 30 days after account deletion request</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 text-[16px] font-medium text-[#080808]">Reviews & feedback</td>
                      <td className="py-3.5 px-6 text-[16px] font-normal text-[#5A5A5A]">Deleted or anonymised after deletion request where technically possible</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 text-[16px] font-medium text-[#080808]">Survey responses</td>
                      <td className="py-3.5 px-6 text-[16px] font-normal text-[#5A5A5A]">May be retained in anonymised form for benchmarking and reporting</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 text-[16px] font-medium text-[#080808]">Audit & security logs</td>
                      <td className="py-3.5 px-6 text-[16px] font-normal text-[#5A5A5A]">Retained for up to 12 months</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 text-[16px] font-medium text-[#080808]">Inactive accounts</td>
                      <td className="py-3.5 px-6 text-[16px] font-normal text-[#5A5A5A]">May be deleted after 24 months of inactivity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2. AI & Data Processing */}
            <div className="space-y-2">
              <h4 className="text-[18px] font-semibold text-[#080808]">AI & Data Processing</h4>
              <p className="text-[16px] font-normal text-[#5A5A5A] leading-relaxed">
                SchoolReview uses automated tools and AI-assisted processing to summarize feedback, detect safety risks, and generate school performance insights. Data processed for AI features is aggregated or anonymized where applicable and is never sold to third parties.
              </p>
            </div>

            {/* 3. Hosting & Security */}
            <div className="space-y-2">
              <h4 className="text-[18px] font-semibold text-[#080808]">Hosting & Security</h4>
              <p className="text-[16px] font-normal text-[#5A5A5A] leading-relaxed">
                Your data is stored securely in compliant cloud data centers with strict access controls, encryption at rest and in transit, and continuous security monitoring.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Delete Account Modal */}
      {isDeleteAccountOpen && (
        <DeleteAccountModal
          isOpen={isDeleteAccountOpen}
          onClose={() => setIsDeleteAccountOpen(false)}
          onConfirmDelete={() => console.log("Account deleted")}
        />
      )}

      {/* Delete Reviews Modal */}
      {isDeleteReviewsOpen && (
        <DeleteReviewsModal
          isOpen={isDeleteReviewsOpen}
          onClose={() => setIsDeleteReviewsOpen(false)}
          onConfirmDelete={() => console.log("Reviews deleted")}
        />
      )}
    </div>
  )
}

export default PrivacyDataTab
