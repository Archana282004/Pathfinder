"use client"

import { EducatorNav } from "@/components/navigation/educator-nav"
import { mockSessions } from "@/lib/mock-data"
import TabList from "./tablist"

export default function EducatorSessions() {
  const upcomingSessions = mockSessions.filter((s) => s.status === "upcoming" && s.educatorId === "edu-1")
  const completedSessions = mockSessions.filter((s) => s.status === "completed" && s.educatorId === "edu-1")

  return (
    <div className="min-h-screen bg-background">
      <EducatorNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Session Management</h1>
            <p className="text-muted-foreground">Manage your counseling sessions and schedule</p>
          </div>
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
