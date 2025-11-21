import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Video, User } from "lucide-react"


interface Session {
 session:{
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
}
export default function CancelledSessionTab({session}:Session){
    return(
         <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold">{session.title}</h3>
                            <p className="text-muted-foreground flex items-center gap-2 mt-1">
                              <User className="w-4 h-4" />
                              {session.studentName}
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
                          <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                            <strong>Notes:</strong> {session.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
    )
}