import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import UpcomingSessionsCard from "./upcoming-sessions"

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
            <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled counseling sessions</CardDescription>
            </CardHeader>
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