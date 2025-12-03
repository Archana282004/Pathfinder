
import { useEffect, useState } from "react";
import UpcomingSessions from "./upcoming-sessions";
import { getEducatorAvalability_Action } from "@/src/utils/graphql/availability/action";
import Availability from "./availability";

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
interface availabiltyProps{
    dayOfWeek: string,
    startTime: string,
    endTime: string
}
const DashboardMainGrid = ({ upcomingSessions }: UpcomingSessionsListProps) => {

    const [educatoravailability, setAvailability] = useState<availabiltyProps[]>([]);

    useEffect(() => { 
        const fetchEduAvailability = async () => {
            const response = await getEducatorAvalability_Action(); 
            setAvailability(response?.GetEducatorAvailability ?? []);
        }
        fetchEduAvailability();
    }, []);

    return (
        <div className="grid gap-6 md:grid-cols-2">
            <UpcomingSessions upcomingSessions={upcomingSessions}/>
            <Availability availability={educatoravailability} />
        </div>
    )
}


export default DashboardMainGrid;