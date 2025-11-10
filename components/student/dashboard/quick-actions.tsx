import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, Wallet, BookOpen } from "lucide-react"
import Link from "next/link"

export default function StudentQuickActions(){
    return(
        <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
                  <Link href="/student/sessions">
                    <Calendar className="w-6 h-6" />
                    Book Session
                  </Link>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
                  <Link href="/student/chat">
                    <MessageSquare className="w-6 h-6" />
                    Send Message
                  </Link>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
                  <Link href="/student/wallet">
                    <Wallet className="w-6 h-6" />
                    Add Tokens
                  </Link>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
                  <Link href="/student/resources">
                    <BookOpen className="w-6 h-6" />
                    Browse Resources
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
    )
}