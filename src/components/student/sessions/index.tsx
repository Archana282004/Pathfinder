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

  useEffect(() => {
          if (!userId) return;
          const fetchUpcomingSessions = async () => {
              const sessionsresponse = await getSessions_Action({ input: { filter: "UPCOMING" } })
              setUpcoming(sessionsresponse?.getSessions ?? null)
          }

          const fetchCompletedSessions = async () => {
              const sessionsresponse = await getSessions_Action({ input: { filter: "COMPLETED" } })
              setCompleted(sessionsresponse?.getSessions ?? null)
          }

           const fetchCancelledSessions = async () => {
              const sessionsresponse = await getSessions_Action({ input: { filter: "CANCELLED" } })
              setCancelled(sessionsresponse?.getSessions ?? null)
          }

          const fetchExpiredSessions = async () => {
              const sessionsresponse = await getSessions_Action({ input: { filter: "EXPIRED" } })
              setExpired(sessionsresponse?.getSessions ?? null)
          }

          fetchUpcomingSessions();
          fetchCompletedSessions();
          fetchCancelledSessions();
          fetchExpiredSessions();
      }, []);

  return (
    <div className="min-h-screen bg-background">
      <StudentNav />
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
          />

        </div>
      </div>
    </div>
  )
}

export default StudentSessions;