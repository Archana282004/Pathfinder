
import { useAppSelector } from "@/src/store/hooks";
import RecentMesaages from "./recent-messages";
import UpcomingSession from "./upcoming-sessions";
import { useEffect, useState } from "react";
import { getSessions_Action } from "@/src/utils/graphql/sessions/action";

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

interface Message {
    id: string;
    from: string;
    message: string;
    time: string;
}

interface DashboardMainGridProps {
    recentMessages: Message[]
}

const DashboardMainGrid = ({recentMessages}: DashboardMainGridProps) => {
const user = useAppSelector((state) => state.auth.user);
    const userId = user?.id;


    const [upcomingSessions, setUpcomingSessions] = useState<Session[]>([]);



    useEffect(() => {
        if (!userId) return;
        const fetchStudentUpcomingSessions = async () => {
            const sessionsresponse = await getSessions_Action({ input: { filter: "UPCOMING" } })
            setUpcomingSessions(sessionsresponse?.getSessions?.sessions ?? [])
        }
        fetchStudentUpcomingSessions();
    }, []);


    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* Upcoming Sessions */}
            <UpcomingSession upcomingSessions={upcomingSessions} />
            {/* Recent Messages */}
            <RecentMesaages recentMessages={recentMessages} />
        </div>
    )
}

export default DashboardMainGrid;