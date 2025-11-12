"use client"

import { EducatorNav } from "@/components/navigation/educator-nav"
import { mockSessions } from "@/lib/mock-data"
import TabList from "./tablist"
import Title from "../title"

export default function EducatorSessions() {
  const upcomingSessions = mockSessions.filter((s) => s.status === "upcoming" && s.educatorId === "edu-1")
  const completedSessions = mockSessions.filter((s) => s.status === "completed" && s.educatorId === "edu-1")

  return (
    <div className="min-h-screen bg-background">
      <EducatorNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Title heading="Session Management" description="Manage your counseling sessions and schedule" />
            {/*TabList*/}
            <TabList 
            upcomingSessions={upcomingSessions}
            completedSessions={completedSessions}
            />
      
        </div>
      </div>
    </div>
  )
}
