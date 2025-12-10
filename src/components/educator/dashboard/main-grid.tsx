"use client"

import { useEffect, useState } from "react";
import UpcomingSessions from "./upcoming-sessions";
import { getEducatorAvalability_Action } from "@/src/utils/graphql/availability/action";
import Availability from "./availability";
import { useAppSelector } from "@/src/store/hooks";
import { getSessions_Action } from "@/src/utils/graphql/sessions/action";


interface availabiltyProps {
    dayOfWeek: string,
    startTime: string,
    endTime: string
}
interface upcomingSessionsProps {
            duration_min: number,
            educator: {
                first_name: string,
                last_name: string
            },
            id:string,
            scheduled_at_start_time: string,
            title: string
}
const DashboardMainGrid = () => {
    const user = useAppSelector((state) => state.auth.user);
    const userId = user?.id;


    const [educatoravailability, setAvailability] = useState<availabiltyProps[]>([]);
    const [upcomingSessions, setUpcomingSessions] = useState<upcomingSessionsProps[]>([]);



    useEffect(() => {
        if (!userId) return;
        const fetchEduAvailability = async () => {
            const response = await getEducatorAvalability_Action();
            setAvailability(response?.GetEducatorAvailability?.availabilityDays.slice(0,3) ?? []);
        }
        const fetchEduUpcomingSessions = async () => {
            const sessionsresponse = await getSessions_Action({ input: { filter: "UPCOMING" } })
            setUpcomingSessions(sessionsresponse?.getSessions?.sessions ?? [])
        }
        fetchEduAvailability();
        fetchEduUpcomingSessions();
    }, []);

    return (
        <div className="grid gap-6 md:grid-cols-2">
            <UpcomingSessions upcomingSessions={upcomingSessions} />
            <Availability availability={educatoravailability} />
        </div>
    )
}


export default DashboardMainGrid;