"use client"

import AdminNav  from "@/src/components/navigation/admin-nav"
import AdminStatsGrid from "./stats-grid"
import AdminMainGrid from "./main-grid"
import AdminQuickActions from "./quick-actions"
import Header from "../../ui/header"

const AdminDashboard = () => {

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <Header heading="Welcome back, Admin" description="Platform overview and management"/>

          {/* Stats Grid */}
          <AdminStatsGrid />

          {/* Main Content Grid */}
          <AdminMainGrid />

          {/* Quick Actions */}
          <AdminQuickActions />

        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;