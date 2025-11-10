
import RecentMesaages from "./recent-messages";
import UpcomingSession from "./upcoming-sessions";

interface Session {
    id: string;
    title: string;
    educatorId: string;
    educatorName: string;
    studentId: string;
    studentName: string;
    date: string;
    time: string;
    duration: number;
    status: string;
    type: string;
    meetingLink?: string;
    notes: string;
}

interface Message {
    id: string;
    from: string;
    message: string;
    time: string;
}

interface DashboardMainGridProps {
    upcomingSessions: Session[]
    recentMessages: Message[]
}

export default function DashboardMainGrid({
    upcomingSessions,
    recentMessages,
}: DashboardMainGridProps) {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* Upcoming Sessions */}
            <UpcomingSession upcomingSessions={upcomingSessions} />
            {/* Recent Messages */}
            <RecentMesaages recentMessages={recentMessages} />
        </div>
    )
}