"use client"

import Header from "@/src/components/ui/header"
import UserOverview from "./user-overview"
import SessionOverview from "./session-overview"
import { sessionStatusType, userOverviewType } from "@/src/types/Admintypes"


interface AdminAnalytics {
  userOverviewData: userOverviewType
  sessionData: sessionStatusType
}

const AdminAnalytics = ({userOverviewData, sessionData} : AdminAnalytics) => {

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <Header
            heading="Analytics Dashboard"
            description="Platform metrics and insights"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {/*User Overview*/}
            <UserOverview
              userOverviewData={userOverviewData}
            />

            {/*Session Overview*/}
            <SessionOverview sessionData={sessionData}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminAnalytics;
