"use client"

import AdminNav from "@/src/components/navigation/admin-nav"
import AdminStatsGrid from "./stats-grid"
import AdminQuickActions from "./quick-actions"
import Header from "../../ui/header"
import AdminRecentUsers from "./recent-users"
import { mockAdminUsers } from "@/src/lib/mock-data"
import { useAppSelector } from "@/src/store/hooks"
import { useEffect, useState } from "react"
import { getAdminDashboard_Action } from "@/src/utils/graphql/dashboard/action"

const AdminDashboard = () => {

  // const recentUsers = mockAdminUsers.slice(0, 3);

  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.id;

  const initialAdminCards = {
    growthRate: 0,
    activeSessions: 0,
    revenue: 0,
    totalusers: 0,
  }

  interface User {
    id:string
    first_name: string,
    last_name: string
    role: string
    created_at: string
  }

  const [cards, setCards] = useState(initialAdminCards);
  const [recentUsers, setRecentUsers] = useState<User[]>([])

  useEffect(() => {
    if (!userId) return;
    const fetchAdminDashboard = async () => {
      try {
        const response = await getAdminDashboard_Action({ userId });
        setCards(response?.getAdminDashboard);
        setRecentUsers(response?.getAdminDashboard?.users)
      }
      catch (err) {
        console.log("Got with Error", err)
      }


    }

    fetchAdminDashboard();
  }, [userId])
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <Header heading="Welcome back, Admin" description="Platform overview and management" />

          {/* Stats Grid */}
          <AdminStatsGrid cards={cards} />

          {/* Main Content Grid */}
          <AdminRecentUsers recentUsers={recentUsers} />

          {/* Quick Actions */}
          <AdminQuickActions />

        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;