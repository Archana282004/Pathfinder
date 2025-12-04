"use client"

import EducatorNav  from "@/src/components/navigation/educator-nav"
import { mockSessions } from "@/src/lib/mock-data"
import EducatorStats from "./stats-grid"
import EducatorQuickActions from "./quick-actions"
import DashboardMainGrid from "./main-grid"
import Header from "@/src/components/ui/header"
import { useAppSelector } from "@/src/store/hooks"

const EducatorDashboard = () => {
    const upcomingSessions = mockSessions.filter((s) => s.status === "upcoming" && s.educatorId === "edu-1").slice(0, 2)
    const user = useAppSelector((state)=>state.auth.user);
    const username = user?.first_name +" "+ user?.last_name;
    
    
    return (
        <div className="min-h-screen bg-background">
            <EducatorNav />
            <div className="container mx-auto px-4 py-8">
                <div className="space-y-8">
                    <Header heading={`Welcome back, ${username}`} description="Manage your sessions and help students succeed" />

                    {/* Stats Grid */}
                    <EducatorStats />

                    {/* Main Content Grid */}
                    <DashboardMainGrid/>

                    {/* Quick Actions */}
                    <EducatorQuickActions />
                </div>
            </div>
        </div>
    )
}

export default EducatorDashboard;