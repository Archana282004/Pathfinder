"use client"

import { mockChatConversations } from "@/src/lib/mock-data"
import StatsGrid from "./stats-grid"
import StudentQuickActions from "./quick-actions"
import DashboardMainGrid from "./main-grid"
import Header from "@/src/components/ui/header"
import { StudentDashboardDataType } from "@/src/types/Studenttypes"

interface Session {
    duration_min: number,
    educator: {
        first_name: string,
        last_name: string
    },
    id: string,
    scheduled_at_start_time: string,
    title: string
}

interface StudentDashboardProps{
    user:any;
    dashboardData: StudentDashboardDataType;
    upcomingSessions:Session[]
}
const StudentDashboard = ({user, dashboardData, upcomingSessions}:StudentDashboardProps) => {

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
                        upcomingSessions={upcomingSessions}
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