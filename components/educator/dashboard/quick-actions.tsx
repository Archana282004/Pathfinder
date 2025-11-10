import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, DollarSign, Clock } from "lucide-react"
import Link from "next/link"
export default function EducatorQuickActions(){
     return(
        <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
                  <Link href="/educator/sessions">
                    <Calendar className="w-6 h-6" />
                    View Schedule
                  </Link>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
                  <Link href="/educator/chat">
                    <MessageSquare className="w-6 h-6" />
                    Message Students
                  </Link>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
                  <Link href="/educator/availability">
                    <Clock className="w-6 h-6" />
                    Set Availability
                  </Link>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
                  <Link href="/educator/earnings">
                    <DollarSign className="w-6 h-6" />
                    View Earnings
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
     )
}