import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Calendar, Clock, Video, User } from "lucide-react"

interface Session {
  id: string
  title: string
  educatorId: string
  educatorName: string
  studentId: string
  studentName: string
  date: string
  time: string
  duration: number
  status: string
  type: string
  meetingLink?: string 
  notes: string
}

interface MainGridProps {
  upcomingSessions: Session[]
  completedSessions: Session[]
  cancelledSessions:Session[]
  expiredSessions:Session[]

}

const TabList = ({upcomingSessions, completedSessions, cancelledSessions, expiredSessions}:MainGridProps) => {
    return(
        <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming ({upcomingSessions.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedSessions.length})</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled ({cancelledSessions.length})</TabsTrigger>
              <TabsTrigger value="expired">Expired ({expiredSessions.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold">{session.title}</h3>
                            <p className="text-muted-foreground flex items-center gap-2 mt-1">
                              <User className="w-4 h-4" />
                              {session.educatorName}
                            </p>
                          </div>
                          <Badge>{session.type}</Badge>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(session.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {session.time} ({session.duration} min)
                          </span>
                        </div>
                        {session.notes && (
                          <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                            <strong>Notes:</strong> {session.notes}
                          </p>
                        )}
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
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {completedSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold">{session.title}</h3>
                            <p className="text-muted-foreground flex items-center gap-2 mt-1">
                              <User className="w-4 h-4" />
                              {session.educatorName}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(session.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {session.time} ({session.duration} min)
                          </span>
                        </div>
                        {session.notes && (
                          <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">{session.notes}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

             <TabsContent value="cancelled" className="space-y-4">
              {cancelledSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold">{session.title}</h3>
                            <p className="text-muted-foreground flex items-center gap-2 mt-1">
                              <User className="w-4 h-4" />
                              {session.educatorName}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(session.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {session.time} ({session.duration} min)
                          </span>
                        </div>
                        {session.notes && (
                          <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">{session.notes}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

             <TabsContent value="expired" className="space-y-4">
              {expiredSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold">{session.title}</h3>
                            <p className="text-muted-foreground flex items-center gap-2 mt-1">
                              <User className="w-4 h-4" />
                              {session.educatorName}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(session.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {session.time} ({session.duration} min)
                          </span>
                        </div>
                        {session.notes && (
                          <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">{session.notes}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
    )
}

export default TabList;