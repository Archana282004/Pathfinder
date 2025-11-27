"use client"

import AdminNav from "@/src/components/navigation/admin-nav"
import Header from "@/src/components/ui/header"
import UserOverview from "./user-overview"
import SessionOverview from "./session-overview"

const AdminAnalytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <Header
            heading="Analytics Dashboard"
            description="Platform metrics and insights"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {/*User Overview*/}
            <UserOverview />

            {/*Session Overview*/}
            <SessionOverview />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminAnalytics;
