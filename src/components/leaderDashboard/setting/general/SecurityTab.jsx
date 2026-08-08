import React, { useState } from "react"
import ChangePasswordModal from "./ChangePasswordModal"
import SetupTwoFactorModal from "./SetupTwoFactorModal"

const SecurityTab = () => {
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)
  const [isSetupTwoFactorOpen, setIsSetupTwoFactorOpen] = useState(false)

  return (
    <div className="space-y-4 font-urbanist">
      {/* Box 1: Password */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-[20px] font-semibold text-[#080808]">Password</h3>
          <p className="text-[16px] font-normal text-textPrimary">
            Change your password to keep your account secure
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsChangePasswordOpen(true)}
          className="text-[#038AF9] hover:underline text-[16px] font-medium cursor-pointer shrink-0"
        >
          Change Password
        </button>
      </div>

      {/* Box 2: Two-Factor Authentication */}
      <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-[20px] font-semibold text-[#080808]">Two-Factor Authentication</h3>
          <p className="text-[16px] font-normal text-textPrimary">
            Enabled via email - <span className="font-normal text-textPrimary">firstlastname@schoolname.edu</span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsSetupTwoFactorOpen(true)}
          className="text-[#038AF9] hover:underline text-[16px] font-medium cursor-pointer shrink-0"
        >
          Change Method
        </button>
      </div>

      {/* Modals */}
      <ChangePasswordModal
        isOpen={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
      />

      <SetupTwoFactorModal
        isOpen={isSetupTwoFactorOpen}
        onClose={() => setIsSetupTwoFactorOpen(false)}
      />
    </div>
  )
}

export default SecurityTab
