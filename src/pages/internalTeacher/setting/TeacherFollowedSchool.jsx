import React, { useState } from "react"
import { Title32 } from "@/components/typho/Title"
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

const TeacherFollowedSchool = () => {
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
    <div className="w-full space-y-6 font-urbanist bg-gray-50/20 min-h-screen pb-10">
      {/* Page Title */}
      <Title32 className="text-[#080808]">Followed Schools</Title32>

      {/* Row 1: Add School to Follow */}
      <AddSchoolSection onAddSchool={handleAddSchool} />

      {/* Row 2: Followed School Notifications */}
      <FollowedSchoolNotificationsSection />

      {/* Row 3: Followed Schools Grid Cards */}
      <FollowedSchoolsGrid schools={schools} />
    </div>
  )
}

export default TeacherFollowedSchool
