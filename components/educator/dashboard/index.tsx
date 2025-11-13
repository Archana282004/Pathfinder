"use client"

import { EducatorNav } from "@/components/navigation/educator-nav"
import { mockSessions, mockEducatorEarnings } from "@/lib/mock-data"
import EducatorStats from "./stats-grid"
import EducatorQuickActions from "./quick-actions"
import DashboardMainGrid from "./main-grid"
import Header from "@/components/ui/header"

const EducatorDashboard = () => {
    const upcomingSessions = mockSessions.filter((s) => s.status === "upcoming" && s.educatorId === "edu-1").slice(0, 2)
    
    return (
        <div className="min-h-screen bg-background">
            <EducatorNav />
            <div className="container mx-auto px-4 py-8">
                <div className="space-y-8">
                    <Header heading="Welcome back, Dr. Johnson!" description="Manage your sessions and help students succeed" />

                    {/* Stats Grid */}
                    <EducatorStats />

                    {/* Main Content Grid */}
                    <DashboardMainGrid upcomingSessions={upcomingSessions} />

                    {/* Quick Actions */}
                    <EducatorQuickActions />
                </div>
            </div>
        </div>
    )
}

export default EducatorDashboard;