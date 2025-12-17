"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import UpcomingSessionTab from "./upcoming-session-tab"
import CompletedSessionTab from "./completed-session-tab"
import CancelledSessionTab from "./cancelled-session-tab";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { useState } from "react";

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

interface TablistProps {
  upcomingSessions: SessionsProps | null;
  completedSessions: SessionsProps | null;
  cancelledSessions: SessionsProps | null;
  expiredSessions: SessionsProps | null;
  handleLoadMore: (activeTab: string) => void

}

export default function TabList({ upcomingSessions, completedSessions, cancelledSessions, expiredSessions, handleLoadMore }: TablistProps) {
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
        {upcomingSessions?.sessions.map((session, index) => (
          <UpcomingSessionTab
            key={index}
            session={session}
          />
        ))}
        {upcomingSessions?.sessions.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">No upcoming sessions found.</p>
            </CardContent>
          </Card>
        )}
        {upcomingSessions?.sessions.length != 0 && (
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => handleLoadMore(activeTab)}>Load More</Button>
          </div>
        )}
      </TabsContent>

      <TabsContent value="completed" className="space-y-4">
        {completedSessions?.sessions.map((session, index) => (
          <CompletedSessionTab
            key={index}
            session={session}
          />
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
        {cancelledSessions?.sessions.map((session, index) => (
          <CancelledSessionTab
            key={index}
            session={session}
          />
        ))}
        {
          cancelledSessions?.sessions.length === 0 && (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">No cancelled sessions found.</p>
              </CardContent>
            </Card>
          )
        }
        {cancelledSessions?.sessions.length != 0 && (
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => handleLoadMore(activeTab)}>Load More</Button>
          </div>
        )}
      </TabsContent>

      <TabsContent value="expired" className="space-y-4">
        {expiredSessions?.sessions.map((session, index) => (
          <CancelledSessionTab
            key={index}
            session={session}
          />
        ))}
        {
          expiredSessions?.sessions.length === 0 && (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">No expired sessions found.</p>
              </CardContent>
            </Card>
          )
        }
        {expiredSessions?.sessions.length != 0 && (
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => handleLoadMore(activeTab)}>Load More</Button>
          </div>
        )}  
      </TabsContent>
    </Tabs>




  )
}