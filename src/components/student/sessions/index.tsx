"use client"

import StudentNav from "@/src/components/navigation/student-nav"
import { Button } from "@/src/components/ui/button"
import TabList from "./tablist"
import Header from "@/src/components/ui/header"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useAppSelector } from "@/src/store/hooks"
import { getSessions_Action } from "@/src/utils/graphql/sessions/action"

interface Sessions {
  id: string,
  description: string | null,
  duration_min: number,
  educator: {
    profile: {
      specialization: string
    },
    first_name: string,
    last_name: string
  },
  scheduled_at_start_time: string,
  title: string,
}
interface StudentSessionsProps {
  sessions: Sessions[],
  completedCount: number,
  canceledCount: number,
  upcomingCount: number,
  expiredCount: number
}
const StudentSessions = () => {

  const initialData = {
    sessions: [],
    completedCount: 0,
    canceledCount: 0,
    upcomingCount: 0,
    expiredCount: 0
  }
  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.id;
  const [upcoming, setUpcoming] = useState<StudentSessionsProps | null>(initialData);
  const [completed, setCompleted] = useState<StudentSessionsProps | null>(initialData);
  const [cancelled, setCancelled] = useState<StudentSessionsProps | null>(initialData);
  const [expired, setExpired] = useState<StudentSessionsProps | null>(initialData);

  const [upcomingPagination, setUpcomingPagination] = useState({ page: 1, limit:10, filter:"UPCOMING" });
  const [completedPagination, setCompletedPagination] = useState({ page: 1, limit:10, filter:"COMPLETED" });
  const [cancelledPagination, setCancelledPagination] = useState({ page: 1, limit:10, filter:"CANCELLED" });
  const [expiredPagination, setExpiredPagination] = useState({ page: 1, limit:10, filter:"EXPIRED" });

  useEffect(() => {
          if (!userId) return;
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

          fetchUpcomingSessions();
          fetchCompletedSessions();
          fetchCancelledSessions();
          fetchExpiredSessions();
      }, [upcomingPagination, completedPagination, cancelledPagination, expiredPagination, userId]);

      const handleLoadMore = (activeTab:string) =>{
        if (activeTab === "upcoming") {
          setUpcomingPagination((prev) => ({ ...prev, limit: prev.limit + 10 }));
        } else if (activeTab === "completed") {
          setCompletedPagination((prev) => ({ ...prev, limit: prev.limit + 10 }));
        } else if (activeTab === "cancelled") {
          setCancelledPagination((prev) => ({ ...prev, limit: prev.limit + 10 }));
        } else if (activeTab === "expired") {
          setExpiredPagination((prev) => ({ ...prev, limit: prev.limit + 10 }));
        }
      }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Header heading="My Sessions" description="View and manage your counseling sessions" />
            <Link href="/student/sessions/book-session">
              <Button >Book New Session</Button>
            </Link>
          </div>
          {/*Tab List */}
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

export default StudentSessions;