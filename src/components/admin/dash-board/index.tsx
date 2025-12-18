"use client"

import AdminStatsGrid from "./stats-grid"
import AdminQuickActions from "./quick-actions"
import Header from "../../ui/header"
import AdminRecentUsers from "./recent-users"
import { adminCardsType, adminRecentUsersType } from "@/src/types/Admintypes"

interface AdminDashboardProps {
  recentUsers: adminRecentUsersType[]
  cards: adminCardsType
}
const AdminDashboard = ({ recentUsers, cards }: AdminDashboardProps) => {

  return (
    <div className="min-h-screen bg-background">
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