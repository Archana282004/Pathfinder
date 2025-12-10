"use client"

import { Button } from "@/src/components/ui/button";
import { CardContent } from "@/src/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface UpcomingSessionsListProps {
    upcomingSessions: {
        duration_min: number,
        educator: {
            first_name: string,
            last_name: string
        },
        id: string,
        scheduled_at_start_time: string,
        title: string
    }[];
}
const UpcomingSessionTab = ({ upcomingSessions }: UpcomingSessionsListProps) => {
    return (
        <CardContent className="space-y-4">
            {upcomingSessions.map((session) => (
                <div key={session.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                        <p className="font-medium">{session.title}</p>
                        <p className="text-sm text-muted-foreground">{session.educator.first_name + " " + session.educator.last_name}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(session.scheduled_at_start_time).toLocaleString("en-US", {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true
                                }).replace(",", " at")}

                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {session.duration_min} min
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <Button className="w-full" asChild>
                <Link href="/educator/sessions">View All Sessions</Link>
            </Button>
        </CardContent>
    )
}

export default UpcomingSessionTab;