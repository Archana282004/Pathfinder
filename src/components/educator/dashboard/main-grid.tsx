"use client"

import { useEffect, useState } from "react";
import UpcomingSessions from "./upcoming-sessions";
import { getEducatorAvalability_Action } from "@/src/utils/graphql/availability/action";
import Availability from "./availability";
import { useAppSelector } from "@/src/store/hooks";
import { getSessions_Action } from "@/src/utils/graphql/sessions/action";
import { EducatorAvailabilityType, UpcomingSessionsType } from "@/src/types/Educatortypes";

interface DashboardMainGridProps{
    educatoravailability:EducatorAvailabilityType[];
    upcomingSessions:UpcomingSessionsType[]
}
const DashboardMainGrid = ({educatoravailability, upcomingSessions}:DashboardMainGridProps) => {
       
    return (
        <div className="grid gap-6 md:grid-cols-2">
            <UpcomingSessions upcomingSessions={upcomingSessions} />
            <Availability availability={educatoravailability} />
        </div>
    )
}


export default DashboardMainGrid;