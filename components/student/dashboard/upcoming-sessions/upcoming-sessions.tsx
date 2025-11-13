import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface Session {
    session: {
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

}
const UpcomingSessionsCard = ({ session }: Session) => {
    return (
        <div key={session.id} className="flex items-start justify-between p-4 border rounded-lg">
            <div className="space-y-1">
                <p className="font-medium">{session.title}</p>
                <p className="text-sm text-muted-foreground">{session.educatorName}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(session.date).toLocaleDateString()} at {session.time}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {session.duration} min
                    </span>
                </div>
            </div>
            <Button size="sm" variant="outline">
                View
            </Button>
        </div>
    )
}

export default UpcomingSessionsCard;