"use client"

import StudentNav from "@/src/components/navigation/student-nav"
import { Button } from "@/src/components/ui/button"
import { mockSessions } from "@/src/lib/mock-data"
import TabList from "./tablist"
import Header from "@/src/components/ui/header"
import Link from "next/link"

const StudentSessions = () => {
  const upcomingSessions = mockSessions.filter((s) => s.status === "upcoming" && s.studentId === "stu-1")
  const completedSessions = mockSessions.filter((s) => s.status === "completed" && s.studentId === "stu-1")
  const cancelledSessions = mockSessions.filter((s) => s.status === "cancelled" && s.studentId === "stu-1")
  const expiredSessions = mockSessions.filter((s) => s.status === "expired" && s.studentId === "stu-1")

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
          upcomingSessions={upcomingSessions}
          completedSessions={completedSessions}
          cancelledSessions={cancelledSessions}
          expiredSessions={expiredSessions}
          />
          
        </div>
      </div>
    </div>
  )
}

export default StudentSessions;