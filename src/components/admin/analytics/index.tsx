"use client"

import AdminNav from "@/src/components/navigation/admin-nav"
import Header from "@/src/components/ui/header"
import UserOverview from "./user-overview"
import SessionOverview from "./session-overview"
import { useEffect, useState } from "react"
import { useAppSelector } from "@/src/store/hooks"
import { analytics_Action } from "@/src/utils/graphql/analytics/action"

interface sessionStatus {
  cancelled: number,
  completed: number,
  upcoming: number,
  expired: number
}
interface userOverview {
  educators: number,
  students: number,
  total: number
}

const AdminAnalytics = () => {
  
  const initialSessionoverviewData = {
    cancelled: 0,
    completed: 0,
    upcoming: 0,
    expired: 0
  }
  const [sessionData, setSessionData] = useState<sessionStatus>(initialSessionoverviewData)

  const initialuseroverviewdata = {
    educators: 0,
    students: 0,
    total: 0
  }
  const [userOverviewData, setUserOverviewData] = useState<userOverview>(initialuseroverviewdata)

  const user = useAppSelector((state) => state.auth.user)
  const userId = user?.id
 useEffect(() => {
  if (!userId) return;

  const fetchAdminAnalytics = async () => {
    const response = await analytics_Action();
    setSessionData(response?.getAnalytics?.sessionStatus);
    setUserOverviewData(response?.getAnalytics?.userOverview);
  };

  fetchAdminAnalytics();
}, [userId]);  

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
