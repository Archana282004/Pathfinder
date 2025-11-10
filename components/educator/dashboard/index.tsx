"use client"

import { EducatorNav } from "@/components/navigation/educator-nav"
import { mockSessions, mockEducatorEarnings } from "@/lib/mock-data"
import EducatorStats from "./stats-grid"
import EducatorQuickActions from "./quick-actions"
import DashboardMainGrid from "./main-grid"

export default function EducatorDashboard() {
    const upcomingSessions = mockSessions.filter((s) => s.status === "upcoming" && s.educatorId === "edu-1").slice(0, 2)

    const totalEarnings = mockEducatorEarnings.filter((e) => e.status === "paid").reduce((sum, e) => sum + e.amount, 0)

    const activeStudents = new Set(mockSessions.filter((s) => s.educatorId === "edu-1").map((s) => s.studentId)).size
    const sessionsThisWeek = mockSessions.filter((s) => s.educatorId === "edu-1" && s.status === "upcoming").length

    return (
        <div className="min-h-screen bg-background">
            <EducatorNav />
            <div className="container mx-auto px-4 py-8">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold">Welcome back, Dr. Johnson!</h1>
                        <p className="text-muted-foreground">Manage your sessions and help students succeed</p>
                    </div>

                    {/* Stats Grid */}
                    <EducatorStats
                        totalEarnings={totalEarnings}
                        activeStudents={activeStudents}
                        sessionsThisWeek={sessionsThisWeek}
                    />

                    {/* Main Content Grid */}
                    <DashboardMainGrid upcomingSessions={upcomingSessions} />

                    {/* Quick Actions */}
                    <EducatorQuickActions />
                </div>
            </div>
        </div>
    )
}
