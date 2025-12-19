"use client"

import { mockChatConversations } from "@/src/lib/mock-data"
import StatsGrid from "./stats-grid"
import StudentQuickActions from "./quick-actions"
import DashboardMainGrid from "./main-grid"
import Header from "@/src/components/ui/header"
import { StudentDashboardDataType } from "@/src/types/Studenttypes"

interface StudentDashboardProps{
    user:any;
    dashboardData: StudentDashboardDataType;
}
const StudentDashboard = ({user, dashboardData}:StudentDashboardProps) => {

    const recentMessages = mockChatConversations.slice(0, 2).map((conv) => ({
        id: conv.id,
        from: conv.participantName,
        message: conv.lastMessage,
        time: conv.lastMessageTime,
    }))

    const username = JSON.parse(user || "{}")?.first_name + " " + JSON.parse(user || "{}")?.last_name;
    
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="space-y-8">
                    <Header heading= {`Welcome back, ${username}!`} description="Here's what's happening with your college journey" />

                    {/* Stats Grid */}
                    <StatsGrid dashboardData={dashboardData}/>
                    {/* Main Content Grid */}
                    <DashboardMainGrid
                        recentMessages={recentMessages}
                    />
                    {/* Quick Actions */}
                    <StudentQuickActions
                    />
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard;