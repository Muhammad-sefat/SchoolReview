import React from "react"
import SchoolCard from "./SchoolCard"

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

const FollowedSchoolsGrid = ({ schools = INITIAL_SCHOOLS }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {schools.map((school) => (
        <SchoolCard key={school.id} school={school} />
      ))}
    </div>
  )
}

export default FollowedSchoolsGrid
