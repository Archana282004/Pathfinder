"use client"

import { StudentNav } from "@/components/navigation/student-nav"
import { mockSessions, mockChatConversations, mockWalletTransactions } from "@/lib/mock-data"
import StatsGrid from "./stats-grid"
import StudentQuickActions from "./quick-actions"
import DashboardMainGrid from "./main-grid"

export default function StudentDashboard() {
    const upcomingSessions = mockSessions.filter((s) => s.status === "upcoming" && s.studentId === "stu-1").slice(0, 2)

    const completedSessionsCount = mockSessions.filter((s) => s.status === "completed" && s.studentId === "stu-1").length

    const recentMessages = mockChatConversations.slice(0, 2).map((conv) => ({
        id: conv.id,
        from: conv.participantName,
        message: conv.lastMessage,
        time: conv.lastMessageTime,
    }))

    const tokenBalance = mockWalletTransactions.reduce((sum, txn) => sum + txn.tokens, 0)
    const unreadMessages = mockChatConversations.reduce((sum, conv) => sum + conv.unread, 0)

    return (
        <div className="min-h-screen bg-background">
            <StudentNav />
            <div className="container mx-auto px-4 py-8">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold">Welcome back, Emma!</h1>
                        <p className="text-muted-foreground">Here's what's happening with your college journey</p>
                    </div>

                    {/* Stats Grid */}
                    <StatsGrid
                        upcomingSessions={upcomingSessions}
                        completedSessionsCount={completedSessionsCount}
                        tokenBalance={tokenBalance}
                        unreadMessages={unreadMessages}
                    />
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
