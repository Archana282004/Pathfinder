"use client"

import { Card, CardContent } from "@/src/components/ui/card";
import { Calendar, Clock, User } from "lucide-react"

interface Sessions {
  session: {
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
}

export default function CancelledSessionTab({ session }: Sessions) {
  return (
    <Card key={session.id}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">{session.title ?? "Counselling Session"}</h3>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <User className="w-4 h-4" />
                  {session.student.first_name + " " + session.student.last_name}
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
        </div>
      </CardContent>
    </Card>
  )
}