"use client"

import { StudentNav } from "@/components/navigation/student-nav"
import { Button } from "@/components/ui/button"
import { mockSessions, mockEducators } from "@/lib/mock-data"
import TabList from "./tablist"
import Title from "../title"

export default function StudentSessions() {
  const upcomingSessions = mockSessions.filter((s) => s.status === "upcoming" && s.studentId === "stu-1")
  const completedSessions = mockSessions.filter((s) => s.status === "completed" && s.studentId === "stu-1")

  return (
    <div className="min-h-screen bg-background">
      <StudentNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Title heading="My Sessions" description="View and manage your counseling sessions" />
            <Button>Book New Session</Button>
          </div>
          {/*Tab List */}
          <TabList 
          upcomingSessions={upcomingSessions}
          completedSessions={completedSessions}
          mockEducators={mockEducators}
          />
          
        </div>
      </div>
    </div>
  )
}
