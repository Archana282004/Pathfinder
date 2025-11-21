"use client"

import  EducatorNav  from "@/components/navigation/educator-nav"
import { mockSessions } from "@/lib/mock-data"
import TabList from "./tab-list"
import Header from "@/components/ui/header"

export default function EducatorSessions() {
  const upcomingSessions = mockSessions.filter((s) => s.status === "upcoming" && s.educatorId === "edu-1")
  const completedSessions = mockSessions.filter((s) => s.status === "completed" && s.educatorId === "edu-1")
  const cancelledSessions = mockSessions.filter((s) => s.status === "cancelled" && s.educatorId === "edu-1")
  const expiredSessions = mockSessions.filter((s) => s.status === "expired" && s.educatorId === "edu-1")

  return (
    <div className="min-h-screen bg-background">
      <EducatorNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Header heading="Session Management" description="Manage your counseling sessions and schedule" />
            {/*TabList*/}
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
