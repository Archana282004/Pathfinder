"use client"

import { AdminNav } from "@/components/navigation/admin-nav"
import { mockAnalytics } from "@/lib/mock-data"
import AdminStatsGrid from "./stats-grid"
import AdminMainGrid from "./main-grid"
import AdminQuickActions from "./quick-actions"

export default function AdminDashboard() {

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Platform overview and management</p>
          </div>

          {/* Stats Grid */}
          <AdminStatsGrid mockAnalytics={mockAnalytics} />

          {/* Main Content Grid */}
          <AdminMainGrid />

          {/* Quick Actions */}
          <AdminQuickActions />

        </div>
      </div>
    </div>
  )
}
