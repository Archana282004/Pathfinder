import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, Wallet, BookOpen } from "lucide-react"
import Link from "next/link"
import { StudentQuickActionsData } from "@/lib/mock-data"
import QuickActionCard from "./quick-actions-card"

export default function StudentQuickActions(){
    return(
        <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                {StudentQuickActionsData.map((card, index)=>(
                  <QuickActionCard 
                  key={index}
                  link={card.link}
                  data={card.data}
                  icon={card.icon}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
    )
}