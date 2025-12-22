
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


export type Users = {
  id: string;
  active_status: boolean;
  created_at: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  platform: string;
  role: string;
  avatar_path: string;
  profile: {
    specizilization: string;
  };
}

export type AllUsers =  {
  totalEducators: number;
  totalStudents: number;
  totalUsers: number;
  items: Users[];
}

export type Paginationtype = {
  page: number;
  limit: number;
  role?: string;
  search:string;
}