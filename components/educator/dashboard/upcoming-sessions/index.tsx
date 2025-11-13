import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import UpcomingSessionTab from "./upcoming-sessions-tab";

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
export default function UpcomingSessions({upcomingSessions}:UpcomingSessionsListProps){
    return(
        <Card>
                <CardHeader>
                    <CardTitle>Upcoming Sessions</CardTitle>
                    <CardDescription>Your scheduled counseling sessions</CardDescription>
                </CardHeader>
               <UpcomingSessionTab 
               upcomingSessions={upcomingSessions}
               />
            </Card>

    )
}