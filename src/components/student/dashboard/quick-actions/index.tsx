"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import { StudentQuickActionsData } from "@/src/lib/mock-data"
import QuickActionCard from "./quick-actions-card"
import CardsHeader from "@/src/components/ui/card-header"

const StudentQuickActions = () =>{
    return(
        <Card>
            <CardsHeader title="Quick Actions" description="Common tasks and resources"/>
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

export default StudentQuickActions;