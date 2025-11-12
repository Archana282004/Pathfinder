import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StudentOverviewCards } from "@/lib/mock-data"
import { Calendar, MessageSquare, Wallet, CheckCircle2 } from "lucide-react"
import OverviewCards from "../cards/overviewcards"

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

interface StatsGridProps {
  upcomingSessions: Session[]
  completedSessionsCount: number
  tokenBalance: number
  unreadMessages: number
}


export default function StatsGrid({upcomingSessions, completedSessionsCount, tokenBalance, unreadMessages}:StatsGridProps){
    return(
         <div className="grid gap-4 md:grid-cols-4">
            {StudentOverviewCards.map((card,index)=>(
              <OverviewCards
              key={index}
              title={card.title}
              icon={card.icon}
              cardcontent={card.cardcontent}
              data={card.data}
              />
            ))}
          </div>
    )
}