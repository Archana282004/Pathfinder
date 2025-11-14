import { Card } from "@/components/ui/card"
import UpcomingSessionTab from "./upcoming-sessions-tab";
import CardsHeader from "@/components/ui/card-header";

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
const UpcomingSessions = ({ upcomingSessions }: UpcomingSessionsListProps) => {
    return (
        <Card>
            <CardsHeader title="Upcoming Sessions" description="Your scheduled counseling sessions" />
            <UpcomingSessionTab
                upcomingSessions={upcomingSessions}
            />
        </Card>

    )
}

export default UpcomingSessions;