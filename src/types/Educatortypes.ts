export type EducatorAvailabilityType = {
    dayOfWeek: string,
    startTime: string,
    endTime: string
}

export type UpcomingSessionsType = {
    duration_min: number,
    educator: {
        first_name: string,
        last_name: string
    },
    id: string,
    scheduled_at_start_time: string,
    title: string
}

export type EducatorDashboardType = {
    totalEarnings: number,
    sessionsThisWeek: number,
    activeStudents: number
}