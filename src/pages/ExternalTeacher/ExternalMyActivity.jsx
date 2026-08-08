import React, { useState } from "react"
import ExternalMyActivityHeader from "@/components/ExternalTeacher/myActivity/ExternalMyActivityHeader"
import MySelfReviewsTable from "@/components/internalTeacher/myActivity/MySelfReviewsTable"
import MySchoolReviewsTable from "@/components/internalTeacher/myActivity/MySchoolReviewsTable"

const ExternalMyActivity = ({ data }) => {
  const [activeTab, setActiveTab] = useState("self")

  return (
    <div className="w-full space-y-6 font-urbanist pb-10">
      {/* Top 2 Pill Tabs: Self Review / School Review */}
      <ExternalMyActivityHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab 1: Self Review */}
      {activeTab === "self" && <MySelfReviewsTable data={data?.selfReviews} />}

      {/* Tab 2: School Review */}
      {activeTab === "school" && <MySchoolReviewsTable data={data?.schoolReviews} />}
    </div>
  )
}

export default ExternalMyActivity
