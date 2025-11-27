import { Card, CardContent} from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import UpcomingSessionsCard from "./upcoming-sessions"
import CardsHeader from "@/src/components/ui/card-header"

interface Session {
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
    }[]

}


const UpcomingSession = ({ upcomingSessions }: Session) => {
    return (
        <Card>
            <CardsHeader title="Upcoming Sessions" description="Your scheduled counseling sessions" />
            <CardContent className="space-y-4">
                {upcomingSessions.map((session, index) => (
                    <UpcomingSessionsCard
                        key={index}
                        session={session}
                    />
                ))}
                <Button className="w-full" asChild>
                    <Link href="/student/sessions">View All Sessions</Link>
                </Button>
            </CardContent>
        </Card>
    )
}

export default UpcomingSession;