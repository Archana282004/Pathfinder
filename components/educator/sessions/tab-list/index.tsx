import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UpcomingSessionTab from "./upcoming-session-tab"
import CompletedSessionTab from "./completed-session-tab"
import CancelledSessionTab from "./cancelled-session-tab";

interface Session {
  id: string;
  title: string;
  educatorId: string;
  educatorName: string;
  studentId: string;
  studentName: string;
  date: string;
  time: string;
  duration: number;
  status: string;
  type: string;
  meetingLink?: string; 
  notes?: string;
}

interface SessionsProps {
  upcomingSessions: Session[];
  completedSessions: Session[];
  cancelledSessions: Session[];
  expiredSessions:Session[];
}

export default function TabList({ upcomingSessions, completedSessions, cancelledSessions, expiredSessions }: SessionsProps){
    return(
            <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming ({upcomingSessions.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedSessions.length})</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled ({cancelledSessions.length})</TabsTrigger>
              <TabsTrigger value="expired">Expired ({expiredSessions.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingSessions.map((session,index) => (
                <UpcomingSessionTab 
                key={index}
                session={session}
                />
              ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {completedSessions.map((session, index) => (
               <CompletedSessionTab 
               key={index}
               session={session}
               />
              ))}
            </TabsContent>


            <TabsContent value="cancelled" className="space-y-4">
              {cancelledSessions.map((session, index) => (
               <CancelledSessionTab 
               key={index}
               session={session}
               />
              ))}
            </TabsContent>

            <TabsContent value="expired" className="space-y-4">
              {expiredSessions.map((session, index) => (
               <CancelledSessionTab 
               key={index}
               session={session}
               />
              ))}
            </TabsContent>
          </Tabs>

          

          
    )
}