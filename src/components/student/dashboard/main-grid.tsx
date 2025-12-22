"use client"

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
    upcomingSessions: Session[]
}

const DashboardMainGrid = ({ recentMessages, upcomingSessions }: DashboardMainGridProps) => {

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