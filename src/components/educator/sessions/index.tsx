"use client"

import EducatorNav from "@/src/components/navigation/educator-nav"
import TabList from "./tab-list"
import Header from "@/src/components/ui/header"
import { useAppSelector } from "@/src/store/hooks"
import { useEffect, useState } from "react"
import { getSessions_Action } from "@/src/utils/graphql/sessions/action"

interface Sessions {
  id: string,
  description: string | null,
  duration_min: number,
  student: {
    first_name: string,
    last_name: string
  },
  scheduled_at_start_time: string,
  title: string,
}
interface SessionsProps {
  sessions: Sessions[],
  completedCount: number,
  canceledCount: number,
  upcomingCount: number,
  expiredCount: number
}

interface EducatorSessionsProps {
  UpcomingSessions:SessionsProps;
  CancelledSessions:SessionsProps;
  ExpiredSessions:SessionsProps;
  CompletedSessions:SessionsProps
}

export default function EducatorSessions({UpcomingSessions, CancelledSessions, ExpiredSessions, CompletedSessions}:EducatorSessionsProps) {
  const initialData = {
    sessions: [],
    completedCount: 0,
    canceledCount: 0,
    upcomingCount: 0,
    expiredCount: 0
  }
  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.id;
  const [upcoming, setUpcoming] = useState<SessionsProps | null>(UpcomingSessions);
  const [completed, setCompleted] = useState<SessionsProps | null>(CompletedSessions);
  const [cancelled, setCancelled] = useState<SessionsProps | null>(CancelledSessions);
  const [expired, setExpired] = useState<SessionsProps | null>(ExpiredSessions);

  const [upcomingPagination, setUpcomingPagination] = useState({ page: 1, limit: 10, filter: "UPCOMING" });
  const [completedPagination, setCompletedPagination] = useState({ page: 1, limit: 10, filter: "COMPLETED" });
  const [cancelledPagination, setCancelledPagination] = useState({ page: 1, limit: 10, filter: "CANCELLED" });
  const [expiredPagination, setExpiredPagination] = useState({ page: 1, limit: 10, filter: "EXPIRED" });



    const fetchUpcomingSessions = async () => {
      const sessionsresponse = await getSessions_Action({ input: { ...upcomingPagination } })
      setUpcoming(sessionsresponse?.getSessions ?? null)
    }

    const fetchCompletedSessions = async () => {
      const sessionsresponse = await getSessions_Action({ input: { ...completedPagination } })
      setCompleted(sessionsresponse?.getSessions ?? null)
    }

    const fetchCancelledSessions = async () => {
      const sessionsresponse = await getSessions_Action({ input: { ...cancelledPagination } })
      setCancelled(sessionsresponse?.getSessions ?? null)
    }

    const fetchExpiredSessions = async () => {
      const sessionsresponse = await getSessions_Action({ input: { ...expiredPagination } })
      setExpired(sessionsresponse?.getSessions ?? null)
    }

   

  const handleLoadMore = (activeTab: string) => {
    if (activeTab === "upcoming") {
      setUpcomingPagination((prev) => ({ ...prev, limit: prev.limit + 10 }));
      fetchUpcomingSessions();
    } else if (activeTab === "completed") {
      setCompletedPagination((prev) => ({ ...prev, limit: prev.limit + 10 }));
      fetchCompletedSessions();
    } else if (activeTab === "cancelled") {
      setCancelledPagination((prev) => ({ ...prev, limit: prev.limit + 10 }));
      fetchCancelledSessions();
    } else if (activeTab === "expired") {
      setExpiredPagination((prev) => ({ ...prev, limit: prev.limit + 10 }));
      fetchExpiredSessions();
    }
  }


  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Header heading="Session Management" description="Manage your counseling sessions and schedule" />
          {/*TabList*/}
          <TabList
            upcomingSessions={upcoming}
            completedSessions={completed}
            cancelledSessions={cancelled}
            expiredSessions={expired}
            handleLoadMore={handleLoadMore}
          />

        </div>
      </div>
    </div>
  )
}
