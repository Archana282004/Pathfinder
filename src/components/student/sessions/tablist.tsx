"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Calendar, Clock, Video, User } from "lucide-react"
import { useState } from "react"

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
interface SessionsProps {
  sessions: Sessions[],
  completedCount: number,
  canceledCount: number,
  upcomingCount: number,
  expiredCount: number
}

interface MainGridProps {
  upcomingSessions: SessionsProps | null;
  completedSessions: SessionsProps | null;
  cancelledSessions: SessionsProps | null;
  expiredSessions: SessionsProps | null;
  handleLoadMore: (activeTab: string) => void

}

const TabList = ({ upcomingSessions, completedSessions, cancelledSessions, expiredSessions, handleLoadMore }: MainGridProps) => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="space-y-6"
    >
      <TabsList>
        <TabsTrigger value="upcoming">Upcoming ({upcomingSessions?.upcomingCount})</TabsTrigger>
        <TabsTrigger value="completed">Completed ({completedSessions?.completedCount})</TabsTrigger>
        <TabsTrigger value="cancelled">Cancelled ({cancelledSessions?.canceledCount})</TabsTrigger>
        <TabsTrigger value="expired">Expired ({expiredSessions?.expiredCount})</TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming" className="space-y-4">
        {upcomingSessions?.sessions.map((session) => (
          <Card key={session.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{session.title ?? "Counselling Session"}</h3>
                      <p className="text-muted-foreground flex items-center gap-2 mt-1">
                        <User className="w-4 h-4" />
                        {session.educator.first_name + " " + session.educator.last_name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(session.scheduled_at_start_time).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {new Date(session.scheduled_at_start_time).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit"
                      })} ({session.duration_min} min)
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                    <strong>Notes: </strong>
                    {session.description && session.description.trim() !== ""
                      ? session.description
                      : "No descriptions yet"}
                  </p>

                </div>
                <div className="flex flex-col gap-2 ml-4">
                  <Button size="sm">
                    <Video className="w-4 h-4 mr-2" />
                    Join Session
                  </Button>
                  <Button size="sm" variant="outline">
                    Reschedule
                  </Button>
                  <Button size="sm" variant="ghost">
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {upcomingSessions?.sessions.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">No upcoming sessions found.</p>
            </CardContent>
          </Card>
        )}
      </TabsContent>

      <TabsContent value="completed" className="space-y-4">
        {completedSessions?.sessions.map((session) => (
          <Card key={session.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{session.title ?? "Counselling Session"}</h3>
                      <p className="text-muted-foreground flex items-center gap-2 mt-1">
                        <User className="w-4 h-4" />
                        {session.educator.first_name + " " + session.educator.last_name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(session.scheduled_at_start_time).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {new Date(session.scheduled_at_start_time).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit"
                      })}({session.duration_min} min)
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                    <strong>Notes: </strong>
                    {session.description && session.description.trim() !== ""
                      ? session.description
                      : "No descriptions yet"}
                  </p>

                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {completedSessions?.sessions.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">No completed sessions found.</p>
            </CardContent>
          </Card>
        )}
        {completedSessions?.sessions.length != 0 && (
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => handleLoadMore(activeTab)}>Load More</Button>
          </div>
        )}
      </TabsContent>

      <TabsContent value="cancelled" className="space-y-4">
        {cancelledSessions?.sessions.map((session) => (
          <Card key={session.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{session.title ?? "Counselling Session"}</h3>
                      <p className="text-muted-foreground flex items-center gap-2 mt-1">
                        <User className="w-4 h-4" />
                        {session.educator.first_name + " " + session.educator.last_name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(session.scheduled_at_start_time).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {new Date(session.scheduled_at_start_time).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit"
                      })}({session.duration_min} min)
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                    <strong>Notes: </strong>
                    {session.description && session.description.trim() !== ""
                      ? session.description
                      : "No descriptions yet"}
                  </p>

                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {cancelledSessions?.sessions.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">No cancelled sessions found.</p>
            </CardContent>
          </Card>
        )}
        {cancelledSessions?.sessions.length != 0 && (
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => handleLoadMore(activeTab)}>Load More</Button>
          </div>
        )}
      </TabsContent>

      <TabsContent value="expired" className="space-y-4">
        {expiredSessions?.sessions.map((session) => (
          <Card key={session.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{session.title ?? "Counselling Session"}</h3>
                      <p className="text-muted-foreground flex items-center gap-2 mt-1">
                        <User className="w-4 h-4" />
                        {session.educator.first_name + " " + session.educator.last_name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(session.scheduled_at_start_time).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {new Date(session.scheduled_at_start_time).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit"
                      })}({session.duration_min} min)
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                    <strong>Notes: </strong>
                    {session.description && session.description.trim() !== ""
                      ? session.description
                      : "No descriptions yet"}
                  </p>

                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {expiredSessions?.sessions.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">No expired sessions found.</p>
            </CardContent>
          </Card>
        )}
        {expiredSessions?.sessions.length != 0 && (
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => handleLoadMore(activeTab)}>Load More</Button>
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}

export default TabList;