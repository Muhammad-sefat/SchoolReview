import React from "react"
import { Title24 } from "@/components/typho/Title"
import AdministratorProfileTab from "@/components/leaderDashboard/setting/general/AdministratorProfileTab"

const MyProfilePage = () => {
  return (
    <div className="w-full space-y-6 font-urbanist">
      <div className="space-y-1">
        <Title24 className="text-[#080808] font-semibold">My Profile</Title24>
        <p className="text-[16px] font-normal text-[#5A5A5A]">
          Manage your personal account details and profile information.
        </p>
      </div>

      {/* Reuse exact AdministratorProfileTab component */}
      <AdministratorProfileTab />
    </div>
  )
}

export default MyProfilePage
