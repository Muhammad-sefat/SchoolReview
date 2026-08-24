import React, { useState } from "react"
import { Title24 } from "@/components/typho/Title"
import AddSchoolSection from "@/components/leaderDashboard/setting/followedSchool/AddSchoolSection"
import FollowedSchoolNotificationsSection from "@/components/leaderDashboard/setting/followedSchool/FollowedSchoolNotificationsSection"
import FollowedSchoolsGrid from "@/components/leaderDashboard/setting/followedSchool/FollowedSchoolsGrid"

const INITIAL_SCHOOLS = [
  {
    id: 1,
    name: "Zurich International School",
    isVerified: true,
    location: "Zurich, Switzerland",
    type: "Private",
    rating: 4.5,
    reviewsCount: "1,020",
  },
  {
    id: 2,
    name: "Gymnasium Bern City",
    isVerified: false,
    location: "Zurich, Switzerland",
    type: "Private",
    rating: 4.5,
    reviewsCount: "1,020",
  },
  {
    id: 3,
    name: "Sekundarschule Luzern West",
    isVerified: true,
    location: "Zurich, Switzerland",
    type: "Private",
    rating: 4.5,
    reviewsCount: "1,020",
  },
  {
    id: 4,
    name: "Zurich International School",
    isVerified: false,
    location: "Zurich, Switzerland",
    type: "Private",
    rating: 4.5,
    reviewsCount: "1,020",
  },
]

const FollowedSchoolsPage = () => {
  const [schools, setSchools] = useState(INITIAL_SCHOOLS)

  const handleAddSchool = (newSchoolName) => {
    const newSchoolObj = {
      id: Date.now(),
      name: newSchoolName,
      isVerified: false,
      location: "Zurich, Switzerland",
      type: "Private",
      rating: 4.5,
      reviewsCount: "1",
    }
    setSchools((prev) => [newSchoolObj, ...prev])
  }

  return (
    <div className="w-full space-y-6 font-urbanist">
      {/* Page Title */}
      <Title24 className="text-[#080808] font-semibold">Followed Schools</Title24>

      {/* Row 1: Add School to Follow */}
      <AddSchoolSection onAddSchool={handleAddSchool} />

      {/* Row 2: Followed School Notifications */}
      <FollowedSchoolNotificationsSection />

      {/* Row 3: Followed Schools Grid Cards */}
      <FollowedSchoolsGrid schools={schools} />
    </div>
  )
}

export default FollowedSchoolsPage
