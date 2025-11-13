import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, DollarSign, Clock } from "lucide-react"
import Link from "next/link"
import QuickActionTab from "./quick-actions-tab"
import { EducatorQuickActionsData } from "@/lib/mock-data"
export default function EducatorQuickActions(){
     return(
        <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                {EducatorQuickActionsData.map((card,index)=>(
                  <QuickActionTab 
                  key={index}
                  link={card.link}
                  icon={card.icon}
                  data={card.data}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
     )
}