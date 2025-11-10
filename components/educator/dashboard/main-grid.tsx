
import Availability from "./availability";
import UpcomingSessions from "./upcoming-sessions";

interface UpcomingSessionsListProps {
    upcomingSessions: {
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
    }[];
}

export default function DashboardMainGrid({ upcomingSessions }: UpcomingSessionsListProps) {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* Upcoming Sessions */}
            <UpcomingSessions upcomingSessions={upcomingSessions}/>
            {/* Availability */}
            <Availability />
        </div>
    )
}