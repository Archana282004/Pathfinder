
export type sessionStatusType = {
    cancelled: number;
    completed: number;
    upcoming: number;
    expired: number;
}
export type userOverviewType = {
    educators: number;
    students: number;
    total: number;
}

export type adminCardsType = {
    growthRate: number;
    activeSessions: number;
    revenue: number;
    totalusers: number;
}

export type adminRecentUsersType = {
    id: string;
    first_name: string;
    last_name: string;
    role: string;
    created_at: string;
}

export type Settingstype = {
  default_admin_token: number,
    cancellation_time: {
      hours: number,
      minutes: number
    },
    reschedule_time: {
      hours: number,
      minutes: number
    },
    session_amount: string
}